class App extends HTMLElement {
 constructor() {
   super();
   this.attachShadow({mode: "open"});
   this.shadowRoot.innerHTML = `
     <site-menu>
       <li>Item 1</li>
       <li>Item 2</li>
       <li>Item 3</li>
     </site-menu>
     <div class='stage'>
       <card-adder></card-adder>
     </div>
   `;
 }
}

customElements.define("app-stage", App);
