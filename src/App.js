import React from 'react';
import {TodoInput} from "./components/TodoInput";
import {TodoList} from "./components/TodoList";
import {connect} from "react-redux";
import {addTodo} from "./store/actions";

function App (props){
        return (
            <div>
                <h1>TodoList</h1>
                <TodoInput add={props.addTodo} />
                <TodoList items={props.items}/>
            </div>
        )

}

const mapStateToProps = state => {
    return {
        items: state
    }
};

const mapDispatchToProps = dispatch => {
    return {
        addTodo: (text) => {
            dispatch(addTodo(text))
        }
    }
};


export default connect(mapStateToProps, mapDispatchToProps)(App);













































































// import {connect} from "react-redux";
// import {addTodo, deleteTodo} from "./store/actions";
//
//
// function App(props) {
// //     const[inputText, changeInputText] = useState('');
// //   return (
// //     <div className="App">
// //       <header className="App-header">
// //         <h2>TodoList</h2>
// //           <input type="text" value={inputText}
// //             onChange={(e) => changeInputText(e.target.value)}
// //           />
// //
// //           <button
// //               onClick={() =>
// //               {props.addTodo(inputText);
// //                   changeInputText('')}}>AddTodo</button>
// //           <div>
// //               {props.todos}
// //           </div>
// //
// //       </header>
// //     </div>
// //   );
// // }
// // const mapStateToProps = state => {
// //     return {
// //         todos: state
// //     }
// // };
// // const mapDispatchToProps = dispatch => {
// //     return {
// //         addTodo: () => {
// //             dispatch(addTodo())
// //         },
// //         deleteTodo: () => {
// //             dispatch(deleteTodo())
// //         }
// //     }
// // };
// //
// // export default connect(mapStateToProps, mapDispatchToProps)(App);
