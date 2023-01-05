class ProjectBlock extends DOMElement {
    projNum: number;
    blockName: string;
    content: any; // Workaround. Question.
    constructor(i: number) {
        i += 1
        super('div', document.getElementById('projects'), ['project-block', 'alternate', 'flex'], ('project-' + i));
        this.projNum = i;
        this.blockName = 'project-' + i;
        this.init(i);
    }
    async init(i: number) {
        this.content = await this.getContent(i);
        this.pushChildren();
        this.listener(i);  
    }
    async getContent(i: number){
        return await fetch('../work/' + i + '/project-info.json')
        .then((response) => response.json())
    }
    pushChildren() {
        new ProjectChild('div', this.node, ['project-part'], this.blockName + '-part-1', false);
        new ProjectChild('div', this.node, ['project-part'], this.blockName + '-part-2', false);
        new ProjectChild('div', document.getElementById(this.blockName + '-part-1'), ['project-head', 'flex', 'space-between'], this.blockName + '-head', false);
        new ProjectChild('span', document.getElementById(this.blockName + '-head'), ['project-date'], this.blockName + '-date', this.content.date);
        new ProjectChild('span', document.getElementById(this.blockName + '-head'), ['project-title'], this.blockName + '-title', this.content.title);
        new ProjectChild('span', document.getElementById(this.blockName + '-head'), ['see-project'], this.blockName + '-see', 'see project');
        new ProjectChild('div', document.getElementById(this.blockName + '-part-1'), ['image-container'], this.blockName + '-image', false);
        new ProjectChild('p', document.getElementById(this.blockName + '-part-1'), ['project-description'], this.blockName + '-description', this.content.description);
    };
    listener(i: number) {
        this.node.addEventListener('click', () => {
            const iframe = document.querySelector('iframe');
            if (iframe) {
                iframe.src = '../work/' + i + '/index.html';
            }
        })
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