import { describe, it, expect } from '@jest/globals'

import { HealthController } from '@/modules/health/presentation/health-controller'
import { StatusCode } from '@/common/presentation/enums/status-code'

describe('HealthController Test Suíte', () => {

    it('Deve retornar o status code 200 se tudo der certo', async () => {
        const sut = new HealthController()
        const resposta = await sut.handler()
        expect(resposta.statusCode).toBe(StatusCode.ok)
    })

    it('Deve retornar o body com o valor null', async () => {
        const sut = new HealthController()
        const resposta = await sut.handler()
        expect(resposta.body).toBeNull() 
    })

    it.todo('Deve retornar o status code 500 se falhar')
    it.todo('Deve retornar uma mensagem de erro se falhar')

})
