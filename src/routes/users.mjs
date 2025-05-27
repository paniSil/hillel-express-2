import { Router } from 'express'
import {
    deleteUserByIdHandler,
    getUserByIdHandler,
    getUsersHandler,
    postUsersHandler,
    putUserByIdHandler
} from '../controllers/users.mjs'

import { authHandler } from '../middleware/authHandler.mjs'
import { validateUserBody, validateParamsUserId } from '../validators/userValidation.mjs'


const usersRouter = Router()

usersRouter
    .route('/')
    .get(authHandler, getUsersHandler)
    .post(authHandler, validateUserBody, postUsersHandler)

usersRouter
    .route('/:id')
    .get(authHandler, validateParamsUserId, getUserByIdHandler)
    .put(authHandler, validateParamsUserId, validateUserBody, putUserByIdHandler)
    .delete(authHandler, validateParamsUserId, deleteUserByIdHandler)

export default usersRouter