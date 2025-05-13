describe('Просмотр страницы с потребностями (с поиском и фильтром)', () => {
    it('Заходим на страницу потребности, применяем фильтрацию)', () => {

                cy.visit('https://dev.profteam.su/needs');

                cy.get('input[placeholder="Название..."]').type('Женя-чебупицца', { force: true });
                cy.get('.needs-block__needs-filters-wrapper > div.needs-block__filters-wrapper > div > div.filters-block__filter-list > div.search-input > div > button').click()
                cy.get('.salary-field__wrapper > .radio-list > .radio-component > input')
                    .eq(1)
                    .click({ force: true });

                cy.get('.form-select__selected').click({ force: true });

                cy.get('.form-select__selected--open').should('be.visible');
                cy.get('.form-select__items > div').eq(2).click({ force: true });

    })
})
