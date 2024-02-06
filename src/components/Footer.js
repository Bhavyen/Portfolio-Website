import '../styles/Footer.css'

export default function Footer(){
  return(
    <div className="footer-parent">
      <div className='container1'>
        <img src={require('../images/github.png')} className='footer-icon1'/>
        <a href='https://github.com/Bhavyen' className='footer-icon1-link'>https://github.com/Bhavyen</a>
        
      </div>
      <div className='container2'>
        <img src={require('../images/phone.webp')} className='footer-icon1'/>
        <a className='footer-icon2-link'>+91 - 8320026325</a>
        
      </div>
      <div className='container3'>
        <img src={require('../images/email.webp')} className='footer-icon3'/>
        <a className='footer-icon2-link'>bhavyenmehta1007@gmail.com</a>
      </div>
      {/* <div className='container2'>
        1
      </div> */}
    </div>
  )
}