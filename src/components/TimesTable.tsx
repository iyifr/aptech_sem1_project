import { css } from "../../stitches.config"
import { QuizRow } from "./MultiplicationQuiz"

const TimesTable = () => {
    const styles = css({ my: 56 })
    return <>
        <p className={css({ fontSize: 18 })()}>Complete 2x2 table</p>
        <QuizRow num1={2} num2={1} />
        <QuizRow num1={2} num2={2} />
        <QuizRow num1={2} num2={3} />
        <QuizRow num1={2} num2={4} />
        <QuizRow num1={2} num2={5} />
        <QuizRow num1={2} num2={6} />
        <QuizRow num1={2} num2={7} />
        <QuizRow num1={2} num2={8} />
        <QuizRow num1={2} num2={9} />
        <QuizRow num1={2} num2={10} />
        <QuizRow num1={2} num2={11} />
        <QuizRow num1={2} num2={12} />
        <QuizRow num1={2} num2={13} />

        <div className={styles()}>
            <p className={css({ fontSize: 18 })()}>Complete 3x3 table</p>
            <QuizRow num1={3} num2={1} />
            <QuizRow num1={3} num2={2} />
            <QuizRow num1={3} num2={3} />
            <QuizRow num1={3} num2={4} />
            <QuizRow num1={3} num2={5} />
            <QuizRow num1={3} num2={6} />
            <QuizRow num1={3} num2={7} />
            <QuizRow num1={3} num2={8} />
            <QuizRow num1={3} num2={9} />
            <QuizRow num1={3} num2={10} />
            <QuizRow num1={3} num2={11} />
            <QuizRow num1={3} num2={12} />
            <QuizRow num1={3} num2={13} />
        </div>


        <p className={css({ fontSize: 18 })()}>Complete 4x4 table</p>
        <QuizRow num1={4} num2={1} />
        <QuizRow num1={4} num2={2} />
        <QuizRow num1={4} num2={3} />
        <QuizRow num1={4} num2={4} />
        <QuizRow num1={4} num2={5} />
        <QuizRow num1={4} num2={6} />
        <QuizRow num1={4} num2={7} />
        <QuizRow num1={4} num2={8} />
        <QuizRow num1={4} num2={9} />
        <QuizRow num1={4} num2={10} />
        <QuizRow num1={4} num2={11} />
        <QuizRow num1={4} num2={12} />
        <QuizRow num1={4} num2={13} />
    </>
}

export default TimesTable