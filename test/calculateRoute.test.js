const { expect } = require('chai')
const request = require('supertest')

// const express = require('express')
const app = require('../app')

describe('Calculate route test suite: ', () => {

    it('/calculate/add - Should respond with addition result', async () => {
        const { body } = await request(app)
            .post('/calculate/add')
            .send({number1: 10, number2: 20})
            .set('Content-Type', 'application/json')

        expect(body).to.have.property('operation').equal('add')
        expect(body).to.have.property('result').equal(30)
        expect(body).to.have.property('status').equal('success')
    })

    it('/calculate/subtract - Should respond with subtraction result', async () => {
        const { body } = await request(app)
            .post('/calculate/subtract')
            .send({number1: 20, number2: 10})
            .set('Content-Type', 'application/json')

        expect(body).to.have.property('operation').equal('subtract')
        expect(body).to.have.property('result').equal(10)
        expect(body).to.have.property('status').equal('success')
    })

    it('/calculate/multiply - Should respond with multiplication result', async () => {
        const { body } = await request(app)
            .post('/calculate/multiply')
            .send({number1: 20, number2: 10})
            .set('Content-Type', 'application/json')

        expect(body).to.have.property('operation').equal('multiply')
        expect(body).to.have.property('result').equal(200)
        expect(body).to.have.property('status').equal('success')
    })

    it('/calculate/divide - Should respond with division result', async () => {
        const { body } = await request(app)
            .post('/calculate/divide')
            .send({number1: 20, number2: 10})
            .set('Content-Type', 'application/json')

        expect(body).to.have.property('operation').equal('divide')
        expect(body).to.have.property('result').equal(2)
        expect(body).to.have.property('status').equal('success')
    })
})