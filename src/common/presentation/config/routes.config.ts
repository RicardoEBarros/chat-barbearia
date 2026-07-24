import { type Express, Router } from 'express'
import { readdirSync, statSync } from 'node:fs'
import { join } from 'node:path'

export default async (app: Express): Promise<void> => {
    
    const router = Router()
    app.use('/api', router)
    const modulesPath = join(__dirname, '../../../modules')

    try {
        const moduleFolders = readdirSync(modulesPath)

        for (const moduleFolder of moduleFolders) {
            const routesPath = join(modulesPath, moduleFolder, 'presentation', 'routes')
            try {
                if (statSync(routesPath).isDirectory()) {
                    const routeFiles = readdirSync(routesPath)
                    for (const file of routeFiles) {
                        const route = await import(join(routesPath, file))
                        if (route.default) {
                            route.default(router)
                        }
                    }
                }
            } catch {}
        }

    } catch {}
}

