import {useState} from "react";
import './PasswordGenerator.css'

export default function PasswordGeneratorContainerComponent() {

    const [generatedPassword, setGeneratedPassword] = useState("")
    const [complexityOptions, setComplexityOptions] = useState({
        length: 12,
        useUppercase: false,
        useLowercase: false,
        useNumbers: false,
        useSpecialCharacters: false
    })

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

    function handleCopy(e) {
        e.preventDefault()
        navigator.clipboard.writeText(generatedPassword)
        setGeneratedPassword("")
    }

    function handleLength(e) {
        setComplexityOptions((prevState) => ({
            ...prevState,
                length: e.target.value
        }))
    }

    function handleUppercaseSelected(e) {
        setComplexityOptions((prevState) => ({
            ...prevState,
            useUppercase: e.target.checked
        }))
    }

    function handleLowercaseSelected(e) {
        setComplexityOptions((prevState) => ({
            ...prevState,
            useLowercase: e.target.checked
        }))
    }

    function handleNumbersSelected(e) {
        setComplexityOptions((prevState) => ({
            ...prevState,
            useNumbers: e.target.checked
        }))
    }

    function handleSpecialCharactersSelected(e) {
        setComplexityOptions((prevState) => ({
            ...prevState,
            useSpecialCharacters: e.target.checked
        }))
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

        setGeneratedPassword(generatedPassword)
    }

    return (
        <div className="container">
            <div className="generator-container">
                <form>
                    <input type="text" value={generatedPassword} disabled={true}/>
                    <button className="btn btn-info" onClick={(e) => handleCopy(e)}>Copy</button><br />
                    <input className="form-range" type="range" min="4" max="20" step="1" defaultValue={complexityOptions.length} onChange={(e) => handleLength(e)}/>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-uppercase"/>*/}
                        <label className="form-check-label" htmlFor="use-uppercase">Use uppercase letters <input className="form-check-input" type="checkbox" id="use-uppercase" onChange={(e) => handleUppercaseSelected(e)}/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-lowercase"/>*/}
                        <label className="form-check-label" htmlFor="use-lowercase">Use lowercase letters <input className="form-check-input" type="checkbox" id="use-lowercase" onChange={(e) => handleLowercaseSelected(e)}/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-numbers"/>*/}
                        <label className="form-check-label" htmlFor="use-numbers">Use numbers <input className="form-check-input" type="checkbox" id="use-numbers" onChange={(e) => handleNumbersSelected(e)}/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-special-characters"/>*/}
                        <label className="form-check-label" htmlFor="use-special-characters">Use special characters <input className="form-check-input" type="checkbox" id="use-special-characters" onChange={(e) => handleSpecialCharactersSelected(e)}/></label>
                    </div>

                    <button className="btn btn-info" onClick={(e) => generatePassword(e, complexityOptions.length, complexityOptions.useUppercase, complexityOptions.useLowercase, complexityOptions.useNumbers, complexityOptions.useSpecialCharacters)}>Generate</button>
                </form>
            </div>
        </div>
    )
}