import { faker } from '@faker-js/faker'
import { describe, it, expect } from '@jest/globals'

import { ControllerStub } from '../../../../mocks/stubs/controller-stub'
import { LogControllerDecorator } from '@/common/presentation/decorators/log-controller.decorator'
import { LogErrorRepositoryMock } from './mocks/log-error-repository.mock'

describe('LogControllerDecorator Suíte', () => {

    it('Deve chamar handle com o parrâmetro correto', async () => {

        const httpRequest = JSON.parse(faker.datatype.json())
        const controllerStub = new ControllerStub()
        const logErrorRepositoryFake = new LogErrorRepositoryMock()
        const sut = new LogControllerDecorator(controllerStub, logErrorRepositoryFake)

        await sut.handler({ body: httpRequest})
        expect(controllerStub.input.body).toEqual(httpRequest)

    })

    it.todo('Não deve chamar logError se status code for da família 200')
    it.todo('Deve chamar logError com o parâmetro correto se status code for da família 500')
    it.todo('Deve retornar o valor correto se tudo der certo')

})

