import { CertificateCard } from "@/components/certificate-card"
import { GraduationCap, Award, Clock, Trophy } from "lucide-react"

const certificates = [
  {
    title: "Deep Learning Specialization",
    issuer: "DeepLearning.AI",
    date: "2024",
    credential: "Credential ID: ABC123XYZ",
    skills: ["Neural Networks", "CNN", "RNN", "Sequence Models"],
    color: "from-primary/20 via-primary/5 to-transparent",
  },
  {
    title: "Machine Learning",
    issuer: "Coursera - Stanford",
    date: "2024",
    credential: "Verified Certificate",
    skills: ["Supervised Learning", "Unsupervised Learning", "ML Systems"],
    color: "from-emerald-500/20 via-emerald-500/5 to-transparent",
  },
  {
    title: "Natural Language Processing",
    issuer: "DeepLearning.AI",
    date: "2024",
    credential: "Credential ID: NLP456DEF",
    skills: ["Attention Models", "Transformers", "BERT", "GPT"],
    color: "from-amber-500/20 via-amber-500/5 to-transparent",
  },
  {
    title: "Deep Learning with Python",
    issuer: "NPTEL - IIT Madras",
    date: "2023",
    credential: "Elite + Gold",
    skills: ["TensorFlow", "Keras", "Model Optimization"],
    color: "from-rose-500/20 via-rose-500/5 to-transparent",
  },
  {
    title: "Data Science Professional",
    issuer: "Coursera - IBM",
    date: "2023",
    credential: "Professional Certificate",
    skills: ["Python", "SQL", "Data Visualization", "ML"],
    color: "from-sky-500/20 via-sky-500/5 to-transparent",
  },
  {
    title: "MLOps Fundamentals",
    issuer: "DeepLearning.AI",
    date: "2024",
    credential: "Credential ID: MLO789GHI",
    skills: ["CI/CD", "Model Monitoring", "Feature Store", "TFX"],
    color: "from-cyan-500/20 via-cyan-500/5 to-transparent",
  },
  {
    title: "Computer Vision",
    issuer: "NPTEL - IIT Kharagpur",
    date: "2023",
    credential: "Elite Certificate",
    skills: ["Image Processing", "Object Detection", "Segmentation"],
    color: "from-teal-500/20 via-teal-500/5 to-transparent",
  },
  {
    title: "TensorFlow Developer",
    issuer: "Coursera - Google",
    date: "2024",
    credential: "Professional Certificate",
    skills: ["TF2.0", "TF Lite", "TF.js", "Model Deployment"],
    color: "from-orange-500/20 via-orange-500/5 to-transparent",
  },
]

const stats = [
  { label: "Certifications", value: "12+", icon: Award },
  { label: "Learning Hours", value: "500+", icon: Clock },
  { label: "Elite NPTEL", value: "3", icon: Trophy },
]

export default function CertificatesPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 left-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_40%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <GraduationCap className="h-4 w-4" />
              Credentials
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Professional <span className="text-gradient">Certifications</span>
            </h1>
            
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              Continuous learning through industry-recognized certifications from 
              leading institutions including DeepLearning.AI, Coursera, and NPTEL IITs.
            </p>

            {/* Stats inline */}
            <div className="flex flex-wrap items-center gap-8 pt-4">
              {stats.map((stat) => (
                <div key={stat.label} className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10 border border-primary/20">
                    <stat.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                    <p className="text-xs text-muted-foreground">{stat.label}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Certificate Grid */}
      <section className="relative border-t border-border/30">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          {/* Filter by provider */}
          <div className="mb-12 flex flex-wrap items-center gap-3">
            <span className="text-sm text-muted-foreground">Filter by:</span>
            {['All', 'DeepLearning.AI', 'Coursera', 'NPTEL'].map((filter, index) => (
              <button
                key={filter}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  index === 0 
                    ? 'bg-primary text-primary-foreground shadow-md shadow-primary/20' 
                    : 'bg-card border border-border text-muted-foreground hover:text-foreground hover:border-primary/50'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {certificates.map((cert, index) => (
              <CertificateCard key={index} {...cert} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="border-t border-border/30">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="relative overflow-hidden rounded-3xl border border-border/50 bg-card p-10 md:p-16">
            {/* Background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-primary/5" />
            <div className="absolute top-0 right-0 h-64 w-64 rounded-full bg-primary/20 blur-[100px]" />
            
            <div className="relative text-center space-y-6">
              <h2 className="text-2xl font-bold text-foreground sm:text-3xl lg:text-4xl">
                Want to verify my credentials?
              </h2>
              <p className="max-w-xl mx-auto text-muted-foreground">
                All certificates are verifiable through their respective platforms. 
                Feel free to reach out for credential verification links.
              </p>
              <a
                href="mailto:your@email.com"
                className="inline-flex items-center gap-2 rounded-xl bg-primary px-8 py-4 text-sm font-semibold text-primary-foreground shadow-lg shadow-primary/25 transition-all hover:shadow-xl hover:shadow-primary/30"
              >
                Request Verification
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
