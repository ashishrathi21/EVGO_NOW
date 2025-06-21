import React from 'react';
import { Search, Scale, MessageSquare, CheckCircle } from 'lucide-react';

const HowItWorks = () => {
  const steps = [
    {
      title: 'Browse & Explore',
      description: 'Discover verified pre-owned EVs with detailed listings — including battery health, range, and trust scores.',
      icon: Search,
    },
    {
      title: 'Compare & Decide',
      description: 'Use our smart tools to check if an EV fits your usage, budget, and goals — so you can buy with confidence.',
      icon: Scale,
    },
    {
      title: 'Connect with Sellers',
      description: 'Reach out directly to verified sellers and get all your questions answered — quickly and securely.',
      icon: MessageSquare,
    },
    {
      title: 'Complete the Deal',
      description: 'Finalize your purchase with full transparency. Plus, get ongoing support — battery tips & nearby charging info.',
      icon: CheckCircle,
    },
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="bg-emerald-100 text-emerald-800 text-sm font-semibold px-4 py-2 rounded-full inline-block mb-2">
            HOW IT WORKS
          </span>
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900">Your Seamless EV Journey</h2>
          <p className="text-gray-600 mt-3 max-w-2xl mx-auto">
            A simple, transparent process to help you buy or sell your EV with complete confidence.
          </p>
        </div>

        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col items-center text-center"
            >
              <div className="bg-emerald-100 p-4 rounded-full mb-4">
                <step.icon className="h-8 w-8 text-emerald-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">{step.title}</h3>
              <p className="text-gray-600 text-sm">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
