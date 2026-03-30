"use client"

import { Rocket, Code, Brain, Trophy, GraduationCap, Sparkles } from "lucide-react"

const timeline = [
  {
    year: "2023",
    title: "Started B.Tech Journey",
    description: "Began undergraduate studies with a focus on Computer Science and AI/ML.",
    icon: GraduationCap,
    color: "from-sky-500 to-blue-600",
  },
  {
    year: "2023",
    title: "First ML Project",
    description: "Built my first image classification model using TensorFlow and CNNs.",
    icon: Brain,
    color: "from-emerald-500 to-teal-600",
  },
  {
    year: "2024",
    title: "Kaggle Expert",
    description: "Achieved Expert rank on Kaggle through competitions in NLP and tabular data.",
    icon: Trophy,
    color: "from-amber-500 to-orange-600",
  },
  {
    year: "2024",
    title: "Open Source Contributions",
    description: "Started contributing to HuggingFace Transformers and PyTorch ecosystem.",
    icon: Code,
    color: "from-pink-500 to-rose-600",
  },
  {
    year: "2025",
    title: "Research Focus",
    description: "Diving deep into transformer architectures and attention mechanisms.",
    icon: Rocket,
    color: "from-primary to-primary/80",
  },
]

export function JourneyTimeline() {
  return (
    <section className="relative border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            My Journey
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            The Path <span className="text-gradient">So Far</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Key milestones that have shaped my career in machine learning and AI
          </p>
        </div>

        <div className="relative">
          {/* Timeline line - desktop */}
          <div className="absolute left-1/2 top-0 bottom-0 hidden w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:block" />
          
          {/* Timeline line - mobile */}
          <div className="absolute left-6 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-border to-transparent md:hidden" />

          <div className="space-y-12 md:space-y-0">
            {timeline.map((item, index) => (
              <div
                key={index}
                className={`relative flex items-center gap-8 md:gap-0 ${
                  index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                } ${index > 0 ? 'md:mt-12' : ''}`}
              >
                {/* Mobile: Icon on the left */}
                <div className="absolute left-0 z-10 md:hidden">
                  <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg`}>
                    <item.icon className="h-5 w-5 text-white" />
                  </div>
                </div>

                {/* Desktop: Icon in center */}
                <div className="absolute left-1/2 -translate-x-1/2 z-10 hidden md:block">
                  <div className={`flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${item.color} shadow-lg shadow-primary/20 ring-4 ring-background`}>
                    <item.icon className="h-6 w-6 text-white" />
                  </div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-4rem)] ${
                    index % 2 === 0 ? "md:pr-16 md:text-right" : "md:pl-16 md:text-left md:ml-auto"
                  }`}
                >
                  <div className="group rounded-2xl border border-border/50 bg-card p-6 transition-all duration-500 card-hover">
                    <span className="inline-block rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary mb-3">
                      {item.year}
                    </span>
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm text-muted-foreground leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
