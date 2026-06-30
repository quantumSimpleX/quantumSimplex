/* =========================================================
   Quantum Simplex Website — Data
   To add new content: copy any item in the content array,
   update type/title/source/year/url/theme and save.
   type:  'video' | 'podcast' | 'article' | 'whitepaper'
   theme: 'inspire' | 'mobilize' | 'transform'
   YouTube channel: https://www.youtube.com/@QuantSimpleX
   ========================================================= */

const QSData = {

  nav: [
    { id: 'about',    label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'insights', label: 'Insights' },
    { id: 'engage',   label: 'Engage' },
  ],

  about: {
    name: 'Dr. Michael Wu',
    title: 'AI Transformation Advisor',
    bio: `Former Chief AI Scientist at PROS. Two decades of research and practice at the intersection of AI, data science, and human behavior. Author, keynote speaker, and the person organizations call when they need to move from AI anxiety to AI action.`,
    linkedin: 'https://www.linkedin.com/in/michaelwuphd/',
  },

  services: [
    {
      level: 1,
      name: 'Inspire',
      tagline: 'Change Mindset',
      thread: `You can't mobilize a team that isn't inspired.`,
      accent: 'aqua',
      offerings: [
        {
          name: 'Strategic Keynotes',
          engagement: 'Catalytic Ignition',
          description: `High-impact speaking for conferences, boards, executive committees, and leadership. The goal isn't to entertain — it's to shift the frame. Most executives encounter AI through hype and headlines. A well-designed keynote cuts through that noise and replaces vague anxiety with a concrete mental model of what's actually happening and what it means for your business.`,
        },
        {
          name: 'Foundational Education',
          engagement: 'Enduring Stewardship',
          description: `Workforce upskilling at scale. Not a one-hour awareness session. A comprehensive program that builds solid baseline literacy in big data, machine learning, and AI — the kind of deep operational understanding that allows people to grasp the limits and potential of AI tools, and to use them creatively. You can't drive adoption of tools people don't understand.`,
        },
      ],
    },
    {
      level: 2,
      name: 'Mobilize',
      tagline: 'Change Behaviors',
      thread: `You can't transform a workforce that isn't mobilized.`,
      accent: 'amethyst',
      offerings: [
        {
          name: 'AI Product Strategy',
          engagement: 'Catalytic Ignition',
          description: `Strategic advisory for defining, validating, and shaping high-ROI AI product initiatives. This includes go-to-market strategy, value proposition design, and an adoption strategy that ties directly to commercial growth. Not innovation theater. The question we answer: of all the things AI could do for your business, which ones actually create defensible advantage?`,
        },
        {
          name: 'Internal AI Adoption',
          engagement: 'Enduring Stewardship',
          description: `Where strategy meets behavior change. Most organizations roll out AI tools and then wonder why nobody uses them. The reason is rarely the tech — it's always the processes and the people. This engagement builds custom enablement frameworks and behavioral change programs that anchor AI workflows into daily work. We track it with adoption KPIs, because "we deployed it" does not mean "it's working."`,
        },
      ],
    },
    {
      level: 3,
      name: 'Transform',
      tagline: 'Change Operations',
      thread: `You can't futureproof a company that isn't transformed`,
      accent: 'ink',
      offerings: [
        {
          name: 'AI-Centric Workflow',
          engagement: 'Catalytic Ignition',
          description: `A deep-dive engagement to re-engineer core functional operations. We audit legacy bottlenecks — the places where data gets lost, decisions slow down, and institutional knowledge lives only in people's heads — and deploy bespoke agentic automation to fundamentally change how work gets done. The output isn't a recommendation deck. It's a restructured operation.`,
        },
        {
          name: 'Human-Centric Growth',
          engagement: 'Enduring Stewardship',
          description: `The other side of AI transformation. AI changes roles. Ignoring that means your people will figure it out the hard way, on their own. This engagement restructures the talent ecosystem deliberately: redefining job functions, building programmatic reskilling programs, and crafting an internal narrative that helps people understand their place in an AI-augmented future. Lasting growth is built on people who are ready for it.`,
        },
      ],
    },
  ],

  content: [
    /* VIDEOS — add new rows here */
    { type: 'video', title: 'Beyond Agents: The Path to AGI and ASI', source: 'PROS Outperform Keynote', year: 2025, url: 'https://youtu.be/zfuZqTWCNag', theme: 'inspire' },
    { type: 'video', title: 'Beyond ChatGPT: Inside the Minds of Generative AI', source: 'PROS Outperform Keynote', year: 2023, url: 'https://www.youtube.com/watch?v=hWG3tqdAsLo', theme: 'inspire' },
    { type: 'video', title: 'A Possible Future of Dynamic AI', source: 'PROS Outperform Keynote', year: 2019, url: 'https://youtu.be/TUggeOOrP_4', theme: 'inspire' },
    { type: 'video', title: 'Theory vs. Practice in Implementing Successful Gamification', source: 'Gamification Europe', year: 2017, url: 'https://youtu.be/d-TgeM837XY', theme: 'mobilize' },
    { type: 'video', title: 'Level Up Your Gamification to Solve Big Business Problems', source: 'Gamification World Congress', year: 2015, url: 'https://www.youtube.com/watch?v=L59KfNjL4vc', theme: 'mobilize' },
    { type: 'video', title: 'The Relativity of CX: The Science Behind Customer Experience', source: 'Lithium Network Conference', year: 2015, url: 'https://www.youtube.com/watch?v=LyaJPa4-8QE', theme: 'mobilize' },
    { type: 'video', title: 'Transforming Your Digital Audience — Beyond Engagement', source: 'CeBIT', year: 2016, url: 'https://youtu.be/55c2YV_eWMo', theme: 'mobilize' },
    { type: 'video', title: 'The Science of Sustained Engagement', source: 'Virtual Community Summit', year: 2014, url: 'https://www.youtube.com/watch?v=cvj3Km0hjUY', theme: 'inspire' },
    { type: 'video', title: 'The Science of Social — From Social Metrics to ROI', source: 'Brands Summit', year: 2013, url: 'https://youtu.be/AcT8W6-j16Y', theme: 'mobilize' },
    { type: 'video', title: "Let's Do a Live Experiment on Collaboration", source: 'Enterprise 2.0', year: 2012, url: 'https://youtu.be/ZvZM6I-ngcQ', theme: 'transform' },

    /* PODCASTS */
    { type: 'podcast', title: 'Pricing in Motion: Michael Wu on AI, Data, and Demand', source: 'The Margin Podcast — Ep. 12', year: 2026, url: 'https://mgiresearch.com/podcast/pricing-in-motion-dr-michael-wu-on-ai-data-and-demand/', theme: 'mobilize' },
    { type: 'podcast', title: 'Becoming an Agent of Change in the Age of AI', source: "Let's Talk Pricing", year: 2025, url: 'https://open.spotify.com/episode/1Ibwj3UNsBu0iq2wFtSjwP', theme: 'mobilize' },
    { type: 'podcast', title: 'Interview — Michael Wu, Chief AI Scientist at PROS', source: 'The AI Podcast by Dr. Tony Hoang', year: 2025, url: 'https://open.spotify.com/episode/2w4Iqzj7s3EiL6RwTo6KmK', theme: 'inspire' },
    { type: 'podcast', title: "Tomorrow's AI-Augmented Workforce", source: 'The Future of Work Podcast', year: 2024, url: 'https://open.spotify.com/episode/4jVTabVya7chInJGzfpp0A', theme: 'transform' },
    { type: 'podcast', title: 'Beyond Generative AI: From Productivity to Profit Optimization', source: 'Disambiguation Podcast', year: 2024, url: 'https://open.spotify.com/episode/0QdyhAmkz562KV4O9q76pK', theme: 'mobilize' },
    { type: 'podcast', title: 'The Intersection of AI and the Human Mind', source: 'The Unlearn Podcast — Ep. 97', year: 2023, url: 'https://youtu.be/kjsDzf7kmPU', theme: 'transform' },
    { type: 'podcast', title: 'Ahead of the Curve with Michael Wu — Part 1', source: 'The View from 30,000 ft', year: 2022, url: 'https://www.youtube.com/watch?v=JVUJ_Vmk_-w', theme: 'inspire' },
    { type: 'podcast', title: 'Ahead of the Curve with Michael Wu — Part 2', source: 'The View from 30,000 ft', year: 2022, url: 'https://www.youtube.com/watch?v=d9PzY7O4GNM', theme: 'inspire' },
    { type: 'podcast', title: 'Taking the Lid Off AI', source: 'Playaz Production Network', year: null, url: 'https://www.youtube.com/@crmplayaz/search?query=Michael%20Wu', theme: 'inspire' },
    { type: 'podcast', title: 'The Great AI Debate', source: 'CRM Konvos', year: null, url: 'https://www.youtube.com/@crmkonvos/search?query=Michael%20Wu%20debate', theme: 'inspire' },

    /* ARTICLES */
    { type: 'article', title: "Navigating Through GenAI's ROI Valley of Death", source: 'The AI Journal', year: null, url: 'https://aijourn.com/navigating-through-genais-roi-valley-of-death/', theme: 'mobilize' },
    { type: 'article', title: 'The Layered AI Responsibility (LAIR) Framework', source: 'The AI Journal', year: null, url: 'https://aijourn.com/the-layered-ai-responsibility-lair-framework/', theme: 'inspire' },
    { type: 'article', title: 'Why AI Must Be Democratised to Optimise Customer Experience', source: 'The AI Journal', year: null, url: 'https://aijourn.com/why-ai-must-be-democratised-in-order-to-optimise-customer-experience/', theme: 'mobilize' },
    { type: 'article', title: 'Artificial Intelligence Is the New Business Intelligence', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/information-management/artificial-intelligence-is-the-new-business-intelligence/', theme: 'inspire' },
    { type: 'article', title: 'Dealing With AI Biases, Part 1: Acknowledging the Bias', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/dealing-with-ai-biases-part-1-acknowledging-the-bias/', theme: 'inspire' },
    { type: 'article', title: 'Dealing With AI Biases, Part 2: Inherited Biases From Data', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/dealing-with-ai-biases-part-2-inherited-biases-from-data/', theme: 'inspire' },
    { type: 'article', title: 'Dealing With AI Biases, Part 3: Emergent Biases in Operational Models', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/customer-experience/dealing-with-ai-biases-part-3-emergent-biases-in-operational-models/', theme: 'inspire' },
    { type: 'article', title: 'Dealing With AI Biases, Part 4: Fixing the Root Cause', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/dealing-with-ai-biases-part-4-fixing-the-root-cause-of-ai-biases/', theme: 'inspire' },
    { type: 'article', title: 'Choosing the Right AI for Your Business Goals', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-workplace/choosing-the-right-ai-for-your-business-goals/', theme: 'mobilize' },
    { type: 'article', title: "Don't Fear the Reaper: Helping Employees Understand and Use AI", source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/dont-fear-the-reaper-helping-employees-understand-use-ai/', theme: 'transform' },
    { type: 'article', title: 'How Enterprise Adoption of AI Must Shift in 2020', source: 'CMSWire', year: 2020, url: 'https://www.cmswire.com/digital-workplace/how-enterprise-adoption-of-artificial-intelligence-must-shift-in-2020/', theme: 'mobilize' },
    { type: 'article', title: 'Can AI Help Us Build a More Resilient Economy?', source: 'CMSWire', year: 2020, url: 'https://www.cmswire.com/digital-workplace/can-ai-help-us-build-a-more-resilient-economy-in-the-face-of-covid-19/', theme: 'mobilize' },
    { type: 'article', title: '7 Ways to Make the Enterprise Comfortable with AI', source: 'ZDNet', year: null, url: 'https://www.zdnet.com/article/7-ways-to-make-the-wider-enterprise-comfortable-with-artificial-intelligence/', theme: 'mobilize' },
    { type: 'article', title: 'How Do We Get to a Possible Future with AI?', source: 'ZDNet', year: null, url: 'https://www.zdnet.com/article/how-do-we-get-to-a-possible-future-with-ai-the-ai-adoption-maturity-curve/', theme: 'inspire' },
    { type: 'article', title: 'The Problem With Measuring Digital Influence', source: 'TechCrunch', year: 2012, url: 'https://techcrunch.com/2012/11/09/can-social-media-influence-really-be-measured/', theme: 'inspire' },
    { type: 'article', title: 'The Big Data Fallacy and Why We Need to Collect Even Bigger Data', source: 'TechCrunch', year: 2012, url: 'https://techcrunch.com/2012/11/25/the-big-data-fallacy-data-%E2%89%A0-information-%E2%89%A0-insights/', theme: 'inspire' },
    { type: 'article', title: "Explainable AI: Why It's Important to You and Your Clients", source: 'DevPro Journal', year: null, url: 'https://www.devprojournal.com/technology-trends/ai/explainable-ai-why-its-important-to-you-and-your-clients/', theme: 'inspire' },
    { type: 'article', title: 'Why Should Businesses Be Investing in AI?', source: 'Information Age', year: null, url: 'https://www.information-age.com/why-should-businesses-be-investing-in-ai-11814/', theme: 'inspire' },
    { type: 'article', title: 'PROS Chief AI Strategist Michael Wu Talks AI and Airlines', source: 'PhocusWire', year: null, url: 'https://www.phocuswire.com/pros-chief-ai-strategist-michael-wu-airlines', theme: 'mobilize' },
    { type: 'article', title: 'Airline Industry Weighs How Personal to Get with Data', source: 'PhocusWire', year: null, url: 'https://www.phocuswire.com/future-of-data-collection-for-airline-industry', theme: 'mobilize' },
    { type: 'article', title: 'Assessing the Near-Term Future of Airline Booking', source: 'Business Travel News', year: null, url: 'https://www.businesstravelnews.com/Procurement/Assessing-the-Near-Term-Future-of-Airline-Booking', theme: 'mobilize' },

    /* WHITE PAPERS */
    { type: 'whitepaper', title: 'Three Years In: The Reality of AI Adoption and the Road Ahead', source: 'Team Flow Institute', year: null, url: 'https://teamflow.institute/three-years-in-the-reality-of-ai-adoption-and-the-road-ahead/', theme: 'mobilize' },
    { type: 'whitepaper', title: 'Unfinished Digital Transformations: People First Lessons for AI Success', source: 'Team Flow Institute', year: null, url: 'https://teamflow.institute/unfinished-digital-transformations-people-first-lessons-for-ai-success/', theme: 'transform' },
    { type: 'whitepaper', title: 'Ethical AI Implementation: Balancing Technology and Team Dynamics', source: 'Team Flow Institute', year: null, url: 'https://teamflow.institute/ethical-ai-implementation-with-team-flow-balancing-technology-and-team-dynamics/', theme: 'transform' },
    { type: 'whitepaper', title: 'How to Prepare for the Integration of AI to Achieve Business and Human Success', source: 'Team Flow Institute', year: null, url: 'https://teamflow.institute/how-to-prepare-for-the-integration-of-ai-to-achieve-business-and-human-success/', theme: 'transform' },
    { type: 'whitepaper', title: 'The Existence of a Positive-Sum Game Among Airlines', source: 'PROS', year: null, url: 'https://pros.com/learn/white-papers/existence-positive-sum-game-among-airlines', theme: 'mobilize' },
  ],

  booking: {
    url: 'https://calendar.app.google/bE7bEAV7Kfbd63nt8',
    headline: 'A 30-minute call. No commitment.',
    lede: `Tell us what your organization is trying to do with AI. We'll tell you honestly where to start — and whether we're the right fit to help.`,
    steps: [
      { n: '01', t: 'Pick a time', d: 'Choose any open slot below.' },
      { n: '02', t: 'Describe the situation', d: 'One paragraph. Where are you stuck, what are you trying to build, or what are you trying to understand?' },
      { n: '03', t: 'We come prepared', d: "You get a plain-language answer within two working days — even if we never speak again." },
    ],
  },

  youtubeChannel: 'https://www.youtube.com/@QuantSimpleX',

  publications: [
    'TechCrunch',
    'ZDNet',
    'CMSWire',
    'The AI Journal',
    'PhocusWire',
    'Business Travel News',
    'DevPro Journal',
    'Information Age',
    'PROS Outperform',
    'Gamification World Congress',
    'CeBIT',
    'Team Flow Institute',
  ],
};

window.QSData = QSData;
