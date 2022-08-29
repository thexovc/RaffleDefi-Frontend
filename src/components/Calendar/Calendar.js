import React, { useRef, useState, useEffect } from "react";
import './Calendar.css'
import { abi, abi1, contractAddresses, contractAddresses1, contractAddresses2, contractAddresses3, contractAddresses4, contractAddresses5} from "../../constants";
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { useMoralis, useWeb3Contract } from "react-moralis";



const Calendar = (props) => {
    const navigate = useNavigate()
    let interval = useRef();

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
    
 



    

    // POLYGON1
    
    const [timerYears1, setTimerYears1] = useState("00");
    const [timerMonths1, setTimerMonths1] = useState("00");
    const [timerDays1, setTimerDays1] = useState("00");
    const [timerMinutes1, setTimerMinutes1] = useState("00");
    const [timerHours1, setTimerHours1] = useState("00");


    const [activePlayers, setActivePlayers] = useState("0");
    const [amountReceived, setAmountReceived] = useState("0");
    

   

   



    const { runContractFunction: getEmits } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress, // specify the networkId
        functionName: "getEmits",
        params: {},
      });

   
    

    async function updateUIValues() {
        const pow = Math.pow(10, 18)
        const emits = await getEmits()
        const fee = (await getFee()).toString()

        const activePlayers = emits[6].toString()
        const amountReceived = emits[3].toString()
        const price = parseInt(fee)/pow

        const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()

        setActivePlayers(activePlayers)
        setAmountReceived(finalPrice)



        let countdownDate = 0
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            let years = new Date(countdownDate).getFullYear()
            let months = (new Date(countdownDate).getMonth()) + 1
            let days = new Date(countdownDate).getDate()
            let hours = new Date(countdownDate).getHours()
            let minutes = new Date(countdownDate).getMinutes()



            // let years2 = new Date(countdownDate + oneday).getFullYear()
            // let months2 = (new Date(countdownDate + oneday).getMonth()) + 1
            // let days2 = new Date(countdownDate + oneday).getDate()
            // let hours2 = new Date(countdownDate + oneday).getHours()
            // let minutes2 = new Date(countdownDate + oneday).getMinutes()

            setTimerYears1(years)
            setTimerMonths1(months)
            setTimerDays1(days)
            setTimerHours1(hours)
            setTimerMinutes1(minutes)


            if (distance < 0) {

                setTimerYears1('00')
                setTimerMonths1('00')
                setTimerDays1('00')
                setTimerHours1('00')
                setTimerMinutes1('00')



                async function updateTimeValue() {
                    const futureTime = emits[7].toString()
  
                    const timef = parseInt(futureTime.toString())
                    const timef1 = timef * 1000
                    
                    countdownDate = timef1

                }


                updateTimeValue()

            } 
           
        }, 1000);

    }




    
    
    // POLYGON2


    
    const [timerYears2, setTimerYears2] = useState("00");
    const [timerMonths2, setTimerMonths2] = useState("00");
    const [timerDays2, setTimerDays2] = useState("00");
    const [timerMinutes2, setTimerMinutes2] = useState("00");
    const [timerHours2, setTimerHours2] = useState("00");



       


    


    const [activePlayers1, setActivePlayers1] = useState("0");
    const [amountReceived1, setAmountReceived1] = useState("0");
    

    const { runContractFunction: getEmits1 } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress1, // specify the networkId
        functionName: "getEmits",
        params: {},
      });

     


      
     
    

      async function updateUIValues1() {
        const pow = Math.pow(10, 18)
        const emits = await getEmits1()
        const fee = (await getFee()).toString()

        const activePlayers = emits[6].toString()
        const amountReceived = emits[3].toString()
        const price = parseInt(fee)/pow

        const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()

        setActivePlayers1(activePlayers)
        setAmountReceived1(finalPrice)



        let countdownDate = 0
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            let years = new Date(countdownDate).getFullYear()
            let months = (new Date(countdownDate).getMonth()) + 1
            let days = new Date(countdownDate).getDate()
            let hours = new Date(countdownDate).getHours()
            let minutes = new Date(countdownDate).getMinutes()



            // let years2 = new Date(countdownDate + oneday).getFullYear()
            // let months2 = (new Date(countdownDate + oneday).getMonth()) + 1
            // let days2 = new Date(countdownDate + oneday).getDate()
            // let hours2 = new Date(countdownDate + oneday).getHours()
            // let minutes2 = new Date(countdownDate + oneday).getMinutes()

            setTimerYears2(years)
            setTimerMonths2(months)
            setTimerDays2(days)
            setTimerHours2(hours)
            setTimerMinutes2(minutes)


            if (distance < 0) {

                setTimerYears2('00')
                setTimerMonths2('00')
                setTimerDays2('00')
                setTimerHours2('00')
                setTimerMinutes2('00')



                async function updateTimeValue() {
                    const futureTime = emits[7].toString()
  
                    const timef = parseInt(futureTime.toString())
                    const timef1 = timef * 1000
                    
                    countdownDate = timef1

                }


                updateTimeValue()

            } 
           
        }, 1000);

    }






        // POLYGON3


    
    
            const [timerYears3, setTimerYears3] = useState("00");
            const [timerMonths3, setTimerMonths3] = useState("00");
            const [timerDays3, setTimerDays3] = useState("00");
            const [timerMinutes3, setTimerMinutes3] = useState("00");
            const [timerHours3, setTimerHours3] = useState("00");
    
    
        
    
    
        const [activePlayers2, setActivePlayers2] = useState("0");
        const [amountReceived2, setAmountReceived2] = useState("0");
        
    
        const { runContractFunction: getEmits2 } = useWeb3Contract({
            abi: abi,
            contractAddress: raffleAddress2, // specify the networkId
            functionName: "getEmits",
            params: {},
          });
    
         
    
    
          
         
        
    
    
     
          async function updateUIValues2() {
            const pow = Math.pow(10, 18)
            const emits = await getEmits2()
            const fee = (await getFee()).toString()
    
            const activePlayers = emits[6].toString()
            const amountReceived = emits[3].toString()
            const price = parseInt(fee)/pow
    
            const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()
    
            setActivePlayers2(activePlayers)
            setAmountReceived2(finalPrice)
    
    
    
            let countdownDate = 0
            interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = countdownDate - now;
    
                let years = new Date(countdownDate).getFullYear()
                let months = (new Date(countdownDate).getMonth()) + 1
                let days = new Date(countdownDate).getDate()
                let hours = new Date(countdownDate).getHours()
                let minutes = new Date(countdownDate).getMinutes()
    
    
    
                // let years2 = new Date(countdownDate + oneday).getFullYear()
                // let months2 = (new Date(countdownDate + oneday).getMonth()) + 1
                // let days2 = new Date(countdownDate + oneday).getDate()
                // let hours2 = new Date(countdownDate + oneday).getHours()
                // let minutes2 = new Date(countdownDate + oneday).getMinutes()
    
                setTimerYears3(years)
                setTimerMonths3(months)
                setTimerDays3(days)
                setTimerHours3(hours)
                setTimerMinutes3(minutes)
    
    
                if (distance < 0) {
    
                    setTimerYears3('00')
                    setTimerMonths3('00')
                    setTimerDays3('00')
                    setTimerHours3('00')
                    setTimerMinutes3('00')
    
    
    
                    async function updateTimeValue() {
                        const futureTime = emits[7].toString()
      
                        const timef = parseInt(futureTime.toString())
                        const timef1 = timef * 1000
                        
                        countdownDate = timef1
    
                    }
    
    
                    updateTimeValue()
    
                } 
               
            }, 1000);
    
        }
    


            // POLYGON4




        const [timerYears4, setTimerYears4] = useState("00");
        const [timerMonths4, setTimerMonths4] = useState("00");
        const [timerDays4, setTimerDays4] = useState("00");
        const [timerMinutes4, setTimerMinutes4] = useState("00");
        const [timerHours4, setTimerHours4] = useState("00");


    


    const [activePlayers3, setActivePlayers3] = useState("0");
    const [amountReceived3, setAmountReceived3] = useState("0");
    

    const { runContractFunction: getEmits3 } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress3, // specify the networkId
        functionName: "getEmits",
        params: {},
      });

     


      
     
    


   
      async function updateUIValues3() {
        const pow = Math.pow(10, 18)
        const emits = await getEmits3()
        const fee = (await getFee()).toString()

        const activePlayers = emits[6].toString()
        const amountReceived = emits[3].toString()
        const price = parseInt(fee)/pow

        const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()

        setActivePlayers3(activePlayers)
        setAmountReceived3(finalPrice)



        let countdownDate = 0
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            let years = new Date(countdownDate).getFullYear()
            let months = (new Date(countdownDate).getMonth()) + 1
            let days = new Date(countdownDate).getDate()
            let hours = new Date(countdownDate).getHours()
            let minutes = new Date(countdownDate).getMinutes()



            // let years2 = new Date(countdownDate + oneday).getFullYear()
            // let months2 = (new Date(countdownDate + oneday).getMonth()) + 1
            // let days2 = new Date(countdownDate + oneday).getDate()
            // let hours2 = new Date(countdownDate + oneday).getHours()
            // let minutes2 = new Date(countdownDate + oneday).getMinutes()

            setTimerYears4(years)
            setTimerMonths4(months)
            setTimerDays4(days)
            setTimerHours4(hours)
            setTimerMinutes4(minutes)


            if (distance < 0) {

                setTimerYears4('00')
                setTimerMonths4('00')
                setTimerDays4('00')
                setTimerHours4('00')
                setTimerMinutes4('00')



                async function updateTimeValue() {
                    const futureTime = emits[7].toString()
  
                    const timef = parseInt(futureTime.toString())
                    const timef1 = timef * 1000
                    
                    countdownDate = timef1

                }


                updateTimeValue()

            } 
           
        }, 1000);

    }




        // POLYGON5


    
        const [timerYears5, setTimerYears5] = useState("00");
        const [timerMonths5, setTimerMonths5] = useState("00");
        const [timerDays5, setTimerDays5] = useState("00");
        const [timerMinutes5, setTimerMinutes5] = useState("00");
        const [timerHours5, setTimerHours5] = useState("00");
    
    
    
        
    
    
        const [activePlayers4, setActivePlayers4] = useState("0");
        const [amountReceived4, setAmountReceived4] = useState("0");
        
    
        const { runContractFunction: getEmits4 } = useWeb3Contract({
            abi: abi,
            contractAddress: raffleAddress4, // specify the networkId
            functionName: "getEmits",
            params: {},
          });
    
         
    
    
          
         
        
    
   
          async function updateUIValues4() {
            const pow = Math.pow(10, 18)
            const emits = await getEmits4()
            const fee = (await getFee()).toString()
    
            const activePlayers = emits[6].toString()
            const amountReceived = emits[3].toString()
            const price = parseInt(fee)/pow
    
            const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()
    
            setActivePlayers4(activePlayers)
            setAmountReceived4(finalPrice)
    
    
    
            let countdownDate = 0
            interval = setInterval(() => {
                const now = new Date().getTime();
                const distance = countdownDate - now;
    
                let years = new Date(countdownDate).getFullYear()
                let months = (new Date(countdownDate).getMonth()) + 1
                let days = new Date(countdownDate).getDate()
                let hours = new Date(countdownDate).getHours()
                let minutes = new Date(countdownDate).getMinutes()
    
    
    
                // let years2 = new Date(countdownDate + oneday).getFullYear()
                // let months2 = (new Date(countdownDate + oneday).getMonth()) + 1
                // let days2 = new Date(countdownDate + oneday).getDate()
                // let hours2 = new Date(countdownDate + oneday).getHours()
                // let minutes2 = new Date(countdownDate + oneday).getMinutes()
    
                setTimerYears5(years)
                setTimerMonths5(months)
                setTimerDays5(days)
                setTimerHours5(hours)
                setTimerMinutes5(minutes)
    
    
                if (distance < 0) {
    
                    setTimerYears5('00')
                    setTimerMonths5('00')
                    setTimerDays5('00')
                    setTimerHours5('00')
                    setTimerMinutes5('00')
    
    
    
                    async function updateTimeValue() {
                        const futureTime = emits[7].toString()
      
                        const timef = parseInt(futureTime.toString())
                        const timef1 = timef * 1000
                        
                        countdownDate = timef1
    
                    }
    
    
                    updateTimeValue()
    
                } 
               
            }, 1000);
    
        }
    

            // POLYGON6


    
    const [timerYears6, setTimerYears6] = useState("00");
    const [timerMonths6, setTimerMonths6] = useState("00");
    const [timerDays6, setTimerDays6] = useState("00");
    const [timerMinutes6, setTimerMinutes6] = useState("00");
    const [timerHours6, setTimerHours6] = useState("00");





    const [activePlayers5, setActivePlayers5] = useState("0");
    const [amountReceived5, setAmountReceived5] = useState("0");
    

    const { runContractFunction: getEmits5 } = useWeb3Contract({
        abi: abi,
        contractAddress: raffleAddress5, // specify the networkId
        functionName: "getEmits",
        params: {},
      });

     


      
     
    


    
      async function updateUIValues5() {
        const pow = Math.pow(10, 18)
        const emits = await getEmits5()
        const fee = (await getFee()).toString()

        const activePlayers = emits[6].toString()
        const amountReceived = emits[3].toString()
        const price = parseInt(fee)/pow

        const finalPrice = (Math.round((price * parseInt(amountReceived)) / pow)).toString()

        setActivePlayers5(activePlayers)
        setAmountReceived5(finalPrice)



        let countdownDate = 0
        interval = setInterval(() => {
            const now = new Date().getTime();
            const distance = countdownDate - now;

            let years = new Date(countdownDate).getFullYear()
            let months = (new Date(countdownDate).getMonth()) + 1
            let days = new Date(countdownDate).getDate()
            let hours = new Date(countdownDate).getHours()
            let minutes = new Date(countdownDate).getMinutes()



            // let years2 = new Date(countdownDate + oneday).getFullYear()
            // let months2 = (new Date(countdownDate + oneday).getMonth()) + 1
            // let days2 = new Date(countdownDate + oneday).getDate()
            // let hours2 = new Date(countdownDate + oneday).getHours()
            // let minutes2 = new Date(countdownDate + oneday).getMinutes()

            setTimerYears6(years)
            setTimerMonths6(months)
            setTimerDays6(days)
            setTimerHours6(hours)
            setTimerMinutes6(minutes)


            if (distance < 0) {

                setTimerYears6('00')
                setTimerMonths6('00')
                setTimerDays6('00')
                setTimerHours6('00')
                setTimerMinutes6('00')



                async function updateTimeValue() {
                    const futureTime = emits[7].toString()
  
                    const timef = parseInt(futureTime.toString())
                    const timef1 = timef * 1000
                    
                    countdownDate = timef1

                }


                updateTimeValue()

            } 
           
        }, 1000);

    }

    


    
    






    /* View Functions */



   

   


    useEffect(() => {
       
            updateUIValues();
            updateUIValues1();
            updateUIValues2();
            updateUIValues3();
            updateUIValues4();
            updateUIValues5();
     

        return () => {
            clearInterval(interval.current);
        };
    }, [isWeb3Enabled]);



    return (
        <>
        {!props.className || props.className == 'openState' ?
        <motion.div
            whileInView={{ x: [-100, 0], opacity: [0, 1] }}
            transition={{ duration: 0.5 }}
            className='table__container'>
            {props.Name ? "" : <h1 className='table__h1'>Lottery Calendar</h1> }
            


            <table className='table'>
                <thead className='thead'>
                    <tr className='tr'>
                        <th>BLOCKCHAIN</th>
                        <th>START DATE</th>
                        <th>DURATION</th>
                        <th>MAX PLAYERS</th>
                        <th>PLAYERS ENTERDED</th>
                        <th>STATUS</th>
                        <th>WINNINGS</th>
                        <th>ACTION</th>
                    </tr>
                </thead>
                <tbody>
                    {props.coin == 'polygon1' || !props.coin ?
                     <tr>
                     <td data-label='TITLE'>POLYGON($1)</td>
                     <td data-label='START DATE'>{timerDays1}-{timerMonths1}-{timerYears1} {timerHours1}:{timerMinutes1}</td>
                     <td data-label='DURATION'>24HRS</td>
                     <td data-label='MAX PLAYERS'>UNLIMITED</td>
                     <td data-label='PLAYERS ENTERED'>{activePlayers}</td>
                     <td data-label='STATUS'>OPEN</td>
                     <td data-label='WINNINGS'>${((parseInt(amountReceived)*0.7).toFixed(2)).toString()}</td>
                     <td data-label='ACTION'><a onClick={() => navigate('polygonPage1')} className='table__btn table__btn1' >ENTER</a></td>
                 </tr>
                    
                    : ''}
                   

                   {props.coin == 'polygon2' || !props.coin ?
                    <tr>
                        <td data-label='TITLE'>POLYGON($10)</td>
                        <td data-label='START DATE'>{timerDays2}-{timerMonths2}-{timerYears2} {timerHours2}:{timerMinutes2}</td>
                        <td data-label='DURATION'>24HRS</td>
                        <td data-label='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label='PLAYERS ENTERED'>{activePlayers1}</td>
                        <td data-label='STATUS'>OPEN</td>
                        <td data-label='WINNINGS'>${((parseInt(amountReceived1)*0.7).toFixed(2)).toString()}</td>
                        <td data-label='ACTION'><a onClick={() => navigate('polygonPage2')} className='table__btn table__btn1'>ENTER</a></td>
                    </tr>
                    : ''}

                    {props.coin == 'polygon3' || !props.coin ?
                    <tr>
                        <td data-label='TITLE'>POLYGON($50)</td>
                        <td data-label='START DATE'>{timerDays3}-{timerMonths3}-{timerYears3} {timerHours3}:{timerMinutes3}</td>
                        <td data-label='DURATION'>24HRS</td>
                        <td data-label='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label='PLAYERS ENTERED'>{activePlayers2}</td>
                        <td data-label='STATUS'>OPEN</td>
                        <td data-label='WINNINGS'>${((parseInt(amountReceived2)*0.7).toFixed(2)).toString()}</td>
                        <td data-label='ACTION'><a onClick={() => navigate('polygonPage3')} className='table__btn table__btn1'>ENTER</a></td>
                    </tr>
                    : ''}


                    {props.coin == 'polygon4' || !props.coin ?
                    <tr>
                        <td data-label='TITLE'>POLYGON($100)</td>
                        <td data-label='START DATE'>{timerDays4}-{timerMonths4}-{timerYears4} {timerHours4}:{timerMinutes4}</td>
                        <td data-label='DURATION'>12HRS</td>
                        <td data-label='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label='PLAYERS ENTERED'>{activePlayers3}</td>
                        <td data-label='STATUS'>OPEN</td>
                        <td data-label='WINNINGS'>${((parseInt(amountReceived3)*0.7).toFixed(2)).toString()}</td>
                        <td data-label='ACTION'><a onClick={() => navigate('polygonPage4')} className='table__btn table__btn1'>ENTER</a></td>
                    </tr>
                    : ''}



                    
                    {props.coin == 'polygon5' || !props.coin ?
                    <tr>
                        <td data-label='TITLE'>POLYGON($500)</td>
                        <td data-label='START DATE'>{timerDays5}-{timerMonths5}-{timerYears5} {timerHours5}:{timerMinutes5}</td>
                        <td data-label='DURATION'>12HRS</td>
                        <td data-label='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label='PLAYERS ENTERED'>{activePlayers4}</td>
                        <td data-label='STATUS'>OPEN</td>
                        <td data-label='WINNINGS'>${((parseInt(amountReceived4)*0.7).toFixed(2)).toString()}</td>
                        <td data-label='ACTION'><a onClick={() => navigate('polygonPage5')} className='table__btn table__btn1'>ENTER</a></td>
                    </tr>
                    : ''}


                    
                    {props.coin == 'polygon6' || !props.coin ?
                    <tr>
                        <td data-label='TITLE'>POLYGON($1000)</td>
                        <td data-label='START DATE'>{timerDays6}-{timerMonths6}-{timerYears6} {timerHours6}:{timerMinutes6}</td>
                        <td data-label='DURATION'>12HRS</td>
                        <td data-label='MAX PLAYERS'>UNLIMITED</td>
                        <td data-label='PLAYERS ENTERED'>{activePlayers5}</td>
                        <td data-label='STATUS'>OPEN</td>
                        <td data-label='WINNINGS'>${((parseInt(amountReceived5)*0.7).toFixed(2)).toString()}</td>
                        <td data-label='ACTION'><a onClick={() => navigate('polygonPage6')} className='table__btn table__btn1'>ENTER</a></td>
                    </tr>
                    : ''}
                </tbody>

            </table>


            {/* {props.Name ? ""  : <div className='title__button__div'>
                <button onClick={() => navigate('fullCalendar')} className="title__button">View All</button>
            </div>}
             */}
        </motion.div>
        : ''}
        </>
    )
}

export default Calendar