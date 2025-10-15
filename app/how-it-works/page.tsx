"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowRight, Sparkles, Users, Target, TrendingUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
// import { useRouter } from "next/navigation"

export default function HowItWorksPage() {
//   const router = useRouter()

  const steps = [
    {
      number: "01",
      title: "Tell Us Your Intention",
      description:
        "Enter your goal — whether it's improving posture, reducing tension, or finding calm. Your intention guides every aspect of your personalized program.",
      icon: Target,
    },
    {
      number: "02",
      title: "Receive Your Tailored Program",
      description:
        "Our intelligent system and expert guidance combine to design a personalized program suited to your needs and level. Every sequence is crafted with care.",
      icon: Sparkles,
    },
    {
      number: "03",
      title: "Begin Your Journey",
      description:
        "Follow along with clear sessions, mindful progress tracking, and guided videos designed for steady, safe growth. Each practice builds upon the last.",
      icon: TrendingUp,
    },
    {
      number: "04",
      title: "Stay Inspired",
      description:
        "As you progress, new recommendations adapt to your pace and evolving goals. Your practice grows with you, ensuring continued transformation.",
      icon: Users,
    },
  ]

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="font-serif text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
            A Practice Designed
            <span className="block text-primary">Just for You</span>
          </h1>
          <p className="text-xl lg:text-2xl text-muted-foreground mb-12 max-w-3xl mx-auto text-pretty leading-relaxed">
            We combine expert guidance with intelligent personalization to create yoga programs that meet you where you
            are.
          </p>

          {/* Visual Element */}
          <div className="relative h-96 rounded-2xl overflow-hidden mb-12">
            <Image
              src="/serene-yoga-studio.webp"
              alt="Tranquil yoga practice environment"
              className="w-full h-full object-cover"
            />
            {/* <div className="absolute inset-0 bg-gradient-to-t from-background/80 via-background/20 to-transparent" /> */}
          </div>
        </div>
      </section>

      {/* Step-by-Step Process */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Your Journey, Simplified
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              Four thoughtful steps to transform your practice and well-being.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step, index) => {
              const Icon = step.icon
              return (
                <Card
                  key={index}
                  className="p-8 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="flex items-start gap-6">
                    <div className="flex-shrink-0">
                      <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                        <Icon className="h-8 w-8 text-primary" />
                      </div>
                      <div className="font-serif text-4xl text-primary/20 font-light">{step.number}</div>
                    </div>
                    <div className="flex-1">
                      <h3 className="font-serif text-2xl text-foreground mb-4">{step.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                    </div>
                  </div>
                </Card>
              )
            })}
          </div>
        </div>
      </section>

      {/* Visual Demonstration Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-5xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 text-balance">Experience the Flow</h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
              From intention to transformation — see how seamlessly your personalized journey unfolds.
            </p>
          </div>

          <div className="space-y-8">
            {/* Step 1: Goal Input */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm font-medium text-primary mb-2">Step 1</div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">Share Your Goal</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Simply tell us what you want to achieve. Whether it-s better posture, stress relief, or increased
                    flexibility — your words shape your program.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
                  <div className="text-sm text-muted-foreground mb-2">What would you like to achieve?</div>
                  <div className="bg-background rounded-lg p-4 border border-border/50 text-foreground">
                    I want to have better posture...
                  </div>
                </div>
              </div>
            </Card>

            {/* Step 2: Program Generation */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div className="order-2 md:order-1">
                  <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="animate-spin rounded-full h-6 w-6 border-b-2 border-primary" />
                      <span className="text-sm text-muted-foreground">Creating your program...</span>
                    </div>
                    <div className="space-y-2">
                      <div className="h-2 bg-primary/20 rounded-full overflow-hidden">
                        <div className="h-full bg-primary rounded-full w-3/4 animate-pulse" />
                      </div>
                      <div className="text-xs text-muted-foreground">Analyzing your goals and experience level</div>
                    </div>
                  </div>
                </div>
                <div className="order-1 md:order-2">
                  <div className="text-sm font-medium text-primary mb-2">Step 2</div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">Intelligent Personalization</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Our system combines expert knowledge with your unique needs to craft a program that-s perfectly
                    suited to you.
                  </p>
                </div>
              </div>
            </Card>

            {/* Step 3: Program Preview */}
            <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <div className="text-sm font-medium text-primary mb-2">Step 3</div>
                  <h3 className="font-serif text-2xl text-foreground mb-4">Preview Your Journey</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Review your personalized program structure, session breakdown, and expected outcomes before you
                    begin.
                  </p>
                </div>
                <div className="bg-muted/50 rounded-xl p-6 border border-border/50">
                  <div className="text-sm font-semibold text-foreground mb-3">Posture & Alignment Program</div>
                  <div className="space-y-2">
                    {["Foundation & Awareness", "Core Strengthening", "Spinal Mobility"].map((session, i) => (
                      <div key={i} className="flex items-center gap-2 text-sm">
                        <div className="w-2 h-2 bg-primary rounded-full" />
                        <span className="text-muted-foreground">{session}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Trust & Expertise Section */}
      <section className="py-20 px-4 bg-muted/30">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Expertise Meets Intention
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty leading-relaxed">
              Every program is grounded in the wisdom of certified yoga instructors and wellness experts.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Expert Curation</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Programs curated by certified yoga instructors with decades of combined experience.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <div className="w-12 h-12 bg-secondary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Target className="h-6 w-6 text-secondary" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Mindful Design</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Personalized structure powered by thoughtful design, not algorithms alone.
              </p>
            </Card>

            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 text-center">
              <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <Sparkles className="h-6 w-6 text-accent" />
              </div>
              <h3 className="font-serif text-xl text-foreground mb-3">Lasting Results</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Emphasis on safety, alignment, and long-term progress for meaningful transformation.
              </p>
            </Card>
          </div>

          <Card className="mt-12 p-8 bg-gradient-to-r from-primary/5 to-secondary/5 border-border/50">
            <blockquote className="text-center">
              <p className="font-serif text-2xl text-foreground mb-4 text-balance leading-relaxed">
                -Every sequence is designed to align body, breath, and awareness — ensuring meaningful, lasting
                results.-
              </p>
              <cite className="text-muted-foreground">— Our Teaching Philosophy</cite>
            </blockquote>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto max-w-4xl">
          <Card className="p-12 bg-card/80 backdrop-blur-sm border-border/50 text-center">
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6 text-balance">
              Ready to Begin Your Journey?
            </h2>
            <p className="text-xl text-muted-foreground mb-10 max-w-2xl mx-auto text-pretty">
              Choose your path: start with a personalized program or explore our curated offerings.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/">
                <Button
                  size="lg"
                  className="h-14 px-8 bg-primary hover:bg-primary/90 text-primary-foreground font-medium"
                >
                  Start My Personalized Journey
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Link href="/programs">
                <Button
                  variant="outline"
                  size="lg"
                  className="h-14 px-8 border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Explore Our Programs
                </Button>
              </Link>
            </div>

            <div className="mt-8 flex items-center justify-center gap-6 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>30-day guarantee</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Cancel anytime</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-secondary rounded-full" />
                <span>Expert support</span>
              </div>
            </div>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/20 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="text-center">
            <h3 className="font-serif text-2xl text-foreground mb-4">Premium Yoga Programs</h3>
            <p className="text-muted-foreground">
              Personalized wellness experiences designed with quiet luxury and mindful intention.
            </p>
          </div>
        </div>
      </footer>
    </div>
  )
}
