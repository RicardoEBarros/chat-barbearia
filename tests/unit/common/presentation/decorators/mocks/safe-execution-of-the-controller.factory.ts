import { HttpRequest, SafeExecution } from '@/common/presentation/protocols'
import { ControllerStub } from '@/tests/mocks/stubs/controller-stub'
import { SafeExecutionOfTheController } from '@/common/presentation/decorators'
import { HttpRequestMother } from '@/tests/mocks/object-mothers'

interface SutTypes {
    httpRequest: HttpRequest
    controllerStub: ControllerStub
    sut: SafeExecution
}

export const makeSafeExecutionOfTheController = (): SutTypes => {
    const httpRequest = HttpRequestMother.oneProperty()
    const controllerStub = new ControllerStub()
    const sut = new SafeExecutionOfTheController(controllerStub)
    return {
        sut, 
        httpRequest,
        controllerStub
    }
}
