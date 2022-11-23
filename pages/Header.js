import React from 'react'
import useLocalStorage from 'use-local-storage';

export default function Header(props) {

    return (
        <header className="app-header">
            <h1>
                Kristopher Gates, Aspiring Software Developer
            </h1>
            <form id="theme-picker">
                    Select color theme: 
                    <label><input type="radio" id="select-red" name="theme" onChange={() => props.switchTheme('red')}
                    checked={props.theme === 'red'} /> Red</label>
                    <label><input type="radio" id="select-blue" name="theme" onChange={() => props.switchTheme('blue')}
                    checked={props.theme === 'blue'} /> Blue</label>
            </form>
        </header>
    )
}
