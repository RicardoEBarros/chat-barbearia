import { StatusCode } from '@/common/presentation/enums/status-code'
import { Builder } from '../protocols/builder.protocol'
import { faker } from '@faker-js/faker'

const INITIAL_NUMBER_OF_VALID_STATUS_CODES = [ 2, 4, 5 ]

export class RandomStatusCodeBuilder implements Builder<number> {
    
    randomStatusCode: number = StatusCode.ok

    static instantiate(): RandomStatusCodeBuilder {
        return new RandomStatusCodeBuilder()
    }

    private calcIncrementUntilLimit(): number {
        return (Math.trunc(Math.random() * 100) % 99)
    }

    successFamily(): RandomStatusCodeBuilder {
        this.randomStatusCode = 200 + this.calcIncrementUntilLimit()
        return this
    }

    serverErrorFamily(): RandomStatusCodeBuilder {
        this.randomStatusCode = 500 + this.calcIncrementUntilLimit()
        return this
    }

    randomCodeBetweenAllFamilies(): RandomStatusCodeBuilder {
        const validStatusCode = faker.helpers.arrayElement(INITIAL_NUMBER_OF_VALID_STATUS_CODES) * 100
        this.randomStatusCode = validStatusCode + this.calcIncrementUntilLimit()
        return this
    }

    build(): number {
        return this.randomStatusCode
    }

}
