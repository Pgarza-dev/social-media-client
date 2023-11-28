[![Automated Unit Testing](https://github.com/Pgarza-dev/social-media-client/actions/workflows/automated-testing.yml/badge.svg)](https://github.com/Pgarza-dev/social-media-client/actions/workflows/automated-testing.yml)
[![Automated E2E Testing](https://github.com/Pgarza-dev/social-media-client/actions/workflows/E2E-TEST.yml/badge.svg)](https://github.com/Pgarza-dev/social-media-client/actions/workflows/E2E-TEST.yml)[![Code Review](https://github.com/Pgarza-dev/social-media-client/actions/workflows/gpt.yml/badge.svg)](https://github.com/Pgarza-dev/social-media-client/actions/workflows/gpt.yml)[![Deploy static content to Pages](https://github.com/Pgarza-dev/social-media-client/actions/workflows/pages.yml/badge.svg)](https://github.com/Pgarza-dev/social-media-client/actions/workflows/pages.yml)

# Social Media Client

## Description

This is a social media application that allows users to create an account, login, and post messages to a feed. Users can also like and comment on other users' posts. The application testing is automated and unit testing is done using GitHub Actions, Cypress and Jest. The application is deployed using GitHub Pages.

## Testing Team

- [Pgarza-dev](https://github.com/Pgarza-dev)

## Installation and Setup Instructions

### Steps

1. Clone the repository
2. Initialize with `git init`
3. Run `npm install` to install dependencies

### Build Sass

1. Npm run build

### Unit Testing - Jest

- Login Test `src\js\api\auth\login.test.js`
- Logout Test `src\js\api\auth\logout.test.js`
- Run Jest test `npm run test-unit`

### E2E Testing - Cypress

- Login Test `cypress\e2e\login.cy.js`
- Logout Test `cypress\e2e\logout.cy.js`
- Validation Test `cypress\e2e\validation.cy.js`
- Run Cypress test `npm run test-e2e`

### Unit Testing and E2E Test

1. `Npm run test`

### Required Features

- [x] User registration with @noroff.no or @stud.noroff.no email
- [x] User login

## Contributing

If you'd like to contribute, feel free to make a PR to the Workflow branch.

## Acknowledgments

Thanks to everyone who provided feedback and discovered bugs on this project.
