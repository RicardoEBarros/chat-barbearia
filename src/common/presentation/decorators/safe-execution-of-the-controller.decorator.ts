import { serverError } from '../helpers/http-helper'
import { Controller } from '../protocols/controller.protocol'
import { HttpRequest, HttpResponse } from '../protocols/http'
import { SafeExecution } from '../protocols/safe-execution.protocol'

export class SafeExecutionOfTheController implements SafeExecution {
    
    constructor(private readonly controller: Controller) {}

    async run(httpRequest: HttpRequest): Promise<HttpResponse> {

        try {
            return await this.controller.handler(httpRequest)            
        } catch (error) {
            return serverError((error as Error))
        }

    }
    
}
