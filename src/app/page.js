import Layout from "@/components/Layout";
import Hero from "@/components/Hero";
import Info1 from "@/components/Info1";
import NewArrival from "@/components/NewArrival";
import ChooseSection from "@/components/ChooseSection";

export default function Home() {
  return (
    <Layout>
      <Hero />
      <Info1 />
      <NewArrival />
      <ChooseSection />

      <div className="container mx-auto px-4 py-16">
        <h1 className="text-5xl font-bold text-center mb-12 bg-gradient-to-r from-primary to-blue-600 bg-clip-text text-transparent">
          Welcome to Minishop
        </h1>

        <div className="bg-white shadow-xl rounded-2xl p-10 max-w-4xl mx-auto border border-gray-100">
          <p className="text-gray-700 text-xl mb-8 leading-relaxed">
            This is the homepage content that sits between the navigation and
            footer components, rendered through the Layout component.
          </p>

          <p className="text-gray-700 mb-8 font-medium">
            The Layout component now properly includes:
          </p>

          <ul className="list-none pl-6 mb-8 space-y-4">
            {[
              "NavUpper - for contact information",
              "Navbar - for site navigation",
              "Main content (this section)",
              "Footer - for site information and links",
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-3">
                <span className="h-2 w-2 rounded-full bg-primary"></span>
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-10 text-center">
            <button className="bg-primary hover:bg-primary/90 text-white font-semibold py-4 px-8 rounded-full transition-all duration-300 transform hover:scale-105 hover:shadow-lg">
              Shop Now
            </button>
          </div>
        </div>
      </div>
    </Layout>
  );
}
