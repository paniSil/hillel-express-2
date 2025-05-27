import { Router } from 'express'
import {
    getArticlesHandler,
    postArticlesHandler,
    getArticleByIdHandler,
    putArticleByIdHandler,
    deleteArticleByIdHandler
} from '../controllers/articles.mjs'

import { checkAccess } from '../middleware/authHandler.mjs'
import { validateArticleBody, validateParamsArticleId } from '../validators/articleValidation.mjs'


const articlesRouter = Router()

articlesRouter
    .route('/')
    .get(checkAccess, getArticlesHandler)
    .post(checkAccess, validateArticleBody, postArticlesHandler)

articlesRouter
    .route('/:id')
    .get(checkAccess, validateParamsArticleId, getArticleByIdHandler)
    .put(checkAccess, validateParamsArticleId, validateArticleBody, putArticleByIdHandler)
    .delete(checkAccess, validateParamsArticleId, deleteArticleByIdHandler)

export default articlesRouter