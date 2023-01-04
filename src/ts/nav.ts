const navStructure = {

    header: class Header extends DOMElement{
        constructor(parent: HTMLBodyElement | null) {
            super('header', parent, [], '');
            this.children();
        }
        children() {
            new navStructure.navCon (this.node);
        }
        toggle() {
            
        }
    },

    navCon: class NavContainer extends DOMElement {
        constructor(parent: HTMLElement) {
            super('div', parent, ['nav-container', 'flex'], 'main-container')
            this.children();
        }
        children() {
            new navStructure.menCol (this.node);
        }
    },

    menCol: class MenuColumn extends DOMElement {
        constructor(parent: HTMLElement) {
            super('div', parent, ['nav-column'], 'menu-column');
            this.children();
        }
        children() {
            new navStructure.button (this.node, [], 'projects-button', 'PROJECTS', 'projects');
            new navStructure.button (this.node, [], 'about-button', 'ABOUT ME', 'about');
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
        listener() {
            const contentColumns: HTMLCollection = document.getElementsByClassName('cotent-column');
            for (const item of contentColumns) {
                if (item.id !== this.target) {
                    item.remove();
                }
            };
            const constructor = navStructure[this.target];
            new constructor(document.getElementById('nav-container'), this.target);
        }
    },
    
    projects: class projectColumn extends DOMElement {
        constructor(parent: HTMLElement, id: string) {
            super('div', parent, ['nav-column', 'content-column'], id)
            this.children();
        };
        children() {
            for (let i = 0; i < 2; i++) {
                new ProjectBlock(i);
            }
        };
    },  

    about: class aboutColumn extends DOMElement {
        constructor(parent: HTMLElement, id: string) {
            super('div', parent, ['nav-column', 'cotent-column'], id);
            this.children();
        }
        children() {
            // Add CV blocks here
            console.log('Rendering about blocks.');
        };
    }
}