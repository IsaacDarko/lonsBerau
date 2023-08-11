import { connectToDB } from '@utils/database';
import Transactions from '@models/transactions';

export const GET = async (request) => {
    console.log("GET transactions route was hit");
    
    try{
        await connectToDB();
        const transactions = await Transactions.find({}).sort({_id: -1});
        return new Response(JSON.stringify(transactions), {status: 200});    
    }catch(error){
        return new Response("Failed to fetch all transactions", {status: 500})
    }
}