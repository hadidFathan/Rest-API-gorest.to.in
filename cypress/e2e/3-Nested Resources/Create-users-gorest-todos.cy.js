describe('Create data todos users Rest API in gorest website', () => {
    it('Create data user todos in Gorest website', () => {
        cy.request({
            headers: {
                authorization: 'Bearer d15f406ac74aed4004adefeec0a1ef2d2663854f3d7285d29190923e3f79b5c1',
            },
            failOnStatusCode: false,
            method: 'POSt',
            url: 'https://gorest.co.in/public/v2/users/354/todos',
            body :
            {
                "id": 1994,
                "user_id": 4013,
                "title": "Succedo suscipio terga facere curriculum et.",
                "due_on": "2022-12-24T00:00:00.000+05:30",
                "status": "pending"
            }
        }).then((response => {
            expect(response.status).to.eq(201)
        }))
    })
})
