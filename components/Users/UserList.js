import React, { useState } from 'react'
import Modal from '../Modal/ModalComponent'
import Users from './Users'
import Spinner from '../layout/Spinner'
import { connect } from 'react-redux';
import { addUser, updateUser } from '../../actions/userAction';

function UserList({ users: { users }, addUser, updateUser, loading, handleChange }) {
    const [show, setShow] = useState(false)
    const [name, setName] = useState('')
    const [email, setEmail] = useState('')
    const [id, setUserId] = useState('')
    const [createUserToggle, setCreateUserToggle] = useState(false)

    const showHideClassName = show ? "modal display-block" : "modal display-none";

    const setModalContent = (id, username, mail) => {
        setShow(true);
        setCreateUserToggle(false);
        setName(username);
        setEmail(mail);
        setUserId(id);
    }

    const openModal = () => {
        setShow(true);
        setCreateUserToggle(true);
    }

    function addNewUser() {
        const userId = users.length + 1;
        handleChange(true);
        setTimeout(() => {
            addUser({ id: userId, name, email });
            handleChange(false);
        }, 2000)
        removeUserData();
    }

    const removeUserData = () => {
        setShow(false);
        setName('');
        setEmail('');
        setUserId('');
    }

    const editExistingUser = () => {
        setCreateUserToggle(false);
        updateUser({ id, name, email });
        removeUserData();
    }

    return (
        <div>
            <button onClick={openModal} className='createBtn'>Create User</button>
            <Modal show={show} showHideClassName={showHideClassName}>
                <span className='close' onClick={removeUserData}>&times;</span>
                <label >Name :</label>
                <input value={name} onChange={(e) => setName(e.target.value)} />
                <br />
                <label>Email :</label>
                <input value={email} onChange={(e) => setEmail(e.target.value)} />
                <br />
                {createUserToggle ? <button onClick={() => addNewUser()}>Add User</button> : <button onClick={editExistingUser}>Edit User</button>}
                <button onClick={removeUserData}>Cancel</button>
            </Modal>
            {loading ? <Spinner /> : (
                <div className='user'>
                    <div className='user-header'>
                        <span>Name</span>
                        <span>Action</span>
                    </div>
                    <hr className='hr' />
                    {users.map(item => <Users user={item} key={item.id} setModalContent={setModalContent} />)}
                </div>
            )}
        </div>
    )
}

const mapStateToProps = state => {
    return state;
}

const mapDispatchToProps = {
    addUser, updateUser
}


export default connect(mapStateToProps, mapDispatchToProps)(UserList);
