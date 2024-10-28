import React from 'react'
import Card from './Card';

const HomeCards = () => {
    return (
        <section className="py-4">
            <div className="container-xl lg:container m-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4 p-4 rounded-lg">
                    <Card title="For Developers" subtitle="Browse our React jobs and start your career today" buttonText="Browse Jobs" cardBackground="bg-blue-200" />
                    <Card title="For Employers" subtitle="Post your job today" buttonText="Post a Job" cardBackground="bg-green-400" />
                </div>
            </div>
        </section>

    );
}

export default HomeCards
