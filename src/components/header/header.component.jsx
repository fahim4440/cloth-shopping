import React from 'react';
import { Link } from 'react-router-dom';
import { ReactComponent as Logo } from '../../assets/logo.svg'
import './header.styles.scss';
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';

const Header = ({ currentUser }) => (
    <div className="header">
        <Link className="logo-container" to='/'>
            <Logo className='logo' />
        </Link>
        <div className="options">
            <Link className='option' to='/shops'>
                SHOP
            </Link>
            <Link className='option' to='/about'>
                About
            </Link>
            {
                currentUser ?
                (
                    <div className='option' onClick={async () => {
                        console.log(currentUser)
                        await auth.signOut()
                        console.log(currentUser)
                    }}>SIGN OUT</div>
                ) : (
                    <Link className='option' to='/signin'>SIGN IN</Link>
                )
            }
        </div>
    </div>
)

const mapStatetoProps = state => ({
    currentUser: state.user.currentUser
})

export default connect(mapStatetoProps)(Header);