import { createLazyFileRoute } from '@tanstack/react-router';
import HeroSection from '../components/Hero';

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div>
            <HeroSection />
        </div>
    )
}