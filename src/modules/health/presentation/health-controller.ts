import { HttpResponse } from '@/common/protocols/http'

export class HealthController {

    async handler(): Promise<HttpResponse> {

        return {
            statusCode: 200,
        }

    }

}
