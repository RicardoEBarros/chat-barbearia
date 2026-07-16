export class InternalServerError extends Error {
    constructor(stack?: string) {
        super('Ocorreu um erro ao processar a solicitação')
        this.name = 'InternalServerError'
        this.stack = stack
    }
}
