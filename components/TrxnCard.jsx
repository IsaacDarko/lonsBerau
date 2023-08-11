'use client';

import { useState } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";
import { space } from "postcss/lib/list";


const TrxnCard = ({ transaction, handleClick }) => {
  const { data: session } = useSession();
  const { transaction_type } = transaction;

  return (
    <div className='transactionCard'>
      <div className={ transaction_type === 'buy' ? `flex items-start gap-5 innerCardBuy` : `flex items-start gap-5 innerCardSell`}>
        <Image 
          src={session?.user.image}
          alt=""
          width={70}
          height={70}
          className="rounded-full object-contain"
        />

        <div >
          <h4>{transaction_type === 'buy' ? <span>Bought</span> : <span>Sold</span>}</h4>
          <h3 className='font-satoshi font-semibold text-gray-900'> {transaction.token_type} </h3>
        </div>

        <div>
        <h4>{transaction.token_type} Amount</h4>
          <h3 className='font-satoshi font-semibold text-gray-900'> {transaction.token_amount} </h3>
        </div>

        <div>
          <h4>Currency</h4>
          <h3 className='font-satoshi font-semibold text-gray-900'> {transaction.currency_used} </h3>
        </div>

        <div>
          <h4>{transaction.currency_used} Amount</h4>
          <h3 className='font-satoshi font-semibold text-gray-900'> {transaction.amount_in_currency} </h3>
        </div>

        <div>
          <h4>Payment Method</h4>
          <h3 className='font-satoshi font-semibold text-gray-900'> {transaction.method_of_payment} </h3>
        </div>

        <div>
          <h4>Pay-Provider</h4>
          <h3 className='font-satoshi font-semibold text-gray-900'> {transaction.payment_provider} </h3>
        </div>

        <div>
          <h4>Confirmed</h4>
          <h3 className='font-satoshi font-semibold text-gray-900'> {transaction.confirmed} </h3>
        </div>              
        
      </div>
    </div>
  )

}

export default TrxnCard