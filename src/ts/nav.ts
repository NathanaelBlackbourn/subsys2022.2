// Structural elements

class Header extends DOMElement {
  constructor(parent: HTMLBodyElement | null) {
    super("header", parent, [], "");
    this.addChildren();
  }
  addChildren() {
    this.children.navCon = new NavContainer(this.node);
  }
  toggle() {
    this.node.classList.toggle("collapsed");
  }
}

class NavContainer extends DOMElement {
  constructor(parent: HTMLElement) {
    super("div", parent, ["nav-container", "flex"], "main-container");
    this.addChildren();
  }
  addChildren() {
    this.children.menuColumn = new MenuColumn(this.node);
  }
}

class MenuColumn extends DOMElement {
  constructor(parent: HTMLElement) {
    super("div", parent, ["nav-column"], "menu-column");
    this.addChildren();
  }
  addChildren() {
    this.children.projectsButton = new Button(
      this.node,
      [],
      "projects-button",
      "PROJECTS",
      "projects"
    );
    this.children.aboutButton = new Button(
      this.node,
      [],
      "about-button",
      "ABOUT ME",
      "about"
    );
  }
}

class Button extends DOMElement {
  text: string;
  target: string;
  constructor(
    parent: HTMLElement,
    classList: string[],
    id: string,
    text: string,
    target: string
  ) {
    super("button", parent, classList, id),
      (this.text = text),
      (this.target = target);
    this.node.innerText = this.text;
    this.node.addEventListener("click", () => {
      this.listener();
    });
  }
  listener() {
    const contentColumns: HTMLCollection =
      document.getElementsByClassName("cotent-column");
    for (const item of contentColumns) {
      if (item.id !== this.target) {
        item.remove();
      }
    }
    const constructor = content[this.target]; // Question. Why do I get an error here? The code works and is copied from Stack Overflow.
    new constructor(document.getElementById("main-container"), this.target);
  }
}

/** This object contains togglable content classes.
 * They must have keys to be callable by button targets.
 */
const content = {
  projects: class projectColumn extends DOMElement {
    constructor(parent: HTMLElement | null, id: string) {
      super("div", parent, ["nav-column", "content-column"], id);
      this.addChildren();
    }
    addChildren() {
      for (let i = 0; i < 3; i++) {
        new ProjectBlock(i);
      }
    }
  },

  about: class aboutColumn extends DOMElement {
    constructor(parent: HTMLElement, id: string) {
      super("div", parent, ["nav-column", "cotent-column"], id);
      this.addChildren();
    }
    addChildren() {
      // Add CV blocks here
      console.log("Rendering about blocks.");
    }
  },
};
