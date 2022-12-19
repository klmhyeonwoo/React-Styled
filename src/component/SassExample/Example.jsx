import React from 'react'
import './Exmaple.scss';

export default function Example() {
    return (
        <div className>
            <p>Example</p>
            <p className="font">Example</p>
            <nav>
                <ul>
                    <li>123</li>
                    <li>
                        <a href='www.naver.com'>456</a>
                    </li>
                </ul>
            </nav>
            <ul>
                <li>123</li>
                <li>
                    <a href='www.naver.com'>456</a>
                </li>
            </ul>
            <p className='base'>Hello</p>
            <p className='inverse'> import base color with inverse</p>

            <p className='info'>info</p>
            <p className='alert'>alert</p>
            <p className='success'>success</p>


            <p className='message2'>message</p>
            <p className='success2'>success</p>
            <p className='error2'>error</p>
            <p className='warning2'>warning</p>

            <div className='square-av'>square-av</div>
            <div className='circle-av'>circle-av</div>

            <div className='sidebar'>side-bar</div>

            <div className='gray'>gray</div>
            <div className='button'>button</div>
            <div className='pulse'>pulse</div>
        </div>
    )
}
