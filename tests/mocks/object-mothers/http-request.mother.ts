import { HttpRequest } from '@/common/presentation/protocols/http'
import { HttpRequestBuilder } from '../builders/http-request.builder'

export class HttpRequestMother {

    static oneProperty(): HttpRequest {
        return HttpRequestBuilder
            .instantiate()
            .randomProperties()
            .build()
    }

}
