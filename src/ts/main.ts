addEventListener('DOMContentLoaded', () => {
    const frame = new Frame();
})

interface frame {
    body: HTMLBodyElement | null;
    children: object[];
}

interface DOMElement {
    node: HTMLElement;
    parent: HTMLElement | null;
    children: object[];
}


class Frame implements frame{
    body: HTMLBodyElement | null;
    constructor() {
        this.body = document.querySelector('body');
        this.header = new navStructure.header (this.body);
        this.iframe = new DOMElement ('iframe', this.body, [], '');
    }
}

// Element construction
class DOMElement implements DOMElement{
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