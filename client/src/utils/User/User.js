import axios from 'axios'

const User = {
  register: user => axios.post('/api/users/register', user),
  login: user => axios.post('/api/users/login', user),
  info: () => axios.get('/api/users', {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),
  editProfile: user => axios.put(`/api/user`, user, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  }),
  profileInfo: id => axios.get(`/api/users/${id}`, {
    headers: {
      Authorization: `Bearer ${localStorage.getItem('user')}`
    }
  })
}

export default User