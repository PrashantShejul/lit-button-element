import { LitElement, html, css } from 'lit-element';

class ButtonElement extends LitElement {
  static get styles() {
    return css`
      :host {
        display: block;
        border: solid 1px gray;
        padding: 16px;
        max-width: 600px;
        background-color:'yellow';
        margin-left: 25%
      }
      .button { 
        display: inline-block;
        padding: 15px 25px;
        font-size: 24px;
        cursor: pointer;
        text-align: center;
        text-decoration: none;
        outline: none;
        color: #fff;
        background-color: #4AA7BD;
        border: none;
        border-radius: 10px;
        width:50% 
      } 
      .button:hover {background-color: #13788C  }

      .button[disabled]:hover {background-color: #8C9192  }
      button[disabled] {
        background-color: rgba(51,51,51,0.22);
        color: rgba(51,51,51,0.66);
      }
    `;
  }
  static get properties() {
    return {
      ButtonName: { type: String },
      count: { type: Number },
      disabled: {
        type: Boolean,
        reflect: true,
      }
    };
  }
  constructor() {
    super();
    this.count = 0;
    this.ButtonName = ''
    this.disabled = false;

  }

  render() {
    return html`
    <button class='button' ?disabled=${this.disabled}  @click=${this._onClick} part="button">
      ${this.ButtonName} ${this.count}
    </button>
  `;
  }
  _onClick() {
    this.count++;
    this.dispatchEvent(new CustomEvent('count-changed'));
  }
}

customElements.define('button-element', ButtonElement);