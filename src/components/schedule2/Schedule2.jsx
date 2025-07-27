import React from 'react'
import "./Schedule2.css"
const Schedule2 = () => {
  return (
    <div className='schedulecontainer'>
      
      <div className='scheduletitle'>Schedule</div>

      <div className="allcontainer">
        <div className="sleft">

        <div className="detailcont">
            <div className="detailheading">
                <img src="/Images/50.png" className='small' alt="" />
                <div className='timetitle'>Registration</div>
            </div>
            <div className="card">
                Version Beta is opening its doors for applications starting from August 20th until October 5th.To apply, all you need to do is to click on the “Register Here” Button above and fill the registration form. After the registration process is compeleted, A rundown of shortlisted candidates for the hack will be declared.
            </div>
        </div>    

        <div className="detailcont">
          <div className="detailheading">
                <img src="/Images/50.png" className='small' alt="" />
                <div className='timetitle'>Announcement</div>
            </div>
            <div className="card">
                After intense brainstorming and collaboration, Best ideas would be selected by judges, Their creativity and problem-solving skills have set the stage for the next challenge.
            </div>
        </div>

        <div className="detailcont">
            <div className="detailheading">
                <img src="/Images/50.png" className='small' alt="" />
                <div className='timetitle'>Hackathon</div>
            </div>
            <div className="card">
                Every truly novel concept appears insane at first, so come present yours. The time for brainstorming is past; now is the time to code and present hackathon presentations.
            </div>
        </div>

        </div>
        
        <div className="mid">
            <div className='spherecont'>
            <img src="/Images/image3.png" className='sphere' alt="" />
            <img src="/Images/image3.png" className='sphere' alt="" />
            <img src="/Images/image3.png" className='sphere' alt="" />
            <img src="/Images/image3.png" className='sphere' alt="" />
            <img src="/Images/image3.png" className='sphere' alt="" />
            </div>
            <img src="/Images/Rectangle8.png" className='rectangle' alt="" />
        </div>

        <div className="sright">
            <div className="detailcont">
                <div className="detailheading">
                    <img src="/Images/50.png" className='small' alt="" />
                    <div className='timetitle'>Ideation</div>
                    </div>
                    <div className="card">
                        Dive deep into current tech trends and challenges. Draw inspiration from industry leaders, innovative startups, and emerging technologies. Use brainstorming sessions to generate a plethora of ideas, no matter how wild or ambitious.
                </div>
           </div>

            <div className="detailcont">
                <div className="detailheading">
                    <img src="/Images/50.png" className='small' alt="" />
                    <div className='timetitle'>Team</div>
                </div>
                <div className="card">
                    Collaboration is key as students bring together their unique skills and expertise. Enlist your teams and prepare them to tackle the upcoming challenges. Get ready to synergize and innovate with your peers as the codathon journey continues!
                </div>
            </div>
              
            
        </div>
      </div>
    </div>
  )
}

export default Schedule2
