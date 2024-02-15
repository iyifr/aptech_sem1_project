import { createLazyFileRoute } from "@tanstack/react-router";
import { css } from "../../stitches.config";
import NumbersGrid from "../components/NumbersGrid";

export const Route = createLazyFileRoute('/numbers')({
    component: Numbers
})

function Numbers() {
    const sectionstyles = css({ maxWidth: '84rem', mx: 'auto', marginTop: 34, '@md': { maxWidth: '64rem', px: 12 } })()

    return <section className={sectionstyles}>
        <h2 className={css({ '@md': { fontSize: 16 } })()}>Lesson 02 - Numbers</h2>

        <NumbersGrid />
    </section>
}