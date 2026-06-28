export interface ServiceFeature {
  title: string
  description: string
  icon: "Globe" | "Search" | "Megaphone" | "Cog" | "Brain" | "BarChart2" | "Lightbulb" | "Zap" | "Target" | "TrendingUp" | "Shield" | "Clock" | "Star" | "Users" | "Monitor"
}

export interface ServiceStep {
  num: string
  title: string
  description: string
}

export interface ServiceStat {
  value: number
  suffix: string
  label: string
}

export interface ServiceFAQ {
  question: string
  answer: string
}

export interface ServiceData {
  slug: string
  name: string
  tagline: string
  label: string
  heroDescription: string
  icon: "Globe" | "TrendingUp" | "Cog" | "Brain" | "BarChart2" | "Lightbulb"
  features: ServiceFeature[]
  process: ServiceStep[]
  stats: ServiceStat[]
  faq: ServiceFAQ[]
  ctaText: string
}

export const SERVICES: ServiceData[] = [
  {
    slug: "digital-presence",
    name: "Digital Presence",
    tagline: "Be Found. Be Trusted. Be Chosen.",
    label: "Digital Presence",
    heroDescription: "Your website is your most powerful salesperson — working 24/7, never calling in sick. We build stunning, fast digital presences that turn visitors into customers and position your business as the obvious choice.",
    icon: "Globe",
    features: [
      {
        title: "Custom Website Design",
        description: "Hand-crafted, mobile-first websites built to your brand. Every pixel designed to convert visitors into inquiries and walk-ins.",
        icon: "Monitor",
      },
      {
        title: "Local SEO & Google Business",
        description: "Dominate local search results. Appear at the top when customers search for your services — in Pattaya, Bangkok, or anywhere in Thailand.",
        icon: "Search",
      },
      {
        title: "Brand Identity",
        description: "Logo, colors, typography — a cohesive visual identity that builds instant trust and makes you unmistakably you.",
        icon: "Star",
      },
      {
        title: "Performance Optimization",
        description: "PageSpeed 95+, Core Web Vitals, structured data. Fast sites rank higher and convert better — we ensure yours is technically flawless.",
        icon: "Zap",
      },
    ],
    process: [
      {
        num: "01",
        title: "Discovery & Strategy",
        description: "We audit your current digital presence, map your competitive landscape, and define a positioning strategy tailored to your market and goals.",
      },
      {
        num: "02",
        title: "Design & Build",
        description: "Pixel-perfect design, clean development, content integration. You review, you approve — we build exactly what you need, on time.",
      },
      {
        num: "03",
        title: "Launch & Optimize",
        description: "Go live with confidence. We monitor performance, fine-tune SEO, and ensure your site generates results from day one.",
      },
    ],
    stats: [
      { value: 3, suffix: "x", label: "More Traffic" },
      { value: 48, suffix: "h", label: "Delivery Start" },
      { value: 98, suffix: "%", label: "Client Satisfaction" },
    ],
    faq: [
      {
        question: "How much does a website cost?",
        answer: "Starting from ฿15,000 for a professional business website. Full packages with SEO setup and content start from ฿45,000. We provide fixed-price quotes — no surprises, no hidden fees.",
      },
      {
        question: "How long does it take to build?",
        answer: "Basic business websites: 5–7 days. Full packages with SEO, content, and optimization: 10–14 days. We move fast without cutting corners.",
      },
      {
        question: "Do I need to provide the content?",
        answer: "No. We handle copywriting, photography sourcing, and structure. You simply review and approve. Most clients are surprised at how little work they need to do.",
      },
      {
        question: "Will it work perfectly on mobile?",
        answer: "Absolutely. Every website we build is mobile-first. Over 70% of Thai customers browse on smartphones — we optimize for them first, then scale up to desktop.",
      },
    ],
    ctaText: "Ready to Get Found?",
  },

  {
    slug: "marketing-growth",
    name: "Marketing & Growth",
    tagline: "Turn Attention Into Revenue.",
    label: "Marketing & Growth",
    heroDescription: "Visibility without conversion is just noise. We build data-driven marketing systems across Google, Meta, and TikTok that attract the right customers, convert them efficiently, and scale what works.",
    icon: "TrendingUp",
    features: [
      {
        title: "Google Ads Management",
        description: "Search campaigns that capture customers exactly when they're ready to buy — not before, not after. Maximum intent, maximum conversion.",
        icon: "Search",
      },
      {
        title: "Meta & TikTok Campaigns",
        description: "Social advertising that builds awareness and drives measurable conversions. We create, test, and scale creative that actually stops the scroll.",
        icon: "Megaphone",
      },
      {
        title: "Social Media Management",
        description: "Consistent, strategic content that keeps your brand top-of-mind. We manage your presence so you can focus on running your business.",
        icon: "Users",
      },
      {
        title: "Content Marketing",
        description: "Blog posts, videos, and creative assets that educate, attract, and build authority. Content that works long after we publish it.",
        icon: "Star",
      },
    ],
    process: [
      {
        num: "01",
        title: "Market Research",
        description: "Competitor analysis, audience mapping, keyword research, and channel strategy. We know exactly where your customers are before we spend a single baht.",
      },
      {
        num: "02",
        title: "Campaign Launch",
        description: "Ad creation, precision targeting, budget allocation. Every campaign structured to generate leads and sales from the first day it goes live.",
      },
      {
        num: "03",
        title: "Optimize & Scale",
        description: "Weekly reporting, A/B testing, budget reallocation to winners. We never stop improving — every month is better than the last.",
      },
    ],
    stats: [
      { value: 340, suffix: "%", label: "Average ROAS" },
      { value: 30, suffix: " days", label: "To First Results" },
      { value: 50, suffix: "+", label: "Campaigns Managed" },
    ],
    faq: [
      {
        question: "What is the minimum ad budget?",
        answer: "We recommend ฿5,000–10,000 per month in ad spend for meaningful results. Our management fee is separate. We manage every baht strategically to maximize return.",
      },
      {
        question: "How long until I see results?",
        answer: "Google Search Ads: first leads within 48–72 hours. Social campaigns: 2–4 weeks for momentum as the algorithm learns. We set realistic expectations upfront — no false promises.",
      },
      {
        question: "Which platforms should I advertise on?",
        answer: "It depends entirely on where your customers are. We analyze your business and target audience first, then recommend the platforms with the highest ROI potential for you.",
      },
      {
        question: "Do you create the ad creative?",
        answer: "Yes. Ad copy, images, video scripts — we produce all creative assets. You review and approve. We test multiple variations to find what converts best.",
      },
    ],
    ctaText: "Start Your Growth Campaign",
  },

  {
    slug: "business-automation",
    name: "Business Automation",
    tagline: "Reclaim Your Time. Scale Without Limits.",
    label: "Business Automation",
    heroDescription: "The average Thai SME owner loses 3–4 hours every day on tasks a machine could do in seconds. We eliminate that waste — automating follow-ups, data entry, reporting, and workflows so you can focus on what only you can do.",
    icon: "Cog",
    features: [
      {
        title: "CRM Setup & Integration",
        description: "Centralize all customer data, track every interaction, and never lose a lead again. One unified system that gives you complete visibility.",
        icon: "Users",
      },
      {
        title: "Automated Follow-ups",
        description: "Email sequences, WhatsApp follow-ups, appointment reminders — all triggered automatically at the right moment, with the right message.",
        icon: "Zap",
      },
      {
        title: "Workflow Automation",
        description: "Eliminate manual data entry, approval chains, and repetitive reporting. What used to take hours now happens instantly and error-free.",
        icon: "Cog",
      },
      {
        title: "Custom Integrations",
        description: "Connect your tools — LINE, Google Workspace, accounting software, POS — into one seamless system that works together without manual intervention.",
        icon: "Target",
      },
    ],
    process: [
      {
        num: "01",
        title: "Process Audit",
        description: "We map your current workflows, identify every manual bottleneck, and quantify the time and money lost. You'll see exactly what to automate first.",
      },
      {
        num: "02",
        title: "Automation Build",
        description: "We design and build the automation system around your existing tools and processes. No ripping out what works — just making it smarter.",
      },
      {
        num: "03",
        title: "Train & Hand Over",
        description: "Full team training, clear documentation, and ongoing support. You own the system. We ensure you're confident using it from day one.",
      },
    ],
    stats: [
      { value: 3, suffix: "h", label: "Saved Daily" },
      { value: 95, suffix: "%", label: "Error Reduction" },
      { value: 100, suffix: "+", label: "Automations Built" },
    ],
    faq: [
      {
        question: "What automation tools do you use?",
        answer: "We work with n8n, Make (Integromat), and custom webhook solutions — selected based on your budget, tech stack, and complexity. We pick the right tool, not the most expensive one.",
      },
      {
        question: "Do I need to change my existing software?",
        answer: "No. We automate around what you already use. Your team keeps familiar tools — we just make those tools talk to each other and do more work automatically.",
      },
      {
        question: "How long does the setup take?",
        answer: "Simple automations: 2–3 days. Complex multi-system workflows: 1–2 weeks. Everything is tested and verified before handover — no surprises after launch.",
      },
      {
        question: "Is my business data secure?",
        answer: "Absolutely. All automations are built with security-first principles, following Thai PDPA requirements. We never store sensitive data unnecessarily and audit access at every step.",
      },
    ],
    ctaText: "Automate Your Business Today",
  },

  {
    slug: "ai",
    name: "Artificial Intelligence",
    tagline: "Your Business, Working 24/7 Without You.",
    label: "Artificial Intelligence",
    heroDescription: "While you sleep, your AI handles inquiries, qualifies leads, answers questions, and books appointments. We deploy intelligent systems that serve your customers at the level of your best employee — at a fraction of the cost.",
    icon: "Brain",
    features: [
      {
        title: "AI Chatbots",
        description: "Intelligent conversational bots that handle inquiries, qualify leads, and book appointments automatically — on your website, LINE, and WhatsApp.",
        icon: "Brain",
      },
      {
        title: "Lead Qualification AI",
        description: "Score and prioritize incoming leads automatically. Your sales team only speaks to prospects who are ready to buy — no more chasing dead ends.",
        icon: "Target",
      },
      {
        title: "Custom AI Assistants",
        description: "Trained on your products, services, pricing, and FAQs — responds like your most knowledgeable employee, in Thai and English, 24/7.",
        icon: "Star",
      },
      {
        title: "AI-Powered Analytics",
        description: "Pattern recognition in your business data that reveals insights no human would catch. Know what's coming before it happens.",
        icon: "Zap",
      },
    ],
    process: [
      {
        num: "01",
        title: "Design & Train",
        description: "We define your AI's use cases, train it on your business knowledge, test hundreds of edge cases, and refine until accuracy exceeds 90%.",
      },
      {
        num: "02",
        title: "Integrate & Deploy",
        description: "Deploy to your website, LINE OA, WhatsApp Business, or all three. Full testing in your real environment before going live with customers.",
      },
      {
        num: "03",
        title: "Monitor & Improve",
        description: "Track conversation quality, identify gaps, expand capabilities. Your AI gets smarter every month as it learns from real customer interactions.",
      },
    ],
    stats: [
      { value: 24, suffix: "/7", label: "AI Availability" },
      { value: 85, suffix: "%", label: "Auto-Resolved" },
      { value: 60, suffix: "%", label: "Cost Reduction" },
    ],
    faq: [
      {
        question: "Which AI technology do you use?",
        answer: "We use Claude AI and GPT-4 for conversational systems, selecting the best model for each specific use case. We always choose the technology that delivers the best result for your customers — not the trendiest one.",
      },
      {
        question: "How long does training take?",
        answer: "Basic chatbot with FAQ handling: 3–5 days. Advanced AI assistant with full product knowledge and complex flows: 1–2 weeks. Accuracy improves continuously after launch.",
      },
      {
        question: "What languages does it support?",
        answer: "Thai and English natively. We can add additional language support on request. The AI handles code-switching — customers who mix Thai and English mid-sentence are handled gracefully.",
      },
      {
        question: "What if the AI gives a wrong answer?",
        answer: "We build intelligent escalation flows — when the AI isn't confident, it hands off to a human immediately rather than guessing. Safety and accuracy always come before full automation.",
      },
    ],
    ctaText: "Deploy Your AI Assistant",
  },

  {
    slug: "analytics",
    name: "Analytics & Intelligence",
    tagline: "Stop Guessing. Start Knowing.",
    label: "Analytics & Intelligence",
    heroDescription: "Most businesses make million-baht decisions based on gut feeling and outdated reports. We give you real-time visibility into every part of your business — so every decision is backed by data, not hope.",
    icon: "BarChart2",
    features: [
      {
        title: "Real-Time Dashboard",
        description: "See your business performance live — traffic, conversions, revenue, and KPIs in one view, accessible from any device, any time.",
        icon: "Monitor",
      },
      {
        title: "Conversion Tracking",
        description: "Know exactly which channels, ads, and pages generate revenue. Eliminate spend on what doesn't work. Double down on what does.",
        icon: "Target",
      },
      {
        title: "Competitor Intelligence",
        description: "Monitor competitor rankings, ad spend, and content strategies automatically. Stay ahead of every move before it affects your market share.",
        icon: "Search",
      },
      {
        title: "Monthly Intelligence Reports",
        description: "Plain-language insights your team can act on immediately. No data science degree required — just clear direction on where to focus next month.",
        icon: "Star",
      },
    ],
    process: [
      {
        num: "01",
        title: "Tracking Setup",
        description: "Install analytics across every touchpoint — website, ads, social, CRM, and offline. If it generates data, we capture it and make it meaningful.",
      },
      {
        num: "02",
        title: "Dashboard Build",
        description: "Custom dashboard showing exactly the KPIs that matter most to your business — not a generic template, but metrics that drive your specific decisions.",
      },
      {
        num: "03",
        title: "Insights & Action",
        description: "Monthly strategic report with recommended actions ranked by potential impact. We don't just show you data — we tell you what to do with it.",
      },
    ],
    stats: [
      { value: 100, suffix: "%", label: "Data Visibility" },
      { value: 7, suffix: " days", label: "Setup Time" },
      { value: 3, suffix: "x", label: "Faster Decisions" },
    ],
    faq: [
      {
        question: "What analytics tools do you use?",
        answer: "Google Analytics 4, Looker Studio, SEMrush, and custom reporting systems — always the right combination for your specific needs and budget. We don't lock you into expensive proprietary platforms.",
      },
      {
        question: "Is customer data handled securely?",
        answer: "Yes. We strictly follow Thai PDPA requirements and international GDPR standards. All data infrastructure is in compliant, secure environments. Privacy is non-negotiable.",
      },
      {
        question: "Can you integrate with my existing tools?",
        answer: "Yes. We connect with Google Ads, Meta Business, LINE, CRM systems, POS software, and most major Thai business platforms. If it has an API, we can integrate it.",
      },
      {
        question: "How often do I receive reports?",
        answer: "Your live dashboard is accessible 24/7. Monthly strategic reports are delivered in the first week of each month. We can also schedule bi-weekly calls to review performance together.",
      },
    ],
    ctaText: "See Your Business Clearly",
  },

  {
    slug: "consulting",
    name: "Business Consulting",
    tagline: "Strategy That Moves Needles.",
    label: "Business Consulting",
    heroDescription: "Strategy without execution is daydreaming. Execution without strategy is chaos. We combine deep market expertise with hands-on implementation support to turn your digital ambitions into measurable business results.",
    icon: "Lightbulb",
    features: [
      {
        title: "Digital Transformation Roadmap",
        description: "A clear, prioritized plan for your entire digital evolution — with timelines, budgets, and ROI projections. No fluff, no vague recommendations. Just action.",
        icon: "Target",
      },
      {
        title: "Market Positioning",
        description: "Define your unique competitive advantage and communicate it in a way that makes customers choose you over every alternative, every time.",
        icon: "Star",
      },
      {
        title: "Competitive Analysis",
        description: "A forensic examination of what your competitors do, where they're weak, and exactly how to exploit those gaps to capture their market share.",
        icon: "Search",
      },
      {
        title: "Implementation Support",
        description: "We don't hand over a PDF and disappear. We stay through execution — reviewing progress, removing blockers, and ensuring strategy translates to results.",
        icon: "Shield",
      },
    ],
    process: [
      {
        num: "01",
        title: "48h Business Audit",
        description: "Deep analysis of your current position: digital presence, operations, competitors, customer journey, and growth opportunities. The truth, not what you want to hear.",
      },
      {
        num: "02",
        title: "Strategic Blueprint",
        description: "A comprehensive digital strategy document with prioritized initiatives, clear ownership, timelines, and projected ROI for each workstream.",
      },
      {
        num: "03",
        title: "Execution Partnership",
        description: "Monthly strategy sessions, implementation oversight, and performance tracking against the plan. We stay accountable to your results, not just our deliverables.",
      },
    ],
    stats: [
      { value: 48, suffix: "h", label: "Initial Analysis" },
      { value: 12, suffix: "+", label: "Industries Served" },
      { value: 2, suffix: "x", label: "Average Client ROI" },
    ],
    faq: [
      {
        question: "What size of business do you consult?",
        answer: "From solo entrepreneurs to 50+ employee companies across Thailand. We adapt our approach, depth, and pricing to match your scale and the complexity of your situation.",
      },
      {
        question: "What exactly does a consulting engagement include?",
        answer: "48h business audit, competitor analysis, full digital strategy document, 90-day implementation roadmap, and bi-weekly check-in calls. Everything you need to move with confidence.",
      },
      {
        question: "Is consulting done remotely or in person?",
        answer: "Both. Initial discovery meetings in Pattaya, Bangkok, or via video call. Monthly sessions online. Site visits available throughout Thailand when deeper operational understanding is needed.",
      },
      {
        question: "How is success measured?",
        answer: "We define specific, measurable KPIs together at the very start — revenue growth, lead volume, market share, cost reduction. We revisit these every month and hold ourselves accountable to them.",
      },
    ],
    ctaText: "Start With a Strategy Call",
  },
]

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES.find((s) => s.slug === slug)
}
