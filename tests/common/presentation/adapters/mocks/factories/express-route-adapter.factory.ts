import { faker } from '@faker-js/faker'
import { ControllerStub } from '../../../stubs/controller-stub'

interface SutTypes {
    endPointFake: string
    controllerStub: ControllerStub
    bodyFake: object
}

export const makeExpressRouteAdapter = (): SutTypes => {
    const bodyFake = JSON.parse(faker.datatype.json()) 
    const endPointFake = `/${faker.word.noun()}`
    const controllerStub = new ControllerStub()
    return {
        bodyFake,
        endPointFake,
        controllerStub
    }
}
