import { InternalServerError } from '@/common/presentation/errors/internal-server-error.error'
import { ok } from '@/common/presentation/helpers/http-helper'
import { HttpResponse } from '@/common/presentation/protocols/http'

export class HealthController {

    async handler(): Promise<HttpResponse> {
        
        try {
            return ok()
        } catch {
            return {
                statusCode: 500,
                body: new InternalServerError()
            }
        }
    }

}
