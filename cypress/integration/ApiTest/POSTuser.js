/// <reference types="Cypress"/>
const dataJson = require('../../fixtures/createUser')
describe('POST Create user tests',()=>{
    let acessToken = 'f60cf550b1f47d0a89c37adcf7c9dd8a21176b91a850a3ac9f25c5d84f613089'
    let randomText = ''
    let randomEmail = ''

    it('Create New User Test',()=>{
    var pattern='ABCDEFGHIJKLMNOPQRSTUIVWXYZ1234567890'
    for(var i=0;i<=10;i++)
    randomText+=pattern.charAt(Math.floor(Math.random()*pattern.length))
    randomEmail=randomText+'@gmail.com'
    cy.request({
        method:'POST',
        url:'https://gorest.co.in/public/v1/users',
        headers:{
            'Authorization': 'Bearer '+acessToken
        },
        body:{
            "name": dataJson.name,
            "email": randomEmail,
            "gender": dataJson.gender,
            "status": dataJson.status
        }

    }).then((resp)=>{
       /// cy.log(JSON.stringify(resp))
        expect(resp.status).equals(201)
        expect(resp.body.data).has.property('name',dataJson.name)
        expect(resp.body.data).has.property('gender',dataJson.gender)
        expect(resp.body.data).has.property('status',dataJson.status)
        expect(resp.body.data).has.property('email',randomEmail)

    })
})
})