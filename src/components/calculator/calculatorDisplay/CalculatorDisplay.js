import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CalculatorDisplay extends PolymerElement {
  static get template() {
    return html`
      ${getComponentStyle()}

      <div class="h1 display">10000</div>
    `;
  }
  constructor() {
    super();
  }
}

function getComponentStyle() {
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
  `;
}

customElements.define('calculator-display', CalculatorDisplay);
