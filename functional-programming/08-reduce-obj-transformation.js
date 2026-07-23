const users = [
  {
    company: {
      department: 'Engineering',
      title: 'Sales Manager',
    },
  },
  {
    company: {
      department: 'Support',
      title: 'Support Specialist',
    },
  },
  {
    company: {
      department: 'Research and Development',
      title: 'Accountant',
    },
  },
  {
    company: {
      department: 'Support',
      title: 'Research Analyst',
    },
  },
  {
    company: {
      department: 'Human Resources',
      title: 'Quality Assurance Engineer',
    },
  },
  {
    company: {
      department: 'Product Management',
      title: 'Research Analyst',
    },
  },
  {
    company: {
      department: 'Engineering',
      title: 'Web Developer',
    },
  },
  {
    company: {
      department: 'Marketing',
      title: 'Chief Executive Officer',
    },
  },
  {
    company: {
      department: 'Support',
      title: 'Legal Counsel',
    },
  },
  {
    company: {
      department: 'Marketing',
      title: 'Chief Financial Officer',
    },
  },
  {
    company: {
      department: 'Services',
      title: 'Web Developer',
    },
  },
  {
    company: {
      department: 'Accounting',
      title: 'Business Analyst',
    },
  },
  {
    company: {
      department: 'Engineering',
      title: 'Database Administrator',
    },
  },
  {
    company: {
      department: 'Accounting',
      title: 'Chief Executive Officer',
    },
  },
  {
    company: {
      department: 'Marketing',
      title: 'Software Architect',
    },
  },
  {
    company: {
      department: 'Accounting',
      title: 'Database Administrator',
    },
  },
  {
    company: {
      department: 'Support',
      title: 'Chief Financial Officer',
    },
  },
  {
    company: {
      department: 'Training',
      title: 'Data Analyst',
    },
  },
  {
    company: {
      department: 'Human Resources',
      title: 'Business Analyst',
    },
  },
  {
    company: {
      department: 'Legal',
      title: 'Web Developer',
    },
  },
  {
    company: {
      department: 'Engineering',
      title: 'Chief Technology Officer',
    },
  },
  {
    company: {
      department: 'Legal',
      title: 'Business Analyst',
    },
  },
  {
    company: {
      department: 'Sales',
      title: 'Database Administrator',
    },
  },
  {
    company: {
      department: 'Accounting',
      title: 'Business Analyst',
    },
  },
  {
    company: {
      department: 'Legal',
      title: 'Business Development Manager',
    },
  },
  {
    company: {
      department: 'Accounting',
      title: 'Project Manager',
    },
  },
  {
    company: {
      department: 'Support',
      title: 'Legal Counsel',
    },
  },
  {
    company: {
      department: 'Product Management',
      title: 'Quality Assurance Engineer',
    },
  },
  {
    company: {
      department: 'Services',
      title: 'Sales Manager',
    },
  },
  {
    company: {
      department: 'Services',
      title: 'Human Resources Manager',
    },
  },
  {
    company: {
      department: 'Accounting',
      title: 'Technical Support Engineer',
    },
  },
  {
    company: {
      department: 'Research and Development',
      title: 'Accountant',
    },
  },
  {
    company: {
      department: 'Product Management',
      title: 'Software Engineer',
    },
  },
  {
    company: {
      department: 'Research and Development',
      title: 'Engineer',
    },
  },
  {
    company: {
      department: 'Legal',
      title: 'Chief Information Officer',
    },
  },
  {
    company: {
      department: 'Engineering',
      title: 'Marketing Manager',
    },
  },
  {
    company: {
      department: 'Engineering',
      title: 'Developer',
    },
  },
  {
    company: {
      department: 'Legal',
      title: 'Database Administrator',
    },
  },
  {
    company: {
      department: 'Accounting',
      title: 'Chief Operating Officer',
    },
  },
  {
    company: {
      department: 'Human Resources',
      title: 'Chief Technology Officer',
    },
  },
  {
    company: {
      department: 'Human Resources',
      title: 'Business Analyst',
    },
  },
  {
    company: {
      department: 'Support',
      title: 'Sales Manager',
    },
  },
  {
    company: {
      department: 'Product Management',
      title: 'Technical Support Engineer',
    },
  },
  {
    company: {
      department: 'Legal',
      title: 'Chief Financial Officer',
    },
  },
  {
    company: {
      department: 'Research and Development',
      title: 'Legal Counsel',
    },
  },
  {
    company: {
      department: 'Engineering',
      title: 'Technical Support Engineer',
    },
  },
  {
    company: {
      department: 'Research and Development',
      title: 'Chief Financial Officer',
    },
  },
  {
    company: {
      department: 'Marketing',
      title: 'Research Analyst',
    },
  },
  {
    company: {
      department: 'Engineering',
      title: 'Chief Executive Officer',
    },
  },
  {
    company: {
      department: 'Research and Development',
      title: 'Database Administrator',
    },
  },
]

// Transform into an object with department name and department possible titles

const departmentsObject = users.reduce((acc, user) => {
  const deptName = user.company.department
  const jobTitle = user.company.title

  const key = deptName.replace(' ', '_').toLowerCase()

  if (!acc[key]) {
    acc[key] = {
      title: deptName,
      functions: [],
    }
  }

  if (!acc[key].functions.includes(jobTitle)) {
    acc[key].functions.push(jobTitle)
  }

  return acc
}, {})
