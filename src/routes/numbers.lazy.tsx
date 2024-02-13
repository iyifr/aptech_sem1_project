import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { css } from "../../stitches.config";
import NumbersGrid from "../components/NumbersGrid";
import { Button } from "../components/Button";

export const Route = createLazyFileRoute('/numbers')({
    component: Numbers
})

function Numbers() {
    const sectionstyles = css({ maxWidth: '84rem', mx: 'auto', marginTop: 34, '@md': { maxWidth: '64rem', px: 12 } })()
    const nextLessonBtn = css({ flexCont: true, alignItems: 'end', py: 24, paddingLeft: '68rem', '@md': { paddingLeft: '1rem' } })()

    return <section className={sectionstyles}>
        <h2 className={css({ '@md': { fontSize: 16 } })()}>Lesson 02 - Numbers</h2>
        <h3 style={{ marginBlock: 12, fontWeight: 400 }}>Numbers: 0 - 9</h3>
        <p style={{ color: 'gray' }}>Practice drawing the numbers 0 - 9 in your notebook *</p>

        <NumbersGrid />


        <span className={nextLessonBtn}>
            <Link to="/numbers">
                <Button>Go to next lesson</Button>
            </Link>
        </span>
    </section>
}