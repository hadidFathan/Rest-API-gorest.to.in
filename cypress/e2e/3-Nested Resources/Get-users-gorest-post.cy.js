describe('WE Checking data Post users Rest API in gorest website', () => {
    it('Get data user post in Gorest website', () => {
        cy.request({
            headers: {
                authorization: 'Bearer d15f406ac74aed4004adefeec0a1ef2d2663854f3d7285d29190923e3f79b5c1',
            },
            failOnStatusCode: false,
            method: 'GET',
            url: 'https://gorest.co.in/public/v2/users/354/posts',
        }).then((response => {
            expect(response.status).to.eq(200)
        }))
    })
})
