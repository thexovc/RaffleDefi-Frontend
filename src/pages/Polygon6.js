import React, { useRef, useReducer, useState, useEffect } from "react";
import "./styles/Eth.scss";
import { abi, abi1, contractAddresses5,} from "../constants";
import { FaEthereum } from "react-icons/fa";
import { SiBinance } from "react-icons/si";
import { useNotification } from "web3uikit";
import { useMoralis, useWeb3Contract } from "react-moralis";
import polygonLogo from '../assets/polygon1.png'


import Details from "../components/Details/Details";
import Calendar from "../components/Calendar/Calendar";
import Transactions from "./Transactions";
import Winners from "../components/Winners/Winners";




const initialState = {
  detailsState: 'openState',
  calendarState: 'closeState',
  transactionsState: 'closeState',
  winnersState: 'closeState',
  activeDetails: 'active1',
  activeCalendar: '',
  activeTransactions: '',
  activeWinners: ''
}

const reducer = ( state, action) => {
  switch(action.type) {
    case 'openDetails':
      return {
        detailsState: 'openState',
        calendarState: 'closeState',
        transactionsState: 'closeState',
        winnersState: 'closeState',
        activeDetails: 'active1',
        activeCalendar: '',
        activeTransactions: '',
        activeWinners: ''
      }

    case 'openCalendar':
      return {
        detailsState: 'closeState',
        calendarState: 'openState',
        transactionsState: 'closeState',
        winnersState: 'closeState',
        activeDetails: '',
        activeCalendar: 'active1',
        activeTransactions: '',
        activeWinners: ''
      }

      case 'openTransactions':
        return {
          detailsState: 'closeState',
          calendarState: 'closeState',
          transactionsState: 'openState',
          winnersState: 'closeState',
          activeDetails: '',
          activeCalendar: '',
          activeTransactions: 'active1',
          activeWinners: ''
        }

      case 'openWinners':
        return {
          detailsState: 'closeState',
          calendarState: 'closeState',
          transactionsState: 'closeState',
          winnersState: 'openState',
          activeDetails: '',
          activeCalendar: '',
          activeTransactions: '',
          activeWinners: 'active1'
        }

      default:
        return initialState
  }
}

const Polygon6 = () => {

 const [states, dispatch] = useReducer(reducer, initialState)




  const [loaderCoin, setLoader] = useState('hideloader');
  const [coinSpin, setCoinSpin] = useState('coin__icon');
  const [winnerText, setWinnerText] = useState('No__WinnerText');

 

  const [timerDays, setTimerDays] = useState("00");
  const [timerHours, setTimerHours] = useState("00");
  const [timerMinutes, setTimerMinutes] = useState("00");
  const [timerSeconds, setTimerSeconds] = useState("00");


  let interval = useRef();


  const { Moralis, isWeb3Enabled, chainId: chainIdHex } = useMoralis();
  const chainId = parseInt(chainIdHex);
  const raffleAddress =
    chainId in contractAddresses5 ? contractAddresses5[chainId][0] : null;
   

  
  const [entranceFee, setEntranceFee] = useState("0");
  const [activePlayers, setActivePlayers] = useState("0");
  const [recentWinner, setRecentWinner] = useState("0");
  
  

  const dispatch1 = useNotification();

  const {
    runContractFunction: enterRaffle,
    data: enterTxResponse,
    isLoading,
    isFetching,
  } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress,
    functionName: "enterRaffle",
    msgValue: entranceFee,
    params: {},
  });

  /* View Functions */



  const { runContractFunction: getEmits } = useWeb3Contract({
    abi: abi,
    contractAddress: raffleAddress, // specify the networkId
    functionName: "getEmits",
    params: {},
  });

  const { runContractFunction: getFee } = useWeb3Contract({
    abi: abi1,
    contractAddress: '0x10d33B83d57BFAABDeF4b51c1C2b260404B05b34', // specify the networkId
    functionName: "getUsdPrice",
    params: {},
  });





 



  async function updateUIValues() {
   
   
    const emits = await getEmits();
    const fee = (await getFee()).toString()
   
   
    
   
    
    
    const activePlayers = emits[6].toString()
    const recentWinner = emits[4].toString()
    const raffleState = emits[5].toString()
    const price = parseInt(fee)/10**18
    const price1 = (Math.round((1000/price)*10**18)).toString()

 
    
    setEntranceFee(price1)
    setActivePlayers(activePlayers)
    setRecentWinner(recentWinner)


   

    let countdownDate = 0;

    interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countdownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor(
        (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
      );
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (raffleState == 1){
        setLoader('loader2')
        setCoinSpin("coinspinoff")
        setWinnerText('winner__text')

        countdownDate = 0


      }

      if (distance < 0 ) {
        
        if (raffleState == 1){
          setLoader('loader2')
          setCoinSpin("coinspinoff")
          setWinnerText('winner__text')
  
          countdownDate = 0
  
        }else{

          async function updateTimeValue() {
            const futureTime = emits[7].toString()
  
            const timef = parseInt(futureTime.toString())
            const timef1 = timef * 1000
            
            countdownDate = timef1
          }
  
          updateTimeValue()
  
        }
        
       
      } else {
        setTimerDays(days);
        setTimerHours(hours);
        setTimerMinutes(minutes);
        setTimerSeconds(seconds);
        setLoader('hideloader')
        setCoinSpin('coin__icon')
        setWinnerText('No__WinnerText')
      }
    }, 1000);

  }



  useEffect(() => {

      updateUIValues();
  
    return () => {
      clearInterval(interval.current);
    };
  }, [isWeb3Enabled]);

  

  const handleNewNotification = () => {
    dispatch1({
      type: "info",
      message: "Transaction Complete!",
      title: "Transaction Notification",
      position: "topR",
      icon: "bell",
    });
  };

  const handleSuccess = async (tx) => {
    await tx.wait(1);
    updateUIValues();
    handleNewNotification(tx);
  };




  return (
    <div className="eth__page">

      <div className="coin coin__div">
        <div className="side heads coin__face1">
        <img src={polygonLogo} className={coinSpin} alt="POLYGON ICON" />
          <div className={loaderCoin}></div>
        </div>
        <div className="side tails coin__face2">
        <img src={polygonLogo} className={coinSpin} alt="POLYGON ICON" />
          <div className={loaderCoin}></div>
        </div>


      </div>

      <div className={winnerText}>
        <p className="winner__p">Getting Winner</p>
      </div>


      <div className="time__container">
        <div className="time__countdown">
          <div>{timerDays}</div>
          <div>{timerHours}</div>
          <div>{timerMinutes}</div>
          <div>{timerSeconds}</div>
        </div>

      </div>


      {raffleAddress ? (
        <div className="enterbutton__div">
          <button
            onClick={async () =>
              await enterRaffle({
                onSuccess: handleSuccess,
                // onError: (error) => console.log(error),
              })
            }
            className="enter__button1"
            disabled={isLoading || isFetching}
          >
            {isLoading || isFetching ? (
              <div className="loader"></div>
            ) : (
              <span className="button__text">Enter Raffle</span>
            )}
          </button>
          <div className="enter__info">
            <div className="enter__fee">
              Entrance Fee: $1000

            </div>
            <div className="enter__fee1">
              Players Entered: {activePlayers}
            </div>
            <div className="enter__fee1">
              <p className="rwt">
                {`Recent Winner: ${recentWinner.slice(0, 5
                  )}...${recentWinner.slice(recentWinner.length - 4)}`}
              </p>
            </div>
          </div>
        </div>
      ) : (
        <div className="enter__info">
          <div className="enter__fee2">
            <div>No address detected</div>
          </div>
        </div>
      )}

      <div className="table__container">
        <table className="table1">
          <thead className="thead">
            <tr className="tr">
              <th className={states.activeDetails} onClick={() => dispatch({type: 'openDetails'})}>
                DETAILS
              </th>
              <th className={states.activeCalendar} onClick={() => dispatch({type: 'openCalendar'})}>
                CALENDER
              </th>
              <th className={states.activeTransactions} onClick={() => dispatch({type: 'openTransactions'})}>
                TRANSACTIONS
              </th>
              <th className={states.activeWinners} onClick={() => dispatch({type: 'openWinners'})}>
                WINNERS
              </th>
            </tr>
          </thead>
        </table>
      </div>


     <Details className={states.detailsState} coin='polygon6' />
    <Calendar className={states.calendarState} Name='noDisplay' coin='polygon6' />
    <Transactions className={states.transactionsState}  Name='noDisplay' coin='polygon6' />
    <Winners className={states.winnersState} Name='noDisplay' coin='polygon6'/> 

     
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
};

export default Polygon6;
