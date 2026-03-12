import { Link } from "react-router-dom";

function Home() {
  return (
    <div className="bg-gradient-to-b from-indigo-50 to-white">
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-20 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          Welcome to <span className="text-indigo-600">JobPortal</span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Find your dream job with thousands of listings from top companies.
        </p>
        <Link
          to="/jobs"
          className="inline-block bg-indigo-600 text-white px-8 py-3 rounded-lg font-semibold hover:bg-indigo-700 transition duration-200 shadow-lg hover:shadow-xl"
        >
          Browse Jobs
        </Link>
      </section>

      {/* Features Section (optional) */}
      <section className="container mx-auto px-4 py-16 grid md:grid-cols-3 gap-8">
        <FeatureCard
          title="Thousands of Jobs"
          description="Access listings from various industries and locations."
        />
        <FeatureCard
          title="Easy Apply"
          description="Apply directly with your profile and track applications."
        />
        <FeatureCard
          title="Trusted Companies"
          description="Find jobs from verified employers and companies."
        />
      </section>
    </div>
  );
}

function FeatureCard({ title, description }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md text-center">
      <div className="w-12 h-12 bg-indigo-100 rounded-full flex items-center justify-center mx-auto mb-4">
        <svg
          className="w-6 h-6 text-indigo-600"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
      </div>
      <h3 className="text-xl font-semibold text-gray-800 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

export default Home;