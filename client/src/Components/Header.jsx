import { Button, Form, InputGroup } from 'react-bootstrap';
import CustomNavbar from './CustomNavbar';
import './header.css';
import {useEffect, useState} from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

const Header = ({ search }) => {
  const [query, setQuery] = useState('');

  const handleChange = (event) => {
      setQuery(event.target.value);
  };

  const handleSubmit = (event) => {
      event.preventDefault();
      search(query);
  };

  useEffect(() => {
    AOS.init({
      disable: false, 
      startEvent: 'DOMContentLoaded', 
      initClassName: 'aos-init', 
      animatedClassName: 'aos-animate', 
      useClassNames: false, 
      disableMutationObserver: false,
      debounceDelay: 50, 
      throttleDelay: 99,
      offset: 120, 
      delay: 0, 
      duration: 400, 
      easing: 'ease', 
      once: false, 
      mirror: false, 
      anchorPlacement: 'top-bottom', 

      // more settings here
    });
  }, []);
  return (
    <div className='header'>
        <CustomNavbar/>
        <div className='header-wrapper'>
            <h1  data-aos="fade-right">Our Newsroom</h1>
    <Form onSubmit={handleSubmit}>
  <InputGroup className="mb-3" size='lg' data-aos="fade-right">
    <Form.Control
      placeholder="Search article"
      aria-label="Search article"
      aria-describedby="basic-addon2"
      value={query}
      onChange={handleChange}
    />
    <Button type='submit' variant="primary" id="button-addon2">
      Search
    </Button>
  </InputGroup>
</Form>
      <div className='popular-header' data-aos="fade-right">
        <h5>Popular Tags:</h5>
       <div className='btn-container'>
       <Button variant="outline-secondary" id="button-addon2" disabled>
          Politics
        </Button>
        <Button variant="outline-secondary" id="button-addon2" disabled>
          News
        </Button>
        <Button variant="outline-secondary" id="button-addon2" disabled>
          Technology
        </Button>
       </div>
      </div>
        </div>
    </div>
  )
}

export default Header