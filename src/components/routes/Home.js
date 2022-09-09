import React from 'react'
import Banner from '../Banner'
import Style from '../routesStyle/Home.css'

const Home = () => {
    return (
        <>
            <Banner />
            
            <div className='container'>
                <section>
                    <div className='content'>
                        <img src='https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='' />
                    </div>
                    <div className='content-con'>
                        <div className='content-r'>
                            <h2>Title here</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>
                        <div className='content-l'>
                            <img src='https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='' />
                        </div>
                    </div>
                </section>
                <section>
                    <div className='content-con'>
                        <div className='content-l'>
                            <img src='https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80' alt='' />
                        </div>
                        <div className='content-r'>
                            <h2>Title here</h2>
                            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries,</p>
                        </div>

                    </div>
                </section>

            </div>
        </>

    )
}

export default Home