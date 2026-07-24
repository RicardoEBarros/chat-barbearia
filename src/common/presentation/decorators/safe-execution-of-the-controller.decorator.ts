import { Controller } from '../protocols/controller.protocol'
import { HttpRequest } from '../protocols/http'
import { SafeExecution } from '../protocols/safe-execution.protocol'

export class SafeExecutionOfTheController implements SafeExecution {
    
    constructor(private readonly controller: Controller) {}

    async run(httpRequest: HttpRequest): Promise<HttpRequest> {
        return await this.controller.handler(httpRequest)
    }
    
}
