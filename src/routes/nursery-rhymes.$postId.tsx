import { createFileRoute } from "@tanstack/react-router";
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
    useEffect(() => {
        import(`../rhymes/${postId}.md`)
            .then(res => {
                setPost(res.default)
            })
            .catch(err => console.log(err));
    });

    return <section className={css({ maxWidth: '45rem', mx: 'auto', my: 64, lineHeight: 2.8 })()}>
        <h2 style={{ fontSize: 28, color: '$lime10' }}>Nursery Rhyme: {postId.toLocaleUpperCase()} </h2>
        <Balancer>
            <Markdown children={post} />
        </Balancer>
    </section>
}