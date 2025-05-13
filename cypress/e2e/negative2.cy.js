describe('Модуль Потребности – создание новой потребности работодателем', () => {
    it('Модуль Потребности – создание новой потребности работодателем', () => {


        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(6) > .menu-item__item-name').should('be.visible').click();
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(7) > section > div > div.needs-block__filters-wrapper > button').click()

        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(3) > div > textarea').type('Выключать/Взрывать микроволновки в общежитии - всегда вовремя!')
        cy.get(
            'body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(4) > div > textarea'
        ).type('Выключать или взрывать микроволновки в общежитии — всегда вовремя!')
        // Открыть выпадающий список
        cy.get(
            'body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(5) > div > div > div').click()
        cy.get(
            'body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div.form__buttons > button'
        )
            .scrollIntoView()
            .click({ force: true })

        cy.get(
            '#app > div.page > div > div.header-container.header-personal > div.header-container__user-avatar-info > section > button'
        ).click()

    })
})