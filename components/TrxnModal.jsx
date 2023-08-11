"use client";

import { useEffect, useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import BuyForm from './BuyForm';
import SellForm from './SellForm';

import '@styles/global.css'
import { CrossIcon } from '@public/assets/icons';

const TrxnModal = ({ trxnType, setToggleModal }) => {
    const router = useRouter();
    const { data: session } = useSession();

    let formType;
    const [sell, setSell] = useState(false)
    const [ submitting, setSubmitting ] = useState(false);
    const [ trxn, setTrxn ] = useState({
        trxnType: '',
        tokenType: '',
        tokenAmnt: '',
        preferredCurr: '',
        CurrencyAmnt: '',
        paymentMethod: '',
        paymentProvider: '',
        MomoDetails: '',
        BankDetails: [],
        walletAddress: '0xA2a1A477aAa618554D880cA6c416EC1C74f8E6e7'
    })

   
        
   useEffect(() => {
        function setUp(trxnType){
            console.log(trxnType)
                if(trxnType > 1){ 
                    console.log('form is sell');
                    setSell(true)
                }
                else{
                    console.log('form is buy');
                    setSell(false)
                }
                
                return formType;
        }

        setUp(trxnType);
   }, [])



    const createTrxn = async(e) => {
        setSubmitting(true);
        console.log("attempting to save transaction to db");
        const { paymentMethod } = trxn;
        console.log(paymentMethod);
        try{
            const response = await fetch("/api/transactions/new", {
                method: "POST",
                body: JSON.stringify({
                    userId: session?.user.id,
                    transaction_type: trxn.trxnType,
                    token_type: trxn.tokenType,
                    token_amount: trxn.tokenAmnt,
                    currency_used: trxn.preferredCurr,
                    amount_in_currency: trxn.CurrencyAmnt,
                    method_of_payment: trxn.paymentMethod,
                    payment_provider: trxn.paymentProvider,
                    mobile_number: trxn.MomoDetails,
                    bank_account: trxn.BankDetails[0],
                    bank_sortNo: trxn.BankDetails[1],
                    bank_swift: trxn.BankDetails[2],
                    wallet_paidTo: trxn.walletAddress
                })
            })

            if(response.ok){
                router.push('/dashboard')
            }

        console.log('transaction created');
        }catch(err){
            console.log(err);
        }finally {
            setSubmitting(false);
        }
    } 



    return (
        <div className='trxn_modal'>
            <button 
            type='button'
            className='modal_close'
            onClick={() => setToggleModal(false)}
            >
                <CrossIcon />
            </button>
           {
            sell ? (
                <SellForm 
                    type="sell" 
                    trxn={trxn} 
                    setTrxn={setTrxn} 
                    setSubmitting={setSubmitting} 
                    createTrxn={createTrxn} 
                />
            ):(
                <BuyForm 
                    type="buy" 
                    trxn={trxn} 
                    setTrxn={setTrxn} 
                    setSubmitting={setSubmitting}  
                    createTrxn={createTrxn} 
                />
            )
           }
        </div>
        
    )
}

export default TrxnModal