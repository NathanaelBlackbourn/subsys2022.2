/// <reference path="../base-classes/dom-element.ts" />

class CollapseButton extends DOMElement {
  constructor(parent: HTMLElement) {
    super(
      "div",
      parent,
      ["unopened"],
      "collapse-button",
      `<svg id="collapse-button-svg" viewBox="0 0 100 100">
 <g>
     <circle class="st0" cx="50" cy="50" r="49.5"/>
 </g>
 <polyline class="st1" points="49.3,15 70.54,50.5 49.3,86 "/>
 <polyline class="st1" points="31.96,15 53.2,50.5 31.96,86 "/>
 </svg>`
    );
  }
}
