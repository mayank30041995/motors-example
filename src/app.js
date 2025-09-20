const express = require('express')
const cors = require('cors')
const userRouter = require('../src/routes/user.router')
const wheelRouter = require('../src/routes/wheel.router')
const categoryRouter = require('../src/routes/category.router')
const app = express()

const db = require('./database/models/index')
app.use(express.json())

// Note: Sync all models that are not
// already in the database

app.use(cors())
db.sequelize.sync()

// Note: Force sync all models
// It will drop the table first
// and re-create it afterwards
// db.sequelize.sync({ force: true })

app.get('/', (req, res) => {
  res.send('ShowRoom vehicle!')
})

app.use('/user', userRouter)
app.use('/wheel', wheelRouter)
app.use('/category', categoryRouter)

module.exports = app
// Iu20ODPp37Mjc5rfcWSue2A3o13BIV1B