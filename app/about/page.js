export default function About() {
  return (
    <div className="min-h-screen bg-black text-white">
      <header className="bg-gray-900 border-b border-gray-800 p-6">
        <div className="container mx-auto">
          <a href="/" className="text-gray-400 hover:text-white">← Back to Home</a>
        </div>
      </header>

      <main className="container mx-auto max-w-4xl p-6 py-20">
        <h1 className="text-4xl md:text-5xl font-black mb-8">
          Why BleedTime?
        </h1>
        
        <div className="prose prose-lg text-gray-300">
          <p className="text-xl mb-6">
            We've all been there. The "quick sync" that becomes an hour. 
            The "alignment meeting" with 15 people that could've been an email.
          </p>
          
          <p className="mb-6">
            BleedTime was born from frustration. After tracking my company's meetings 
            for a month, I discovered we were burning €48,000 monthly on unnecessary meetings.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">The Problem</h2>
          <ul className="list-disc pl-6 mb-6">
            <li>The average employee spends 23 hours per week in meetings</li>
            <li>67% of meetings are considered failures</li>
            <li>$37 billion is lost annually to unproductive meetings in the US alone</li>
          </ul>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Our Solution</h2>
          <p className="mb-6">
            BleedTime makes the invisible visible. By showing real-time costs, 
            we create awareness that leads to change. Teams using BleedTime 
            reduce meeting time by 30% in the first month.
          </p>

          <h2 className="text-2xl font-bold text-white mt-12 mb-4">Get Started</h2>
          <p className="mb-8">
            Ready to stop the bleeding? Start your free trial. No credit card required.
          </p>

          <a href="/dashboard" className="inline-block bg-red-600 px-8 py-4 rounded-lg font-bold hover:bg-red-700 transition">
            Start Free Trial →
          </a>
        </div>
      </main>
    </div>
  );
}
