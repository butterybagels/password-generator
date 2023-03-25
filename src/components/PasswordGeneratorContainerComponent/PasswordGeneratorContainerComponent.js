import PasswordGeneratorFormComponent from "../PasswordGeneratorFormComponent/PasswordGeneratorFormComponent";
import {StyledFormContainer} from "../styles/StyledFormContainer";

export default function PasswordGeneratorContainerComponent() {

    return (
        <div className="container">
            <StyledFormContainer>
                <PasswordGeneratorFormComponent />
            </StyledFormContainer>
        </div>
    )
}