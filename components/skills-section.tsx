"use client"

import { Code2, Wrench } from "lucide-react"
import { useEffect, useState } from "react"

const skillCategories = [
  {
    title: "Deep Learning",
    icon: "pytorch",
    skills: [
      { name: "PyTorch", level: 90 },
      { name: "TensorFlow", level: 85 },
      { name: "Keras", level: 85 },
      { name: "JAX", level: 60 },
    ],
    color: "from-orange-500/20 to-red-500/10",
  },
  {
    title: "NLP & Transformers",
    icon: "huggingface",
    skills: [
      { name: "HuggingFace", level: 90 },
      { name: "BERT/GPT", level: 85 },
      { name: "spaCy", level: 80 },
      { name: "NLTK", level: 75 },
    ],
    color: "from-primary/20 to-primary/5",
  },
  {
    title: "ML Operations",
    icon: "mlops",
    skills: [
      { name: "MLflow", level: 80 },
      { name: "Docker", level: 85 },
      { name: "AWS/GCP", level: 70 },
      { name: "FastAPI", level: 85 },
    ],
    color: "from-sky-500/20 to-blue-500/10",
  },
  {
    title: "Data Science",
    icon: "data",
    skills: [
      { name: "Pandas", level: 95 },
      { name: "NumPy", level: 95 },
      { name: "Scikit-learn", level: 90 },
      { name: "SQL", level: 80 },
    ],
    color: "from-emerald-500/20 to-teal-500/10",
  },
]

const tools = [
  { name: "Python", category: "core" },
  { name: "Git", category: "core" },
  { name: "Linux", category: "core" },
  { name: "Jupyter", category: "tool" },
  { name: "VS Code", category: "tool" },
  { name: "Weights & Biases", category: "ml" },
  { name: "DVC", category: "ml" },
  { name: "Ray", category: "ml" },
  { name: "Spark", category: "data" },
  { name: "Redis", category: "db" },
  { name: "PostgreSQL", category: "db" },
  { name: "MongoDB", category: "db" },
]

function AnimatedBar({ level, delay = 0 }: { level: number; delay?: number }) {
  const [width, setWidth] = useState(0)

  useEffect(() => {
    const timer = setTimeout(() => {
      setWidth(level)
    }, delay)
    return () => clearTimeout(timer)
  }, [level, delay])

  return (
    <div className="h-2 rounded-full bg-secondary/80 overflow-hidden">
      <div
        className="h-full rounded-full bg-gradient-to-r from-primary to-primary/70 transition-all duration-1000 ease-out"
        style={{ width: `${width}%` }}
      />
    </div>
  )
}

export function SkillsSection() {
  return (
    <section className="relative">
      <div className="mx-auto max-w-7xl px-6 py-24 md:py-32">
        {/* Section header */}
        <div className="mb-16 text-center">
          <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary mb-6">
            <Code2 className="h-4 w-4" />
            Technical Skills
          </div>
          <h2 className="text-3xl font-bold tracking-tight text-foreground sm:text-4xl">
            Tools & <span className="text-gradient">Technologies</span>
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-muted-foreground">
            Technologies I use daily to build intelligent systems and ML pipelines
          </p>
        </div>

        {/* Skill Categories Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {skillCategories.map((category, categoryIndex) => (
            <div
              key={categoryIndex}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-7 transition-all duration-500 card-hover"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 transition-opacity duration-500 group-hover:opacity-100`} />
              
              <div className="relative space-y-6">
                <div className="flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <Code2 className="h-5 w-5 text-primary" />
                  </div>
                  <h3 className="text-lg font-semibold text-foreground">{category.title}</h3>
                </div>
                
                <div className="space-y-4">
                  {category.skills.map((skill, skillIndex) => (
                    <div key={skillIndex} className="space-y-2">
                      <div className="flex justify-between items-center text-sm">
                        <span className="font-medium text-foreground">{skill.name}</span>
                        <span className="text-primary font-mono text-xs tabular-nums">{skill.level}%</span>
                      </div>
                      <AnimatedBar level={skill.level} delay={categoryIndex * 100 + skillIndex * 50} />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other Tools Section */}
        <div className="mt-12 rounded-2xl border border-border/50 bg-card p-8">
          <div className="flex items-center gap-4 mb-6">
            <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
              <Wrench className="h-5 w-5 text-primary" />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-foreground">Other Tools & Technologies</h3>
              <p className="text-sm text-muted-foreground">Additional tools in my toolkit</p>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-3">
            {tools.map((tool, index) => (
              <span
                key={index}
                className="rounded-xl bg-secondary/80 px-5 py-2.5 text-sm font-medium text-secondary-foreground transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:shadow-lg hover:shadow-primary/20 cursor-default"
              >
                {tool.name}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
