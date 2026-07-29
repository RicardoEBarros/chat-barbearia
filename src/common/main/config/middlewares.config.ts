import { type Express } from 'express'
import { bodyParser, contentType, cors } from '../middlewares'

export const setupMiddleware = (app: Express): void => {
    app.use(bodyParser)
    app.use(contentType)
    app.use(cors)
}