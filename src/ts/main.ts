addEventListener("DOMContentLoaded", () => {
  mainframe.init();
});

interface content {
  [key: string]: DOMElement;
}

interface Frame {
  body: HTMLBodyElement | null;
  elements: content;
  init(): void;
  toggleHeader(): void;
}

interface DOMElement {
  node: HTMLElement;
  parent: HTMLElement | null;
  children: content;
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
  children = {};
  constructor(
    type: string,
    parent: HTMLElement | null,
    classList: string[],
    id: string
  ) {
    this.node = document.createElement(type);
    this.parent = parent;
    for (const name of classList) {
      this.node.classList.add(name);
    }
    this.node.id = id;
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
    parent: HTMLElement,
    classList: string[],
    id: string,
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

class ContentChild extends DOMElement {
  constructor(
    type: string,
    parent: HTMLElement | null,
    classList: string[],
    id: string,
    content: any
  ) {
    super(type, parent, classList, id);
    if (content) {
      this.node.innerHTML = content;
    }
  }
}