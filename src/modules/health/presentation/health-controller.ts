import { StatusCode } from '@/common/presentation/enums/status-code'
import { InternalServerError } from '@/common/presentation/errors/internal-server-error.error'
import { ok } from '@/common/presentation/helpers/http-helper'
import { HttpResponse } from '@/common/presentation/protocols/http'

export class HealthController {

    async handler(): Promise<HttpResponse> {
        
        try {
            return ok()
        } catch {
            return {
                statusCode: StatusCode.serverError,
                body: new InternalServerError()
            }
        }
    }

}
