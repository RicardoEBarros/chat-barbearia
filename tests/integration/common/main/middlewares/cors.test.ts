import request from 'supertest'
import { describe, it } from '@jest/globals'
import { UrlRelatedObjectMother } from '@/tests/mocks/object-mothers'
import { app } from '@/common/main/config'

describe('CORS Middleware Suíte', () => {

    it('Deve habilitar o CORS', async () => {

        const endPoint = UrlRelatedObjectMother.endPoint()
        app.get(endPoint, (req, res) => {
            res.send()
        })

        await request(app)
            .get(endPoint)
            .expect('access-control-allow-origin', '*')
            .expect('access-control-allow-methods', '*')
            .expect('access-control-allow-headers', '*')

    })

})
