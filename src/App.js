import React from 'react';
import ReactDOM from'react-dom';
// import { Component} from './Component';
import Button from './Button';

const App =()=>{
    return<div>
        <h1>UsefulWebsites</h1>
        <h3> which website do you want o open?</h3>
        <Button name='Google' link='http://google.com'/>
        <Button name='Facebook' link='http://facebook.com'/>
        <Button name='Twitter' link='http://twitter.com'/>
        <Button name='Instagram' link='http://instagram.com'/>
        <Button name='LinkedIn' link='http://linkedin.com'/>
        <Button name='Pinterest' link='http://pinterest.com'/>
        {/* <Button name='Tumblr' link='http://tumblr.com'/> */}
        
        
    </div>
}


export default App;
