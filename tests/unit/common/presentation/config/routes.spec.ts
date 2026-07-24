import { describe, it, expect, jest, beforeEach } from '@jest/globals'
import fs from 'fs'
import express, { type Express } from 'express'
import setupRoutes from '@/common/presentation/config'

jest.mock('node:fs')

describe('Routes Setup Suíte', () => {

    let app: Express

    beforeEach(() => {
        app = express()
        jest.clearAllMocks()
    })

    it('Deve registrar o prefixo ./api no Express', async () => {

        const appUseSpy = jest.spyOn(app, 'use')
        jest.spyOn(fs, 'readdirSync').mockReturnValue([])
        
        await setupRoutes(app)

        expect(appUseSpy).toHaveBeenCalledWith('/api', expect.any(Function))

    })

    it.todo('Deve buscar pastas dentro do diretório modules')
    it.todo('Deve ignorar módulos que não possuem a pasta presentation/routes')

})

