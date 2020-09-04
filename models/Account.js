const {
    Schema,
    model,
} = require("mongoose");


const accountSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    thriftBalance: {
        type: Number,
        required: true
    },
    depositBalance: {
        type: Number,
        required: true
    },
    savingsBalance: {
        type: Number,
        required: true
    },
    accountNumber: {
        type: String,
        required: true
    }
});

const Account = model("account", accountSchema);

module.exports = Account;