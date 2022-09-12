class MyCustomElement extends HTMLElement {
  constructor() {
    super();
    this.addEventListener("click", () => alert("Custom Element Clicked"));
  }

  connectedCallback() {
    this.innerHTML = "<h1>Hello Custom Element</h1>";
  }
}

window.customElements.define("my-custom-element", MyCustomElement);
