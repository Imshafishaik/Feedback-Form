import React from 'react'
import "../assets/css/home.css";

const Header = (props) => {
  return (
    <div className='home_header'>
        <div>
        <img src="https://s3-alpha-sig.figma.com/img/2293/4848/b251a693f86366116521344341649e62?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jqcbk8lMfedVnIKeDmA~08W1gQgxqMdCnBU1HtheTs6ZT0y0K3BEBt0LQMZE~PPaNwwGIdEsIKsH~Bbh6Zz3tNbZBTwRZdRY9hmiOzjSmq9oTBvCFIzZsripIRNqv0ahB~5LIHiLennFjTDDXPIcd6ffR3jHNEt09HnInUuPNBytP3jXmEpKGJIi6RFAJxgjPK1EWyfMh-E4wHlZe7JGHitneL7XNgXb-El0g3k5JacF0lypJxHM4IryjiiSvjnAq-71PECTu13tH1aiWgWiOmozZV7gFPlozKJzhFkYwcNBS4Geo6EjbMO0eKxYdZZeflEVkYwLeXGCGsmoA-fkmQ__" />USER FEEDBACK
        </div>
        {props?.show ? 
        <div className='save_publich_btns'>
            <button type='button'>SAVE</button>
            <button type='button'>PUBLISH</button>
        </div> :""
        }
      </div>
  )
}

export default Header
