import React from "react";

const Input = (props) => {
    const {id,label, error, onChange,type} = props
    return(
        <div className={"mb-3"}>
            <label htmlFor={id} className='form-label fw-bolder text-dark fs-6 mb-3'>{label}</label>
            <input
                id={"username"}
                className={error ? "form-control is-invalid" : "form-control bg-transparent"}
                onChange={onChange}
                type={type}
            />
            <div className={"invalid-feedback"}>{error}</div>
        </div>
    )
}

export default Input;