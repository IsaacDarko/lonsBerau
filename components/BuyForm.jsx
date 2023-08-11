import React from 'react';

import Head from 'next/head';
import Image from 'next/image';
import { useForm } from 'react-hook-form';
import Link from 'next/link';
import { useState, useEffect } from 'react';

import { MTNLogo } from  '@public/assets/images';
import { AirtelTigoLogo } from '@public/assets/images';
import { VodafoneLogo } from '@public/assets/images';
import { FidelityLogo } from '@public/assets/images';
import { ADBLogo } from '@public/assets/images';
import { GTBankLogo } from '@public/assets/images';
import { CBGLogo } from '@public/assets/images';
import { GCBLogo } from '@public/assets/images';
import { AccessLogo } from '@public/assets/images';
import { ABSALogo } from '@public/assets/images';
import { EcobankLogo } from '@public/assets/images';


const BuyForm = ({ type, trxn, createTrxn }) => {
  const [token, setToken] = useState('');
  const [prefFiat, setPrefFiat] = useState();
  const [paymntAmnt, setPaymntAmnt] = useState({});
  const [amountToBuy, setAmountToBuy] = useState();
  const [selectedRate, setSelectedRate] = useState(0);
  const [cryptoData, setCryptoData] = useState({});
  //form 2 state hooks
  const [bankAcc, setBankAcc] = useState('');
  const [bankSort, setBankSort] = useState('');
  const [bankSwift, setBankSwift] = useState('')
  const [momoNumber, setMomoNumber] = useState('');
  const [payoutMethodLogo, setPayoutMethodLogo] = useState('')
  const [payoutMethod, setPayoutMethod] = useState('');
  const [payProvider, setPayProvider] = useState('');
  const [methodSelected, setMethodSelected] = useState(false);
  const [mobilePay, setMobilePay] = useState(null);
  //form 3 state hooks
  const[referenceid, setReferenceId] = useState();





  const getCryptoInfo = async (e) => {
    const token = e.target.value;
    const url = "https://api.coingecko.com/api/v3/simple/price";
    const params = {
      ids: token, // Replace with the desired cryptocurrency IDs
      vs_currencies: "usd,eur", // Replace with the desired fiat currencies
    };

    try {
      const response = await fetch(`${url}?${new URLSearchParams(params)}`);
      if (response.ok) {
        const data = await response.json();
        console.log(data[token]['usd']);
        const dollarPrice = data[token]['usd'];
        const euroPrice = data[token]['eur']
        setToken(token);
        setPaymntAmnt({
          'doll': dollarPrice,
          'eur': euroPrice
        });
        console.log(paymntAmnt);
        setSelectedRate(dollarPrice);
        trxn.tokenType = token;
      } else {
        throw new Error("Failed to fetch cryptocurrency data");
      }
    } catch (error) {
      console.error(error.message);
    }
  }



  const setOrder = (e) => {
    console.log("setOrder running");
    const am = e.target.value;
    console.log(am);
    const amnt = Number(am);
    const amountt = amnt.toFixed(4);
    console.log(amountt)
    setAmountToBuy(amountt);
    trxn.tokenAmnt = amountt;
    trxn.trxnType = type;
  }



  const convertCurr = (curr, currdollar, curreuro) => {
    console.log(amountToBuy);
    console.log(`${curr} ${currdollar} ${curreuro}`)
    const dol = Number(amountToBuy);
    const eur = Number(amountToBuy);
    const dollar = dol.toFixed(4);
    const euro = eur.toFixed(4);
    const orderInDollar = currdollar*dollar;
    const orderInEuro = curreuro*euro;
    console.log(`checking ${orderInDollar} ${orderInEuro}`);
    if(curr === 'USD'){
      setSelectedRate(orderInDollar);;
      trxn.CurrencyAmnt = orderInDollar;
    }else if(curr === 'GHS') {
      const rate = orderInDollar * 11.33;
      const rated = rate.toFixed(2)
      setSelectedRate(rated);
      trxn.CurrencyAmnt = rated;
    }else if(curr === 'EUR'){
      setSelectedRate(orderInEuro);
      trxn.CurrencyAmnt = orderInEuro;
    }else if(curr === 'NGN') {
      const rate = orderInDollar * 755.50;
      const rated = rate.toFixed(2)
      setSelectedRate(rated);
      trxn.CurrencyAmnt = rated;
    }else if(curr === 'CAD') {
      const rate = orderInDollar * 1.50;
      const rated = rate.toFixed(2)
      setSelectedRate(rated);
      trxn.CurrencyAmnt = rated;
    }

  }



  const getForexInfo = (e) => {
    const curr = e.target.value;
    setPrefFiat(curr);
    trxn.preferredCurr = curr
    const dollarp = paymntAmnt['doll'];
    const europ = paymntAmnt['eur'];
    console.log( `dollar: ${dollarp} and euro: ${europ}`);
    convertCurr(curr, dollarp, europ);
  }




  const getPaymentInfo = (e) => {
    const method = e.target.value;
    setPayoutMethod(method);
    trxn.paymentMethod = method;
    console.log(method);
    setMethodSelected(true);
    if(method === 'Bank'){
      setMobilePay(false);
    }else{
      setMobilePay(true)
    }
  }



  const getProviderDetails = (e) => {
    const payProvider = e.target.value;
    trxn.paymentProvider = payProvider;
    console.log(payProvider);
    setPayProvider(payProvider);
    if(payProvider === 'MTN'){
      setPayoutMethodLogo(MTNLogo)
    }else if(payProvider === 'AIRTELTIGO'){
      setPayoutMethodLogo(AirtelTigoLogo)
    }else if(payProvider === 'VODAFONE'){
      setPayoutMethodLogo(VodafoneLogo)
    }else if(payProvider === 'Fidelity'){
      setPayoutMethodLogo(FidelityLogo)
    }else if(payProvider === 'GCB'){
      setPayoutMethodLogo(GCBLogo)
    }else if(payProvider === 'CBG'){
      setPayoutMethodLogo(CBGLogo)
    }else if(payProvider === 'ABSA'){
      setPayoutMethodLogo(ABSALogo)
    }else if(payProvider === 'ADB'){
      setPayoutMethodLogo(ADBLogo)
    }else if(payProvider === 'GTBank'){
      setPayoutMethodLogo(GTBankLogo)
    }else if(payProvider === 'ECOBANK'){
      setPayoutMethodLogo(EcobankLogo)
    }else if(payProvider === 'ACCESSBANK'){
      setPayoutMethodLogo(AccessLogo)
    }
  }


  const addRef = (e) => {
    const refId = e.target.value;
    setReferenceId(refId);
    trxn.payRefNum = refId
  }


  const compilePaymentDetails = (e) => {
    console.log('compiling payout deets');
    const number = e.target.value;
    setMomoNumber(number);
    console.log(number);
    if(mobilePay){
      trxn.MomoDetails  = number;  
    }else{
      trxn.BankDetails.push(bankAcc);
      trxn.BankDetails.push(bankSort);
      trxn.BankDetails.push(bankSwift);
    }
    e.target.defaultValue = number
    console.log('done compiling payment deets');
  }



  const { 
    register, 
    handleSubmit,
    formState: { errors, isValid } 
  } = useForm({mode: 'all'});


  const onSubmit = (e) => {
    console.log(trxn);
    createTrxn(e)
  }



//temoporary options to be called from database later
  const tokenOption = [
    'bitcoin', 'litecoin', 'tether', 'usd-coin', 'tether-gold', 'ethereum', 'solana'
  ]

  const fiatOption = [
    'USD', 'GHS', 'EUR', 'NGN', 'CAD'
  ]

  const paymeths = [
    'Bank', 'MobileMoney'
  ]

  const banks = [
    'Fidelity', 'GCB', 'CBG', 'ABSA', 'ADB', 'GTBank', 'ECOBANK', 'ACCESSBANK'
  ]

  const momos = [
    'MTN', 'AIRTELTIGO', 'VODAFONE'
  ]

  const ccs = [
    'VISA', 'MASTERCARD', 'AMEX'
  ]









  
  /** Input field component */
  const Input = ({label, required, type, placeholder, step, value, disabled, onChange, onBlur}) => (
    <div className='inputus'>
      <legend>{label}</legend>
      <input 
        {...register(label, { required })} 
        className={errors[label] && "inputInvalid"}
        type={type} placeholder={placeholder} 
        disabled={disabled}
        onChange={onChange}
        onBlur={onBlur}
        value={value}
      />
      {errors[label] && <span>mandatory</span>}
    </div>
  )


  const DropSelect = ({ label, required, type, placeholder, value, options, defaultValue, onChange, disabled }) => (
    <div className='drop'>
      <legend>{label}</legend>
      <select
        {...register(label, { required })}
        className={errors[label] && "inputInvalid"}
        type={type}
        placeholder={placeholder}
        onChange={onChange}
        defaultValue={defaultValue}
        value={value} disabled={disabled}
      >
        <option value="" disabled selected hidden>{value}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
      {errors[label] && <span>mandatory</span>}
    </div>
  );

  
  const InputArea = ({label, required, type, placeholder, onChange}) => (
    <div className='drop'>
      <legend>{label}</legend>
      <textarea 
        {...register(label, { required })} 
        className={errors[label] && "inputInvalid"}
        type={type} placeholder={placeholder} onChange={onChange}
      />
       
      {errors[label] && <span>mandatory</span>}
    </div>
  )



  const InfoDisplay = ({label, data}) => (
    <div className='infoDisp'>
      <legend className='dispLabel'>{label}</legend>
      <span>{data}</span>

    </div>
  )







  /*Form sections*/

   /** Group the person input fields in a component */
   const TransactionDetails = () =>(
    <section className="inputGroup">
      <div className='inputSection'>
        <DropSelect label="Buying" type="select"  options={tokenOption} onChange={(e) => getCryptoInfo(e)} value={token} />        
        <Input  label="Amount to Pay" type="text" placeholder={selectedRate} value={selectedRate} disabled/>          
      </div>

      <div className='inputSection'>
        <div className="combinedpair">
          <Input label="Amount" type="text" value={amountToBuy} onChange={(e) => setOrder(e)}  placeholder={amountToBuy} />  
          <DropSelect label="Fiat"  type="select" options={fiatOption} onChange={(e) => getForexInfo(e)} value={prefFiat}  />      
        </div>
      </div>
    </section>
    
  )

  /** Group the contact input fields in a component */
  const PaymentOptions = () => (
    <section className="inputGroup">      
      <div className='inputSection'>
        <DropSelect label="Preferred Payment Method" type="select" options={paymeths} onChange={(e) => getPaymentInfo(e)} value={payoutMethod} />
        <DropSelect label={ payoutMethod === 'Bank' ?  "Select Your Bank" : "Select Your Mobile Network" } type="select" options={ payoutMethod === 'Bank' ? banks: momos} onChange={(e) => getProviderDetails(e)} value={payProvider} />
      </div>

      <div className='inputSection'>
        {
          methodSelected ? (
            <div>
              <Image alt={payoutMethod} src={payoutMethodLogo} className={ mobilePay ? 'mb-8 rounded-full h-20 w-20 provImage' : 'rounded-full h-20 w-20 provImage'} />             
              {!mobilePay && (  
                <>
                    <Input label="Account Number" required type="text" placeholder="Acc.No" value={bankAcc} onChange={(e) => setBankAcc(e.target.value)} /> 
                    <Input label="Bank Sort-Code" required type="text" placeholder="Sort-Code" value={bankSort} onChange={(e) => setBankSort(e.target.value)} /> 
                    <Input label="Bank Swift-Code" required type="text" placeholder="Swift-Code" value={bankSwift} onChange={(e) => setBankSwift(e.target.value)} onBlur={() => compilePaymentDetails()} />
                </>
              ) }
              
              
              { mobilePay && ( 
                    <Input label="Payout Amount" type="text" placeholder={momoNumber}  onBlur={(e) => compilePaymentDetails(e)} /> 
              ) }
            </div>
          ):(
            <>
            </>
          )
        }
        
      </div>
    </section>
    
  )

  /** Group the address input fields in a component */
  const TransactionSummary = () =>(
    <section className="dispInputGroup">
      <div className="inputSection ">
        <InfoDisplay label='Buying' data={token} />
        <InfoDisplay label='Amount' data={amountToBuy} />
        <InfoDisplay label='Payout Method' data={`Recieving your payment through: ${mobilePay ? 'Mobile Money Deposit': 'Bank Deposit'}`} />
        <InfoDisplay label='Payout Details' data={mobilePay ? `The money will be payed out to to your ${payProvider} mobile money number: ${momoNumber}` : 
                                                              `Payment will be made to your ${payProvider} account with account number ${bankAcc}`} />
                                                              
      </div>

      <div className="inputSection">
        <span> 
          Please go through the order summary on the left to make sure all the information is correct before you confirm your order.
          You will be making payment from your: <span className='highlight'>{ mobilePay ? trxn.telnumber : trxn.bankAccount}</span>. 
          When you are done please provide the Transaction Id here: 
          <span><Input label="Payment Reference ID" type="text" defaultValue={referenceid} onBlur={(e) => addRef(e)} placeholder={referenceid} /></span>
          and click "Confirm & Buy"
        </span>                                             
      </div>
    </section>
  )

 



   //Navigation

  /** Nnavigation between steps */
  const rightArrow = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/next-arrow_1pmaQTqF3.svg?updatedAt=1634410703345"
  const leftArrow  = "https://ik.imagekit.io/lrjseyuxi3m/youtube/Form/back-arrow_ZBmeHiBP3.svg?updatedAt=1634410703363"
  
  const Navigation = () =>(
    <section className="navigationControls">
      {
        step === fieldGroups.length-1 && 
        <button type="submit" className="submitButton" disabled={!isValid}>
          CONFIRM & BUY
        </button>
      }
      {
        step < fieldGroups.length-1 &&
        <button type="button" className="nextButton" disabled={!isValid} onClick={()=>{setStep(step+1)}}>
          <img src={rightArrow}/>
          NEXT
        </button>
      }
      {
        step > 0 &&
      <button type="button" className="backButton" onClick={()=>{setStep(step-1)}}>
        <img src={leftArrow}/>
        BACK
      </button>
      }
    </section>
  )



  /** Mark the input group already filled as blue or gray if not */
  const Reference = () =>(
    <footer className="reference">
      {renderMarkers()}
    </footer>
  )

  function renderMarkers(){
    let markers = []
    for(let i=0; i<fieldGroups.length; i++)
      markers.push(<span className={step >= i ? "markerBlue" : "markerGray" } />)
    return markers
  }


  const [step, setStep] = useState(0)

  const fieldGroups =[
    <TransactionDetails/>,
    <PaymentOptions/>,
    <TransactionSummary/>
  ]



  

  return (
    <section className='w-full max-w-full flex-start flex-col'>

      <h4 className='subhead_text'>
        <span className='blue_gradient'>Buy your {token} </span>
      </h4>

      <p className='desc text-left max-w-md'>
        Please provide the necessary information in order to initiate a new transation.
      </p>

      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        {fieldGroups[step]}
        <Navigation/>
        <Reference/>
      </form>

    </section>
  )
}

export default BuyForm