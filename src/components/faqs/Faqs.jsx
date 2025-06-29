import React from 'react'
import "./Faqs.css"
import down from "../../assets/arrow_down.png"
import { useState } from 'react'
const Faqs = () => {
  const [currIndex, setcurrIndex] = useState(-1)
  const handleClick=(index)=>{
    setcurrIndex(currIndex==index? -1 : index)
  }
  return (
    <div className='faqscontainer'>
      <div className='faqstitle'>Faqs</div>
      <div className="faqs">
        <div className="faq">
            <div className="question">
              Who are we?
              <img src={down} onClick={()=>{handleClick(0)}} alt=""/>
            </div>
            {currIndex==0 && <div className="answer">
              ISTE SC MANIT is one of the oldest societies of MANIT. We&apos;ve
              been awarded as the best students&apos; chapter in MP -
              Chhattisgarh region three times in a row. So when it comes to
              organising technical events, we&apos;re always at the top of the
              food chain.
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              What are we looking in a team?
              <img src={down} onClick={()=>{handleClick(1)}} alt="" />
            </div>
            {currIndex==1 && <div className="answer">
              You don&apos;t need to be a coding genius to participate in the
              event. The only requirement is your willingness and passion to
              learn. There is a winner among us and it can be you. So buckle up
              coz we&apos;re gonna make you an offer you can&apos;t refuse..   
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              What is version beta?
              <img src={down} onClick={()=>{handleClick(2)}} alt="" />
            </div>
            {currIndex==2 && <div className="answer">
              It&apos;s Central India&apos;s largest students&apos; held
              Hackathon in which students from all over the country compete
              against each other for 36 hours non-stop and put their coding
              skills to test.
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              Will Hackathon be conducted online?
              <img src={down} onClick={()=>{handleClick(3)}} alt="" />
            </div>
            {currIndex==3 && <div className="answer">
              No, the hackathon comes as a combo package of rewards and
              on-campus experience of NIT Bhopal.
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              Who should participate?
              <img src={down} onClick={()=>{handleClick(4)}} alt="" />
            </div>
            {currIndex==4 && <div className="answer">
              If you are a college student who is interested in solving
              real-life problems through the virtual world of your laptop
              screens, you&apos;re at the right place. The Hackathon is just for
              you.
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              What is the goal of Hackathon?
              <img src={down} onClick={()=>{handleClick(5)}} alt="" />
            </div>
            {currIndex==5 && <div className="answer">
              The main aim of Hackathon is to bring out the coding skills of
              students to practical use.
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              Number of members in a team?
              <img src={down} onClick={()=>{handleClick(6)}} alt="" />
            </div>
            {currIndex==6 && <div className="answer">
              The maximum no. of team members is 4. You can also participate in
              a team of 3 or 2 members. It&apos;s up to you. Choose your
              crewmates carefully to prevent being ejected.
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              How would I know if I got selected?
              <img src={down} onClick={()=>{handleClick(7)}} alt="" />
            </div>
            {currIndex==7 && <div className="answer">
              We&apos;ll mail you and let you know.
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              How to participate?
              <img src={down} onClick={()=>{handleClick(8)}} alt="" />
            </div>
            {currIndex==8 && <div className="answer">
              Visit our website to register for the Hackathon. You&apos;ll be
              provided all the details there.
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              Cost for participation in Hackathon?
              <img src={down} onClick={()=>{handleClick(9)}} alt="" />
            </div>
            {currIndex==9 && <div className="answer">
              If you don&apos;t count the internet cost and the electricity bill
              for your laptop, then it&apos;s zero. NIL. Nothing..
            </div>}
        </div>
        <div className="faq">
            <div className="question">
              What is selection procedure?
              <img src={down} onClick={()=>{handleClick(10)}} alt="" />
            </div>
            {currIndex==10 && <div className="answer">
              Upload your GitHub profiles and CV while registering through
              Devfolio and you&apos;re all done. All the best!
            </div>}
        </div>
      </div>
    </div>
  )
}

export default Faqs
