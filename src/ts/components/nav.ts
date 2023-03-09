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
    const button = this.children.collapseButton.node
    this.node.classList.toggle("collapsed");
    if (button.classList.contains("unopened")) {
      button.classList.toggle("open-pos");
      button.classList.remove("unopened");
    } else {
    button.classList.toggle("collapsed-pos");
    button.classList.toggle("open-pos");
    }
  }

  private addListeners() {
    this.children.collapseButton.node.addEventListener("click", this.toggleHeader);
  }
}
