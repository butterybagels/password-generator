import {StyledDisplayField} from "../styles/StyledDisplayField";

export default function PasswordDisplayFieldComponent (props) {
    return (
        <StyledDisplayField>
            <input type="text" value={props.generatedPassword} disabled={true}/>
            <button onClick={(e) => props.handleCopy(e)}>Copy</button><br />
        </StyledDisplayField>
    )
}