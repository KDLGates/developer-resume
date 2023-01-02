import React from 'react'

export default function Header(props) {

    return (
        <header className="app-header">
            <div className="heading__title">
                <h1>Kristopher Gates</h1>
                <h2>Software Developer</h2>
            </div>
            <div className="flexcols spacearound">
                <a href="./downloads/Kristopher-Gates-Resume.pdf" download>
                    <button id="downloadbutton">Download Resume PDF</button>
                </a>
                <form id="theme-picker">
                        Color Theme
                        <label><input type="radio" id="select-offwhite" name="theme" onChange={() => props.switchTheme('offwhite')}
                       checked={props.theme === 'offwhite'} /> Light</label>
                        <label><input type="radio" id="select-blue" name="theme" onChange={() => props.switchTheme('blue')}
                        checked={props.theme === 'blue'} /> Blue</label>
                </form>
            </div>
        </header>
    )
}
