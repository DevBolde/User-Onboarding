describe ("Quotes App", ()=> {
    beforeEach(() => {
        //Each test needs fresh state
        //Tests shouldn't rely on other tests
        //Every test should work in isolation!
    
        cy.visit('http://localhost:3000'); // CAREFUL
    })
    //Helpers
    const usernameInput = () => cy.get('input[name=username]');
    const emailInput = () => cy.get('input[name=email]');
    const passwordInput = () => cy.get('input[name=password]');
    const checkbox = () => cy.get('input[name=tos]');
    const submitBtn = () => cy.get('input[name=submitBtn]');

    //SANITY CHECK!//
    it('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.equal(5);
        expect({}).not.to.equal({});
    })
    
    it("the proper elements are showing", () => {
        usernameInput().should('exist')
        emailInput().should('exist')
        passwordInput().should('exist')
        checkbox().should('exist')
        submitBtn().should('exist')
    })

    it('can type in the inputs, check tos, and submit', () => {
        usernameInput()
        .should('have.value', "")
        .type('Devin4')
        .should('have.value', 'Devin4');

        emailInput()
        .should('have.value', '')
        .type('devin4@email.com')
        .should('have.value', 'devin4@email.com');

        passwordInput()
        .should('have.value', '')
        .type('notdevin4')
        .should('have.value', 'notdevin4');

        checkbox().check();

        submitBtn().click();
    })
    describe('error check', () => {
        it('checks if error messages pop up', () => {
        usernameInput().should('have.value', 'de')
        emailInput().should('have.value', 'devin4.com')
        passwordInput().should('have.value', '5les')
        checkbox().check().check();
        submitBtn().click();
    })
    })
    







})