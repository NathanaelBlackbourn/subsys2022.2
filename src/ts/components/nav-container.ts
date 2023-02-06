class navContainer extends DOMElement {
  constructor(parent: HTMLElement) {
    super("div", parent, ["nav-container", "flex"], "nav-container");
    this.children = this.appendChildren();
  }

  private appendChildren(): children {
    let children: children = {
      menuColumn: new MenuColumn(this.node, this)
    }
    return children;
  }
}
