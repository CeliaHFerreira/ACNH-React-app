import React from 'react';

export default function CheckDaily({ image, ...props }) {
    return (
        <div>
            <label className="fancy-checkbox-label">
                <input key={props.id} onChange={props.handleCheckChildElement} type="checkbox" checked={props.isChecked} value={props.value} />
                <span className="fancy-checkbox fancy-checkbox-img"></span>
                <img className="image-check" src={image} alt={image} />
            </label>
        </div>
    )
}


