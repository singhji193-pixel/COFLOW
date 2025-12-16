// COFlow Landing Page Mock Data

export const heroData = {
  headline: "Stop Doing What Software Should Do For You",
  subheadline: "We build custom AI automations that connect your tools, eliminate manual work, and run your business 24/7 — so you can focus on growth, not grunt work.",
  primaryCTA: "Book Free Automation Audit",
  secondaryCTA: "See How It Works",
  trustBadges: [
    { icon: "Flag", text: "Canadian Company" },
    { icon: "Building2", text: "Serving 100+ Businesses" },
    { icon: "Star", text: "4.9/5 Client Rating" },
    { icon: "ShieldCheck", text: "SOC 2 Compliant" }
  ]
};

export const problemsData = {
  sectionTitle: "Sound Familiar?",
  problems: [
    {
      icon: "Clock",
      title: "Drowning in Manual Tasks",
      description: "Copy-pasting between spreadsheets. Manually sending follow-ups. Updating 3 systems every time something changes. Your day disappears into busywork."
    },
    {
      icon: "Unlink",
      title: "Tools That Don't Talk",
      description: "Your CRM doesn't know what your accounting software knows. Leads from ads don't sync properly. You're the human glue holding it all together."
    },
    {
      icon: "DollarSign",
      title: "Leads Slipping Away",
      description: "By the time you respond to a new inquiry, they've already talked to your competitor. Speed wins deals, but you can't be everywhere."
    },
    {
      icon: "Scale",
      title: "Can't Scale Without Breaking",
      description: "Every new client means more manual work. You've hired help, but the bottleneck is the process itself, not the people."
    }
  ],
  bottomText: "What if your business ran itself?"
};

export const solutionData = {
  sectionTitle: "Meet COFlow",
  intro: "COFlow builds custom AI-powered automations that connect your existing tools, eliminate repetitive work, and create systems that scale. We're not another software subscription — we're the engineering team that makes your software actually work together.",
  pillars: [
    {
      icon: "Puzzle",
      title: "Connect Everything",
      description: "CRM to accounting. Ads to email. Forms to Slack. Calendar to invoicing. If it has an API, we can connect it."
    },
    {
      icon: "Brain",
      title: "Add Intelligence",
      description: "AI that reads documents, qualifies leads, writes personalized follow-ups, and makes decisions — so you don't have to."
    },
    {
      icon: "Infinity",
      title: "Runs Forever",
      description: "Once built, your automations run 24/7 on our secure Canadian infrastructure. No monthly per-task fees. No limits."
    }
  ]
};

export const howItWorksData = {
  sectionTitle: "From Chaos to Autopilot in 3 Steps",
  steps: [
    {
      number: "01",
      title: "Automation Audit",
      description: "We map your current tools, processes, and pain points. You'll get a custom automation roadmap showing exactly what to automate first for maximum ROI.",
      duration: "30-minute call",
      cost: "Free"
    },
    {
      number: "02",
      title: "We Build It",
      description: "Our team builds your custom workflows using enterprise-grade automation infrastructure. You review, we refine, until it's perfect.",
      duration: "1-2 weeks typical",
      cost: "One-time setup fee"
    },
    {
      number: "03",
      title: "It Runs Forever",
      description: "Your automations go live. We monitor, maintain, and optimize. You focus on growth while the system handles the rest.",
      duration: "Ongoing",
      cost: "Optional monthly retainer"
    }
  ]
};

export const industriesData = {
  sectionTitle: "Automations That Actually Move the Needle",
  industries: [
    {
      id: "coaches",
      name: "Coaches & Consultants",
      tagline: "From inquiry to invoice — automated",
      automations: [
        { name: "Discovery Call Qualifier", description: "Lead fills form → AI qualifies → auto-books call → sends prep questions → reminders" },
        { name: "Course Delivery System", description: "Payment received → grant access → drip content weekly → completion certificate" },
        { name: "Testimonial Collector", description: "Program ends → request review → AI follow-up → publish to website" },
        { name: "Content Repurposer", description: "Record 1 video → AI creates blog + LinkedIn + Twitter + email newsletter" },
        { name: "Payment & Access Manager", description: "Payment received → unlock content → payment failed → revoke + recovery sequence" }
      ]
    },
    {
      id: "real-estate",
      name: "Real Estate",
      tagline: "Respond instantly. Close faster.",
      automations: [
        { name: "Instant Lead Response", description: "New inquiry from Zillow/Realtor.ca → WhatsApp + email within 60 seconds" },
        { name: "Open House Follow-up", description: "Sign-in → same-day email → Day 3, 7 follow-ups → nurture sequence" },
        { name: "Property Match Alerts", description: "New listing → match to buyer preferences → auto-notify" },
        { name: "Transaction Coordinator", description: "Offer accepted → document checklist → reminders → track to close" },
        { name: "Anniversary Campaign", description: "1 year after close → congrats + home value update + referral ask" }
      ]
    },
    {
      id: "financial",
      name: "Financial Advisors",
      tagline: "Stay compliant. Stay top of mind.",
      automations: [
        { name: "RRSP/401k Deadline Reminders", description: "60, 30, 15 days before deadline → personalized reminder with contribution room" },
        { name: "Client Review Scheduler", description: "Quarterly → auto-send booking link → portfolio summary before meeting" },
        { name: "Market Volatility Broadcaster", description: "Market drops 3%+ → AI draft calming message → send to anxious clients" },
        { name: "New Client Onboarding", description: "Agreement signed → DocuSign for IPS → KYC collection → welcome sequence" },
        { name: "COI Referral Tracker", description: "Referral from accountant/lawyer → track → deal closes → thank you gift" }
      ]
    },
    {
      id: "healthcare",
      name: "Healthcare & Dental",
      tagline: "Fewer no-shows. Happier patients.",
      automations: [
        { name: "Appointment Reminders", description: "Booking → confirmation → 24hr + 2hr reminders via SMS" },
        { name: "Recall & Hygiene Reminders", description: "6 months since cleaning → reminder sequence → easy booking link" },
        { name: "Post-Visit Feedback", description: "Appointment complete → feedback request → negative = alert manager" },
        { name: "Insurance Verification", description: "New patient → request insurance info → verify eligibility → notify front desk" },
        { name: "Treatment Plan Follow-up", description: "Treatment presented but not booked → Day 3, 7, 14 follow-ups" }
      ]
    },
    {
      id: "law",
      name: "Law Firms",
      tagline: "Qualify faster. Bill easier.",
      automations: [
        { name: "Intake Qualifier", description: "Inquiry → AI assess case type, urgency, budget → qualified = book consult" },
        { name: "Document Collection", description: "Matter opened → request docs → reminders → organize in client folder" },
        { name: "Court Date Reminders", description: "Hearing scheduled → remind lawyer + client → prep checklist" },
        { name: "Billing Automation", description: "Time logged → generate invoice → send → payment reminders" },
        { name: "Client Satisfaction Survey", description: "Matter closed → NPS survey → low = partner alert, high = referral ask" }
      ]
    },
    {
      id: "accountants",
      name: "Accountants",
      tagline: "Survive tax season. Thrive year-round.",
      automations: [
        { name: "Document Collection Bot", description: "January → checklist to all clients → upload portal → reminders until complete" },
        { name: "Deadline Reminder System", description: "T1/T2/HST/Payroll deadlines → 30, 15, 7, 3, 1 day reminders" },
        { name: "Receipt Processor", description: "Client emails receipt → AI extract vendor, amount, GST/HST → add to books" },
        { name: "Engagement Letter Automation", description: "New client → DocuSign engagement letter → signed → onboarding triggered" },
        { name: "Monthly Bookkeeping Delivery", description: "Books closed → generate summary → email to client" }
      ]
    },
    {
      id: "home-services",
      name: "Home Services",
      tagline: "Dispatch smarter. Get paid faster.",
      automations: [
        { name: "Service Request to Dispatch", description: "Customer request → create job → assign tech → notify customer with ETA" },
        { name: "Appointment Reminders", description: "Job scheduled → confirmation → 'tech on the way' with photo + name" },
        { name: "Post-Job Review Request", description: "Job complete → thank you → review request → negative = manager alert" },
        { name: "Maintenance Agreement Renewal", description: "30 days before expiry → renewal reminder → easy pay link" },
        { name: "Seasonal Campaigns", description: "Fall = furnace tune-up, Spring = AC check → segment by history → send offer" }
      ]
    },
    {
      id: "ecommerce",
      name: "E-commerce & DTC",
      tagline: "Recover carts. Build loyalty.",
      automations: [
        { name: "Abandoned Cart Recovery", description: "Cart abandoned → 1hr email → 24hr SMS with discount → 48hr final push" },
        { name: "Post-Purchase Flow", description: "Order → thank you → shipped → delivered → Day 7 review request" },
        { name: "VIP Program", description: "Spending threshold hit → tag VIP → early access → birthday gift" },
        { name: "Inventory Alerts", description: "Stock low → alert team → auto-create PO draft" },
        { name: "Returns Handler", description: "Return requested → generate label → track → refund → win-back offer" }
      ]
    }
  ],
  bottomCTA: "Don't see your industry? We've automated everything from tire shops to recruiting agencies. Let's talk."
};

export const ecosystemData = {
  sectionTitle: "Part of Something Bigger",
  intro: "COFlow is part of the COEngine ecosystem — a complete suite of tools to run and grow your business.",
  products: [
    {
      icon: "Rocket",
      name: "COEngine",
      subtitle: "Marketing Automation",
      description: "CRM, funnels, email, SMS, WhatsApp, LMS — the DIY marketing platform.",
      url: "coengine.ai",
      current: false
    },
    {
      icon: "Workflow",
      name: "COFlow",
      subtitle: "Custom Automation",
      description: "AI-powered workflows that connect everything. You're here.",
      url: "flow.coengine.ai",
      current: true
    },
    {
      icon: "Handshake",
      name: "COLab",
      subtitle: "Done-For-You Services",
      description: "Need it built? Funnels, ads, apps — our team delivers.",
      url: "colab.coengine.ai",
      current: false
    },
    {
      icon: "Building",
      name: "COErp",
      subtitle: "Business Operations",
      description: "Inventory, accounting, HR, manufacturing — full ERP.",
      url: "erp.coengine.ai",
      current: false
    }
  ],
  bottomText: "Use one. Use all. They work better together."
};

export const pricingData = {
  sectionTitle: "Simple Pricing. Serious Results.",
  plans: [
    {
      name: "STARTER",
      price: "$997",
      currency: "CAD",
      type: "One-time",
      bestFor: "Solopreneurs & small teams",
      features: [
        "1 custom automation workflow",
        "Up to 3 app integrations",
        "Basic AI features (if applicable)",
        "30 days of support & adjustments",
        "Hosted on COFlow infrastructure",
        "Documentation & training video"
      ],
      popular: false
    },
    {
      name: "GROWTH",
      price: "$2,497",
      currency: "CAD",
      type: "One-time",
      bestFor: "Growing businesses",
      features: [
        "Up to 5 custom automation workflows",
        "Unlimited app integrations",
        "Advanced AI features",
        "60 days of support & adjustments",
        "Priority hosting",
        "Monthly optimization call (first 3 months)"
      ],
      popular: true
    },
    {
      name: "SCALE",
      price: "$4,997",
      currency: "CAD",
      type: "One-time",
      bestFor: "Established companies & agencies",
      features: [
        "Up to 15 custom automation workflows",
        "Unlimited everything",
        "Full AI suite (chatbots, document AI)",
        "90 days of support & adjustments",
        "Dedicated automation specialist",
        "White-label option for agencies"
      ],
      popular: false
    }
  ],
  retainers: {
    title: "Optional Monthly Retainer",
    subtitle: "Want ongoing optimization, new automations, and priority support?",
    plans: [
      { name: "Essentials", price: "$297/mo", features: "Monitoring, maintenance, 2 workflow updates/month, email support" },
      { name: "Growth", price: "$497/mo", features: "Everything above + 5 updates/month, monthly strategy call, priority support" },
      { name: "Scale", price: "$997/mo", features: "Unlimited updates, dedicated Slack channel, quarterly automation audit" }
    ]
  }
};

export const testimonialsData = {
  sectionTitle: "What Our Clients Say",
  testimonials: [
    {
      quote: "We were manually entering leads from Facebook ads into our CRM. COFlow automated it and now leads get a response in under 2 minutes. Our close rate jumped 35%.",
      name: "Sarah M.",
      title: "Real Estate Broker, Toronto",
      result: "35% increase in close rate"
    },
    {
      quote: "Tax season used to mean 200+ emails chasing clients for documents. Now they upload to a portal, get automatic reminders, and I have a dashboard showing who's done. Game changer.",
      name: "Michael R.",
      title: "CPA, Vancouver",
      result: "15 hours saved per week"
    },
    {
      quote: "Our coaches were spending 2 hours a day on admin — scheduling, reminders, follow-ups. COFlow gave them that time back to actually coach.",
      name: "Jennifer K.",
      title: "Fitness Studio Owner, Calgary",
      result: "10+ hours saved per coach per week"
    },
    {
      quote: "We integrated our Shopify store with our fulfillment center and accounting. Orders flow through automatically. No more copy-paste errors.",
      name: "David L.",
      title: "E-commerce Brand Owner, Austin",
      result: "Zero manual order processing"
    },
    {
      quote: "The AI chatbot handles 70% of our client inquiries now. It qualifies leads, answers FAQs, and books consultations while we sleep.",
      name: "Amanda T.",
      title: "Law Firm Partner, Seattle",
      result: "70% of inquiries handled by AI"
    }
  ]
};

export const faqData = {
  sectionTitle: "Questions? We've Got Answers.",
  faqs: [
    {
      question: "What tools can you connect?",
      answer: "If it has an API, we can probably connect it. We've integrated 500+ apps including Salesforce, HubSpot, Shopify, QuickBooks, Xero, Google Workspace, Microsoft 365, Slack, Zoom, Calendly, Stripe, Square, Twilio, and hundreds more. Don't see yours? Ask us."
    },
    {
      question: "How long does it take to build an automation?",
      answer: "Simple automations (2-3 steps) can be done in a few days. Complex workflows with AI and multiple systems typically take 1-2 weeks. We'll give you a timeline during your free audit."
    },
    {
      question: "Do I need technical knowledge?",
      answer: "Zero. We handle everything — building, testing, deploying, and maintaining. You just tell us what you need automated, and we make it happen."
    },
    {
      question: "What happens if something breaks?",
      answer: "Our automations are monitored 24/7. If something fails, we get alerted and fix it — often before you even notice. Retainer clients get priority response times."
    },
    {
      question: "Is my data secure?",
      answer: "Yes. Our infrastructure is hosted in Canada on SOC 2 compliant servers. We never store your credentials directly — we use secure OAuth connections. Your data stays yours."
    },
    {
      question: "What's the difference between COFlow and COEngine?",
      answer: "COEngine is a marketing platform (CRM, funnels, email, etc.) — software you use daily. COFlow builds custom backend automations that connect COEngine (or any other tool) to the rest of your tech stack. They work great together, but you don't need one to use the other."
    },
    {
      question: "Do you offer refunds?",
      answer: "We offer a satisfaction guarantee. If we can't deliver what was scoped in your audit, you don't pay. Once an automation is built and deployed, it's yours — no refunds on completed work, but we'll keep adjusting until it works right."
    },
    {
      question: "Can you automate things with AI?",
      answer: "Absolutely. We build AI-powered workflows that can read documents, qualify leads, write personalized messages, categorize data, summarize meetings, and much more. AI is integrated into many of our automations."
    }
  ]
};

export const finalCTAData = {
  headline: "Ready to Put Your Business on Autopilot?",
  subheadline: "Book your free Automation Audit. We'll map your processes, identify the biggest opportunities, and show you exactly what's possible.",
  benefits: [
    "30-minute strategy call with an automation specialist",
    "Custom process map of your current workflows",
    "Top 3 automation opportunities ranked by ROI",
    "No-obligation quote if you want us to build it"
  ],
  primaryCTA: "Book Free Automation Audit",
  secondaryText: "No credit card required. No pushy sales tactics. Just clarity."
};

export const footerData = {
  brand: {
    name: "COFlow",
    description: "Custom AI automation for North American businesses.",
    location: "Vancouver, BC, Canada",
    serving: "Serving Canada & USA"
  },
  ecosystem: [
    { name: "COEngine", url: "https://coengine.ai" },
    { name: "COFlow", url: "https://flow.coengine.ai", current: true },
    { name: "COLab", url: "https://colab.coengine.ai" },
    { name: "COErp", url: "https://erp.coengine.ai" },
    { name: "CODesk", url: "https://codesk.help" }
  ],
  resources: [
    { name: "Blog", url: "#" },
    { name: "Case Studies", url: "#" },
    { name: "Documentation", url: "#" },
    { name: "API Status", url: "#" }
  ],
  legal: [
    { name: "Privacy Policy", url: "#" },
    { name: "Terms of Service", url: "#" },
    { name: "Cookie Policy", url: "#" },
    { name: "PIPEDA Compliance", url: "#" }
  ],
  social: [
    { name: "LinkedIn", icon: "Linkedin", url: "#" },
    { name: "Twitter", icon: "Twitter", url: "#" },
    { name: "YouTube", icon: "Youtube", url: "#" }
  ],
  copyright: "© 2025 COEngine Service Inc. All rights reserved.",
  tagline: "Proudly Canadian"
};
