export type ContentType = 'video' | 'podcast' | 'article';
export type Theme = 'inspire' | 'mobilize' | 'transform';

export interface ContentItem {
  type: ContentType;
  title: string;
  source: string;
  year: number | null;
  url: string;
  theme: Theme;
}

export interface Offering {
  name: string;
  engagement: string;
  description: string;
}

export interface ServiceLevel {
  level: number;
  name: string;
  tagline: string;
  thread: string;
  accent: string;
  offerings: Offering[];
}

export const nav = [
  { id: 'about',    label: 'About',    href: '/about' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'insights', label: 'Insights', href: '/insights' },
  { id: 'engage',   label: 'Engage',   href: '/engage' },
];

export const about = {
  name: 'Dr. Michael Wu',
  title: 'AI Transformation Advisor',
  bio: `Former Chief AI Scientist at PROS. Two decades of research and practice at the intersection of AI, data science, and human behavior. Author, keynote speaker, and the person organizations call when they need to move from AI anxiety to AI action.`,
  linkedin: 'https://www.linkedin.com/in/michaelwuphd/',
};

export const services: ServiceLevel[] = [
  {
    level: 1,
    name: 'Inspire',
    tagline: 'Change Mindset',
    thread: `You can't mobilize what you haven't inspired.`,
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
    thread: `You can't transform what you haven't mobilized.`,
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
    thread: `You can't futureproof what you haven't transformed.`,
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
];

export const content: ContentItem[] = [
  { type: 'video', title: 'Beyond Agents: The Path to AGI and ASI', source: 'PROS Outperform Keynote', year: 2025, url: 'https://www.youtube.com/watch?v=hWG3tqdAsLo', theme: 'inspire' },
  { type: 'video', title: 'Beyond ChatGPT: Inside the Minds of Generative AI', source: 'PROS Outperform Keynote', year: 2023, url: 'https://www.youtube.com/watch?v=LyaJPa4-8QE', theme: 'inspire' },
  { type: 'video', title: 'A Possible Future of Dynamic AI', source: 'PROS Outperform Keynote', year: 2019, url: 'https://www.youtube.com/watch?v=d9PzY7O4GNM', theme: 'inspire' },
  { type: 'video', title: 'Theory vs. Practice in Implementing Successful Gamification', source: 'Gamification Europe', year: 2017, url: 'https://youtu.be/d-TgeM837XY', theme: 'mobilize' },
  { type: 'video', title: 'Level Up Your Gamification to Solve Big Business Problems', source: 'Gamification World Congress', year: 2015, url: 'https://youtu.be/ZvZM6I-ngcQ', theme: 'mobilize' },
  { type: 'video', title: 'The Relativity of CX: The Science Behind the Art of Customer Experience', source: 'Lithium Network Conference', year: 2015, url: 'https://youtu.be/zfuZqTWCNag', theme: 'mobilize' },
  { type: 'video', title: 'Transforming Your Digital Audience — Beyond Engagement', source: 'CeBIT', year: 2016, url: 'https://youtu.be/55c2YV_eWMo', theme: 'mobilize' },
  { type: 'video', title: 'The Science of Sustained Engagement', source: 'Virtual Community Summit', year: 2014, url: 'https://youtu.be/kjsDzf7kmPU', theme: 'inspire' },
  { type: 'video', title: 'The Science of Social — From Social Metrics to ROI', source: 'Brands Summit', year: 2013, url: 'https://youtu.be/TUggeOOrP_4', theme: 'mobilize' },
  { type: 'video', title: "Let's Do a Live Experiment on Collaboration", source: 'Enterprise 2.0', year: 2012, url: 'https://youtu.be/AcT8W6-j16Y', theme: 'transform' },
  { type: 'podcast', title: 'Pricing in Motion: Michael Wu on AI, Data, and Demand', source: 'The Margin Podcast — Ep. 12', year: 2026, url: 'https://mgiresearch.com/podcast/pricing-in-motion-dr-michael-wu-on-ai-data-and-demand/', theme: 'mobilize' },
  { type: 'podcast', title: 'Becoming an Agent of Change in the Age of AI', source: "Let's Talk Pricing", year: 2025, url: 'https://open.spotify.com/episode/2w4Iqzj7s3EiL6RwTo6KmK', theme: 'mobilize' },
  { type: 'podcast', title: 'Interview — Michael Wu, Chief AI Scientist at PROS', source: 'The AI Podcast by Dr. Tony Hoang', year: 2025, url: 'https://www.youtube.com/watch?v=cvj3Km0hjUY', theme: 'inspire' },
  { type: 'podcast', title: "Tomorrow's AI-Augmented Workforce", source: 'The Future of Work Podcast', year: 2024, url: 'https://open.spotify.com/episode/1Ibwj3UNsBu0iq2wFtSjwP', theme: 'transform' },
  { type: 'podcast', title: 'Beyond Generative AI: From Productivity to Profit Optimization', source: 'Disambiguation Podcast', year: 2024, url: 'https://www.youtube.com/watch?v=L59KfNjL4vc', theme: 'mobilize' },
  { type: 'podcast', title: 'The Intersection of AI and the Human Mind', source: 'The Unlearn Podcast — Ep. 97', year: 2023, url: 'https://www.youtube.com/watch?v=JVUJ_Vmk_-w', theme: 'transform' },
  { type: 'podcast', title: 'Ahead of the Curve with Michael Wu — Part 1', source: 'The View from 30,000 ft', year: 2022, url: 'https://open.spotify.com/episode/0QdyhAmkz562KV4O9q76pK', theme: 'inspire' },
  { type: 'podcast', title: 'Ahead of the Curve with Michael Wu — Part 2', source: 'The View from 30,000 ft', year: 2022, url: 'https://open.spotify.com/episode/4jVTabVya7chInJGzfpp0A', theme: 'inspire' },
  { type: 'podcast', title: 'Taking the Lid Off AI', source: 'Playaz Production Network', year: null, url: 'https://www.youtube.com/@crmplayaz/search?query=Michael%20Wu', theme: 'inspire' },
  { type: 'podcast', title: 'The Great AI Debate', source: 'CRM Konvos', year: null, url: 'https://www.youtube.com/@crmkonvos/search?query=Michael%20Wu%20debate', theme: 'inspire' },
  { type: 'article', title: "Navigating Through GenAI's ROI Valley of Death", source: 'The AI Journal', year: null, url: 'https://aijourn.com/navigating-through-genais-roi-valley-of-death/', theme: 'mobilize' },
  { type: 'article', title: 'The Layered AI Responsibility (LAIR) Framework', source: 'The AI Journal', year: null, url: 'https://aijourn.com/the-layered-ai-responsibility-lair-framework/', theme: 'inspire' },
  { type: 'article', title: 'Why AI Must Be Democratised to Optimise Customer Experience', source: 'The AI Journal', year: null, url: 'https://aijourn.com/why-ai-must-be-democratised-in-order-to-optimise-customer-experience/', theme: 'mobilize' },
  { type: 'article', title: 'Dealing With AI Biases, Part 1: Acknowledging the Bias', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/dealing-with-ai-biases-part-1-acknowledging-the-bias/', theme: 'inspire' },
  { type: 'article', title: 'Dealing With AI Biases, Part 2: Inherited Biases From Data', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/dealing-with-ai-biases-part-2-inherited-biases-from-data/', theme: 'inspire' },
  { type: 'article', title: 'Dealing With AI Biases, Part 3: Emergent Biases in Operational Models', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/customer-experience/dealing-with-ai-biases-part-3-emergent-biases-in-operational-models/', theme: 'inspire' },
  { type: 'article', title: 'Dealing With AI Biases, Part 4: Fixing the Root Cause of AI Biases', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/dealing-with-ai-biases-part-4-fixing-the-root-cause-of-ai-biases/', theme: 'inspire' },
  { type: 'article', title: 'Extensible AI Is Key to Delivering Great Omnichannel Experiences', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/extensible-ai-is-key-to-delivering-great-omnichannel-experiences/', theme: 'mobilize' },
  { type: 'article', title: 'Customizing the Infinitely Configurable AI: It Takes Data and Time', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/information-management/customizing-the-infinitely-configurable-ai-it-takes-data-and-time/', theme: 'mobilize' },
  { type: 'article', title: 'Choosing the Right AI for Your Business Goals', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-workplace/choosing-the-right-ai-for-your-business-goals/', theme: 'mobilize' },
  { type: 'article', title: 'Clearing Up Misconceptions About Data Forecasting Amid COVID-19', source: 'CMSWire', year: 2020, url: 'https://www.cmswire.com/digital-experience/clearing-up-misconceptions-about-data-forecasting-amid-covid-19/', theme: 'mobilize' },
  { type: 'article', title: 'Can AI Help Us Build a More Resilient Economy in the Face of COVID-19?', source: 'CMSWire', year: 2020, url: 'https://www.cmswire.com/digital-workplace/can-ai-help-us-build-a-more-resilient-economy-in-the-face-of-covid-19/', theme: 'mobilize' },
  { type: 'article', title: 'How Enterprise Adoption of Artificial Intelligence Must Shift in 2020', source: 'CMSWire', year: 2020, url: 'https://www.cmswire.com/digital-workplace/how-enterprise-adoption-of-artificial-intelligence-must-shift-in-2020/', theme: 'mobilize' },
  { type: 'article', title: "Don't Fear the Reaper: Helping Employees Understand and Use AI", source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/dont-fear-the-reaper-helping-employees-understand-use-ai/', theme: 'transform' },
  { type: 'article', title: 'Artificial Intelligence Is the New Business Intelligence', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/information-management/artificial-intelligence-is-the-new-business-intelligence/', theme: 'inspire' },
  { type: 'article', title: 'Set the Gears in Motion to Reach the Next Level of Digital Engagement', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/set-the-gears-in-motion-to-reach-the-next-level-of-digital-engagement/', theme: 'mobilize' },
  { type: 'article', title: 'Successful Digital Transformation Is More Than Meets the Eye', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/successful-digital-transformation-is-more-than-meets-the-eye/', theme: 'transform' },
  { type: 'article', title: 'Personalization Comes to Retail with Big Data, IoT and Augmented Reality', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/digital-experience/personalization-comes-to-retail-with-big-data-iot-and-augmented-reality/', theme: 'mobilize' },
  { type: 'article', title: 'Pokémon Go #GamificationGoals for Brands', source: 'CMSWire', year: 2016, url: 'https://www.cmswire.com/digital-experience/pokmon-go-gamificationgoals-for-brands/', theme: 'inspire' },
  { type: 'article', title: 'Big Data, Smart Data and the Fallacy that Lies Between', source: 'CMSWire', year: null, url: 'https://www.cmswire.com/cms/information-management/big-data-smart-data-and-the-fallacy-that-lies-between-017956.php', theme: 'inspire' },
  { type: 'article', title: '7 Ways to Make the Enterprise Comfortable with AI', source: 'ZDNet', year: null, url: 'https://www.zdnet.com/article/7-ways-to-make-the-wider-enterprise-comfortable-with-artificial-intelligence/', theme: 'mobilize' },
  { type: 'article', title: 'How Do We Get to a Possible Future with AI?', source: 'ZDNet', year: null, url: 'https://www.zdnet.com/article/how-do-we-get-to-a-possible-future-with-ai-the-ai-adoption-maturity-curve/', theme: 'inspire' },
  { type: 'article', title: 'The Problem With Measuring Digital Influence', source: 'TechCrunch', year: 2012, url: 'https://techcrunch.com/2012/11/09/can-social-media-influence-really-be-measured/', theme: 'inspire' },
  { type: 'article', title: 'The Big Data Fallacy and Why We Need to Collect Even Bigger Data', source: 'TechCrunch', year: 2012, url: 'https://techcrunch.com/2012/11/25/the-big-data-fallacy-data-%E2%89%A0-information-%E2%89%A0-insights/', theme: 'inspire' },
  { type: 'article', title: 'Warning to Toe-Dippers: Being Online ≠ Going Social', source: 'VentureBeat', year: 2012, url: 'https://venturebeat.com/2012/01/23/warning-to-toe-dippers-being-online-%E2%89%A0-going-social/', theme: 'inspire' },
  { type: 'article', title: "Explainable AI: Why It's Important to You and Your Clients", source: 'DevPro Journal', year: null, url: 'https://www.devprojournal.com/technology-trends/ai/explainable-ai-why-its-important-to-you-and-your-clients/', theme: 'inspire' },
  { type: 'article', title: 'AI Made Practical: How to Best Price Your Products', source: 'ITwire', year: null, url: 'https://itwire.com/business-it-news/data/ai-made-practical-how-to-best-price-your-products.html', theme: 'mobilize' },
  { type: 'article', title: 'Four AI Essentials for eCommerce Success', source: 'eCommerce Age', year: null, url: 'https://ecommerceage.co.uk/strategy/ai-essentials-ecommerce-michael-wu-pros/', theme: 'mobilize' },
  { type: 'article', title: 'Why Should Businesses Be Investing in AI?', source: 'Information Age', year: null, url: 'https://www.information-age.com/why-should-businesses-be-investing-in-ai-11814/', theme: 'inspire' },
  { type: 'article', title: 'PROS Chief AI Strategist Michael Wu Talks AI and Airlines', source: 'PhocusWire', year: null, url: 'https://www.phocuswire.com/pros-chief-ai-strategist-michael-wu-airlines', theme: 'mobilize' },
  { type: 'article', title: 'Airline Industry Weighs How Personal to Get with Data', source: 'PhocusWire', year: null, url: 'https://www.phocuswire.com/future-of-data-collection-for-airline-industry', theme: 'mobilize' },
  { type: 'article', title: 'Three Pricing Lessons the Travel Industry Can Learn from B2Bs', source: 'Global Travel Media', year: 2022, url: 'https://eglobaltravelmedia.com.au/2022/08/06/three-pricing-lessons-the-travel-industry-can-learn-from-b2bs/', theme: 'mobilize' },
  { type: 'article', title: 'Assessing the Near-Term Future of Airline Booking', source: 'Business Travel News', year: null, url: 'https://www.businesstravelnews.com/Procurement/Assessing-the-Near-Term-Future-of-Airline-Booking', theme: 'mobilize' },
];

export const booking = {
  url: process.env.NEXT_PUBLIC_BOOKING_URL ?? 'https://calendar.app.google/bE7bEAV7Kfbd63nt8',
  headline: 'A 30-minute call. No commitment.',
  lede: `Tell us what your organization is trying to do with AI. We'll tell you honestly where to start — and whether we're the right fit to help.`,
  steps: [
    { n: '01', t: 'Pick a time', d: 'Choose any open slot below.' },
    { n: '02', t: 'Describe the situation', d: 'One paragraph. Where are you stuck, what are you trying to build, or what are you trying to understand?' },
    { n: '03', t: 'We come prepared', d: "You get a plain-language answer within two working days — even if we never speak again." },
  ],
};

export const youtubeChannel = 'https://www.youtube.com/@QuantSimpleX';

export const publications = [
  'TechCrunch', 'ZDNet', 'CMSWire', 'The AI Journal', 'PhocusWire',
  'Business Travel News', 'DevPro Journal', 'Information Age',
  'PROS Outperform', 'Gamification World Congress', 'CeBIT',
];
