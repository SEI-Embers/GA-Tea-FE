import { useEffect } from 'react'
import { signOut } from '../services/users.js'
import { useNavigate } from 'react-router-dom'

export default function SignOut = (props) => {
  const { setUser } = props
  const navigate = useNavigate()

  useEffect(() => {
    const signOutUser = async () => {
      await signOut()
      setUser(null)
      navigate('/')
    }
    signOutUser()
  }, [navigate, setUser])

  return ''
}
