const {
    Schema,
    model,
} = require("mongoose");


const runningBalanceSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    TransactionId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    balanceBefore: {
        type: Number,
        required: true
    },
    currentBalance: {
        type: Number,
        required: true
    },
    balanceAfter: {
        type: Number,
        required: true
    }
});

const RunningBalance = model("runningBalance", runningBalanceSchema);

module.exports = RunningBalance;