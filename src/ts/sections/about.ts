interface CVIntroContent {
    name: string;
    title: string;
    sliderText: string;
}

class CVBlock extends DOMElement {
    constructor(parent: HTMLDivElement, id: string) {
        super('div', parent, ['cv-block'], id);

    }
}

class AboutIntro extends CVBlock {
    constructor(parent:HTMLDivElement, content: CVIntroContent) {
        super(parent, 'cv-intro');
        this.appendChildren(content);
    }
    appendChildren(content: CVIntroContent) {
        this.children.name = new ContentChild('h1', this.node, [], 'cv-intro-name', content.name);
        this.children.title = new ContentChild('h1', this.node, [], 'cv-intro-title', content.title);
        this.children.text = new ContentChild('p', this.node, [], 'cv-intro-text', content.sliderText);
    }
}

interface CVPhotoContent {
    url: string
}

class AboutPhoto extends CVBlock {
    constructor(parent: HTMLDivElement, content: CVPhotoContent) {
        super(parent, 'cv-photo');
        this.appendChildren();
    }
    appendChildren() {
        this.children.photoContainer = new DOMElement('div', this.node, [], 'cv-photo-container')
    }
}