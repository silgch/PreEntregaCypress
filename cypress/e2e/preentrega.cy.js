/// <reference types="cypress" />

import { HomePage } from "../support/pages/homePage";
import { LoginPage } from "../support/pages/loginPage";
import { ProductsPage } from "../support/pages/productsPage";
import { ShoppingCartPage } from "../support/pages/shoppingCartPage";

describe("Preentrega", () =>{
    let data;
    const homePage = new HomePage();
    const loginPage = new LoginPage();
    const productsPage = new ProductsPage();
    const shoppingCartPage = new ShoppingCartPage();

    before('Before', () => {
        cy.fixture('data').then(datos => {
            data = datos;
        })
    });

    beforeEach('Before Each', () => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        loginPage.escribirUsuario(data.usuario);
        loginPage.escribirContraseña(data.contraseña);
        loginPage.clickLoginBtn();
        
        
    });

    it('Deberia permitir agregar 2 productos al carrito', () =>{
        //TODO
        let precioCarrito = data.producto1.precio + data.producto2.precio;
        homePage.clickOnlineShoppingButton();
        productsPage.agregarProducto(data.producto1.nombre);
        productsPage.agregarProducto(data.producto2.nombre);
        productsPage.clickGoToShoppingCart();
        shoppingCartPage.devolverProducto(data.producto1.nombre).should('have.length', 1);
        shoppingCartPage.devolverPrecio(data.producto1.nombre).should('have.text', "$"+data.producto1.precio);
        
        shoppingCartPage.devolverProducto(data.producto2.nombre).should('have.length', 1);
        shoppingCartPage.devolverPrecio(data.producto2.nombre).should('have.text', "$"+data.producto2.precio);
        shoppingCartPage.devolverPrecioTotal().should('have.text',  precioCarrito);
        


    });
});