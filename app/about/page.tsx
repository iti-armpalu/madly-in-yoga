import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Heart, Sparkles, Compass } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl lg:text-7xl font-light text-foreground mb-8 text-balance">
              Rooted in Intention.
              <span className="block text-primary mt-2">Guided by Breath.</span>
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground leading-relaxed text-pretty max-w-3xl mx-auto">
              Madly in Yoga was born from a desire to create calm amidst chaos — where movement becomes medicine, and
              stillness becomes strength. Every program is designed with precision, mindfulness, and care.
            </p>
          </div>
        </div>
      </section>

      {/* The Meaning Behind the Name */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-8 text-center">
              The Meaning Behind the Name
            </h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
              <p className="text-pretty">
                The name <span className="text-foreground font-medium italic">Madly in Yoga</span> represents passion
                balanced by peace.
              </p>
              <p className="text-pretty">
                <span className="text-foreground font-medium">-Madly-</span> captures the energy of modern life — our
                intensity, drive, and chaos — while <span className="text-foreground font-medium">-in Yoga-</span>{" "}
                invites us back into presence, grounding, and grace.
              </p>
              <p className="text-pretty text-xl text-foreground/90 italic text-center py-8">
                It-s a reminder that even in our madness, there is a way to return — through the breath, through the
                body, through awareness.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Founder Story */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="order-2 lg:order-1">
                <h2 className="font-serif text-4xl lg:text-5xl text-foreground mb-6">Meet the Founder</h2>
                <div className="space-y-6 text-lg text-muted-foreground leading-relaxed">
                  <p className="text-pretty">
                    Madly in Yoga was created by a practitioner who found her way back to herself through movement and
                    breath. After years of navigating the intensity of modern life, she discovered that yoga wasn-t just
                    a practice — it was a homecoming.
                  </p>
                  <p className="text-pretty">
                    Through years of study and teaching, she witnessed how mindful movement could transform not just
                    bodies, but entire lives. This platform was born from that vision — to create a space where others
                    could find their own calm and connection in their daily lives.
                  </p>
                  <blockquote className="border-l-2 border-primary pl-6 py-4 italic text-foreground/90 text-xl">
                    -Madly in Yoga was born out of my own chaos — a way to find softness without losing strength, and to
                    return home to myself.-
                  </blockquote>
                </div>
              </div>
              <div className="order-1 lg:order-2">
                <div className="aspect-[3/4] bg-muted/50 rounded-2xl overflow-hidden">
                  <Image
                    src="/serene-yoga-instructor-in-peaceful-studio-natural-.jpg"
                    alt="Founder in peaceful yoga pose"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The Philosophy */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <h2 className="font-serif text-4xl lg:text-5xl text-center text-foreground mb-16">Our Philosophy</h2>

            <div className="grid md:grid-cols-3 gap-8">
              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-6 mx-auto">
                  <Heart className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Presence Over Perfection</h3>
                <p className="text-muted-foreground leading-relaxed">
                  The practice meets you where you are. No judgment, no pressure — just authentic connection with
                  yourself.
                </p>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-secondary/10 rounded-full mb-6 mx-auto">
                  <Sparkles className="h-8 w-8 text-secondary" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Simplicity with Depth</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Calm, considered, and crafted for modern life. Every element serves a purpose, nothing is excessive.
                </p>
              </Card>

              <Card className="p-8 bg-card/50 backdrop-blur-sm border-border/50 text-center">
                <div className="flex items-center justify-center w-16 h-16 bg-accent/10 rounded-full mb-6 mx-auto">
                  <Compass className="h-8 w-8 text-accent" />
                </div>
                <h3 className="font-serif text-2xl text-foreground mb-4">Movement as Meaning</h3>
                <p className="text-muted-foreground leading-relaxed">
                  Every flow is an invitation to connect, not perform. Your practice is a conversation with yourself.
                </p>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Closing Invitation */}
      <section className="py-20 lg:py-32">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <p className="font-serif text-3xl lg:text-4xl text-foreground mb-8 leading-relaxed text-balance">
              Here, yoga is not something you do — it-s something you become.
            </p>
            <p className="text-xl text-muted-foreground mb-12 max-w-2xl mx-auto text-pretty leading-relaxed">
              A practice that lives in your breath, your awareness, and the way you move through the world.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground px-8">
                  Explore Programs
                </Button>
              </Link>
              <Link href="/">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted bg-transparent px-8"
                >
                  Start Your Journey
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
