const {
    Schema,
    model,
} = require("mongoose");


const LoanRequestSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    amount: {
        type: Number,
        required: true
    },
    currency: {
        type: String,
        required: true,
        default:"NGN"
    },
    narration: {
        type: String,
        required: true
    },
    status: {
        type: String,
        required: true,
    }
});

const User = model("loanRequest", LoanRequestSchema);

module.exports = User;