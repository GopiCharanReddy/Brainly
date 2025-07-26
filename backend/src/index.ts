import express from 'express'
import dotenv from 'dotenv'
import connectDB from './db/indexdb'
import userRoute from './routes/user.routes'
import contentRoute from './routes/content.routes'
import brainRoute from './routes/brain.routes'
import ApiError from './utils/ApiError'


dotenv.config()
const PORT = process.env.PORT || 3000
connectDB().then(() => {
  app.listen(PORT, () => {
    console.log('Server is running on Port: ',PORT)
  })
})
const app = express()

const router = express.Router();
app.use(express.json())
app.use('/api/v1', router)
router.use('/users', userRoute)
router.use('/content', contentRoute)
router.use('/brain', brainRoute)
app.use(ApiError)

// app.get('/api/v1/signup',(req,res) => {
  
// })

// app.delete('/api/v1/content',(req,res) => {
  
// })


// app.post('/api/v1/brain/share',(req,res) => {
  
// })

// app.get('/api/v1/brain/:shareLink',(req,res) => {
  
// })

