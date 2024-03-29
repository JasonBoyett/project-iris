# Project Iris Official Repo

![Iris Logo](/apps/nextjs/public/IRIS-LOGO.png)

Iris is a speed reading training application. It is deigned to be used as part of
an academic study on the effects of speed reading training on reading and academic
performance.
To facilitate this study, Iris is designed to collect data on the study
participants and their usage of the application.

### Check out the current production version [here.](https://speedread-git-main-jasonboyett.vercel.app/)

---

## Core Project Dependencies

- Iris uses the [t3 stack](https://create.t3.gg/)
  - [TypeScript](https://www.typescriptlang.org/)
  - [Tailwind CSS](https://tailwindcss.com/)
  - [Trpc](https://trpc.io/)
  - [Next.js](https://nextjs.org/)
    - [React](https://reactjs.org/)
    - [Vercel](https://vercel.com/)
- [Zustand](https://zustand-demo.pmnd.rs/) for state management,
- [Clerk](https://clerk.com/) for authentication,
- [Class Variance Authority](https://cva.style/docs) for reusable styling,
- [Planet Scale](https://planetscale.com/) for our database.
- Iris also uses various chron jobs written in [Go](https://go.dev/) to handle various database operations that cannot be hosted on the public repository.

## Project Structure

Iris uses the pages router provided by Next.js.
The [pages](src/pages) directory contains all
the routs for the application. The pages are divided into instructions, exercises,
and admin routes as well some miscellaneous routes listed directly in the pages directory.

The [server](src/server) directory is a part of the Next.js framework and it contains
all the serverless functions used by the application.

The [components](src/components) directory contains various reusable components used
throughout the application.

The [cva](src/cva) directory contains the
class variance authority styles used throughout the application.

The [hooks](src/hooks) directory contains all custom hooks used in the application.

The [stores](src/stores) directory contains Zustand stores.

The [utils](src/utils) directory contains utility functions, types and Zod schemas.

## Project Authors

- Primary Developer: [Jason Boyett](GitHub.com/JasonBoyett)
- Project Manager: Dr. Vojislav Petrovic PhD
- UI Designer: Jason Boyett & [Zach Lyman](https://limeademedia.com)

## Getting Started

### Getting a foothold

The best entry point for the project is the [pages](src/pages) directory.
[Index.tsx](src/pages/index.tsx) Is the home page of the web sight but the main page of the app is [Nav](src/pages/nav.tsx).
From there you can view the individual exercises by viewing the [exercises](src/pages/exercises) directory.
Most exercises consist of some basic setup and a call to a primary component. Said components can be found in the [components directory](src/componants).

### Running the project locally

To run the project locally you will neet to have [Node.js](https://nodejs.org/en/) installed.
Once you have Node.js installed, clone the repository and run `npm install` to install all the dependencies.
You will need some environment variables to run the project locally.
These will be:

- DATABASE_URL
  - This is the connection point to the database.
  - You can get by creating a planet scale database and copying the connection string.
- NEXT_PUBLIC_CLERK_FRONTEND_API
  - This is the public API key for the Clerk authentication service.
  - You can get this by creating a Clerk account and creating a project.
- NEXT_PUBLIC_CLERK_SIGN_IN_URL
  - This is the URL for the Clerk sign in page.
  - You can get this by creating a Clerk account and creating a project.

If you would like to use the production database
and clerk project you can contact the project author for access.
You will need to make segnificant contrebutions before you will be
considered for access to the production database and clerk project.

Once you have the environment variables set up you will need to initialize
your development database by running `npx prisma db push` to view the database
database contents run `npx prisma studio` and navigate to `localhost:5555` in your browser.

You can now run the project using either:

npm

```bash
npm run dev
```

or turbo

```bash
turbo dev
```

Both of these commands will start the project and default to port 3000.

Before attempting to submit your pull request please run the following commands

```bash
prettier --write .
turbo build lint
```

This will ensure that your code is formatted correctly and will build in production.
