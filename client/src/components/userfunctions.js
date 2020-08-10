import axios from 'axios';

export const subscribe = newUser => {
  return axios
    .post('users/subscribe', {
      first_name: newUser.first_name,
      last_name: newUser.last_name,
      email: newUser.email
    })
    .then(res => {
      console.log('Subscribed!')
    })
}
