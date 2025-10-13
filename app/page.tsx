// app/page.tsx
"use client"

import Background from "@/components/background";
import { ProductRecommendation } from "@/components/seasonal-recommendation";
import Link from "next/link";
import { ArrowRight } from "lucide-react"
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState } from "react";
// import { useRouter } from "next/router";

export default function HomePage() {

  const [goal, setGoal] = useState("")
  // const router = useRouter()

  const handleCreateProgram = () => {
    if (goal.trim()) {
      // Encode the goal for URL
      // const encodedGoal = encodeURIComponent(goal.trim())
      // router.push(`/program-preview?goal=${encodedGoal}`)
    }
  }

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter") {
      handleCreateProgram()
    }
  }
  return (
    <>
      <Background />

      <section className="relative py-20 sm:py-18 text-center">
        <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
          <h1 className="font-serif text-5xl lg:text-7xl font-light text-foreground mb-6 text-balance">
            Yoga Programs
            <span className="block text-primary">Designed Just for You</span>
          </h1>
          <p className="text-xl lg:text-1xl mb-12 max-w-2xl mx-auto text-stone-700 text-pretty leading-relaxed">
            Experience personalized wellness through thoughtfully crafted yoga programs that adapt to your unique
            goals and lifestyle.
          </p>

          {/* Goal Input Section */}
          <div className="max-w-2xl mx-auto mb-16">
            <div 
            // className="bg-card/80 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-border/50"
            >
              <h2 className="font-serif text-2xl lg:text-3xl text-foreground mb-6">
                What would you like to achieve?
              </h2>

              <div className="flex flex-col sm:flex-row gap-4">
                <Input
                  type="text"
                  placeholder="I want to have better posture..."
                  value={goal}
                  onChange={(e) => setGoal(e.target.value)}
                  onKeyDown={handleKeyPress}
                  className="flex-1 h-14 text-lg px-6 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
                />
                <Button
                  onClick={handleCreateProgram}
                  disabled={!goal.trim()}
                  size="lg"
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium transition-all duration-300 disabled:opacity-50"
                >
                  Create My Program
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </div>

              <div className="mt-6 flex flex-wrap gap-2 justify-center">
                {["Better posture", "Reduce stress", "Increase flexibility", "Build strength", "Improve sleep"].map(
                  (suggestion) => (
                    <button
                      key={suggestion}
                      onClick={() => setGoal(suggestion)}
                      className="px-4 py-2 text-sm bg-background/20 hover:bg-muted/80 text-stone-700 hover:text-foreground rounded-full transition-colors duration-200"
                    >
                      {suggestion}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>

          <div className="text-center mb-8">
            <p className="text-stone-700 mb-4">Or explore our curated programs</p>
            <Link href="/programs">
              <Button
                variant="outline"
                size="lg"
                className="border-border text-foreground hover:bg-muted bg-transparent"
              >
                Browse All Programs
              </Button>
            </Link>
          </div>
        </div>
      </section>
      <ProductRecommendation />
    </>
  );
}
