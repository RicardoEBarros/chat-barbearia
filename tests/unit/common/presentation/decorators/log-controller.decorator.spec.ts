import { describe, it, expect } from '@jest/globals'

import { makeLogControllerDecorator } from './mocks/log-controller-decorator.factory'

describe('LogControllerDecorator Suíte', () => {

    it('Deve chamar handler com o parrâmetro correto', async () => {

        const { sut, httpRequest, controllerStub } = makeLogControllerDecorator()

        await sut.handler({ body: httpRequest})
        expect(controllerStub.input.body).toEqual(httpRequest)
        expect(controllerStub.callsCount).toBe(1)

    })

    it('Não deve chamar logError se status code for da família 200', async () => {

        const { sut, httpRequest, controllerStub, logErrorRepositoryStub } = makeLogControllerDecorator()

        /** valores aleatórios */
        controllerStub.statusCode = 200 + (Math.trunc((Math.random() * 100)) % 99)
        controllerStub.body = new Error()

        await sut.handler({ body: httpRequest})
        expect(controllerStub.callsCount).toBe(1)
        expect(logErrorRepositoryStub.callsCount).toBe(0) 

    })

    it.todo('Deve chamar logError com o parâmetro correto se status code for da família 500')
    it.todo('Deve retornar o valor correto se tudo der certo')

})

