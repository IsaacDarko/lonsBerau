"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { useRouter } from "next/navigation";
import TrxnModal from "@components/TrxnModal";
import "./trxns.css";

const CreateTransaction = () => {
  const [ trxnType, setTrxnType ] = useState(null);
  const [ toggleModal, setToggleModal ] = useState(false);

  const initTrxn = (value) => {
    setToggleModal(true);
    setTrxnType(value);
  }

  return (
    <div className='create-trxn rounded'>

      {
        toggleModal ? (
          <TrxnModal toggleModal={toggleModal} setToggleModal={setToggleModal} trxnType={trxnType}/>
        ):(
          <>
          </>
        )
      }       
      
    
        <h1 className="head_text text-left mb-5">
          <span className="blue_gradient"> Initiate A Transaction </span>
        </h1>
 
      
 
        <div className="main_section flex flex-row">
          <div className="buy_section">
            <Image 
              src="/assets/images/sellorbuyone.jpg" 
              alt="lons-lion-logo"
              width={220}
              height={220}
              className="mb-2 rounded"
            />

            <div className="trxn_desc">

              <button 
                type="button"
                onClick={() => initTrxn(1)}
                className="black_btn"
              >
                Buy Crypto
              </button>
            </div>
          </div>





          <div className="sell_section">
          <Image 
              src="/assets/images/sellorbuytwo.jpg" 
              alt="lons-lion-logo"
              width={220}
              height={220}
              className="mb-2 rounded"
            />
            <div className="trxn_desc">

              <button 
                  type="button"
                  onClick={() => initTrxn(2)}
                  className="black_btn"
                >
                  Sell Crypto
              </button>
            </div>
          </div>
        </div>
  

    </div>
  )
}

export default CreateTransaction 