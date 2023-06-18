import { CommonSection } from "../sectionHook/CommonSection";
import Form from "./Form";

export default function SignUp() {
    const header = 'Register';
    const title = 'Register';
    const linkUp = 'SignUp'
    const sectionMarkup = CommonSection(header, title, linkUp);
    return (
        <section>
            {sectionMarkup}
            <div className="my-20 max-w-screen-xl mx-auto">
                <Form />
            </div>
        </section>
    )
}