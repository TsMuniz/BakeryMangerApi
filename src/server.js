import 'dotenv/config'
import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import AdminJSSequelize from '@adminjs/sequelize'
import express from 'express'
import userResources from './resources/UserResources'
import projectResources from './resources/ProjectResource'
import locales from './resources/locales'
import './database/models'

AdminJS.registerAdapter(AdminJSSequelize)
const app = express()

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: [userResources, projectResources],
    ...locales
})

const router = AdminJSExpress.buildRouter(adminJS)

app.use(adminJS.options.rootPath, router)

app.listen(process.env.PORT, () => console.log(`rodando na porta ${process.env.PORT}`))