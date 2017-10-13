class SimpleButton extends HTMLElement {
  constructor(){
    super();
    this.attachShadow({mode: 'open'});
    this.shadowRoot.innerHTML = `
      <style>
        button {
          border: none;
          background: white;
          box-shadow: none;
          font-size: 16px;
        }
      </style>
      <button>Open</button>
    `;
  }
}

customElements.define('simple-button', SimpleButton);
