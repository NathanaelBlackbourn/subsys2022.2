class AboutIntro extends DOMElement {
    constructor(parent:HTMLDivElement) {
        super('div', parent, ['cv-block'], 'cv-intro');
        this.appendChildren();
    }
    appendChildren() {
        this.children.name = new DOMElement('h1', this.node, [], 'cv-intro-name');
        this.children.title = new DOMElement('h1', this.node, [], 'cv-intro-title');
    }
}