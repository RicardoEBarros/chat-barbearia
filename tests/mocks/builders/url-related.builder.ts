import { faker } from '@faker-js/faker'
import { Builder } from '../protocols/builder.protocol'

export class UrlRelatedBuilder implements Builder<string> {
    
    private urlRelated: string = ''

    static instantiate(): UrlRelatedBuilder {
        return new UrlRelatedBuilder()
    }

    endPoint(): UrlRelatedBuilder {
        this.urlRelated = `/${faker.internet.domainName()}`
        return this
    }

    build(): string {
        return this.urlRelated
    }

}

