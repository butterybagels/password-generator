export default function PasswordComplexityOptionsComponent (props) {
    return (
        <>
            <label htmlFor="complexity-length">Password Length: <input type="text" value={props.length} id="complexity-length" name="complexity-length" disabled={true} /></label>
            <div className="form-check form-switch">
                {/*<input className="form-check-input" type="checkbox" id="use-uppercase"/>*/}
                <label className="form-check-label" htmlFor="use-uppercase">Use uppercase letters <input className="form-check-input" type="checkbox" id="use-uppercase" name="use-uppercase" onChange={(e) => props.handleUppercaseSelected(e)}/></label>
            </div>

            <div className="form-check form-switch">
                {/*<input className="form-check-input" type="checkbox" id="use-lowercase"/>*/}
                <label className="form-check-label" htmlFor="use-lowercase">Use lowercase letters <input className="form-check-input" type="checkbox" id="use-lowercase" name="use-lowercase" onChange={(e) => props.handleLowercaseSelected(e)}/></label>
            </div>

            <div className="form-check form-switch">
                {/*<input className="form-check-input" type="checkbox" id="use-numbers"/>*/}
                <label className="form-check-label" htmlFor="use-numbers">Use numbers <input className="form-check-input" type="checkbox" id="use-numbers" name="use-numbers" onChange={(e) => props.handleNumbersSelected(e)}/></label>
            </div>

            <div className="form-check form-switch">
                {/*<input className="form-check-input" type="checkbox" id="use-special-characters"/>*/}
                <label className="form-check-label" htmlFor="use-special-characters">Use special characters <input className="form-check-input" type="checkbox" id="use-special-characters" name="use-special-characters" onChange={(e) => props.handleSpecialCharactersSelected(e)}/></label>
            </div>
        </>
    )
}