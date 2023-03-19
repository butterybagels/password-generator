import {useState} from "react";
import './PasswordGenerator.css'

export default function PasswordGeneratorContainerComponent() {

    const [generatedPassword, setGeneratedPassword] = useState("")
    function handleGenerate() {
        console.log('Generating...')
    }

    function includeUppercase() {
        return 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'
    }

    function includeLowercase() {
        return 'abcdefghijklmnopqrstuvwxyz'
    }

    function includeNumber() {
        return '0123456789'
    }

    function includeSpecialCharacter() {
        return '!@#$%^&*()'
    }

    function generatePassword(e, desiredLength, useUppercase, useLowercase, useNumbers, useSpecialCharacters) {

        e.preventDefault();

        let generatedPassword = ""
        let complexityCharacters = ""

        if (useUppercase) complexityCharacters += includeUppercase()

        if (useLowercase) complexityCharacters += includeLowercase()

        if (useNumbers) complexityCharacters += includeNumber()

        if (useSpecialCharacters) complexityCharacters += includeSpecialCharacter()

        for (let i = 0; i < desiredLength; i++) {
            let passwordCharacter = complexityCharacters.charAt(Math.floor(Math.random() * complexityCharacters.length))

            generatedPassword += passwordCharacter
        }

        console.log(generatedPassword)
        return generatedPassword
    }

    return (
        <div className="container">
            <div className="generator-container">
                <form>
                    <input type="text" value={generatedPassword} onChange={handleGenerate} disabled={true}/>
                    <button className="btn btn-info">Copy</button><br />
                    <input className="form-range" type="range" min="4" max="20" step="1" defaultValue="12"/>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-uppercase"/>*/}
                        <label className="form-check-label" htmlFor="use-uppercase">Use uppercase letters <input className="form-check-input" type="checkbox" id="use-uppercase" onChange={handleUppercaseSelected}/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-lowercase"/>*/}
                        <label className="form-check-label" htmlFor="use-lowercase">Use lowercase letters <input className="form-check-input" type="checkbox" id="use-lowercase" onChange={handleLowercaseSelected}/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-numbers"/>*/}
                        <label className="form-check-label" htmlFor="use-numbers">Use numbers <input className="form-check-input" type="checkbox" id="use-numbers" onChange={handleNumbersSelected}/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-special-characters"/>*/}
                        <label className="form-check-label" htmlFor="use-special-characters">Use special characters <input className="form-check-input" type="checkbox" id="use-special-characters" onChange={handleSpecialCharactersSelected}/></label>
                    </div>

                    <button className="btn btn-info" onClick={(e) => generatePassword(e, 20, false, true, false, true)}>Generate</button>
                </form>
            </div>
        </div>
    )
}