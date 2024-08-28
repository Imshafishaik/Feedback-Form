import React, { useEffect, useState } from 'react'
import "../assets/css/home.css";
import { formatDate } from '../utils/commonFuntions';

const Header = (props) => {

  const [dataPublish,setDataPublish] = useState()
  const handleSaveData=()=>{

  }
 
  const handlePublishData = (e) => {
    e.preventDefault();
    const date = new Date()
    let today = formatDate(date)
    const newPost = {
      ...(props?.seletedNumeric && {
      "numeric_rating_heading" : "How likely is it that you will recommend us to your family and friends?",
      "number_rating": props?.seletedNumeric?.length ? props?.seletedNumeric?.length : "",
      }),
      ...(props?.textareaRating && {
      "textarea_rating_heading":"Would you like to add a comment",
      "textarea_rating": props.textareaRating ? props.textareaRating : "",
      }),
      ...(props?.starRating && {
      "star_rating_heading": "Give a star rating for the website",
      "star_rating": props?.starRating?.length ? props.starRating?.length : "",
    }),
      ...(props?.smileyRating && {
      "smiley_rating_heading": "What is your opinion of this page?",
      "smiley_rating": props.smileyRating?.length ? props.smileyRating : "",
    }),
      ...(props?.singleLineInput && {
      "single_line_input_heading": "Do you have any suggestions to improve our website?",
      "single_line_input": props?.singleLineInput ? props.singleLineInput : "",
    }),
      ...(props?.radioButton && {
      "radio_rating_heading": "Multiple choice-1 answer",
      "radio_rating": props?.radioButton ? props.radioButton : "",
    }),
      ...(props?.categories && {
      "bug_rating_heading": "Pick a subject and provide your feedback:",
      "bug_rating": props?.categories ? props?.categories : ""
    }),
    "todays_date": today
    };

    fetch('http://localhost:5000/feedback_details', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(newPost)
    })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
        // Optionally, you can update the state to include the new post
      })
      .catch(error => {
        console.error('Error:', error);
      });

      props.setSelectedNumeric(null)
      props.setTextareaRating(null)
      props.setStarRating(null)
      props.setSmileyRating(null)
      props.setSingleLineInput(null)
      props.setRadioButton(null)
      props.setCategories(null)
  };

  // const handlePublishData=()=>{
  //   setDataPublish((prev)=>[...prev,{
  //     "feedback_id": "2",
  //     "feedback_name": "Manager Service",
  //     "submitted": "10",
  //     "viewed": "55",
  //     "date_published": "8/8/2024"
  //   }])
    
  // }

  useEffect(()=>{
    // localStorage?.setItem("feedback_data",JSON?.stringify(dataPublish))
  },[dataPublish])

  // useEffect(()=>{
  //   if(localStorage.getItem("feedback_data")){
  //   localStorage.setItem('feedback_data',JSON?.stringify([
  //     {
  //       "feedback_id": "2",
  //       "feedback_name": "Manager Service",
  //       "submitted": "10",
  //       "viewed": "55",
  //       "date_published": "8/8/2024"
  //   }
  //   ]))
  //   setDataPublish(JSON?.parse(localStorage?.getItem('feedback_data')))
  // }
  // },[])

  return (
    <div className='home_header'>
        <div>
        <img src="https://s3-alpha-sig.figma.com/img/2293/4848/b251a693f86366116521344341649e62?Expires=1725235200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Jqcbk8lMfedVnIKeDmA~08W1gQgxqMdCnBU1HtheTs6ZT0y0K3BEBt0LQMZE~PPaNwwGIdEsIKsH~Bbh6Zz3tNbZBTwRZdRY9hmiOzjSmq9oTBvCFIzZsripIRNqv0ahB~5LIHiLennFjTDDXPIcd6ffR3jHNEt09HnInUuPNBytP3jXmEpKGJIi6RFAJxgjPK1EWyfMh-E4wHlZe7JGHitneL7XNgXb-El0g3k5JacF0lypJxHM4IryjiiSvjnAq-71PECTu13tH1aiWgWiOmozZV7gFPlozKJzhFkYwcNBS4Geo6EjbMO0eKxYdZZeflEVkYwLeXGCGsmoA-fkmQ__" />USER FEEDBACK
        </div>
        {props?.show ? 
        <div className='save_publich_btns'>
            <button type='button' onClick={()=>handleSaveData()}>SAVE</button>
            <button type='button' onClick={(e)=>handlePublishData(e)}>PUBLISH</button>
        </div> :""
        }
      </div>
  )
}

export default Header
