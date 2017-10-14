const siteMenuTemplate = document.createElement('template');
siteMenuTemplate.innerHTML = `
  <style>
    :host {}

    simple-button {
      position: absolute;
      top: 20px;
      right: 20px;
    }

    ul {
      transition: 300ms;
      position: absolute;
      top: 0;
      left: 0;
      height: 100%;
      width: 200px;
      list-style: none;
      background: var(--c-dark);
      box-shadow: 0 0 40px var(--c-drop-shadow);
      transform: translateX(-110%);

      margin: 0;
      padding: 20px;
      box-sizing: border-box;
    }

    :host([open]) ul {
      transform: translateX(0);
    }
  </style>
  <simple-button label="Open"></simple-button>
  <ul>
    <slot></slot>
  </ul>
`;

class SiteMenu extends HTMLElement {
  constructor() {
    super();

    this.attachShadow({mode: 'open'});
    this.shadowRoot.appendChild(siteMenuTemplate.content.cloneNode(true));

    this._menuTrigger = this.shadowRoot.querySelector('simple-button');
  }

  connectedCallback() {
    this._menuTrigger.addEventListener('click', this._onMenuClick.bind(this));
  }

  _onMenuClick() {
    if (this.hasAttribute('open')) {
      this.removeAttribute('open');
      this._menuTrigger.setAttribute('label', 'Open');
    } else {
      this.setAttribute('open', '');
      this._menuTrigger.setAttribute('label', 'Close');
    }
  }
}

customElements.define('site-menu', SiteMenu);
