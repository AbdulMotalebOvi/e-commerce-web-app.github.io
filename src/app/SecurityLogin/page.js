import { CommonSection } from "../sectionHook/CommonSection";
import Form from "./Form";

export default function SignIn() {
    const header = 'Log In';
    const title = 'Login';
    const linkUp = 'Login'
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