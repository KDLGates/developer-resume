import React from 'react'

export default function Header(props) {

    return (
        <header className="app-header">
            <h1>
                Kristopher Gates, Software Developer
            </h1>
            <div className="flexcols spacearound">
                <a href="./downloads/Kristopher-Gates-Resume.pdf" download>
                    <button id="downloadbutton">Download Resume PDF</button>
                </a>
                <form id="theme-picker">
                        Color Theme
                        <label><input type="radio" id="select-red" name="theme" onChange={() => props.switchTheme('red')}
                        checked={props.theme === 'red'} /> Red</label>
                        <label><input type="radio" id="select-blue" name="theme" onChange={() => props.switchTheme('blue')}
                        checked={props.theme === 'blue'} /> Blue</label>
                </form>
            </div>
        </header>
    )
}
