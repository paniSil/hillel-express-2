import express from 'express'
import router from './routes/index.mjs'

const app = express()
const PORT = 3000

app.use(express.json())
app.use(router)

app.use((req, res) => {
    res.status(404).send('Not Found')
})

app.use((err, req, res, next) => {
    if (!res.headersSent) {
        res.status(err.status || 500).json({
            status: 'error',
            code: err.status || 500,
            message: err.message || 'Internal Server Error'
        })
    }
})

const server = app.listen(PORT, () => {
    console.log(`Сервер запущений за адресою http://localhost: ${PORT}`)
})

export { server, app };
