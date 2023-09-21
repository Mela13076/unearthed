import express from 'express'
import giftsRouter from './routes/gifts.js'


//reads to see if there is a port environment vaiable if not uses port 3001
const PORT = process.env.PORT || 3001

const app = express()

//middleware: serves static files like HTML, CSS, JS, and images from /public
//example: request is made to the url of /public/styles.css, express looks for the file in the public folder and serves it
app.use('/public', express.static('./public'))

//middleware: serves static JS files from /public/scripts
//example: request is made to the url of /public/scripts/index.js, express looks for the file in the public folder and serves it 

app.use('/scripts', express.static('./public/scripts'))

// adds the gift  endpoint to the app 
app.use('/gifts', giftsRouter)



app.get('/', (req, res) => {
    res.status(200).send('<h1 style="text-align: center; margin-top: 50px;">UnEarthed API</h1>')
  })

app.listen(PORT, () => {
  console.log(`🚀 Server listening on http://localhost:${PORT}`)
})