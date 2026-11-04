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
    'I find the patterns in fintech and customer data, explain why they matter, and build dashboards that make them obvious.',
  about: [
    'My background combines business operations with technical problem-solving. As an account manager in fintech, I work with transaction data, customer behaviour, performance trends and business reporting every day.',
    "I studied Computer Science at Covenant University, and I'm deepening my work in data analytics and data engineering, turning raw data into reliable, useful insight.",
  ],
};

export const metrics = [
  { value: '10,000+', label: 'transactions a day across the merchants I manage' },
  { value: '20+', label: 'merchants in Nigeria, Ghana and Kenya' },
  { value: '50,000+', label: 'records cleaned and modelled' },
];

export const experience = [
  {
    role: 'Account Manager',
    org: 'BudPay (Bud Infrastructure Limited)',
    when: 'Mar 2026 - Present',
    where: 'Lagos, Nigeria',
    points: [
      'Manage 20+ merchants across Nigeria, Ghana and Kenya, together processing over 10,000 transactions a day.',
      'Traced a drop in approval rates to transactions with blank payment-gateway fields: customers leaving checkout on the merchant site, not failed payments. This separated real processing failures from drop-offs.',
      'Investigate transaction trends, revenue changes and payment success rates in Metabase, Excel and Google Sheets, and work with Engineering, Product and Operations to resolve issues.',
      'Report on transaction volume, revenue, budget comparisons and operational issues.',
    ],
  },
  {
    role: 'Business Analyst Intern',
    org: 'Saiket Systems',
    when: 'Sep 2025 - Oct 2025',
    where: '',
    points: [
      'Analysed telecom customer churn with Python, Pandas and NumPy.',
      'Linked tenure and demographic patterns to churn, and flagged groups for targeted retention.',
    ],
  },
];

export const skills = [
  { group: 'Analyse', items: ['Python', 'SQL', 'Pandas', 'NumPy', 'Exploratory analysis', 'Customer analytics', 'KPI reporting'] },
  { group: 'Engineer', items: ['PostgreSQL', 'SQLite', 'TimescaleDB', 'ETL', 'Docker', 'Git', 'GitHub Actions'] },
  { group: 'Visualise', items: ['Power BI', 'Tableau', 'Streamlit', 'Plotly', 'Excel'] },
];
