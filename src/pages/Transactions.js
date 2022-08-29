import React, { useState, useEffect, useReducer } from "react";
import './styles/Transaction.css'
import { motion } from 'framer-motion';
import { ethers } from "ethers";
import { abi, abi1, contractAddresses, contractAddresses1, contractAddresses2, contractAddresses3, contractAddresses4, contractAddresses5} from "../constants";
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





const Transactions = (props) => {

  const [states, dispatch] = useReducer(reducer, initialState)

  
  
  const [my_Tx, setMy_Tx] = useState([])
  const [my_Tx1, setMy_Tx1] = useState([])
  const [my_Tx2, setMy_Tx2] = useState([])
  const [my_Tx3, setMy_Tx3] = useState([])
  const [my_Tx4, setMy_Tx4] = useState([])
  const [my_Tx5, setMy_Tx5] = useState([])

  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
const chainId = parseInt(chainIdHex);

const raffleAddress = chainId in contractAddresses ? contractAddresses[chainId][0] : null;
const raffleAddress1 = chainId in contractAddresses1 ? contractAddresses1[chainId][0] : null;
const raffleAddress2 = chainId in contractAddresses2 ? contractAddresses2[chainId][0] : null;
const raffleAddress3 = chainId in contractAddresses3 ? contractAddresses3[chainId][0] : null;
const raffleAddress4 = chainId in contractAddresses4 ? contractAddresses4[chainId][0] : null;
const raffleAddress5 = chainId in contractAddresses5 ? contractAddresses5[chainId][0] : null;




// POLYGON1

const { runContractFunction: getEmits } = useWeb3Contract({
  abi: abi,
  contractAddress: raffleAddress, // specify the networkId
  functionName: "get_My_Tx",
  params: {},
});


async function getAllMyTx(){
  
  const emits = await getEmits();

 

  const structuredTransactions = emits.map((transaction) => ({
    playerAddress: transaction.player,
    amount: ((parseInt((transaction.amount).toString())/10**18).toFixed(3)).toString(),
    timestamp: (transaction.timestamp).toString()

  }));

 

  setMy_Tx(structuredTransactions.reverse())


}


// POLYGON2

const { runContractFunction: getEmits1 } = useWeb3Contract({
  abi: abi,
  contractAddress: raffleAddress1, // specify the networkId
  functionName: "get_My_Tx",
  params: {},
});


async function getAllMyTx1(){
  
  const emits = await getEmits1();



  const structuredTransactions = emits.map((transaction) => ({
    playerAddress: transaction.player,
    amount: ((parseInt((transaction.amount).toString())/10**18).toFixed(3)).toString(),
    timestamp: (transaction.timestamp).toString()

  }));

  setMy_Tx1(structuredTransactions.reverse())
  


// let data1 = (structuredTransactions.reverse()).slice(0, 2)
// console.log('hhfhffhfhhfh')
// console.log(structuredTransactions)

}




// POLYGON3

const { runContractFunction: getEmits2 } = useWeb3Contract({
  abi: abi,
  contractAddress: raffleAddress2, // specify the networkId
  functionName: "get_My_Tx",
  params: {},
});


async function getAllMyTx2(){
  
  const emits = await getEmits2();



  const structuredTransactions = emits.map((transaction) => ({
    playerAddress: transaction.player,
    amount: ((parseInt((transaction.amount).toString())/10**18).toFixed(3)).toString(),
    timestamp: (transaction.timestamp).toString()

  }));

  

  setMy_Tx2(structuredTransactions.reverse())

}




// POLYGON4

const { runContractFunction: getEmits3 } = useWeb3Contract({
  abi: abi,
  contractAddress: raffleAddress3, // specify the networkId
  functionName: "get_My_Tx",
  params: {},
});


async function getAllMyTx3(){
  
  const emits = await getEmits3();



  const structuredTransactions = emits.map((transaction) => ({
    playerAddress: transaction.player,
    amount: ((parseInt((transaction.amount).toString())/10**18).toFixed(3)).toString(),
    timestamp: (transaction.timestamp).toString()

  }));

  setMy_Tx3(structuredTransactions.reverse())

}


// POLYGON5

const { runContractFunction: getEmits4 } = useWeb3Contract({
  abi: abi,
  contractAddress: raffleAddress4, // specify the networkId
  functionName: "get_My_Tx",
  params: {},
});


async function getAllMyTx4(){
  
  const emits = await getEmits4();



  const structuredTransactions = emits.map((transaction) => ({
    playerAddress: transaction.player,
    amount: ((parseInt((transaction.amount).toString())/10**18).toFixed(3)).toString(),
    timestamp: (transaction.timestamp).toString()

  }));

  setMy_Tx4(structuredTransactions.reverse())

}




// POLYGON6

const { runContractFunction: getEmits5 } = useWeb3Contract({
  abi: abi,
  contractAddress: raffleAddress5, // specify the networkId
  functionName: "get_My_Tx",
  params: {},
});


async function getAllMyTx5(){
  
  const emits = await getEmits5();



  const structuredTransactions = emits.map((transaction) => ({
    playerAddress: transaction.player,
    amount: ((parseInt((transaction.amount).toString())/10**18).toFixed(3)).toString(),
    timestamp: (transaction.timestamp).toString()

  }));

  setMy_Tx5(structuredTransactions.reverse())

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
      whileInView={{ x: [-100, 0], opacity: [0, 1] }}
      transition={{ duration: 0.5 }}
      className='table__container'>
      {props.Name ? "" : <h1 className='table__h1'>Transactions List</h1>}

      <>
      {!props.coin ? 
      <div className="table__container1">
        <table className="table1">
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

          {props.coin == 'polygon1' || !props.coin ?
             <table className='table'>
             <thead className='thead'>
               <tr className='tr'>
                 <th>BLOCKCHAIN</th>
                 <th>ADDRESS TO</th>
                 <th>ADDRESS FROM</th>
                 <th>AMOUNT</th>
                 <th>DATE</th>
                 
               </tr>
             </thead>
             <tbody>
          
            {my_Tx.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>POLYGON($1)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress.slice(
                    0,
                    5
                  )}...${raffleAddress.slice(raffleAddress.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
            </tbody>
            </table>
            
             : ''}



          { props.coin == 'polygon2' || !props.coin ?
             <table className='table'>
             <thead className='thead'>
               <tr className='tr'>
                 <th>BLOCKCHAIN</th>
                 <th>ADDRESS TO</th>
                 <th>ADDRESS FROM</th>
                 <th>AMOUNT</th>
                 <th>DATE</th>
                 
               </tr>
             </thead>
             <tbody>
              
          
            {my_Tx1.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($10)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress1.slice(
                    0,
                    5
                  )}...${raffleAddress1.slice(raffleAddress1.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
            </tbody>
            </table>
             : ''}

             
        {props.coin == 'polygon3' || !props.coin ?
             <table className='table'>
             <thead className='thead'>
               <tr className='tr'>
                 <th>BLOCKCHAIN</th>
                 <th>ADDRESS TO</th>
                 <th>ADDRESS FROM</th>
                 <th>AMOUNT</th>
                 <th>DATE</th>
                 
               </tr>
             </thead>
             <tbody>
          
            {my_Tx2.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($50)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress2.slice(
                    0,
                    5
                  )}...${raffleAddress2.slice(raffleAddress2.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
            </tbody>
            </table>
             : ''}


          {props.coin == 'polygon4' || !props.coin ?
             <table className='table'>
             <thead className='thead'>
               <tr className='tr'>
                 <th>BLOCKCHAIN</th>
                 <th>ADDRESS TO</th>
                 <th>ADDRESS FROM</th>
                 <th>AMOUNT</th>
                 <th>DATE</th>
                 
               </tr>
             </thead>
             <tbody>
          
            {my_Tx3.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($100)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress3.slice(
                    0,
                    5
                  )}...${raffleAddress3.slice(raffleAddress3.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
            </tbody>
            </table>
             : ''}  


          {props.coin == 'polygon5' || !props.coin ?
             <table className='table'>
             <thead className='thead'>
               <tr className='tr'>
                 <th>BLOCKCHAIN</th>
                 <th>ADDRESS TO</th>
                 <th>ADDRESS FROM</th>
                 <th>AMOUNT</th>
                 <th>DATE</th>
                 
               </tr>
             </thead>
             <tbody>
          
            {my_Tx4.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($500)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress4.slice(
                    0,
                    5
                  )}...${raffleAddress4.slice(raffleAddress4.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
            </tbody>
            </table>
             : ''}  



          {props.coin == 'polygon6' || !props.coin ?
             <table className='table'>
             <thead className='thead'>
               <tr className='tr'>
                 <th>BLOCKCHAIN</th>
                 <th>ADDRESS TO</th>
                 <th>ADDRESS FROM</th>
                 <th>AMOUNT</th>
                 <th>DATE</th>
                 
               </tr>
             </thead>
             <tbody>
          
            
            {my_Tx5.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($1000)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress5.slice(
                    0,
                    5
                  )}...${raffleAddress5.slice(raffleAddress5.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
            </tbody>
            </table>
             : ''}








       
            

   
      </>

      
      }
      </>
       



      <div className={states.state1}>
        
          {!props.coin ?
             <table className='table'>
             <thead className='thead'>
               <tr className='tr'>
                 <th>BLOCKCHAIN</th>
                 <th>ADDRESS TO</th>
                 <th>ADDRESS FROM</th>
                 <th>AMOUNT</th>
                 <th>DATE</th>
                 
               </tr>
             </thead>
             <tbody>
          
            {my_Tx.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>POLYGON($1)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress.slice(
                    0,
                    5
                  )}...${raffleAddress.slice(raffleAddress.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
            </tbody>

            </table>
             : ''}


          
      </div>







      <div className={states.state10}>
        
          {!props.coin ?

            <table className='table'>
              <thead className='thead'>
              <tr className='tr'>
                <th>BLOCKCHAIN</th>
                <th>ADDRESS TO</th>
                <th>ADDRESS FROM</th>
                <th>AMOUNT</th>
                <th>DATE</th>
                
              </tr>
            </thead>
            <tbody>
  
            {my_Tx1.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($10)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress1.slice(
                    0,
                    5
                  )}...${raffleAddress1.slice(raffleAddress1.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}

              </tbody>

              </table>
            
             : ''}


         
      </div>






      <div className={states.state50}>
        
    
        {!props.coin ?
              <table className='table'>
              <thead className='thead'>
                <tr className='tr'>
                  <th>BLOCKCHAIN</th>
                  <th>ADDRESS TO</th>
                  <th>ADDRESS FROM</th>
                  <th>AMOUNT</th>
                  <th>DATE</th>
                  
                </tr>
              </thead>
              <tbody>
    
            {my_Tx2.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($50)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress2.slice(
                    0,
                    5
                  )}...${raffleAddress2.slice(raffleAddress2.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
                  </tbody>

                </table>
             : ''}

    
      </div>





      <div className={states.state100}>
        
     

          {!props.coin ?
             <table className='table'>
             <thead className='thead'>
               <tr className='tr'>
                 <th>BLOCKCHAIN</th>
                 <th>ADDRESS TO</th>
                 <th>ADDRESS FROM</th>
                 <th>AMOUNT</th>
                 <th>DATE</th>
                 
               </tr>
             </thead>
             <tbody>
            {my_Tx3.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($100)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress3.slice(
                    0,
                    5
                  )}...${raffleAddress3.slice(raffleAddress3.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
             </tbody>

            </table>
             : ''}  

         
      </div>





      <div className={states.state500}>
    


             {!props.coin ?
                        
              <table className='table'>
              <thead className='thead'>
                <tr className='tr'>
                  <th>BLOCKCHAIN</th>
                  <th>ADDRESS TO</th>
                  <th>ADDRESS FROM</th>
                  <th>AMOUNT</th>
                  <th>DATE</th>
                  
                </tr>
              </thead>
              <tbody>
            {my_Tx4.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($500)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress4.slice(
                    0,
                    5
                  )}...${raffleAddress4.slice(raffleAddress4.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
              </tbody>

              </table>
             : ''}  

        
      </div>



      <div className={states.state1000}>
        
  
          {!props.coin ?
                <table className='table'>
                <thead className='thead'>
                  <tr className='tr'>
                    <th>BLOCKCHAIN</th>
                    <th>ADDRESS TO</th>
                    <th>ADDRESS FROM</th>
                    <th>AMOUNT</th>
                    <th>DATE</th>
                    
                  </tr>
                </thead>
                <tbody>
      
            
            {my_Tx5.map((item, index) => (
              <tr key={index}>
                <td data-label='BLOCKCHAIN'>Polygon($1000)</td>
                <td data-label='ADDRESS TO'>
                {`${raffleAddress5.slice(
                    0,
                    5
                  )}...${raffleAddress5.slice(raffleAddress5.length - 4)}`}
                
                </td>
                <td data-label='ADDRESS FROM'>
                  {`${item.playerAddress.slice(
                    0,
                    5
                  )}...${item.playerAddress.slice(item.playerAddress.length - 4)}`}
                </td>

                <td data-label='AMOUNT'>{item.amount} MATIC</td>
                <td data-label='DATE'>{new Date(item.timestamp * 1000).toDateString()}</td>
                

              </tr>
            ))}
            </tbody>

            </table>
             : ''}

       

          
      </div>



      






      

   

      <br />
      <br />
      <br />
      <br />
      <br />
      <br />


    </motion.div>
    : ''}
    </>


  )
}

export default Transactions