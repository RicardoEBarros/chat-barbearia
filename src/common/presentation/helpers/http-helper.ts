import { StatusCode } from '@/common/presentation/enums/status-code'
import { HttpResponse } from '@/common/presentation/protocols/http'

export const ok = (data: any = null): HttpResponse => ({
    statusCode: StatusCode.ok,
    body: data
})
