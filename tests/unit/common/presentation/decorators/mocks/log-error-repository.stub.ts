import { LogError } from '@/common/presentation/protocols'

export class LogErrorRepositoryStub implements LogError {

    input: any
    callsCount: number = 0

    async logError(stack: string): Promise<void> {
        this.input = stack
        this.callsCount++
        Promise.resolve()
    }
}
