import { StatusCode } from '@/common/presentation/enums/status-code'
import { Controller } from '@/common/presentation/protocols/controller.protocol'
import { HttpRequest, HttpResponse } from '@/common/presentation/protocols/http'
import { faker } from '@faker-js/faker'

type Body = {
    stack?: string
} 

export class ControllerStub implements Controller {
    
    input: any
    statusCode: number = StatusCode.ok
    body: Body = JSON.parse(faker.datatype.json())
    callsCount: number = 0
    return: HttpResponse = { statusCode: StatusCode.ok, body: '' }

    async handler(httpRequest?: HttpRequest): Promise<HttpResponse> {
        this.input = httpRequest
        this.callsCount++
        this.return = { statusCode: this.statusCode, body: this.body }
        return this.return
    }            
}
