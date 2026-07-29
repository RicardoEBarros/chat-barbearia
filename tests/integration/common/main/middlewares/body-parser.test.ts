import request from 'supertest'
import { describe, it } from '@jest/globals'
import { Request, Response } from 'express'

import { app } from '@/common/main/config'
import { UrlRelatedObjectMother } from '@/tests/mocks/object-mothers'

describe('Body Parser Middleware Suíte', () => {

    it('Deve transformar body em json', async () => {

        const endPoint = UrlRelatedObjectMother.endPoint()
        app.post(endPoint, (req: Request, res: Response) => {
            res.send(req.body)
        })

        await request(app)
            .post(endPoint)
            .send({ nome: 'Ricardo' })
            .expect({ nome: 'Ricardo' })

    })

})

