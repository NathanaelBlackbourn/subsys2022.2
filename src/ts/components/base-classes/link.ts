class Link extends DOMElement {
  constructor(
    type: string,
    parent: HTMLElement,
    text: string,
    id?: string | undefined,
    listener?: (arg?: any) => any
  ) {
    super(type, parent, ["link"], id ? id : "");
    this.appendChildren(text);
    if (listener) this.addListener(listener);
  }

  private appendChildren(text: string) {
    this.children.linkText = new DOMElement("span", this.node, [], "", text);
    this.children.arrows = new DOMElement("div", this.node, [], "", arrowSVG);
  }

  private addListener(listener: () => void) {
    this.node.addEventListener("click", listener);
  }
}
