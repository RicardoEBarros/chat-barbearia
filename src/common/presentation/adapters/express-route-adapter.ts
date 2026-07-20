import { Request, Response } from 'express'

import { Controller } from '../protocols/controller.protocol'
import { HttpRequest, HttpResponse } from '../protocols/http'

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = { body: req.body }
        const httpResponse: HttpResponse = await controller.handler(httpRequest)
        res.status(httpResponse.statusCode).json(httpResponse.body)
    }
}

