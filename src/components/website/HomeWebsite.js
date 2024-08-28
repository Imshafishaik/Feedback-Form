import React, { useState } from 'react'
import FeedbackModal from './FeedbackModal'
import CreateModal from '../CreateModal'
import Header from '../Header'
import { RiAddLargeLine } from 'react-icons/ri'

const HomeWebsite = () => {
    const [feedbackModal,setFeedbackModal] = useState(false)
  return (
    <div>
        {/* <div className='alter_home'>
        {newFormModal && <CreateModal newFormModal={newFormModal} setNewFormModal={setNewFormModal} />}
        <Header show={false} />
        <div className='feedback_lists'>
            <div className='add_new_form_btn' onClick={()=>setNewFormModal(true)}>
                <RiAddLargeLine size={60} color='#2F4ED7' />
                New form
                </div>
            </div>
        </div> */}
        {feedbackModal && <FeedbackModal feedbackModal={feedbackModal} setFeedbackModal={setFeedbackModal} />}
        <button className='open_feedbak_form' onClick={()=>setFeedbackModal(true)}>Open Feedback Form</button>
    </div>
  )
}

export default HomeWebsite
