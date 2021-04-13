/**
 * An element that can be toggled on and off
 */
class ToggleableElement extends HTMLElement {

    get state() { return this.getAttribute("state"); }

    /**
     * @param {"on"|"off"} val The state of the toggleable element
     */
    set state(val) {
        if (this.getAttribute("state") !== val)
            this.setAttribute("state", val === ("on" || "off") ? val : "off");
        return this.getAttribute("state")
    }

    switchState() {
        this.state = this.state === "on" ? "off" : "on";
        return this.state
    }

    constructor() {
        super();
        if (this.getAttribute("state") !== ("on" || "off")) {
            this.setAttribute("state", "off");
        }
        this.state = this.getAttribute("state");
        this.onstatechange = () => { }

        this.addEventListener("click", () => {
            this.switchState();
        })
    }

    static get observedAttributes() {
        return ["state"];
    }
    attributeChangedCallback(attrName, oldVal, newVal) {
        if (attrName == "state" && oldVal != newVal) {
            this.onstatechange();
        }
    }
}

customElements.define("toggleable-element", ToggleableElement);