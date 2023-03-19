interface children {
    [key: string]: DOMElement
  }

  interface Attributes {
    [key: string]: string
  }

interface DOMElement {
    node: HTMLIFrameElement | HTMLElement;
    parent: HTMLElement | null;
    children: children;
    head?: DOMElement;
    date?: DOMElement;
    title?: DOMElement;
    seeProject?: DOMElement;
    imageContainer?: DOMElement;
    description?: DOMElement;
  }

class DOMElement {
    children: children = {};
    constructor(
      type: string,
      parent: HTMLElement | null,
      classList: string[],
      id: string | null,
      content?: string,
      attributes?: Attributes
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
      if (content) {
        this.node.innerHTML = content
      }
      if (attributes) {
        for (const key in attributes) {
          const value: keyof Attributes = attributes[key]
          this.node.setAttribute(key, value);
        }
      }
    }
    render() {
      this.parent?.append(this.node);
    }
    removeMe() {
      // Remove object from parent
      this.node.remove();
    }
  }