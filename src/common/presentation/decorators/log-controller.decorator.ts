import { ok } from '../helpers/http-helper'
import { Controller } from '../protocols/controller.protocol'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { LogError } from '../protocols/log-error.protocol'

export class LogControllerDecorator implements Controller {

    constructor(private readonly controller: Controller, private readonly logError: LogError) {}

    async handler(httpRequest?: HttpRequest): Promise<HttpResponse> {
        await this.controller.handler(httpRequest)
        return ok()
    }

}
