export default function GeneratePasswordButtonComponent (props) {
    return (
        <>
            <button className="btn btn-info" onClick={(e) => props.generatePassword(e, props.length, props.useUppercase, props.useLowercase, props.useNumbers, props.useSpecialCharacters)}>Generate</button>
        </>
    )
}