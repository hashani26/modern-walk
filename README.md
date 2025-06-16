This is a [Next.js](https://nextjs.org) project bootstrapped with [`create-next-app`](https://nextjs.org/docs/app/api-reference/cli/create-next-app).

## Application Local Setup and Getting Started

First, run the development server:

`git clone https://github.com/hashani26/modern-walk.git`

`cd modern-walk`

create .env file and clone .env.sample file

`npm i`

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Suggested development environment is Microsoft Visual Studio Code(VSCode).
Install these extensions in VSCode

- [prettier](https://marketplace.visualstudio.com/items?itemName=esbenp.prettier-vscode)
- [eslint](https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint)

## Technologies Used

- NextJs
- TailwindCSS
- tanstack query (react-query)

## Development Best Practices for Scalability and Maintainability

**Typescript**
identify code errors during compile time by ensuring type safety using static type checking

**ESLint**
Lint unnecesssary code, comments which increases the code lines which complicates syntax readability

**Pretiier**
ensure code formatting is consistent thorughout the coding lifecycle and among all team members

These best practices are enforced through a custom vscode settings configuration shared across team members via SCM

**husky**
pre-commit hook is enabled to check and fix any linting and formatting issues to before entering shared code base

**staging**
Setup pre-production environment hosting to showcase/simulate the prototype to ensure stakeholder validation

**tanstack query**

## Performance Optimization

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load fonts.

auto caching prevents duplicate API requests using useQuery hook, thereby reduce load times, only re-renders a page if the background requests updates data which increases UI performance

used nextjs dynamic() to lazily load smaller chunks of bundle on demand which improves initial bundle size and reduces initial load times

## Deployment and Hosting

Webapp can be viewed at [modern-walk staging](modern-walk-five.vercel.app) which is hosted using vercel

whenever there is a PR to the master branch, an optimum build will be created\
Deploying is automated via github actions configured in deploy.yml
