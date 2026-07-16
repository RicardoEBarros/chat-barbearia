import { ok, serverError } from '@/common/presentation/helpers/http-helper'
import { Controller } from '@/common/presentation/protocols/controller.protocol'
import { HttpResponse } from '@/common/presentation/protocols/http'

export class HealthController implements Controller {

    async handler(): Promise<HttpResponse> {
        
        try {
            return ok()
        } catch (error){
            return serverError(error as Error)
        }
    }

}
