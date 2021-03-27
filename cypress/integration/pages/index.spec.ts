/// <reference types="cypress" />

context('Home Screen', () => {
  beforeEach(() => {
    cy.visit('/')
  })

  it('Initial test', () => {
    expect(true).to.equal(true)
  })
})
