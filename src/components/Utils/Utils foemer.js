import React, { useEffect, useState } from 'react'
import { HiUserGroup } from 'react-icons/hi';
import { BsCoin } from 'react-icons/bs';
import { GiPodiumWinner } from 'react-icons/gi';
import './Utils.css'
import { motion } from 'framer-motion';
import { ethers } from "ethers";
import { abi, contractAddresses } from "../../constants";
import getPrice from '../../utils/getEthPrice'

const Utils = () => {
  async function getPriceValue() {
    const helo = await getPrice()
    console.log("price:")
    console.log(helo)
  }

  useEffect(() => {
    getPriceValue()
  })

  useEffect(() => {
    if (window.ethereum) {
      const provider = new ethers.providers.Web3Provider(window.ethereum)
      const contract = new ethers.Contract(
        contractAddresses[31337],
        abi,
        provider
      )
      console.log("ethereum")

      contract.on("WinnerPicked", (who) => {
        console.log("winner picked")
        console.log(who)
      })

    }
  })

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
            <h1 className='util__h1'>65000</h1>
            <p className='util__para'>Total Players</p>
          </div>
        </div>


        <div className='util1'>
          <div>
            < BsCoin className='util__icon' />
          </div>

          <div className='util__text'>
            <h1 className='util__h1'>$20000</h1>
            <p className='util__para'>Total Amount Won</p>
          </div>
        </div>


        <div className='util1'>
          <div>
            < GiPodiumWinner className='util__icon' />
          </div>

          <div className='util__text'>
            <h1 className='util__h1'>500</h1>
            <p className='util__para'>Total Winners</p>
          </div>
        </div>



      </motion.div>
    </div>
  )
}

export default Utils