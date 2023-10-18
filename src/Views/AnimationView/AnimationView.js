import React, { Component } from 'react';
import './AnimationView.scss'
import Button from '../../components/Button/Button'
import { Player } from '@lottiefiles/react-lottie-player';
import SearchLottie from '../../lottie/search.json'
import EmailLottie from '../../lottie/email_lock.json'
import ErrorLottie from '../../lottie/error.json'
import Email from '../../lottie/email.json'
class AnimationView extends Component {

    render() { 
        return ( 
            <div className='mainView'>
                 <h1>Lottie Files</h1>
                <small className='h3'>Click 'Download' to download a .json lottie file</small>
            <div className='animView'>
               
                <div className='animCard'>
                    <Player
                        autoplay
                        loop
                        src={EmailLottie}
                        style={{ height: '100px', width: '100px' }}
                        >
                    </Player>
                    <a href={'/lottie/search.json'} download="search.json"><Button text="Download"/></a>
                </div>

                <div className='animCard'>
                    <Player
                        autoplay
                        loop
                        src={SearchLottie}
                        style={{ height: '100px', width: '100px' }}
                        >
                    </Player>
                    <a href={'/lottie/email_lock.json'} download="email_lock.json"><Button text="Download"/></a>
                </div>

                <div className='animCard'>
                    <Player
                        autoplay
                        loop
                        src={ErrorLottie}
                        style={{ height: '100px', width: '100px' }}
                        >
                    </Player>
                    <a href={'/lottie/error.json'} download="error.json"><Button text="Download"/></a>
                </div>

                <div className='animCard'>
                    <Player
                        autoplay
                        loop
                        src={Email}
                        style={{ height: '100px', width: '100px' }}
                        >
                    </Player>
                    <a href={'/lottie/email.json'} download="email.json"><Button text="Download"/></a>
                </div>

                
                

            </div>
            </div>
         );
    }
}
 
export default AnimationView;