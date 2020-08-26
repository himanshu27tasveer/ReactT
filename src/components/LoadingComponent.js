import React from 'react';


export const Loading = () => {
    return (
        <div className="col-12" style={{ marginTop: "50%" }}>
            <span className="fa fa-spinner fa-pulse fa-3x fa-fw text-primary"></span>
            <p>Please wait while loading . . .</p>
        </div>
    );
}