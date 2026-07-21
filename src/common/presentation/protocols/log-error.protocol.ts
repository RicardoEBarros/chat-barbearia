export interface LogError {
    logError(stack: string): Promise<void>
}
