import React, { useEffect, useState } from 'react';
import { RiAddLargeLine } from "react-icons/ri";
import "../assets/css/home.css";
import { TfiAgenda } from "react-icons/tfi";
import CreateModal from './CreateModal';
import Header from './Header';
import { useNavigate } from 'react-router-dom';

const Home = () => {

  const [newFormModal,setNewFormModal] = useState(false)
  const [feedbackData,setFeedbackData] = useState()
  console.log(".........feedbackData 111",feedbackData);

  const navigate = useNavigate()
  useEffect(()=>{
    // localStorage.setItem('feedback_data',JSON.stringify([
    //   {
    //     "feedback_id": "1", 
    //     "feedback_name": "Customer Service",
    //     "submitted": "10",
    //     "viewed": "55",
    //     "date_published": "8/8/2024"
    // }
    // ]))
    fetch('http://localhost:5000/feedback_data')
      .then((response) => response.json())
      .then((data) => setFeedbackData(data));
    // setFeedbackData(JSON.parse(localStorage.getItem('feedback_data') || "[]"))
  },[])

  

  return (
    <div className='alter_home'>
      {newFormModal && <CreateModal newFormModal={newFormModal} setNewFormModal={setNewFormModal} />}
      <Header show={false} />
    <div className='feedback_lists'>
      <div className='add_new_form_btn' onClick={()=>setNewFormModal(true)}>
        <RiAddLargeLine size={60} color='#2F4ED7' />
        New form
      </div>
      {/* {feedbackData != undefined && <> */}
      {feedbackData?.map((obj,i)=>{
      return <div className='feedback_list'>
        <div className='feedback_header'>
          <div className='feedback_header_icn'>
            <TfiAgenda size={20} color='#989BC8' />
          </div>
        </div>
        <div className='shafi'></div>
        
           <>
            <div className='feedback_details'>
            <h3>{obj?.feedback_name}</h3>
            <div className='submit_data'>
              <p>Submitted</p>
              <span>{obj?.submitted}</span>
            </div>
            <div className='viewed_data'>
              <p>Viewed</p>
              <span>{obj?.viewed}</span>
            </div>

            <div className='date_data'>
              <p>Date Published</p>
              <span>{obj?.todays_date}</span>
            </div>
          </div>
          <div className='submission_btn'>
          <button type='button' onClick={()=>navigate(`/view-submission?feedback_name=${obj?.feedback_name}&created_date=${obj?.todays_date}`)}>
            VIEW SUBMISSION
          </button>
          </div>
          <div className='edit_delete_btns'>
            <button type='button'>EDIT</button>
            <button type='button'>DELETE</button>
          </div>
          </>
        
        
        </div>
        })}
        {/* </>} */}
      </div>
      
      </div>
  )
}

export default Home
