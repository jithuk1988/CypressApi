/// <reference types="Cypress"/>

describe('Api Get user Tests',()=>{
    let accessToken = 'f60cf550b1f47d0a89c37adcf7c9dd8a21176b91a850a3ac9f25c5d84f613089'
    it('Get all users Test',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users',
            headers : {
                'Authorization':'Bearer '+accessToken
            }

        }).then((resp)=>{
        expect(resp.status).to.equals(200)
        expect(resp.body.meta.pagination.total).greaterThan(1365)
        })
    })

    it('Get users by Id Test',()=>{
        cy.request({
            method : 'GET',
            url : 'https://gorest.co.in/public/v1/users/16',
            headers : {
                'Authorization':'Bearer '+accessToken
            }

        }).then((resp)=>{
        expect(resp.status).to.equals(200)
        expect(resp.body.data.id).equals(16)
        expect(resp.body.data.name).equals('sai')
        expect(resp.body.data.email).equals('mahajan_bishnu@sawayn-cassin.name')
        expect(resp.body.data.gender).equals('male')
        expect(resp.body.data.status).equals('active')    
    })
    })
})
