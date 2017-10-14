class SimpleButton extends HTMLElement {
  static get observedAttributes() {
    return ['label'];
  }

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
      <button>${this.getAttribute('label')}</button>
    `;
  }

  attributeChangedCallback(name, oldValue, newValue){
    switch(name) {
      case 'label':
        this.shadowRoot.querySelector('button').innerHTML = this.getAttribute('label');
        break;
    }
  }
}

customElements.define('simple-button', SimpleButton);
