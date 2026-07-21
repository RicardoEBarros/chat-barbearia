import { describe, it, expect, jest } from '@jest/globals'

import { StatusCode } from '@/common/presentation/enums/status-code'
import { InternalServerError } from '@/common/presentation/errors/internal-server-error.error'
import * as HttpHelper from '@/common/presentation/helpers/http-helper'
import { makeHealthController } from './mocks/health-controller.factory'

describe('HealthController Test Suíte', () => {

    it('Deve retornar o status code 200 se tudo der certo', async () => {
        const { sut } = makeHealthController()
        const resposta = await sut.handler()
        expect(resposta.statusCode).toBe(StatusCode.ok)
    })

    it('Deve retornar o body com o valor null', async () => {
        const { sut } = makeHealthController()
        const resposta = await sut.handler()
        expect(resposta.body).toBeNull() 
    })

    it('Deve retornar o status code 500 se falhar', async () => {
        const { sut } = makeHealthController()
        jest.spyOn(HttpHelper, 'ok').mockImplementationOnce(() => { throw new Error() })
        const resposta = await sut.handler()
        expect(resposta.statusCode).toBe(StatusCode.serverError)  
    })

    it('Deve retornar uma mensagem de erro se falhar', async () => {
        const { sut } = makeHealthController()
        jest.spyOn(HttpHelper, 'ok').mockImplementationOnce(() => { throw new Error() })
        const resposta = await sut.handler()
        expect(resposta.body).toEqual(new InternalServerError())   
    })

})
