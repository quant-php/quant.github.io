import React from 'react';

function BackButton () {

    return (
        <div style={{width:"100%", textAlign:"right"}}><a style={{textDecoration:"underline"}} onClick={() => history.go(-1)} href="#">Back</a></div>
    );

}

export {BackButton};