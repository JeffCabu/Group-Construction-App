import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

const style = {
  container: {
    border: '1px solid black'
  },
  card: {
    width: '50vw'
  },
  butlin: {
    padding: 0
  },
  link: {
    color: 'black',
    width: 88,
    height: 36,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  inputField: {
    width: '99%'
  }
}

const DeveloperLoginForm = ({id, handleChange, loginDeveloper}) => {
  return (
    <form style={style.container}>
      <div style={style.card}>
        <card raised='true'>
          <h3>
            Email:
          </h3>
          <input style={style.inputField} type='text' onChange={handleChange} placeholder='Email' id='developerEmail' />
        </card>
        <card>
          <h3>
            Password:
          </h3>
          <input style={style.inputField} type='text' onChange={handleChange} id='developerPassword' placeholder='password' />
        </card>
      </div>
      <div style={style.button}>
        <button raised onClick={loginDeveloper}>Login</button>
        <button style={style.butlin} raised><Link style={style.link} to='/developer-sign-up'>Sign up</Link></button>
      </div>
    </form>
  )
}

DeveloperLoginForm.propTypes = {
  id: PropTypes.object,
  handleChange: PropTypes.func.isRequired,
  loginDeveloper: PropTypes.func.isRequired
}
export default DeveloperLoginForm
