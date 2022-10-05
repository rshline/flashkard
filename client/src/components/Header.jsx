import { FaSignOutAlt } from 'react-icons/fa'
import { useNavigate } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux'
import { logout, reset } from '../features/auth/authSlice'

function Header() {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const { user } = useSelector((state) => state.auth)

  const onLogout = () => {
    dispatch(logout())
    dispatch(reset())
    navigate('/')
  }

  return (
    <header>
        <a href="/" className='nav-brand'>Flashkard</a>
        <div>
          {user ? (
            <button className='btn' onClick={onLogout}>
              <FaSignOutAlt /> Logout
            </button>
          ) : (
            <></>
          )}
        </div>
    </header>

  )
}

export default Header
