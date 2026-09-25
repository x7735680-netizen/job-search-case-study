export type NavLink = { label: string; href: string };

export type ProblemCard = {
  variant: "negative" | "positive";
  title: string;
  items: string[];
};

export type CapabilityDetail = {
  id: string;
  label: string;
  detailTitle: string;
  detailBody: string;
};

export type SystemStage = {
  id: string;
  label: string;
  nodes: CapabilityDetail[];
};

export type ProductFeatureCard = {
  icon: "preferences" | "knowledge" | "tracking" | "resume";
  title: string;
  body: string;
  summary: string;
};

export type SystemOverview = {
  inputNodes: CapabilityDetail[];
  outputNodes: CapabilityDetail[];
  engineLabel: string;
  contextLabel: string;
};

export type BuildingTool = {
  icon: string;
  title: string;
  body: string;
};

export type MvpVisual = {
  type: "image" | "video" | "workflow" | "tracking";
  src?: string;
  poster?: string;
  alt: string;
};

export type MvpStep = {
  title: string;
  capabilities: CapabilityDetail[];
  description: string;
  visual: MvpVisual;
};

export type Insight = {
  title: string;
  body: string;
};

export type FooterLink = { label: string; href: string };

const capabilityDetails = {
  resumeExperience: {
    id: "resume-experience",
    label: "Resume / experience",
    detailTitle: "Resume / experience",
    detailBody: "个人简历、经历、技能、项目与成果，是后续结构化和匹配的事实输入。",
  },
  jobPreferences: {
    id: "job-preferences",
    label: "Job preferences",
    detailTitle: "Job preferences",
    detailBody: "目标岗位、城市、排除词和排除公司会作为岗位筛选与排序的长期偏好。",
  },
  targetJob: {
    id: "target-job",
    label: "Target job / JD",
    detailTitle: "Target job / JD",
    detailBody: "选定的岗位与 JD 进入匹配上下文，用于判断相关性和表达重点。",
  },
  personalRules: {
    id: "personal-rules",
    label: "Personal rules",
    detailTitle: "Personal rules",
    detailBody: "长期写作规则、表达偏好和筛选条件会被持续调用，而不是每次重新解释。",
  },
  structuredExtraction: {
    id: "structured-extraction",
    label: "STRUCTURED EXTRACTION",
    detailTitle: "Structured extraction",
    detailBody: "从 PDF / Word / 文本简历中抽取 Skills、Experience、Projects 与 Achievements，并转化成可编辑的结构化信息。",
  },
  persistentContext: {
    id: "persistent-context",
    label: "PERSISTENT CONTEXT",
    detailTitle: "Persistent context",
    detailBody: "知识库同时保存个人事实、技能熟练度、项目成果、标签和个性化规则，后续匹配与简历生成会重复调用这些信息。",
  },
  workflowAutomation: {
    id: "workflow-automation",
    label: "WORKFLOW AUTOMATION",
    detailTitle: "Workflow automation",
    detailBody: "当前链路为 preference.json → WorkBuddy 每日 15:00 定时采集 → 飞书「招聘中公司」→ 本地同步 → 工作台。",
  },
  preferenceFiltering: {
    id: "preference-filtering",
    label: "PREFERENCE FILTERING",
    detailTitle: "Preference filtering",
    detailBody: "搜索偏好包括优先岗位类别、优先城市、排除词和排除公司；采集到的机会会依据这些条件进行筛选。",
  },
  webRetrieval: {
    id: "web-retrieval",
    label: "WEB RETRIEVAL",
    detailTitle: "Web retrieval",
    detailBody: "需要补充公司背景时，通过 Tavily 联网调研；用户可以勾选确认可信来源后，再把资料加入匹配上下文。",
  },
  semanticMatching: {
    id: "semantic-matching",
    label: "SEMANTIC MATCHING",
    detailTitle: "Semantic matching",
    detailBody: "匹配包含 4 个评分维度：专业与背景、经历与项目、技能与工具、软实力与行为，并生成 1 个“综合契合”聚合分。",
  },
  groundedGeneration: {
    id: "grounded-generation",
    label: "GROUNDED GENERATION",
    detailTitle: "Grounded generation",
    detailBody: "模型主要负责 Select → Reorganize → Rewrite；生成内容应基于已有个人事实，而不是自由补充不存在的经历。",
  },
  ruleInjection: {
    id: "rule-injection",
    label: "RULE INJECTION",
    detailTitle: "Rule injection",
    detailBody: "个人知识库中的长期规则会自动注入生成请求，例如突出数据结果、强调某类项目或保持特定表达方式。当前支持 3 种预设风格 + 自定义要求。",
  },
  personalizedJobPool: {
    id: "personalized-job-pool",
    label: "Personalized job pool",
    detailTitle: "Personalized job pool",
    detailBody: "按个人岗位偏好筛选后的机会集合，帮助用户聚焦更值得判断的岗位。",
  },
  personalKnowledgeBase: {
    id: "personal-knowledge-base",
    label: "Personal knowledge base",
    detailTitle: "Personal knowledge base",
    detailBody: "可编辑、可复用的个人事实、技能、项目成果和规则集合。",
  },
  jobFitAnalysis: {
    id: "job-fit-analysis",
    label: "Job-fit analysis",
    detailTitle: "Job-fit analysis",
    detailBody: "输出综合契合、能力缺口和针对性修改建议，支持用户决定是否继续优化。",
  },
  tailoredResume: {
    id: "tailored-resume",
    label: "Tailored resume",
    detailTitle: "Tailored resume",
    detailBody: "基于个人事实、岗位要求和匹配建议重新组织的目标岗位简历。",
  },
  applicationTracking: {
    id: "application-tracking",
    label: "Application tracking",
    detailTitle: "Application tracking",
    detailBody: "记录公司、岗位、当前阶段、优先级、截止日期和对应简历版本。",
  },
  contextReuse: {
    id: "context-reuse",
    label: "REUSABLE PERSONAL CONTEXT",
    detailTitle: "Context reuse",
    detailBody: "这里不是模型自动训练或“越用越聪明”。实际机制是可供 AI 调用的个人 Context 随上传、解析和使用逐渐变丰富。",
  },
  structuredTracking: {
    id: "structured-tracking",
    label: "STRUCTURED TRACKING",
    detailTitle: "Structured tracking",
    detailBody: "工作台记录公司、岗位、当前阶段、优先级、截止日期和对应简历版本，让 AI 工作流与实际投递状态保持连接。",
  },
} satisfies Record<string, CapabilityDetail>;

export const content = {
  nav: {
    brand: "Job Search OS",
    links: [
      { label: "Problem", href: "#problem" },
      { label: "Product", href: "#product" },
      { label: "Thinking", href: "#thinking" },
      { label: "MVP", href: "#mvp" },
    ] as NavLink[],
  },

  hero: {
    eyebrow: "[ AI PRODUCT DESIGN × VIBE CODING ]",
    title: "找到更适合的岗位。\n投得更准。借助 AI。",
    body: "Job Search OS 是一个面向求职场景的 AI 工作台。它将个人经历、岗位信息、投递进度与定制化简历生成整合到一个系统中，帮助用户减少重复劳动，更高效地找到适合自己的岗位。",
    stats: ["1 Week", "Solo Project", "Working MVP"],
    poster: {
      src: "/assets/hero/hero-product-poster.png",
      alt: "Job Search OS workspace — personal knowledge, job matching and tailored resume modules arranged in a polished dashboard layout.",
    },
  },

  problem: {
    eyebrow: "THE DIFFERENCE",
    title: "从碎片化投递，到持续理解我的 AI 求职工作流。",
    body: "传统求职流程依赖大量手动整理和重复判断；我尝试把岗位、个人经历与 AI 能力连接成一套可持续复用的工作流。",
    cards: [
      {
        variant: "negative",
        title: "信息散落，难形成个人判断",
        items: ["岗位信息分散", "经验难沉淀", "Context 不连续"],
      },
      {
        variant: "negative",
        title: "大量重复工作，却仍不够个性化",
        items: ["重复筛选岗位", "重复整理修改", "AI 输出泛化"],
      },
      {
        variant: "positive",
        title: "AI 驱动的个性化求职工作流",
        items: ["个性化岗位库", "结构化个人知识库", "匹配分析 → 定向优化"],
      },
    ] as ProblemCard[],
  },

  product: {
    eyebrow: "Product",
    title: "这不是一个“帮我写一次简历”的工具。",
    lead: "我想做的，是一个能持续理解用户背景、目标和表达偏好的 AI 工作台。它不是一次性的生成器，而是一个支持理解、匹配、生成和追踪的系统。",
    featureCards: [
      {
        icon: "preferences",
        title: "岗位偏好设置",
        body: "将你的求职偏好转换为自动化任务，搜索岗位全部交给WorkBuddy。",
        summary: "不再全平台搜集碎片化信息。",
      },
      {
        icon: "knowledge",
        title: "建立个人知识库",
        body: "从多份简历中提取你的个人技能与经历，保持知识库持续更新，简历内容可溯源。",
        summary: "每份简历内容都有迹可循",
      },
      {
        icon: "tracking",
        title: "投递全流程记录",
        body: "持续跟踪每一次投递，从简历到offer，及时提醒每一个关键节点",
        summary: "不再重复记录每一个节点的时间。",
      },
      {
        icon: "resume",
        title: "简历评估与定制",
        body: "简历x岗位一对一匹配，用STAR-L法制进行评估，输出一份高质量简历",
        summary: "只需要修改差异化内容。",
      },
    ] as ProductFeatureCard[],
    systemOverview: {
      inputNodes: [
        capabilityDetails.resumeExperience,
        capabilityDetails.jobPreferences,
        capabilityDetails.targetJob,
        capabilityDetails.personalRules,
      ],
      outputNodes: [
        capabilityDetails.personalizedJobPool,
        capabilityDetails.personalKnowledgeBase,
        capabilityDetails.jobFitAnalysis,
        capabilityDetails.tailoredResume,
        capabilityDetails.applicationTracking,
      ],
      engineLabel: "AI JOB SEARCH ENGINE",
      contextLabel: "REUSABLE PERSONAL CONTEXT",
    } as SystemOverview,
    showcase: {
      eyebrow: "WHAT'S IN THE MVP",
      title: "一条从理解自己到持续复用的求职工作流。",
      items: [
        {
          title: "先让系统理解“我是谁”",
          capabilities: [
            capabilityDetails.structuredExtraction,
            capabilityDetails.persistentContext,
          ],
          description: "上传已有简历后，AI 将经历、技能、项目和成果整理进个人知识库，并结合求职偏好与写作规则，形成后续匹配和生成都能持续调用的个人 Context。",
          visual: {
            type: "video",
            src: "/assets/product/01.mp4",
            poster: "/assets/product/01.png",
            alt: "Personal knowledge base — 编辑用户个人经历、技能和求职偏好。",
          },
        },
        {
          title: "让岗位主动靠近我的求职偏好",
          capabilities: [
            capabilityDetails.workflowAutomation,
            capabilityDetails.preferenceFiltering,
          ],
          description: "用户设置目标岗位、城市和排除条件后，系统按偏好持续采集并筛选招聘信息，再同步成一个更贴近个人目标的岗位机会库。",
          visual: {
            type: "video",
            src: "/assets/product/02.mp4",
            poster: "/assets/product/02.png",
            alt: "Workflow automation — 岗位偏好经过筛选后形成机会库。",
          },
        },
        {
          title: "先判断是否匹配，再决定怎么优化",
          capabilities: [
            capabilityDetails.webRetrieval,
            capabilityDetails.semanticMatching,
          ],
          description: "选定简历与目标 JD 后，AI 会结合个人知识库、用户规则及经确认的公司资料进行多维匹配，输出综合契合、能力缺口与针对性修改建议。",
          visual: {
            type: "video",
            src: "/assets/product/03.mp4",
            poster: "/assets/product/03.png",
            alt: "Job matching panel — 对岗位做拆解并与用户经历做匹配分析。",
          },
        },
        {
          title: "用真实经历，生成更针对岗位的简历",
          capabilities: [
            capabilityDetails.groundedGeneration,
            capabilityDetails.ruleInjection,
          ],
          description: "系统把原始简历、个人知识库、岗位要求和匹配建议组合成生成 Context，再根据用户选择的表达风格和长期规则输出针对该岗位的新简历。",
          visual: {
            type: "video",
            src: "/assets/product/04.mp4",
            poster: "/assets/product/04.png",
            alt: "Tailored resume output — 基于岗位重点生成的定制化简历。",
          },
        },
        {
          title: "让一次投递继续成为下一次的 Context",
          capabilities: [
            capabilityDetails.contextReuse,
            capabilityDetails.structuredTracking,
          ],
          description: "岗位、简历版本和投递阶段会继续留在工作台中，新的简历与经历也能再次进入知识库，让后续匹配与生成拥有更完整的个人信息。",
          visual: {
            type: "video",
            src: "/assets/product/05.mp4",
            poster: "/assets/product/05.png",
            alt: "Structured tracking — 投递状态与可复用个人 Context 保持连接。",
          },
        },
      ] as MvpStep[],
    },
  },

  building: {
    eyebrow: "BUILDING WITH AI",
    title: "Vibe coding 让我写得更快，\n但没有替我决定该做什么。",
    lead: "项目起点不是从零凭空想象，而是从 GitHub 上一个可记录简历投递过程的工作台开始。我以它为基础，逐步补齐个人 context、岗位匹配与定制化生成能力。",
    primary: {
      title: "从“我想要一个这样的工具”，\n到真的能用。",
      body: "我先定义最终希望得到的结果，再把问题拆成产品逻辑、数据关系和实现任务。AI 加速了每一轮执行，但功能是否成立、体验是否合理，仍然需要我持续判断和修正。",
      note: "不是 Prompt → Product，而是 Define → Build → Inspect → Iterate",
      action: "Live Demo ↗",
      desktopNote: "Desktop\nrecommended",
      href: "https://jobs.carrocreats.online",
    },
    external: {
      title: "从想法到外部试用",
      body: "从已有投递记录工具出发，完成产品重构、AI 能力接入、真实数据测试，并交给外部用户试用。",
    },
    metrics: [
      {
        label: "IDEA → MVP",
        value: "7 DAYS",
        body: "从讨论 MVP、梳理工作流，到完成可运行产品并进入朋友测试，整个 0→1 周期控制在一周。",
      },
      {
        label: "REPEATED INPUT",
        value: "65% LESS",
        body: "个人经历、技能、简历、求职偏好和写作规则只需维护一次；每次投递主要补充目标岗位与 JD，减少重复复制、解释和重新整理 Context。",
      },
    ],
    tools: [
      {
        icon: "/assets/development/ai-icon/openai.svg",
        title: "PRODUCT THINKING",
        body: "讨论问题定义、MVP、产品逻辑和文案",
      },
      {
        icon: "/assets/development/ai-icon/claude.svg",
        title: "IMPLEMENTATION",
        body: "完成复杂功能实现、跨文件修改与调试。",
      },
      {
        icon: "/assets/development/ai-icon/codex.svg",
        title: "BUILD & REVIEW",
        body: "快速实现、代码修改、重构与问题排查。",
      },
      {
        icon: "/assets/development/ai-icon/codebuddy.svg",
        title: "AUTOMATION",
        body: "招聘数据采集、飞书数据流与定时任务。",
      },
    ] as BuildingTool[],
  },

  thinking: {
    eyebrow: "AI Thinking",
    title: "AI 能解决我提出的问题，但不会自动理解我真正想得到的结果。",
    lead: "我更在意的是：AI 是怎样被使用的，以及人在其中扮演什么角色。下面四条是我做这个项目时一直放在心里的判断标准。",
    insights: [
      {
        title: "Outcome First",
        body: "如果只问 AI“怎么做一个功能”，它通常只能解决局部问题。只有当目标足够清晰，AI 才可能给出真正对最终体验有帮助的方案。",
      },
      {
        title: "Context Is Product",
        body: "真正的个性化，不是更长的 prompt，而是系统能否长期理解并调用属于用户自己的上下文。",
      },
      {
        title: "Structured Personalization",
        body: "经历、技能、偏好、写作规则、岗位目标应该被结构化管理，否则 AI 无法稳定输出用户真正需要的内容。",
      },
      {
        title: "Better Questions Matter",
        body: "当实现成本降低后，真正重要的是：你能否把问题讲清楚，能否持续追问“这是不是更好的解法”。",
      },
    ] as Insight[],
    quote: "AI makes execution cheaper. Clear thinking becomes more valuable.",
  },

  mvp: {
    eyebrow: "MVP & Next",
    title: "我没有试图一次做完整个产品，而是先验证最重要的闭环。",
    lead: "下面是目前已交付的内容以及下一步想要推进的方向。诚实比漂亮更重要。",
    shipped: [
      "投递工作台基础能力",
      "个人经历信息管理",
      "求职上下文整理",
      "岗位理解与匹配",
      "定制简历生成",
      "基础测试与可用性验证",
    ],
    next: [
      "面试模拟",
      "自动投递",
      "更多外部求职经验的结构化沉淀",
      "输出质量稳定性优化",
      "更强的跨用户个性化方案",
    ],
  },

  testimonials: {
    eyebrow: "用户评价",
    title: "真实求职用户的反馈，让我更清楚每一步该优化什么。",
    lead: "在实际投递过程中，我们最在意的是“是否稳定、是否省事”。这两位正在求职中的学生用户参与在测试中发现首次使用的用户面对多个功能无法下手，存在使用门槛。所以我增加了清晰的指引功能，修改界面布局，使使用流程更加清晰顺畅。",
    testimonials: [
      {
        beforeQuote:
          "打开网站后其实不太清楚第一步做什么，虽然看到很多模块，不知道先干啥；改完偏好不清楚是不是要自己操作，以为改完就会自动采集，实际上需要自己操作WORKBUDDY。",
        afterQuote:
          "有了面向用户更清晰的步骤引导，在使用的时候不会一脸懵；在授权的时候也有提醒，失败就蹦出来；希望偏好如果能填完整一键调起AGENT去配置就更好了。",
        rating: 4.8,
        name: "小林",
        role: "市场营销专业大四学生｜正在求职品牌与内容运营岗位",
      },
      {
        beforeQuote:
          "和投递相关的功能都有涉及，但是在所有功能都支持使用之前的准备工作有点多。不太了解AI的用户使用起来有一定门槛。要知道一些AI的基础知识上手更快。",
        afterQuote:
          "预备步骤减少后，不强依赖WORKBUDDY进行岗位同步，可以支持各种来源的岗位信息表导入，这样我以前在BOSS、实习僧、公众号、官网手动收集的岗位信息可以全部导入，也可以选择使用其他智能体帮我定时收集岗位信息。在工作台内可以对我感兴趣/过期的岗位进行筛除。希望后面能开发面试复盘的功能。",
        rating: 4.9,
        name: "Mia",
        role: "传播学硕士在读｜正在求职新媒体与用户增长岗位",
      },
    ],
  },

  footer: {
    brand: "Job Search OS",
    year: 2026,
    links: [
      { label: "Top", href: "#hero" },
    ] as FooterLink[],
  },
} as const;

export type Content = typeof content;
