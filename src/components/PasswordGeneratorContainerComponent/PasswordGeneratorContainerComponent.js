import './PasswordGenerator.css'
import PasswordGeneratorFormComponent from "../PasswordGeneratorFormComponent/PasswordGeneratorFormComponent";

export default function PasswordGeneratorContainerComponent() {

    return (
        <div className="container">
            <div className="generator-container">
                <PasswordGeneratorFormComponent />
            </div>
        </div>
    )
}