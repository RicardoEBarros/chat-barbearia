import { faker } from '@faker-js/faker'
import { describe, it, expect } from '@jest/globals'

import { makeLogControllerDecorator } from './mocks'
import { RandomStatusCodeObjectMother } from '@/tests/mocks/object-mothers'

describe('LogControllerDecorator Suíte', () => {

    it('Deve chamar handle com o parrâmetro correto', async () => {

        const { sut, httpRequest, controllerStub } = makeLogControllerDecorator()

        await sut.handle({ body: httpRequest})
        expect(controllerStub.input.body).toEqual(httpRequest)
        expect(controllerStub.callsCount).toBe(1)

    })

    it('Não deve chamar logError se status code for da família 200', async () => {

        const { sut, httpRequest, controllerStub, logErrorRepositoryStub } = makeLogControllerDecorator()

        /** valores aleatórios */
        controllerStub.statusCode = RandomStatusCodeObjectMother.successCode()

        await sut.handle({ body: httpRequest})
        expect(controllerStub.callsCount).toBe(1)
        expect(logErrorRepositoryStub.callsCount).toBe(0) 

    })

    it('Deve chamar logError com o parâmetro correto se status code for da família 500', async () => {

        const { sut, httpRequest, controllerStub, logErrorRepositoryStub } = makeLogControllerDecorator()

        /** valores aleatórios */
        controllerStub.statusCode = RandomStatusCodeObjectMother.serverErrorCode()
        controllerStub.body = new Error()

        await sut.handle({ body: httpRequest})
        expect(controllerStub.callsCount).toBe(1)
        expect(logErrorRepositoryStub.callsCount).toBe(1)         
        expect(logErrorRepositoryStub.input).toEqual(controllerStub.body.stack)

    })

    it('Deve retornar o valor correto se tudo der certo', async () => {

        const { sut, httpRequest, controllerStub } = makeLogControllerDecorator()

        /** valores aleatórios */
        controllerStub.statusCode = RandomStatusCodeObjectMother.oneCodeBetweenAllValidFamilies()
        controllerStub.body = JSON.parse(faker.datatype.json())

        const httpResponse = await sut.handle({ body: httpRequest})
        expect(controllerStub.callsCount).toBe(1)
        expect(httpResponse).toEqual(controllerStub.return)

    })

})

