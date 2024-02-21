import { Plus, X } from "lucide-react"
import { useState } from "react"
import { GridItem } from "./NumbersGrid"
import { css } from "../../stitches.config"

const MultiplicationGame = () => {
    return <>
        <h2 style={{ marginBlock: 35 }}>Solve multiplication problems!</h2>
        <QuizRow num1={2} num2={1} />
        <QuizRow num1={3} num2={2} />
        <QuizRow num1={4} num2={3} />
        <QuizRow num1={4} num2={4} />
        <QuizRow num1={4} num2={5} />
        <QuizRow num1={7} num2={6} />
        <QuizRow num1={4} num2={7} />
        <QuizRow num1={8} num2={8} />
    </>
}

export default MultiplicationGame

const QuizRow = ({ num1, num2 }: { num1: number, num2: number }) => {
    const [isCorrectValue, setIsCorrectValue] = useState<boolean | null>(null)

    const handleChange = (res: string) => {
        parseInt(res) === num1 * num2 ? setIsCorrectValue(true) : setIsCorrectValue(false)
    }
    const inputStyles = css({
        bg: '$lime2', border: 'none', borderRadius: 12, width: 44, height: 50, px: 18,
        fontSize: 20,
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'row',
        caretColor: '$lime12',
        '&:focus': {
            outline: '2px solid $lime5',
        },

    })()
    return <section className={css({ mx: 14 })()}>
        <div className={css({
            display: 'flex',
            gap: 14,
            flexDirection: 'row',
            alignItems: 'center',
            my: 18
        })()}>
            <GridItem css={{ width: 65, height: 60 }}>{num1}</GridItem>
            <X />
            <GridItem css={{ width: 65, height: 60 }}>{num2}</GridItem>
            <span>{"="}</span>
            <input className={inputStyles} onChange={(e) => handleChange(e.target.value)} />
            <span>
                {isCorrectValue === true ? <p>Correct!</p> : isCorrectValue === null ? null : <p>WRONG!</p>}
            </span>
        </div>
    </section>
}