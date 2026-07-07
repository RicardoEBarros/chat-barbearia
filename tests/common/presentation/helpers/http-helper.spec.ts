import { describe, it, expect } from '@jest/globals'

import { ok } from '@/common/presentation/helpers/http-helper'
import { StatusCode } from '@/common/presentation/enums/status-code'

describe('HttpHelper Test Suíte', () => {

    describe('ok', () => {
        
        it('Deve retornar o status code 200', () => {
            const httpResponse = ok(null)
            expect(httpResponse.statusCode).toBe(StatusCode.ok)
        })

        it.todo('Deve retornar o body com o valor correto')

    })

})
