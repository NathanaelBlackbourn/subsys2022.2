addEventListener('DOMContentLoaded', () => {
    const frame = new Frame();
})

interface Frame {
    body: HTMLBodyElement | null;
    children: object[];
}

interface DOMElement {
    node: HTMLElement;
    parent: HTMLElement | null;
    children: object[];
}


class Frame {
    constructor() {
        this.body = document.querySelector('body');
        this.pushChildren();
    }
    pushChildren() {
        this.children.push(new navStructure.header (this.body), new DOMElement ('iframe', this.body, [], ''));
    }
}

// Element construction
class DOMElement{
    constructor (type: string, parent: HTMLElement | null, classList: string[], id: string) {
        this.node = document.createElement(type);
        this.parent = parent;
        for (const name of classList) {
            this.node.classList.add(name)
        }
        this.node.id = id;
        this.render();
    };
    render() {
        this.parent?.append(this.node);
    }
    removeMe() {
        // Remove object from parent
        this.node.remove();
    }
}