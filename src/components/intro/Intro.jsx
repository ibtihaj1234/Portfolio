import React from 'react'

const Intro = () => {
    return (
        <div className='Intro'>
            <div style={{lineHeight:1.5}}>
                <h1 className='typed-text' style={{ color: 'orangered' }}>
                    WELCOME TO MY PROFILE
                </h1>
            </div>
            <div className='Picture'>
                <img src={require('../../assets/MyPic.jpg')} alt='12' />
            </div>
            <div className='Introduction'>
                <p style={{ fontSize: 'X-Large', color: 'black' }}>This is Ibtihaj Saleem a BS-Comuter Science studnet at Hamdard University.</p>
                <p style={{ fontSize: 'X-Large', color: 'black' }}>Currently a Development Intern at 3Const Pvt (ltd). </p>
            </div>
        </div>
    )
}

export default Intro
