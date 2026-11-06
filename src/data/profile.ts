// Everything on the home page that isn't a project lives here.
// Projects are the Markdown files in src/pages/work/.

export const profile = {
  name: 'Chidinma Onyeri',
  location: 'Lagos, Nigeria',
  email: 'chidinmaonyeri1@gmail.com',
  // Photo lives at src/assets/chidinma.jpg (imported in index.astro so Astro resizes it).
  cv: '/Chidinma_Onyeri_CV.pdf',
  links: {
    linkedin: 'https://www.linkedin.com/in/chidinma-onyeri/',
    github: 'https://github.com/DinmaJJ',
    tableau: 'https://public.tableau.com/app/profile/chidinma.onyeri/vizzes',
  },
  intro:
    'I use data to understand business performance, explain what is changing, and build tools that make useful insights easier to act on.',
  about: [
    'My experience sits at the intersection of business operations, customer relationships and data. In fintech, I worked closely with merchants and used transaction data to investigate performance changes, understand payment issues, and give stakeholders clearer information for business decisions.',
    "I studied Computer Science at Covenant University. I’m building on that foundation through projects in data analytics, business intelligence and data engineering, with a focus on turning raw data into reliable, useful insight.",
  ],
};

export const metrics = [
  { value: '10,000+', label: 'transactions a day across the merchants I supported' },
  { value: '20+', label: 'merchants across Nigeria, Ghana and Kenya' },
  { value: '50,000+', label: 'records explored in an e-commerce analytics project' },
];

export const experience = [
  {
    role: 'Account Manager (Merchant Operations & Analytics)',
    org: 'BudPay (Bud Infrastructure Limited)',
    when: 'Mar 2026 - Oct 2026',
    where: 'Lagos, Nigeria',
    points: [
      'Managed merchant relationships and supported account performance across Nigeria, Ghana and Kenya, working with merchants on transaction concerns, operational issues and growth opportunities.',
      'Used transaction data in Metabase, Excel and Google Sheets to investigate declining merchant activity, increases in failed transactions and changes in payment success rates.',
      'Prepared weekly and monthly reports covering transaction volume, revenue, market contributions and performance trends, explaining significant changes and the factors behind them.',
      'Shared findings with management, stakeholders and the Growth team to help identify high-performing markets and industries, prioritise investment, and make timely corrections when performance changed.',
      'Worked with Engineering, Product, Operations, Customer Success and Compliance to investigate issues and coordinate resolutions.',
    ],
  },
  {
    role: 'Business Analyst (Sales, Marketing & Customer Service)',
    org: 'Elevation Support Services',
    when: 'Apr 2026 - May 2026',
    where: 'London, UK',
    points: [
      'Handled customer enquiries through HubSpot, provided service information and supported appointment scheduling.',
      'Conducted market research and client outreach to identify potential leads and business opportunities.',
      'Coordinated staff schedules and availability, working with the team to support smooth service delivery.',
    ],
  },
  {
    role: 'Social Media Strategist & Educator (Volunteer)',
    org: 'PerioducateHer',
    when: 'May 2025 - Present',
    where: '',
    points: [
      'Support menstrual health education through awareness campaigns and educational content for young people.',
      'Contribute to social media planning and content strategy, using audience engagement and campaign needs to guide communication.',
      'Facilitate Digital Technology and Computer Studies classes, supporting learning and digital skills development.',
    ],
  },
  {
    role: 'Business Analyst Intern',
    org: 'Saiket Systems',
    when: 'Sep 2025 - Oct 2025',
    where: 'Maharashtra, India',
    points: [
      'Explored telecom customer churn data using Python, Pandas and NumPy to understand patterns associated with customer attrition.',
      'Analysed factors including customer tenure, contract type, payment method and demographics to identify higher-risk customer segments.',
      'Presented findings through visual analysis and recommended retention actions for segments with higher churn risk.',
    ],
  },
  {
    role: 'Account Management Intern',
    org: 'BudPay (Bud Infrastructure Limited)',
    when: 'May 2024 - Sep 2024',
    where: 'Lagos, Nigeria',
    points: [
      'Supported merchant onboarding, relationship management and customer retention activities.',
      'Tracked recurring merchant issues and operational bottlenecks, documenting patterns to support follow-up and resolution.',
      'Worked with internal teams to address merchant concerns and improve the customer experience.',
      'Used transaction analysis, customer behaviour and market research to identify potential merchant growth and upsell opportunities.',
    ],
  },
];

export const skills = [
  { group: 'Analyse', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Exploratory analysis', 'Customer analytics', 'KPI reporting'] },
  { group: 'Engineer', items: ['PostgreSQL', 'SQLite', 'TimescaleDB', 'ETL', 'Docker', 'Git', 'GitHub Actions'] },
  { group: 'Visualise', items: ['Power BI', 'Tableau', 'Streamlit', 'Plotly', 'Excel', 'Google Sheets'] },
];
