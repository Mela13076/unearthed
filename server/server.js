import express from 'express'
import giftsRouter from './routes/gifts.js'

const PORT = process.env.PORT || 3001

const app = express()

//middleware
app.use('/public', express.static('./public'))

app.use('/scripts', express.static('./public/scripts'))

// adds the gift  endpoint to the app 
app.use('/gifts', giftsRouter)

app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
  })

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})