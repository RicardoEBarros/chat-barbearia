import { LogError } from '@/common/presentation/protocols/log-error.protocol'

export class LogErrorRepositoryMock implements LogError {
    async logError(): Promise<void> {
        Promise.resolve()
    }
}
