import fs from 'node:fs'
import express, { type Express } from 'express'
import { describe, it, expect, jest, beforeEach } from '@jest/globals'

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

    it('Deve buscar pastas dentro do diretório modules', async () => {

        await setupRoutes(app)

        expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringContaining('modules'))

    })

    it('Deve ignorar módulos que não possuem a pasta presentation/routes', async () => {

        jest.spyOn(fs, 'readdirSync').mockImplementation((path: any) => {
            if (path.includes('modules') && !path.includes('routes')) {
                return [ 'health', 'common' ] as any
            }
            if (path.includes('health')) {
                return [ 'health.routes.ts' ] as any
            }
            return []
        })

        jest.spyOn(fs, 'statSync').mockImplementation((path: any) => {
            if (path.includes('common')) {
                throw new Error('ENOENT: no such file or directory')
            }
            return { isDirectory: () => true } as any
        })

        await setupRoutes(app)

        expect(fs.readdirSync).toHaveBeenCalledWith(expect.stringContaining('health/presentation/route'))

    })

})

