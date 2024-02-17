import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/quiz/")({
    component: QuizIndexComponent
})

function QuizIndexComponent() {
    return <section>
        <p style={{ fontSize: 18 }}>
            Select a quiz to start
        </p>
    </section>
}