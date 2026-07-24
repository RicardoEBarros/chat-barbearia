import { describe, it, expect } from '@jest/globals'

import { HttpRequestMother } from '../../../../mocks/object-mothers/http-request.mother'
import { ControllerStub } from '../../../../mocks/stubs/controller-stub'
import { SafeExecutionOfTheController } from '@/common/presentation/decorators/safe-execution-of-the-controller.decorator'

describe('SafeExecutionOfTheController Suíte', () => {

    it('Deve chamar o método handle do controller', async () => {

        const httpRequest = HttpRequestMother.oneProperty()
        const controllerStub = new ControllerStub()
        const sut = new SafeExecutionOfTheController(controllerStub)

        await sut.run(httpRequest)

        expect(controllerStub.callsCount).toBe(1)
        expect(controllerStub.input).toEqual(httpRequest)

    })

    it.todo('Deve retornar os dados do método handle se tudo der certo')
    it.todo('Deve lançar uma exceção se falhar')

})
