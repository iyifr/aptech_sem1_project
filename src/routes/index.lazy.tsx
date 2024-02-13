import { createLazyFileRoute } from '@tanstack/react-router';
import HeroSection from '../components/Hero';
import ImageCarousel from '../components/ImageCarousel';

export const Route = createLazyFileRoute('/')({
    component: Index,
})

function Index() {
    return (
        <div>
            <HeroSection />
            <ImageCarousel />
        </div>
    )
}