import NewsLetter from './NewsLetter';
import './footer.css';

const Footer = () => {
  return (
    <div className='footer'>
        <NewsLetter/>
        <div className='footer-wrapper'>
          <div className='footer-left'>
            <h1>CodeIt-Blog</h1>
            <p>Build a modern and creative website with CodeIt</p>
            <ul>
              <li>Twitter</li>
              <li>LinkedIn</li>
              <li>Instagram</li>
              <li>Google</li>
              <li>Youtube</li>
              </ul>
          </div>
          <div className='footer-right'>
              <ul>
                <li>Products</li>
                <li>Landingpage</li>
                <li>Features</li>
                <li>Documentation</li>
                <li>Referral Program</li>
                <li>Pricing</li>
                <li>Services</li>
                <li>Documentation</li>
                <li>Design</li>
                <li>Themes</li>
                <li>Illustrations</li>
                <li>Ui Kits</li>
                <li>Company</li>
                <li>About</li>
                <li>Terms</li>
                <li>Privacy Policy</li>
                <li>Carrers</li>
                <li>More</li>
                <li>Documentations</li>
                <li>License</li>
                <li>Changelog</li>
              </ul>
          </div>
        </div>
    </div>
  )
}

export default Footer