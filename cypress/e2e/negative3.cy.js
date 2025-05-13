describe('Просмотр страницы с потребностями (с поиском и фильтром)', () => {
    it('Заходим на страницу потребности, применяем фильтрацию)', () => {

        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('ffff');
        cy.get('input[type=password]').type('Password17834783467');
        cy.get('button[type=submit]').eq(2).click();
    })
})
