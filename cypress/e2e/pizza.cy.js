describe('Order Pizza Page', () => {
    beforeEach(() => {
        cy.visit('localhost:5173/order-pizza');
    });

    it('should input text into the "isim" input field', () => {
        cy.get('input[name="isim"]').should('exist');

        cy.get('input[name="isim"]').type('John Doe');

        cy.get('input[name="isim"]').should('have.value', 'John Doe');
    });

    it('should select multiple toppings', () => {
        const toppingsToSelect = ['Biber', 'Sosis', 'Sucuk'];

        toppingsToSelect.forEach(topping => {
            cy.get(`input[value="${topping}"]`).check();
        });

        toppingsToSelect.forEach(topping => {
            cy.get(`input[value="${topping}"]`).should('be.checked');
        });
    });

    it('should fill in all details and press the order button', () => {
        cy.get('input[name="isim"]').type('John Doe');
        cy.get('input[name="isim"]').should('have.value', 'John Doe');

        cy.get('input[id="orta"]').check();
        cy.get('input[id="orta"]').should('be.checked');

        cy.get('select[name="hamur"]').select('İnce');
        cy.get('select[name="hamur"]').should('have.value', 'ince');

        const toppingsToSelect = ['Biber', 'Sosis', 'Sucuk', 'Ananas'];

        toppingsToSelect.forEach(topping => {
            cy.get(`input[value="${topping}"]`).check();
        });

        toppingsToSelect.forEach(topping => {
            cy.get(`input[value="${topping}"]`).should('be.checked');
        });

        cy.get('input[name="siparisNotu"]').type('Please make it extra crispy.');
        cy.get('input[name="siparisNotu"]').should('have.value', 'Please make it extra crispy.');

        cy.get('button').contains('SİPARİŞ VER').should('not.be.disabled');

        cy.intercept({
            method: 'POST',
            url: `https://reqres.in/api/pizza`,
        }, {
            statusCode: 201
        }).as('placeOrder');

        cy.get('button').contains('SİPARİŞ VER').click();

        cy.wait('@placeOrder', {timeout: 5000}).then(({response}) => {
            expect(response.statusCode).to.eq(201);
        });

        cy.url().should('include', '/success');

    });

});



