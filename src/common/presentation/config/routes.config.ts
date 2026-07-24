import { type Express, Router } from 'express'
import { readdirSync } from 'node:fs'
import { join } from 'node:path'

export default async (app: Express): Promise<void> => {
    
    const router = Router()
    app.use('/api', router)
    const modulesPath = join(__dirname, '../../../modules')

    try {
        readdirSync(modulesPath)
    } catch {}
}

