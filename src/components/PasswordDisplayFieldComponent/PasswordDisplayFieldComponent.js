export default function PasswordDisplayFieldComponent (props) {
    return (
        <>
            <input type="text" value={props.generatedPassword} disabled={true}/>
            <button className="btn btn-info" onClick={(e) => props.handleCopy(e)}>Copy</button><br />
            <input className="form-range" id="password-range" type="range" min="4" max="20" step="1" defaultValue={props.length} onChange={(e) => props.handleLength(e)}/>
        </>
    )
}