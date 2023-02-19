import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CalculatorDisplay extends PolymerElement {
  static get template() {
    return html`
      <style>
        .display {
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          flex-direction: column;
          justify-content: center;
        }
      </style>

      <div class="display">100000</div>
    `;
  }
  constructor() {
    super();
  }
}

customElements.define('calculator-display', CalculatorDisplay);
