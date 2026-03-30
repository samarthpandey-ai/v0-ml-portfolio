import { Target, GraduationCap, Plane, Briefcase, ArrowRight, Sparkles } from "lucide-react"

const goals = [
  {
    icon: Target,
    title: "GATE 2027",
    description:
      "Preparing intensively for GATE examination with focus on CS fundamentals, Data Structures, Algorithms, and Machine Learning.",
    timeline: "AIR < 500",
    color: "from-amber-500 to-orange-600",
  },
  {
    icon: GraduationCap,
    title: "Masters in Germany",
    description:
      "Planning to pursue M.Sc. in Artificial Intelligence or Data Science from top German universities like TUM, RWTH Aachen, or LMU Munich.",
    timeline: "2028-2030",
    color: "from-primary to-primary/80",
  },
  {
    icon: Plane,
    title: "German Language",
    description:
      "Currently learning German (A2 level) with a goal to reach B2 proficiency before starting Masters.",
    timeline: "B2 by 2027",
    color: "from-sky-500 to-blue-600",
  },
  {
    icon: Briefcase,
    title: "Research Contributions",
    description:
      "Aspiring to publish research papers in top ML conferences like NeurIPS, ICML, or ACL during Masters.",
    timeline: "2+ Papers",
    color: "from-pink-500 to-rose-600",
  },
]

export function GoalsSection() {
  return (
    <section className="relative border-t border-border/30">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-card/50 via-background to-background" />

      <div className="relative mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Sparkles className="h-4 w-4" />
            Future Plans
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Goals & <span className="text-gradient">Aspirations</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            My roadmap for the next few years, combining academic excellence 
            with practical experience in the field of AI/ML.
          </p>
        </div>

        {/* Goals Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {goals.map((goal, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-500 card-hover"
            >
              {/* Hover gradient */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              
              {/* Corner accent */}
              <div className="absolute top-0 right-0 h-24 w-24 bg-gradient-to-bl from-primary/10 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

              <div className="relative flex items-start gap-5">
                <div className={`flex h-14 w-14 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br ${goal.color} shadow-lg transition-transform duration-300 group-hover:scale-110`}>
                  <goal.icon className="h-6 w-6 text-white" />
                </div>
                <div className="space-y-3 flex-1">
                  <div className="flex flex-wrap items-center gap-3">
                    <h3 className="text-lg font-semibold text-foreground group-hover:text-primary transition-colors">
                      {goal.title}
                    </h3>
                    <span className="rounded-full bg-primary/10 px-3 py-1 text-xs font-semibold text-primary">
                      Target: {goal.timeline}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {goal.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className="mt-20">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card">
            {/* Background effects */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="absolute -top-24 -right-24 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
            <div className="absolute -bottom-24 -left-24 h-64 w-64 rounded-full bg-primary/10 blur-[100px]" />
            
            <div className="relative px-8 py-16 md:px-16 md:py-20">
              <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                <div className="text-center md:text-left space-y-3">
                  <h3 className="text-2xl font-bold text-foreground sm:text-3xl">
                    Interested in collaborating?
                  </h3>
                  <p className="text-muted-foreground max-w-xl">
                    I&apos;m always open to discussing new projects, creative ideas, 
                    or opportunities to be part of something amazing.
                  </p>
                </div>
                <a
                  href="mailto:your@email.com"
                  className="group inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30 hover:gap-3 whitespace-nowrap"
                >
                  Let&apos;s Connect
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
