import React, { useEffect, useState } from 'react'
import Header from './Header'
import { FaChevronLeft } from 'react-icons/fa'
import { capitalizeFirstLetterOfEachWord } from '../utils/commonFuntions'
import { MdEdit } from 'react-icons/md'
import { useLocation } from 'react-router-dom'
import "../assets/css/feedbackdetail.css"
import { Accordion } from 'react-bootstrap'

const ViewSubmission = () => {

  const [feedbackDetails,setFeedbackDetails] = useState()

  const location = useLocation()
  console.log("...........location: ", location);
  const params = new URLSearchParams(location.search)
  console.log("..........params",params);

  useEffect(()=>{
    fetch('http://localhost:5000/feedback_details')
      .then((response) => response.json())
      .then((data) => setFeedbackDetails(data));
  },[])

  return (
    <div>
      <Header show={false} />
      {/* {capitalizeFirstLetterOfEachWord(params.get('feedback_name')} */}
      <div className='feedback_detail_page'>
      <div className="feedback_detail_header">
        <div className='feedback_name_icn'>
        <FaChevronLeft size={20} /><h4>{capitalizeFirstLetterOfEachWord(params.get('feedback_name'))}</h4> 
        </div>
        {/* <MdEdit onClick={()=>setNewFormModal(true)} size={20} /> */}
        <div className='date_created'>Created Date: {params.get('created_date')}</div>
      </div>
      <div className='feedback_content'>
        <div className='feedback_counts'>
          <div>
          <p>40</p>
          <span>VIEWS</span>
          </div>
          <div>
          <p>3</p>
          <span>Submitted</span>
          </div>
        </div>
        <div className='feedback_date_time'>
        <p>Page URL contains example.com/about</p>
        <p>Date: 23/08/2024</p>
        <p>Time: 12:00pm</p>
        </div>
        <div className='feedback_detail_lists'>
          <h3>Feedback List</h3>
          <Accordion>

            
              {feedbackDetails?.map((data,i)=>{
                return <Accordion.Item className='accordion' eventKey={i}>
                 <Accordion.Header><div>Feedback {i+1} </div></Accordion.Header>
                    <Accordion.Body>
                      <div className='feedback_detail'>
                        <p>{data?.numeric_rating_heading}</p>
                        <span>{data?.number_rating}</span>

                        <p>{data?.textarea_rating_heading}</p>
                        <span>{data?.textarea_rating}</span>

                        <p>{data?.star_rating_heading}</p>
                        <span>{data?.star_rating}</span>

                        <p>{data?.smiley_rating_heading}</p>
                        <span>{data?.smiley_rating}</span>

                        <p>{data?.multiple_choice_rating_heading}</p>
                        <span>{data?.multiple_choice_rating}</span>

                        <p>{data?.radio_rating_heading}</p>
                        <span>{data?.radio_rating}</span>

                        <p>{data?.single_line_input_heading}</p>
                        <span>{data?.single_line_input}</span>

                        <p>{data?.bug_rating_heading}</p>
                        <span>{data?.bug_rating}</span>

                      </div>
                    </Accordion.Body>
                </Accordion.Item>
              })}
          </Accordion>
        </div>
      </div>
      
      </div>
    </div>
  )
}

export default ViewSubmission
