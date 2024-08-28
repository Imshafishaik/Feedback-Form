import React, { useState } from 'react';
import '../../assets/css/addFeedback.css';
import { useLocation, useParams } from 'react-router-dom';
import Header from '../Header';
import { MdEdit } from "react-icons/md";    
import { capitalizeFirstLetterOfEachWord } from '../../utils/commonFuntions';
import AddFields from '../AddFields';
import { FaChevronLeft } from "react-icons/fa6";
import CreateModal from '../CreateModal';
import { Categories, NumericRating, RadioButton, SingleLineInput, SmileyRating, StarRating, TextAreaRating } from '../../utils/inputFunctions';
import "../../assets/css/inputFunctions.css";

const AddFeedback = (props) => {
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const [newFormModal,setNewFormModal] = useState(false)
    const [fieldsToBeRender,setFieldsToBeRender] = useState([])

    const [textareaRating,setTextareaRating] =useState()
    const [seletedNumeric,setSelectedNumeric] = useState()
    const [starRating, setStarRating] = useState()
    const [smileyRating, setSmileyRating] = useState()
    const [singleLineInput, setSingleLineInput] = useState()
    const [radioButton, setRadioButton] = useState()
    const [categories, setCategories] = useState()
    console.log("...........textareaRating",textareaRating);
    

    const componentMap ={
        TextAreaRating: TextAreaRating,
        NumericRating: NumericRating,
        StarRating: StarRating,
        SmileyRating: SmileyRating,
        SingleLineInput: SingleLineInput,
        RadioButton: RadioButton,
        Categories: Categories,
    }

  return (
    <div className='add_feedback_fields'>
        
        {newFormModal && <CreateModal  
        newFormModal={newFormModal} 
        setNewFormModal={setNewFormModal} 
        />}

        <Header
        seletedNumeric={seletedNumeric} 
        setSelectedNumeric={setSelectedNumeric}
        setTextareaRating={setTextareaRating}
        textareaRating={textareaRating}
        setStarRating={setStarRating}
        starRating={starRating}
        setSmileyRating={setSmileyRating}
        smileyRating={smileyRating}
        setSingleLineInput={setSingleLineInput}
        singleLineInput={singleLineInput}
        setRadioButton={setRadioButton}
        radioButton={radioButton}
        setCategories={setCategories}
        categories={categories}
        show={true} 
        />

        <div className='add_feedback_body'>
            <div></div>
            <div className='add_feedback_fields_blk'>
                <div className="add_feedback_header">
                    <FaChevronLeft size={20} /><h4>{capitalizeFirstLetterOfEachWord(props.feedbackName)}</h4> <MdEdit onClick={()=>setNewFormModal(true)} size={20} />
                </div>
                <div>
                    {fieldsToBeRender?.map((field, i)=>{
                        const Component = componentMap[field];
                        if(Component){
                            return <Component 
                            fieldsToBeRender={fieldsToBeRender}
                             setFieldsToBeRender={setFieldsToBeRender}
                             setSelectedNumeric={setSelectedNumeric}
                             seletedNumeric={seletedNumeric}
                             setTextareaRating={setTextareaRating}
                             textareaRating={textareaRating}
                             setStarRating={setStarRating}
                             starRating={starRating}
                             setSmileyRating={setSmileyRating}
                             smileyRating={smileyRating}
                             setSingleLineInput={setSingleLineInput}
                             singleLineInput={singleLineInput}
                             setRadioButton={setRadioButton}
                             radioButton={radioButton}
                             setCategories={setCategories}
                             categories={categories}
                              />;
                        }
                    })}
                </div>
            </div>
            <div className='add_fields_comp'>
                <AddFields fieldsToBeRender={fieldsToBeRender} setFieldsToBeRender={setFieldsToBeRender} />
            </div>
        </div>
    </div>
  )
}

export default AddFeedback
