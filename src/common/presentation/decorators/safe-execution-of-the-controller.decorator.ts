import { ok } from '../helpers/http-helper'
import { Controller } from '../protocols/controller.protocol'
import { HttpRequest } from '../protocols/http'
import { SafeExecution } from '../protocols/safe-execution.protocol'

export class SafeExecutionOfTheController implements SafeExecution {
    
    constructor(private readonly controller: Controller) {}

    async run(httpRequest: HttpRequest): Promise<HttpRequest> {
        await this.controller.handler(httpRequest)
        return ok()
    }
    
}
