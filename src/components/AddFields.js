import React from 'react';
import '../assets/css/addfields.css';
import { BsTextareaResize } from "react-icons/bs";
import { RiAddLargeLine } from 'react-icons/ri';
import { TiSortNumericallyOutline } from "react-icons/ti";
import { FaRegStar,FaRegSmile } from 'react-icons/fa';
import { PiTextboxThin } from "react-icons/pi";
import { CiBoxList } from "react-icons/ci";
import { TbCategoryMinus } from "react-icons/tb";

const AddFields = () => {
  return (
    <div className='add_fields_comp_blk'>
      <h5>Add fields</h5>
      <div className='all_fields_blk'>
        <div className='fields_sec'>
            <div className='fields_left_blk'>
                <BsTextareaResize style={{marginRight:20}} size={20} />
                <p>Textarea </p>
            </div>
            <RiAddLargeLine size={20} color='#2F4ED7' />
        </div>
        <div className='fields_sec'>
            <div className='fields_left_blk'>
                <TiSortNumericallyOutline style={{marginRight:20}} size={20} />
                <p>Numeric rating </p>
            </div>
            <RiAddLargeLine size={20} color='#2F4ED7' />
        </div>
        <div className='fields_sec'>
            <div className='fields_left_blk'>
                <FaRegStar style={{marginRight:20}} size={20} />
                <p>Star rating </p>
            </div>
            <RiAddLargeLine size={20} color='#2F4ED7' />
        </div>

        <div className='fields_sec'>
            <div className='fields_left_blk'>
                <FaRegSmile style={{marginRight:20}} size={20} />
                <p>Smiley rating </p>
            </div>
            <RiAddLargeLine size={20} color='#2F4ED7' />
        </div>

        <div className='fields_sec'>
            <div className='fields_left_blk'>
                <PiTextboxThin style={{marginRight:20}} size={20} />
                <p>Single line input </p>
            </div>
            <RiAddLargeLine size={20} color='#2F4ED7' />
        </div>

        <div className='fields_sec'>
            <div className='fields_left_blk'>
                <CiBoxList style={{marginRight:20}} size={20} />
                <p>Radio button </p>
            </div>
            <RiAddLargeLine size={20} color='#2F4ED7' />
        </div>

        <div className='fields_sec'>
            <div className='fields_left_blk'>
                <TbCategoryMinus style={{marginRight:20}} size={20} />
                <p>Categories </p>
            </div>
            <RiAddLargeLine size={20} color='#2F4ED7' />
        </div>
        <div className='url_condition'>
            <div className='url_checkbox'>
            <p>Show based on URL conditions</p> <input type="checkbox"
              id="switch"
              className="checkbox" 
            //   onChange={(e)=>(e)} 
            //   checked={true}
            />
              <label for="switch"
                class="toggle">
              </label>
              </div>
            <input type='text' placeholder='http://' />
        </div>
        <div className='url_condition'>
            <div className='url_checkbox'>
            <p>Show on a specific date</p> <input type="checkbox"
              id="push_switch"
              className="push_checkbox" 
              // onChange={(e)=>handleCalendarSync(e)} 
              // checked={googleSyncDisabled === 1}
            />
              <label for="push_switch"
                class="push_toggle">
              </label>
        </div>
        </div>
        <div className='url_condition'>
            <div className='url_checkbox'>
        <p>Show on a specific time</p> <input type="checkbox"
              id="specific_switch"
              className="specific_checkbox" 
              // onChange={(e)=>handleCalendarSync(e)} 
              // checked={googleSyncDisabled === 1}
            />
              <label for="specific_switch"
                class="specific_toggle">
              </label>
              </div>
              </div>
      </div>
    </div>
  )
}

export default AddFields
