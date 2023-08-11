'use client';

import { useState, useEffect } from "react";
import TrxnCard from "@components/TrxnCard";
import { useSession } from "next-auth/react";
import { useRouter } from 'next/navigation';


const TrxnCardList = ({ data, handleClick }) => {
  const { data: session } = useSession();
  return(
    <div className=" mt-8 prompt_layout">
      {data.map((trxn) => (
        <TrxnCard 
          key={trxn._id}
          transaction={trxn}
          handleClick={handleClick}
        />
      ))}

    </div>
  )
}




const page = () => {
  const [searchText, setSearchText] = useState('');
  const [transactions, setTransactions] = useState([]);
  
  const router = useRouter();


  useEffect(() => {
    const fetchTransactions = async () => {
      const response = await fetch('/api/transactions');
      const data = await response.json();
      setTransactions(data);
    }

    fetchTransactions();
  }, []);




  const handleSearchChange = () => {

  }


  return (
    <section className="feed">
      <form className=" mt-12 relative w-2/6 flex-center">
        <input
          type=""
          placeholder=""
          value={searchText}
          onChange={handleSearchChange}
          required
          className="search_input peer"
        />

      </form>

      <TrxnCardList
        data={transactions}
        handleClick={() => {}}
      />
    </section>
  )
}

export default page