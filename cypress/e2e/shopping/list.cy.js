/* eslint-disable cypress/no-unnecessary-waiting */
import constants from '../../constants'

describe('access the main page', () => {
  beforeEach(() => {
    cy.viewport(1350, 800)
    cy.intercept('GET', [constants.baseURLAPI, 'products*'].join('/'), {
      fixture: 'products.json',
    }).as('get')
    cy.visit(constants.baseURL)
  })

  it('should display the products', () => {
    cy.wait('@get')

    cy.get('#product-grid > *').should('have.length', 8)
  })

  it('should add the first product in the cart', () => {
    cy.wait('@get')

    cy.get('#product-grid > :nth-child(1) button').click()
    cy.get('#product-grid > :nth-child(2) button').click()
    cy.get('#cart-sidebar-items ul > *').should('have.length', 2)
  })

  it('should click and open cart sidebar', () => {
    cy.wait('@get')

    cy.get('header #header-user-actions #button-cart').click()

    cy.wait(1000)
    cy.get('#sidebar').then(($sidebar) => {
      if ($sidebar.is(':visible')) {
        assert.isOk('everything', 'everything is OK')
      } else {
        assert.console.error('component is not visible')
      }
    })
  })

  it('should increment quantity item of the cart', () => {
    cy.wait('@get')

    cy.get('#product-grid > :nth-child(1) button').click()
    cy.get('#product-grid > :nth-child(2) button').click()

    cy.get('header #header-user-actions #button-cart').click()

    cy.wait(1000)
    cy.get(
      '#cart-sidebar-items ul > :nth-child(1) [data-cy=increase-item]',
    ).click()
    cy.get('#cart-sidebar-items ul > :nth-child(1) [data-cy=item-quantity]')
      .invoke('text')
      .should('eq', '2')
  })

  it('should decrement quantity item of the cart', () => {
    cy.wait('@get')

    cy.get('#product-grid > :nth-child(1) button').click()
    cy.get('#product-grid > :nth-child(2) button').click()

    cy.get('header #header-user-actions #button-cart').click()

    cy.wait(1000)
    cy.get(
      '#cart-sidebar-items ul > :nth-child(1) [data-cy=increase-item]',
    ).click()
    cy.wait(1000)
    cy.get(
      '#cart-sidebar-items ul > :nth-child(1) [data-cy=decrease-item]',
    ).click()
    cy.get('#cart-sidebar-items ul > :nth-child(1) [data-cy=item-quantity]')
      .invoke('text')
      .should('eq', '1')
  })

  it('should click the user button and redirect to login page', () => {
    cy.wait('@get')

    cy.get('header #header-user-actions > button:nth-child(1)').click()

    cy.wait(1000)
    cy.url().should('eq', [constants.baseURL, constants.loginPage].join('/'))
  })
})
