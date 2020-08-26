import React from "react";

interface ErrorProps {
    error: string
}
export const Error = ({error}: ErrorProps) => {
    return(
        <p className="text-center text-danger mt-5 pt-5 font-weight-bold" data-testid="error">
            Oops Something went wrong. Please try again. <br/>
            {error}.
        </p>
    ); 
}