import React from 'react'
import '../components/Calendar/Calendar'

import { motion } from 'framer-motion';

const FullCalendar = () => {
  return (
    <motion.div 
    whileInView={{ x: [-100, 0], opacity: [0, 1] }}
    transition={{ duration: 0.5 }}
    className='table__container'>
        <h1 className='table__h1'>Lottery Calendar</h1>
     

            <table className='table'>
                <thead className='thead'>
                    <tr className='tr'>
                        <th>BLOCKCHAIN</th>
                        <th>START DATE</th>
                        <th>END DATE</th>
                        <th>MAX PLAYERS</th>
                        <th>PLAYERS ENTERDED</th>
                        <th>STATUS</th>
                        <th>WINNINGS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td data-label ='TITLE'>ETHEREUM</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>OPEN</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn1' href="#">ENTERED</a></td>
                    </tr>


                    <tr>
                        <td data-label ='TITLE'>BINANCE</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>OPEN</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn2' href="#">ENTER</a></td>
                    </tr>


                    <tr>
                        <td data-label ='TITLE'>POLYGON</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>

                    <tr>
                        <td data-label ='TITLE'>POLYGON</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>




                    <tr>
                        <td data-label ='TITLE'>POLYGON</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>



                    <tr>
                        <td data-label ='TITLE'>POLYGON</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>



                    <tr>
                        <td data-label ='TITLE'>POLYGON</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>


                    <tr>
                        <td data-label ='TITLE'>POLYGON</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>



                    <tr>
                        <td data-label ='TITLE'>POLYGON</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>


                    <tr>
                        <td data-label ='TITLE'>POLYGON</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>




                    <tr>
                        <td data-label ='TITLE'>ETHEREUM</td>
                        <td data-label ='START DATE'>22-04-2022 9:45</td>
                        <td data-label ='END DATE'>22-04-2022 9:45</td>
                        <td data-label ='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label ='PLAYERS ENTERED'>05</td>
                        <td data-label ='STATUS'>CLOSED</td>
                        <td data-label ='WINNINGS'>$290</td>
                        <td data-label ='ACTION'><a className='table__btn table__btn3' href="#">ENTER</a></td>
                    </tr>
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />
                    <br />

                    <br />
                    <br />
                    <br />
                    <br />
                    
                </tbody>

            </table>
           


           



       
           



           





    </motion.div>
  )
}

export default FullCalendar