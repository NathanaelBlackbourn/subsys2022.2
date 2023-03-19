class Link extends DOMElement {
  constructor(
    type: string,
    parent: HTMLElement,
    text: string,
    listener?: (e?: MouseEvent) => void
  ) {
    super(type, parent, ["link"], "");
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
