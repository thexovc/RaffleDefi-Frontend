import React, { useEffect, useState } from 'react'
import { HiUserGroup } from 'react-icons/hi';
import { BsCoin } from 'react-icons/bs';
import { GiPodiumWinner } from 'react-icons/gi';
import './Utils.css'
import { motion } from 'framer-motion';
import { abi, abi1, contractAddresses, contractAddresses1, contractAddresses2, contractAddresses3, contractAddresses4, contractAddresses5} from "../../constants";
import { useMoralis, useWeb3Contract } from "react-moralis";


const Utils = () => {
  const [value, setValue] = useState(0)

  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  // These get re-rendered every time due to our connect button!
  const chainId = parseInt(chainIdHex);
  // console.log(`ChainId is ${chainId}`)
    
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


  const [totalPlayers, setTotalPlayers] = useState('0')
  const [totalWinners, setTotalWinners] = useState('0')
  const [totalAmountWon, setTotalAmountWon] = useState('0')

  const { runContractFunction: getEmits } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // specify the networkId
    functionName: "getEmits",
    params: {},
  });


  async function updateUIValues() {
    const pow = Math.pow(10, 18)
    const emits = await getEmits();
    const fee = (await getFee()).toString()

    const totalPlayers = emits[0].toString()
    const totalWinners = emits[2].toString()
    const totalAmountWon = emits[1].toString()

    const price = parseInt(fee)/pow

      const finalPrice = (Math.round((price * parseInt(totalAmountWon)) / pow)).toString()

    setTotalPlayers(totalPlayers)
    setTotalWinners(totalWinners)
    setTotalAmountWon(finalPrice)

  }

  
 


  
  
  // POLYGON2


  const [totalPlayers1, setTotalPlayers1] = useState('0')
  const [totalWinners1, setTotalWinners1] = useState('0')
  const [totalAmountWon1, setTotalAmountWon1] = useState('0')

  const { runContractFunction: getEmits1 } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress1, // specify the networkId
    functionName: "getEmits",
    params: {},
  });


  async function updateUIValues1() {
    const pow = Math.pow(10, 18)
    const emits = await getEmits1();
    const fee = (await getFee()).toString()

    const totalPlayers = emits[0].toString()
    const totalWinners = emits[2].toString()
    const totalAmountWon = emits[1].toString()

    const price = parseInt(fee)/pow

      const finalPrice = (Math.round((price * parseInt(totalAmountWon)) / pow)).toString()

    setTotalPlayers1(totalPlayers)
    setTotalWinners1(totalWinners)
    setTotalAmountWon1(finalPrice)

  }

  
 // POLYGON3


 const [totalPlayers2, setTotalPlayers2] = useState('0')
 const [totalWinners2, setTotalWinners2] = useState('0')
 const [totalAmountWon2, setTotalAmountWon2] = useState('0')

 const { runContractFunction: getEmits2 } = useWeb3Contract({
   abi: abi,
   contractAddress: raffleAddress2, // specify the networkId
   functionName: "getEmits",
   params: {},
 });


 async function updateUIValues2() {
   const pow = Math.pow(10, 18)
   const emits = await getEmits2();
   const fee = (await getFee()).toString()

   const totalPlayers = emits[0].toString()
   const totalWinners = emits[2].toString()
   const totalAmountWon = emits[1].toString()

   const price = parseInt(fee)/pow

     const finalPrice = (Math.round((price * parseInt(totalAmountWon)) / pow)).toString()

   setTotalPlayers2(totalPlayers)
   setTotalWinners2(totalWinners)
   setTotalAmountWon2(finalPrice)

 }


  // POLYGON4


  const [totalPlayers3, setTotalPlayers3] = useState('0')
  const [totalWinners3, setTotalWinners3] = useState('0')
  const [totalAmountWon3, setTotalAmountWon3] = useState('0')

  const { runContractFunction: getEmits3 } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress3, // specify the networkId
    functionName: "getEmits",
    params: {},
  });


  async function updateUIValues3() {
    const pow = Math.pow(10, 18)
    const emits = await getEmits3();
    const fee = (await getFee()).toString()

    const totalPlayers = emits[0].toString()
    const totalWinners = emits[2].toString()
    const totalAmountWon = emits[1].toString()

    const price = parseInt(fee)/pow

      const finalPrice = (Math.round((price * parseInt(totalAmountWon)) / pow)).toString()

    setTotalPlayers3(totalPlayers)
    setTotalWinners3(totalWinners)
    setTotalAmountWon3(finalPrice)

  }


   // POLYGON5


   const [totalPlayers4, setTotalPlayers4] = useState('0')
   const [totalWinners4, setTotalWinners4] = useState('0')
   const [totalAmountWon4, setTotalAmountWon4] = useState('0')
 
   const { runContractFunction: getEmits4 } = useWeb3Contract({
     abi: abi,
     contractAddress: raffleAddress4, // specify the networkId
     functionName: "getEmits",
     params: {},
   });
 
 
   async function updateUIValues4() {
     const pow = Math.pow(10, 18)
     const emits = await getEmits4();
     const fee = (await getFee()).toString()
 
     const totalPlayers = emits[0].toString()
     const totalWinners = emits[2].toString()
     const totalAmountWon = emits[1].toString()
 
     const price = parseInt(fee)/pow
 
       const finalPrice = (Math.round((price * parseInt(totalAmountWon)) / pow)).toString()
 
     setTotalPlayers4(totalPlayers)
     setTotalWinners4(totalWinners)
     setTotalAmountWon4(finalPrice)
 
   }


    // POLYGON6


  const [totalPlayers5, setTotalPlayers5] = useState('0')
  const [totalWinners5, setTotalWinners5] = useState('0')
  const [totalAmountWon5, setTotalAmountWon5] = useState('0')

  const { runContractFunction: getEmits5 } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress5, // specify the networkId
    functionName: "getEmits",
    params: {},
  });


  async function updateUIValues5() {
    const pow = Math.pow(10, 18)
    const emits = await getEmits5();
    const fee = (await getFee()).toString()

    const totalPlayers = emits[0].toString()
    const totalWinners = emits[2].toString()
    const totalAmountWon = emits[1].toString()

    const price = parseInt(fee)/pow

      const finalPrice = (Math.round((price * parseInt(totalAmountWon)) / pow)).toString()

    setTotalPlayers5(totalPlayers)
    setTotalWinners5(totalWinners)
    setTotalAmountWon5(finalPrice)

  }

  
 
   

  
 
  



  useEffect(() => {
    updateUIValues()
    updateUIValues1()
    updateUIValues2()
    updateUIValues3()
    updateUIValues4()
    updateUIValues5()
  }, [isWeb3Enabled])
  
  


  return (
    <div className='utils'>
      <motion.div
        whileInView={{ x: [-100, 0], opacity: [0, 1.5] }}
        transition={{ duration: 0.7 }}
        className='container1'
      >

        <div className='util1'>
          <div>
            < HiUserGroup className='util__icon' />
          </div>

          <div className='util__text'>
            <h1 className='util__h1'>{(parseInt(totalPlayers) + parseInt(totalPlayers1) + parseInt(totalPlayers2) + parseInt(totalPlayers3) + parseInt(totalPlayers4) + parseInt(totalPlayers5)).toString()}</h1>
            <p className='util__para'>Total Players</p>
          </div>
        </div>


        <div className='util1'>
          <div>
            < BsCoin className='util__icon' />
          </div>

          <div className='util__text'>
            <h1 className='util__h1'>${(parseInt(totalAmountWon) + parseInt(totalAmountWon1) + parseInt(totalAmountWon2) + parseInt(totalAmountWon3) + parseInt(totalAmountWon4) + parseInt(totalAmountWon5)).toString()}</h1>
            <p className='util__para'>Total Amount Won</p>
          </div>
        </div>


        <div className='util1'>
          <div>
            < GiPodiumWinner className='util__icon' />
          </div>

          <div className='util__text'>
            <h1 className='util__h1'>{(parseInt(totalWinners) + parseInt(totalWinners1 ) + parseInt(totalWinners2) + parseInt(totalWinners3 ) + parseInt(totalWinners4 ) + parseInt(totalWinners5 )).toString()}</h1>
            <p className='util__para'>Total Winners</p>
          </div>
        </div>



      </motion.div>
    </div>
  )
}

export default Utils