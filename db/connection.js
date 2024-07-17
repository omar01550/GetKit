import mongoose from "mongoose"

export const Connection = async () => {
      try {
         const connection = await mongoose.connect("mongodb://localhost:27017");
         return true
      } catch (error) {
         return false
      }
};