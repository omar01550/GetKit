import mongoose from "mongoose"

export const Connection = async () => {
      try {
         const connection = await mongoose.connect(process.env.dbUrl);
         return true
      } catch (error) {
         return false
      }
};