"use client"

import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { ArrowLeft, Clock, Target, CheckCircle, Lock, Play, ChevronDown, ChevronUp } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { notFound } from "next/navigation"
import { useState } from "react"

const predefinedPrograms = {
  "better-posture": {
    id: "better-posture",
    title: "Yoga for Better Posture",
    description: "Strengthen your core and align your spine for lasting postural improvements",
    duration: "6 weeks, 3 sessions per week",
    level: "Beginner to Intermediate",
    focus: "Posture & Alignment",
    image: "/yoga-poses-for-better-posture-alignment.jpg",
    benefits: [
      "Improved spinal alignment and reduced back pain",
      "Stronger core muscles for better support",
      "Increased awareness of proper posture",
      "Enhanced confidence and presence",
    ],
    whoFor:
      "Perfect for desk workers, students, and anyone experiencing back pain from poor posture. Ideal if you spend long hours sitting or notice yourself slouching.",
    expectedOutcomes:
      "After 6 weeks, you'll notice significantly improved posture, reduced back tension, and a stronger, more stable core. Many students report feeling taller and more confident.",
    sampleSessions: [
      {
        title: "Foundation & Awareness",
        description: "Learn proper alignment and build awareness of your current posture patterns",
        locked: false,
      },
      {
        title: "Core Strengthening Flow",
        description: "Target deep core muscles that support your spine throughout the day",
        locked: false,
      },
      {
        title: "Spinal Mobility & Release",
        description: "Gentle movements to counteract the effects of prolonged sitting",
        locked: false,
      },
      {
        title: "Advanced Alignment Techniques",
        description: "Refine your practice with advanced poses for optimal spinal health",
        locked: true,
      },
      {
        title: "Integration & Daily Practice",
        description: "Learn to maintain good posture throughout your daily activities",
        locked: true,
      },
    ],
  },
  "stress-relief": {
    id: "stress-relief",
    title: "Stress Relief & Mindfulness",
    description: "Find calm and balance through gentle yoga and mindfulness practices",
    duration: "4 weeks, 4 sessions per week",
    level: "All Levels",
    focus: "Relaxation & Mindfulness",
    image: "/peaceful-meditation-and-relaxation-yoga.jpg",
    benefits: [
      "Significantly reduced stress and anxiety levels",
      "Improved sleep quality and deeper rest",
      "Enhanced mental clarity and focus",
      "Better emotional regulation and resilience",
    ],
    whoFor:
      "Ideal for busy professionals, parents, students, or anyone feeling overwhelmed by daily stress. Perfect for those new to meditation and mindfulness practices.",
    expectedOutcomes:
      "Experience a profound sense of calm and improved stress management. Students often report better sleep, increased patience, and a more positive outlook on life.",
    sampleSessions: [
      {
        title: "Breath & Relaxation Basics",
        description: "Learn fundamental breathing techniques for instant stress relief",
        locked: false,
      },
      {
        title: "Gentle Flow for Tension Release",
        description: "Slow, mindful movements to release physical and mental tension",
        locked: false,
      },
      {
        title: "Mindfulness Meditation Practice",
        description: "Develop present-moment awareness and mental clarity",
        locked: false,
      },
      {
        title: "Restorative Yoga for Deep Rest",
        description: "Passive poses supported by props for ultimate relaxation",
        locked: true,
      },
      {
        title: "Stress Management Integration",
        description: "Apply mindfulness techniques to daily stressful situations",
        locked: true,
      },
    ],
  },
  "strength-flexibility": {
    id: "strength-flexibility",
    title: "Strength & Flexibility Flow",
    description: "Build functional strength while maintaining grace and flexibility",
    duration: "8 weeks, 3 sessions per week",
    level: "Intermediate to Advanced",
    focus: "Strength & Flexibility",
    image: "/dynamic-yoga-flow-with-strength-poses.jpg",
    benefits: [
      "Increased functional strength and muscle tone",
      "Enhanced flexibility and range of motion",
      "Improved balance and coordination",
      "Greater body awareness and control",
    ],
    whoFor:
      "Great for athletes, fitness enthusiasts, and experienced yoga practitioners seeking to challenge themselves while maintaining flexibility.",
    expectedOutcomes:
      "Develop lean muscle strength, improved flexibility, and enhanced athletic performance. Students gain confidence in advanced poses and better body control.",
    sampleSessions: [
      {
        title: "Foundation Strength Assessment",
        description: "Evaluate current strength and flexibility levels",
        locked: false,
      },
      {
        title: "Dynamic Flow Sequences",
        description: "Challenging vinyasa flows that build heat and strength",
        locked: false,
      },
      {
        title: "Arm Balance Progressions",
        description: "Step-by-step approach to mastering arm balances",
        locked: false,
      },
      {
        title: "Advanced Backbend Series",
        description: "Safely progress into deeper backbends with proper preparation",
        locked: true,
      },
      {
        title: "Peak Pose Integration",
        description: "Combine strength and flexibility in challenging peak poses",
        locked: true,
      },
    ],
  },
}

interface ProgramDetailPageProps {
  params: {
    slug: string
  }
}

export default function ProgramDetailPage({ params }: ProgramDetailPageProps) {
  const router = useRouter()
  const program = predefinedPrograms[params.slug as keyof typeof predefinedPrograms]
  const [expandedWeeks, setExpandedWeeks] = useState<number[]>([1])

  if (!program) {
    notFound()
  }

  const parseDuration = (duration: string) => {
    const weeksMatch = duration.match(/(\d+)\s*weeks?/)
    const sessionsMatch = duration.match(/(\d+)\s*sessions?\s*per\s*week/)

    const weeks = weeksMatch ? Number.parseInt(weeksMatch[1]) : 4
    const sessionsPerWeek = sessionsMatch ? Number.parseInt(sessionsMatch[1]) : 3

    return { weeks, sessionsPerWeek, totalSessions: weeks * sessionsPerWeek }
  }

  const { weeks, sessionsPerWeek, totalSessions } = parseDuration(program.duration)

  const generateSessionTitle = (weekNum: number, sessionNum: number, focus: string) => {
    const sessionTitles: Record<string, string[]> = {
      "Posture & Alignment": [
        "Foundation & Awareness",
        "Core Strengthening Basics",
        "Spinal Alignment Flow",
        "Upper Body Posture",
        "Lower Body Stability",
        "Full Body Integration",
      ],
      "Relaxation & Mindfulness": [
        "Breath Awareness",
        "Gentle Release Flow",
        "Mindful Movement",
        "Deep Relaxation",
        "Meditation Practice",
        "Restorative Poses",
      ],
      "Strength & Flexibility": [
        "Foundation Strength",
        "Dynamic Flow",
        "Flexibility Focus",
        "Power Building",
        "Balance & Control",
        "Advanced Integration",
      ],
    }

    const titles = sessionTitles[focus] || sessionTitles["Posture & Alignment"]
    const index = ((weekNum - 1) * sessionsPerWeek + sessionNum - 1) % titles.length
    return titles[index]
  }

  const weekStructure = Array.from({ length: weeks }, (_, weekIndex) => {
    const weekNum = weekIndex + 1
    const sessions = Array.from({ length: sessionsPerWeek }, (_, sessionIndex) => {
      const sessionNum = sessionIndex + 1
      const globalSessionNum = (weekNum - 1) * sessionsPerWeek + sessionNum

      const isUnlocked = globalSessionNum <= 3

      return {
        weekNum,
        sessionNum,
        globalSessionNum,
        title: generateSessionTitle(weekNum, sessionNum, program.focus),
        isUnlocked,
      }
    })

    return {
      weekNum,
      sessions,
    }
  })

  const unlockedCount = weekStructure.reduce((acc, week) => acc + week.sessions.filter((s) => s.isUnlocked).length, 0)
  const lockedCount = totalSessions - unlockedCount

  const toggleWeek = (weekNum: number) => {
    setExpandedWeeks((prev) => (prev.includes(weekNum) ? prev.filter((w) => w !== weekNum) : [...prev, weekNum]))
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">
      {/* Header */}
      <header className="border-b border-stone-200 bg-white/80 backdrop-blur-sm">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <button
              onClick={() => router.back()}
              className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors"
            >
              <ArrowLeft className="h-4 w-4" />
              <span className="text-sm font-medium">Back to Programs</span>
            </button>
            <div className="flex items-center gap-4">
              <Link href="/login" className="text-sm text-stone-600 hover:text-stone-900 transition-colors">
                Sign In
              </Link>
              <Link href="/signup">
                <Button
                  variant="outline"
                  size="sm"
                  className="border-stone-300 text-stone-700 hover:bg-stone-50 bg-transparent"
                >
                  Get Started
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-12 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="bg-stone-100 px-3 py-1 rounded-full text-sm font-medium text-stone-700">
                  {program.level}
                </span>
                <span className="text-stone-400">•</span>
                <span className="text-sm text-stone-600">{program.focus}</span>
              </div>
              <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-4 text-balance">{program.title}</h1>
              <p className="text-xl text-stone-600 mb-6 text-pretty">{program.description}</p>
              <div className="flex items-center gap-4 mb-8 text-sm text-stone-500">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{program.duration}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Target className="h-4 w-4" />
                  <span>{program.focus}</span>
                </div>
              </div>
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white">
                Unlock Full Access
              </Button>
            </div>
            <div className="relative">
              <Image
                src={program.image || "/placeholder.svg"}
                alt={program.title}
                className="w-full h-80 object-cover rounded-2xl shadow-lg"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-16 px-4 bg-white">
        <div className="container mx-auto max-w-4xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Benefits */}
            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-6">What You-ll Gain</h2>
              <ul className="space-y-4">
                {program.benefits.map((benefit, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="h-5 w-5 text-emerald-600 mt-0.5 flex-shrink-0" />
                    <span className="text-stone-700">{benefit}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Who It's For */}
            <div>
              <h2 className="text-2xl font-serif text-stone-900 mb-6">Perfect For You If</h2>
              <p className="text-stone-700 leading-relaxed mb-6">{program.whoFor}</p>
              <div className="bg-stone-50 p-6 rounded-xl">
                <h3 className="font-semibold text-stone-900 mb-2">Expected Outcomes</h3>
                <p className="text-stone-700 text-sm">{program.expectedOutcomes}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Sample Sessions */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-serif text-stone-900 mb-3">Program Structure</h2>
            <p className="text-stone-600">
              {totalSessions} sessions across {weeks} weeks • {unlockedCount} preview sessions available
            </p>
          </div>

          <div className="space-y-3">
            {weekStructure.map((week) => (
              <Card key={week.weekNum} className="border-stone-200 overflow-hidden">
                <button
                  onClick={() => toggleWeek(week.weekNum)}
                  className="w-full p-6 flex items-center justify-between hover:bg-stone-50 transition-colors"
                >
                  <div className="flex items-center gap-4">
                    <div className="bg-stone-100 px-3 py-1 rounded-full">
                      <span className="text-sm font-semibold text-stone-700">Week {week.weekNum}</span>
                    </div>
                    <span className="text-stone-600 text-sm">{week.sessions.length} sessions</span>
                    <span className="text-stone-400 text-xs">
                      {week.sessions.filter((s) => s.isUnlocked).length > 0 && (
                        <span className="text-emerald-600 font-medium">
                          {week.sessions.filter((s) => s.isUnlocked).length} preview available
                        </span>
                      )}
                    </span>
                  </div>
                  {expandedWeeks.includes(week.weekNum) ? (
                    <ChevronUp className="h-5 w-5 text-stone-400" />
                  ) : (
                    <ChevronDown className="h-5 w-5 text-stone-400" />
                  )}
                </button>

                {expandedWeeks.includes(week.weekNum) && (
                  <div className="border-t border-stone-200 bg-stone-50/50">
                    <div className="p-4 space-y-2">
                      {week.sessions.map((session) => (
                        <div
                          key={session.globalSessionNum}
                          className={`p-4 bg-white rounded-lg border border-stone-200 ${
                            session.isUnlocked ? "hover:border-stone-300 transition-colors" : "opacity-60"
                          }`}
                        >
                          {session.isUnlocked ? (
                            <Link
                              href={`/session/${session.globalSessionNum}`}
                              className="flex items-center justify-between group"
                            >
                              <div className="flex items-center gap-3">
                                <div className="bg-emerald-50 p-2 rounded-lg group-hover:bg-emerald-100 transition-colors">
                                  <Play className="h-4 w-4 text-emerald-600" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-medium text-stone-500">
                                      Session {session.sessionNum}
                                    </span>
                                    <span className="text-xs text-emerald-600 font-medium">Preview Available</span>
                                  </div>
                                  <h4 className="font-medium text-stone-900 group-hover:text-stone-700">
                                    {session.title}
                                  </h4>
                                </div>
                              </div>
                              <div className="text-stone-400 group-hover:text-stone-600 transition-colors">
                                <span className="text-sm">Watch Preview →</span>
                              </div>
                            </Link>
                          ) : (
                            <div className="flex items-center justify-between">
                              <div className="flex items-center gap-3">
                                <div className="bg-stone-100 p-2 rounded-lg">
                                  <Lock className="h-4 w-4 text-stone-400" />
                                </div>
                                <div>
                                  <div className="flex items-center gap-2 mb-1">
                                    <span className="text-xs font-medium text-stone-500">
                                      Session {session.sessionNum}
                                    </span>
                                  </div>
                                  <h4 className="font-medium text-stone-700">{session.title}</h4>
                                </div>
                              </div>
                              <span className="text-xs text-stone-400">Unlock with full access</span>
                            </div>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </Card>
            ))}
          </div>

          <div className="text-center mt-8">
            <p className="text-stone-500 text-sm mb-6">{lockedCount} more sessions available with full access</p>
            <Link href="/signup">
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white">
                Unlock Full Program
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Ready to Transform Your Practice?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Join thousands who have already experienced the benefits of our expertly crafted programs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/programs">
              <Button
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent"
              >
                Explore Other Programs
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white">
                Start Your Journey
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
