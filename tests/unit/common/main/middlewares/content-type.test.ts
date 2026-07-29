import request from 'supertest'
import { describe, it, beforeEach } from '@jest/globals'

import { app } from '@/common/main/config'
import { UrlRelatedObjectMother } from '@/tests/mocks/object-mothers'

describe('ContentType Middleware Suíte', () => {

    let endPoint: string

    beforeEach(() => {
        endPoint = UrlRelatedObjectMother.endPoint()
    })

    it('Deve retornar o content-type default como json', async () => {
       
        app.post(endPoint, (req, res) => {
            res.send()
        })

        await request(app)
            .post(endPoint)
            .expect('content-type', /json/)

    })

    it('Deve retornar o tipo xml quando forçado', async () => {

        app.post(endPoint, (req, res) => {
            res.type('xml')
            res.send()
        })

        await request(app)
            .post(endPoint)
            .expect('content-type', /xml/)

    })
        
})
