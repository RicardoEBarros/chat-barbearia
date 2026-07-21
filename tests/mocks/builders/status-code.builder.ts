import { StatusCode } from '@/common/presentation/enums/status-code'
import { Builder } from '../protocols/builder.protocol'

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
        this.randomStatusCode = 500 + + this.calcIncrementUntilLimit()
        return this
    }

    build(): number {
        return this.randomStatusCode
    }

}
