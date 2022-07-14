import React from "react"

import { GoogleOutlined} from '@ant-design/icons'

import firebase from "firebase/app"

import { auth } from "../firebase"

export default function Login() {
  return (
    <div id='login-page'>
      <div id='login-card'>
        <h2>Fackbook page Integration</h2>
        <div id='logox'>
        <div
          className='login-button google'
          onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Connect Page
        </div>
        </div>

        <br/><br/>

        {/* <div
          className='login-button facebook'
          onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div> */}
      </div>
    </div>
  )
}
