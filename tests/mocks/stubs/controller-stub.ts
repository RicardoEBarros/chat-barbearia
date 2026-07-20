import { StatusCode } from '@/common/presentation/enums/status-code'
import { Controller } from '@/common/presentation/protocols/controller.protocol'
import { HttpRequest, HttpResponse } from '@/common/presentation/protocols/http'
import { faker } from '@faker-js/faker'

export class ControllerStub implements Controller {
    
    input: any
    statusCode: number = StatusCode.ok
    body: object = JSON.parse(faker.datatype.json())

    async handler(httpRequest?: HttpRequest): Promise<HttpResponse> {
        this.input = httpRequest
        return {
            statusCode: this.statusCode,
            body: this.body
        }
    }            
}
