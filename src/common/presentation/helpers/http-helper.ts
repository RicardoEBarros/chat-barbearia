import { StatusCode } from '@/common/presentation/enums/status-code'
import { HttpResponse } from '@/common/presentation/protocols/http'
import { InternalServerError } from '../errors/internal-server-error.error'

export const ok = (data: any = null): HttpResponse => ({
    statusCode: StatusCode.ok,
    body: data
})

export const serverError = (error: Error): HttpResponse => ({
    statusCode: StatusCode.serverError,
    body: new InternalServerError(error.stack)
})
