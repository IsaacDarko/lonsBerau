import { Schema, model,  models } from "mongoose";

const TransactionsSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'User',
    },

    transaction_type: {
        type: String,
        required: [true, 'transaction type is required']
    },

    token_type: {
        type: String,
        required: [true, 'token type is required']
    },

    token_amount: {
        type: String,
        required: [true, 'token amount is required']
    },

    currency_used: {
        type: String,
        required: [true, 'preferred currency required']
    },

    amount_in_currency: {
        type: String,
        required: [true, 'the amount in preferred currency is required']
    },

    method_of_payment: {
        type: String,
        required: [true, 'method of payment is required']
    },

    payment_provider: {
        type: String,
        required: [true, 'payment provider is provider']
    },

    mobile_number: {
        type: String,
        required: false
    },

    bank_account: {
        type: String,
        required: false
    },

    bank_sortNo: {
        type: String,
        required: false
    },

    bank_swift: {
        type: String,
        required: false
    },

    wallet_paidTo: {
        type: String,
        required: [true, 'wallet paid to is required']
    },

});

const Transactions = models.Transactions || model('Transactions', TransactionsSchema);

export default Transactions;