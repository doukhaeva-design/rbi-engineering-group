import { Suspense } from 'react';
import ProjectsContent from './ProjectsContent';

export const dynamic = 'force-dynamic';

export const metadata = {
    title: 'Наши проекты | RBI Engineering Group',
    description: 'Портфолио выполненных проектов RBI Engineering: модульные здания, вахтовые поселки, монтаж металлоконструкций и инфраструктурные объекты в Казахстане.',
};

export default function ProjectsPage() {
    return (
        <Suspense fallback={<div>Loading...</div>}>
            <ProjectsContent />
        </Suspense>
    );
}
