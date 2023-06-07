
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }


  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'APACHE 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  };

  return licenseBadges[license] || '';
}

function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    'APACHE 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause'
  };

  return licenseLinks[license] || '';
}


function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  const licenseLink = renderLicenseLink(license);
  return `
## License
This project is licensed under the [${license} License](${licenseLink}).
`;
}

function generateMarkdown(data) {
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  return `## Title ${data.title}

${licenseBadge}

## Description
${data.description}

## Table of Contents
- [Installation](#installation)
- [Usage](#usage)
- [Tests](#tests)
- [Credits](#credits)
${licenseSection}
## Installation
To install the dependencies, run the following command:
\`\`\`
${data.installation}
\`\`\`

## Usage
${data.usage}

## Tests
To run tests, use the following command:
\`\`\`
${data.test}
\`\`\`

## Credits
${data.credits}

## Questions
For any questions or inquiries, please reach out to me via GitHub: [${data.gitHub}](https://github.com/${data.gitHub}) or email: ${data.email}.
`;
}


module.exports = generateMarkdown;