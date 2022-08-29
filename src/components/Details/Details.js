import React, { useRef, useState, useEffect } from "react";

import { abi, abi1, contractAddresses, contractAddresses1, contractAddresses2, contractAddresses3, contractAddresses4, contractAddresses5} from "../../constants";
import { motion } from 'framer-motion';
import { useMoralis, useWeb3Contract } from "react-moralis";
import './Details.css'



const Details = (props) => {


    let interval = useRef();

   

    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
   
    const chainId = parseInt(chainIdHex);

     
    const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;
    const raffleAddress1 = chainId in contractAddresses1 ? contractAddresses1[chainId][0] : null;
    const raffleAddress2 = chainId in contractAddresses2 ? contractAddresses2[chainId][0] : null;
    const raffleAddress3 = chainId in contractAddresses3 ? contractAddresses3[chainId][0] : null;
    const raffleAddress4 = chainId in contractAddresses4 ? contractAddresses4[chainId][0] : null;
    const raffleAddress5 = chainId in contractAddresses5 ? contractAddresses5[chainId][0] : null;


     
const { runContractFunction: getFee } = useWeb3Contract({
  abi: abi1,
  contractAddress: '0x10d33B83d57BFAABDeF4b51c1C2b260404B05b34', // specify the networkId
  functionName: "getUsdPrice",
  params: {},
});

 
  



    // POLYGON1


    const [activePlayers, setActivePlayers] = useState("0");
    const [amountReceived, setAmountReceived] = useState("0");
    
    const { runContractFunction: getEmits } = useWeb3Contract({
      abi: abi,
      contractAddress: raffleAddress, // specify the networkId
      functionName: "getEmits",
      params: {},
    });

   
   

     async function updateUIValues() {
      const pow = Math.pow(10, 18)
      const emits = await getEmits()
      const fee = (await getFee()).toString()

      const activePlayers = emits[6].toString()
      const amountReceived = emits[3].toString()

      const price = parseInt(fee)/pow

      const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()

      setActivePlayers(activePlayers)
      setAmountReceived(finalPrice)


    }






    // POLYGON2
    const [activePlayers1, setActivePlayers1] = useState("0");
    const [amountReceived1, setAmountReceived1] = useState("0");
    

    const { runContractFunction: getEmits1 } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress1, // specify the networkId
        functionName: "getEmits",
        params: {},
      });

     


      
     
    

      async function updateUIValues1() {
        const pow = Math.pow(10, 18)
        const emits = await getEmits1()
        const fee = (await getFee()).toString()

        const activePlayers = emits[6].toString()
        const amountReceived = emits[3].toString()
        const price = parseInt(fee)/pow

        const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()

        setActivePlayers1(activePlayers)
        setAmountReceived1(finalPrice)


    }




    // POLYGON3


    
    const [activePlayers2, setActivePlayers2] = useState("0");
    const [amountReceived2, setAmountReceived2] = useState("0");
    

    const { runContractFunction: getEmits2 } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress2, // specify the networkId
        functionName: "getEmits",
        params: {},
      });

     


      
     
    


 
      async function updateUIValues2() {
        const pow = Math.pow(10, 18)
        const emits = await getEmits2()
        const fee = (await getFee()).toString()

        const activePlayers = emits[6].toString()
        const amountReceived = emits[3].toString()
        const price = parseInt(fee)/pow

        const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()

        setActivePlayers2(activePlayers)
        setAmountReceived2(finalPrice)
      }




      // POLYGON4


      const [activePlayers3, setActivePlayers3] = useState("0");
      const [amountReceived3, setAmountReceived3] = useState("0");
      
  
      const { runContractFunction: getEmits3 } = useWeb3Contract({
          abi: abi,
          contractAddress: raffleAddress3, // specify the networkId
          functionName: "getEmits",
          params: {},
        });
  
       
  
  
        
       
      
  
  
     
        async function updateUIValues3() {
          const pow = Math.pow(10, 18)
          const emits = await getEmits3()
          const fee = (await getFee()).toString()
  
          const activePlayers = emits[6].toString()
          const amountReceived = emits[3].toString()
          const price = parseInt(fee)/pow
  
          const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()
  
          setActivePlayers3(activePlayers)
          setAmountReceived3(finalPrice)
  
        }
        
        

        // POLYGON5



        
        const [activePlayers4, setActivePlayers4] = useState("0");
        const [amountReceived4, setAmountReceived4] = useState("0");
        
    
        const { runContractFunction: getEmits4 } = useWeb3Contract({
            abi: abi,
            contractAddress: raffleAddress4, // specify the networkId
            functionName: "getEmits",
            params: {},
          });
    
         
    
    
          
         
        
    
   
          async function updateUIValues4() {
            const pow = Math.pow(10, 18)
            const emits = await getEmits4()
            const fee = (await getFee()).toString()
    
            const activePlayers = emits[6].toString()
            const amountReceived = emits[3].toString()
            const price = parseInt(fee)/pow
    
            const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()
    
            setActivePlayers4(activePlayers)
            setAmountReceived4(finalPrice)
    
          }




          // POLYGON6



          const [activePlayers5, setActivePlayers5] = useState("0");
    const [amountReceived5, setAmountReceived5] = useState("0");
    

    const { runContractFunction: getEmits5 } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress5, // specify the networkId
        functionName: "getEmits",
        params: {},
      });

     


      
     
    


    
      async function updateUIValues5() {
        const pow = Math.pow(10, 18)
        const emits = await getEmits5()
        const fee = (await getFee()).toString()

        const activePlayers = emits[6].toString()
        const amountReceived = emits[3].toString()
        const price = parseInt(fee)/pow

        const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()

        setActivePlayers5(activePlayers)
        setAmountReceived5(finalPrice)

      }

 


   

    useEffect(() => {
       
        updateUIValues();
        updateUIValues1();
        updateUIValues2();
        updateUIValues3();
        updateUIValues4();
        updateUIValues5();
 

    return () => {
        clearInterval(interval.current);
    };
}, [isWeb3Enabled]);



 
    
  return (
    <>
    {!props.className || props.className == 'openState' ?
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className= 'table__container'
     
      >
        <table className="table2">
          <thead className="thead">
            <tr className="tr">
              <th>BLOCKCHAIN</th>
              <th>PLAYES ENTERED</th>
             
              <th>DURATION</th>
              
              <th>ENTRY FEE</th>
              <th>MAX WINNINGS</th>
            </tr>
          </thead>
          <tbody>
            
          {props.coin == 'polygon1' || !props.coin ?

            <tr>
              <td data-label="BLOCKCHAIN">POLYGON</td>
              <td data-label="PLAYERS ENTERED">{activePlayers}</td>
              <td data-label="DURATION">24HRS</td>
              <td data-label="ENTRY">$1</td>
              <td data-label="MAXWIN">${((parseInt(amountReceived)*0.7).toFixed(2)).toString()}</td>
            </tr>
           
            :""}


            {props.coin == 'polygon2' || !props.coin ?

              <tr>
                <td data-label="BLOCKCHAIN">POLYGON</td>
                <td data-label="PLAYERS ENTERED">{activePlayers1}</td>
                <td data-label="DURATION">12HRS</td>
                <td data-label="ENTRY">$10</td>
                <td data-label="MAXWIN">${((parseInt(amountReceived1)*0.7).toFixed(2)).toString()}</td>
              </tr>

            :""}




            {props.coin == 'polygon3' || !props.coin ?

            <tr>
              <td data-label="BLOCKCHAIN">POLYGON</td>
              <td data-label="PLAYERS ENTERED">{activePlayers2}</td>
              <td data-label="DURATION">12HRS</td>
              <td data-label="ENTRY">$50</td>
              <td data-label="MAXWIN">${((parseInt(amountReceived2)*0.7).toFixed(2)).toString()}</td>
            </tr>

            :""}


            {props.coin == 'polygon4' || !props.coin ?

            <tr>
              <td data-label="BLOCKCHAIN">POLYGON</td>
              <td data-label="PLAYERS ENTERED">{activePlayers3}</td>
              <td data-label="DURATION">24HRS</td>
              <td data-label="ENTRY">$100</td>
              <td data-label="MAXWIN">${((parseInt(amountReceived3)*0.7).toFixed(2)).toString()}</td>
            </tr>

            :""}


          {props.coin == 'polygon5' || !props.coin ?

          <tr>
            <td data-label="BLOCKCHAIN">POLYGON</td>
            <td data-label="PLAYERS ENTERED">{activePlayers4}</td>
            <td data-label="DURATION">24HRS</td>
            <td data-label="ENTRY">$500</td>
            <td data-label="MAXWIN">${((parseInt(amountReceived4)*0.7).toFixed(2)).toString()}</td>
          </tr>

          :""}



          {props.coin == 'polygon6' || !props.coin ?

          <tr>
            <td data-label="BLOCKCHAIN">POLYGON</td>
            <td data-label="PLAYERS ENTERED">{activePlayers5}</td>
            <td data-label="DURATION">24HRS</td>
            <td data-label="ENTRY">$1000</td>
            <td data-label="MAXWIN">${((parseInt(amountReceived5)*0.7).toFixed(2)).toString()}</td>
          </tr>

          :""}
          </tbody>
        </table>
<br />
 <br />
 


        {props.coin == 'polygon1' || !props.coin ?
         <div className="details__description">
              <h1 className="description__h1">Description:</h1>
              <p className="description__p">The entry fee for this raffle is $1.
               The value of $1 in MATIC varies with the pricefeed of USD/MATIC. 
              After 12HRS has elapsed, chainlink nodes generates at random the winner among the players in the raffle.
               70% of the total entry fee is automatically sent to the winner and the remaining amount is used to fund
               the nodes that makes the whole process decentralized</p>

            </div> 
          :''}
 
 
        {props.coin == 'polygon2' || !props.coin ?
         <div className="details__description">
              <h1 className="description__h1">Description:</h1>
              <p className="description__p">The entry fee for this raffle is $10.
               The value of $10 in MATIC varies with the pricefeed of USD/MATIC. 
              After 12HRS has elapsed, chainlink nodes generates at random the winner among the players in the raffle.
               70% of the total entry fee is automatically sent to the winner and the remaining amount is used to fund
               the nodes that makes the whole process decentralized</p>

            </div> 
          :''}



        {props.coin == 'polygon3' || !props.coin ?
         <div className="details__description">
              <h1 className="description__h1">Description:</h1>
              <p className="description__p">The entry fee for this raffle is $50.
               The value of $50 in MATIC varies with the pricefeed of USD/MATIC. 
              After 12HRS has elapsed, chainlink nodes generates at random the winner among the players in the raffle.
               70% of the total entry fee is automatically sent to the winner and the remaining amount is used to fund
               the nodes that makes the whole process decentralized</p>

            </div> 
          :''}



        {props.coin == 'polygon4' || !props.coin ?
         <div className="details__description">
              <h1 className="description__h1">Description:</h1>
              <p className="description__p">The entry fee for this raffle is $100.
               The value of $100 in MATIC varies with the pricefeed of USD/MATIC. 
              After 24HRS has elapsed, chainlink nodes generates at random the winner among the players in the raffle.
               70% of the total entry fee is automatically sent to the winner and the remaining amount is used to fund
               the nodes that makes the whole process decentralized</p>

            </div> 
          :''}


        {props.coin == 'polygon5' || !props.coin ?
         <div className="details__description">
              <h1 className="description__h1">Description:</h1>
              <p className="description__p">The entry fee for this raffle is $500.
               The value of $500 in MATIC varies with the pricefeed of USD/MATIC. 
              After 24HRS has elapsed, chainlink nodes generates at random the winner among the players in the raffle.
               70% of the total entry fee is automatically sent to the winner and the remaining amount is used to fund
               the nodes that makes the whole process decentralized</p>

            </div> 
          :''}



        {props.coin == 'polygon6' || !props.coin ?
         <div className="details__description">
              <h1 className="description__h1">Description:</h1>
              <p className="description__p">The entry fee for this raffle is $1000.
               The value of $1000 in MATIC varies with the pricefeed of USD/MATIC. 
              After 24HRS has elapsed, chainlink nodes generates at random the winner among the players in the raffle.
               70% of the total entry fee is automatically sent to the winner and the remaining amount is used to fund
               the nodes that makes the whole process decentralized</p>

            </div> 
          :''}



          
      </motion.div>
      : ""}

    </>
  )
}

export default Details