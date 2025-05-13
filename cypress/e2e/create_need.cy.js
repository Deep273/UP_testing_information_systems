describe('Модуль Потребности – создание новой потребности работодателем', () => {
    it('Модуль Потребности – создание новой потребности работодателем', () => {


        cy.visit('https://dev.profteam.su/login')
        cy.get('input[type=text]').type('testerEmployer');
        cy.get('input[type=password]').type('Password1');
        cy.get('button[type=submit]').eq(2).click();

        cy.get(':nth-child(6) > .menu-item__item-name').should('be.visible').click();
        cy.get('#app > div.page > div > div.page-navigation > div.page-nav__mobile > div:nth-child(7) > section > div > div.needs-block__filters-wrapper > button').click()

        cy.get('body > div:nth-child(15) > div.desktop-modal > div > div.vacancy-need-wrapper > form > div:nth-child(1) > div.form__labels > div > div:nth-child(1) > div > input').type('Женя-чебупицца')
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
        cy.get(
            '#app > div.page > header:nth-child(1) > nav > a:nth-child(2) > span'
        ).click()
        cy.get(
            '#app > div.page > div > section > div > div.needs-block__needs-filters-wrapper > div.needs-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > input'
        )
            .click()
            .type('Женя-чебупицца')
        // Вводим название в поле поиска
        cy.get('div.search-input input')
            .should('be.visible')
            .clear()
            .type('Женя-чебупицца')

// Кликаем по кнопке поиска
        cy.get('div.search-input button')
            .should('be.visible')
            .click({ force: true })

// Проверяем, что результат отобразился
        cy.contains('Женя-чебупицца')
            .should('be.visible')
        cy.get('#radio-0\\.958840563320783 > input')  // Находим input внутри радиокнопки
            .should('be.visible')  // Убедиться, что она видна
            .click()  // Кликаем на радиокнопку
    })
})
