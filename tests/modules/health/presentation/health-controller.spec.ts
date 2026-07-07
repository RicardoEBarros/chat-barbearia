import { describe, it, expect } from '@jest/globals'

import { HealthController } from '@/modules/health/presentation/health-controller'

describe('HealthController Test Suíte', () => {

    it('Deve retornar o status code 200 se tudo der certo', async () => {
        const sut = new HealthController()
        const resposta = await sut.handler()
        expect(resposta.statusCode).toBe(200)
    })

})

