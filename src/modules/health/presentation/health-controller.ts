import { ok, serverError } from '@/common/presentation/helpers/http-helper'
import { HttpResponse } from '@/common/presentation/protocols/http'

export class HealthController {

    async handler(): Promise<HttpResponse> {
        
        try {
            return ok()
        } catch (error){
            return serverError(error as Error)
        }
    }

}
