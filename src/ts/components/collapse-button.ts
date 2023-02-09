class CollapseButton extends DOMElement {
  constructor(parent: HTMLElement) {
    super(
      "div",
      parent,
      [],
      "collapse-button",
      `<svg id="collapse-button-svg" viewBox="0 0 100 100">
 <g>
     <circle class="st0" cx="50" cy="50" r="49.5"/>
 </g>
 <polyline class="st1" points="49.3,15 70.54,50.5 49.3,86 "/>
 <polyline class="st1" points="31.96,15 53.2,50.5 31.96,86 "/>
 </svg>`
    );
    // this.appendChildren();
  }

  //   private appendChildren() {
  //     this.children.svg = new DOMElement("svg", this.node, [],
  //         "collapse-button-svg",
  //         `<g>
  //           <circle class="st0" cx="50" cy="50" r="49.5"/>
  //           <path d="M50,1c27.02,0,49,21.98,49,49S77.02,99,50,99S1,77.02,1,50S22.98,1,50,1 M50,0C22.39,0,0,22.39,0,50s22.39,50,50,50
  //               s50-22.39,50-50S77.61,0,50,0L50,0z"/>
  //       </g>
  //       <polyline class="st1" points="49.3,15 70.54,50.5 49.3,86 "/>
  //       <polyline class="st1" points="31.96,15 53.2,50.5 31.96,86 "/>`,
  //         {
  //           version: "1.1",
  //           xmlns: "http://www.w3.org/2000/svg",
  //           "xmlns:xlink": "http://www.w3.org/1999/xlink",
  //           viewbox: "0 0 100 100",
  //           x: "0px",
  //           y: "0px",
  //           "xml:space": "preserve",
  //         })
  //   }
}
