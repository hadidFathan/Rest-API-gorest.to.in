describe('Can we upadate users in Rest API in gorest website', () => {
    it('Update user in Gorest website', () => {
        cy.request({
            headers: {
                authorization: 'Bearer d15f406ac74aed4004adefeec0a1ef2d2663854f3d7285d29190923e3f79b5c1',
            },
            failOnStatusCode: false,
            method: 'PUT',
            url: 'https://gorest.co.in/public/v2/users/57267',
            body :
                {
                    "id": 43256,
                    "name": "hadid fathan",
                    "email": "hadidfathan@gmail.com",
                    "gender": "male",
                    "status": "inactive"
            }
        }).then((response => {
            expect(response.status).to.eq(200)
        }))
    })
})
