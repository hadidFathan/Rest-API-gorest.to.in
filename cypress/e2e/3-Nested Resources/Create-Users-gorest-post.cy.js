describe('Create data Post users Rest API in gorest website', () => {
    it('Create data user post in Gorest website', () => {
        cy.request({
            headers: {
                authorization: 'Bearer d15f406ac74aed4004adefeec0a1ef2d2663854f3d7285d29190923e3f79b5c1',
            },
            failOnStatusCode: false,
            method: 'POSt',
            url: 'https://gorest.co.in/public/v2/users/354/posts',
            body :
            {
                "id": 1786,
        "user_id": 4118,
        "title": "Omnis terabus peraminus oktanus sonitus comprehendo caelum sit creber minima corpus cum cras tricesimus aequitas sortitus alter.",
        "body": "Cervus cerebrus utrum amet. Conculco placeat pel. Adimpleo vorago auxilium. Corrumpo curo teneo. Utpote eius quo. Cohaero sint veritas. Voro volaticus doloremque. Et torqueo degero. Quia sumo tempora. Audacia degenero vespillo. Terga spectaculum adstringo. Demulceo adfero odit. Traho decet supplanto. Confero cetera corpus. Demitto vorax auris. Autem bis ante. Acies adsidue qui. Tum denuncio ara. Decens defigo video. Depraedor decipio arcus. Caterva quo aqua. Vix aedificium acervus."
            }
        }).then((response => {
            expect(response.status).to.eq(201)
        }))
    })
})
