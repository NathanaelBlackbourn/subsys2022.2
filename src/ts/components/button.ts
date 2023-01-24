

class Button extends DOMElement {
    text: string;
    constructor(
      parent: HTMLElement | null,
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