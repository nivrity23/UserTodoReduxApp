import React, { useState } from 'react';
import Todo from './Todo'
import Spinner from '../layout/Spinner'
import { connect } from 'react-redux';
import Modal from '../Modal/ModalComponent'
import { addTodo, updateTodo } from '../../actions/todoAction';

function TodoList({ todos: { todos }, addTodo, updateTodo, loading, handleChange }) {
    const [modal, setModal] = useState(false)
    const [action, setAction] = useState('')
    const [date, setDate] = useState('')
    const [id, setTodoId] = useState('')
    const [createTodoToggle, setCreateTodoToggle] = useState(false)

    const showHideClassName = modal ? "modal display-block" : "modal display-none";

    const setModalContent = (id, actionName, date) => {
        setModal(true);
        setCreateTodoToggle(false);
        setAction(actionName);
        setDate(date);
        setTodoId(id);
    }

    const openModal = () => {
        setModal(true);
        setCreateTodoToggle(true);
    }

    const removeTodoData = () => {
        setModal(false);
        setAction('');
        setDate('');
        setTodoId('');
    }

    const addTodoItem = () => {
        setModal(false);
        const todoId = todos.length + 1;
        let newDate = new Date()
        let date = newDate.getDate() + '-' + newDate.getMonth() + 1 + '-' + newDate.getFullYear();
        handleChange(true);
        setTimeout(() => {
            addTodo({ id: todoId, action, date });
            handleChange(false);
        }, 2000)

        setAction('');
        setDate('');
    }

    const editExistingTodo = () => {
        setCreateTodoToggle(false)
        setModal(false);
        console.log('editTodo-->', id, action, date);
        updateTodo({ id, action, date });
        setAction('');
        setDate('');
        setTodoId('');
    }

    return (
        <div>
            <button onClick={openModal} className='createBtn'>Create Todo</button>
            <Modal show={modal} showHideClassName={showHideClassName}>
                <span className='close' onClick={removeTodoData}>&times;</span>
                <label >Action :</label>
                <input value={action} onChange={(e) => setAction(e.target.value)} />
                <br />
                {createTodoToggle ? <button onClick={addTodoItem}>Add Todo</button> : (<>
                    <label>Date :</label>
                    <input value={date} onChange={(e) => setDate(e.target.value)} />
                    <br />
                    <button onClick={editExistingTodo}>Edit Todo</button></>)}
                <button onClick={removeTodoData}>Cancel</button>
            </Modal>
            {loading ? <Spinner /> : (
                <div className='user'>
                    <div className='user-header'>
                        <span>Name</span>
                        <span>Action</span>
                    </div>
                    <hr className='hr' />
                    {todos.map(item => <Todo todo={item} key={item.id} setModalContent={setModalContent} />)}
                </div>
            )}

        </div>
    )
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { addTodo, updateTodo })(TodoList);
