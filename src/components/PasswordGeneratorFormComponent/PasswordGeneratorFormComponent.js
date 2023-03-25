import {useState} from "react";
import PasswordDisplayFieldComponent from "../PasswordDisplayFieldComponent/PasswordDisplayFieldComponent";
import PasswordComplexityOptionsComponent
    from "../PasswordComplexityOptionsComponent/PasswordComplexityOptionsComponent";
import GeneratePasswordButtonComponent from "../GeneratePasswordButtonComponent/GeneratePasswordButtonComponent";

export default function PasswordGeneratorFormComponent() {

    const [generatedPassword, setGeneratedPassword] = useState("")
    const [complexityOptions, setComplexityOptions] = useState({
        length: 12,
        useUppercase: false,
        useLowercase: false,
        useNumbers: false,
        useSpecialCharacters: false
    })

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
        <form>
            <PasswordDisplayFieldComponent
                generatedPassword={generatedPassword}
                handleCopy={handleCopy}
                length={complexityOptions.length}
                handleLength={handleLength}/>
            <PasswordComplexityOptionsComponent
                length={complexityOptions.length}
                handleUppercaseSelected={handleUppercaseSelected}
                handleLowercaseSelected={handleLowercaseSelected}
                handleNumbersSelected={handleNumbersSelected}
                handleSpecialCharactersSelected={handleSpecialCharactersSelected}/>
            <GeneratePasswordButtonComponent
                generatePassword={generatePassword}
                length={complexityOptions.length}
                useUppercase={complexityOptions.useUppercase}
                useLowercase={complexityOptions.useLowercase}
                useNumbers={complexityOptions.useNumbers}
                useSpecialCharacters={complexityOptions.useSpecialCharacters}/>
        </form>
    )
}