describe('Модуль Потребности – создание новой потребности работодателем', () => {
    it('Модуль Потребности – создание новой потребности работодателем', () => {


        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(5) > .menu-item__item-name').should('be.visible').click();
        cy.get(
            '#app > div.page > div > div.page-navigation > div.page-nav__mobile > section.responses-page > div.responses-list.responses-page__nav > div > article:nth-child(1) > button'
        )
            .should('be.visible')
            .click({ force: true });

    })
})