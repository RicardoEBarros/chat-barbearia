import { HttpRequest } from '@/common/presentation/protocols'
import { HttpRequestBuilder } from '../builders'

export class HttpRequestMother {

    static oneProperty(): HttpRequest {
        return HttpRequestBuilder
            .instantiate()
            .randomProperties()
            .build()
    }

}
