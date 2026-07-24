import { describe, it, expect } from '@jest/globals'

import { HttpRequestMother, RandomStatusCodeObjectMother } from '../../../../mocks/object-mothers'
import { serverError } from '@/common/presentation/helpers/http-helper'
import { makeSafeExecutionOfTheController } from './mocks/safe-execution-of-the-controller.factory'

describe('SafeExecutionOfTheController Suíte', () => {

    it('Deve chamar o método handle do controller', async () => {

        const { sut, httpRequest, controllerStub } = makeSafeExecutionOfTheController()

        await sut.run(httpRequest)

        expect(controllerStub.callsCount).toBe(1)
        expect(controllerStub.input).toEqual(httpRequest)

    })

    it('Deve retornar os dados do método handle se tudo der certo', async () => {

        const { sut, httpRequest, controllerStub } = makeSafeExecutionOfTheController()

        /** retorno aleatório */
        controllerStub.return.statusCode = RandomStatusCodeObjectMother.oneCodeBetweenAllValidFamilies()
        controllerStub.return.body = HttpRequestMother.oneProperty().body

        const httpResponse = await sut.run(httpRequest)

        expect(httpResponse).toEqual(controllerStub.return)        

    })

    it('Deve retornar o status code 500', async () => {

        const { sut, httpRequest, controllerStub } = makeSafeExecutionOfTheController()

        /** força um erro */
        controllerStub.error = true

        const httpResponse = await sut.run(httpRequest)

        expect(httpResponse).toEqual(serverError(new Error()))


    })

})
