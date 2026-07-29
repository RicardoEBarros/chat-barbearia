import express from 'express'
import request from 'supertest'
import { faker } from '@faker-js/faker'
import { describe, it, expect, beforeEach } from '@jest/globals'

import { makeExpressRouteAdapter } from './mocks/express-route-adapter.factory'
import { adaptRoute } from '@/common/main/adapters/express-route-adapter'
import { UrlRelatedObjectMother } from '@/tests/mocks/object-mothers'

describe('ExpressRouteAdapter Suíte', () => {

    let localApp: any
    let endPoint: string

    beforeEach(() => {
        localApp = express()
        localApp.use(express.json())  
        endPoint = UrlRelatedObjectMother.endPoint()      
    })

    describe('POST', () => {

        it('Deve chamar o método handle com o parâmetro correto se método for POST', async () => {

            const { bodyFake, controllerStub } = makeExpressRouteAdapter()

            localApp.post(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .post(endPoint)
                .send(bodyFake)

            expect(controllerStub.input.body).toEqual(bodyFake)

        })

        it('Deve chamar o método handle sem um body se método for POST', async () => {

            const { controllerStub } = makeExpressRouteAdapter()

            localApp.post(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .post(endPoint)

            expect(controllerStub.input?.body).toEqual(undefined)

        })  
        

        it('Deve retornar o body correto se o status code estiver entre 200 e 299 se POST', async () => {

            const { randomSuccessStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            controllerStub.statusCode = randomSuccessStatusCode
            controllerStub.body = JSON.parse(faker.datatype.json())

            localApp.post(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .post(endPoint)
                .expect(controllerStub.statusCode)
                .expect(controllerStub.body)

        })        

        it('Deve retornar o parâmetro error se o status code não estiver entre 200 e 299 se POST', async () => {

            const { randomErrorStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            const errorMessage = JSON.parse(faker.datatype.json())
            controllerStub.statusCode = randomErrorStatusCode
            controllerStub.body = { message: errorMessage }

            localApp.post(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .post(endPoint)
                .expect(randomErrorStatusCode)
                .expect({ error: errorMessage })

        })

    })

    describe('GET', () => {

        it('Deve chamar o método handle com o parâmetro correto se método for GET', async () => {

            const { bodyFake, controllerStub } = makeExpressRouteAdapter()

            localApp.get(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .get(endPoint)
                .send(bodyFake)

            expect(controllerStub.input.body).toEqual(bodyFake)

        })    


        it('Deve chamar o método handle sem um body se método for GET', async () => {

            const { controllerStub } = makeExpressRouteAdapter()

            localApp.get(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .get(endPoint)

            expect(controllerStub.input?.body).toEqual(undefined)

        })        

        it('Deve retornar o body correto se o status code estiver entre 200 e 299 se GET', async () => {

            const { randomSuccessStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            controllerStub.statusCode = randomSuccessStatusCode
            controllerStub.body = JSON.parse(faker.datatype.json())

            localApp.get(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .get(endPoint)
                .expect(controllerStub.statusCode)
                .expect(controllerStub.body)

        })         
        
        it('Deve retornar o parâmetro error se o status code não estiver entre 200 e 299 se GET', async () => {

            const { randomErrorStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            const errorMessage = JSON.parse(faker.datatype.json())
            controllerStub.statusCode = randomErrorStatusCode
            controllerStub.body = { message: errorMessage }

            localApp.get(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .get(endPoint)
                .expect(randomErrorStatusCode)
                .expect({ error: errorMessage })

        })    

    })

    describe('PUT', () => {

        it('Deve chamar o método handle com o parâmetro correto se método for PUT', async () => {

            const { bodyFake, controllerStub } = makeExpressRouteAdapter()

            localApp.put(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .put(endPoint)
                .send(bodyFake)

            expect(controllerStub.input.body).toEqual(bodyFake)

        })      

        it('Deve chamar o método handle sem um body se método for PUT', async () => {

            const { controllerStub } = makeExpressRouteAdapter()

            localApp.put(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .put(endPoint)

            expect(controllerStub.input?.body).toEqual(undefined)

        }) 

        it('Deve retornar o body correto se o status code estiver entre 200 e 299 se PUT', async () => {

            const { randomSuccessStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            controllerStub.statusCode = randomSuccessStatusCode
            controllerStub.body = JSON.parse(faker.datatype.json())

            localApp.put(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .put(endPoint)
                .expect(controllerStub.statusCode)
                .expect(controllerStub.body)

        })     

        it('Deve retornar o parâmetro error se o status code não estiver entre 200 e 299 se PUT', async () => {

            const { randomErrorStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            const errorMessage = JSON.parse(faker.datatype.json())
            controllerStub.statusCode = randomErrorStatusCode
            controllerStub.body = { message: errorMessage }

            localApp.put(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .put(endPoint)
                .expect(randomErrorStatusCode)
                .expect({ error: errorMessage })

        })     

    })

    describe('PATCH', () => {

        it('Deve chamar o método handle com o parâmetro correto se método for PATCH', async () => {

            const { bodyFake, controllerStub } = makeExpressRouteAdapter()

            localApp.patch(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .patch(endPoint)
                .send(bodyFake)

            expect(controllerStub.input.body).toEqual(bodyFake)

        })       
            
        it('Deve chamar o método handle sem um body se método for PATCH', async () => {

            const { controllerStub } = makeExpressRouteAdapter()

            localApp.patch(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .patch(endPoint)

            expect(controllerStub.input?.body).toEqual(undefined)

        }) 
        

        it('Deve retornar o body correto se o status code estiver entre 200 e 299 se PATCH', async () => {

            const { randomSuccessStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            controllerStub.statusCode = randomSuccessStatusCode
            controllerStub.body = JSON.parse(faker.datatype.json())

            localApp.patch(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .patch(endPoint)
                .expect(controllerStub.statusCode)
                .expect(controllerStub.body)

        })            

        it('Deve retornar o parâmetro error se o status code não estiver entre 200 e 299 se PATCH', async () => {

            const { randomErrorStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            const errorMessage = JSON.parse(faker.datatype.json())
            controllerStub.statusCode = randomErrorStatusCode
            controllerStub.body = { message: errorMessage }

            localApp.patch(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .patch(endPoint)
                .expect(randomErrorStatusCode)
                .expect({ error: errorMessage })

        }) 

    })

    describe('DELETE', () => {

        it('Deve chamar o método handle com o parâmetro correto se método for DELETE', async () => {

            const { bodyFake, controllerStub } = makeExpressRouteAdapter()

            localApp.delete(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .delete(endPoint)
                .send(bodyFake)

            expect(controllerStub.input.body).toEqual(bodyFake)

        })       

        it('Deve chamar o método handle sem um body se método for DELETE', async () => {

            const { controllerStub } = makeExpressRouteAdapter()

            localApp.delete(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .delete(endPoint)

            expect(controllerStub.input?.body).toEqual(undefined)

        })       

        it('Deve retornar o body correto se o status code estiver entre 200 e 299 se DELETE', async () => {

            const { randomSuccessStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            controllerStub.statusCode = randomSuccessStatusCode
            controllerStub.body = JSON.parse(faker.datatype.json())

            localApp.delete(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .delete(endPoint)
                .expect(controllerStub.statusCode)
                .expect(controllerStub.body)

        })        
            

        it('Deve retornar o parâmetro error se o status code não estiver entre 200 e 299 se DELETE', async () => {

            const { randomErrorStatusCode, controllerStub } = makeExpressRouteAdapter()

            /** Criam valores de retorno aleatórios */
            const errorMessage = JSON.parse(faker.datatype.json())
            controllerStub.statusCode = randomErrorStatusCode
            controllerStub.body = { message: errorMessage }

            localApp.delete(endPoint, adaptRoute(controllerStub))

            await request(localApp)
                .delete(endPoint)
                .expect(randomErrorStatusCode)
                .expect({ error: errorMessage })

        })     

    })             
 
})

