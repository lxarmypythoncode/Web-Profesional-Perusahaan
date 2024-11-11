import { Database, Server, Network } from "lucide-react";
import { Button } from "@/components/ui/button";
import Navbar from "@/components/Navbar";
import FeatureCard from "@/components/FeatureCard";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      
      {/* Hero Section */}
      <section className="pt-32 pb-24 bg-hero-gradient">
        <div className="container mx-auto text-center text-white">
          <h1 className="text-5xl md:text-7xl font-mono font-bold mb-6">
            OPEN SOURCE
            <br />
            DATABASE
          </h1>
          <p className="text-xl md:text-2xl max-w-2xl mx-auto mb-8 text-blue-50">
            The leading cloud database service on the market, with unmatched data
            distribution and mobility across AWS, Azure, and Google Cloud.
          </p>
          <div className="flex justify-center space-x-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-blue-50">
              Get Started
            </Button>
            <Button size="lg" variant="outline" className="text-white border-white hover:bg-white/10">
              Documentation
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-background">
        <div className="container mx-auto">
          <h2 className="text-3xl font-mono font-bold mb-12 text-center">
            /CAPABILITIES
          </h2>
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              title="Clustering"
              description="Horizontal scalability with built-in auto-sharding to millions of nodes with automatic, synchronous replication for high availability."
              icon={Database}
            />
            <FeatureCard
              title="Persistence"
              description="Keeps the dataset in memory for fast access, but can persist writes to permanent storage to survive reboots and system failures."
              icon={Server}
            />
            <FeatureCard
              title="Data structures"
              description="Well-known as a 'data structure server', supports lists, sets, sorted sets, hashes, bit arrays and more. Fast and efficient."
              icon={Network}
            />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t py-12">
        <div className="container mx-auto">
          <div className="flex justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2024 MaxData Inc. All rights reserved.
            </p>
            <div className="flex space-x-6">
              <a href="#" className="text-muted-foreground hover:text-primary">
                Twitter
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                GitHub
              </a>
              <a href="#" className="text-muted-foreground hover:text-primary">
                Discord
              </a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;