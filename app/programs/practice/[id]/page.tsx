"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Textarea } from "@/components/ui/textarea"
import {
  ArrowLeft,
  Play,
  Pause,
  RotateCcw,
  Clock,
  Target,
  CheckCircle,
  BookOpen,
  Heart,
  Volume2,
  VolumeX,
  Maximize,
  ChevronLeft,
  ChevronRight,
  Lock,
  Crown,
  Circle,
} from "lucide-react"
import Link from "next/link"
import { useRouter, useSearchParams } from "next/navigation"
import { notFound } from "next/navigation"

interface SessionPose {
  name: string
  duration: string
  description: string
}

interface SessionDetail {
  videoUrl: string
  instructor: string
  focus: string[]
  equipment: string[]
  benefits: string[]
  poses: SessionPose[]
}

interface Session {
  id: number
  title: string
  description?: string
  duration: string
  type: string
  level?: string
  completed: boolean
  demoAccessible: boolean
}

interface WeekData {
  week: number
  theme: string
  sessions: Session[]
}

interface ProgramData {
  title: string
  totalWeeks: number
  weeks: WeekData[]
}

const programData: ProgramData = {
  title: "Posture & Alignment Mastery",
  totalWeeks: 6,
  weeks: [
    {
      week: 1,
      theme: "Foundation & Awareness",
      sessions: [
        {
          id: 1,
          title: "Foundation & Assessment",
          description: "Gentle introduction to your practice with posture assessment and basic alignment principles",
          duration: "30 min",
          type: "Foundation",
          level: "Beginner",
          completed: true,
          demoAccessible: true,
        },
        {
          id: 2,
          title: "Core Awareness",
          description: "Building fundamental core strength and stability for better posture support",
          duration: "35 min",
          type: "Strength",
          level: "Beginner",
          completed: true,
          demoAccessible: true,
        },
        {
          id: 3,
          title: "Breath & Movement",
          description: "Connecting breath with motion through flowing sequences",
          duration: "40 min",
          type: "Flow",
          level: "Beginner to Intermediate",
          completed: false,
          demoAccessible: false,
        },
      ],
    },
    {
      week: 2,
      theme: "Strengthen Your Core",
      sessions: [
        {
          id: 4,
          title: "Spinal Alignment",
          description: "Focus on proper spinal positioning and core engagement",
          duration: "35 min",
          type: "Alignment",
          level: "Intermediate",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 5,
          title: "Core Stability Flow",
          description: "Dynamic movements to build lasting core strength",
          duration: "40 min",
          type: "Strength",
          level: "Intermediate",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 6,
          title: "Integration Practice",
          description: "Combining alignment principles with flowing movement",
          duration: "45 min",
          type: "Flow",
          level: "Intermediate",
          completed: false,
          demoAccessible: false,
        },
      ],
    },
    {
      week: 3,
      theme: "Upper Body Alignment",
      sessions: [
        {
          id: 7,
          title: "Shoulder Opening",
          duration: "35 min",
          type: "Alignment",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 8,
          title: "Neck & Shoulder Release",
          duration: "30 min",
          type: "Flow",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 9,
          title: "Upper Body Integration",
          duration: "40 min",
          type: "Strength",
          completed: false,
          demoAccessible: false,
        },
      ],
    },
    {
      week: 4,
      theme: "Lower Body Foundation",
      sessions: [
        {
          id: 10,
          title: "Hip Alignment",
          duration: "35 min",
          type: "Alignment",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 11,
          title: "Leg Strength & Balance",
          duration: "40 min",
          type: "Strength",
          completed: false,
          demoAccessible: false,
        },
        { id: 12, title: "Lower Body Flow", duration: "45 min", type: "Flow", completed: false, demoAccessible: false },
      ],
    },
    {
      week: 5,
      theme: "Full Body Integration",
      sessions: [
        {
          id: 13,
          title: "Whole Body Alignment",
          duration: "40 min",
          type: "Alignment",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 14,
          title: "Dynamic Strength Flow",
          duration: "45 min",
          type: "Strength",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 15,
          title: "Integration Sequence",
          duration: "50 min",
          type: "Flow",
          completed: false,
          demoAccessible: false,
        },
      ],
    },
    {
      week: 6,
      theme: "Mastery & Refinement",
      sessions: [
        {
          id: 16,
          title: "Advanced Alignment",
          duration: "40 min",
          type: "Alignment",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 17,
          title: "Peak Practice",
          duration: "50 min",
          type: "Strength",
          completed: false,
          demoAccessible: false,
        },
        {
          id: 18,
          title: "Celebration Flow",
          duration: "45 min",
          type: "Flow",
          completed: false,
          demoAccessible: false,
        },
      ],
    },
  ],
}

const sessionDetails: Record<number, SessionDetail> = {
  1: {
    videoUrl: "/placeholder-video.mp4",
    instructor: "Sarah Chen",
    focus: ["Posture Assessment", "Basic Alignment", "Breath Awareness"],
    equipment: ["Yoga Mat", "Optional: Block"],
    benefits: [
      "Establish baseline posture awareness",
      "Learn fundamental breathing techniques",
      "Understand proper alignment cues",
    ],
    poses: [
      { name: "Mountain Pose", duration: "2 min", description: "Foundation standing posture" },
      { name: "Cat-Cow Stretch", duration: "3 min", description: "Spinal mobility warm-up" },
      { name: "Child's Pose", duration: "2 min", description: "Gentle hip and back release" },
      { name: "Seated Forward Fold", duration: "3 min", description: "Hamstring and spine stretch" },
    ],
  },
  2: {
    videoUrl: "/placeholder-video.mp4",
    instructor: "Sarah Chen",
    focus: ["Core Activation", "Stability Training", "Breath Coordination"],
    equipment: ["Yoga Mat"],
    benefits: ["Strengthen deep core muscles", "Improve spinal stability", "Enhance breath-movement coordination"],
    poses: [
      { name: "Dead Bug", duration: "4 min", description: "Core stability exercise" },
      { name: "Bird Dog", duration: "4 min", description: "Balance and core strength" },
      { name: "Modified Plank", duration: "3 min", description: "Full-body stability" },
      { name: "Bridge Pose", duration: "3 min", description: "Glute and core activation" },
    ],
  },
}

interface SessionDetailPageProps {
  params: {
    id: string
  }
}

export default function SessionDetailPage({ params }: SessionDetailPageProps) {
  const router = useRouter()
  const searchParams = useSearchParams()
  const isDemoMode = searchParams?.get("demo") === "true"

  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [progress, setProgress] = useState(0)
  const [activeTab, setActiveTab] = useState("overview")
  const [reflection, setReflection] = useState("")

  const sessionId = Number.parseInt(params.id)

  let currentSession: (Session & Partial<SessionDetail>) | null = null
  let currentWeekData: WeekData | null = null
  let currentWeekNumber = 1

  for (const weekData of programData.weeks) {
    const session = weekData.sessions.find((s) => s.id === sessionId)
    if (session) {
      currentSession = { ...session, ...sessionDetails[sessionId] }
      currentWeekData = weekData
      currentWeekNumber = weekData.week
      break
    }
  }

  if (!currentSession) {
    notFound()
  }

  if (!currentWeekData) {
    notFound()
  }

  // Check if user has access to this session
  const hasAccess = !isDemoMode || currentSession.demoAccessible

  const totalSessions = programData.weeks.reduce((acc, week) => acc + week.sessions.length, 0)
  const completedSessions = programData.weeks.reduce(
    (acc, week) => acc + week.sessions.filter((s) => s.completed).length,
    0,
  )
  const programProgress = (completedSessions / totalSessions) * 100

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Foundation":
        return "bg-primary/10 text-primary"
      case "Strength":
        return "bg-secondary/10 text-secondary"
      case "Flow":
        return "bg-accent/10 text-accent"
      case "Alignment":
        return "bg-muted/50 text-foreground"
      case "Integration":
        return "bg-primary/20 text-primary"
      default:
        return "bg-muted/50 text-foreground"
    }
  }

  if (!hasAccess) {
    return (
      <div className="min-h-screen bg-background">
        {/* Header */}
        <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
          <div className="container mx-auto px-4 py-4">
            <div className="flex items-center justify-between">
              <Button
                variant="ghost"
                onClick={() => router.back()}
                className="text-muted-foreground hover:text-foreground"
              >
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to Dashboard
              </Button>
              <div className="text-center">
                <h1 className="font-serif text-xl text-foreground">Session Locked</h1>
              </div>
              <div className="w-32" />
            </div>
          </div>
        </header>

        {/* Locked Content */}
        <div className="container mx-auto px-4 py-12">
          <div className="max-w-2xl mx-auto text-center">
            <div className="mb-8">
              <div className="w-20 h-20 bg-muted/30 rounded-full flex items-center justify-center mx-auto mb-6">
                <Lock className="h-10 w-10 text-muted-foreground" />
              </div>
              <h1 className="font-serif text-3xl text-foreground mb-4">{currentSession.title}</h1>
              <p className="text-muted-foreground mb-6">{currentSession.description}</p>

              <div className="flex items-center justify-center gap-4 mb-8 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <Clock className="h-4 w-4" />
                  <span>{currentSession.duration}</span>
                </div>
                <Badge variant="outline" className={getTypeColor(currentSession.type)}>
                  {currentSession.type}
                </Badge>
              </div>
            </div>

            <Card className="p-8 bg-gradient-to-r from-primary/10 to-secondary/10 border-border/50">
              <Crown className="h-12 w-12 text-primary mx-auto mb-4" />
              <h3 className="font-serif text-2xl text-foreground mb-4">Premium Session</h3>
              <p className="text-muted-foreground mb-6">
                This session is part of our premium content. Upgrade to unlock access to all sessions and features.
              </p>
              <Link href="/signup">
                <Button size="lg" className="bg-primary hover:bg-primary/90 text-primary-foreground">
                  <Crown className="h-4 w-4 mr-2" />
                  Upgrade to Premium
                </Button>
              </Link>
            </Card>
          </div>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-background">
      {isDemoMode && (
        <div className="bg-gradient-to-r from-primary/20 to-secondary/20 border-b border-border/50">
          <div className="container mx-auto px-4 py-3">
            <p className="text-center text-sm text-foreground">
              You-re viewing a demo session.{" "}
              <Link href="/signup" className="underline font-medium">
                Join now
              </Link>{" "}
              to access your full program.
            </p>
          </div>
        </div>
      )}

      {/* Header */}
      <header className="border-b border-border/50 bg-card/30 backdrop-blur-sm sticky top-0 z-10">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/dashboard">
              <Button variant="ghost" className="text-muted-foreground hover:text-foreground">
                <ArrowLeft className="h-4 w-4 mr-2" />
                Back to My Program
              </Button>
            </Link>
            <div className="text-center">
              <h1 className="font-serif text-xl text-foreground">{programData.title}</h1>
              <p className="text-sm text-muted-foreground">
                Week {currentWeekNumber} of {programData.totalWeeks}
              </p>
            </div>
            <div className="w-40" />
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="max-w-6xl mx-auto space-y-8">
          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="mb-4">
              <div className="flex items-center justify-between mb-2">
                <h3 className="font-serif text-lg text-foreground">Your Program Progress</h3>
                <span className="text-sm text-muted-foreground">
                  {completedSessions} of {totalSessions} sessions completed
                </span>
              </div>
              <Progress value={programProgress} className="h-2 mb-4" />
            </div>

            {/* Week Timeline */}
            <div className="flex items-center justify-between gap-2">
              {programData.weeks.map((week) => {
                const weekCompleted = week.sessions.every((s) => s.completed)
                const weekInProgress = week.sessions.some((s) => s.completed) && !weekCompleted
                const isCurrent = week.week === currentWeekNumber

                return (
                  <div key={week.week} className="flex-1">
                    <div className="flex flex-col items-center gap-2">
                      <div
                        className={`w-10 h-10 rounded-full flex items-center justify-center border-2 transition-colors ${
                          isCurrent
                            ? "bg-primary border-primary text-primary-foreground"
                            : weekCompleted
                              ? "bg-secondary border-secondary text-secondary-foreground"
                              : weekInProgress
                                ? "bg-primary/20 border-primary text-primary"
                                : "bg-background border-border text-muted-foreground"
                        }`}
                      >
                        {weekCompleted ? (
                          <CheckCircle className="h-5 w-5" />
                        ) : isCurrent ? (
                          <span className="font-medium">{week.week}</span>
                        ) : (
                          <span className="text-sm">{week.week}</span>
                        )}
                      </div>
                      <div className="text-center">
                        <p className={`text-xs font-medium ${isCurrent ? "text-primary" : "text-muted-foreground"}`}>
                          Week {week.week}
                        </p>
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>

            <div className="mt-6 text-center">
              <p className="text-sm text-foreground font-medium">
                You-re in Week {currentWeekNumber} of {programData.totalWeeks} — Keep Going!
              </p>
              <p className="text-xs text-muted-foreground mt-1">Consistency builds strength and ease.</p>
            </div>
          </Card>

          <div>
            <div className="mb-6">
              <h2 className="font-serif text-2xl text-foreground mb-2">
                Week {currentWeekNumber}: {currentWeekData.theme}
              </h2>
              <p className="text-muted-foreground">Focus on alignment through steady breathing and awareness.</p>
            </div>

            {/* Video Player */}
            <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50 mb-6">
              <div className="mb-4">
                <h3 className="font-serif text-xl text-foreground mb-2">{currentSession.title}</h3>
                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{currentSession.duration}</span>
                  </div>
                  <Badge variant="outline" className={getTypeColor(currentSession.type)}>
                    {currentSession.type}
                  </Badge>
                  <span>{currentSession.level}</span>
                </div>
              </div>

              <div className="aspect-video bg-muted/30 rounded-lg mb-4 relative overflow-hidden">
                {/* Placeholder video player */}
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-primary/20 to-secondary/20">
                  <div className="text-center">
                    <div className="w-20 h-20 bg-primary/20 rounded-full flex items-center justify-center mx-auto mb-4">
                      {isPlaying ? (
                        <Pause className="h-8 w-8 text-primary" />
                      ) : (
                        <Play className="h-8 w-8 text-primary" />
                      )}
                    </div>
                    <p className="text-sm text-muted-foreground">Video Player</p>
                  </div>
                </div>

                {/* Video Controls Overlay */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/60 to-transparent p-4">
                  <div className="flex items-center gap-4">
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsPlaying(!isPlaying)}
                      className="text-white hover:bg-white/20"
                    >
                      {isPlaying ? <Pause className="h-4 w-4" /> : <Play className="h-4 w-4" />}
                    </Button>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setProgress(0)}
                      className="text-white hover:bg-white/20"
                    >
                      <RotateCcw className="h-4 w-4" />
                    </Button>
                    <div className="flex-1">
                      <Progress value={progress} className="h-1" />
                    </div>
                    <Button
                      variant="ghost"
                      size="sm"
                      onClick={() => setIsMuted(!isMuted)}
                      className="text-white hover:bg-white/20"
                    >
                      {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                    </Button>
                    <Button variant="ghost" size="sm" className="text-white hover:bg-white/20">
                      <Maximize className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
              </div>

              {/* Session Actions */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <Button
                    size="lg"
                    onClick={() => setIsPlaying(!isPlaying)}
                    className="bg-primary hover:bg-primary/90 text-primary-foreground"
                  >
                    {isPlaying ? (
                      <>
                        <Pause className="h-4 w-4 mr-2" />
                        Pause Session
                      </>
                    ) : (
                      <>
                        <Play className="h-4 w-4 mr-2" />
                        {currentSession.completed ? "Review Session" : "Start Session"}
                      </>
                    )}
                  </Button>
                  {currentSession.completed && (
                    <Badge variant="secondary" className="bg-secondary/10 text-secondary">
                      <CheckCircle className="h-3 w-3 mr-1" />
                      Completed
                    </Badge>
                  )}
                </div>
                <div className="flex items-center gap-2">
                  <Button variant="ghost" size="sm">
                    <Heart className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <BookOpen className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </Card>

            {/* Session Details and Reflection */}
            <div className="grid lg:grid-cols-3 gap-6">
              <div className="lg:col-span-2">
                <Tabs value={activeTab} onValueChange={setActiveTab}>
                  <TabsList className="grid w-full grid-cols-3">
                    <TabsTrigger value="overview">Overview</TabsTrigger>
                    <TabsTrigger value="poses">Poses</TabsTrigger>
                    <TabsTrigger value="reflection">Reflection</TabsTrigger>
                  </TabsList>

                  <TabsContent value="overview" className="mt-6">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                      <h3 className="font-serif text-xl text-foreground mb-4">About This Session</h3>
                      <p className="text-muted-foreground mb-6">{currentSession.description}</p>

                      <div className="grid md:grid-cols-2 gap-6">
                        <div>
                          <h4 className="font-medium text-foreground mb-3">Focus Areas</h4>
                          <div className="space-y-2">
                            {currentSession.focus?.map((area: string, index: number) => (
                              <div key={index} className="flex items-center gap-2">
                                <Target className="h-4 w-4 text-primary" />
                                <span className="text-sm text-foreground">{area}</span>
                              </div>
                            ))}
                          </div>
                        </div>

                        <div>
                          <h4 className="font-medium text-foreground mb-3">Benefits</h4>
                          <div className="space-y-2">
                            {currentSession.benefits?.map((benefit: string, index: number) => (
                              <div key={index} className="flex items-center gap-2">
                                <CheckCircle className="h-4 w-4 text-secondary" />
                                <span className="text-sm text-foreground">{benefit}</span>
                              </div>
                            ))}
                          </div>
                        </div>
                      </div>

                      <div className="mt-6 p-4 bg-background/50 rounded-lg border border-border/50">
                        <h4 className="font-medium text-foreground mb-2">Equipment Needed</h4>
                        <div className="flex flex-wrap gap-2">
                          {currentSession.equipment?.map((item: string, index: number) => (
                            <Badge key={index} variant="outline" className="text-xs">
                              {item}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="poses" className="mt-6">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                      <h3 className="font-serif text-xl text-foreground mb-4">Pose Sequence</h3>
                      <div className="space-y-4">
                        {currentSession.poses?.map((pose: SessionPose, index: number) => (
                          <div
                            key={index}
                            className="flex items-center justify-between p-4 bg-background/50 rounded-lg border border-border/50"
                          >
                            <div>
                              <h4 className="font-medium text-foreground">{pose.name}</h4>
                              <p className="text-sm text-muted-foreground">{pose.description}</p>
                            </div>
                            <Badge variant="outline" className="text-xs">
                              {pose.duration}
                            </Badge>
                          </div>
                        ))}
                      </div>
                    </Card>
                  </TabsContent>

                  <TabsContent value="reflection" className="mt-6">
                    <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                      <h3 className="font-serif text-xl text-foreground mb-4">Session Reflection</h3>
                      <p className="text-sm text-muted-foreground mb-4">How did today-s practice feel?</p>
                      <Textarea
                        placeholder="Take a moment to reflect on your practice. What did you notice? How does your body feel?"
                        value={reflection}
                        onChange={(e) => setReflection(e.target.value)}
                        className="min-h-[150px] bg-background/50 border-border/50"
                      />
                      <div className="mt-4 flex justify-end">
                        <Button variant="outline" className="bg-transparent">
                          Save Reflection
                        </Button>
                      </div>

                      <div className="mt-6 p-4 bg-muted/30 rounded-lg">
                        <p className="text-sm text-muted-foreground italic">
                          -Remember to breathe deeply and listen to your body. Progress comes with consistent practice,
                          not perfection.-
                        </p>
                        <p className="text-xs text-muted-foreground mt-2">— {currentSession.instructor}</p>
                      </div>
                    </Card>
                  </TabsContent>
                </Tabs>
              </div>

              <div className="space-y-6">
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                  <h4 className="font-medium text-foreground mb-4">This Week-s Sessions</h4>
                  <div className="space-y-3">
                    {currentWeekData.sessions.map((session: Session, index: number) => {
                      const isCurrent = session.id === sessionId
                      const isLocked = !session.completed && !isCurrent && !session.demoAccessible
                      const canAccess = !isDemoMode || session.demoAccessible

                      return (
                        <div
                          key={session.id}
                          className={`p-3 rounded-lg border transition-colors ${
                            isCurrent
                              ? "bg-primary/10 border-primary"
                              : session.completed
                                ? "bg-secondary/5 border-border/50"
                                : "bg-background/50 border-border/50"
                          }`}
                        >
                          <div className="flex items-start gap-3">
                            <div className="mt-0.5">
                              {session.completed ? (
                                <CheckCircle className="h-5 w-5 text-secondary" />
                              ) : isCurrent ? (
                                <div className="w-5 h-5 rounded-full bg-primary flex items-center justify-center">
                                  <Play className="h-3 w-3 text-primary-foreground" />
                                </div>
                              ) : isLocked || !canAccess ? (
                                <Lock className="h-5 w-5 text-muted-foreground" />
                              ) : (
                                <Circle className="h-5 w-5 text-muted-foreground" />
                              )}
                            </div>
                            <div className="flex-1 min-w-0">
                              <p className={`text-sm font-medium ${isCurrent ? "text-primary" : "text-foreground"}`}>
                                Day {index + 1} – {session.title}
                              </p>
                              <p className="text-xs text-muted-foreground mt-0.5">{session.duration}</p>
                              {(isLocked || !canAccess) && !isCurrent && (
                                <p className="text-xs text-muted-foreground mt-1">
                                  {!canAccess ? "Unlock with full access" : "Complete previous sessions"}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      )
                    })}
                  </div>
                </Card>

                {/* Session Info */}
                <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
                  <h4 className="font-medium text-foreground mb-4">Session Details</h4>
                  <div className="space-y-3 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Instructor</span>
                      <span className="text-foreground">{currentSession.instructor}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Duration</span>
                      <span className="text-foreground">{currentSession.duration}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Level</span>
                      <span className="text-foreground">{currentSession.level}</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Type</span>
                      <Badge variant="outline" className={getTypeColor(currentSession.type)}>
                        {currentSession.type}
                      </Badge>
                    </div>
                  </div>
                </Card>
              </div>
            </div>
          </div>

          <Card className="p-6 bg-card/50 backdrop-blur-sm border-border/50">
            <div className="flex items-center justify-between gap-4">
              <div>
                {currentWeekNumber > 1 && (
                  <Link href={`/session/${programData.weeks[currentWeekNumber - 2].sessions[0].id}`}>
                    <Button variant="outline" className="bg-transparent">
                      <ChevronLeft className="h-4 w-4 mr-2" />
                      Previous Week
                    </Button>
                  </Link>
                )}
              </div>
              <Link href="/dashboard">
                <Button variant="outline" className="bg-transparent">
                  <Target className="h-4 w-4 mr-2" />
                  Back to My Program
                </Button>
              </Link>
              <div>
                {currentWeekNumber < programData.totalWeeks && (
                  <Link href={`/session/${programData.weeks[currentWeekNumber].sessions[0].id}`}>
                    <Button variant="outline" className="bg-transparent">
                      Next Week
                      <ChevronRight className="h-4 w-4 ml-2" />
                    </Button>
                  </Link>
                )}
              </div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
