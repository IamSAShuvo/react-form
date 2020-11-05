import React from 'react'

function name(proms){
    console.log(proms);
    function say(value){
        alert(value)
    }
    return(
        <div>
            <button onClick = {say.bind(this,"You can exit by clicking ok")}>Click Here</button>
            <h1> Hi, I am {proms.name}, age {proms.age} </h1>
            {proms.children}
        </div>
    )
}

export default name