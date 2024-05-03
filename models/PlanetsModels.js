import mongoose from "mongoose";

const Schema = mongoose.Schema

const planetSchema = new Schema ({ 
        _id: {
          type: Object
        },
        name: {
          type: String,
          require: true
        },
        orderFromSun: {
          type: Number,
          require: true
        },
        hasRings: {
          type: Boolean,
          default: false
        },
        mainAtmosphere: {
          type: [
            String
          ]
        },
        surfaceTemperatureC: {
          min: {
            type: Number
          },
          max: {
            type: Number
          },
          mean: {
            type: Number
          }
        }
}, {timestamps: true});

export default mongoose.model("Planets", planetSchema)