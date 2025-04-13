import React, { useState } from 'react';
import {
    ChevronRight,
    ChevronLeft,
} from 'lucide-react';
import { caseStudies } from '../caseStudy/caseStudies';
import { Link } from 'react-router-dom';

function CaseStudyCard({
    icon: Icon,
    title,
    metric,
    description,
}: {
    icon: React.ElementType;
    title: string;
    metric: string;
    description: string;
}) {
    return (
        <div className="bg-white rounded-xl shadow-lg p-6 transition-all duration-300 hover:shadow-xl hover:scale-[1.02]">
            <div className="flex items-center gap-4 mb-4">
                <div className="p-3 bg-indigo-100 rounded-lg">
                    <Icon className="w-6 h-6 text-primary-orange" />
                </div>
                <h3 className="text-xl font-semibold text-gray-800">{title}</h3>
            </div>
            <p className="text-3xl font-bold text-primary-blue mb-3">{metric}</p>
            <p className="text-gray-600 leading-relaxed">{description}</p>
        </div>
    );
}

function CaseStudyComponent() {
    const [currentStudyIndex, setCurrentStudyIndex] = useState(0);
    const currentStudy = caseStudies[currentStudyIndex];

    const goToNextStudy = () => {
        setCurrentStudyIndex((prev) => (prev + 1) % caseStudies.length);
    };

    const goToPrevStudy = () => {
        setCurrentStudyIndex((prev) => (prev - 1 + caseStudies.length) % caseStudies.length);
    };

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Navigation Dots */}
            <div className="fixed top-17 left-1/2 transform -translate-x-1/2 z-50 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg">
                <div className="flex gap-2">
                    {caseStudies.map((study, index) => (
                        <button
                            key={study.id}
                            onClick={() => setCurrentStudyIndex(index)}
                            className={`w-3 h-3 rounded-full transition-all duration-300 ${index === currentStudyIndex ? 'bg-primary-orange scale-110' : 'bg-gray-400 hover:bg-primary-yellow'
                                }`}
                            aria-label={`Go to case study ${index + 1}`}
                        />
                    ))}
                </div>
            </div>

            {/* Hero Section */}
            <div
                className="relative text-white py-[100px] px-4 md:py-32"
                style={{
                    backgroundImage: `url("${currentStudy.backgroundImage}")`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                }}
            >
                <div className="absolute inset-0 bg-indigo-900/90" />

                {/* Navigation Arrows */}
                {/* Navigation Arrows */}
                <button
                    onClick={goToPrevStudy}
                    className="absolute z-20 left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-primary-orange p-2 rounded-full backdrop-blur-sm transition-all"
                    aria-label="Previous case study"
                >
                    <ChevronLeft className="w-6 h-6 text-white" />
                </button>
                <button
                    onClick={goToNextStudy}
                    className="absolute z-20 right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-white/10 hover:bg-primary-orange p-2 rounded-full backdrop-blur-sm transition-all"
                    aria-label="Next case study"
                >
                    <ChevronRight className="w-6 h-6 text-white" />
                </button>


                <div className="relative max-w-7xl mx-auto">
                    <h1 className="text-4xl md:text-6xl font-bold mb-6">
                        {currentStudy.title}
                    </h1>
                    <p className="text-xl md:text-2xl text-indigo-200 max-w-3xl">
                        {currentStudy.subtitle}
                    </p>
                </div>
            </div>

            {/* Main Content */}
            <div className="max-w-7xl mx-auto px-4 py-16">
                {/* Client Overview */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Client Overview</h2>
                    <div className="bg-white rounded-xl shadow-lg p-8">
                        <div className="flex flex-col md:flex-row gap-8">
                            <div className="flex-1">
                                <h3 className="text-xl font-semibold mb-4">The Challenge</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {currentStudy.challenge}
                                </p>
                            </div>
                            <div className="flex-1 md:border-l md:pl-8 border-orange-200">
                                <h3 className="text-xl font-semibold mb-4">The Solution</h3>
                                <p className="text-gray-600 leading-relaxed">
                                    {currentStudy.solution}
                                </p>
                            </div>
                        </div>
                    </div>
                </div>


                {/* Key Metrics */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Key Achievements</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {currentStudy.metrics.map((metric, index) => (
                            <CaseStudyCard
                                key={index}
                                icon={metric.icon}
                                title={metric.title}
                                metric={metric.metric}
                                description={metric.description}
                            />
                        ))}
                    </div>
                </div>


                {/* Technical Implementation */}
                <div className="mb-16">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Technical Implementation</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {currentStudy.technical.map((tech, index) => (
                            <div key={index} className="bg-white rounded-xl shadow-lg p-6">
                                <div className="flex items-center gap-3 mb-4">
                                    <tech.icon className="w-6 h-6 text-primary-orange" />
                                    <h3 className="text-lg font-semibold text-primary-blue">{tech.title}</h3>
                                </div>
                                <ul className="text-gray-600 space-y-2">
                                    {tech.points.map((point, pointIndex) => (
                                        <li key={pointIndex}>• {point}</li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>

                {/* Call to Action */}
                <div className="text-center bg-indigo-50 rounded-xl p-8 md:p-12">
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
                        Ready to Transform Your Infrastructure?
                    </h2>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Let us help you achieve similar results with our proven expertise in infrastructure optimization.
                    </p>
                    <Link to="/contact">
                        <button className="bg-primary-orange
                         text-white px-8 py-3 rounded-lg font-semibold hover:bg-amber-600 transition-colors cursor-pointer">
                            Contact Us Today
                        </button>
                    </Link>

                </div>
            </div>
        </div>
    );
}

export default CaseStudyComponent;
