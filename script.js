class MyWelcome extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: "open" });
    this.shadowRoot.innerHTML = `
                <h1>Welcome <span id="username">Developer</span></h1>
                <div><input id="usernameField"></div><br/>
                <div><button id="changeUsername">Change username</button></div>
        `;

    this.userName = this.shadowRoot.querySelector("#username");
    this.input = this.shadowRoot.querySelector("#usernameField");
    this.submitButton = this.shadowRoot.querySelector("#changeUsername");

    this.init();
  }

  init() {
    this.submitButton.addEventListener("click", () => {
      this.userName.innerText = this.input.value;
      this.emitExternalEvent("username-changed", this.input.value);
    });
  }

  emitExternalEvent(eventName, payload) {
    const customEvent = new CustomEvent(eventName, { detail: payload });
    this.dispatchEvent(customEvent);
  }
}

customElements.define("my-welcome", MyWelcome);
const myWelcomeComponent = document.createElement("my-welcome");
document.body.appendChild(myWelcomeComponent);
myWelcomeComponent.addEventListener("username-changed", (event) => {
  console.log(event.detail);
});
