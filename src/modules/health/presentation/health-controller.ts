import { HttpResponse } from '@/common/presentation/protocols/http'

export class HealthController {

    async handler(): Promise<HttpResponse> {

        return {
            statusCode: 200,
        }

    }

}
