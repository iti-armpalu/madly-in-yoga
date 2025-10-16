"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Search } from "lucide-react"
import Link from "next/link"
import Image from "next/image"

const categories = ["All", "Standing", "Seated", "Balance", "Inversions", "Restorative"]
const focuses = ["All", "Strength", "Flexibility", "Alignment", "Breath"]
const levels = ["All", "Beginner", "Intermediate", "Advanced"]

const poses = [
  {
    slug: "tadasana",
    name: "Tadasana",
    englishName: "Mountain Pose",
    category: "Standing",
    focus: "Alignment",
    level: "Beginner",
    description: "Foundation of alignment and stillness",
    image: "/person-in-mountain-pose-yoga.jpg",
  },
  {
    slug: "adho-mukha-svanasana",
    name: "Adho Mukha Svanasana",
    englishName: "Downward-Facing Dog",
    category: "Inversions",
    focus: "Strength",
    level: "Beginner",
    description: "Energizing inversion that builds full-body strength",
    image: "/person-in-downward-dog-yoga-pose.jpg",
  },
  {
    slug: "virabhadrasana-i",
    name: "Virabhadrasana I",
    englishName: "Warrior I",
    category: "Standing",
    focus: "Strength",
    level: "Beginner",
    description: "Cultivates power, stability, and focus",
    image: "/person-in-warrior-one-yoga-pose.jpg",
  },
  {
    slug: "vrksasana",
    name: "Vrksasana",
    englishName: "Tree Pose",
    category: "Balance",
    focus: "Alignment",
    level: "Beginner",
    description: "Develops balance and inner calm",
    image: "/person-in-tree-pose-yoga-balance.jpg",
  },
  {
    slug: "balasana",
    name: "Balasana",
    englishName: "Child's Pose",
    category: "Restorative",
    focus: "Breath",
    level: "Beginner",
    description: "Gentle resting pose that calms the mind",
    image: "/person-in-child-pose-yoga-restorative.jpg",
  },
  {
    slug: "trikonasana",
    name: "Trikonasana",
    englishName: "Triangle Pose",
    category: "Standing",
    focus: "Flexibility",
    level: "Intermediate",
    description: "Opens the body while building strength and stability",
    image: "/person-in-triangle-pose-yoga.jpg",
  },
  {
    slug: "paschimottanasana",
    name: "Paschimottanasana",
    englishName: "Seated Forward Bend",
    category: "Seated",
    focus: "Flexibility",
    level: "Intermediate",
    description: "Deep stretch that calms the nervous system",
    image: "/person-in-seated-forward-bend-yoga.jpg",
  },
  {
    slug: "sirsasana",
    name: "Sirsasana",
    englishName: "Headstand",
    category: "Inversions",
    focus: "Strength",
    level: "Advanced",
    description: "King of asanas, builds focus and upper body strength",
    image: "/person-in-headstand-yoga-inversion.jpg",
  },
]

export default function PosesPage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [selectedCategory, setSelectedCategory] = useState("All")
  const [selectedFocus, setSelectedFocus] = useState("All")
  const [selectedLevel, setSelectedLevel] = useState("All")

  const filteredPoses = poses.filter((pose) => {
    const matchesSearch =
      pose.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pose.englishName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      pose.description.toLowerCase().includes(searchQuery.toLowerCase())
    const matchesCategory = selectedCategory === "All" || pose.category === selectedCategory
    const matchesFocus = selectedFocus === "All" || pose.focus === selectedFocus
    const matchesLevel = selectedLevel === "All" || pose.level === selectedLevel

    return matchesSearch && matchesCategory && matchesFocus && matchesLevel
  })

  return (
    <div className="min-h-screen bg-background">

      {/* Hero Section */}
      <section className="py-16 bg-muted/20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h1 className="font-serif text-5xl lg:text-6xl font-light text-foreground mb-6 text-balance">
              Pose Library
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed max-w-2xl mx-auto text-pretty">
              Each pose is a practice in awareness. Move slowly, observe deeply, and let every breath guide you.
            </p>
          </div>
        </div>
      </section>

      {/* Search and Filters */}
      <section className="py-8 border-b border-border/50 bg-card/20">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto space-y-6">
            {/* Search Bar */}
            <div className="relative max-w-xl mx-auto">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
              <Input
                type="text"
                placeholder="Search poses..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="pl-12 h-12 bg-background/50 border-border/50 focus:border-primary focus:ring-primary/20"
              />
            </div>

            {/* Filters */}
            <div className="space-y-4">
              {/* Category Filter */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Category</h3>
                <div className="flex flex-wrap gap-2">
                  {categories.map((category) => (
                    <Button
                      key={category}
                      variant={selectedCategory === category ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedCategory(category)}
                      className={
                        selectedCategory === category
                          ? "bg-primary text-primary-foreground"
                          : "bg-transparent border-border text-foreground hover:bg-muted"
                      }
                    >
                      {category}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Focus Filter */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Focus</h3>
                <div className="flex flex-wrap gap-2">
                  {focuses.map((focus) => (
                    <Button
                      key={focus}
                      variant={selectedFocus === focus ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedFocus(focus)}
                      className={
                        selectedFocus === focus
                          ? "bg-primary text-primary-foreground"
                          : "bg-transparent border-border text-foreground hover:bg-muted"
                      }
                    >
                      {focus}
                    </Button>
                  ))}
                </div>
              </div>

              {/* Level Filter */}
              <div>
                <h3 className="text-sm font-medium text-muted-foreground mb-3 uppercase tracking-wide">Level</h3>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <Button
                      key={level}
                      variant={selectedLevel === level ? "default" : "outline"}
                      size="sm"
                      onClick={() => setSelectedLevel(level)}
                      className={
                        selectedLevel === level
                          ? "bg-primary text-primary-foreground"
                          : "bg-transparent border-border text-foreground hover:bg-muted"
                      }
                    >
                      {level}
                    </Button>
                  ))}
                </div>
              </div>
            </div>

            {/* Results Count */}
            <div className="flex items-center justify-between pt-4">
              <p className="text-sm text-muted-foreground">
                {filteredPoses.length} {filteredPoses.length === 1 ? "pose" : "poses"} found
              </p>
              {(selectedCategory !== "All" || selectedFocus !== "All" || selectedLevel !== "All" || searchQuery) && (
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => {
                    setSelectedCategory("All")
                    setSelectedFocus("All")
                    setSelectedLevel("All")
                    setSearchQuery("")
                  }}
                  className="text-muted-foreground hover:text-foreground"
                >
                  Clear all filters
                </Button>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Poses Grid */}
      <section className="py-16">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            {filteredPoses.length > 0 ? (
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredPoses.map((pose) => (
                  <Link key={pose.slug} href={`/pose-library/${pose.slug}`}>
                    <Card className="group overflow-hidden bg-card/50 backdrop-blur-sm border-border/50 hover:shadow-xl transition-all duration-300 h-full">
                      <div className="relative aspect-[3/2] overflow-hidden">
                        <Image
                          src={pose.image || "/placeholder.svg"}
                          alt={pose.englishName}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                        <div className="absolute top-3 right-3">
                          <span className="px-3 py-1 bg-background/90 backdrop-blur-sm text-xs font-medium text-foreground rounded-full border border-border/50">
                            {pose.level}
                          </span>
                        </div>
                      </div>
                      <div className="p-6">
                        <div className="mb-2">
                          <h3 className="font-serif text-2xl text-foreground mb-1">{pose.englishName}</h3>
                          <p className="text-sm text-muted-foreground italic">{pose.name}</p>
                        </div>
                        <p className="text-muted-foreground leading-relaxed mb-4">{pose.description}</p>
                        <div className="flex items-center gap-3 text-xs text-muted-foreground">
                          <span className="px-2 py-1 bg-muted rounded">{pose.category}</span>
                          <span className="px-2 py-1 bg-muted rounded">{pose.focus}</span>
                        </div>
                      </div>
                    </Card>
                  </Link>
                ))}
              </div>
            ) : (
              <div className="text-center py-16">
                <p className="text-xl text-muted-foreground mb-4">No poses found matching your criteria</p>
                <Button
                  variant="outline"
                  onClick={() => {
                    setSelectedCategory("All")
                    setSelectedFocus("All")
                    setSelectedLevel("All")
                    setSearchQuery("")
                  }}
                >
                  Clear all filters
                </Button>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}
