const SimpleCardTemplate = document.createElement('template');
SimpleCardTemplate.innerHTML = `
  <style>
    :host {
      display: block;
      background: var(--c-light);
      border-radius: 4px;
      box-shadow: 0 0 10px var(--c-drop-shadow);
    }

    .image {
      padding-bottom: 45%;
      width: 100%;
      background: radial-gradient(circle at center, grey 0, #444 100%);
    }

    h2 {
      margin: 0;
      padding: 20px;
      font-weight: 100;
      box-sizing: border-box;
    }
  </style>
  <div class="image"></div>
  <h2><slot></slot></h2>
`;

class SimpleCard extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(SimpleCardTemplate.content.cloneNode(true));
  }
}

customElements.define('simple-card', SimpleCard);
