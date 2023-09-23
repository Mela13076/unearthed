import { pool } from '../config/database.js'

const getGifts = async (req, res) => {
  try {
    //retrieves all rows from the gifts table and 
    //arragnges them in ascending order based on the id column. 
    const results = await pool.query('SELECT * FROM gifts ORDER BY id ASC')
    res.status(200).json(results.rows)
  } catch (error) {
    res.status(400).json( { error: error.message } )
  }
}

export default {
  getGifts
}