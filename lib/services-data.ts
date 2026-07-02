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

export const SERVICES_TH: ServiceData[] = [
  {
    slug: "digital-presence",
    name: "การปรากฏตัวดิจิทัล",
    tagline: "ถูกพบ. ถูกไว้วางใจ. ถูกเลือก.",
    label: "การปรากฏตัวดิจิทัล",
    heroDescription: "เว็บไซต์ของคุณคือพนักงานขายที่ทรงพลังที่สุด — ทำงาน 24/7 ไม่เคยขาดงาน เราสร้างการปรากฏตัวดิจิทัลที่สวยงามและรวดเร็วที่เปลี่ยนผู้เข้าชมเป็นลูกค้า และวางตำแหน่งธุรกิจของคุณให้เป็นตัวเลือกที่ชัดเจน",
    icon: "Globe",
    features: [
      { title: "การออกแบบเว็บไซต์แบบกำหนดเอง", description: "เว็บไซต์ที่สร้างด้วยมือ มือถือเป็นหลัก สร้างตามแบรนด์ของคุณ ทุกพิกเซลออกแบบมาเพื่อเปลี่ยนผู้เข้าชมเป็นการสอบถามและการเข้าร้าน", icon: "Monitor" },
      { title: "SEO ท้องถิ่นและ Google Business", description: "ครองผลการค้นหาท้องถิ่น ปรากฏอันดับต้นๆ เมื่อลูกค้าค้นหาบริการของคุณ ในพัทยา กรุงเทพฯ หรือที่ไหนก็ตามในประเทศไทย", icon: "Search" },
      { title: "เอกลักษณ์แบรนด์", description: "โลโก้ สี ตัวอักษร — อัตลักษณ์ภาพที่สอดคล้องกันซึ่งสร้างความไว้วางใจทันทีและทำให้คุณเป็นที่จดจำ", icon: "Star" },
      { title: "การเพิ่มประสิทธิภาพ", description: "PageSpeed 95+, Core Web Vitals, ข้อมูลโครงสร้าง เว็บที่เร็วจัดอันดับสูงและแปลงดีกว่า เราทำให้ของคุณสมบูรณ์แบบทางเทคนิค", icon: "Zap" },
    ],
    process: [
      { num: "01", title: "ค้นพบ & วางกลยุทธ์", description: "เราตรวจสอบการปรากฏตัวดิจิทัลปัจจุบัน วางแผนแนวทางการแข่งขัน และกำหนดกลยุทธ์การวางตำแหน่งที่เหมาะกับตลาดและเป้าหมายของคุณ" },
      { num: "02", title: "ออกแบบ & สร้าง", description: "การออกแบบที่สมบูรณ์แบบ การพัฒนาที่สะอาด การรวมเนื้อหา คุณตรวจสอบ คุณอนุมัติ เราสร้างสิ่งที่คุณต้องการตรงตามเวลา" },
      { num: "03", title: "เปิดตัว & เพิ่มประสิทธิภาพ", description: "เปิดตัวด้วยความมั่นใจ เราติดตามประสิทธิภาพ ปรับแต่ง SEO และทำให้แน่ใจว่าเว็บสร้างผลลัพธ์ตั้งแต่วันแรก" },
    ],
    stats: [
      { value: 3, suffix: "x", label: "การเข้าชมมากขึ้น" },
      { value: 48, suffix: "h", label: "เริ่มส่งมอบ" },
      { value: 98, suffix: "%", label: "ความพึงพอใจลูกค้า" },
    ],
    faq: [
      { question: "เว็บไซต์ราคาเท่าไหร่?", answer: "เริ่มต้น ฿15,000 สำหรับเว็บไซต์ธุรกิจมืออาชีพ แพ็คเกจเต็มรูปแบบพร้อม SEO และเนื้อหาเริ่มต้น ฿45,000 เราให้ราคาคงที่ ไม่มีเรื่องน่าประหลาดใจ ไม่มีค่าธรรมเนียมซ่อนเร้น" },
      { question: "ใช้เวลาสร้างนานแค่ไหน?", answer: "เว็บไซต์ธุรกิจพื้นฐาน: 5–7 วัน แพ็คเกจเต็มรูปแบบพร้อม SEO เนื้อหา และการเพิ่มประสิทธิภาพ: 10–14 วัน เราเร็วโดยไม่ตัดทอนคุณภาพ" },
      { question: "ฉันต้องจัดเตรียมเนื้อหาไหม?", answer: "ไม่ เราดูแลการเขียนคอนเทนต์ การหาภาพถ่าย และโครงสร้าง คุณแค่ตรวจสอบและอนุมัติ ลูกค้าส่วนใหญ่แปลกใจที่ต้องทำงานน้อยมาก" },
      { question: "จะทำงานบนมือถือได้ดีไหม?", answer: "แน่นอน ทุกเว็บไซต์ที่เราสร้างเน้นมือถือเป็นหลัก ลูกค้าไทยกว่า 70% ท่องเว็บบนสมาร์ทโฟน เราเพิ่มประสิทธิภาพสำหรับพวกเขาก่อน แล้วจึงขยายไปสู่เดสก์ท็อป" },
    ],
    ctaText: "พร้อมถูกพบ?",
  },
  {
    slug: "marketing-growth",
    name: "การตลาดและการเติบโต",
    tagline: "เปลี่ยนความสนใจเป็นรายได้",
    label: "การตลาดและการเติบโต",
    heroDescription: "การมองเห็นโดยไม่มีการแปลงเป็นเพียงเสียงรบกวน เราสร้างระบบการตลาดที่ขับเคลื่อนด้วยข้อมูลผ่าน Google, Meta และ TikTok ที่ดึงดูดลูกค้าที่ใช่ แปลงพวกเขาอย่างมีประสิทธิภาพ และขยายสิ่งที่ได้ผล",
    icon: "TrendingUp",
    features: [
      { title: "การจัดการ Google Ads", description: "แคมเปญค้นหาที่จับลูกค้าในเวลาที่พวกเขาพร้อมซื้อ ความตั้งใจสูงสุด การแปลงสูงสุด", icon: "Search" },
      { title: "แคมเปญ Meta & TikTok", description: "โฆษณาโซเชียลที่สร้างการรับรู้และขับเคลื่อนการแปลงที่วัดได้ เราสร้าง ทดสอบ และขยายครีเอทีฟที่หยุดการเลื่อนจริงๆ", icon: "Megaphone" },
      { title: "การจัดการโซเชียลมีเดีย", description: "เนื้อหาที่สอดคล้องและมีกลยุทธ์ที่รักษาแบรนด์ของคุณให้อยู่ในใจ เราจัดการการปรากฏตัวของคุณเพื่อให้คุณมุ่งเน้นการดำเนินธุรกิจ", icon: "Users" },
      { title: "การตลาดเนื้อหา", description: "บล็อก วิดีโอ และสินทรัพย์ครีเอทีฟที่ให้ความรู้ ดึงดูด และสร้างอำนาจ เนื้อหาที่ทำงานนานหลังจากเราเผยแพร่", icon: "Star" },
    ],
    process: [
      { num: "01", title: "การวิจัยตลาด", description: "การวิเคราะห์คู่แข่ง การทำแผนที่ผู้ชม การวิจัยคำสำคัญ และกลยุทธ์ช่องทาง เรารู้แน่ชัดว่าลูกค้าของคุณอยู่ที่ไหนก่อนที่จะใช้จ่ายสักบาท" },
      { num: "02", title: "การเปิดตัวแคมเปญ", description: "การสร้างโฆษณา การกำหนดเป้าหมายที่แม่นยำ การจัดสรรงบประมาณ ทุกแคมเปญมีโครงสร้างเพื่อสร้างลีดและยอดขายตั้งแต่วันแรก" },
      { num: "03", title: "เพิ่มประสิทธิภาพ & ขยาย", description: "รายงานรายสัปดาห์ การทดสอบ A/B การจัดสรรงบประมาณใหม่ให้ผู้ชนะ เราไม่หยุดปรับปรุง ทุกเดือนดีกว่าเดือนที่แล้ว" },
    ],
    stats: [
      { value: 340, suffix: "%", label: "ROAS เฉลี่ย" },
      { value: 30, suffix: " วัน", label: "สู่ผลลัพธ์แรก" },
      { value: 50, suffix: "+", label: "แคมเปญที่จัดการ" },
    ],
    faq: [
      { question: "งบโฆษณาขั้นต่ำเท่าไหร่?", answer: "เราแนะนำ ฿5,000–10,000 ต่อเดือนสำหรับผลลัพธ์ที่มีความหมาย ค่าบริหารจัดการของเราแยกต่างหาก เราจัดการทุกบาทอย่างมีกลยุทธ์เพื่อเพิ่มผลตอบแทนสูงสุด" },
      { question: "จะเห็นผลเมื่อไหร่?", answer: "Google Search Ads: ลีดแรกภายใน 48–72 ชั่วโมง แคมเปญโซเชียล: 2–4 สัปดาห์สำหรับโมเมนตัมเมื่ออัลกอริทึมเรียนรู้ เราตั้งความคาดหวังที่สมจริงตั้งแต่ต้น ไม่มีสัญญาเท็จ" },
      { question: "ควรโฆษณาบนแพลตฟอร์มไหน?", answer: "ขึ้นอยู่กับว่าลูกค้าของคุณอยู่ที่ไหน เราวิเคราะห์ธุรกิจและกลุ่มเป้าหมายของคุณก่อน แล้วจึงแนะนำแพลตฟอร์มที่มีศักยภาพ ROI สูงสุดสำหรับคุณ" },
      { question: "คุณสร้างครีเอทีฟโฆษณาให้ไหม?", answer: "ใช่ คอปปี้โฆษณา รูปภาพ สคริปต์วิดีโอ เราผลิตสินทรัพย์ครีเอทีฟทั้งหมด คุณตรวจสอบและอนุมัติ เราทดสอบหลายเวอร์ชันเพื่อหาสิ่งที่แปลงได้ดีที่สุด" },
    ],
    ctaText: "เริ่มแคมเปญการเติบโต",
  },
  {
    slug: "business-automation",
    name: "ระบบอัตโนมัติทางธุรกิจ",
    tagline: "คืนเวลาให้คุณ. ขยายโดยไม่มีขีดจำกัด.",
    label: "ระบบอัตโนมัติทางธุรกิจ",
    heroDescription: "เจ้าของ SME ไทยโดยเฉลี่ยสูญเสีย 3–4 ชั่วโมงต่อวันกับงานที่เครื่องจักรทำได้ในไม่กี่วินาที เราขจัดของเสียนั้น — ทำให้การติดตาม การป้อนข้อมูล การรายงาน และเวิร์กโฟลว์เป็นอัตโนมัติ เพื่อให้คุณมุ่งเน้นสิ่งที่มีเพียงคุณเท่านั้นที่ทำได้",
    icon: "Cog",
    features: [
      { title: "การตั้งค่าและรวม CRM", description: "รวมข้อมูลลูกค้าทั้งหมด ติดตามทุกการโต้ตอบ และไม่สูญเสียลีดอีกต่อไป ระบบเดียวที่รวมศูนย์ให้คุณมองเห็นทุกอย่างอย่างสมบูรณ์", icon: "Users" },
      { title: "การติดตามอัตโนมัติ", description: "ลำดับอีเมล การติดตาม WhatsApp การเตือนนัดหมาย ทั้งหมดถูกเรียกใช้งานอัตโนมัติในเวลาที่เหมาะสมพร้อมข้อความที่ถูกต้อง", icon: "Zap" },
      { title: "ระบบอัตโนมัติเวิร์กโฟลว์", description: "ขจัดการป้อนข้อมูลด้วยตนเอง ห่วงโซ่การอนุมัติ และการรายงานซ้ำๆ สิ่งที่เคยใช้เวลาหลายชั่วโมงตอนนี้เกิดขึ้นทันทีและไม่มีข้อผิดพลาด", icon: "Cog" },
      { title: "การรวมแบบกำหนดเอง", description: "เชื่อมต่อเครื่องมือของคุณ — LINE, Google Workspace, ซอฟต์แวร์บัญชี, POS — เป็นระบบเดียวที่ทำงานร่วมกันโดยไม่ต้องแทรกแซงด้วยตนเอง", icon: "Target" },
    ],
    process: [
      { num: "01", title: "การตรวจสอบกระบวนการ", description: "เราทำแผนที่เวิร์กโฟลว์ปัจจุบัน ระบุคอขวดด้วยตนเองทุกอย่าง และวัดเวลาและเงินที่สูญเสีย คุณจะเห็นชัดเจนว่าต้องทำอะไรก่อน" },
      { num: "02", title: "การสร้างระบบอัตโนมัติ", description: "เราออกแบบและสร้างระบบอัตโนมัติรอบเครื่องมือและกระบวนการที่มีอยู่ ไม่ต้องรื้อสิ่งที่ใช้งานได้ แค่ทำให้ฉลาดขึ้น" },
      { num: "03", title: "ฝึกอบรมและส่งมอบ", description: "การฝึกอบรมทีมอย่างครบถ้วน เอกสารที่ชัดเจน และการสนับสนุนต่อเนื่อง คุณเป็นเจ้าของระบบ เราทำให้แน่ใจว่าคุณใช้งานได้อย่างมั่นใจตั้งแต่วันแรก" },
    ],
    stats: [
      { value: 3, suffix: "h", label: "ประหยัดต่อวัน" },
      { value: 95, suffix: "%", label: "การลดข้อผิดพลาด" },
      { value: 100, suffix: "+", label: "ระบบอัตโนมัติที่สร้าง" },
    ],
    faq: [
      { question: "คุณใช้เครื่องมืออัตโนมัติอะไร?", answer: "เราทำงานกับ n8n, Make (Integromat) และโซลูชัน webhook แบบกำหนดเอง เลือกตามงบประมาณ สแต็กเทคโนโลยี และความซับซ้อนของคุณ เราเลือกเครื่องมือที่เหมาะสม ไม่ใช่แพงที่สุด" },
      { question: "ฉันต้องเปลี่ยนซอฟต์แวร์ที่มีอยู่ไหม?", answer: "ไม่ เราทำระบบอัตโนมัติรอบสิ่งที่คุณใช้อยู่ ทีมของคุณยังคงใช้เครื่องมือที่คุ้นเคย เราแค่ทำให้เครื่องมือเหล่านั้นสื่อสารกันและทำงานมากขึ้นโดยอัตโนมัติ" },
      { question: "การตั้งค่าใช้เวลานานแค่ไหน?", answer: "ระบบอัตโนมัติเรียบง่าย: 2–3 วัน เวิร์กโฟลว์หลายระบบที่ซับซ้อน: 1–2 สัปดาห์ ทุกอย่างได้รับการทดสอบและยืนยันก่อนส่งมอบ ไม่มีเรื่องประหลาดใจหลังเปิดตัว" },
      { question: "ข้อมูลธุรกิจของฉันปลอดภัยไหม?", answer: "แน่นอน ระบบอัตโนมัติทั้งหมดสร้างด้วยหลักการความปลอดภัยก่อน ตามข้อกำหนด PDPA ของไทย เราไม่จัดเก็บข้อมูลที่ละเอียดอ่อนโดยไม่จำเป็นและตรวจสอบการเข้าถึงในทุกขั้นตอน" },
    ],
    ctaText: "ทำให้ธุรกิจของคุณเป็นอัตโนมัติวันนี้",
  },
  {
    slug: "ai",
    name: "ปัญญาประดิษฐ์",
    tagline: "ธุรกิจของคุณทำงาน 24/7 โดยไม่ต้องมีคุณ",
    label: "ปัญญาประดิษฐ์",
    heroDescription: "ในขณะที่คุณนอนหลับ AI ของคุณจัดการการสอบถาม คัดกรองลีด ตอบคำถาม และจองนัดหมาย เราปรับใช้ระบบอัจฉริยะที่ให้บริการลูกค้าในระดับพนักงานที่ดีที่สุดของคุณ ในราคาเพียงเศษเสี้ยว",
    icon: "Brain",
    features: [
      { title: "แชทบอท AI", description: "บอทสนทนาอัจฉริยะที่จัดการการสอบถาม คัดกรองลีด และจองนัดหมายอัตโนมัติ บนเว็บไซต์ LINE และ WhatsApp ของคุณ", icon: "Brain" },
      { title: "AI คัดกรองลีด", description: "ให้คะแนนและจัดลำดับความสำคัญลีดที่เข้ามาโดยอัตโนมัติ ทีมขายของคุณพูดเฉพาะกับผู้ที่พร้อมซื้อ ไม่ต้องไล่ตามเส้นตาย", icon: "Target" },
      { title: "ผู้ช่วย AI แบบกำหนดเอง", description: "ฝึกด้วยผลิตภัณฑ์ บริการ ราคา และคำถามที่พบบ่อยของคุณ ตอบสนองเหมือนพนักงานที่มีความรู้มากที่สุดของคุณ ทั้งภาษาไทยและอังกฤษ 24/7", icon: "Star" },
      { title: "การวิเคราะห์ด้วย AI", description: "การจดจำรูปแบบในข้อมูลธุรกิจของคุณที่เปิดเผยข้อมูลเชิงลึกที่มนุษย์ไม่สามารถตรวจพบได้ รู้ว่าอะไรจะเกิดขึ้นก่อนที่มันจะเกิด", icon: "Zap" },
    ],
    process: [
      { num: "01", title: "ออกแบบ & ฝึก", description: "เรากำหนดกรณีใช้งาน AI ของคุณ ฝึกด้วยความรู้ทางธุรกิจของคุณ ทดสอบกรณีขอบหลายร้อยกรณี และปรับแต่งจนความแม่นยำเกิน 90%" },
      { num: "02", title: "รวม & ปรับใช้", description: "ปรับใช้บนเว็บไซต์ LINE OA, WhatsApp Business ของคุณ หรือทั้งสามอย่าง การทดสอบเต็มรูปแบบในสภาพแวดล้อมจริงของคุณก่อนให้บริการลูกค้า" },
      { num: "03", title: "ติดตาม & ปรับปรุง", description: "ติดตามคุณภาพการสนทนา ระบุช่องว่าง ขยายความสามารถ AI ของคุณฉลาดขึ้นทุกเดือนเมื่อเรียนรู้จากการโต้ตอบลูกค้าจริง" },
    ],
    stats: [
      { value: 24, suffix: "/7", label: "ความพร้อม AI" },
      { value: 85, suffix: "%", label: "แก้ไขอัตโนมัติ" },
      { value: 60, suffix: "%", label: "การลดต้นทุน" },
    ],
    faq: [
      { question: "คุณใช้เทคโนโลยี AI อะไร?", answer: "เราใช้ Claude AI และ GPT-4 สำหรับระบบสนทนา เลือกโมเดลที่ดีที่สุดสำหรับกรณีใช้งานเฉพาะ เราเลือกเทคโนโลยีที่ให้ผลลัพธ์ดีที่สุดสำหรับลูกค้าของคุณ ไม่ใช่ที่ฮิตที่สุด" },
      { question: "การฝึกใช้เวลานานแค่ไหน?", answer: "แชทบอทพื้นฐานพร้อมการจัดการ FAQ: 3–5 วัน ผู้ช่วย AI ขั้นสูงพร้อมความรู้ผลิตภัณฑ์เต็มรูปแบบ: 1–2 สัปดาห์ ความแม่นยำปรับปรุงอย่างต่อเนื่องหลังเปิดตัว" },
      { question: "รองรับภาษาอะไรบ้าง?", answer: "ภาษาไทยและอังกฤษโดยกำเนิด สามารถเพิ่มการรองรับภาษาเพิ่มเติมตามคำขอ AI จัดการการสลับรหัส ลูกค้าที่ผสมภาษาไทยและอังกฤษกลางประโยคได้รับการจัดการอย่างราบรื่น" },
      { question: "ถ้า AI ตอบผิดล่ะ?", answer: "เราสร้างกระบวนการส่งต่อที่ชาญฉลาด เมื่อ AI ไม่มั่นใจ จะส่งต่อให้มนุษย์ทันทีแทนการเดา ความปลอดภัยและความแม่นยำมาก่อนระบบอัตโนมัติเต็มรูปแบบเสมอ" },
    ],
    ctaText: "ปรับใช้ผู้ช่วย AI ของคุณ",
  },
  {
    slug: "analytics",
    name: "การวิเคราะห์และข่าวกรอง",
    tagline: "หยุดเดา. เริ่มรู้.",
    label: "การวิเคราะห์และข่าวกรอง",
    heroDescription: "ธุรกิจส่วนใหญ่ตัดสินใจหลักล้านบาทโดยอาศัยความรู้สึกและรายงานที่ล้าสมัย เราให้คุณมองเห็นทุกส่วนของธุรกิจแบบเรียลไทม์ เพื่อให้ทุกการตัดสินใจมีข้อมูลสนับสนุน ไม่ใช่ความหวัง",
    icon: "BarChart2",
    features: [
      { title: "แดชบอร์ดแบบเรียลไทม์", description: "ดูประสิทธิภาพธุรกิจแบบสด การเข้าชม การแปลง รายได้ และ KPI ในมุมมองเดียว เข้าถึงได้จากอุปกรณ์ใดก็ได้ ทุกเวลา", icon: "Monitor" },
      { title: "การติดตามการแปลง", description: "รู้แน่ชัดว่าช่องทาง โฆษณา และหน้าไหนสร้างรายได้ ขจัดการใช้จ่ายกับสิ่งที่ไม่ได้ผล เพิ่มเป็นสองเท่าในสิ่งที่ได้ผล", icon: "Target" },
      { title: "ข่าวกรองคู่แข่ง", description: "ติดตามการจัดอันดับ การใช้จ่ายโฆษณา และกลยุทธ์เนื้อหาของคู่แข่งโดยอัตโนมัติ ก้าวนำทุกการเคลื่อนไหวก่อนที่จะส่งผลต่อส่วนแบ่งตลาดของคุณ", icon: "Search" },
      { title: "รายงานข่าวกรองรายเดือน", description: "ข้อมูลเชิงลึกภาษาเรียบง่ายที่ทีมของคุณสามารถดำเนินการได้ทันที ไม่จำเป็นต้องมีปริญญาด้านวิทยาศาสตร์ข้อมูล แค่ทิศทางที่ชัดเจนว่าจะมุ่งเน้นเดือนหน้า", icon: "Star" },
    ],
    process: [
      { num: "01", title: "การตั้งค่าการติดตาม", description: "ติดตั้งการวิเคราะห์ทุกจุดสัมผัส เว็บไซต์ โฆษณา โซเชียล CRM และออฟไลน์ ถ้ามันสร้างข้อมูล เราจับภาพและทำให้มีความหมาย" },
      { num: "02", title: "การสร้างแดชบอร์ด", description: "แดชบอร์ดแบบกำหนดเองแสดง KPI ที่สำคัญที่สุดสำหรับธุรกิจของคุณ ไม่ใช่เทมเพลตทั่วไป แต่เป็นตัวชี้วัดที่ขับเคลื่อนการตัดสินใจเฉพาะของคุณ" },
      { num: "03", title: "ข้อมูลเชิงลึกและการดำเนินการ", description: "รายงานกลยุทธ์รายเดือนพร้อมการดำเนินการที่แนะนำจัดอันดับตามผลกระทบที่เป็นไปได้ เราไม่แค่แสดงข้อมูล เราบอกว่าต้องทำอะไรกับมัน" },
    ],
    stats: [
      { value: 100, suffix: "%", label: "การมองเห็นข้อมูล" },
      { value: 7, suffix: " วัน", label: "เวลาตั้งค่า" },
      { value: 3, suffix: "x", label: "การตัดสินใจเร็วขึ้น" },
    ],
    faq: [
      { question: "คุณใช้เครื่องมือวิเคราะห์อะไร?", answer: "Google Analytics 4, Looker Studio, SEMrush และระบบรายงานแบบกำหนดเอง เสมอเป็นการรวมกันที่เหมาะสมสำหรับความต้องการและงบประมาณเฉพาะของคุณ เราไม่ล็อคคุณไว้กับแพลตฟอร์มที่แพง" },
      { question: "ข้อมูลลูกค้าถูกจัดการอย่างปลอดภัยไหม?", answer: "ใช่ เราปฏิบัติตามข้อกำหนด PDPA ของไทยอย่างเคร่งครัดและมาตรฐาน GDPR ระหว่างประเทศ โครงสร้างพื้นฐานข้อมูลทั้งหมดอยู่ในสภาพแวดล้อมที่ปฏิบัติตามกฎระเบียบและปลอดภัย" },
      { question: "คุณสามารถรวมกับเครื่องมือที่มีอยู่ได้ไหม?", answer: "ใช่ เราเชื่อมต่อกับ Google Ads, Meta Business, LINE, ระบบ CRM, ซอฟต์แวร์ POS และแพลตฟอร์มธุรกิจไทยส่วนใหญ่ ถ้ามี API เราสามารถรวมได้" },
      { question: "ฉันจะได้รับรายงานบ่อยแค่ไหน?", answer: "แดชบอร์ดสดเข้าถึงได้ 24/7 รายงานกลยุทธ์รายเดือนส่งมอบในสัปดาห์แรกของแต่ละเดือน เราสามารถกำหนดการโทรประชุมสองสัปดาห์ครั้งเพื่อทบทวนประสิทธิภาพร่วมกัน" },
    ],
    ctaText: "มองเห็นธุรกิจของคุณอย่างชัดเจน",
  },
  {
    slug: "consulting",
    name: "การให้คำปรึกษาทางธุรกิจ",
    tagline: "กลยุทธ์ที่เปลี่ยนผลลัพธ์",
    label: "การให้คำปรึกษาทางธุรกิจ",
    heroDescription: "กลยุทธ์โดยไม่มีการดำเนินการคือการฝันกลางวัน การดำเนินการโดยไม่มีกลยุทธ์คือความวุ่นวาย เราผสมผสานความเชี่ยวชาญด้านตลาดเชิงลึกกับการสนับสนุนการดำเนินงานแบบลงมือทำ เพื่อเปลี่ยนความทะเยอทะยานดิจิทัลของคุณให้เป็นผลลัพธ์ทางธุรกิจที่วัดได้",
    icon: "Lightbulb",
    features: [
      { title: "แผนที่การเปลี่ยนแปลงดิจิทัล", description: "แผนที่ชัดเจนและจัดลำดับความสำคัญสำหรับวิวัฒนาการดิจิทัลทั้งหมดของคุณ พร้อมเส้นเวลา งบประมาณ และการคาดการณ์ ROI ไม่มีคำพูดไร้สาระ แค่การกระทำ", icon: "Target" },
      { title: "การวางตำแหน่งทางการตลาด", description: "กำหนดข้อได้เปรียบการแข่งขันเฉพาะตัวของคุณและสื่อสารในแบบที่ทำให้ลูกค้าเลือกคุณเหนือทุกทางเลือก ทุกครั้ง", icon: "Star" },
      { title: "การวิเคราะห์การแข่งขัน", description: "การตรวจสอบทางนิติเวชว่าคู่แข่งทำอะไร จุดอ่อนของพวกเขาอยู่ที่ไหน และวิธีใช้ประโยชน์จากช่องว่างเหล่านั้นเพื่อยึดส่วนแบ่งตลาด", icon: "Search" },
      { title: "การสนับสนุนการดำเนินงาน", description: "เราไม่ส่งมอบ PDF แล้วหายไป เราอยู่จนถึงการดำเนินการ ตรวจสอบความคืบหน้า ขจัดสิ่งกีดขวาง และทำให้มั่นใจว่ากลยุทธ์แปลงเป็นผลลัพธ์", icon: "Shield" },
    ],
    process: [
      { num: "01", title: "การตรวจสอบธุรกิจ 48 ชั่วโมง", description: "การวิเคราะห์เชิงลึกตำแหน่งปัจจุบันของคุณ: การปรากฏตัวดิจิทัล การดำเนินงาน คู่แข่ง เส้นทางลูกค้า และโอกาสการเติบโต ความจริง ไม่ใช่สิ่งที่คุณอยากได้ยิน" },
      { num: "02", title: "แผนกลยุทธ์", description: "เอกสารกลยุทธ์ดิจิทัลที่ครอบคลุมพร้อมความคิดริเริ่มที่จัดลำดับความสำคัญ ความเป็นเจ้าของที่ชัดเจน เส้นเวลา และ ROI ที่คาดการณ์สำหรับแต่ละกระแสงาน" },
      { num: "03", title: "พันธมิตรการดำเนินงาน", description: "การประชุมกลยุทธ์รายเดือน การดูแลการดำเนินงาน และการติดตามประสิทธิภาพตามแผน เราคงความรับผิดชอบต่อผลลัพธ์ของคุณ ไม่ใช่แค่สิ่งที่ส่งมอบ" },
    ],
    stats: [
      { value: 48, suffix: "h", label: "การวิเคราะห์เริ่มต้น" },
      { value: 12, suffix: "+", label: "อุตสาหกรรมที่ให้บริการ" },
      { value: 2, suffix: "x", label: "ROI เฉลี่ยของลูกค้า" },
    ],
    faq: [
      { question: "คุณให้คำปรึกษาธุรกิจขนาดไหน?", answer: "ตั้งแต่ผู้ประกอบการเดี่ยวไปจนถึงบริษัท 50+ คนทั่วประเทศไทย เราปรับแนวทาง ความลึก และราคาตามขนาดและความซับซ้อนของสถานการณ์ของคุณ" },
      { question: "การให้คำปรึกษารวมอะไรบ้าง?", answer: "การตรวจสอบธุรกิจ 48 ชั่วโมง การวิเคราะห์คู่แข่ง เอกสารกลยุทธ์ดิจิทัลเต็มรูปแบบ แผนดำเนินงาน 90 วัน และการโทรเช็คอินทุกสองสัปดาห์ ทุกอย่างที่คุณต้องการเพื่อก้าวเดินด้วยความมั่นใจ" },
      { question: "การให้คำปรึกษาทำแบบออนไลน์หรือพบหน้า?", answer: "ทั้งสองอย่าง การประชุมค้นพบเริ่มต้นในพัทยา กรุงเทพฯ หรือผ่านวิดีโอคอล การประชุมรายเดือนออนไลน์ มีการเยี่ยมชมสถานที่ทั่วประเทศไทยเมื่อต้องการความเข้าใจการดำเนินงานเชิงลึก" },
      { question: "วัดความสำเร็จอย่างไร?", answer: "เราร่วมกันกำหนด KPI ที่วัดได้ตั้งแต่ต้น การเติบโตของรายได้ ปริมาณลีด ส่วนแบ่งตลาด การลดต้นทุน เราทบทวนสิ่งเหล่านี้ทุกเดือนและรับผิดชอบต่อตัวเอง" },
    ],
    ctaText: "เริ่มต้นด้วยการโทรปรึกษากลยุทธ์",
  },
]

export function getServiceBySlug(slug: string, locale?: string): ServiceData | undefined {
  if (locale === "th") {
    return SERVICES_TH.find((s) => s.slug === slug)
  }
  return SERVICES.find((s) => s.slug === slug)
}
