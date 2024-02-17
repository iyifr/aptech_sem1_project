import { createFileRoute } from "@tanstack/react-router";
import AdditionQuiz from "../components/AdditionQuiz";

export const Route = createFileRoute("/quiz/$game")({
    component: Game,
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
        default: {
            return <p>Null bitch</p>
        }
    }

}