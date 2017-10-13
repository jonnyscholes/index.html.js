 class CardAdder extends ConnectedElement {
  constructor() {
    super();
    const root = this.attachShadow({mode: "open"});
    const state = this.getState();

    root.innerHTML = `
      <simple-card-grid>
        <button>Add</button>
        ${state.titles.map((title, index) => `
          <simple-card>${title}</simple-card>
        `).join("")}
      </simple-card-grid>
    `;
  }

  connectedCallback() {
    this.shadowRoot.querySelector('button').addEventListener('click', this._onAdd.bind(this));
  }

  disconnectedCallback() {
    this.shadowRoot.querySelector('button').removeEventListener('click', this._onAdd);
  }

  _onAdd() {
    this.dispatch('addTitle', 'New');
  }
}

customElements.define("card-adder", CardAdder);
