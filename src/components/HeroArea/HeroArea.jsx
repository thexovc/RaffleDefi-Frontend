import { React, useState } from 'react'
import './HeroArea.css'

import { motion } from 'framer-motion';

import { useNavigate } from 'react-router-dom';
import { FaEthereum } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { SiBitcoinsv } from 'react-icons/si';
import { SiChainlink } from 'react-icons/si';
import { SiDogecoin } from 'react-icons/si';
import { SiLitecoin } from 'react-icons/si';
import rd2 from '../../assets/rd2.png'



const HeroArea = () => {

  const [coinstate, setCoinstate] = useState('pick')


  const handleState = (e) => {
    setCoinstate(e.target.value)
  }



  const renderClass = () => {

    let result;
    coinstate === 'pick'
      ? (result = 'closed__display')
      : (result = 'button__div');

    return result
  }


  const renderState = () => {

    let state;

    if (coinstate == 'polygon1') {
      state = 'polygonPage1'
    } else if (coinstate == 'polygon2') {
      state = 'polygonPage2'
    } else if (coinstate == 'polygon3') {
      state = 'polygonPage3'
    } else if (coinstate == 'polygon4') {
      state = 'polygonPage4'
    } else if (coinstate == 'polygon5') {
      state = 'polygonPage5'
    } else if (coinstate == 'polygon6') {
      state = 'polygonPage6'
    } else if (coinstate == 'others') {
      state = 'others'
    }
    


    return state
  }













  const navigate = useNavigate()

  return (
    <div >
      <motion.div

        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='heroarea'>
        <div className='heroarea__container'>


          {/* <h1 className='heroarea__heading'>
            Play lottery and a get a chance to <br />
            win rewards
          </h1> */}

          <span className="heroarea__span">
            <img className="homepagelogo" src={rd2} alt="logo" />
          </span>


          <br />
      
          
          <p className='heroarea__paragraph'>
           <b className='p__head'> Play, make money and win big with raffleDEFI </b><br />
            The lucky winners are picked randomly using a decentralized system <br /> Get paid instantly with transparency and accountability
          </p>

          <motion.div
            whileInView={{ opacity: [0, 1] }}
            transition={{ duration: 0.5, delayChildren: 0.5 }}
            className="dd"
          >
            <div className='container' id='heroarea'>
              <div className='dice'>
                <div className='front face'>
                  <SiBinance className='coin__icon' />
                </div>
                <div className='left face'>
                  <FaEthereum className='coin__icon' />
                </div>
                <div className='right face'>
                  <SiBitcoinsv className='coin__icon' />
                </div>
                <div className='back face'>
                  <SiDogecoin className='coin__icon' />
                </div>

                <div className='top face'>
                  <SiChainlink className='coin__icon' />
                </div>

                <div className='bottom face'>
                  <SiLitecoin className='coin__icon' />
                </div>

              </div>
            </div>

          </motion.div>


          <div className='heroarea__selector ' >
            <div className='selector__div'>
              <div className="box">
                <a href="#crypto-modal" className='play' selected>Play</a>
              </div>
            </div>

          </div>



          <div id="crypto-modal" class="modal-container">
            <section class="modal">
              <header class="modal-header">
                <h2 class="modal-title">Polygon Raffle type:</h2>
                <a href="#" class="modal-close">Close</a>
              </header>
              <div class="modal-content">
                <div className='heroarea__selector ty' >
                  <div className='selector__div'>
                    <select onChange={handleState} value={coinstate} className="box">
                      <option value='pick' selected>MATIC PRICE</option>
                      <option value='polygon1' >$1</option>
                      <option value='polygon2' >$10</option>
                      <option value='polygon3' >$50</option>
                      <option value='polygon4' >$100</option>
                      <option value='polygon5' >$500</option>
                      <option value='polygon6' >$1000</option>
                      {/* <option value='others' >OTHERS </option> */}


                    </select>
                  </div>
                  <div className={renderClass()}>
                    <button onClick={() => navigate(renderState())} className="heroarea__button">Play</button>
                  </div>
                </div>

              </div>
            </section>
          </div>






        </div>
      </motion.div>

    </div>
  )
}

export default HeroArea