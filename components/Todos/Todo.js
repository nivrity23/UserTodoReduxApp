import React from 'react'
import { connect } from 'react-redux'
import { removeTodo } from '../../actions/todoAction';

function Todo(props) {
    const editUser = () => {
        props.setModalContent(props.todo.id, props.todo.action, props.todo.date)
    }

    return (
        <>
            <div className='user-list'>
                <span className='nameStyle'>{props.todo.action}</span>
                <span className='actionLinks'>
                    <a href='/#' onClick={editUser}>Edit</a> | <a href='/#' onClick={() => props.removeTodo(props.todo.id)}>Delete</a>
                </span>
            </div>
            <hr />
        </>
    )
}

const mapStateToProps = state => {
    return state;
}


export default connect(mapStateToProps, { removeTodo })(Todo);
