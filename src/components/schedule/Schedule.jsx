import React from 'react'
import { useEffect,useRef } from 'react'
import "./Schedule.css"
import {gsap} from "gsap"
import ScrollTrigger from 'gsap/ScrollTrigger'
gsap.registerPlugin(ScrollTrigger)
const Schedule = () => {
  const wrapperRef= useRef(null)
  const scrollerRef= useRef(null)
  
  useEffect(() => {
  const wrapper= wrapperRef.current
  const scroller = scrollerRef.current   
  if(!wrapperRef || !scrollerRef) return;
  ScrollTrigger.refresh();
  const totalScroll = scroller.scrollWidth - window.innerWidth;
    // Use scrollWidth for accurate height
  const updateHeight = () => {
    wrapper.style.height = `${window.innerHeight + totalScroll}px`;
    ScrollTrigger.refresh();
  };
  updateHeight();

  // wrapper.style.height = `${window.innerHeight + totalScroll}px`;
    gsap.to(scroller, {
      x: () => -(scroller.scrollWidth - window.innerWidth),
      ease:"none",
      scrollTrigger: {
        trigger: wrapper,
        start: 'top top',
        end: () => `+=${scroller.scrollWidth - window.innerWidth}`,
        scrub: true,
        pinSpacing:false,
        pin: wrapper,
        anticipatePin: 1,
        markers:false,
        invalidateOnRefresh: true,
      },
    })
    window.addEventListener("resize", updateHeight);
    return () => {
      window.removeEventListener("resize", updateHeight);
      ScrollTrigger.getAll().forEach(st => st.kill());
    }

  }, [])

  
  return (
    
    <div className='schedulecontainer' ref={wrapperRef} >
      
      <div className='scheduletitle'>Schedule</div>
      <div className="allcontainer" ref={scrollerRef}>
        <div className="detailcont">
          <div className='timelimit'>18th Oct</div>
          <div className="timecontainer" data-aos="zoom-in">
              <div className='timetitle'>Registration</div>
              <div className='card'>Version Beta is opening its doors for applications starting from August 20th until October 5th.To apply, all you need to do is to click on the “Register Here” Button above and fill the registration form. After the registration process is compeleted, A rundown of shortlisted candidates for the hack will be declared.</div>
          </div>
        </div>
        <div className="detailcont">
          <div className='timelimit'>Till 1 Nov</div>
          <div className="timecontainer" data-aos="zoom-in">
              <div className='timetitle'>Ideation</div>
              <div className='card'>Dive deep into current tech trends and challenges. Draw inspiration from industry leaders, innovative startups, and emerging technologies. Use brainstorming sessions to generate a plethora of ideas, no matter how wild or ambitious.</div>
          </div>
        </div>
        <div className="detailcont">
          <div className='timelimit'>2nd Nov</div>
          <div className="timecontainer" data-aos="zoom-in">
              <div className='timetitle'>Announcement</div>
              <div className='card'>After intense brainstorming and collaboration, Best ideas would be selected by judges, Their creativity and problem-solving skills have set the stage for the next challenge.</div>
          </div>
        </div>
        <div className="detailcont">
          <div className='timelimit'>2-3 Nov</div>
          <div className="timecontainer" data-aos="zoom-in">
              <div className='timetitle'>Team</div>
              <div className='card'>Collaboration is key as students bring together their unique skills and expertise. Enlist your teams and prepare them to tackle the upcoming challenges. Get ready to synergize and innovate with your peers as the codathon journey continues!</div>
          </div>
        </div>
        <div className="detailcont">
          <div className='timelimit'>8-10 Nov</div>
          <div className="timecontainer" data-aos="zoom-in">
              <div className='timetitle'>Hackathon</div>
              <div className='card'>Every truly novel concept appears insane at first, so come present yours. The time for brainstorming is past; now is the time to code and present hackathon presentations.</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Schedule
