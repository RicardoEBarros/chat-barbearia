import express from 'express'
import request from 'supertest'
import { describe, it, expect, beforeAll, beforeEach } from '@jest/globals'

import { adaptRoute } from '@/common/presentation/adapters/express-route-adapter'
import { makeExpressRouteAdapter } from './mocks/factories/express-route-adapter.factory'
import { faker } from '@faker-js/faker'

describe('ExpressRouteAdapter Suíte', () => {

    let localApp: any
    let randomSuccessStatusCode: number

    beforeEach(() => {
        randomSuccessStatusCode = Math.trunc(200 + (Math.random() * 100))
    })

    beforeAll(() => {
        localApp = express()
        localApp.use(express.json())
    })

    it('Deve chamar o método handler com o parâmetro correto se método for POST', async () => {

        const { endPointFake, bodyFake, controllerStub } = makeExpressRouteAdapter()

        localApp.post(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .post(endPointFake)
            .send(bodyFake)

        expect(controllerStub.input.body).toEqual(bodyFake)

    })

    it('Deve chamar o método handler sem um body se método for POST', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        localApp.post(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .post(endPointFake)

        expect(controllerStub.input?.body).toEqual(undefined)

    })    

    it('Deve chamar o método handler com o parâmetro correto se método for GET', async () => {

        const { endPointFake, bodyFake, controllerStub } = makeExpressRouteAdapter()

        localApp.get(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .get(endPointFake)
            .send(bodyFake)

        expect(controllerStub.input.body).toEqual(bodyFake)

    })    


    it('Deve chamar o método handler sem um body se método for GET', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        localApp.get(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .get(endPointFake)

        expect(controllerStub.input?.body).toEqual(undefined)

    })        
    
    it('Deve chamar o método handler com o parâmetro correto se método for PUT', async () => {

        const { endPointFake, bodyFake, controllerStub } = makeExpressRouteAdapter()

        localApp.put(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .put(endPointFake)
            .send(bodyFake)

        expect(controllerStub.input.body).toEqual(bodyFake)

    })      

    it('Deve chamar o método handler sem um body se método for PUT', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        localApp.put(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .put(endPointFake)

        expect(controllerStub.input?.body).toEqual(undefined)

    })          

    it('Deve chamar o método handler com o parâmetro correto se método for DELETE', async () => {

        const { endPointFake, bodyFake, controllerStub } = makeExpressRouteAdapter()

        localApp.delete(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .delete(endPointFake)
            .send(bodyFake)

        expect(controllerStub.input.body).toEqual(bodyFake)

    })       

    it('Deve chamar o método handler sem um body se método for DELETE', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        localApp.delete(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .delete(endPointFake)

        expect(controllerStub.input?.body).toEqual(undefined)

    })       

    it('Deve chamar o método handler com o parâmetro correto se método for PATCH', async () => {

        const { endPointFake, bodyFake, controllerStub } = makeExpressRouteAdapter()

        localApp.patch(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .patch(endPointFake)
            .send(bodyFake)

        expect(controllerStub.input.body).toEqual(bodyFake)

    })       
    
    it('Deve chamar o método handler sem um body se método for PATCH', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        localApp.patch(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .patch(endPointFake)

        expect(controllerStub.input?.body).toEqual(undefined)

    })    

    it('Deve retornar o body correto se o status code estiver entre 200 e 299 se POST', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        /** Criam valores de retorno aleatórios */
        controllerStub.statusCode = randomSuccessStatusCode
        controllerStub.body = JSON.parse(faker.datatype.json())

        localApp.post(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .post(endPointFake)
            .expect(controllerStub.statusCode)
            .expect(controllerStub.body)

    })

    it('Deve retornar o body correto se o status code estiver entre 200 e 299 se GET', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        /** Criam valores de retorno aleatórios */
        controllerStub.statusCode = randomSuccessStatusCode
        controllerStub.body = JSON.parse(faker.datatype.json())

        localApp.get(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .get(endPointFake)
            .expect(controllerStub.statusCode)
            .expect(controllerStub.body)

    })    

    it('Deve retornar o body correto se o status code estiver entre 200 e 299 se DELETE', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        /** Criam valores de retorno aleatórios */
        controllerStub.statusCode = randomSuccessStatusCode
        controllerStub.body = JSON.parse(faker.datatype.json())

        localApp.delete(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .delete(endPointFake)
            .expect(controllerStub.statusCode)
            .expect(controllerStub.body)

    })        
    
    it('Deve retornar o body correto se o status code estiver entre 200 e 299 se PUT', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        /** Criam valores de retorno aleatórios */
        controllerStub.statusCode = randomSuccessStatusCode
        controllerStub.body = JSON.parse(faker.datatype.json())

        localApp.put(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .put(endPointFake)
            .expect(controllerStub.statusCode)
            .expect(controllerStub.body)

    })       

    it('Deve retornar o body correto se o status code estiver entre 200 e 299 se PATCH', async () => {

        const { endPointFake, controllerStub } = makeExpressRouteAdapter()

        /** Criam valores de retorno aleatórios */
        controllerStub.statusCode = randomSuccessStatusCode
        controllerStub.body = JSON.parse(faker.datatype.json())

        localApp.patch(endPointFake, adaptRoute(controllerStub))

        await request(localApp)
            .patch(endPointFake)
            .expect(controllerStub.statusCode)
            .expect(controllerStub.body)

    })         
    
    it.todo('Deve retornar o error se o status code não estiver entre 200 e 299')

})

