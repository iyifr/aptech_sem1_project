import { Link, createLazyFileRoute } from "@tanstack/react-router";
import { Button } from "../components/Button";
import { css } from "../../stitches.config";
import AlphabetGrid from "../components/AlphabetGrid";

export const Route = createLazyFileRoute('/alphabet')({
    component: Alphabet,
})

function Alphabet() {
    const sectionstyles = css({ maxWidth: '84rem', mx: 'auto', marginTop: 34, '@md': { maxWidth: '64rem', px: 12 } })()
    const nextLessonBtn = css({ flexCont: true, alignItems: 'end', py: 24, paddingLeft: '64rem', '@md': { paddingLeft: '1rem' } })()
    return <section className={sectionstyles}>
        <div>
            <h2 className={css({ '@md': { fontSize: 16 } })()}>Lesson 01 - The Alphabet</h2>
            <p style={{ marginBlock: 4.5 }}>Practice drawing letters of the alphabet and get ready for a quiz at the end!</p>
        </div>

        <AlphabetGrid />

        <span className={nextLessonBtn}>
            <Link to="/numbers">
                <Button>Go to next lesson</Button>
            </Link>
        </span>
    </section>
}