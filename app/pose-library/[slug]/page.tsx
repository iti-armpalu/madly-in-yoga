import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Play, Volume2, AlertCircle, Lightbulb, Users } from "lucide-react"
import Link from "next/link"

// Mock data - in a real app, this would come from a database
interface PoseStep {
  title: string
  description: string
}

interface CommonMistake {
  mistake: string
  correction: string
}

interface Modification {
  title: string
  description: string
}

interface RelatedPose {
  name: string
  slug: string
}

interface ProgramReference {
  name: string
  slug: string
}

interface Pose {
  name: string
  englishName: string
  category: string
  focus: string
  level: string
  description: string
  fullDescription: string
  benefits: string[]
  steps: PoseStep[]
  commonMistakes: CommonMistake[]
  modifications: Modification[]
  breathwork: string
  relatedPoses: RelatedPose[]
  programsFeaturingPose: ProgramReference[]
}

const poseData: Record<string, Pose> = {
  tadasana: {
    name: "Tadasana",
    englishName: "Mountain Pose",
    category: "Standing",
    focus: "Alignment",
    level: "Beginner",
    description: "Foundation of alignment and stillness",
    fullDescription:
      "Mountain Pose is the foundation of all standing poses. It teaches us to stand with majestic steadiness like a mountain. The pose may seem simple, but it involves the entire body and mind working together to create a state of wakeful relaxation.",
    benefits: [
      "Improves posture and body awareness",
      "Strengthens thighs, knees, and ankles",
      "Firms abdomen and buttocks",
      "Relieves sciatica",
      "Reduces flat feet",
      "Develops mental clarity and focus",
    ],
    steps: [
      {
        title: "Find Your Foundation",
        description:
          "Stand with your feet hip-width apart. Feel the four corners of each foot pressing evenly into the earth—the base of your big toe, little toe, and both sides of your heel.",
      },
      {
        title: "Engage Your Legs",
        description:
          "Without locking your knees, feel a gentle lift through your kneecaps. Engage your thigh muscles, drawing them upward. Feel the strength rising through your legs.",
      },
      {
        title: "Lengthen Your Spine",
        description:
          "Draw your tailbone slightly down and forward. Lift through the crown of your head, creating space between each vertebra. Feel yourself growing taller.",
      },
      {
        title: "Soften and Breathe",
        description:
          "Relax your shoulders away from your ears. Let your arms hang naturally by your sides, palms facing forward. Soften your face and jaw. Breathe deeply and evenly.",
      },
    ],
    commonMistakes: [
      {
        mistake: "Locking the knees",
        correction: "Keep a micro-bend in your knees to protect the joints and engage the thigh muscles properly.",
      },
      {
        mistake: "Arching the lower back",
        correction: "Gently tuck your tailbone and engage your core to maintain a neutral spine.",
      },
      {
        mistake: "Tension in shoulders",
        correction: "Actively roll your shoulders back and down, creating space between your ears and shoulders.",
      },
    ],
    modifications: [
      {
        title: "For Balance Support",
        description: "Stand with your back against a wall or practice near a wall for support if needed.",
      },
      {
        title: "For Tight Calves",
        description: "Place a folded blanket under your heels to reduce strain on the Achilles tendon.",
      },
      {
        title: "For Deeper Awareness",
        description: "Close your eyes to enhance your proprioception and internal focus.",
      },
    ],
    breathwork:
      "In Mountain Pose, establish a natural, rhythmic breath. Inhale through your nose, feeling your ribcage expand in all directions. Exhale completely, feeling your body settle more deeply into the earth. Let each breath be an anchor to the present moment.",
    relatedPoses: [
      { name: "Tree Pose", slug: "vrksasana" },
      { name: "Warrior I", slug: "virabhadrasana-i" },
      { name: "Chair Pose", slug: "utkatasana" },
    ],
    programsFeaturingPose: [
      { name: "Posture & Alignment Foundations", slug: "posture-alignment" },
      { name: "Complete Beginner's Journey", slug: "complete-beginners" },
    ],
  },
  // Add more poses as needed
}

export default async function PoseDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const pose = poseData[slug]

  if (!pose) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center">
        <div className="text-center">
          <h1 className="font-serif text-3xl text-foreground mb-4">Pose not found</h1>
          <Link href="/poses">
            <Button>Back to Pose Library</Button>
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-12 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full">
                {pose.level}
              </span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">{pose.category}</span>
              <span className="px-3 py-1 bg-muted text-muted-foreground text-sm rounded-full">{pose.focus}</span>
            </div>
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-foreground mb-3">{pose.englishName}</h1>
            <p className="text-xl text-muted-foreground italic mb-6">{pose.name}</p>
            <p className="text-lg text-muted-foreground leading-relaxed">{pose.fullDescription}</p>
          </div>
        </div>
      </section>

      {/* Video Section */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Card className="overflow-hidden bg-card/50 backdrop-blur-sm border-border/50">
              <div className="relative aspect-video bg-muted/50 flex items-center justify-center">
                <div className="text-center">
                  <Button size="lg" className="rounded-full h-16 w-16 p-0 mb-4">
                    <Play className="h-8 w-8" />
                  </Button>
                  <p className="text-muted-foreground">Video Demonstration</p>
                </div>
              </div>
              <div className="p-6 border-t border-border/50">
                <div className="flex items-center justify-between">
                  <div>
                    <h3 className="font-medium text-foreground mb-1">Guided Instruction</h3>
                    <p className="text-sm text-muted-foreground">Follow along at your own pace</p>
                  </div>
                  <Button variant="outline" size="sm" className="gap-2 bg-transparent">
                    <Volume2 className="h-4 w-4" />
                    Audio Only
                  </Button>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </section>

      {/* Detailed Content */}
      <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="max-w-5xl mx-auto">
            <Tabs defaultValue="steps" className="w-full">
              <TabsList className="grid w-full grid-cols-4 mb-8">
                <TabsTrigger value="steps">Step-by-Step</TabsTrigger>
                <TabsTrigger value="benefits">Benefits</TabsTrigger>
                <TabsTrigger value="tips">Tips & Modifications</TabsTrigger>
                <TabsTrigger value="related">Related</TabsTrigger>
              </TabsList>

              <TabsContent value="steps" className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl text-foreground mb-6">How to Practice</h2>
                  <div className="space-y-6">
                    {pose.steps.map((step, index) => (
                      <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                        <div className="flex gap-4">
                          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary font-medium">
                            {index + 1}
                          </div>
                          <div className="flex-1">
                            <h3 className="font-medium text-foreground text-lg mb-2">{step.title}</h3>
                            <p className="text-muted-foreground leading-relaxed">{step.description}</p>
                          </div>
                        </div>
                      </Card>
                    ))}
                  </div>
                </div>

                <Card className="p-6 bg-accent/5 border-accent/20">
                  <div className="flex gap-3">
                    <Volume2 className="h-5 w-5 text-accent flex-shrink-0 mt-1" />
                    <div>
                      <h3 className="font-medium text-foreground mb-2">Breath Awareness</h3>
                      <p className="text-muted-foreground leading-relaxed">{pose.breathwork}</p>
                    </div>
                  </div>
                </Card>
              </TabsContent>

              <TabsContent value="benefits">
                <div>
                  <h2 className="font-serif text-3xl text-foreground mb-6">Benefits</h2>
                  <div className="grid md:grid-cols-2 gap-4">
                    {pose.benefits.map((benefit, index) => (
                      <Card key={index} className="p-4 bg-card/50 backdrop-blur-sm border-border/50">
                        <p className="text-foreground leading-relaxed">{benefit}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="tips" className="space-y-8">
                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <AlertCircle className="h-6 w-6 text-secondary" />
                    <h2 className="font-serif text-3xl text-foreground">Common Mistakes</h2>
                  </div>
                  <div className="space-y-4">
                    {pose.commonMistakes.map((item, index) => (
                      <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                        <h3 className="font-medium text-foreground mb-2">{item.mistake}</h3>
                        <p className="text-muted-foreground leading-relaxed">
                          <span className="font-medium text-secondary">Correction:</span> {item.correction}
                        </p>
                      </Card>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Lightbulb className="h-6 w-6 text-accent" />
                    <h2 className="font-serif text-3xl text-foreground">Modifications & Props</h2>
                  </div>
                  <div className="space-y-4">
                    {pose.modifications.map((mod, index) => (
                      <Card key={index} className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                        <h3 className="font-medium text-foreground mb-2">{mod.title}</h3>
                        <p className="text-muted-foreground leading-relaxed">{mod.description}</p>
                      </Card>
                    ))}
                  </div>
                </div>
              </TabsContent>

              <TabsContent value="related" className="space-y-8">
                <div>
                  <h2 className="font-serif text-3xl text-foreground mb-6">Related Poses</h2>
                  <div className="grid md:grid-cols-3 gap-4">
                    {pose.relatedPoses.map((relatedPose) => (
                      <Link key={relatedPose.slug} href={`/poses/${relatedPose.slug}`}>
                        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
                          <h3 className="font-medium text-foreground">{relatedPose.name}</h3>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>

                <div>
                  <div className="flex items-center gap-2 mb-6">
                    <Users className="h-6 w-6 text-primary" />
                    <h2 className="font-serif text-3xl text-foreground">Featured In Programs</h2>
                  </div>
                  <div className="space-y-4">
                    {pose.programsFeaturingPose.map((program) => (
                      <Link key={program.slug} href={`/programs/${program.slug}`}>
                        <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-lg transition-shadow">
                          <h3 className="font-medium text-foreground mb-2">{program.name}</h3>
                          <p className="text-sm text-muted-foreground">Learn this pose as part of a complete program</p>
                        </Card>
                      </Link>
                    ))}
                  </div>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="font-serif text-3xl lg:text-4xl text-foreground mb-4">Ready to Deepen Your Practice?</h2>
            <p className="text-lg text-muted-foreground mb-8">
              Explore our curated programs to learn this pose and many more in a structured, supportive environment.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link href="/programs">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  Browse Programs
                </Button>
              </Link>
              <Link href="/poses">
                <Button
                  size="lg"
                  variant="outline"
                  className="border-border text-foreground hover:bg-muted bg-transparent"
                >
                  Explore More Poses
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
