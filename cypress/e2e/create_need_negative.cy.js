describe('Негативный сценарий – создание новой потребности без заполнения обязательных полей', () => {
    it('Не позволяет создать потребность без заполнения обязательных полей', () => {
        cy.visit('https://dev.profteam.su/login');
        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password002');
        cy.get('button[type=submit]').eq(2).click();
    });
});
