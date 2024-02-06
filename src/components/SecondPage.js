import '../styles/SecondPage.css'

export default function SecondPage(){
  return(
    <div className='secondpage-parent-container'>
      <div className='secondpage-first-half'>
        <h1 className='secondpage-heading-1'>
          Tech
        </h1>
        <h2 className='secondpage-heading-2'>
           Stack
        </h2>
        {/* <img src={require('../images/tech stack.png')} className='s-fh-image'/> */}
      </div>
      <div className='secondpage-second-half'>
        <img src={require('../images/Group 7.png')} className='s-sh-image'/>
      </div>
      
    </div>
  )
}