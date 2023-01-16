describe('Create data Post users Rest API in gorest website', () => {
    it('Create data user post in Gorest website', () => {
        cy.request({
            headers: {
                authorization: 'Bearer d15f406ac74aed4004adefeec0a1ef2d2663854f3d7285d29190923e3f79b5c1',
            },
            failOnStatusCode: false,
            method: 'POSt',
            url: 'https://gorest.co.in/public/v2/posts/354/comments',
            body :
            {"id":1847,"post_id":1824,"name":"Ekalavya Pilla","email":"pilla_ekalavya@legros-dubuque.co","body":"Asperiores corrupti reiciendis. Sed occaecati recusandae."}
        }).then((response => {
            expect(response.status).to.eq(201)
        }))
    })
})
