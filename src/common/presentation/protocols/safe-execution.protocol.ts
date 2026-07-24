import { HttpRequest, HttpResponse } from './http'

export interface SafeExecution {
    run(httpRequest: HttpRequest): Promise<HttpResponse>
}
