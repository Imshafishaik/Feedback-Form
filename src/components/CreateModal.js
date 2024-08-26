import React, { useState } from 'react'
import CommonModal from '../common/commonModal';
import "../assets/css/createModal.css";
import feedbackData from "../Feedbackdata.json";
import { useNavigate } from 'react-router-dom';

const CreateModal = (props) => {

  const [feedbackName,setFeedbackName] = useState({})

  const navigate = useNavigate()
  console.log("...........feedbackName",feedbackName);
  const handleCreateClick=()=>{
    if(feedbackName != undefined) {
      // feedbackData?.feedback_data?.push(feedbackName)
      navigate(`/add-feedback?feedback_name=${feedbackName}`)
    }
  }

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
