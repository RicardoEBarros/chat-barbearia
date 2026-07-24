import { Controller } from '@/common/presentation/protocols'
import { HealthController } from '@/modules/health/presentation/health-controller'

interface SutTypes {
    sut: Controller
}

export const makeHealthController = (): SutTypes => {
    const sut = new HealthController()
    return {
        sut
    }
}
