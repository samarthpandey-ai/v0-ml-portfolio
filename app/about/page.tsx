import { JourneyTimeline } from "@/components/journey-timeline"
import { SkillsSection } from "@/components/skills-section"
import { GoalsSection } from "@/components/goals-section"
import { Mail, MapPin, GraduationCap, Sparkles, Download } from "lucide-react"

export default function AboutPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 h-96 w-96 rounded-full bg-primary/15 blur-[120px]" />
          <div className="absolute bottom-1/4 -right-32 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_80%_60%_at_50%_40%,#000_40%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="grid gap-12 lg:grid-cols-3 lg:gap-16">
            {/* Main Content */}
            <div className="lg:col-span-2 space-y-8">
              <div className="space-y-6">
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
                  <Sparkles className="h-4 w-4" />
                  About Me
                </div>
                
                <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
                  Building the Future <br />
                  <span className="text-gradient">with AI</span>
                </h1>
              </div>

              <div className="space-y-5 text-lg text-muted-foreground leading-relaxed max-w-2xl">
                <p>
                  I&apos;m a passionate Machine Learning Engineer currently pursuing my .Tech 
                  with a deep fascination for neural architectures and natural language 
                  processing. My journey in AI began with a simple curiosity about how 
                  machines can understand human language.
                </p>
                <p>
                  Over the years, I&apos;ve developed expertise in building end-to-end ML 
                  pipelines, from data preprocessing to model deployment. I believe in 
                  writing clean, efficient code and building systems that can scale.
                </p>
                <p>
                  When I&apos;m not training models, you&apos;ll find me participating in Kaggle 
                  competitions, contributing to open-source ML projects, or solving 
                  algorithmic problems on LeetCode. I&apos;m particularly excited about the 
                  intersection of NLP and real-world applications.
                </p>
              </div>

              {/* Action buttons */}
              <div className="flex flex-wrap items-center gap-4 pt-4">
                <a
                  href="mailto:your@email.com"
                  className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
                >
                  <Mail className="h-4 w-4" />
                  Get in Touch
                </a>
                <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card/50 px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-card">
                  <Download className="h-4 w-4" />
                  Download Resume
                </button>
              </div>
            </div>

            {/* Sidebar Info */}
            <div className="space-y-6">
              {/* Quick Info Card */}
              <div className="rounded-2xl border border-border/50 bg-card p-7 space-y-5 card-hover">
                <h3 className="text-lg font-semibold text-foreground">Quick Info</h3>
                <div className="space-y-4">
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <GraduationCap className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">B.Tech (Expected 2027)</p>
                      <p className="text-xs text-muted-foreground">Computer Science & AI</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <MapPin className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">India</p>
                      <p className="text-xs text-muted-foreground">Available Remotely</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4 p-3 rounded-xl bg-secondary/50">
                    <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary/10">
                      <Mail className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm font-medium text-foreground">your@email.com</p>
                      <p className="text-xs text-muted-foreground">Response within 24h</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Languages Card */}
              <div className="rounded-2xl border border-border/50 bg-card p-7 card-hover">
                <h3 className="text-lg font-semibold text-foreground mb-5">Languages</h3>
                <div className="space-y-4">
                  {[
                    { lang: "English", level: "Fluent", percent: 95 },
                    { lang: "Hindi", level: "Native", percent: 100 },
                    { lang: "German", level: "A2", percent: 30 },
                  ].map((item) => (
                    <div key={item.lang} className="space-y-2">
                      <div className="flex justify-between text-sm">
                        <span className="text-foreground font-medium">{item.lang}</span>
                        <span className="text-primary font-mono text-xs">{item.level}</span>
                      </div>
                      <div className="h-1.5 rounded-full bg-secondary overflow-hidden">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-500"
                          style={{ width: `${item.percent}%` }}
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Journey Timeline */}
      <JourneyTimeline />

      {/* Skills Section */}
      <SkillsSection />

      {/* Goals Section */}
      <GoalsSection />
    </div>
  )
}
