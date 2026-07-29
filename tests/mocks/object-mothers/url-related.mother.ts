import { UrlRelatedBuilder } from '../builders/url-related.builder'

export class UrlRelatedObjectMother {

    static endPoint(): string {
        return UrlRelatedBuilder
            .instantiate()
            .endPoint()
            .build()
    }

}
