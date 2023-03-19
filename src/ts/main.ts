addEventListener("DOMContentLoaded", () => {
  mainframe = new Mainframe();
});

let mainframe: Mainframe;

interface MainframeElements {
  nav: Nav;
  iframe: DOMElement;
  clicker: DOMElement;
  welcome: DOMElement;
}

class Mainframe {
  body: HTMLBodyElement | null;
  elements: MainframeElements;
  public constructor() {
    this.body = document.querySelector("body");
    this.elements = {
      nav: new Nav(this.body),
      iframe: new DOMElement("iframe", this.body, [], "", undefined, {
        src: "./welcome/index.html",
      }),
      clicker: new DOMElement("div", this.body, [], "clicker"),
      welcome: new DOMElement("div", this.body, [], "welcome", welcomeText),
    };
    this.addListeners();
  }

  private addListeners = () => {
    this.elements.clicker.node.addEventListener("click", this.openSesame, {
      once: true,
    });
  };

  private openSesame = () => {
    this.elements.nav.toggleHeader();
    this.elements.clicker.removeMe();
    this.elements.welcome.removeMe();
  };

  public openProject(url: string) {
    this.elements.iframe.node.setAttribute("src", url);
    this.elements.nav.toggleHeader();
  }
}
