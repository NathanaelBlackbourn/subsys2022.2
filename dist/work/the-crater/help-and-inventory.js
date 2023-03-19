 /** Event listener on help-button */
function toggleHelp() {
    const helpPanel = document.getElementById('help-panel');
    helpPanel.classList.toggle('hidden');
 }
 
/**
 * This is where the 'pilots' are added to win the game
 * @type {Array}
 */
let inventory = [];

/** Displays invenoty contents on screen */
function toggleInventory() {
    const inventoryPanel = document.getElementById('inventory-panel');
    if (inventoryPanel.classList.contains('hidden')){
        createInventoryList();
        }
    inventoryPanel.classList.toggle('hidden');
 };

/** Resets then creates the list of inventory objects in the DOM */
function createInventoryList() {
    const inventoryList = document.getElementById('inventory-list');
    inventoryList.innerHTML = '';
    for (let i = 0; i < inventory.length; i++) {
        let listItem = document.createElement('li');
        listItem.id = 'inventory-item-' + (i + 1);
        listItem.innerHTML = inventory[i];
        inventoryList.appendChild(listItem);
    }
 }