import { Request, Response } from 'express'

import { Controller } from '../protocols/controller.protocol'
import { HttpRequest, HttpResponse } from '../protocols/http'

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = { body: req.body }
        const httpResponse: HttpResponse = await controller.handler(httpRequest)
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            res.status(httpResponse.statusCode).json(httpResponse.body)
        } else {
            res.status(httpResponse.statusCode).json({
                error: httpResponse.body.message
            })
        }
    }
}

