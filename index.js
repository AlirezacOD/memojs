import express from 'express'
import router from './router/router.js'
import mongoose from 'mongoose'

const app = express()

app.use(express.json({ limit: '10mb', extended: true }))
app.use(express.urlencoded({ limit: '10mb', extended: true }))
app.use(router)
app.listen(3000, () => {
    console.log('server is started on port 3000')
})
id      
    