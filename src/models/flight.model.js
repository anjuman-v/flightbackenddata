const mongoose = require('mongoose');
const flightSchema = new mongoose.Schema(
    {
        airlines: { type: String, required: true },
        from: { type: String, required: "true",},
        to: { type: String, required: "true",},
        cost: { type: Number, required: true },
        FromTime: { type: String, required: true },
        ToTime: { type: String, required: true },
        pnr: { type: Number, required: true, },
        capacity: { type: Number, required: true }

    },{
        versionKey: false
    }
)

module.exports = mongoose.model('flight', flightSchema)