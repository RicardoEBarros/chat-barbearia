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

    it('Deve chamar o método handler sem o parâmetro body se método for GET', async () => {

        const { endPointFake, bodyFake, controllerStub } = makeExpressRouteAdapter()

        localApp.get(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .get(endPointFake)
            .send(bodyFake)

        expect(controllerStub.input).toBe(undefined)

    })        

    it('Deve chamar o método handler sem o parâmetro body se método for DELETE', async () => {

        const { endPointFake, bodyFake, controllerStub } = makeExpressRouteAdapter()

        localApp.get(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .delete(endPointFake)
            .send(bodyFake)

        expect(controllerStub.input).toBe(undefined)

    })       

    it.todo('Deve retornar o body correto se o status code estiver entre 200 e 299')
    it.todo('Deve retornar o error se o status code não estiver entre 200 e 299')

})

