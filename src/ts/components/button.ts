

class Button extends DOMElement {
    text: string;
    constructor(
      parent: HTMLElement | null,
      classList: string[],
      id: string | null,
      text: string,
      clickListener: Function,
    ) {
      super("button", parent, classList, id);
      this.text = text;
      this.node.innerText = this.text;
      this.node.addEventListener('click', () => {
          clickListener();
      })
    }
  }