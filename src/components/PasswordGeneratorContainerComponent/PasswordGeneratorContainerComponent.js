import {useState} from "react";

export default function PasswordGeneratorContainerComponent() {

    const [generatedPassword, setGeneratedPassword] = useState("")
    function handleGenerate() {
        console.log('Generating...')
    }

    return (
        <div className="container">
            <form>
                <input type="text" value={generatedPassword} onChange={handleGenerate} disabled={true}/>
                <button className="btn btn-info">Copy</button><br />
                <input className="form-range" type="range" min="4" max="20" step="1" defaultValue="12"/>

                <div className="form-check">
                    <label className="form-check-label" htmlFor="use-uppercase">Use uppercase letters</label>
                    <input className="form-check-input" type="checkbox" id="use-uppercase"/>
                </div>

                <div className="form-check">
                    <label className="form-check-label" htmlFor="use-lowercase">Use lowercase letters</label>
                    <input className="form-check-input" type="checkbox" id="use-lowercase"/>
                </div>

                <div className="form-check">
                    <label className="form-check-label" htmlFor="use-numbers">Use numbers</label>
                    <input className="form-check-input" type="checkbox" id="use-numbers"/>
                </div>

                <div className="form-check">
                    <label className="form-check-label" htmlFor="use-special-characters">Use special characters</label>
                    <input className="form-check-input" type="checkbox" id="use-special-characters"/>
                </div>
            </form>
        </div>
    )
}