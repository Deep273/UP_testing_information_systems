describe('Модуль Потребности – создание новой потребности работодателем', () => {
    it('Модуль Потребности – создание новой потребности работодателем', () => {


        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(5) > .menu-item__item-name').should('be.visible').click();
        cy.get('article:nth-child(1) .responses-list-item__actions div')
            .first()
            .click({ force: true });
    })
})