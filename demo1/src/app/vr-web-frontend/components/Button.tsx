import React from "react";

export function Button({apiProgress,disabled})
{
    return(
        <button
            type='submit'
            id='kt_sign_in_submit'
            className='btn btn-primary'
            disabled={apiProgress || disabled}
        >
            {apiProgress && <span
                className='indicator-label spinner-border spinner-border-sm'
                aria-hidden={"true"}
            ></span>}
            Continue
        </button>
    )
}