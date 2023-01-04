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
            new navStructure.button (this.node, [], 'projects-button', 'PROJECTS', 'projects');
            new navStructure.button (this.node, [], 'about-button', 'ABOUT ME', 'about');
        }; 
    },

    projects: class projectColumn extends DOMElement {
        init() {
            this.children();
        };
        children() {
            for (let i = 0; i < 2; i++) {
                new ProjectBlock(i);
            }
        };
    },  

    about: class aboutColumn extends DOMElement {
        init() {
            this.children();
        };
        children() {
            // Add CV blocks here
            console.log('Rendering about blocks.');
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
            const contentColumns: HTMLCollection = document.getElementsByClassName('cotent-column');
            for (const item of contentColumns) {
                if (item.id !== this.target) {
                    item.remove();
                }
            };
            const constructor = navStructure[this.target];
            new constructor('div', document.getElementById('nav-container'), ['nav-column', 'content-column'], this.target);
        }
    },

}