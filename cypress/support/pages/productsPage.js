export class ProductsPage {
    constructor () {
        this.addToCart = 'button';
        this.close = 'Close';
        this.goToShoppingCart = '//*[@id="goShoppingCart"]';
    }

    agregarProducto(producto){
        cy.contains(producto).siblings(this.addToCart).click();
        cy.contains(this.close).click();
    }
    
    clickGoToShoppingCart(){
        cy.xpath(this.goToShoppingCart).click();
    }
} 