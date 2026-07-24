import { serverError } from '../helpers/http-helper'
import { SafeExecution, HttpRequest, HttpResponse, Controller } from '../protocols'

export class SafeExecutionOfTheController implements SafeExecution {
    
    constructor(private readonly controller: Controller) {}

    async run(httpRequest: HttpRequest): Promise<HttpResponse> {

        try {
            return await this.controller.handle(httpRequest)            
        } catch (error) {
            return serverError((error as Error))
        }

    }
    
}
