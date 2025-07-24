import mongoose from 'mongoose'

const connectDB = async () => {
  try {
    const connectionDB = await mongoose.connect(`${process.env.MONGODB_URL}/Brainly`)
    console.log(`\n MongoDB connected !! DB HOST: ${connectionDB.connection.host}` )
  }catch(error) {
    console.log("MongoDB connection Error: ", error)
    process.exit(1)
  }
}

export default connectDB