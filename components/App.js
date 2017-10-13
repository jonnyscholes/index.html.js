class App extends HTMLElement {
 constructor() {
   super();
   const root = this.attachShadow({mode: "open"});
   root.innerHTML = `
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
