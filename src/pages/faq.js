import React, {useState} from 'react'
import { AiOutlinePlus } from 'react-icons/ai';
import { AiOutlineMinus } from 'react-icons/ai';
import './styles/faq.css'
const Faq = () => {
  const [iconState1, setIconState1] = useState('minus')
  const [iconState2, setIconState2] = useState('minus')
  const [iconState3, setIconState3] = useState('minus')
  const [iconState4, setIconState4] = useState('minus')


  const [iconStatep1, setIconStatep1] = useState('plus')
  const [iconStatep2, setIconStatep2] = useState('plus')
  const [iconStatep3, setIconStatep3] = useState('plus')
  const [iconStatep4, setIconStatep4] = useState('plus')


  const [answerState, setAnswerState] = useState('panel')
  const [answerState1, setAnswerState1] = useState('panel')
  const [answerState2, setAnswerState2] = useState('panel')
  const [answerState3, setAnswerState3] = useState('panel')

  const handleIcons1 = () => {

    if( iconState1 == 'minus' && iconStatep1 == 'plus' && answerState == "panel"){
      setIconState1('minus1')

    
    setIconStatep1('plus1')
    setAnswerState('panel1')
    }else{
      setIconState1('minus')

    
    setIconStatep1('plus')
    setAnswerState('panel')
    }

  }

  const handleIcons2 = () => {
    if( iconState2 == 'minus' && iconStatep2 == 'plus' && answerState1 == "panel"){
      setIconState2('minus1')

    
    setIconStatep2('plus1')
    setAnswerState1('panel1')
    }else{
      setIconState2('minus')

    
    setIconStatep2('plus')
    setAnswerState1('panel')
    }
  }


  const handleIcons3 = () => {
    if( iconState3 == 'minus' && iconStatep3 == 'plus' && answerState2 == "panel"){
      setIconState3('minus1')

    
    setIconStatep3('plus1')
    setAnswerState2('panel1')
    }else{
      setIconState3('minus')

    
    setIconStatep3('plus')
    setAnswerState2('panel')
    }

  }



  const handleIcons4 = () => {
    if( iconState4 == 'minus' && iconStatep4 == 'plus' && answerState3 == "panel"){
      setIconState4('minus1')

    
    setIconStatep4('plus1')
    setAnswerState3('panel1')
    }else{
      setIconState4('minus')

    
    setIconStatep4('plus')
    setAnswerState3('panel')
    }
  }
    
 


  
  return (


    <div className='faq'>

      <div className="container__fluid">
        <h2>Frequently Asked Questions(FAQs)</h2>
        <div className="accordion">
          <div onClick={handleIcons1} className="icon">
          <AiOutlinePlus className={iconStatep1}/>
            <AiOutlineMinus className={iconState1} />
            </div>
          <h5>Which coin should I choose?</h5>
        </div>
        <div className={answerState}>
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt
                 deleniti earum eius, labore assumenda optio voluptas magnam sapiente reprehenderit p
                 ossimus aliquid, enim consectetur pariatur quasi obcaecati quidem accusamus est.
                </p>
                
        </div>




        <div className="accordion">
        <div onClick={handleIcons2} className="icon">
          <AiOutlinePlus className={iconStatep2}/>
            <AiOutlineMinus className={iconState2} />
            </div>
          <h5>is it safe to play the raffle?</h5>
        </div>
        <div className={answerState1}>
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt
                 deleniti earum eius, labore assumenda optio voluptas magnam sapiente reprehenderit p
                 ossimus aliquid, enim consectetur pariatur quasi obcaecati quidem accusamus est.
                </p>
                
        </div>





        <div className="accordion">
        <div onClick={handleIcons3} className="icon">
          <AiOutlinePlus className={iconStatep3}/>
            <AiOutlineMinus className={iconState3} />
            </div>
          <h5>What are my chances of winning?</h5>
        </div>
        <div className={answerState2}>
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt
                 deleniti earum eius, labore assumenda optio voluptas magnam sapiente reprehenderit p
                 ossimus aliquid, enim consectetur pariatur quasi obcaecati quidem accusamus est.
                </p>
                
        </div>






        <div className="accordion">
        <div onClick={handleIcons4} className="icon">
          <AiOutlinePlus className={iconStatep4}/>
            <AiOutlineMinus className={iconState4} />
            </div>
          <h5>When do I get paid if I win?</h5>
        </div>
        <div className={answerState3}>
        <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt
                 deleniti earum eius, labore assumenda optio voluptas magnam sapiente reprehenderit p
                 ossimus aliquid, enim consectetur pariatur quasi obcaecati quidem accusamus est.
                </p>
                
        </div>




      </div>
      {/* <section className='faq__section'>
        <h1 className="faq__heading">Frequently Asked Questions</h1>
        <div className="faq__container">
          <div className="accordion">
            <div className="accordion__item" id='question1'>
              <a  className='accordion__link' href="#question1">
                Which coin should I choose?
                <div>
                <AiOutlinePlus  className='icon ion-md-add'/>
                <AiOutlineMinus  className='icon ion-md-remove'/>

                </div>
              </a>
              <div className="answer">
                <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt
                 deleniti earum eius, labore assumenda optio voluptas magnam sapiente reprehenderit p
                 ossimus aliquid, enim consectetur pariatur quasi obcaecati quidem accusamus est.
                </p>
                
                
              </div>
            </div>



            <div className="accordion__item" id='question2'>
              <a  className='accordion__link' href="#question2">
                is it safe to play the raffle?
                <div>
                <AiOutlinePlus  className='icon ion-md-add'/>
                <AiOutlineMinus  className='icon ion-md-remove'/>

                </div>
              </a>
              <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt
                 deleniti earum eius, labore assumenda optio voluptas magnam sapiente reprehenderit p
                 ossimus aliquid, enim consectetur pariatur quasi obcaecati quidem accusamus est.
                </p>
                
              </div>
            </div>



            <div className="accordion__item" id='question3'>
              <a  className='accordion__link' href="#question3">
                What are my chances of winning?
                <div>
                <AiOutlinePlus  className='icon ion-md-add'/>
                <AiOutlineMinus  className='icon ion-md-remove'/>

                </div>
              </a>
              <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt
                 deleniti earum eius, labore assumenda optio voluptas magnam sapiente reprehenderit p
                 ossimus aliquid, enim consectetur pariatur quasi obcaecati quidem accusamus est.
                </p>
                
              </div>
            </div>






            <div className="accordion__item" id='question4'>
              <a  className='accordion__link' href="#question4">
                When do I get paid when I win?
                <div>
                <AiOutlinePlus  className='icon ion-md-add'/>
                <AiOutlineMinus  className='icon ion-md-remove'/>

                </div>
              </a>
              <div className="answer">
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam sunt
                 deleniti earum eius, labore assumenda optio voluptas magnam sapiente reprehenderit p
                 ossimus aliquid, enim consectetur pariatur quasi obcaecati quidem accusamus est.
                </p>
                
              </div>
            </div>
          </div>
        </div>
      </section> */}
      <br /><br /><br /><br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br /><br />
      <br />
      <br />
      <br />
      
    </div>

    
    
  )
}

export default Faq