import { describe, it, expect } from '@jest/globals'

import { makeLogControllerDecorator } from './mocks/log-controller-decorator.factory'

describe('LogControllerDecorator Suíte', () => {

    it('Deve chamar handler com o parrâmetro correto', async () => {

        const { sut, httpRequest, controllerStub } = makeLogControllerDecorator()

        await sut.handler({ body: httpRequest})
        expect(controllerStub.input.body).toEqual(httpRequest)

    })

    it.todo('Não deve chamar logError se status code for da família 200')
    it.todo('Deve chamar logError com o parâmetro correto se status code for da família 500')
    it.todo('Deve retornar o valor correto se tudo der certo')

})

