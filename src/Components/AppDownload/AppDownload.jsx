import React from 'react'
import "./AppDownload.css"
import play_store from '../../assets/assets/frontend_assets/play_store.png'
import app_store from '../../assets/assets/frontend_assets/app_store.png'
const AppDownload = () => {
  return (
    <div className='AppDownload' id='AppDownload'>
        <p>For Better Experience <br/> Tomato App </p>
        <div className="app-download-platforms">
            <img src={play_store} alt='image' />
            <img src={app_store} alt='image' />
        </div>
    </div>
  )
}

export default AppDownload