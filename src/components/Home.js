import React, { useState } from 'react';
import { RiAddLargeLine } from "react-icons/ri";
import "../assets/css/home.css";
import { TfiAgenda } from "react-icons/tfi";
import CreateModal from './CreateModal';
import feedbackData from "../Feedbackdata.json";
import Header from './Header';

const Home = () => {

  const [newFormModal,setNewFormModal] = useState(false)

  return (
    <div className='alter_home'>
      {newFormModal && <CreateModal newFormModal={newFormModal} setNewFormModal={setNewFormModal} />}
      <Header show={false} />
    <div className='feedback_lists'>
      <div className='add_new_form_btn' onClick={()=>setNewFormModal(true)}>
        <RiAddLargeLine size={60} color='#2F4ED7' />
        New form
      </div>
      <div className='feedback_list'>
        <div className='feedback_header'>
          <div className='feedback_header_icn'>
            <TfiAgenda size={20} color='#989BC8' />
          </div>
        </div>
        {feedbackData?.feedback_data?.map((obj,i)=>{
          return <>
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
              <span>{obj?.date_published}</span>
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
          </>
        })}
        
        </div>
      </div>
      </div>
  )
}

export default Home
