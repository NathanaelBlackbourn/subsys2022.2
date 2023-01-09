interface CVIntroContent {
    name: string;
    title: string;
    sliderText: string;
}

class AboutBlock extends DOMElement {
    constructor(parent: HTMLElement, id: string) {
        super('div', parent, ['cv-block'], id);

    }
}

class AboutIntro extends AboutBlock {
    constructor(parent:HTMLElement, content: CVIntroContent) {
        super(parent, 'cv-intro');
        this.appendChildren(content);
    }
    appendChildren(content: CVIntroContent) {
        this.children.name = new ContentElement('h1', this.node, [], 'about-intro-name', content.name);
        this.children.title = new ContentElement('h1', this.node, [], 'about-intro-title', content.title);
        this.children.text = new ContentElement('p', this.node, [], 'about-intro-text', content.sliderText);
    }
}

interface CVExperienceContent {
    title: string;
    content: object[];
}

interface SkillInfo {
    skill: string;
    level: number;
}

class AboutSkillsBlock extends AboutBlock {
    constructor(parent: HTMLElement, id: string, content: CVExperienceContent) {
        super(parent, id);
        this.appendChildren(content);
    }
    appendChildren(content: CVExperienceContent) {
        this.children.head = new DOMElement('div', this.node, ['about-head', 'flex', 'space-between'], content.title + '-head');
        this.children.title = new ContentElement('h2', this.children.head.node, ['about-block-title'], content.title + '-title', content.title);
        let i = 1;
        for (const row in content.content) {
            this.children['row' + i] = new DOMElement('div', this.node, ['skill-row', 'flex', 'space-between'], content.title + '-row-' + i)
            for (const item in content.content[row]) {
                const skillBlock = content.content[row][item]; // Question. Same error here again. Functioning code.
                this.children[skillBlock.skill] = new ContentElement('h3', this.children['row' + i].node, ['skill-element'], skillBlock.skill + '-element', skillBlock.skill);
            };
            i++;
        }

    }
}

// interface CVPhotoContent {
//     url: string
// }

// class AboutPhoto extends CVBlock {
//     constructor(parent: HTMLElement, content: CVPhotoContent) {
//         super(parent, 'cv-photo');
//         this.appendChildren();
//     }
//     appendChildren() {
//         this.children.photoContainer = new DOMElement('div', this.node, [], 'cv-photo-container')
//     }
// }