class ContentElement extends DOMElement {
    constructor(
      type: string,
      parent: HTMLElement | null,
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