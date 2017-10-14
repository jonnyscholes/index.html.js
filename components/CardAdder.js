 class CardAdder extends ConnectedElement {
  constructor() {
    super();

    this.attachShadow({mode: "open"});
    const globalState = this.getState();

    // TODO Should this be elsewhere in this class for clarity? Ala Component.render from React.
    this.shadowRoot.innerHTML = `
      <simple-card-grid>
        <simple-button label="Add"></simple-button>
        ${globalState.titles.map((title, index) => `
          <simple-card>${title}</simple-card>
        `).join("")}
      </simple-card-grid>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('simple-button').addEventListener('click', this._onAdd.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('simple-button').removeEventListener('click', this._onAdd);
  }

  _onAdd() {
    this.dispatch('addTitle', 'New');
  }
}

customElements.define("card-adder", CardAdder);
