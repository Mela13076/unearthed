import express from 'express'
import GiftController from '../controllers/gifts.js'


// create a express router
const router = express.Router()

//GET rout at '/' endpoint that responds with satus 200 send JSON to giftData

// router.get('/', (req, res) => {
//   res.status(200).json(giftData)
// })

router.get('/', GiftController.getGifts)

// Sends the gift.html file associated with a specific id
// router.get('/:giftId', (req, res) => {
//   res.status(200).sendFile(path.resolve(__dirname, '../public/gift.html'))
// })

router.get('/:giftId', GiftController.getGiftById)

// router.get('/:giftId', (req, res) => {

export default router