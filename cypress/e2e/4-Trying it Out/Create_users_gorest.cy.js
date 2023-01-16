describe('how to Create users in Rest Api deails in website', () => {
    it('Create API Details users will display now and sucsess input Create API', () => {
        cy.request({
            headers: {
                authorization: 'Bearer d15f406ac74aed4004adefeec0a1ef2d2663854f3d7285d29190923e3f79b5c1',
            },
            failOnStatusCode: false,
            method: 'POST',
            url: 'https://gorest.co.in/public/v2/users/',
            body :
                {
                    "id": 43256,
                    "name":"hadid Fathonah",
                    "gender":"Female",
                    "email":"hadidfathanfatonah@gmail.com",
                    "status":"active"
                   
            }
        }).then((response => {
            expect(response.status).to.eq(201)
        }))
    })
})