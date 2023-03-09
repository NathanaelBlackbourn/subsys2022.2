interface iNav {
  toggleHeader(): void;
}

class Nav extends DOMElement implements iNav {

  constructor(parent: HTMLBodyElement | null) {
    super("header", parent, ["collapsed"], "nav-frame");
    this.appendChildren();
    this.addListeners();
  }

  private appendChildren() {
    this.children.navContainer = new navContainer(this.node);
    this.children.collapseButton = new CollapseButton(this.node);
  }

  public toggleHeader = () => {
    this.node.classList.toggle("collapsed");
    this.children.collapseButton.node.classList.toggle("collapsed-pos");
    this.children.collapseButton.node.classList.toggle("open-pos");
  }

  private addListeners() {
    this.children.collapseButton.node.addEventListener("click", this.toggleHeader);
  }
}
