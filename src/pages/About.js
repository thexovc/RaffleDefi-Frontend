import React from 'react'
import './styles/about.css'
import p1 from '../assets/p1.png'
import p2 from '../assets/p2.png'
import p3 from '../assets/p3.png'
import hero from '../assets/blk.webp'

import { FaEthereum } from 'react-icons/fa';
import { SiBinance } from 'react-icons/si';
import { GiAchievement } from 'react-icons/gi';
import { motion } from 'framer-motion';
import { FaStar } from "react-icons/fa";
import { BiWallet} from 'react-icons/bi';
import { MdPayment} from 'react-icons/md';

const About = () => {
  return (
    <motion.div
      whileInView={{ x: [300, 0], opacity: [0, 1] }}
      transition={{ duration: 0.7 }}
    >
      <div className='about'>
        <div className='main'>
          <img src={hero} />
          <div className='about-text'>
            <h1>About Us</h1>
            <h5>CodePeeps <span> Developers & Designers </span> </h5>
            <p>
                We are a team of software engineers that provide tech services to the public.
                Our team compromises of Web Developers, Blockchain Developers, UI/UX Designers
                Data Scientist, Mobile App Developers and many more. <br />
                Raffledefi, one of our numerous projects is a decentralized lottery platform which runs raffle with a disseminated system giving
                players high chances of winning.
                You connect your wallet using any of the available wallet provider and deposit the required crypto currency needed to play the 
                raffle. After 24hrs the winner is picked and 70% of the total money is sent to the winner's wallet addresses immediately and the other
                25% is used to fund the nodes that make this whole process decentralized
            </p>
            <button type='buttton'>Let's Talk</button>
          </div>
        </div>
        <div className='service'>
          <h1>Why you Trust our sevices</h1>
          <div className='block'>
            <motion.div
              whileHover={{ scale: 0.97 }}
            >
              <div className='card'>
                <span className="icon-block">
                  <GiAchievement className='icon' />
                </span>
                <h1>Best Lottery Platform</h1>
                <p>We pride ourselves on your trust, so we made sure all the functionalities of Raffledefi to be decentralized</p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.97 }}
            >
              <div className='card'>
                <span className="icon-block">
                  <BiWallet className='icon' />
                </span>
                <h1>Quick Deposit</h1>
                <p>Entering the Raffle is quick and easy to do. All you need is the required amount of crypto currency </p>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.97 }}
            >
              <div className='card'>
                <span className="icon-block">
                  <MdPayment className='icon' />
                </span>
                <h1>Quick Withdraw</h1>
                <p>Winners do not need to Withdraw. Once the Raffle time is completed the winnings are sent to the winner automatically</p>
              </div>
            </motion.div>

          </div>
        </div>

        <div className='user'>
          <h1>What User Say About Us</h1>
          <div className="p-text">
            <p>
              Here are some of the testimonials from previous winners<br />
               
            </p>
          </div>

          <div className='block'>
            <motion.div
              whileHover={{ scale: 0.97 }}
            >
              <div className='card'>
                <span className='star'>
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                </span>
                <p>I won 5 times playing Raffledefi. Withdrawal is quick and automatic, entering the raffle is easy</p>
                <span className="img-block">
                  <img src={p3} alt="user picture" />
                  <div>
                    <h3 className="name">Jane Doe</h3>
                    <p className="title">Lottery Winner</p>
                  </div>
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.97 }}
            >
              <div className='card'>
                <span className='star'>
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                </span>
                <p> I have made a total of $500 from playing twice using $5. Playing a raffle on the blockchain is so much better. </p>
                <span className="img-block">
                  <img src={p1} alt="user picture" />
                  <div>
                    <h3 className="name">Jane Doe</h3>
                    <p className="title">Lottery Winner</p>
                  </div>
                </span>
              </div>
            </motion.div>

            <motion.div
              whileHover={{ scale: 0.97 }}
            >
              <div className='card'>
                <span className='star'>
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                  <FaStar color={"orange"} />
                </span>
                <p>Raffledefi is so amazing, the user interface is beautiful and simple, the customer service are quick to answer</p>
                <span className="img-block">
                  <img src={p2} alt="user picture" />
                  <div>
                    <h3 className="name">Jane Doe</h3>
                    <p className="title">Lottery Winner</p>
                  </div>
                </span>
              </div>
            </motion.div>

          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default About