import { faker } from '@faker-js/faker'

import { LogError } from '@/common/presentation/protocols/log-error.protocol'
import { ControllerStub } from '../../../../../mocks/stubs/controller-stub'
import { LogErrorRepositoryMock } from './log-error-repository.mock'
import { LogControllerDecorator } from '@/common/presentation/decorators/log-controller.decorator'
import { Controller } from '@/common/presentation/protocols/controller.protocol'

interface SutTypes {
    controllerStub: ControllerStub
    logErrorRepositoryFake: LogError
    httpRequest: object
    sut: Controller
}

export const makeLogControllerDecorator = (): SutTypes => {
    const httpRequest = JSON.parse(faker.datatype.json())
    const controllerStub = new ControllerStub()
    const logErrorRepositoryFake = new LogErrorRepositoryMock()
    const sut = new LogControllerDecorator(controllerStub, logErrorRepositoryFake)
    return {
        sut, 
        httpRequest, 
        controllerStub, 
        logErrorRepositoryFake
    }
}
