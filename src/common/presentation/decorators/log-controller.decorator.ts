import { LogError, HttpRequest, HttpResponse, Controller } from '../protocols'

export class LogControllerDecorator implements Controller {

    constructor(private readonly controller: Controller, private readonly logErrorRepository: LogError) {}

    async handler(httpRequest?: HttpRequest): Promise<HttpResponse> {
        const httpResponse = await this.controller.handler(httpRequest)
        if (httpResponse.statusCode >= 500 && httpResponse.statusCode <= 599) {
            await this.logErrorRepository.logError(httpResponse.body.stack)
        }
        return httpResponse
    }

}
