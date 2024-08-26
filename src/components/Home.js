import React from 'react';
import { RiAddLargeLine } from "react-icons/ri";
import "../assets/css/home.css";
import { TfiAgenda } from "react-icons/tfi";

const Home = () => {
  return (
    <div className='alter_home'>
      <div className='home_header'>
        <img src="https://s3-alpha-sig.figma.com/img/2293/4848/b251a693f86366116521344341649e62?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jqcbk8lMfedVnIKeDmA~08W1gQgxqMdCnBU1HtheTs6ZT0y0K3BEBt0LQMZE~PPaNwwGIdEsIKsH~Bbh6Zz3tNbZBTwRZdRY9hmiOzjSmq9oTBvCFIzZsripIRNqv0ahB~5LIHiLennFjTDDXPIcd6ffR3jHNEt09HnInUuPNBytP3jXmEpKGJIi6RFAJxgjPK1EWyfMh-E4wHlZe7JGHitneL7XNgXb-El0g3k5JacF0lypJxHM4IryjiiSvjnAq-71PECTu13tH1aiWgWiOmozZV7gFPlozKJzhFkYwcNBS4Geo6EjbMO0eKxYdZZeflEVkYwLeXGCGsmoA-fkmQ__" />USER FEEDBACK
      </div>
    <div className='feedback_lists'>
      <div className='add_new_form_btn'>
        <RiAddLargeLine size={60} color='#2F4ED7' />
        New form
      </div>
      <div className='feedback_list'>
        <div className='feedback_header'>
          <div className='feedback_header_icn'>
            <TfiAgenda size={20} color='#989BC8' />
          </div>
        </div>
        <div className='feedback_details'>
            <h3>Delivery</h3>
            <div className='submit_data'>
              <p>Submitted</p>
              <span>10</span>
            </div>

            <div className='viewed_data'>
              <p>Viewed</p>
              <span>55</span>
            </div>

            <div className='date_data'>
              <p>Date Published</p>
              <span>8/8/2024</span>
            </div>
        </div>
        <div className='submission_btn'>
        <button type='button'>
          VIEW SUBMISSION
        </button>
        </div>
        <div className='edit_delete_btns'>
          <button type='button'>EDIT</button>
          <button type='button'>DELETE</button>
        </div>
        </div>
      </div>
      </div>
  )
}

export default Home
