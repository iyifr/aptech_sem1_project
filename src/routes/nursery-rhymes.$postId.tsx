import { Link, createFileRoute } from "@tanstack/react-router";
import { css } from "../../stitches.config";
import Markdown from 'markdown-to-jsx'
import { useEffect, useState } from "react";
import Balancer from 'react-wrap-balancer'

export const Route = createFileRoute('/nursery-rhymes/$postId')({
    component: NurseryRhymePost
})


function NurseryRhymePost() {
    const { postId } = Route.useParams()
    const [post, setPost] = useState('')
    const rhymes = ['humpty dumpty', 'sailor went to sea', 'baa baa black sheep', 'bingo', 'alphabet song']

    useEffect(() => {
        import(`../rhymes/${postId}.md`)
            .then(res => {
                setPost(res.default)
            })
            .catch(err => console.log(err));
    });

    return <section className={css({ maxWidth: '48rem', mx: 'auto', mt: 64, paddingBottom: 44, lineHeight: 2.8, fontSize: 22, fontWeight: 'semibold', '@md': { fontSize: 16, maxWidth: '32rem' }, '@sm': { maxWidth: '20rem' } })()}>
        <p>Nursery Rhymes</p>
        <ul className={css({ fontSize: 18 })()}>
            {rhymes.map((item) => (
                <li>
                    <Link to={`nursery-rhymes/${item.split(' ').join('-')}`} from="/">
                        {item}
                    </Link>
                </li>
            ))}
        </ul>
        <h2 className={css({ fontSize: 28, color: '$lime12', my: 12, '@md': { fontSize: 20 } })()}>
            <Balancer>
                <p style={{ textTransform: 'capitalize' }}>{postId.split('-').join(' ')}</p>
            </Balancer>
        </h2>
        <Balancer >
            <Markdown children={post} />
        </Balancer>
    </section>
}