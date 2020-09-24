import React, {useState} from 'react';


export function TodoInput(props) {
    const [inputText, changeInputText] = useState('');



    function handleChange(e) {
            changeInputText(e.target.value)
    }


    function handleSubmit(e) {
        e.preventDefault();
        props.add(inputText)
    }



        return(
            <div>
                    <input type="text"
                        value={inputText}
                        placeholder="Just type Something"
                        onChange={handleChange}
                    />

                        <button
                        onClick={handleSubmit}
                        >Submit
                        </button>
            </div>
    )
}