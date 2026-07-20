import express from 'express'
import request from 'supertest'
import { describe, it, expect, beforeAll } from '@jest/globals'

import { adaptRoute } from '@/common/presentation/adapters/express-route-adapter'
import { makeExpressRouteAdapter } from './mocks/factories/express-route-adapter.factory'

describe('ExpressRouteAdapter Suíte', () => {

    let localApp: any

    beforeAll(() => {
        localApp = express()
        localApp.use(express.json())
    })

    it('Deve chamar o método handler com o parâmetro correto', async () => {

        const { endPointFake, bodyFake, controllerStub } = makeExpressRouteAdapter()

        localApp.post(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .post(endPointFake)
            .send(bodyFake)

        expect(controllerStub.input.body).toEqual(bodyFake)

    })

    it.todo('Deve retornar o body correto se o status code estiver entre 200 e 299')
    it.todo('Deve retornar o error se o status code não estiver entre 200 e 299')

})

