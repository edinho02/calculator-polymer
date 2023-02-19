import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import './calculatorDisplay/CalculatorDisplay';
import './calculatorKeyboard/CalculatorKeyboard';

class Calculator extends PolymerElement {
  static get template() {
    return html`
      <style>
        #calculator {
          color: #fff;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          background: linear-gradient(45deg, #343435, #17191c);
        }

        calculator-display,
        calculator-keyboard {
          width: 100%;
        }

        calculator-display {
          flex: 1;
        }

        #calculator > calculator-keyboard {
          flex: 2;
          border-radius: 15px 15px 0px 0px;
          background: linear-gradient(45deg, #0b233a, #184d68);
        }

        #calculator[light-mode] {
          color: #222;
          background: linear-gradient(45deg, #f9f9f9, #f9f9f9);
        }

        #calculator[light-mode] > calculator-keyboard {
          background: linear-gradient(45deg, #bbd1f2, #8cd5fd);
        }
      </style>

      <div id="calculator" light-mode$="{{lightModeActive}}">
        <calculator-display></calculator-display>
        <calculator-keyboard></calculator-keyboard>
      </div>
    `;
  }
  static get properties() {
    return {
      lightModeActive: {
        type: Boolean,
        value: false,
      },
    };
  }
  constructor() {
    super();
    this.addEventListener('click', this.toggleTheme.bind(this));
  }
  toggleTheme() {
    this.lightModeActive = !this.lightModeActive;
  }
}

customElements.define('calculator-app', Calculator);
