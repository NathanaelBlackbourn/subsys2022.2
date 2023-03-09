addEventListener("DOMContentLoaded", () => {
  mainframe = new Mainframe;
});

let mainframe: Mainframe;

interface MainframeElements {
  nav: Nav;
  iframe: DOMElement;
  clicker: DOMElement
}

class Mainframe {
  body: HTMLBodyElement | null;
  elements: MainframeElements;
  public constructor () {
    this.body = document.querySelector('body');
    this.elements = {
      nav: new Nav(this.body),
      iframe: new DOMElement('iframe', this.body, [], "", undefined, {src: "./welcome/index.html"}),
      clicker: new DOMElement("div", this.body, [], "clicker")
    };
    this.addListeners();
  }

  private addListeners = () => {
    this.elements.clicker.node.addEventListener("click", this.openSesame, {once: true});
  }

  private openSesame = () => {
    this.elements.nav.toggleHeader();
    this.elements.clicker.removeMe();
  }
};

//, undefined, {src: "./welcome/index.html"}