import express from 'express'
import path from 'path'
import { fileURLToPath } from 'url'
import giftData from '../data/gifts.js'

//function that converts a file URL to a file path, import.meta.url contains the URL 
const __filename = fileURLToPath(import.meta.url)

// contains the directory name of the file
const __dirname = path.dirname(__filename)

// create a express router
const router = express.Router()

//GET rout at '/' endpoint that responds with satus 200 send JSON to giftData
router.get('/', (req, res) => {
  res.status(200).json(giftData)
})

// Sends the gift.html file associated with a specific id
router.get('/:giftId', (req, res) => {
  res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
})

export default router