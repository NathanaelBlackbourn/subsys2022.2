/// <reference path="../base-classes/dom-element.ts" />

class CollapseButton extends DOMElement {
  constructor(parent: HTMLElement) {
    super("div", parent, ["unopened"], "collapse-button", arrowSVG);
  }
}
