import React from "react";

export const PageSpinner = () => {
    return (
        <div className="text-center mt-5 pt-5">
            <div className="spinner-border" role="status" data-testid="spinner">
                <span className="sr-only">Loading...</span>
            </div>
        </div>
    );
}