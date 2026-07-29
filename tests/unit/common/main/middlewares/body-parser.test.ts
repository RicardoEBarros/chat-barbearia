import request from 'supertest'
import { faker } from '@faker-js/faker'
import { describe, it } from '@jest/globals'
import { Request, Response } from 'express'

import { app } from '@/common/main/config'

describe('Body Parser Middleware Suíte', () => {

    it('Deve transformar body em json', async () => {

        const url = `/${faker.internet.domainWord()}`
        app.post(url, (req: Request, res: Response) => {
            res.send(req.body)
        })

        await request(app)
            .post(url)
            .send({ nome: 'Ricardo' })
            .expect({ nome: 'Ricardo' })

    })

})

