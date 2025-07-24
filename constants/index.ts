import { CreateAssistantDTO } from "@vapi-ai/web/dist/api";
import { z } from "zod";

export const mappings = {
  "react.js": "react",
  reactjs: "react",
  react: "react",
  "next.js": "nextjs",
  nextjs: "nextjs",
  next: "nextjs",
  "vue.js": "vuejs",
  vuejs: "vuejs",
  vue: "vuejs",
  "express.js": "express",
  expressjs: "express",
  express: "express",
  "node.js": "nodejs",
  nodejs: "nodejs",
  node: "nodejs",
  mongodb: "mongodb",
  mongo: "mongodb",
  mongoose: "mongoose",
  mysql: "mysql",
  postgresql: "postgresql",
  sqlite: "sqlite",
  firebase: "firebase",
  docker: "docker",
  kubernetes: "kubernetes",
  aws: "aws",
  azure: "azure",
  gcp: "gcp",
  digitalocean: "digitalocean",
  heroku: "heroku",
  photoshop: "photoshop",
  "adobe photoshop": "photoshop",
  html5: "html5",
  html: "html5",
  css3: "css3",
  css: "css3",
  sass: "sass",
  scss: "sass",
  less: "less",
  tailwindcss: "tailwindcss",
  tailwind: "tailwindcss",
  bootstrap: "bootstrap",
  jquery: "jquery",
  typescript: "typescript",
  ts: "typescript",
  javascript: "javascript",
  js: "javascript",
  "angular.js": "angular",
  angularjs: "angular",
  angular: "angular",
  "ember.js": "ember",
  emberjs: "ember",
  ember: "ember",
  "backbone.js": "backbone",
  backbonejs: "backbone",
  backbone: "backbone",
  nestjs: "nestjs",
  graphql: "graphql",
  "graph ql": "graphql",
  apollo: "apollo",
  webpack: "webpack",
  babel: "babel",
  "rollup.js": "rollup",
  rollupjs: "rollup",
  rollup: "rollup",
  "parcel.js": "parcel",
  parceljs: "parcel",
  npm: "npm",
  yarn: "yarn",
  git: "git",
  github: "github",
  gitlab: "gitlab",
  bitbucket: "bitbucket",
  figma: "figma",
  prisma: "prisma",
  redux: "redux",
  flux: "flux",
  redis: "redis",
  selenium: "selenium",
  cypress: "cypress",
  jest: "jest",
  mocha: "mocha",
  chai: "chai",
  karma: "karma",
  vuex: "vuex",
  "nuxt.js": "nuxt",
  nuxtjs: "nuxt",
  nuxt: "nuxt",
  strapi: "strapi",
  wordpress: "wordpress",
  contentful: "contentful",
  netlify: "netlify",
  vercel: "vercel",
  "aws amplify": "amplify",
};

export const roleIcons: Record<string, string> = {
  // Development & Engineering
  "frontend developer": "material-symbols:code",
  "backend developer": "mdi:server",
  "fullstack developer": "carbon:application-web",
  "software engineer": "tabler:code",
  "mobile developer": "mdi:cellphone-android",
  "ios developer": "mdi:apple-ios",
  "android developer": "mdi:android",
  "react developer": "mdi:react",
  "node developer": "simple-icons:nodedotjs",
  "python developer": "mdi:language-python",
  "java developer": "mdi:language-java",
  "golang developer": "mdi:language-go",
  "php developer": "mdi:language-php",
  "ruby developer": "mdi:language-ruby-on-rails",
  "devops engineer": "mdi:cloud-sync",
  "qa engineer": "mdi:bug-check",
  "ml engineer": "mdi:brain",
  "ai engineer": "mdi:robot",
  "data analyst": "mdi:chart-bar",
  "data scientist": "mdi:chart-line",
  "system administrator": "mdi:server-security",
  "security engineer": "mdi:shield-lock",
  "network engineer": "mdi:lan-connect",
  "database administrator": "mdi:database-cog",
  "blockchain developer": "mdi:link-variant",
  "cloud engineer": "mdi:cloud-outline",
  "site reliability engineer": "mdi:server-network",
  "test engineer": "mdi:bug-outline",

  // Design & Creative
  "ui designer": "mdi:palette-swatch",
  "ux designer": "mdi:gesture-tap",
  "graphic designer": "mdi:brush",
  "product designer": "mdi:shape",
  "motion designer": "mdi:play-circle",
  "illustrator": "mdi:vector-square",
  "video editor": "mdi:video",
  "animator": "mdi:animation-play",

  // Product & Project
  "product manager": "mdi:clipboard-account",
  "project manager": "mdi:clipboard-text-clock",
  "scrum master": "mdi:chart-timeline",
  "business analyst": "mdi:briefcase-search",
  "program manager": "mdi:clipboard-flow",
  "technical writer": "mdi:file-document-edit",

  // IT Support & Admin
  "technical support": "mdi:headset",
  "it support specialist": "mdi:laptop",
  "help desk technician": "mdi:account-question",
  "network technician": "mdi:lan",
  "desktop support": "mdi:monitor",
  "it administrator": "mdi:account-wrench",
  "cybersecurity analyst": "mdi:security",

  // HR & People Ops
  "hr manager": "mdi:account-multiple",
  "recruiter": "mdi:magnify",
  "talent acquisition": "mdi:account-search",
  "people operations": "mdi:account-group-outline",
  "training specialist": "mdi:school",

  // Marketing & Sales
  "marketing manager": "mdi:bullhorn",
  "content writer": "mdi:pencil-box",
  "seo specialist": "mdi:google",
  "social media manager": "mdi:instagram",
  "copywriter": "mdi:file-document",
  "sales manager": "mdi:currency-usd",
  "account executive": "mdi:account-cash",
  "customer success": "mdi:account-heart",
  "customer support": "mdi:headphones",
  "growth marketer": "mdi:trending-up",
  "email marketer": "mdi:email-fast",
  "digital marketer": "mdi:web",
  "product marketer": "mdi:package-variant-closed",

  // Executive & Leadership
  "cto": "mdi:account-tie",
  "ceo": "mdi:account-star",
  "coo": "mdi:account-supervisor",
  "cmo": "mdi:bullhorn-outline",
  "cfo": "mdi:cash-multiple",
  "head of engineering": "mdi:office-building-cog",
  "engineering manager": "mdi:account-cog",
  "vp of product": "mdi:clipboard-text-multiple",

  // Others
  "intern": "mdi:account-school",
  "freelancer": "mdi:laptop-account",
  "student": "mdi:school-outline",
  "researcher": "mdi:magnify-scan",
  "teacher": "mdi:teach",
  "coach": "mdi:whistle",
  "consultant": "mdi:account-tie-outline",
};

export const interviewer: CreateAssistantDTO = {
  name: "Interviewer",
  firstMessage:
    "Hello! Thank you for taking the time to speak with me today. I'm excited to learn more about you and your experience.",
  transcriber: {
    provider: "deepgram",
    model: "nova-2",
    language: "en",
  },
  voice: {
    provider: "11labs",
    voiceId: "harry",
    stability: 0.4,
    similarityBoost: 0.8,
    speed: 0.9,
    style: 0.5,
    useSpeakerBoost: true,
  },
  model: {
    provider: "openai",
    model: "gpt-4.1-nano",
    messages: [
      {
        role: "system",
        content: `You are a professional job interviewer conducting a real-time voice interview with a candidate. Your goal is to assess their qualifications, motivation, and fit for the role.

Interview Guidelines:
Follow the structured question flow:
{{questions}}

Engage naturally & react appropriately:
Listen actively to responses and acknowledge them before moving forward.
Ask brief follow-up questions if a response is vague or requires more detail.
Keep the conversation flowing smoothly while maintaining control.
Be professional, yet warm and welcoming:

Use official yet friendly language.
Keep responses concise and to the point (like in a real voice interview).
Avoid robotic phrasing—sound natural and conversational.
Answer the candidate’s questions professionally:

If asked about the role, company, or expectations, provide a clear and relevant answer.
If unsure, redirect the candidate to HR for more details.

Conclude the interview properly:
Thank the candidate for their time.
Inform them that the company will reach out soon with feedback.
End the conversation on a polite and positive note.


- Be sure to be professional and polite.
- Keep all your responses short and simple. Use official language, but be kind and welcoming.
- This is a voice conversation, so keep your responses short, like in a real conversation. Don't ramble for too long.`,
      },
    ],
  },
};

export const feedbackSchema = z.object({
  totalScore: z.number(),
  categoryScores: z.tuple([
    z.object({
      name: z.literal("Communication Skills"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Technical Knowledge"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Problem Solving"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Cultural Fit"),
      score: z.number(),
      comment: z.string(),
    }),
    z.object({
      name: z.literal("Confidence and Clarity"),
      score: z.number(),
      comment: z.string(),
    }),
  ]),
  strengths: z.array(z.string()),
  areasForImprovement: z.array(z.string()),
  finalAssessment: z.string(),
});

export const interviewCovers = [
  "/adobe.png",
  "/amazon.png",
  "/facebook.png",
  "/hostinger.png",
  "/pinterest.png",
  "/quora.png",
  "/reddit.png",
  "/skype.png",
  "/spotify.png",
  "/telegram.png",
  "/tiktok.png",
  "/yahoo.png",
];

export const dummyInterviews: Interview[] = [
  {
    id: "1",
    userId: "user1",
    role: "Frontend Developer",
    type: "Technical",
    techstack: ["React", "TypeScript", "Next.js", "Tailwind CSS"],
    level: "Junior",
    questions: ["What is React?"],
    finalized: true,
    createdAt: "2024-03-15T10:00:00Z",
  },
  {
    id: "2",
    userId: "user1",
    role: "Full Stack Developer",
    type: "Mixed",
    techstack: ["Node.js", "Express", "MongoDB", "React"],
    level: "Senior",
    questions: ["What is Node.js?"],
    finalized: false,
    createdAt: "2024-03-14T15:30:00Z",
  },
];