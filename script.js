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

const templateString = `
    <div>
        <slot name="slot1"></slot>
    </div>
    <form>
        <input/>
    </form>
    <slot name="slot2"></slot>
    `;
    const template = document.createElement('template');
    template.innerHTML = templateString;
    class CustomElement extends HTMLElement {
        constructor() {
            super();
            this.attachShadow({mode: "open"});
            this.shadowRoot
                .appendChild(template.content.cloneNode(true));
        }

    }
    customElements.define('custom-element', CustomElement);