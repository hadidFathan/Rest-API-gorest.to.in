describe('how to get users in Rest Api deails in website', () => {
    it('Get API Details users will display now', () => {
        cy.request({
            headers: {
                authorization: 'Basic d15f406ac74aed4004adefeec0a1ef2d2663854f3d7285d29190923e3f79b5c1'
            },
            failOnStatusCode: false,
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/',
          }).as('users')
          cy.get('@users').its('status').should('equal', 200)
    })
})