// Function to render the license badge based on the license type
function renderLicenseBadge(license) {
  if (!license) {
    return '';
  }

  // Define the license badges for different license types
  const licenseBadges = {
    MIT: '[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)',
    'APACHE 2.0': '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    'GPL 3.0': '[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)',
    'BSD 3': '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  };

  // Return the license badge corresponding to the given license type
  return licenseBadges[license] || '';
}

// Function to render the license link based on the license type
function renderLicenseLink(license) {
  if (!license) {
    return '';
  }

  // Define the license links for different license types
  const licenseLinks = {
    MIT: 'https://opensource.org/licenses/MIT',
    'APACHE 2.0': 'https://opensource.org/licenses/Apache-2.0',
    'GPL 3.0': 'https://www.gnu.org/licenses/gpl-3.0',
    'BSD 3': 'https://opensource.org/licenses/BSD-3-Clause'
  };

  // Return the license link corresponding to the given license type
  return licenseLinks[license] || '';
}

// Function to render the license section for the markdown file
function renderLicenseSection(license) {
  if (!license) {
    return '';
  }

  // Get the license link based on the license type
  const licenseLink = renderLicenseLink(license);

  // Return the license section with the license name and link
  return `
## License
This project is licensed under the [${license} License](${licenseLink}).
`;
}

// Function to generate the markdown content for the readme file
function generateMarkdown(data) {
  // Render the license badge and license section
  const licenseBadge = renderLicenseBadge(data.license);
  const licenseSection = renderLicenseSection(data.license);

  // Generate the markdown content using the provided data
  return `## ${data.title}

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

// Export the generateMarkdown function to make it accessible from other files
module.exports = generateMarkdown;
