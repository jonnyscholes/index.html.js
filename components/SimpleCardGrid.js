const SimpleCardGridTemplate = document.createElement('template');
SimpleCardGridTemplate.innerHTML = `
  <style>
    :host {
      box-sizing: border-box;

      display: grid;
      grid-template-columns: 1fr 1fr 1fr;
      grid-template-rows: 1fr 1fr 1fr;

      grid-row-gap:    20px;
      grid-column-gap: 20px;

      padding: 50px;
    }
  </style>
  <slot></slot>
`;

class SimpleCardGrid extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(SimpleCardGridTemplate.content.cloneNode(true));
  }
}

customElements.define('simple-card-grid', SimpleCardGrid);
