import React from 'react'

const Intro = () => {
    return (
        <div className='Intro'>
            <div className='Picture'>
                <img src={require('../../assets/MyPic.jpg')} alt='12' />
            </div>
            <div className='Introduction'>
                <h1 style={{ color: 'orangered' }}>
                    WELCOME TO MY PROFILE
                </h1>
                <p style={{ fontSize: 'X-Large', color: 'black' }}>This is Ibtihaj Saleem a BS-Comuter Science studnet at Hamdard University.</p>
                <p style={{ fontSize: 'X-Large', color: 'black' }}>Currently a Development Intern at 3Const Pvt (ltd). </p>
            </div>
        </div>
    )
}

export default Intro
