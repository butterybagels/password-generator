export default function GeneratePasswordButtonComponent (props) {
    return (
        <>
            <button onClick={(e) => props.generatePassword(e, props.length, props.useUppercase, props.useLowercase, props.useNumbers, props.useSpecialCharacters)}>Generate</button>
        </>
    )
}