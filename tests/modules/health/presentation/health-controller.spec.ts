import { HealthController } from '@/modules/health/presentation/health-controller'
import { describe, it, expect } from '@jest/globals'

describe('HealthController Test Suíte', () => {

    it('Deve retornar o status code 200', async () => {
        const sut = new HealthController()
        const resposta = await sut.handler()
        expect(resposta.statusCode).toBe(200)
    })

})

