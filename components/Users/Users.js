import React from 'react'
import { connect } from 'react-redux'
import { removeUser } from '../../actions/userAction';

function Users(props) {
    const editUser = () => {
        props.setModalContent(props.user.id, props.user.name, props.user.email)
    }

    return (
        <>
            <div className='user-list'>
                <span className='nameStyle'>{props.user.name}</span>
                <span className='actionLinks'>
                    <a href='/#' onClick={editUser}>Edit</a> | <a href='/#' onClick={() => props.removeUser(props.user.id)}>Delete</a>
                </span>
            </div>
            <hr />
        </>
    )
}

const mapStateToProps = state => {
    return state;
}

export default connect(mapStateToProps, { removeUser })(Users);
