import express from 'express'
import { setupMiddleware } from './middlewares.config'

const app = express()
setupMiddleware(app)
export default app