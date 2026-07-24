import { ok, serverError } from '@/common/presentation/helpers/http-helper'
import { HttpResponse, Controller } from '@/common/presentation/protocols'

export class HealthController implements Controller {

    async handler(): Promise<HttpResponse> {
        
        try {
            return ok()
        } catch (error){
            return serverError(error as Error)
        }
    }

}
