import React, { useEffect, useState } from 'react'
import CommonModal from '../common/commonModal';
import "../assets/css/createModal.css";
import { useNavigate } from 'react-router-dom';
import { formatDate } from '../utils/commonFuntions';

const CreateModal = (props) => {

  const [feedbackName,setFeedbackName] = useState()
  const [feedbackPost,setFeedbackPost] = useState()

  const navigate = useNavigate()

  const handleCreateClick=()=>{
    const date = new Date()
    let today = formatDate(date)
    let feed_back_name = {
      "feedback_name": feedbackName,
      "todays_date": today
    }
    fetch("http://localhost:5000/feedback_data",
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(feed_back_name)
    }).then(response => response.json())
    .then(data => {
      setFeedbackPost(data);
      // Optionally, you can update the state to include the new post
    })
    .catch(error => {
      console.error('Error:', error);
    });
  }

  useEffect(()=>{
    if(feedbackPost){
      navigate(`/add-feedback?feedback_name=${feedbackName}`)
    }
  },[feedbackPost])

  return (
    <CommonModal 
    isOpen={props.newFormModal}
    closeModal={props.setNewFormModal}
    classNames={{
      modal:"feedbackmodal"
    }}
    >
      <div className='create_feedback_form'>
      <h4>Create Feedback Form</h4>
        <div className='feedback_form_modal'>
          <input type="text" onChange={(e)=>setFeedbackName(e.target.value)} />
        <div className='create_cancel_btns'>
          <button type="submit" onClick={()=>handleCreateClick()}>CREATE</button>
          <button type="button" onClick={() => props.setNewFormModal(false)}>CANCEL</button>
        </div>
      </div>
      </div>
    </CommonModal>
  )
}

export default CreateModal
