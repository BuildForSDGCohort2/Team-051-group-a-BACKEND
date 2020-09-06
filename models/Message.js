const {
    Schema,
    model,
} = require("mongoose");


const messageSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        required: true
    },
    type: {
        type: String,
        required: true,
        default: "email"
    },
    userEmail: {
        type: String,
        required: true
    },
    messageBody: {
        type: String,
        required: true
    },
    dateSent: {
        type: Date,
        required: true,
        default: Date.now().toLocaleString()
    }
});

const Message = model("message", messageSchema);

module.exports = Message;