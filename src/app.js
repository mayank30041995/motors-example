const express = require('express')

const wheelRouter = require('../src/routes/wheel.router')
const categoryRouter = require('../src/routes/category.router')
const app = express()

const db = require('../src/database/models/index')
app.use(express.json())

// Note: Sync all models that are not
// already in the database

// db.sequelize.sync()

// Note: Force sync all models
// It will drop the table first
// and re-create it afterwards
// db.sequelize.sync({ force: true })

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.use('/wheel', wheelRouter)
app.use('/category', categoryRouter)

module.exports = app
