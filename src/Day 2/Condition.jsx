import React from 'react'

export default function Condition() {
    const isRipe =false;

    let message;
    if (isRipe) {
        message="The fruit is ripe and ready to eat!";
    } else {
        message = "This fruit is not ripe yet.";
    }
  return (
    <div stytle={{textAlign: 'center', marginTop:'50px'}}>
        
        {isRipe?<p>Name</p>:<button>Login</button>}
            
    </div>
  );
}
