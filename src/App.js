import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

import './components/calculator/Calculator';

class Calculator extends PolymerElement {
  static get template() {
    return html`
      ${getComponentStyle()}

      <calculator-app />
    `;
  }
  constructor() {
    super();
  }
}

function getComponentStyle() {
  return html`
    <style>
      calculator-app {
        width: 100%;
        height: 100%;
        min-width: 370px;
        min-height: 550px;
        overflow: hidden;
        border-radius: 0px;
        box-shadow: 0px 0px 8px #222;
      }

      @media (min-width: 700px) {
        calculator-app {
          width: 20%;
          height: 65%;
          border-radius: 15px;
        }
      }
    </style>
  `;
}

customElements.define('app-content', Calculator);
