const navStructure = {

    header: class Header extends DOMElement{
        init() {
            this.children();
        }
        children() {
            new navStructure.navCon ('div', this.node, ['nav-container', 'flex'], '');
        }
        toggle() {
            
        }
    },

    navCon: class NavContainer extends DOMElement {
        init() {
            this.children();
        }
        children() {
            new navStructure.menCol ('div', this.node, ['nav-column'], 'menu-column');
        }
    },

    menCol: class MenuColumn extends DOMElement {
        init() {
            this.children();
        };
        children() {
            new navStructure.button (this.node, [], 'projects-button', 'PROJECTS', 'projCol');
            new navStructure.button (this.node, [], 'about-button', 'ABOUT ME', 'aboutCol');
        }; 
    },

    projCol: class projectColumn extends DOMElement {
        init() {
            this.children();
        };
        children() {
            // Add project blocks here
            console.log('Rendering project blocks.');
        };
    },

    button: class Button extends DOMElement {
        text: string;
        target: string;
        constructor(parent: HTMLElement, classList: string[], id: string, text: string, target: string) {
            super('button', parent, classList, id),
            this.text = text,
            this.target = target
            this.node.innerText = this.text;
            this.node.addEventListener('click', () => {
                this.listener()
            });
        }
        init() {
        }
        listener() {
            const constructor = navStructure[this.target];
            new constructor('div', document.getElementById('nav-container'), ['nav-column'], this.target.toLowerCase());
        }
    },

}