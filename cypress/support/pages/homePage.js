export class HomePage {
    constructor() {
        this.onlineShoppingBtn = 'Online Shop';
    }

    clickOnlineShoppingButton() {
        cy.contains(this.onlineShoppingBtn, { timeout: 30000 }).click();
    };
};