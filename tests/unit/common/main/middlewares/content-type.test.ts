import request from 'supertest'
import { describe, it } from '@jest/globals'

import { app } from '@/common/main/config'
import { UrlRelatedObjectMother } from '@/tests/mocks/object-mothers'

describe('ContentType Middleware Suíte', () => {

    it('Deve retornar o content-type default como json', async () => {
       
        const endPoint = UrlRelatedObjectMother.endPoint()

        app.post(endPoint, (req, res) => {
            res.send()
        })

        await request(app)
            .post(endPoint)
            .expect('content-type', /json/)

    })
        
})
