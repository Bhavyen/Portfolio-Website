
import { useState } from 'react'
import '../styles/ThirdPage.css'

export default function ThirdPage(){
  
  const [resize,setResize] = useState(false)
  const [resize2,setResize2] = useState(false)
  const handleresize = ()=>{
    setResize(!resize)
  }
  const handleresize2 = ()=>{
    setResize2(!resize2)
  }

  return(
    <div className='thirdpage-parent-container'>
      <div className='thirdpage-first-half'>
        {/* <img src={require('../images/work experience.png')}/> */}
        <h1 className='thirdpage-heading-1'>
          Work
        </h1>
        <h1 className='thirdpage-heading-2'>
          Experience
        </h1>
      </div>
      
      <div className='thirdpage-second-half'>
        <div className='dummy'>
          dummy
        </div>
        <div className={`card-holder-1 ${resize2 ? 'otherresized' : ''}`}>
          <div className={`card ${resize ? 'resized':''} ${resize2 ? 'content1':''}`} >
            {
              resize2 ?(<>
              </>):(<>
              <div className='card-heading'>Baroda Citizens Council </div>
              <div className={`card-body ${resize ? 'resized':''}`}>
               <strong>
                    I worked as a Software Developer at Baroda Citizens Council, I spearheaded the creation of a robust Management Information System (MIS) for Project Savera. Employing the MERN Stack (MongoDB, Express.js, React.js, Node.js), I ensured efficient data management and reporting capabilities. 
                    {
                      resize ? (<>Leveraging MongoDB for streamlined data storage and retrieval, I crafted RESTful APIs using Node.js and Express.js to enable seamless communication between server and client components. This initiative significantly enhanced data handling efficiency, contributing to the overall success of Project Savera. <br/><br/>In my role as a Software Developer at Baroda Citizens Council, I played a pivotal role in advancing data management and reporting capabilities through the development of a comprehensive Management Information System (MIS) for Project Savera. Embracing the power of the MERN Stack, which comprises MongoDB for robust data storage, Express.js for seamless backend development, React.js for dynamic user interfaces, and Node.js for efficient server-side operations, I orchestrated a system that effectively addressed the project's requirements.<br/><br/>The utilization of MongoDB ensured not only efficient data storage but also facilitated swift retrieval, crucial for the dynamic nature of Project Savera. Additionally, I crafted RESTful APIs using Node.js and Express.js, establishing a robust communication framework between server and client components.<br/><br/>The end result was a transformative MIS that significantly bolstered the efficiency of data management and reporting processes. This project underscored my commitment to utilizing cutting-edge technologies to deliver solutions that align with organizational goals and contribute to the success of meaningful initiatives like Project Savera at Baroda Citizens Council.
                      <div className='sample-images-holder'>
                        <img src={require('../images/1.png')} className='sample-images'/>
                      <img src={require('../images/2.png')} className='sample-images'/>
                      <img src={require('../images/3.png')} className='sample-images'/>
                      <img src={require('../images/4.png')} className='sample-images'/>
                      <img src={require('../images/5.png')} className='sample-images'/>
                      <img src={require('../images/6.png')} className='sample-images'/>
                      <img src={require('../images/7.png')} className='sample-images'/>
                      <img src={require('../images/8.png')} className='sample-images'/>
                      <img src={require('../images/9.png')} className='sample-images'/>
                      </div>
                      
                      </>):(<></>)
                    }
                    </strong>
              </div>
              <div className='card-subscript'>
               <a onClick={handleresize}>
                     Read More
              
               </a>
             </div>
              
              </>)
            }
              

          </div>

        </div>
        <div className={`card-holder-2 ${resize2 ? 'otherresized':''}`}>
          <div className={`card ${resize2 ? 'otherresized' :''} ${resize ? 'content2':''}`}>
            {
              resize ?
              (<></>):(<>
              
              <div className='card-heading'>Agevole Innovation</div>
              <div className={`card-body ${resize2 ? 'otherresized':''}`}>
                                
                I excelled as a Web Developer by creating a robust backend server with Flask, seamlessly integrating MongoDB for efficient database management. Collaborating with a dynamic team, I contributed to the development of a powerful Web Scraping Bot using Selenium, enhancing data retrieval capabilities. 
                
                {resize2 ? (<>
                  In another role, I leveraged my skills to craft a responsive backend server using Node.js and Express.js, specifically tailored for an Advertisement Module. My adeptness in utilizing these technologies not only facilitated seamless functionality but also underscored my commitment to delivering innovative solutions in a collaborative work environment.
                </>):(<></>)}
                
              </div>
              <div className='card-subscript'>
               <a onClick={handleresize2}>
                     Read More
               </a>
             </div>
              
              </>)
            }
              

          </div>

        </div>
        <div className='dummy2'>
          dummy
        </div>
        <div className='footer'>
          hello
        </div>
      </div>

    </div>
    
  )
}