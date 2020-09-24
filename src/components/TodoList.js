import React from 'react';

export function TodoList(props) {
    return(
       <ul>
           {
                   props.items.map(item => {
                       return <li key={item.id}>{item.text}</li>
                   })
           }
       </ul>
    )
}