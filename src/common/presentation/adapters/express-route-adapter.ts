import { Request, Response } from 'express'

import { Controller } from '../protocols/controller.protocol'
import { HttpRequest, HttpResponse } from '../protocols/http'

export const adaptRoute = (controller: Controller) => {
    return async (req: Request, res: Response) => {
        const httpRequest: HttpRequest = { body: req.body }
        const httpResponse: HttpResponse = await controller.handler(httpRequest)
        const responseWithStatus = res.status(httpResponse.statusCode)
        if (httpResponse.statusCode >= 200 && httpResponse.statusCode <= 299) {
            responseWithStatus.json(httpResponse.body)
        } else {
            responseWithStatus.json({
                error: httpResponse.body.message
            })
        }
    }
}

