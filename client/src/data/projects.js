// TODO: Add your actual GitHub links to each project's githubUrl field
// TODO: Add live demo links if available to each project's demoUrl field

const projects = [
  {
    id: 1,
    title: 'Brexit Political Uncertainty & UK Stock Market Analysis',
    description: 'Analysed how political uncertainty affects the stock returns and trading volume of 200 UK-listed firms between 2016 and 2020, comparing the responses of domestically and internationally exposed companies.',
    problem: 'Political risk affects firms unevenly, yet most models treat it as a uniform shock. This project proved that firms respond heterogeneously to political uncertainty shocks.',
    tools: ['Python', 'Scikit-learn', 'Pandas', 'Matplotlib'],
    githubUrl: 'https://github.com/cobbold-m/Brexit-Political-Uncertainty-UK-Stock-Market-Analysis',
    demoUrl: null,
  },
  {
    id: 2,
    inProgress: true,
    title: 'SQL Financial Transactions Analysis',
    description:
      'Analysed a financial transactions dataset using SQL to uncover spending patterns, detect anomalies, and generate business insights.',
    problem:
      'Financial institutions need fast, scalable ways to query and analyse large transaction datasets.',
    tools: ['SQL', 'PostgreSQL', 'Excel'],
    githubUrl: null,
    demoUrl: null,
  },
  {
    id: 3,
    inProgress: true,
    title: 'Power BI ESG Dashboard',
    description:
      'Designed an interactive Power BI dashboard visualising ESG metrics across sectors, enabling stakeholders to compare company sustainability performance.',
    problem:
      'ESG data is often scattered and hard to interpret; this dashboard centralises and visualises it clearly.',
    tools: ['Power BI', 'Excel', 'DAX'],
    githubUrl: null,
    demoUrl: null,
  },
  {
    id: 4,
    inProgress: true,
    title: 'A/B Testing Case Study for FinTech User Conversion',
    description:
      'Conducted a structured A/B test to evaluate the impact of UI changes on user sign-up conversion rates for a hypothetical FinTech app.',
    problem:
      'Product teams need statistical rigour to validate design decisions — this case study demonstrates that process end to end.',
    tools: ['Python', 'SciPy', 'Pandas', 'Jupyter Notebook'],
    githubUrl: null,
    demoUrl: null,
  },
];

export default projects;
