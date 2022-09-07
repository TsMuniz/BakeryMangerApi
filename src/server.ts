import AdminJS from 'adminjs'
import AdminJSExpress from '@adminjs/express'
import express from 'express'

const app = express()

const adminJS = new AdminJS({
    databases: [],
    rootPath: '/admin',
    resources: []
})