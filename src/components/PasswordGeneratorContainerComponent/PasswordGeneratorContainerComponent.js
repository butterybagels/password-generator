import {useState} from "react";
import './PasswordGenerator.css'

export default function PasswordGeneratorContainerComponent() {

    const [generatedPassword, setGeneratedPassword] = useState("")
    function handleGenerate() {
        console.log('Generating...')
    }

    function generateUppercase() {
        const uppercaseLetters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'

        return uppercaseLetters
        // return uppercaseLetters.charAt(Math.floor(Math.random() * uppercaseLetters.length))
    }

    function generateLowercase() {
        const lowercaseLetters = 'abcdefghijklmnopqrstuvwxyz'

        return lowercaseLetters
        // return lowercaseLetters.charAt(Math.floor(Math.random() * lowercaseLetters.length))
    }

    function generateNumber() {
        const numbers = '0123456789'

        return numbers
        // return numbers.charAt(Math.floor(Math.random() * numbers.length))
    }

    function generateSpecialCharacter() {
        const specialCharacters = '!@#$%^&*()'

        return specialCharacters
        // return specialCharacters.charAt(Math.floor(Math.random() * specialCharacters.length))
    }

    function generatePassword(e, desiredLength, useUppercase, useLowercase, useNumbers, useSpecialCharacters) {

        e.preventDefault();

        let generatedPassword = ""
        let complexityCharacters = ""

        if (useUppercase) complexityCharacters += generateUppercase()

        if (useLowercase) complexityCharacters += generateLowercase()

        if (useNumbers) complexityCharacters += generateNumber()

        if (useSpecialCharacters) complexityCharacters += generateSpecialCharacter()


        // Loop through desired length
        for (let i = 0; i < desiredLength; i++) {
            // let randomCharacter = Math.floor(Math.random(4))

            let passwordCharacter = complexityCharacters.charAt(Math.floor(Math.random() * complexityCharacters.length))

            generatedPassword += passwordCharacter
            // switch (randomCharacter) {
            //     case 0:
            //         let uppercaseLetter = generateUppercase()
            //         generatedPassword += uppercaseLetter
            //         break;
            //     case 1:
            //         let lowercaseLetter = generateLowercase()
            //         generatedPassword += lowercaseLetter
            //         break;
            //     case 2:
            //         let number = generateNumber()
            //         generatedPassword += number
            //         break;
            //     case 3:
            //         let specialCharacter = generateSpecialCharacter()
            //         generatedPassword += specialCharacter
            //         break;
            //     default:
            //         break;
            // }
        }

        console.log(generatedPassword)
        return generatedPassword
        // Choose randomly from letter, number or character
        // Append to generated password string
        // Return generated password string
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
                        <label className="form-check-label" htmlFor="use-uppercase">Use uppercase letters <input className="form-check-input" type="checkbox" id="use-uppercase"/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-lowercase"/>*/}
                        <label className="form-check-label" htmlFor="use-lowercase">Use lowercase letters <input className="form-check-input" type="checkbox" id="use-lowercase"/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-numbers"/>*/}
                        <label className="form-check-label" htmlFor="use-numbers">Use numbers <input className="form-check-input" type="checkbox" id="use-numbers"/></label>
                    </div>

                    <div className="form-check form-switch">
                        {/*<input className="form-check-input" type="checkbox" id="use-special-characters"/>*/}
                        <label className="form-check-label" htmlFor="use-special-characters">Use special characters <input className="form-check-input" type="checkbox" id="use-special-characters"/></label>
                    </div>

                    <button className="btn btn-info" onClick={(e) => generatePassword(e, 20, false, true, false, true)}>Generate</button>
                </form>
            </div>
        </div>
    )
}