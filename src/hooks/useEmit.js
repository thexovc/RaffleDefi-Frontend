import React, {useState, useEffect} from 'react'
import { ethers } from "ethers";

const useEmit = (address, abi, emitName) => {

    
    const [value, setValue] = useState('0')

    useEffect(() => {
  
    
        if (window.ethereum) {
          const provider = new ethers.providers.Web3Provider(window.ethereum)
          const contract = new ethers.Contract(
            address,
            abi,
            provider
          )
    
    
          contract.on(emitName, (emitName1) => {
            
            let emitName2 = emitName1.toString()
            setValue(emitName2)
          })
    
    
        }
      }, [emitName])
    
    
  return [value]
    
 
}

export default useEmit