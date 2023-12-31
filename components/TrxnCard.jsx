'use client';

import { useState, useEffect } from "react";
import Image from "next/image";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

import { BitcoinLogo } from  '@public/assets/cryptologos';
import { EthereumLogo } from '@public/assets/cryptologos';
import { LitecoinLogo } from '@public/assets/cryptologos';
import { SolanaLogo } from '@public/assets/cryptologos';
import { TetherLogo } from '@public/assets/cryptologos';
import { TethergoldLogo } from '@public/assets/cryptologos';
import { USDCLogo } from '@public/assets/cryptologos';



const TrxnCard = ({ transaction, handleClick }) => {
  const { data: session } = useSession();
  const [logo, setLogo] = useState('');
  const { transaction_type, token_type } = transaction;
  const router = useRouter();

  useEffect(() => {
    const sessionCheck = () => {
      const user = session?.user.id;
      console.log(user)
      if(!user){
        router.push('/')
      }
    }

    const setCryptoLogo = () => {
      if(token_type === 'bitcoin'){
        setLogo(BitcoinLogo)
      }else if(token_type === 'litecoin'){
        setLogo(LitecoinLogo)
      }else if(token_type === 'ethereum'){
        setLogo(EthereumLogo)
      }else if(token_type === 'solana'){
        setLogo(SolanaLogo)
      }else if(token_type === 'tether'){
        setLogo(TetherLogo)
      }else if(token_type === 'tether-gold'){
        setLogo(TethergoldLogo)        
      }else if(token_type === 'usd-coin'){
        setLogo(USDCLogo)
      }else{
        setLogo(session?.user.image)
      }
    }

    sessionCheck()
    setCryptoLogo();
  }, []);



  return (
    <div className='transactionCard'>
      <div className={ transaction_type === 'buy' ? `flex items-start gap-5 innerCardBuy` : `flex items-start gap-5 innerCardSell`}>
        <Image 
          src={logo}
          alt="Crypto_Logo"
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