import React, { useState } from 'react';
import "../assets/css/inputFunctions.css";
import { MdDelete, MdEdit } from 'react-icons/md';
import { FaStar } from 'react-icons/fa';

export const TextAreaRating=(props)=> {
  
  const handleDeleteClick=(obj)=>{
    let arr1 = props.fieldsToBeRender?.filter((field,i)=>field != obj)
    props.setFieldsToBeRender(arr1)
    props.setTextareaRating(null)
  }

  return (
    <div className='text_area'>
      <p>Would you like to add a comment?</p>
      <textarea type="text" 
      onChange={(e)=>props.setTextareaRating(e.target.value)}
       />
      <div className='edits_delete_btns'>
        <MdEdit size={20} />
        <MdDelete size={20} onClick={()=>handleDeleteClick("TextAreaRating")} />
      </div>
    </div>
  )
}

export const NumericRating = (props) => {
  let ratingArr = [1,2,3,4,5,6,7,8,9,10]

  const handleDeleteClick=(obj)=>{
    let arr2 = props.fieldsToBeRender?.filter((field,i)=>field != obj)
    props.setFieldsToBeRender(arr2)
    props.setSelectedNumeric(null)
  }

  const handleNumericRating=(rating)=>{
    let selectedRating = []
    for(let i=1; i<=rating; i++){
      selectedRating.push(i)
    }
    props.setSelectedNumeric(selectedRating)
  }
  
  return (
    <div className='number_ratings_area'>
      <p>How likely is it that you will recommend us to your family and friends?</p>
      <div className='number_ratings'>
      {ratingArr?.map((rating,i)=>(<div className={`${props.seletedNumeric?.includes(rating) ? 'selected_number_rating' :'number_rating'}`} onClick={()=>handleNumericRating(rating)}>{rating}</div>))}
      </div>
      <div className='edit_delete_number_btns'>
        <MdEdit size={20} />
        <MdDelete size={20} onClick={()=>handleDeleteClick("NumericRating")} />
      </div>
    </div>
  )
}

export const StarRating = (props) => {
  let starArr = [1,2,3,4,5]

  const handleDeleteClick=(obj)=>{
    let arr3 = props.fieldsToBeRender?.filter((field,i)=>field != obj)
    props.setFieldsToBeRender(arr3)
    props.setStarRating(null)
  }

  const handleStarClick=(star)=>{
    let starRatings = []
    for(let i=1; i<=star; i++){
      starRatings.push(i)
    }
    props.setStarRating(starRatings)
  }
  return (
    <div className='number_ratings_area'>
      <p>Give a star rating for the website</p>
      <div className='star_ratings'>
      {starArr?.map((star,i)=><FaStar className={`${props?.starRating?.includes(star) ? "active_star": "not_active_star"}`} size={40} onClick={()=>handleStarClick(star)} />)}
      </div>
      <div className='edit_delete_number_btns'>
        <MdEdit size={20} />
        <MdDelete size={20} onClick={()=>handleDeleteClick("StarRating")} />
      </div>
    </div>
  )
}

export const SmileyRating = (props) => {

  let smileyarr = [
  "https://s3-alpha-sig.figma.com/img/9237/3b85/5802c8c45733e451cc7daf8caa2d127d?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=OL4TnyyZE3ro1-ejXVhd8kmbZtgspGYS1F~PIjokSzwd-LAl1jIY~hvlHytbMynMiTmXDQ9-iTJSrS4Xe9Kzd02hsWGL5Pv0duGpMoBW9N6PNRjO80QEYZmEfq8IlwyWW-w4ROO5w7CI~lnW6Wet1m5xDyptz63UxzdRQ-8z6s-WjUH~BO-5eeWhU3QO7lqVY1MD3BIUJikyZG23ik-wXrAIUafNXAeN81NJ79RbOphANOxLPet4QYYhUKILm9Mm~andG0tIqAOCTIHLPv8uTNRYDtq5u6AK4607c44IxWdbdrmUVsvnzeP7UacqmJ0C-7~qxo6G4vB0G5dBPQL5Cw__",
  "https://s3-alpha-sig.figma.com/img/42a5/b175/67faa2448a9fcb44ecfafc4c0ec3f915?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=R8wWAs-ksAmvrh9E~mgaD2Fu7h0wqONG4Ie5l3oVL5Ly6CUSZ434z1g4jeP1KeRPNicNGa9ffSpw6lgAr11gmGXk3PT0aqsCgmkl18-ek6AKk-K72zZZX931hiGXPainsz73qPypVK8N-1Ekyka9ufM2xKhpquAPvEhVBhxGq4B3VFRrx0WJmUFnJWRhRnJZ0uO8AW4Jp0CVWiUtfRRnZLseO3TWqC-1VfTwVa9to57Vf3MlvRF6YDnn2SwADkIwVD4zCXRqgNiZemity93u8kwe9klrUnHtDE6c3pC7EX0L308Us~tTB7SwaiLFqsrUbJNnmnzQdxXUd-YRPYDF5w__",
  "https://s3-alpha-sig.figma.com/img/dcaa/17a7/ac66879b75155247f8e31f8b331633f0?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=aGX0BcaNHK9TJz~8sOqikOY7xW0IXJzALxyI~TYEBvlvhuOtZQFQXGofYGBooM8GU6RWDrE5sCTab0OKH6gabRBhUKs8HuQOpqN0QRbOwx~QFKDQ72CgVKIurBnMFI-7FoaiMqBMZMRjyczvPcDpE8fK8OrSYhf8J6QV90uxg1~ZsBh8g2xNU5IUTGtb~ZjRivmveIxtK~VKCJy7rczMQsiPklruXCZr-eHT4l~LpknUYJ~nidk4-g2k~Iunc6eL5LLj6eNFv5FoIOTYgr5m51xmqKuM~GrY4KxTIPzXU0RtvW3imCnevwfL34-1XVz--VlSC6~-VSLGiqsVutkjYg__",
  "https://s3-alpha-sig.figma.com/img/76c2/13ff/e0043e91290cfba5f3a5e30cdd8cdc08?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YXkyRVagAnAmhCKgZCDAd2SrCr9wmBxWw5vC7cMho2IF5e2PcnujqGj6GbmoDBh0uN6JzcWxDf4S0qCyiC8Yze6myt7lD4ktrUXkOnHWm1DHkDXWSFyoK5aiG~Xqkob6YTNgyUY6NS05I-xrOao0VnGAq3wfD~jn~vdrP9LYvWmV~yJBwD9kyLwTiG5G~Q4yDBvYTiwr8KNQlmJFW~57fY-qhW5aVhkO8LI08C3xhzIDgwaJgooo649GHtBRgoRW8cdxHJnMjfw88qTwDXbNWEnp0xikLW8qaHSeZID8nNaCsv0oKHAk6xoS-B6nmg8v~NJNW4c1N~G7WJkyq8fY3w__",
  "https://s3-alpha-sig.figma.com/img/a795/951f/6395896e575b5f1f1b058adb5f4af654?Expires=1725840000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=I9~BC6RB42HYvIh7yWq9lDVfGIqEfxDjO8pgigPjnvVEFhIJycYdue1mA2oGILQWseZJq-A0rbNIlLQT4PDqtSfTKxz5Nqo1N8yrFLPnhg50hZkisjWDZ1iJN3i2DSmNo0zk6LmKvPCWVyBoeKZnsBgVqlRumEcZvGRNxJK1jBA6OgAvBt533MtmWf9djM2SDZF3sjhgz0ofN5zrF4w9gBOeG4j2prp48WlDVTpmtk1JjhQFjv5M70MdBuGcIhKCCPX--0shNx1Rz5gWW~wM3wKSWpigWCK--LQc1qpM055ta-3sb5LiJFKYT1jSGgkJJXKwk5pE4We0uQsSN0ePRg__"  
]

const handleDeleteClick=(obj)=>{
  let arr4 = props.fieldsToBeRender?.filter((field,i)=>field != obj)
  props.setFieldsToBeRender(arr4)
  props.setSmileyRating(null)
}

const handleSmileyClick=(smiley)=>{
  let smileyRatings = []
    for(let i=1; i<=smiley; i++){
      smileyRatings.push(i)
    }
    props.setSmileyRating(smileyRatings)
}

  return (
    <div className='number_ratings_area'>
      <p>What is your opinion of this page?</p>
      <div className='star_ratings'>
      {smileyarr?.map((star,i)=><img className={`${props.smileyRating?.includes(i+1) ? "active_star_imgs" : "not_active_star_imgs"}`} src={star} alt='img' onClick={()=>handleSmileyClick(i+1)} />)}
      </div>
      <div className='edit_delete_number_btns'>
        <MdEdit size={20} />
        <MdDelete size={20} onClick={()=>handleDeleteClick("SmileyRating")} />
      </div>
    </div>
  )
}

export const SingleLineInput = (props) => {

  const handleDeleteClick=(obj)=>{
    let arr5 = props.fieldsToBeRender?.filter((field,i)=>field != obj)
    props.setFieldsToBeRender(arr5)
    props.setSingleLineInput(null)
  }

    return (
      <div className='number_ratings_area'>
      <p>Do you have any suggestions to improve our website?</p>
      <div className='single_input'>
        <input type='text' onChange={(e)=>props.setSingleLineInput(e.target.value)} />
      </div>
      <div className='edit_delete_number_btns'>
        <MdEdit size={20} />
        <MdDelete size={20} onClick={()=>handleDeleteClick("SingleLineInput")} />
      </div>
    </div>
    )
}

export const RadioButton = (props) => {

  const handleDeleteClick=(obj)=>{
    let arr6 = props.fieldsToBeRender?.filter((field,i)=>field != obj)
    props.setFieldsToBeRender(arr6)
    props.setRadioButton(null)
  }

    return (
      <div className='radio_ratings_area'>
        <p>Multiple choice-1 answer</p>
        <div className='radio_buttons'>
          <div className='radio_option'>
          <input type='radio' name="radio_rating" onClick={()=>props.setRadioButton("Radio 1")} />Radio 1
          </div>
          <div className='radio_option'>
          <input type='radio' name="radio_rating" onClick={()=>props.setRadioButton("Radio 2")} />Radio 2
          </div>
          <div className='radio_option'>
          <input type='radio' name="radio_rating" onClick={()=>props.setRadioButton("Radio 3")} />Radio 3
          </div>
        </div>
        <div className='edit_delete_number_btns'>
          <MdEdit size={20} />
          <MdDelete size={20} onClick={()=>handleDeleteClick("RadioButton")} />
        </div>
      </div>
    )
}

export const Categories = (props) => {
  let categoriesArr = ["Bug", "Content", "Other"]

  const handleDeleteClick=(obj)=>{
    let arr7 = props.fieldsToBeRender?.filter((field,i)=>field != obj)
    props.setFieldsToBeRender(arr7)
  }

    return (
      <div className='number_ratings_area'>
      <p>Pick a subject and provide your feedback:</p>
      <div className='categories'>
        {categoriesArr?.map((data,i)=><div className={`${props.categories == data ? "active_category" : "not_active_category"}`} onClick={()=>props.setCategories(data)}>
          {data}
      </div>)}
    </div>
      <div className='edit_delete_number_btns'>
          <MdEdit size={20} />
          <MdDelete size={20} onClick={()=>handleDeleteClick("Categories")} />
        </div>
      </div>
    )
}



