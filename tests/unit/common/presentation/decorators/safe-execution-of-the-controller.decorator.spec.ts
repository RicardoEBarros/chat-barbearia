import { describe, it, expect } from '@jest/globals'

import { HttpRequestMother } from '../../../../mocks/object-mothers/http-request.mother'
import { ControllerStub } from '../../../../mocks/stubs/controller-stub'
import { SafeExecutionOfTheController } from '@/common/presentation/decorators/safe-execution-of-the-controller.decorator'
import { RandomStatusCodeObjectMother } from '../../../../mocks/object-mothers/random-status-code.mother'
import { serverError } from '@/common/presentation/helpers/http-helper'

describe('SafeExecutionOfTheController Suíte', () => {

    it('Deve chamar o método handle do controller', async () => {

        const httpRequest = HttpRequestMother.oneProperty()
        const controllerStub = new ControllerStub()
        const sut = new SafeExecutionOfTheController(controllerStub)

        await sut.run(httpRequest)

        expect(controllerStub.callsCount).toBe(1)
        expect(controllerStub.input).toEqual(httpRequest)

    })

    it('Deve retornar os dados do método handle se tudo der certo', async () => {

        const httpRequest = HttpRequestMother.oneProperty()
        const controllerStub = new ControllerStub()
        const sut = new SafeExecutionOfTheController(controllerStub)

        /** retorno aleatório */
        controllerStub.return.statusCode = RandomStatusCodeObjectMother.oneCodeBetweenAllValidFamilies()
        controllerStub.return.body = HttpRequestMother.oneProperty().body

        const httpResponse = await sut.run(httpRequest)

        expect(httpResponse).toEqual(controllerStub.return)        

    })

    it('Deve retornar o status code 500', async () => {

        const httpRequest = HttpRequestMother.oneProperty()
        const controllerStub = new ControllerStub()
        const sut = new SafeExecutionOfTheController(controllerStub)

        /** força um erro */
        controllerStub.error = true

        const httpResponse = await sut.run(httpRequest)

        expect(httpResponse).toEqual(serverError(new Error()))


    })

})
