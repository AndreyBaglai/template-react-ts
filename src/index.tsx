import './config'
import React from 'react'
import ReactDOM from 'react-dom'
import App from './containers/App'

// normalize and basic styles for application
import 'normalize.css'
import 'antd/dist/antd.css'
import 'bootstrap/dist/css/bootstrap.css';
import 'sources/styles/styles.scss'

ReactDOM.render(<App />, document.getElementById('root'));
