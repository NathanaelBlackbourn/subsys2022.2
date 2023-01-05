addEventListener('DOMContentLoaded', () => {
    const frame = new Frame();
})

interface children {
    [key: string]: DOMElement;
}

interface Frame {
    body: HTMLBodyElement | null;
    children: children;
}

interface DOMElement {
    node: HTMLElement;
    parent: HTMLElement | null;
    children: children;
    head?: DOMElement;
    date?: DOMElement;
    title?: DOMElement;
    seeProject?: DOMElement;
    imageContainer?: DOMElement;
    description?: DOMElement;
}


class Frame {
    constructor() {
        this.body = document.querySelector('body');
        this.addChildren();
    }
    addChildren() {
        this.children.header = new Header (this.body)
        this.children.iframe = new DOMElement ('iframe', this.body, [], '');
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