import { useState } from "react"
import { css } from "../../stitches.config"
import { GridItem } from "./NumbersGrid"
import { Plus } from 'lucide-react'
const AdditionQuiz = () => {
    return <>
        <h2 style={{ marginBlock: 35 }}>Solve addition problems!</h2>
        <QuizRow num1={12} num2={12} />
    </>
}
export default AdditionQuiz


const QuizRow = ({ num1, num2 }: { num1: number, num2: number }) => {
    const [isCorrectValue, setIsCorrectValue] = useState<boolean | null>(null)

    const handleChange = (res: string) => {
        parseInt(res) === num1 + num2 ? setIsCorrectValue(true) : setIsCorrectValue(false)
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
    return <section>
        <div className={css({
            display: 'flex',
            gap: 12,
            flexDirection: 'row',
            alignItems: 'center',
            my: 12
        })()}>
            <GridItem css={{ width: 65, height: 60 }}>{num1}</GridItem>
            <Plus />
            <GridItem css={{ width: 65, height: 60 }}>{num2}</GridItem>
            <span>{"="}</span>
            <input className={inputStyles} onChange={(e) => handleChange(e.target.value)} />
        </div>

        <span>
            {isCorrectValue === true ? <p>Correct!</p> : isCorrectValue === null ? null : <p>WRONG!</p>}
        </span>
    </section>
}