import React, { useState } from 'react'
import { AiOutlinePlus } from 'react-icons/ai'
import { AiOutlineMinus } from 'react-icons/ai'

export default function Item(props) {
    
    const [showInfo, setShowInfo] = useState(false);

    const clickHandler = () => {
        setShowInfo(!showInfo);
    }

    return (
        <div className='item'>
            <div className='header'>
                <h5 className='m-0 p-0'>{props.title}</h5>
                <button onClick={clickHandler} className='btn btn-dark'>
                    {
                        showInfo ? <AiOutlineMinus /> : <AiOutlinePlus />
                    }
                </button>
            </div>
            <p>
                {
                    showInfo && props.info
                }
            </p>
        </div>
    )
}