interface children {
    [key: string]: DOMElement
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