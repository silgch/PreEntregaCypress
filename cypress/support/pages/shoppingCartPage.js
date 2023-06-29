export class ShoppingCartPage {
    constructor () {
        this.precio = '#productPrice'; 
        this.goToShoppingCart = 'Show total price';
        this.precioTotal = '#price';
    }

    devolverProducto (producto){
        return cy.contains(producto).parent();
    }

    devolverPrecio (producto) {
        return cy.contains(producto).siblings(this.precio);
    }
    clickShowTotalPrice(){
        cy.contains(this.goToShoppingCart).click();
    }
    
    devolverPrecioTotal(){
        this.clickShowTotalPrice();
        return cy.get(this.precioTotal);
    }
}