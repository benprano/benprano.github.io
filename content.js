/* =====================================================================
   PORTFOLIO CONTENT — this is the ONLY file you need to edit.
   The site is bilingual: the EN/FR button in the header switches language.
   ---------------------------------------------------------------------
   How to update:
   1. Open this file in any text editor (VS Code, or directly on GitHub:
      open the file → pencil icon "Edit" → "Commit changes").
   2. Find the section you want (projects, publications, experience...).
   3. Copy an existing { ... } block, paste it at the top of the list,
      and change the text. Keep the commas between blocks.
   4. Save, open index.html in your browser to check, then push/commit.
      GitHub Pages republishes in about a minute.

   Bilingual text:
   - Text that differs by language is written as a pair:
        { en: "English text", fr: "Texte en français" }
   - Text that is the same in both languages (tool names, dates, titles
     of papers) can stay a plain string: "PyTorch".
   - If you only write the English part, the French page shows English
     for that item, so nothing breaks while you translate.

   Rules of thumb:
   - Text goes between quotes: "like this". If your text contains a
     double quote, use ’ or \" instead.
   - Every block in a list is followed by a comma.
   - Simple HTML is allowed inside text: <em>, <strong>, <code>.
   - Leave a field as "" or [] to hide it (e.g. no link → url: "").
   - icon options: pulse, wave, detect, flame, chat, cell, spark, heart,
     graph, alert, database, layers, search, shield, code, server, chart,
     eye, school, award.
   - project categories: research, timeseries, vision, llm, engineering
     (a project can have several).
   - If the page goes blank after an edit, a comma or quote is missing:
     press F12 → Console, it shows the line number.
   ===================================================================== */

window.PORTFOLIO = {

  defaultLanguage: "en",                   // "en" or "fr": language shown on first visit

  /* ---------- Identity & hero ---------- */
  profile: {
    shortName: "MBH Cissoko",              // header logo text
    initials: "MBH",                       // logo + avatar fallback
    firstNames: "Mamadou Ben Hamidou",
    lastName: "Cissoko",
    suffix: "Ph.D.",
    tagline: { en: "AI RESEARCHER · ML ENGINEER", fr: "CHERCHEUR IA · INGÉNIEUR ML" },
    eyebrow: { en: "AI Research Scientist · Deep Learning · LLMs & Multi-Agent Systems",
               fr: "Chercheur en IA · Deep Learning · LLM & systèmes multi-agents" },
    photo: "",                             // e.g. "photo.jpg" (put the file next to index.html)
    badge: { en: "Postdoc at LS2N · open to research & ML engineering roles",
             fr: "Post-doctorant au LS2N · ouvert aux postes en recherche et ingénierie ML" },
    headlineStart: { en: "Building models that make", fr: "Je conçois des modèles qui rendent" },
    typedPhrases: {
      en: ["complex data useful.", "irregular time series legible.", "clinical trajectories interpretable.",
           "tiny objects visible.", "LLM agents grounded.", "multi-agent systems observable."],
      fr: ["les données complexes utiles.", "les séries irrégulières lisibles.", "les trajectoires cliniques interprétables.",
           "les micro-objets visibles.", "les agents LLM fiables.", "les systèmes multi-agents observables."]
    },
    intro: {
      en: "Ph.D. in Computer Science and postdoctoral AI researcher specialising in <strong>deep learning for irregular time series</strong>, <strong>LLMs</strong>, <strong>retrieval-augmented generation</strong> and <strong>multi-agent systems</strong>. I design recent neural architectures (<strong>JEPA, diffusion, state-space models</strong>) and take them from research to working systems, from clinical digital twins to drone vision and observable LLM agents.",
      fr: "Docteur en informatique et chercheur post-doctoral en IA, spécialisé en <strong>apprentissage profond pour les séries temporelles irrégulières</strong>, <strong>LLM</strong>, <strong>génération augmentée par récupération (RAG)</strong> et <strong>systèmes multi-agents</strong>. Je conçois des architectures neuronales récentes (<strong>JEPA, diffusion, modèles d’espace d’états</strong>) et je les amène de la recherche à des systèmes opérationnels : jumeaux numériques cliniques, vision par drone, agents LLM observables."
    },
    location: "Nantes, France",
    cvLinks: [                             // "Download CV" buttons; remove a line to hide it
      { text: "CV (EN)", file: "CV_Cissoko_EN.pdf" },
      { text: "CV (FR)", file: "CV_Cissoko_FR.pdf" }
    ]
  },

  stats: [
    { value: "4",   label: { en: "peer-reviewed papers (2 journals, 2 conferences)", fr: "publications évaluées par les pairs (2 revues, 2 conférences)" } },
    { value: "6+",  label: { en: "years of ML research (Ph.D. + postdoc)", fr: "ans de recherche en ML (doctorat + post-doc)" } },
    { value: "30+", label: { en: "reviews for Information Sciences; NeurIPS, UAI, AISTATS reviewer", fr: "relectures pour Information Sciences ; relecteur NeurIPS, UAI, AISTATS" } },
    { value: "60+", label: { en: "engineering students taught at Nantes Université", fr: "élèves ingénieurs encadrés à Nantes Université" } }
  ],

  links: {
    email: "cissbenprano@gmail.com",
    phone: "",                              // e.g. "+33 7 53 56 15 78" (left empty: public site)
    linkedin: "https://www.linkedin.com/in/mamadou-ben-hamidou-cissoko-2171b0166/",
    github: "https://github.com/benprano",
    scholar: "https://scholar.google.com/citations?user=k_2SuOkAAAAJ&hl=en&oi=sra",
    orcid: "https://orcid.org/0009-0002-1840-9325"
  },

  /* ---------- "How I work" steps ---------- */
  method: [
    { icon: "database",
      title: { en: "Design for the data", fr: "Partir des données" },
      text: { en: "Choose representations and architectures around irregular sampling, missingness, tiny targets and pixel-level labels.",
              fr: "Choisir représentations et architectures selon l’échantillonnage irrégulier, les données manquantes, les micro-cibles et les annotations au pixel." } },
    { icon: "layers",
      title: { en: "Build the model", fr: "Construire le modèle" },
      text: { en: "Recurrent, attention, JEPA, state-space, GNN and diffusion models in PyTorch and TensorFlow, trained with DDP/FSDP.",
              fr: "Modèles récurrents, à attention, JEPA, espace d’états, GNN et diffusion en PyTorch et TensorFlow, entraînés avec DDP/FSDP." } },
    { icon: "search",
      title: { en: "Make it inspectable", fr: "Rendre le modèle inspectable" },
      text: { en: "Ablations, baselines, error audits, attention/CAM maps and experiment tracking so behaviour can be checked.",
              fr: "Ablations, références, audits d’erreurs, cartes d’attention/CAM et suivi d’expériences pour vérifier le comportement." } },
    { icon: "shield",
      title: { en: "Ship reproducibly", fr: "Livrer de façon reproductible" },
      text: { en: "Versioned pipelines on Slurm/HPC, Docker and CI/CD, with PyTest/DeepEval quality checks and OpenTelemetry tracing.",
              fr: "Pipelines versionnés sur Slurm/HPC, Docker et CI/CD, avec contrôles qualité PyTest/DeepEval et traçage OpenTelemetry." } }
  ],

  /* ---------- Experience (newest first) ---------- */
  experience: [
    {
      role: { en: "Postdoctoral Researcher — Digital Twin & Patient Simulation under General Anaesthesia",
              fr: "Chercheur post-doctoral — Jumeau numérique et simulation de patients sous anesthésie générale" },
      org: "LS2N (UMR 6004)", place: "Nantes, France",
      dates: { en: "Nov. 2024 – present", fr: "Nov. 2024 – présent" }, current: true,
      points: [
        { en: "Lead the technical architecture of a high-fidelity physiological patient simulator for clinical decision support and medical training.",
          fr: "Pilotage de l’architecture technique d’un simulateur physiologique de patient haute fidélité, pour l’aide à la décision clinique et la formation médicale." },
        { en: "Designed a digital-twin engine based on dynamic temporal neural networks that simulates multivariate intraoperative physiology in real time.",
          fr: "Conception d’un moteur de jumeau numérique fondé sur des réseaux de neurones temporels dynamiques, simulant en temps réel la physiologie peropératoire multivariée." },
        { en: "Built distributed AI streaming pipelines for low-latency inference, real-time personalisation and interpretability under clinical constraints.",
          fr: "Développement de pipelines de streaming IA distribués pour une inférence à faible latence, la personnalisation en temps réel et l’interprétabilité en contexte clinique." }
      ],
      tags: ["PyTorch", "TensorFlow", "Unity", "HPC"]
    },
    {
      role: { en: "Ph.D. Researcher — Deep Temporal Networks for Irregular ICU Trajectories",
              fr: "Doctorant — Réseaux profonds temporels pour trajectoires irrégulières en réanimation" },
      org: { en: "ICube (UMR 7357), University of Strasbourg", fr: "ICube (UMR 7357), Université de Strasbourg" },
      place: "Strasbourg, France", dates: { en: "Oct. 2020 – Oct. 2024", fr: "Oct. 2020 – Oct. 2024" },
      points: [
        { en: "Designed and open-sourced two dynamic-memory architectures, MWTA-LSTM and AMITA-LSTM, for sparse and irregular electronic health records.",
          fr: "Conception et publication en open source de deux architectures à mémoire dynamique, MWTA-LSTM et AMITA-LSTM, pour des dossiers patients informatisés creux et irréguliers." },
        { en: "Formulated variable-level attention and frequency weighting with direct interpretability, validated with ICU department heads.",
          fr: "Formulation d’une attention au niveau des variables et d’une pondération fréquentielle directement interprétables, validées avec des chefs de service de réanimation." },
        { en: "Built automated ingestion and preprocessing pipelines for large clinical databases (including MIMIC), with adaptive pooling against extreme values.",
          fr: "Construction de pipelines automatisés d’ingestion et de prétraitement pour de grandes bases cliniques (dont MIMIC), avec un pooling adaptatif contre les valeurs extrêmes." }
      ],
      tags: ["PyTorch", "TensorFlow", "scikit-learn", "pandas", "Git", "Slurm"]
    },
    {
      role: { en: "Master’s Research Intern — Deep Learning for Interpretability & Anomaly Detection",
              fr: "Stagiaire de recherche (Master) — Deep learning pour l’interprétabilité et la détection d’anomalies" },
      org: { en: "ICube, University of Strasbourg", fr: "ICube, Université de Strasbourg" },
      place: "Strasbourg, France", dates: { en: "Apr. 2020 – Sep. 2020", fr: "Avr. 2020 – Sep. 2020" },
      points: [
        { en: "Developed a hybrid sequential network combining LSTM layers with automated shapelet extraction for transparent temporal anomaly detection.",
          fr: "Développement d’un réseau séquentiel hybride combinant couches LSTM et extraction automatique de shapelets pour une détection d’anomalies lisible." },
        { en: "Applied class activation maps and XAI methods to visualise decision boundaries on health-state sequences.",
          fr: "Utilisation des cartes d’activation de classes (CAM) et de méthodes XAI pour visualiser les frontières de décision sur des séries d’états de santé." }
      ],
      tags: ["Keras", "TensorFlow", "Shapelets", "CAM/XAI"]
    },
    {
      role: { en: "Supervised Research Project — Machine Learning for Econometrics",
              fr: "Projet de recherche encadré — Machine learning appliqué à l’économétrie" },
      org: { en: "IFI, Vietnam National University", fr: "IFI, Université Nationale du Vietnam" },
      place: { en: "Hanoi, Vietnam", fr: "Hanoï, Vietnam" }, dates: { en: "Oct. 2018 – May 2019", fr: "Oct. 2018 – Mai 2019" },
      points: [
        { en: "Compared classical econometric models with neural networks (ANN/RNN) for nonlinear temporal dependencies in economic series.",
          fr: "Comparaison de modèles économétriques classiques et de réseaux de neurones (ANN/RNN) pour les dépendances temporelles non linéaires des séries économiques." }
      ],
      tags: ["Python", "Keras", "R"]
    }
  ],

  /* ---------- Projects (shown in this order) ---------- */
  projects: [
    {
      title: { en: "Interpretable Deep Learning for Irregular ICU Time Series", fr: "Deep learning interprétable pour séries temporelles irrégulières en réanimation" },
      label: { en: "Ph.D. research · Healthcare AI", fr: "Recherche doctorale · IA en santé" },
      caption: { en: "RESEARCH", fr: "RECHERCHE" }, years: "2020–2024",
      icon: "pulse", visual: "AMITA · MWTA-LSTM",
      categories: ["research", "timeseries"],
      summary: { en: "Two open-source dynamic-memory architectures with variable-level attention and frequency weighting for sparse, irregular electronic health records.",
                 fr: "Deux architectures open source à mémoire dynamique, avec attention par variable et pondération fréquentielle, pour des dossiers patients creux et irréguliers." },
      results: [
        { value: "93%", label: { en: "AUROC · MWTA-LSTM on eICU", fr: "AUROC · MWTA-LSTM sur eICU" } },
        { value: "78%", label: { en: "AUPRC · MWTA-LSTM on eICU", fr: "AUPRC · MWTA-LSTM sur eICU" } }
      ],
      tags: ["PyTorch", "TensorFlow", "Attention", "MIMIC", "Slurm"],
      details: [
        { en: "Designed and open-sourced MWTA-LSTM and AMITA-LSTM.", fr: "Conception et publication open source de MWTA-LSTM et AMITA-LSTM." },
        { en: "Variable-level attention and frequency weighting, validated with ICU department heads.", fr: "Attention par variable et pondération fréquentielle, validées avec des chefs de service de réanimation." },
        { en: "Automated ingestion and preprocessing for large clinical databases (MIMIC); adaptive pooling against extreme values.", fr: "Ingestion et prétraitement automatisés de grandes bases cliniques (MIMIC) ; pooling adaptatif contre les valeurs extrêmes." },
        { en: "Published in Information Sciences, Expert Systems with Applications, EPIA and ICONIP.", fr: "Publié dans Information Sciences, Expert Systems with Applications, EPIA et ICONIP." }
      ],
      note: { en: "AMITA-LSTM: AUROC 92%, AUPRC 73% on eICU.", fr: "AMITA-LSTM : AUROC 92 %, AUPRC 73 % sur eICU." },
      links: [
        { text: { en: "AMITA paper ↗", fr: "Article AMITA ↗" }, url: "https://doi.org/10.1016/j.ins.2025.121977", primary: true },
        { text: { en: "MWTA paper ↗", fr: "Article MWTA ↗" }, url: "https://doi.org/10.1016/j.eswa.2024.125548" },
        { text: "Code ↗", url: "https://github.com/benprano/Multi-Way-adaptive-Time-Aware-LSTM-for-irregularly-collected-sequential-ICU-data" }
      ]
    },
    {
      title: { en: "TF-JEPA, FASTER & DyFAIP — Joint Imputation and Prediction", fr: "TF-JEPA, FASTER & DyFAIP — imputation et prédiction conjointes" },
      label: { en: "Lead designer & author · Self-supervised learning", fr: "Concepteur principal & auteur · Apprentissage auto-supervisé" },
      caption: { en: "REPRESENTATION LEARNING", fr: "APPRENTISSAGE DE REPRÉSENTATIONS" }, years: "2025–2026",
      icon: "wave", visual: "TF-JEPA · FASTER · DyFAIP",
      categories: ["research", "timeseries"],
      summary: { en: "Time-frequency predictive representations and frequency-conditioned diffusion / state-transition models for highly sparse, irregular clinical timelines.",
                 fr: "Représentations prédictives temps-fréquence et modèles de diffusion / transition d’état conditionnés par la fréquence pour des chronologies cliniques très creuses et irrégulières." },
      results: [],
      tags: ["JEPA", "Diffusion", "State transitions", "Imputation", "PyTorch"],
      details: [
        { en: "TF-JEPA: time-frequency joint-embedding predictive architecture for structure-guided imputation.", fr: "TF-JEPA : architecture prédictive à enchâssement conjoint temps-fréquence pour l’imputation guidée par la structure." },
        { en: "FASTER: frequency-conditioned diffusion for joint imputation and prediction.", fr: "FASTER : diffusion conditionnée par la fréquence pour l’imputation et la prédiction conjointes." },
        { en: "DyFAIP: adaptive frequency transitions for end-to-end imputation and prediction.", fr: "DyFAIP : transitions fréquentielles adaptatives pour l’imputation et la prédiction de bout en bout." }
      ],
      note: { en: "Three papers under review (two in Expert Systems with Applications).", fr: "Trois articles en cours d’évaluation (dont deux dans Expert Systems with Applications)." },
      links: [{ text: { en: "Papers ↓", fr: "Articles ↓" }, url: "#research" }]
    },
    {
      title: { en: "Drone Micro-Target Detection — RT-DETRv2 + DINOv2", fr: "Détection de micro-cibles par drone — RT-DETRv2 + DINOv2" },
      label: { en: "Lead designer · Computer vision", fr: "Concepteur principal · Vision par ordinateur" },
      caption: { en: "COMPUTER VISION", fr: "VISION PAR ORDINATEUR" }, years: "2025–2026",
      icon: "detect", visual: "RT-DETRv2 + DINOv2",
      categories: ["vision", "engineering"],
      summary: { en: "Self-supervised DINOv2 ViT-Base backbone in RT-DETRv2 with two-pass high-resolution inference for targets only a few pixels wide.",
                 fr: "Backbone auto-supervisé DINOv2 ViT-Base intégré à RT-DETRv2, avec inférence haute résolution en deux passes pour des cibles de quelques pixels." },
      results: [{ value: "20 MP", label: { en: "images, 3200² global scan + SAHI tiling", fr: "images, scan global 3200² + découpage SAHI" } }],
      tags: ["DINOv2", "RT-DETRv2", "SAHI/ASAHI", "Greedy NMM", "IoU audit"],
      details: [
        { en: "DINOv2 ViT-Base (768-dim) backbone with multi-scale projection (P3–P5) re-injected into RT-DETRv2.", fr: "Backbone DINOv2 ViT-Base (768 dim.) avec projection multi-échelle (P3–P5) réinjectée dans RT-DETRv2." },
        { en: "Two-pass inference: global 3200 × 3200 scan, then dynamic SAHI tiling with Greedy NMM.", fr: "Inférence en deux passes : scan global 3200 × 3200 puis découpage SAHI dynamique avec Greedy NMM." },
        { en: "Post-validation audit isolating misses by IoU, with confusion matrices adapted to rare-class oversampling.", fr: "Audit post-validation isolant les omissions par IoU, avec matrices de confusion adaptées au suréchantillonnage des classes rares." }
      ],
      note: "",
      links: []
    },
    {
      title: { en: "Drone Small-Object Detection with Top-K Spatial Attention", fr: "Détection de micro-objets par drone avec attention spatiale Top-K" },
      label: { en: "Lead designer · Computer vision", fr: "Concepteur principal · Vision par ordinateur" },
      caption: { en: "COMPUTER VISION", fr: "VISION PAR ORDINATEUR" }, years: "2025–2026",
      icon: "eye", visual: "TOP-K ATTENTION",
      categories: ["vision", "research"],
      summary: { en: "A dynamic spatial-attention projector that re-injects high-resolution shallow features into the detection head so micro-objects are not erased.",
                 fr: "Un projecteur d’attention spatiale dynamique qui réinjecte les caractéristiques haute résolution des premières couches dans la tête de détection pour ne pas effacer les micro-objets." },
      results: [],
      tags: ["YOLOv8", "YOLO26-P2", "DBSCAN", "Grad-CAM", "CLAHE"],
      details: [
        { en: "ActiveTopKFeatureProjector re-injecting P2/P3 activation maps into the deep detection head.", fr: "ActiveTopKFeatureProjector réinjectant les cartes d’activation P2/P3 dans la tête de détection profonde." },
        { en: "Multi-process tiling guided by DBSCAN clustering, CLAHE enhancement and adaptive oversampling of rare species.", fr: "Découpage multi-processus guidé par clustering DBSCAN, rehaussement CLAHE et suréchantillonnage adaptatif des espèces rares." },
        { en: "Multi-scale SAHI/ASAHI sliced inference and multi-level Grad-CAM to monitor saliency retention.", fr: "Inférence découpée SAHI/ASAHI multi-échelle et Grad-CAM multi-niveaux pour suivre la rétention de saillance." }
      ],
      note: "",
      links: []
    },
    {
      title: { en: "Multivariate Time-Series Anomaly Detection", fr: "Détection d’anomalies dans des séries temporelles multivariées" },
      label: { en: "Lead designer · Graph neural networks", fr: "Concepteur principal · Réseaux de neurones sur graphes" },
      caption: { en: "ANOMALY DETECTION", fr: "DÉTECTION D’ANOMALIES" }, years: "2025–2026",
      icon: "graph", visual: "MTGNN · GNN-LSTM",
      categories: ["timeseries", "engineering"],
      summary: { en: "Graph-based anomaly detectors for multivariate industrial sensor data, with a full training, evaluation and visualisation framework.",
                 fr: "Détecteurs d’anomalies à base de graphes pour des données de capteurs industriels multivariées, avec un cadre complet d’entraînement, d’évaluation et de visualisation." },
      results: [],
      tags: ["MTGNN", "GNN-LSTM", "SWaT", "WADI", "TensorBoard"],
      details: [
        { en: "Implemented and evaluated MTGNN and GNN-LSTM on SWaT and WADI.", fr: "Implémentation et évaluation de MTGNN et GNN-LSTM sur SWaT et WADI." },
        { en: "Training, evaluation and TensorBoard visualisation workflows.", fr: "Workflows d’entraînement, d’évaluation et de visualisation TensorBoard." }
      ],
      note: "",
      links: []
    },
    {
      title: { en: "Conversational Commerce Agent — Hybrid RAG & Tool Execution", fr: "Agent de commerce conversationnel — RAG hybride et exécution d’outils" },
      label: { en: "LLM engineering · RAG", fr: "Ingénierie LLM · RAG" },
      caption: { en: "LLM SYSTEMS", fr: "SYSTÈMES LLM" }, years: "2026",
      icon: "chat", visual: { en: "HYBRID RAG AGENT", fr: "AGENT RAG HYBRIDE" },
      categories: ["llm", "engineering"],
      summary: { en: "Agent that routes each request to the document base or to tools, with hybrid retrieval, reranking and automated quality gates.",
                 fr: "Agent qui oriente chaque requête vers la base documentaire ou vers des outils, avec recherche hybride, reranking et contrôles qualité automatisés." },
      results: [],
      tags: ["BM25 + dense", "RRF", "Cross-encoder", "Pydantic", "DeepEval", "Gradio"],
      details: [
        { en: "Dense (SentenceTransformers) + sparse (BM25) retrieval, fused with RRF and reranked by ms-marco-MiniLM-L-6-v2.", fr: "Recherche dense (SentenceTransformers) + lexicale (BM25), fusionnées par RRF et réordonnées par ms-marco-MiniLM-L-6-v2." },
        { en: "Intent routing between tools (order tracking, cart management via Pydantic) and document Q&A.", fr: "Routage d’intentions entre outils (suivi de commande, gestion de panier via Pydantic) et questions-réponses documentaires." },
        { en: "PyTest/DeepEval quality gates for faithfulness and contextual relevance.", fr: "Contrôles qualité PyTest/DeepEval sur la fidélité et la pertinence contextuelle." },
        { en: "Gradio dashboard showing execution traces, reranker scores and tool arguments.", fr: "Tableau de bord Gradio affichant traces d’exécution, scores du reranker et arguments d’outils." }
      ],
      note: "",
      links: []
    },
    {
      title: { en: "Multi-Agent Systems & Tool-Calling Frameworks", fr: "Systèmes multi-agents et frameworks d’appel d’outils" },
      label: { en: "Lead designer · Agentic AI", fr: "Concepteur principal · IA agentique" },
      caption: "MULTI-AGENT", years: "2026",
      icon: "layers", visual: "LANGGRAPH · MCP",
      categories: ["llm", "engineering"],
      summary: { en: "Modular agent pipelines for web research, code review, PDF Q&A and multi-agent debate, shipped as full-stack apps.",
                 fr: "Pipelines d’agents modulaires pour la recherche web, la revue de code, les questions-réponses sur PDF et le débat multi-agents, livrés en applications complètes." },
      results: [],
      tags: ["LangGraph", "MCP", "React", "Vite", "CI/CD"],
      details: [
        { en: "Agent pipelines for web research, code review, PDF question answering and multi-agent debate.", fr: "Pipelines d’agents : recherche web, revue de code, questions-réponses sur PDF et débat multi-agents." },
        { en: "React/Vite front ends, Model Context Protocol server integrations and automated GitHub CI/CD.", fr: "Interfaces React/Vite, intégration de serveurs Model Context Protocol et CI/CD GitHub automatisée." }
      ],
      note: "",
      links: []
    },
    {
      title: { en: "Agent State Orchestration & Hybrid RAG", fr: "Orchestration d’état d’agents et RAG hybride" },
      label: { en: "Lead designer · LLM engineering", fr: "Concepteur principal · Ingénierie LLM" },
      caption: { en: "LLM SYSTEMS", fr: "SYSTÈMES LLM" }, years: "2026",
      icon: "database", visual: { en: "STATEFUL AGENTS", fr: "AGENTS À ÉTAT" },
      categories: ["llm"],
      summary: { en: "LangGraph workflows with advanced state management and multi-step execution paths, grounded by dense + sparse retrieval.",
                 fr: "Workflows LangGraph avec gestion avancée de l’état et des chemins d’exécution multi-étapes, ancrés par une recherche dense + lexicale." },
      results: [],
      tags: ["LangGraph", "State management", "Hybrid RAG"],
      details: [
        { en: "Modular agent flows with state and multi-step execution-path management.", fr: "Flux d’agents modulaires avec gestion de l’état et des chemins d’exécution multi-étapes." },
        { en: "Hybrid dense/sparse RAG for precise contextual grounding.", fr: "RAG hybride dense/lexical pour un ancrage contextuel précis." }
      ],
      note: "",
      links: []
    },
    {
      title: { en: "LLM Observability & Monitoring Pipelines", fr: "Observabilité et monitoring d’applications LLM" },
      label: { en: "Lead designer · LLMOps", fr: "Concepteur principal · LLMOps" },
      caption: { en: "OBSERVABILITY", fr: "OBSERVABILITÉ" }, years: "2026",
      icon: "chart", visual: { en: "TRACING · METRICS", fr: "TRAÇAGE · MÉTRIQUES" },
      categories: ["llm", "engineering"],
      summary: { en: "Tracing and monitoring for LLM applications: agent execution paths, token latency and tool-call reliability under load.",
                 fr: "Traçage et supervision d’applications LLM : chemins d’exécution des agents, latence des tokens et fiabilité des appels d’outils sous charge." },
      results: [],
      tags: ["OpenTelemetry", "Prometheus", "Tracing", "Latency"],
      details: [
        { en: "Production-style tracing and supervision with OpenTelemetry and Prometheus.", fr: "Traçage et supervision de type production avec OpenTelemetry et Prometheus." },
        { en: "Tracks agent execution paths, token latency and tool-call reliability.", fr: "Suivi des chemins d’exécution, de la latence des tokens et de la fiabilité des appels d’outils." }
      ],
      note: "",
      links: []
    },
    {
      title: { en: "Deep NLP & Generative Recommender Systems", fr: "NLP profond et systèmes de recommandation génératifs" },
      label: { en: "Early work · NLP", fr: "Premiers travaux · NLP" },
      caption: "NLP", years: "2018–2020",
      icon: "spark", visual: "SEQ2SEQ · RBM",
      categories: ["research", "llm"],
      summary: { en: "A restricted-Boltzmann-machine recommender and a multi-turn conversational agent built before the LLM era.",
                 fr: "Un système de recommandation à machines de Boltzmann restreintes et un agent conversationnel multi-tours, conçus avant l’ère des LLM." },
      results: [],
      tags: ["PyTorch", "Seq2Seq", "BiLSTM", "Transfer learning", "RBM"],
      details: [
        { en: "PyTorch recommender based on restricted Boltzmann machines for high-dimensional preferences.", fr: "Système de recommandation PyTorch à machines de Boltzmann restreintes pour des préférences en grande dimension." },
        { en: "Multi-turn conversational engine with attention Seq2Seq and BiLSTMs, using domain transfer learning.", fr: "Moteur conversationnel multi-tours (Seq2Seq à attention, BiLSTM) avec apprentissage par transfert de domaine." }
      ],
      note: "",
      links: []
    }
  ],

  /* ---------- Publications (newest first) — paper titles stay in English ---------- */
  publications: [
    {
      badge: "INS<br>2025", color: "orange", status: { en: "Journal · published", fr: "Revue · publié" },
      title: "Predicting and Interpreting Healthcare Trajectories from Irregularly Collected Sequential Patient Data Using AMITA",
      venue: "<em>Information Sciences</em>, vol. 705 · Cissoko, Castelain, et al.",
      link: "https://doi.org/10.1016/j.ins.2025.121977"
    },
    {
      badge: "ESWA<br>2025", color: "blue", status: { en: "Journal · published", fr: "Revue · publié" },
      title: "Multi-Way Adaptive Time-Aware LSTM for Irregularly Collected Sequential ICU Data",
      venue: "<em>Expert Systems with Applications</em>, vol. 261 · Cissoko, Castelain, et al.",
      link: "https://doi.org/10.1016/j.eswa.2024.125548"
    },
    {
      badge: "ICONIP<br>2024", color: "purple", status: { en: "Conference · published", fr: "Conférence · publié" },
      title: "Predicting Patient Health Outcomes with AMITA from Irregular Time Series",
      venue: "ICONIP 2024 · Springer LNCS · Cissoko et al.",
      link: "https://link.springer.com/chapter/10.1007/978-981-96-6957-8_28"
    },
    {
      badge: "EPIA<br>2024", color: "purple", status: { en: "Conference · published", fr: "Conférence · publié" },
      title: "Modeling Temporal Dynamics in Irregular ICU Data Using MWTA-LSTM",
      venue: "EPIA 2024 · Springer LNCS · Cissoko et al.",
      link: "https://link.springer.com/chapter/10.1007/978-3-031-73500-4_3"
    },
    {
      badge: "ESWA<br>review", color: "grey", status: { en: "Under review", fr: "En cours d’évaluation" }, pending: true,
      title: "FASTER: Frequency-Conditioned Diffusion for Joint Imputation and Prediction in Sparse Time Series",
      venue: "<em>Expert Systems with Applications</em> · Cissoko, Sinoquet, et al.",
      link: ""
    },
    {
      badge: "ESWA<br>review", color: "grey", status: { en: "Under review", fr: "En cours d’évaluation" }, pending: true,
      title: "DyFAIP — End-to-End Joint Imputation and Prediction in Irregular Time Series via Adaptive Frequency Transitions",
      venue: "<em>Expert Systems with Applications</em> · Cissoko, Sinoquet, et al.",
      link: ""
    },
    {
      badge: "TF-<br>JEPA", color: "grey", status: { en: "Under review", fr: "En cours d’évaluation" }, pending: true,
      title: "TF-JEPA: Time-Frequency Joint Embedding Predictive Architecture for Incomplete Time Series",
      venue: "Cissoko, Sinoquet, et al.",
      link: ""
    }
  ],

  /* ---------- Skills (hot: core skills, highlighted) ---------- */
  skills: [
    { icon: "layers", cat: { en: "RESEARCH", fr: "RECHERCHE" }, title: { en: "Deep learning & R&D", fr: "Deep learning & R&D" },
      hot: ["PyTorch (DDP, FSDP)", "JEPA", "Diffusion"],
      other: ["SSM/Mamba", "LSTM/GRU", "Transformers", "GNNs", "TensorFlow/Keras", "XAI (CAM, Grad-CAM)"] },
    { icon: "chat", cat: "GEN AI", title: { en: "LLMs & agents", fr: "LLM & agents" },
      hot: ["Hybrid RAG", "LangGraph", "MCP"],
      other: ["Fine-tuning", "Prompt engineering", "Hugging Face", "vLLM", "Cross-encoder reranking", "DeepEval"] },
    { icon: "eye", cat: "VISION", title: { en: "Computer vision", fr: "Vision par ordinateur" },
      hot: ["RT-DETRv2", "DINOv2", "YOLO"],
      other: ["SAHI/ASAHI", { en: "Small-object detection", fr: "Détection de petits objets" }, "Grad-CAM", "CLAHE", "DBSCAN"] },
    { icon: "server", cat: { en: "SCALE", fr: "PASSAGE À L’ÉCHELLE" }, title: { en: "Optimisation & MLOps", fr: "Optimisation & MLOps" },
      hot: ["HPC (Slurm)", "Docker", "CI/CD"],
      other: [{ en: "Quantisation (INT8/FP16)", fr: "Quantification (INT8/FP16)" }, "Distillation", { en: "Pruning", fr: "Élagage" }, "ONNX Runtime", "TensorRT", "Triton", "MLflow", "W&B", "OpenTelemetry", "Prometheus", "PyTest"] },
    { icon: "database", cat: { en: "DATA", fr: "DONNÉES" }, title: { en: "Data & health informatics", fr: "Données & informatique médicale" },
      hot: [{ en: "Clinical EHR", fr: "DPI cliniques" }, "MIMIC-III"],
      other: ["scikit-learn", "pandas", "NumPy", "SciPy", "FHIR", "HL7"] },
    { icon: "code", cat: "CODE", title: { en: "Languages", fr: "Langages" },
      hot: ["Python"],
      other: ["C++", "Java", "R", "SQL", "SPARQL", "RDF/XML", "JSON-LD", "React/Vite"] }
  ],

  /* ---------- Teaching & academic service ---------- */
  teaching: [
    { icon: "school",
      title: { en: "Lecturer — Nantes Université (Master’s & Bachelor’s)", fr: "Chargé d’enseignement — Nantes Université (Master & Licence)" },
      dates: { en: "Nov. 2024 – present", fr: "Nov. 2024 – présent" },
      text: { en: "Master’s: LSTM/GRU, Transformers, optimisation, temporal feature engineering. Bachelor’s: statistical inference, SVMs, random forests, evaluation metrics. PyTorch/scikit-learn labs for 60+ engineering students.",
              fr: "Master : LSTM/GRU, Transformers, optimisation, ingénierie de caractéristiques temporelles. Licence : inférence statistique, SVM, forêts aléatoires, métriques d’évaluation. TP PyTorch/scikit-learn pour plus de 60 élèves ingénieurs." } },
    { icon: "school",
      title: { en: "Lecturer — Vietnam National University (Master’s)", fr: "Chargé d’enseignement — Université Nationale du Vietnam (Master)" },
      dates: { en: "Dec. 2024 – present", fr: "Déc. 2024 – présent" },
      text: { en: "Sequential modelling, attention mechanisms and temporal data; code reviews and workshops on PyTorch, cross-validation, version control and reproducibility.",
              fr: "Modélisation séquentielle, mécanismes d’attention et données temporelles ; revues de code et ateliers sur PyTorch, la validation croisée, le contrôle de version et la reproductibilité." } },
    { icon: "eye",
      title: { en: "Peer reviewer", fr: "Relecteur" }, dates: "",
      text: { en: "NeurIPS, UAI and AISTATS; <em>Information Sciences</em> (30+ reviews), <em>Environmental Technology &amp; Innovation</em> (2) and <em>Neurocomputing</em> (1).",
              fr: "NeurIPS, UAI et AISTATS ; <em>Information Sciences</em> (plus de 30 relectures), <em>Environmental Technology &amp; Innovation</em> (2) et <em>Neurocomputing</em> (1)." } }
  ],

  /* ---------- Education ---------- */
  education: [
    { degree: { en: "Ph.D. in Computer Science, Mathematics and Engineering", fr: "Doctorat en informatique, mathématiques et sciences de l’ingénieur" },
      school: { en: "University of Strasbourg (ICube)", fr: "Université de Strasbourg (ICube)" }, place: "Strasbourg, France", dates: "2020–2024" },
    { degree: { en: "M.Sc. Computer Science — Intelligent Systems & Multimedia", fr: "Master en informatique — Systèmes intelligents et multimédia" },
      school: { en: "Vietnam National University (IFI)", fr: "Université Nationale du Vietnam (IFI)" }, place: { en: "Hanoi, Vietnam", fr: "Hanoï, Vietnam" }, dates: "2020" },
    { degree: { en: "M.Sc. Computer Science — Data Engineering & Business Intelligence", fr: "Master en informatique — Ingénierie des données et décisionnel" },
      school: { en: "University of La Rochelle", fr: "Université de La Rochelle" }, place: "La Rochelle, France", dates: "2020" },
    { degree: { en: "B.Sc. Computer Science Applied to Business Management", fr: "Licence en informatique appliquée à la gestion des entreprises" },
      school: "IUG, Institut Universitaire de Gestion", place: "Bamako, Mali", dates: "2013" }
  ],

  /* ---------- Awards, certifications, languages ---------- */
  awards: [
    { icon: "award", title: { en: "Finalist (Top 5) — Vietnam AI Grand Challenge", fr: "Finaliste (Top 5) — Vietnam AI Grand Challenge" }, dates: "2019" },
    { icon: "award", title: { en: "TIBCO-IFI Excellence Scholarship", fr: "Bourse d’excellence TIBCO-IFI" }, dates: "2020" },
    { icon: "shield", title: { en: "CCNA and MCITP certifications", fr: "Certifications CCNA et MCITP" }, dates: "2017" }
  ],
  languages: [
    { name: { en: "French", fr: "Français" },     level: { en: "Native", fr: "Langue maternelle" } },
    { name: { en: "English", fr: "Anglais" },     level: { en: "Fluent", fr: "Courant" } },
    { name: { en: "Vietnamese", fr: "Vietnamien" }, level: { en: "Basic", fr: "Notions" } }
  ]
};
