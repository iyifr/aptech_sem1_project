import { createLazyFileRoute } from "@tanstack/react-router";
import { css } from "../../stitches.config";

export const Route = createLazyFileRoute('/contact')({
    component: Contact,
})

function Contact() {
    const styles = css({ px: 34, my: 12 })()
    return <div className={styles}>
        <h1>Contact Page</h1>
        <p style={{ fontSize: 18, marginBlock: 12 }}> Contact us at <a href="mailto:info@kidszone.com">info@kidszone.com</a></p>
    </div>
}