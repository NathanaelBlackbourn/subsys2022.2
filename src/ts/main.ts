addEventListener("DOMContentLoaded", () => {
  mainframe = new Mainframe;
});

let mainframe: Mainframe;

interface MainframeElements {
  nav: Nav;
  iframe: DOMElement;
}

class Mainframe {
  body: HTMLBodyElement | null;
  elements: MainframeElements;
  public constructor () {
    this.body = document.querySelector('body');
    this.elements = {
      nav: new Nav(this.body),
      iframe: new DOMElement('iframe', this.body, [], "")
    };
    this.elements.iframe.node.src = "./welcome/index.html";
  }
};