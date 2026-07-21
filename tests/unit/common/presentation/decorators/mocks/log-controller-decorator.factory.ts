import { faker } from '@faker-js/faker'

import { ControllerStub } from '../../../../../mocks/stubs/controller-stub'
import { LogErrorRepositoryStub } from './log-error-repository.stub'
import { LogControllerDecorator } from '@/common/presentation/decorators/log-controller.decorator'
import { Controller } from '@/common/presentation/protocols/controller.protocol'

interface SutTypes {
    controllerStub: ControllerStub
    logErrorRepositoryStub: LogErrorRepositoryStub
    httpRequest: object
    sut: Controller
}

export const makeLogControllerDecorator = (): SutTypes => {
    const httpRequest = JSON.parse(faker.datatype.json())
    const controllerStub = new ControllerStub()
    const logErrorRepositoryStub = new LogErrorRepositoryStub()
    const sut = new LogControllerDecorator(controllerStub, logErrorRepositoryStub)
    return {
        sut, 
        httpRequest, 
        controllerStub, 
        logErrorRepositoryStub
    }
}
