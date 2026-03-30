import { ProjectCard } from "@/components/project-card"
import { Layers, Filter } from "lucide-react"

const projects = [
  {
    title: "Sentiment Analysis Engine",
    description: "Fine-tuned BERT model for multi-class sentiment classification on customer reviews with 94% accuracy. Deployed as a REST API with FastAPI and containerized with Docker for scalable cloud deployment.",
    model: "BERT-base",
    tags: ["PyTorch", "HuggingFace", "FastAPI", "Docker"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Neural Machine Translation",
    description: "Sequence-to-sequence transformer model for English-German translation using multi-head attention mechanism. Trained on WMT dataset achieving 32.5 BLEU score.",
    model: "Transformer",
    tags: ["PyTorch", "Transformers", "BLEU Score", "AWS"],
    github: "https://github.com",
  },
  {
    title: "Image Captioning System",
    description: "CNN-LSTM architecture that generates descriptive captions for images. Uses ResNet-50 encoder with attention-based LSTM decoder for context-aware descriptions.",
    model: "ResNet + LSTM",
    tags: ["TensorFlow", "Keras", "OpenCV", "Flask"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Fraud Detection Model",
    description: "XGBoost ensemble model for credit card fraud detection with SMOTE oversampling. Achieved 99.2% recall on highly imbalanced dataset with real-time inference capabilities.",
    model: "XGBoost Ensemble",
    tags: ["Scikit-learn", "XGBoost", "Pandas", "MLflow"],
    github: "https://github.com",
  },
  {
    title: "Text Summarization API",
    description: "Abstractive text summarization using fine-tuned T5 model. Generates concise, coherent summaries for long documents and articles with custom length control.",
    model: "T5-base",
    tags: ["HuggingFace", "T5", "Streamlit", "GCP"],
    github: "https://github.com",
    demo: "https://demo.com",
    featured: true,
  },
  {
    title: "Object Detection System",
    description: "Real-time object detection using YOLOv8 for autonomous vehicle simulation. Optimized for edge deployment with TensorRT achieving 45 FPS on Jetson Nano.",
    model: "YOLOv8",
    tags: ["PyTorch", "YOLO", "TensorRT", "CUDA"],
    github: "https://github.com",
  },
  {
    title: "Recommendation Engine",
    description: "Hybrid recommendation system combining collaborative filtering and content-based approaches using neural embeddings. Serves 10M+ recommendations daily.",
    model: "Neural CF",
    tags: ["TensorFlow", "Keras", "Redis", "PostgreSQL"],
    github: "https://github.com",
    demo: "https://demo.com",
  },
  {
    title: "Named Entity Recognition",
    description: "BiLSTM-CRF model for extracting named entities from legal documents. Custom trained on domain-specific data with 96% F1 score on held-out test set.",
    model: "BiLSTM-CRF",
    tags: ["spaCy", "PyTorch", "CRF", "Prodigy"],
    github: "https://github.com",
  },
]

export default function ProjectsPage() {
  return (
    <div className="pt-20">
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        {/* Background elements */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-1/4 h-96 w-96 rounded-full bg-primary/10 blur-[120px]" />
          <div className="absolute bottom-0 right-1/4 h-80 w-80 rounded-full bg-primary/10 blur-[100px]" />
          <div className="absolute inset-0 grid-pattern [mask-image:radial-gradient(ellipse_60%_50%_at_50%_30%,#000_40%,transparent_100%)]" />
        </div>

        <div className="relative mx-auto max-w-7xl px-6 py-20 md:py-28">
          <div className="max-w-3xl space-y-6">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
              <Layers className="h-4 w-4" />
              Portfolio
            </div>
            
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl lg:text-6xl">
              Featured <span className="text-gradient">Projects</span>
            </h1>
            
            <p className="max-w-2xl text-lg text-muted-foreground leading-relaxed">
              A curated collection of machine learning projects showcasing expertise in NLP, 
              computer vision, and deep learning. Each project demonstrates end-to-end ML 
              pipeline development from research to production.
            </p>

            {/* Filter chips */}
            <div className="flex flex-wrap items-center gap-3 pt-4">
              <span className="flex items-center gap-2 text-sm text-muted-foreground">
                <Filter className="h-4 w-4" />
                Filter:
              </span>
              {['All', 'NLP', 'Computer Vision', 'MLOps'].map((filter, index) => (
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
          </div>
        </div>
      </section>

      {/* Projects Grid */}
      <section className="relative border-t border-border/30">
        <div className="mx-auto max-w-7xl px-6 py-16 md:py-24">
          <div className="grid gap-6 md:grid-cols-2">
            {projects.map((project, index) => (
              <ProjectCard key={index} {...project} />
            ))}
          </div>

          {/* Load more */}
          <div className="mt-16 text-center">
            <button className="inline-flex items-center gap-2 rounded-xl border border-border bg-card px-8 py-4 text-sm font-semibold text-foreground transition-all hover:border-primary/50 hover:bg-secondary">
              Load More Projects
            </button>
          </div>
        </div>
      </section>
    </div>
  )
}
