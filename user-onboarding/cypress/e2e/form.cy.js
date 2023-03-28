describe ("Quotes App", ()=> {
    beforeEach(() => {
        //Each test needs fresh state
        //Tests shouldn't rely on other tests
        //Every test should work in isolation!
    
        cy.visit('http://localhost:3000'); // CAREFUL
    })

    it('sanity check to make sure tests work', () => {
        expect(1+2).to.equal(3);
        expect(2+2).not.equal(5);
        expect({}).not.to.equal({});
    })











})