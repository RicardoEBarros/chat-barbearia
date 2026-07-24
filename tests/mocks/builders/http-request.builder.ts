import { HttpRequest } from '@/common/presentation/protocols'
import { Builder } from '../protocols/builder.protocol'
import { faker } from '@faker-js/faker'

export class HttpRequestBuilder implements Builder<HttpRequest> {

    httpRequest: HttpRequest = { body: '' }

    static instantiate(): HttpRequestBuilder {
        return new HttpRequestBuilder()
    }    

    randomProperties(qtdProperties: number = 1): HttpRequestBuilder {
        for (let index = 0; index < qtdProperties; index++) {
            this.httpRequest = { ...this.httpRequest, [ faker.word.noun() ]: faker.random.alphaNumeric() }
        }
        return this
    }

    build(): HttpRequest {
        return {
            body: this.httpRequest
        }
    } 

}
