import React, { useRef, useState, useEffect, useReducer } from "react";
import './Winners.css'
import { motion } from 'framer-motion';
import { FaEthereum } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { ethers } from "ethers";
import { abi, abi1, contractAddresses, contractAddresses1, contractAddresses2, contractAddresses3, contractAddresses4, contractAddresses5} from "../../constants";

import { useMoralis, useWeb3Contract } from "react-moralis";


const initialState = {
    state1: 'openState',
    state10: 'closeState',
    state50: 'closeState',
    state100: 'closeState',
    state500: 'closeState',
    state1000: 'closeState',
    active1: 'active1',
    active10: '',
    active50: '',
    active100: '',
    active500: '',
    active1000: '',
   
  }
  
  const reducer = ( state, action) => {
    switch(action.type) {
      case 'open1':
        return {
          state1: 'openState',
          state10: 'closeState',
          state50: 'closeState',
          state100: 'closeState',
          state500: 'closeState',
          state1000: 'closeState',
          active1: 'active1',
          active10: '',
          active50: '',
          active100: '',
          active500: '',
          active1000: '',
         
        }
  
      case 'open10':
        return {
          state1: 'closeState',
          state10: 'openState',
          state50: 'closeState',
          state100: 'closeState',
          state500: 'closeState',
          state1000: 'closeState',
          active1: '',
          active10: 'active1',
          active50: '',
          active100: '',
          active500: '',
          active1000: '',
         
        }
  
        case 'open50':
          return {
            state1: 'closeState',
            state10: 'closeState',
            state50: 'openState',
            state100: 'closeState',
            state500: 'closeState',
            state1000: 'closeState',
            active1: '',
            active10: '',
            active50: 'active1',
            active100: '',
            active500: '',
            active1000: '',
           
          }
  
        case 'open100':
          return {
            state1: 'closeState',
            state10: 'closeState',
            state50: 'closeState',
            state100: 'openState',
            state500: 'closeState',
            state1000: 'closeState',
            active1: '',
            active10: '',
            active50: '',
            active100: 'active1',
            active500: '',
            active1000: '',
   
          }
  
  
          case 'open500':
          return {
            state1: 'closeState',
            state10: 'closeState',
            state50: 'closeState',
            state100: 'closeState',
            state500: 'openState',
            state1000: 'closeState',
            active1: '',
            active10: '',
            active50: '',
            active100: '',
            active500: 'active1',
            active1000: '',
   
          }
  
          case 'open1000':
          return {
            state1: 'closeState',
            state10: 'closeState',
            state50: 'closeState',
            state100: 'closeState',
            state500: 'closeState',
            state1000: 'openState',
            active1: '',
            active10: '',
            active50: '',
            active100: '',
            active500: '',
            active1000: 'active1',
   
          }
  
        default:
          return initialState
    }
  }
  


const Winners = (props) => {
    const [states, dispatch] = useReducer(reducer, initialState)

    
    
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
  

   
    const [winners, setWinners] = useState([])
    const [winners1, setWinners1] = useState([])
    const [winners2, setWinners2] = useState([])
    const [winners3, setWinners3] = useState([])
    const [winners4, setWinners4] = useState([])
    const [winners5, setWinners5] = useState([])




    // POLYGON1

    const { runContractFunction: getEmits } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress, // specify the networkId
        functionName: "get_Winners",
        params: {},
      });

  
      
      
      async function getAllMyTx(){
        
        const pow = Math.pow(10, 18)
        const emits = await getEmits();
        const fee = (await getFee()).toString()


        const price = parseInt(fee)/pow

    
      
       
        const structuredTransactions = emits.map((transaction) => ({
            playerAddress: transaction.player,
            amount: (((parseInt(transaction.amount) * price) / pow).toFixed(2)).toString(),
            timestamp: parseInt(transaction.timestamp)

        }));

        
      
        setWinners(structuredTransactions.reverse())
      
      }


      
 // POLYGON2

 const { runContractFunction: getEmits1 } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress1, // specify the networkId
    functionName: "get_Winners",
    params: {},
  });


  
  
  async function getAllMyTx1(){
    
    const pow = Math.pow(10, 18)
    const emits = await getEmits1();
    const fee = (await getFee()).toString()


    const price = parseInt(fee)/pow


  
   
    const structuredTransactions = emits.map((transaction) => ({
        playerAddress: transaction.player,
        amount: (((parseInt(transaction.amount) * price) / pow).toFixed(2)).toString(),
        timestamp: parseInt(transaction.timestamp)

    }));
  

    
    setWinners1(structuredTransactions.reverse())
  
  }




   // POLYGON3

   const { runContractFunction: getEmits2 } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress2, // specify the networkId
    functionName: "get_Winners",
    params: {},
  });


  
  
  async function getAllMyTx2(){
    
    const pow = Math.pow(10, 18)
    const emits = await getEmits2();
    const fee = (await getFee()).toString()


    const price = parseInt(fee)/pow


  
   
    const structuredTransactions = emits.map((transaction) => ({
        playerAddress: transaction.player,
        amount: (((parseInt(transaction.amount) * price) / pow).toFixed(2)).toString(),
        timestamp: parseInt(transaction.timestamp)

    }));
  
    setWinners2(structuredTransactions.reverse())
  
  }


   // POLYGON4

   const { runContractFunction: getEmits3 } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress3, // specify the networkId
    functionName: "get_Winners",
    params: {},
  });


  
  
  async function getAllMyTx3(){
    
    const pow = Math.pow(10, 18)
    const emits = await getEmits3();
    const fee = (await getFee()).toString()


    const price = parseInt(fee)/pow


  
   
    const structuredTransactions = emits.map((transaction) => ({
        playerAddress: transaction.player,
        amount: (((parseInt(transaction.amount) * price) / pow).toFixed(2)).toString(),
        timestamp: parseInt(transaction.timestamp)

    }));
  
    setWinners3(structuredTransactions.reverse())
  
  }



   // POLYGON5

   const { runContractFunction: getEmits4 } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress4, // specify the networkId
    functionName: "get_Winners",
    params: {},
  });


  
  
  async function getAllMyTx4(){
    
    const pow = Math.pow(10, 18)
    const emits = await getEmits4();
    const fee = (await getFee()).toString()


    const price = parseInt(fee)/pow


  
   
    const structuredTransactions = emits.map((transaction) => ({
        playerAddress: transaction.player,
        amount: (((parseInt(transaction.amount) * price) / pow).toFixed(2)).toString(),
        timestamp: parseInt(transaction.timestamp)

    }));
  
    setWinners4(structuredTransactions.reverse())
  
  }
  


  
 // POLYGON6

 const { runContractFunction: getEmits5 } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress5, // specify the networkId
    functionName: "get_Winners",
    params: {},
  });


  
  
  async function getAllMyTx5(){
    
    const pow = Math.pow(10, 18)
    const emits = await getEmits5();
    const fee = (await getFee()).toString()


    const price = parseInt(fee)/pow


  
   
    const structuredTransactions = emits.map((transaction) => ({
        playerAddress: transaction.player,
        amount: (((parseInt(transaction.amount) * price) / pow).toFixed(2)).toString(),
        timestamp: parseInt(transaction.timestamp)

    }));
  
    setWinners5(structuredTransactions.reverse())
  
  }
  



  


  


  


    
      


  useEffect(() => {
    getAllMyTx()
    getAllMyTx1()
    getAllMyTx2()
    getAllMyTx3()
    getAllMyTx4()
    getAllMyTx5()
    
  }, [isWeb3Enabled])


    return (
        <>
           {!props.className || props.className == 'openState' ?

            
                <motion.div

                    className='winner'
                    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
                    transition={{ duration: 0.5 }}
                >
                    {props.Name ? "" : <h1 className='winner__h1'>Recent Winners</h1> }

                    
      <>
      {!props.coin ? 
      <div className="table1__container9">
        <table className="table9">
          <thead className="thead">
            <tr className="tr">
              <th className={states.active1} onClick={() => dispatch({type: 'open1'})}>
                $1
              </th>
              <th className={states.active10} onClick={() => dispatch({type: 'open10'})}>
                $10
              </th>
              <th className={states.active50} onClick={() => dispatch({type: 'open50'})}>
                $50
              </th>
              <th className={states.active100} onClick={() => dispatch({type: 'open100'})}>
                $100
              </th>
              <th className={states.active500} onClick={() => dispatch({type: 'open500'})}>
                $500
              </th>
              <th className={states.active1000} onClick={() => dispatch({type: 'open1000'})}>
                $1000
              </th>
            </tr>
          </thead>
        </table>
      </div>
      : 
      <>

        <div className='winner__cards'>
              {props.coin == 'polygon1' || !props.coin ?
                    <>
                   
                        {winners.map((item, index) => (
                            <div key={index} className="winner__card">
                                <span className="winner__chain">
                                    <FaEthereum className='winner__coin' />
                                </span>

                                <div className="winner__info">
                                    <p className='winner__address'>
                                        {item.playerAddress.slice(0, 5
                                        )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                    </p>
                                    <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                    <p className="winner__amount">{item.amount} USD</p>
                                </div>

                            </div>
                        ))}

                    </>
                    : ''}

                    {props.coin == 'polygon2' || !props.coin ?
                    <>
                    
                        {winners1.map((item, index) => (
                            <div key={index} className="winner__card">
                                <span className="winner__chain">
                                    <FaEthereum className='winner__coin' />
                                </span>

                                <div className="winner__info">
                                    <p className='winner__address'>
                                        {item.playerAddress.slice(0, 5
                                        )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                    </p>
                                    <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                    <p className="winner__amount">{item.amount} USD</p>
                                </div>

                            </div>
                        ))}

                    </>
                    : ''}


                    {props.coin == 'polygon3' || !props.coin ?
                    <>
                        {winners2.map((item, index) => (
                            <div key={index} className="winner__card">
                                <span className="winner__chain">
                                    <FaEthereum className='winner__coin' />
                                </span>

                                <div className="winner__info">
                                    <p className='winner__address'>
                                        {item.playerAddress.slice(0, 5
                                        )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                    </p>
                                    <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                    <p className="winner__amount">{item.amount} USD</p>
                                </div>

                            </div>
                        ))}

                    </>
                    : ''}

                    {props.coin == 'polygon4' || !props.coin ?
                    <>
                   
                        {winners3.map((item, index) => (
                            <div key={index} className="winner__card">
                                <span className="winner__chain">
                                    <FaEthereum className='winner__coin' />
                                </span>

                                <div className="winner__info">
                                    <p className='winner__address'>
                                        {item.playerAddress.slice(0, 5
                                        )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                    </p>
                                    <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                    <p className="winner__amount">{item.amount} USD</p>
                                </div>

                            </div>
                        ))}

                    </>
                    : ''}



                {props.coin == 'polygon5' || !props.coin ?
                <>
                    {winners4.map((item, index) => (
                        <div key={index} className="winner__card">
                            <span className="winner__chain">
                                <FaEthereum className='winner__coin' />
                            </span>

                            <div className="winner__info">
                                <p className='winner__address'>
                                    {item.playerAddress.slice(0, 5
                                    )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                </p>
                                <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                <p className="winner__amount">{item.amount} USD</p>
                            </div>

                        </div>
                    ))}

                </>
                : ''}



                {props.coin == 'polygon6' || !props.coin ?
                <>
             
                    {winners5.map((item, index) => (
                        <div key={index} className="winner__card">
                            <span className="winner__chain">
                                <FaEthereum className='winner__coin' />
                            </span>

                            <div className="winner__info">
                                <p className='winner__address'>
                                    {item.playerAddress.slice(0, 5
                                    )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                </p>
                                <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                <p className="winner__amount">{item.amount} USD</p>
                            </div>

                        </div>
                    ))}

                </>
                : ''}

      </div>
      </>
      }

      
      </>
            <div className={states.state1}>
                <div className='winner__cards'>

                    {!props.coin ?
                    <>
                   
                        {winners.map((item, index) => (
                            <div key={index} className="winner__card">
                                <span className="winner__chain">
                                    <FaEthereum className='winner__coin' />
                                </span>

                                <div className="winner__info">
                                    <p className='winner__address'>
                                        {item.playerAddress.slice(0, 5
                                        )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                    </p>
                                    <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                    <p className="winner__amount">{item.amount} USD</p>
                                </div>

                            </div>
                        ))}

                    </>
                    : ''}


                </div>
            </div>



            <div className={states.state10}>         
                <div className='winner__cards'>
                    {!props.coin ?
                    <>
                    
                        {winners1.map((item, index) => (
                            <div key={index} className="winner__card">
                                <span className="winner__chain">
                                    <FaEthereum className='winner__coin' />
                                </span>

                                <div className="winner__info">
                                    <p className='winner__address'>
                                        {item.playerAddress.slice(0, 5
                                        )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                    </p>
                                    <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                    <p className="winner__amount">{item.amount} USD</p>
                                </div>

                            </div>
                        ))}

                    </>
                    : ''}
                </div>
            </div>   






            <div className={states.state50}>
 
                <div className='winner__cards'>
                    {!props.coin ?
                    <>
                        {winners2.map((item, index) => (
                            <div key={index} className="winner__card">
                                <span className="winner__chain">
                                    <FaEthereum className='winner__coin' />
                                </span>

                                <div className="winner__info">
                                    <p className='winner__address'>
                                        {item.playerAddress.slice(0, 5
                                        )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                    </p>
                                    <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                    <p className="winner__amount">{item.amount} USD</p>
                                </div>

                            </div>
                        ))}

                    </>
                    : ''}

                </div>
            </div>





            <div className={states.state100}>
                <div className='winner__cards'>
                    {!props.coin ?
                    <>
                    
                        {winners3.map((item, index) => (
                            <div key={index} className="winner__card">
                                <span className="winner__chain">
                                    <FaEthereum className='winner__coin' />
                                </span>

                                <div className="winner__info">
                                    <p className='winner__address'>
                                        {item.playerAddress.slice(0, 5
                                        )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                    </p>
                                    <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                    <p className="winner__amount">{item.amount} USD</p>
                                </div>

                            </div>
                        ))}

                    </>
                    : ''}
                </div>
            </div>





            <div className={states.state500}>  
                <div className='winner__cards'>
                {!props.coin ?
                <>
                    {winners4.map((item, index) => (
                        <div key={index} className="winner__card">
                            <span className="winner__chain">
                                <FaEthereum className='winner__coin' />
                            </span>

                            <div className="winner__info">
                                <p className='winner__address'>
                                    {item.playerAddress.slice(0, 5
                                    )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                </p>
                                <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                <p className="winner__amount">{item.amount} USD</p>
                            </div>

                        </div>
                    ))}

                </>
                : ''}
                </div>
            </div>





            <div className={states.state1000}>  
                <div className='winner__cards'>
                {!props.coin ?
                <>
              
                    {winners5.map((item, index) => (
                        <div key={index} className="winner__card">
                            <span className="winner__chain">
                                <FaEthereum className='winner__coin' />
                            </span>

                            <div className="winner__info">
                                <p className='winner__address'>
                                    {item.playerAddress.slice(0, 5
                                    )}...{item.playerAddress.slice(item.playerAddress.length - 4)}

                                </p>
                                <p className="winner__time">{new Date(item.timestamp * 1000).toDateString()}</p>
                                <p className="winner__amount">{item.amount} USD</p>
                            </div>

                        </div>
                    ))}

                </>
                : ''}
                </div>
            </div>





                </motion.div>
        : ''}
        </>
        
    )
}

export default Winners