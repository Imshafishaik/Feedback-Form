import React, { useState } from 'react'
import CommonModal from '../../common/commonModal'
import AddFeedback from './AddFeedback'
import Header from '../Header'
import { formatDate } from '../../utils/commonFuntions'

const FeedbackModal = (props) => {

    const [feedbackName,setFeedbackName] = useState()
    const [feedbackPost,setFeedbackPost] = useState()

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

  return (
    <CommonModal isOpen={props.feedbackModal}
    closeModal={props.setFeedbackModal}
    classNames={{
      modal:"feedbackmodal"
    }}>

        {/* <div className='alter_home'> */}
        {/* {newFormModal && <CreateModal newFormModal={newFormModal} setNewFormModal={setNewFormModal} />} */}
        {!feedbackPost &&
        <>
        <Header show={false} />
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
            </>
        }
        {/* <div className='feedback_lists'>
            <div className='add_new_form_btn' onClick={()=>setNewFormModal(true)}>
                <RiAddLargeLine size={60} color='#2F4ED7' />
                New form
                </div>
            </div>
        </div> */}
        {feedbackPost &&
        <AddFeedback feedbackName={feedbackName} />}
    </CommonModal>
  )
}

export default FeedbackModal
