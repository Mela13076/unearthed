import express from 'express'
import giftsRouter from './routes/gifts.js'
import './config/dotenv.js'
import cors from 'cors'




const app = express()

app.use(cors())

// adds the gift  endpoint to the app 
app.use('/gifts', giftsRouter)



app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
  })

//reads to see if there is a port environment vaiable if not uses port 3001
const PORT = process.env.PORT || 3001

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})