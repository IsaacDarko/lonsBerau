import { connectToDB } from '@utils/database';
import Transactions from '@models/transactions';

export const POST = async (req) => {
    console.log("trxn route was hit");
    const{ 
            userId,
            transaction_type,
            token_type,
            token_amount,
            currency_used,
            amount_in_currency,
            method_of_payment,
            payment_provider,
            mobile_number,
            bank_account,
            bank_sortNo,
            bank_swift,
            wallet_paidTo 
        } = await req.json();
    
    try{
        await connectToDB();
        const newTransaction = new Transactions({
            userId,
            transaction_type,
            token_type,
            token_amount,
            currency_used,
            amount_in_currency,
            method_of_payment,
            payment_provider,
            mobile_number,
            bank_account,
            bank_sortNo,
            bank_swift,
            wallet_paidTo 
        });
        await newTransaction.save();
        console.log("the transaction was save to db");
        return new Response(JSON.stringify(newTransaction), {status: 201})
    }catch(err){
        return new Response("failed to create the new transaction", { status:500 })
    }

}