import React from 'react'
import './Join.css'
import { motion } from 'framer-motion';
import { TbNumber1 } from 'react-icons/tb';
import { TbNumber2 } from 'react-icons/tb';
import { TbNumber3 } from 'react-icons/tb';
import { BiWallet} from 'react-icons/bi';
import { MdTimer} from 'react-icons/md';
import { BsCoin} from 'react-icons/bs';
import { AiOutlinePlayCircle} from 'react-icons/ai';

import { TbNumber4 } from 'react-icons/tb';
import { BsArrowReturnRight } from 'react-icons/bs';


const Join = () => {
  return (
    <div className='join'>
        <div className='join__head'>
            <h1 className='join__h1'>It's Easy to Join and get rewards</h1>
            <p className='join__para'>You get to make money on the blockchain with Raffledefi<br /> With the following steps </p>
        </div>
        <motion.div 
        whileInView={{ x: [-100, 0], opacity: [0, 1] }}
        transition={{ duration: 0.5 }}
        className='join__steps'
        >
          
                <div className='join__icons'>
                    <div className="icons__div">
                        <span className='icon__div'>
                            <BiWallet className='join__icon' />
                        </span>
                   
                    </div>

                    
                   

                    <div className='icon__text'>
                        <h1 className='icon__h1'>Connect Wallet</h1>

                        <p className='icon__para'>Connect your Wallet by using any of the wallet provider at the top</p>
                    </div>

                </div>
               

                <div className='join__icons'>
                    <div className="icons__div">
                        <span className='icon__div'>
                            <BsCoin className='join__icon' />
                        </span>
                        
                    </div>
                   

                    <div className='icon__text'>
                        <h1 className='icon__h1'>Select the Raffle type </h1>

                        <p className='icon__para'>Select any of the available crypto currencies and their various prices to play with</p>
                    </div>

                </div>
          
                <div className='join__icons'>
                    <div className="icons__div">
                        <span className='icon__div'>
                            <AiOutlinePlayCircle className='join__icon' />
                        </span>
                        
                    </div>
                   

                    <div className='icon__text'>
                        <h1 className='icon__h1'>Enter the Raffle</h1>

                        <p className='icon__para'>Confirm your transaction and enter the raffle</p>
                    </div>

                </div>

                <div className='join__icons'>
                    <div className="icons__div">
                        <span className='icon__div'>
                            <MdTimer className='join__icon' />
                        </span>
                        
                    </div>
                   

                    <div className='icon__text'>
                        <h1 className='icon__h1'>Wait and Win</h1>

                        <p className='icon__para'>Wait for the Raffle time to end and receive your reward</p>
                    </div>

                </div>
                   

                        
               
            
                <div className='join__words'>
                   




                </div>


            
              
                
             


         
             
              
           



            
        </motion.div>
    </div>
  )
}

export default Join