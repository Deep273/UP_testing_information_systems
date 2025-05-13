describe('Просмотр страницы с потребностями (с поиском и фильтром)', () => {
    it('Заходим на страницу потребности, применяем фильтрацию)', () => {

        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('ffff');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();
        cy.url().should('include', '/account/main');

        cy.get('header nav a.header__item span').contains('Потребности').click();
        cy.get('button.vacancy-page-card__button').first().click();
    })
})
