import React, { useState } from 'react';
import '../assets/css/addFeedback.css';
import { useLocation, useParams } from 'react-router-dom';
import Header from './Header';
import { MdEdit } from "react-icons/md";    
import { capitalizeFirstLetterOfEachWord } from '../utils/commonFuntions';
import AddFields from './AddFields';
import { FaChevronLeft } from "react-icons/fa6";
import CreateModal from './CreateModal';
import { Categories, NumericRating, RadioButton, SingleLineInput, SmileyRating, StarRating, TextAreaRating } from '../utils/inputFunctions';
import "../assets/css/inputFunctions.css";

const AddFeedback = () => {
    const location = useLocation()
    const [newFormModal,setNewFormModal] = useState(false)
    // const { feedback_name } = useParams(location?.search)
    const params = new URLSearchParams(location.search)
  return (
    <div className='add_feedback_fields'>
        {newFormModal && <CreateModal newFormModal={newFormModal} setNewFormModal={setNewFormModal} />}
        <Header show={true} />
        <div className='add_feedback_body'>
            <div></div>
            <div className='add_feedback_fields_blk'>
                <div className="add_feedback_header">
                    <FaChevronLeft size={20} /><h4>{capitalizeFirstLetterOfEachWord(params.get('feedback_name'))}</h4> <MdEdit onClick={()=>setNewFormModal(true)} size={20} />
                </div>
                <div>
                    {<TextAreaRating />}
                    {<NumericRating />}
                    {<StarRating />}
                    {<SmileyRating />}
                    {<SingleLineInput />}
                    {<RadioButton />}
                    {<Categories />}
                </div>
            </div>
            <div className='add_fields_comp'>
                <AddFields />
            </div>
        </div>
    </div>
  )
}

export default AddFeedback
