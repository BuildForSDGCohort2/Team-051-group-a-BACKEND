const {
    Schema,
    model,
    SchemaType,
} = require('mongoose');


const transactionSchema = new Schema({
    amount: {
        type: Number,
        required: true
    },
    type: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true
    },
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    currency: {
        type: String,
        required: true,
        default: "NGN"
    },
    meta: [{
        type: String,
        required: false
    }]
});

const Transaction = model('transactions', transactionSchema)

module.exports = Transaction