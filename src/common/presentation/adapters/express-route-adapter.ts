import { Request, Response } from 'express'

import { StatusCode } from '../enums/status-code'
import { Controller } from '../protocols/controller.protocol'
import { HttpRequest } from '../protocols/http'

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        let httpRequest: HttpRequest | undefined
        if (req?.body) {
            httpRequest = { body: req.body }
        }
        await controller.handler(httpRequest)
        res.status(StatusCode.ok).json({})
    }
}

