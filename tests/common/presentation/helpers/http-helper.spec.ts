import { describe, it, expect } from '@jest/globals'
import { faker } from '@faker-js/faker'

import { ok, serverError } from '@/common/presentation/helpers/http-helper'
import { StatusCode } from '@/common/presentation/enums/status-code'

describe('HttpHelper Test Suíte', () => {

    describe('ok', () => {
        
        it('Deve retornar o status code 200', () => {
            const resposta = ok()
            expect(resposta.statusCode).toBe(StatusCode.ok)
        })

        it('Deve retornar o body com o valor correto', () => {
            const fake = faker.lorem.word()
            const resposta = ok(fake)
            expect(resposta.body).toBe(fake) 
        })

        it('Deve retornar o valor padrão do body', () => {
            const valorPadrao = null
            const resposta = ok()
            expect(resposta.body).toEqual(valorPadrao) 
        })

    })

    describe('serverError', () => {

        it('Deve retornar o status code 500', () => {
            const error = new Error()
            const resposta = serverError(error)
            expect(resposta.statusCode).toBe(StatusCode.serverError)
        })

        it.todo('Deve retornar o body com o valor correto')
        it.todo('Deve retornar o body com o valor padrão')

    })

})
