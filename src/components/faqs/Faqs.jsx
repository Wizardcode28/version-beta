import React from 'react'
import "./Faqs.css"
import down from "../../assets/arrow_down.png"
import { useState,useEffect } from 'react'
import AOS from 'aos';
import 'aos/dist/aos.css';

const Faqs = () => {
  useEffect(() => {
      AOS.init({
        duration:1000,
        once:true
      })
    },[])
  const [currIndex, setcurrIndex] = useState(-1)
  const handleClick=(index)=>{
    setcurrIndex(currIndex==index? -1 : index)
  }
  return (
    <div className='faqscontainer'>
      <div className='faqstitle'>Faqs</div>
      <div className="faqs">
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(0)}} data-aos="fade-right"  data-aos-delay="0">
              Who are we?
              <img src={down} alt=""/>
            </div>
            <div className={`answer-wrapper ${currIndex === 0 ? 'open' : ''}`}>
              <div className="answer">
                ISTE SC MANIT is one of the oldest societies of MANIT. We&apos;ve
              been awarded as the best students&apos; chapter in MP -
              Chhattisgarh region three times in a row. So when it comes to
              organising technical events, we&apos;re always at the top of the
              food chain.
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(1)}} data-aos="fade-left"  data-aos-delay="150">
              What are we looking in a team?
              <img src={down}alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 1 ? 'open' : ''}`}>
              <div className="answer">
              You don&apos;t need to be a coding genius to participate in the
              event. The only requirement is your willingness and passion to
              learn. There is a winner among us and it can be you. So buckle up
              coz we&apos;re gonna make you an offer you can&apos;t refuse..   
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(2)}} data-aos="fade-right"  data-aos-delay="300">
              What is version beta?
              <img src={down}alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 2 ? 'open' : ''}`}>
              <div className="answer">
              It&apos;s Central India&apos;s largest students&apos; held
              Hackathon in which students from all over the country compete
              against each other for 36 hours non-stop and put their coding
              skills to test.
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(3)}} data-aos="fade-left" data-aos-delay="450">
              Will Hackathon be conducted online?
              <img src={down} alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 3 ? 'open' : ''}`}>
              <div className="answer">
              No, the hackathon comes as a combo package of rewards and
              on-campus experience of NIT Bhopal.
              </div>
            </div>

        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(4)}} data-aos="fade-right" data-aos-delay="600">
              Who should participate?
              <img src={down}alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 4 ? 'open' : ''}`}>
              <div className="answer">
              If you are a college student who is interested in solving
              real-life problems through the virtual world of your laptop
              screens, you&apos;re at the right place. The Hackathon is just for
              you.
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(5)}} data-aos="fade-left" data-aos-delay="750">
              What is the goal of Hackathon?
              <img src={down}alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 5 ? 'open' : ''}`}>
              <div className="answer">
              The main aim of Hackathon is to bring out the coding skills of
              students to practical use.
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(6)}} data-aos="fade-right" data-aos-delay="900">
              Number of members in a team?
              <img src={down} alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 6 ? 'open' : ''}`}>
              <div className="answer">
              The maximum no. of team members is 4. You can also participate in
              a team of 3 or 2 members. It&apos;s up to you. Choose your
              crewmates carefully to prevent being ejected.
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(7)}} data-aos="fade-left" data-aos-delay="1050">
              How would I know if I got selected?
              <img src={down} alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 7 ? 'open' : ''}`}>
              <div className="answer">
              We&apos;ll mail you and let you know.
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(8)}} data-aos="fade-right" data-aos-delay="1200">
              How to participate?
              <img src={down} alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 8 ? 'open' : ''}`}>
              <div className="answer">
              Visit our website to register for the Hackathon. You&apos;ll be
              provided all the details there.
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(9)}} data-aos="fade-left" data-aos-delay="1350">
              Cost for participation in Hackathon?
              <img src={down} alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 9 ? 'open' : ''}`}>
              <div className="answer">
              If you don&apos;t count the internet cost and the electricity bill
              for your laptop, then it&apos;s zero. NIL. Nothing..
              </div>
            </div>
            
        </div>
        <div className="faq">
            <div className="question" onClick={()=>{handleClick(10)}} data-aos="fade-right" data-aos-delay="1500">
              What is selection procedure?
              <img src={down} alt="" />
            </div>
            <div className={`answer-wrapper ${currIndex === 10 ? 'open' : ''}`}>
              <div className="answer">
              Upload your GitHub profiles and CV while registering through
              Devfolio and you&apos;re all done. All the best!
              </div>
            </div>
            
        </div>
      </div>
    </div>
  )
}

export default Faqs
