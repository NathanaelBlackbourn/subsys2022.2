class ProjectBlock extends DOMElement {
    projNum: number;
    blockName: string;
    content: object = {};
    constructor(i: number) {
        super('div', document.getElementById('projects'), ['project-block', 'flex'], ('project-' + i));
        this.projNum = i;
        this.blockName = 'project-' + (i + 1);
        this.content = this.getContent(i);
        this.children();
        this.listener();
    }
    async getContent(i: number) {
        return fetch('../work/' + i + '/project-info.json')
        .then((response) => response.json())
        .then((data) => console.log(data));
    }
    children() {
        new ProjectChild('div', this.node, ['project-part-1'], this.blockName + '-part-1', false);
        new ProjectChild('div', this.node, ['project-part-1'], this.blockName + '-part-2', false);
        new ProjectChild('span', document.getElementById(this.blockName + '-part-1'), ['project-date'], this.blockName + '-date', this.content.date);
        new ProjectChild('span', document.getElementById(this.blockName + '-part-1'), ['project-title'], this.blockName + '-title', this.content.title);
        new ProjectChild('div', document.getElementById(this.blockName + '-part-1'), ['image-container'], this.blockName + '-image', false);
        new ProjectChild('p', document.getElementById(this.blockName + '-part-1'), ['project-description'], this.blockName + '-description', this.content.description);
    };
    listener() {
        // On click change link in iframe
    }
}

class ProjectChild extends DOMElement {
    constructor(type: string, parent: HTMLElement | null, classList: string[], id: string, content: any) {
        super(type, parent, classList, id);
        if (content) {
            this.node.innerHTML = content;
        }
    }
}