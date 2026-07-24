import { faker } from '@faker-js/faker'

import { ControllerStub } from '@/tests/mocks/stubs/controller-stub'
import { LogErrorRepositoryStub } from '.'
import { LogControllerDecorator } from '@/common/presentation/decorators'
import { Controller } from '@/common/presentation/protocols'

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
