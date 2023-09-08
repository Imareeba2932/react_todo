import React from 'react'

const Eventhandling = () => {
    const handleClick = () => {
        alert('button was clicked!!')
    }

    return (
        <div>
          <button onClick={handleClick}>Click me</button>
          <input
          type="color"
          className="mt-5"
          onChange={(e) => {
            console.log(e.target.value);
            document.body.style.background = e.target.value;
          }}
        />
        </div>
      );
    }


export default Eventhandling