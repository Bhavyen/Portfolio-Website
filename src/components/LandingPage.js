import '../styles/LandingPage.css'

export default function LandingPage(){
  return(
    <div className='parent-container'>
      <div className='first-half'>
        <text className='text'>
        I'm
        </text>
        {/* <img src={require('../images/I’m.png')} className='fh-image'/> */}
      </div>
      <div className='second-half'>
        <text className='text-name'>
          <strong>Bhavyen</strong>
        </text>
        {/* <img src={require('../images/Bhavyen.png')} className='sh-image'/> */}
      </div>
    
    </div>
  )
}