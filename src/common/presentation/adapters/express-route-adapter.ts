import { Request, Response } from 'express'

import { StatusCode } from '../enums/status-code'
import { Controller } from '../protocols/controller.protocol'
import { HttpRequest } from '../protocols/http'

const METHODS_WITH_BODY_PARAMETER = [ 'post', 'put', 'patch' ]

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        let httpRequest: HttpRequest | undefined
        if (METHODS_WITH_BODY_PARAMETER.includes(req.method.toLowerCase())) {
            httpRequest = { body: req.body }
        }
        await controller.handler(httpRequest)
        res.status(StatusCode.ok).json({})
    }
}

