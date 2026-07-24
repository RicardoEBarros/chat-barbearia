import { HttpRequest } from './http'

export interface SafeExecution {
    run(httpRequest: HttpRequest): Promise<HttpRequest>
}
