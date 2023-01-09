addEventListener("DOMContentLoaded", () => {
  mainframe.init();
});

interface children {
  [key: string]: DOMElement
}

interface Frame {
  body: HTMLBodyElement | null;
  elements: children;
  init(): void;
  toggleHeader(): void;
}

interface DOMElement {
  node: HTMLElement;
  parent: HTMLElement | null;
  children: children;
  head?: DOMElement;
  date?: DOMElement;
  title?: DOMElement;
  seeProject?: DOMElement;
  imageContainer?: DOMElement;
  description?: DOMElement;
}

const mainframe: Frame = {
  body: null,
  elements: {},
  init() {
    this.body = document.querySelector("body");
    this.elements.nav = new Nav(this.body);
    this.elements.iframe = new DOMElement("iframe", this.body, [], "");
  },
  toggleHeader() {
    mainframe.elements.nav.node.classList.toggle("collapsed");
  },
};

// Element construction

class DOMElement {
  children: children = {};
  constructor(
    type: string,
    parent: HTMLElement | null,
    classList: string[],
    id: string | null
  ) {
    this.node = document.createElement(type);
    this.parent = parent;
    for (const name of classList) {
      this.node.classList.add(name);
    }
    if (id) {
      this.node.id = id;
    };
    this.render();
  }
  render() {
    this.parent?.append(this.node);
  }
  removeMe() {
    // Remove object from parent
    this.node.remove();
  }
}

class Button extends DOMElement {
  text: string;
  constructor(
    parent: HTMLElement | DOMElement | null,
    classList: string[],
    id: string | null,
    text: string,
    clickListener: any, // Question. This is a function, how can I type it?
    listenerTarget: string | null
  ) {
    super("button", parent, classList, id);
    this.text = text;
    this.node.innerText = this.text;
    this.node.addEventListener('click', () => {
        clickListener(listenerTarget);
    })
  }
}

class ContentElement extends DOMElement {
  constructor(
    type: string,
    parent: HTMLElement| DOMElement | null,
    classList: string[],
    id: string | null,
    content: string
  ) {
    super(type, parent, classList, id);
    if (content) {
      this.node.innerHTML = content;
    }
  }
}