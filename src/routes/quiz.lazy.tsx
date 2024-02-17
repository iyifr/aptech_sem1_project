import { Link, Outlet, createLazyFileRoute, getRouteApi, useParams } from "@tanstack/react-router";
import { Button } from "../components/Button";
import { css } from "../../stitches.config";
import { GridItem } from "../components/NumbersGrid";

export const Route = createLazyFileRoute("/quiz")({
    component: Quiz
})

function Quiz() {
    const route = getRouteApi('/quiz/$game')
    const { game } = route.useParams()

    return <section className={css({ maxWidth: '64rem', mx: 'auto', my: 24 })()}>

        {/* Display Quiz Select */}
        {!game ? <PickQuiz /> :
            <>

                <hr className={css({ my: 18, color: '$lime5', opacity: 0.5 })()} />
                <Outlet />
            </>
        }

    </section>
}

const PickQuiz = () => {
    return <div className={css({ display: 'flex', gap: 28, pb: 44, flexWrap: 'wrap' })()}>
        <GridItem css={{ width: 220, px: 12, flexDirection: 'column', gap: 24, height: 200 }}>
            <p>Addition game++</p>

            <Link to="/quiz/$game" params={{ game: 'Addition' }}>
                <Button>Start</Button>
            </Link>
        </GridItem>

        <GridItem css={{ width: 220, px: 12, flexDirection: 'column', gap: 24, height: 200 }}>
            <p>Multiply game xx</p>
            <Link to="/quiz/$game" params={{ game: 'Multiplication' }}>
                <Button>Start</Button>
            </Link>
        </GridItem>


        <GridItem css={{ width: 220, px: 12, flexDirection: 'column', gap: 24, height: 200 }}>
            <p>Times Table ^~</p>

            <Link to="/quiz/$game" params={{ game: 'TimesTable' }}>
                <Button>Start</Button>
            </Link>
        </GridItem>
    </div>

}