
import mongoose from 'mongoose'

type connectionValue = {
   isConnected?: number
}

const connection: connectionValue = {}

const dbConnect = async () => {
   try {
      const db = await mongoose.connect(process.env.MongoURL || '')
      connection.isConnected=db.connections[0].readyState
   } catch (error) {
      console.error(error,'Error connecting Database')
      process.exit(1)
   }
}

export default dbConnect


