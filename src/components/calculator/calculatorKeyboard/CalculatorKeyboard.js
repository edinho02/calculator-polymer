import { PolymerElement, html } from '@polymer/polymer/polymer-element.js';

class CalculatorKeyboard extends PolymerElement {
  static get template() {
    return html`
      ${getComponentStyle()}

      <div class="keyboard">Click to change calculator theme</div>
    `;
  }
  constructor() {
    super();
  }
}

function getComponentStyle() {
  return html`
    <style>
      .keyboard {
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

customElements.define('calculator-keyboard', CalculatorKeyboard);
