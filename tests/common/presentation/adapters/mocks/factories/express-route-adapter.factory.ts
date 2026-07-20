import { faker } from '@faker-js/faker'
import { ControllerStub } from '../../../stubs/controller-stub'

const RANDOM_NUMBER_UNTIL_ONE_HUNDRED = Math.trunc((Math.random() * 100))
const ERROR_FAMILY = faker.helpers.arrayElement([ 4, 5 ])

interface SutTypes {
    endPointFake: string
    controllerStub: ControllerStub
    bodyFake: object
    randomSuccessStatusCode: number
    randomErrorStatusCode: number
}

export const makeExpressRouteAdapter = (): SutTypes => {
    const bodyFake = JSON.parse(faker.datatype.json()) 
    const endPointFake = `/${faker.word.noun()}`
    const controllerStub = new ControllerStub()
    const randomSuccessStatusCode = 200 + (RANDOM_NUMBER_UNTIL_ONE_HUNDRED % 100)
    const randomErrorStatusCode = (ERROR_FAMILY * 100) + (RANDOM_NUMBER_UNTIL_ONE_HUNDRED % 100)    
    return {
        bodyFake,
        endPointFake,
        controllerStub,
        randomSuccessStatusCode,
        randomErrorStatusCode
    }
}
