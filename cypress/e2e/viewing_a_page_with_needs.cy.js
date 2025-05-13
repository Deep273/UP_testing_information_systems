describe('Просмотр страницы с потребностями (с поиском и фильтром)', () => {
    it('Заходим на страницу потребности, применяем фильтрацию)', () => {

        cy.visit('https://dev.profteam.su/needs')
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
            .scrollIntoView();

// Подожди, пока радиокнопка появится, и кликни её безопасно
        cy.get('input[type="radio"]')
            .should('exist')
            .should('be.visible')
            .first()
            .click({ force: true });

        cy.get(
            '#app > div.page > div > section > div > div.needs-block__needs-filters-wrapper > div.needs-block__filters-wrapper > div > div.filters-block__filter-list > div.salary-field > div:nth-child(3) > div:nth-child(2) > div > input'
        )
            .should('be.visible')
            .clear()
            .type('50000');

        cy.get(
            '#app > div.page > div > section > div > div.needs-block__needs-filters-wrapper > div.needs-block__filters-wrapper > div > div.filters-block__filter-list > div.form-select.form-select--responsive > div > div'
        )
            .should('be.visible')
            .click({ force: true });

        cy.get(
            '#app > div.page > div > section > div > div.needs-block__needs-filters-wrapper > div.needs-block__filters-wrapper > div > div.filters-block__filter-list > div.form-select.form-select--responsive > div > div.form-select__items > div:nth-child(2)'
        )
            .should('be.visible')
            .click({ force: true });
    })
})
