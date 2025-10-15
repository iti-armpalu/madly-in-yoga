"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Clock, Target, SlidersHorizontal } from "lucide-react"
import Link from "next/link"
// import { useRouter } from "next/navigation"
import { ProgramImagePlaceholder } from "@/components/program-image-placeholder"
import { useState, useMemo } from "react"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"

const predefinedPrograms = [
  {
    id: "better-posture",
    title: "Yoga for Better Posture",
    description: "Strengthen your core and align your spine",
    duration: "6 weeks, 3 sessions per week",
    level: "Beginner to Intermediate",
    focus: "Posture & Alignment",
    image: "/serene-yoga-pose-for-posture-alignment.jpg",
    price: 89,
    originalPrice: 129,
    benefits: ["Improved spinal alignment", "Reduced back tension", "Stronger core muscles"],
    whoFor: "Perfect for desk workers and anyone experiencing back pain from poor posture",
  },
  {
    id: "stress-relief",
    title: "Stress Relief & Mindfulness",
    description: "Find calm and balance in your daily life",
    duration: "4 weeks, 4 sessions per week",
    level: "All Levels",
    focus: "Relaxation & Mindfulness",
    image: "/peaceful-meditation-yoga-scene.jpg",
    price: 79,
    originalPrice: 119,
    benefits: ["Reduced stress and anxiety", "Better sleep quality", "Enhanced mental clarity"],
    whoFor: "Ideal for busy professionals and anyone seeking inner peace",
  },
  {
    id: "strength-flexibility",
    title: "Strength & Flexibility Flow",
    description: "Build power while maintaining grace",
    duration: "8 weeks, 3 sessions per week",
    level: "Intermediate to Advanced",
    focus: "Strength & Flexibility",
    image: "/dynamic-yoga-flow-strength-pose.jpg",
    price: 119,
    originalPrice: 169,
    benefits: ["Increased muscle strength", "Enhanced flexibility", "Improved balance"],
    whoFor: "Great for athletes and experienced practitioners seeking challenge",
  },
  {
    id: "morning-energy",
    title: "Morning Energy Boost",
    description: "Start your day with vitality and focus",
    duration: "3 weeks, 5 sessions per week",
    level: "All Levels",
    focus: "Energy & Vitality",
    image: "/sunrise-yoga-morning-practice.jpg",
    price: 59,
    originalPrice: 89,
    benefits: ["Increased daily energy", "Better morning routine", "Enhanced focus"],
    whoFor: "Perfect for early risers and anyone wanting to energize their mornings",
  },
  {
    id: "deep-stretch",
    title: "Deep Stretch & Recovery",
    description: "Release tension and restore your body",
    duration: "5 weeks, 3 sessions per week",
    level: "All Levels",
    focus: "Recovery & Flexibility",
    image: "/gentle-yoga-stretching-recovery-pose.jpg",
    price: 79,
    originalPrice: 119,
    benefits: ["Improved flexibility", "Reduced muscle tension", "Better recovery"],
    whoFor: "Ideal for athletes, active individuals, or anyone with tight muscles",
  },
  {
    id: "beginner-foundation",
    title: "Beginner's Foundation",
    description: "Build confidence with yoga fundamentals",
    duration: "6 weeks, 2 sessions per week",
    level: "Complete Beginner",
    focus: "Fundamentals & Basics",
    image: "/gentle-beginner-yoga-pose-instruction.jpg",
    price: 69,
    originalPrice: 99,
    benefits: ["Solid yoga foundation", "Increased confidence", "Proper alignment"],
    whoFor: "Perfect for complete beginners or those returning to yoga",
  },
]

export default function ProgramsPage() {
//   const router = useRouter()

  const [selectedLevel, setSelectedLevel] = useState<string>("all")
  const [selectedFocus, setSelectedFocus] = useState<string>("all")
  const [selectedPriceRange, setSelectedPriceRange] = useState<string>("all")
  const [sortBy, setSortBy] = useState<string>("newest")

  const levels = ["all", "Complete Beginner", "Beginner to Intermediate", "Intermediate to Advanced", "All Levels"]
  const focusAreas = [
    "all",
    "Posture & Alignment",
    "Relaxation & Mindfulness",
    "Strength & Flexibility",
    "Energy & Vitality",
    "Recovery & Flexibility",
    "Fundamentals & Basics",
  ]

  const filteredAndSortedPrograms = useMemo(() => {
    let filtered = [...predefinedPrograms]

    // Apply level filter
    if (selectedLevel !== "all") {
      filtered = filtered.filter((program) => program.level === selectedLevel)
    }

    // Apply focus filter
    if (selectedFocus !== "all") {
      filtered = filtered.filter((program) => program.focus === selectedFocus)
    }

    // Apply price range filter
    if (selectedPriceRange !== "all") {
      filtered = filtered.filter((program) => {
        if (selectedPriceRange === "under-70") return program.price < 70
        if (selectedPriceRange === "70-90") return program.price >= 70 && program.price <= 90
        if (selectedPriceRange === "90-plus") return program.price > 90
        return true
      })
    }

    // Apply sorting
    filtered.sort((a, b) => {
      if (sortBy === "price-low") return a.price - b.price
      if (sortBy === "price-high") return b.price - a.price
      if (sortBy === "duration-short") {
        const weeksA = Number.parseInt(a.duration.split(" ")[0])
        const weeksB = Number.parseInt(b.duration.split(" ")[0])
        return weeksA - weeksB
      }
      if (sortBy === "duration-long") {
        const weeksA = Number.parseInt(a.duration.split(" ")[0])
        const weeksB = Number.parseInt(b.duration.split(" ")[0])
        return weeksB - weeksA
      }
      return 0 // newest (default order)
    })

    return filtered
  }, [selectedLevel, selectedFocus, selectedPriceRange, sortBy])

  return (
    <div className="min-h-screen bg-gradient-to-b from-stone-50 to-white">

      {/* Hero Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="text-4xl md:text-5xl font-serif text-stone-900 mb-6 text-balance">
            Explore Our Curated Yoga Programs
          </h1>
          <p className="text-xl text-stone-600 mb-8 text-pretty max-w-2xl mx-auto">
            Choose from expertly designed paths to strength, balance, and inner peace.
          </p>
          {/* <div className="relative h-64 md:h-80 rounded-2xl overflow-hidden mb-8">
            <img
              src="/elegant-yoga-studio-scene-with-natural-light.jpg"
              alt="Serene yoga studio"
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-stone-900/20 to-transparent" />
          </div> */}
        </div>
      </section>

      {/* Filters and Sorting Section */}
      <section className="py-4 px-4 border-b border-stone-200">
        <div className="container mx-auto max-w-6xl">
          <div className="flex items-center gap-2 mb-4">
            <SlidersHorizontal className="h-4 w-4 text-stone-600" />
            <h3 className="text-sm font-medium text-stone-900 uppercase tracking-wide">Filter & Sort</h3>
          </div>

          <div className="flex flex-col lg:flex-row gap-6">
            {/* Filters */}
            <div className="flex-1 space-y-4">
              {/* Level Filter */}
              <div>
                <label className="text-xs font-medium text-stone-600 uppercase tracking-wide mb-2 block">
                  Experience Level
                </label>
                <div className="flex flex-wrap gap-2">
                  {levels.map((level) => (
                    <button
                      key={level}
                      onClick={() => setSelectedLevel(level)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedLevel === level
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {level === "all" ? "All Levels" : level}
                    </button>
                  ))}
                </div>
              </div>

              {/* Focus Area Filter */}
              <div>
                <label className="text-xs font-medium text-stone-600 uppercase tracking-wide mb-2 block">
                  Focus Area
                </label>
                <div className="flex flex-wrap gap-2">
                  {focusAreas.map((focus) => (
                    <button
                      key={focus}
                      onClick={() => setSelectedFocus(focus)}
                      className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                        selectedFocus === focus
                          ? "bg-stone-900 text-white"
                          : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                      }`}
                    >
                      {focus === "all" ? "All Focus Areas" : focus}
                    </button>
                  ))}
                </div>
              </div>

              {/* Price Range Filter */}
              <div>
                <label className="text-xs font-medium text-stone-600 uppercase tracking-wide mb-2 block">
                  Price Range
                </label>
                <div className="flex flex-wrap gap-2">
                  <button
                    onClick={() => setSelectedPriceRange("all")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedPriceRange === "all"
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    All Prices
                  </button>
                  <button
                    onClick={() => setSelectedPriceRange("under-70")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedPriceRange === "under-70"
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    Under $70
                  </button>
                  <button
                    onClick={() => setSelectedPriceRange("70-90")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedPriceRange === "70-90"
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    $70 - $90
                  </button>
                  <button
                    onClick={() => setSelectedPriceRange("90-plus")}
                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                      selectedPriceRange === "90-plus"
                        ? "bg-stone-900 text-white"
                        : "bg-stone-100 text-stone-600 hover:bg-stone-200"
                    }`}
                  >
                    $90+
                  </button>
                </div>
              </div>
            </div>

            {/* Sort */}
            <div className="lg:w-64">
              <label className="text-xs font-medium text-stone-600 uppercase tracking-wide mb-2 block">Sort By</label>
              <Select value={sortBy} onValueChange={setSortBy}>
                <SelectTrigger className="w-full bg-white border-stone-300">
                  <SelectValue placeholder="Sort by..." />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="newest">Newest First</SelectItem>
                  <SelectItem value="price-low">Price: Low to High</SelectItem>
                  <SelectItem value="price-high">Price: High to Low</SelectItem>
                  <SelectItem value="duration-short">Duration: Shortest First</SelectItem>
                  <SelectItem value="duration-long">Duration: Longest First</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>

          <div className="flex items-center justify-between mt-4 pt-4 border-t border-stone-200">
            <p className="text-sm text-stone-600">
              Showing <span className="font-semibold text-stone-900">{filteredAndSortedPrograms.length}</span> of{" "}
              <span className="font-semibold text-stone-900">{predefinedPrograms.length}</span> programs
            </p>
            {(selectedLevel !== "all" || selectedFocus !== "all" || selectedPriceRange !== "all") && (
              <button
                onClick={() => {
                  setSelectedLevel("all")
                  setSelectedFocus("all")
                  setSelectedPriceRange("all")
                }}
                className="text-sm text-stone-600 hover:text-stone-900 underline"
              >
                Clear all filters
              </button>
            )}
          </div>
        </div>
      </section>

      {/* Programs Grid */}
      <section className="py-16 px-4">
        <div className="container mx-auto max-w-6xl">
          {filteredAndSortedPrograms.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-xl text-stone-600 mb-4">No programs match your filters</p>
              <button
                onClick={() => {
                  setSelectedLevel("all")
                  setSelectedFocus("all")
                  setSelectedPriceRange("all")
                }}
                className="text-stone-900 underline hover:no-underline"
              >
                Clear all filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {filteredAndSortedPrograms.map((program) => (
                <Card
                  key={program.id}
                  className="group hover:shadow-lg transition-all duration-300 border-stone-200 overflow-hidden"
                >
                  <div className="relative h-48 overflow-hidden">
                    <ProgramImagePlaceholder className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" />
                    <div className="absolute top-4 left-4">
                      <span className="bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-medium text-stone-700">
                        {program.level}
                      </span>
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-stone-900/90 backdrop-blur-sm px-3 py-1 rounded-full">
                        <div className="flex items-center gap-1">
                          <span className="text-white font-semibold text-sm">${program.price}</span>
                          <span className="text-stone-300 text-xs line-through">${program.originalPrice}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-2">
                      <h3 className="text-xl font-serif text-stone-900 flex-1">{program.title}</h3>
                    </div>
                    <p className="text-stone-600 mb-4 text-sm">{program.description}</p>

                    <div className="space-y-3 mb-4 pb-4 border-b border-stone-200">
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <Clock className="h-5 w-5 text-stone-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-1">
                            Duration
                          </div>
                          <div className="text-sm text-stone-700 leading-relaxed">{program.duration}</div>
                        </div>
                      </div>
                      <div className="flex items-start gap-3">
                        <div className="mt-0.5">
                          <Target className="h-5 w-5 text-stone-400" />
                        </div>
                        <div className="flex-1">
                          <div className="text-xs font-medium text-stone-500 uppercase tracking-wide mb-1">
                            Focus Area
                          </div>
                          <div className="text-sm text-stone-700 leading-relaxed">{program.focus}</div>
                        </div>
                      </div>
                    </div>

                    <div className="mb-4 p-3 bg-stone-50 rounded-lg">
                      <div className="flex items-center justify-between">
                        <div>
                          <span className="text-2xl font-bold text-stone-900">${program.price}</span>
                          <span className="text-stone-500 text-sm line-through ml-2">${program.originalPrice}</span>
                        </div>
                        <div className="text-right">
                          <div className="text-xs text-green-700 font-medium">
                            Save ${program.originalPrice - program.price}
                          </div>
                          <div className="text-xs text-stone-500">Limited time</div>
                        </div>
                      </div>
                    </div>

                    <Link href={`/programs/${program.id}`}>
                      <Button className="w-full bg-stone-900 hover:bg-stone-800 text-white">View Program</Button>
                    </Link>
                  </CardContent>
                </Card>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-stone-50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-3xl font-serif text-stone-900 mb-4">Ready to Begin Your Journey?</h2>
          <p className="text-stone-600 mb-8 max-w-2xl mx-auto">
            Or create a personalized program tailored specifically to your goals and lifestyle.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/">
              <Button
                variant="outline"
                size="lg"
                className="border-stone-300 text-stone-700 hover:bg-stone-100 bg-transparent"
              >
                Create Personal Program
              </Button>
            </Link>
            <Link href="/signup">
              <Button size="lg" className="bg-stone-900 hover:bg-stone-800 text-white">
                Get Started Today
              </Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  )
}
