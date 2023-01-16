describe('Can we delete this users in Rest API in gorest website', () => {
    it('Delete user in Gorest website', () => {
        cy.request({
            headers: {
                authorization: 'Bearer d15f406ac74aed4004adefeec0a1ef2d2663854f3d7285d29190923e3f79b5c1',
            },
            failOnStatusCode: false,
            method: 'DELETE',
            url: 'https://gorest.co.in/public/v2/users/57267',
        }).then((response => {
            expect(response.status).to.eq(204)
        }))
    })
})
