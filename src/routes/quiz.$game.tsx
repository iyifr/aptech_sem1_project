import { createFileRoute } from "@tanstack/react-router";
import AdditionQuiz from "../components/AdditionQuiz";
import MultiplicationGame from "../components/MultiplicationQuiz";
import TimesTable from "../components/TimesTable";

export const Route = createFileRoute("/quiz/$game")({
    component: () => <div style={{ paddingBottom: 28 }}><Game /></div>,
    notFoundComponent: () => {
        return <p>We could not find that quiz unfortunately</p>
    }
})

function Game() {
    const { game } = Route.useParams()

    switch (game) {
        case 'Addition': {
            return <AdditionQuiz />
        }
        case 'Multiplication': {
            return <MultiplicationGame />
        }

        case 'TimesTable': {
            return <TimesTable />
        }
        default: {
            return <div />
        }
    }

}