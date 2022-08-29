import React, { useRef, useReducer, useState, useEffect } from "react";

import { abi, contractAddresses } from "../constants";
import { FaEthereum } from "react-icons/fa";
import { motion } from "framer-motion";
import { useNotification } from "web3uikit";
import { ethers } from "ethers";
import { useMoralis, useWeb3Contract } from "react-moralis";
import Eth from "../pages/Eth";



const MoralisFunctions = () => {

    const [numberOfPlayers, setNumberOfPlayers] = useState("0");

    const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
    const chainId = parseInt(chainIdHex);
    const raffleAddress =
    chainId in contractAddresses ? contractAddresses[chainId][0] : null;

    const { runContractFunction: getPlayersNumber } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress,
        functionName: "getTotalPlayers",
        params: {},
      });
    
    
      async function updateUIValues() {
        const numPlayersFromCall = (await getPlayersNumber()).toString();
        setNumberOfPlayers(numPlayersFromCall);

        console.log('carrrrrrrr')
        console.log(numPlayersFromCall)

      }


      
        
      
  
      



  return (
    <div>
        <Eth osazee='fool' />
    </div>
    
  )
}

export default MoralisFunctions