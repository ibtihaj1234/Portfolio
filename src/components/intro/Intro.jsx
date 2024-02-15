import React from 'react'
import './style.css'

const Intro = () => {
    return (
        <div className='Intro'>
            <div style={{ lineHeight: 1.5 }}>
                <h1 className='typed-text' style={{ color: 'orangered' }}>
                    WELCOME TO MY PROFILE
                </h1>
            </div>
            <div className='Picture'>
                <img src={require('../../assets/MyPic.jpg')} alt='12' />
            </div>
            <div className='Introduction'>
                <p
                    style={{
                        fontSize: 'X-Large',
                        color: 'black'
                    }}>
                    Hey There!! I am Ibtihaj Saleem a full-stack web-developer. I have learned HTML5, CSS3, JS, PHP, and MySQL from Aptech Learnig Center Pakistan. Right now i am working on React.js as a frontend framework for a company in Pakistan. Griefly want to learn backend frameworks like django and Laravel. Along with it i am working on Mobile app development with React Native framework </p>
            </div>
            <div className='briefing'>
                <div className='heading'>
                    <h1
                        className='typed-text'
                        style={{ color: 'orangered' }}>
                        More About ME</h1>
                </div>
                <div className='Education'>
                    <div className='subhead'>
                        <h1>
                            Education
                        </h1>
                    </div>
                    <div className='content'>
                        <div className='image'>
                            <img
                                className='img'
                                src={require('../../assets/Hamdard.jpeg')}
                                alt='img' />
                        </div>
                        <div className='Contenttxt'>
                            <p
                                style={{
                                    fontSize: 'X-Large',
                                    color: 'black'
                                }} >An undergraduate student of Bachelors Science in Computer Science at Hamdard University Karachi. Undergratuating since 2021 Currently i am a 3rd year student 5th semester student</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Intro
