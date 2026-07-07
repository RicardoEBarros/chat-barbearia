import { StatusCode } from '@/common/presentation/enums/status-code'
import { HttpResponse } from '@/common/presentation/protocols/http'

export const ok = (data: any): HttpResponse => ({
    statusCode: StatusCode.ok,
    body: data
})
