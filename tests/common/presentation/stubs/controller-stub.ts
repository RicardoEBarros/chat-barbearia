import { ok } from '@/common/presentation/helpers/http-helper'
import { Controller } from '@/common/presentation/protocols/controller.protocol'
import { HttpRequest, HttpResponse } from '@/common/presentation/protocols/http'

export class ControllerStub implements Controller {
    
    input: any

    async handler(httpRequest?: HttpRequest): Promise<HttpResponse> {
        this.input = httpRequest
        return ok()
    }            
}
