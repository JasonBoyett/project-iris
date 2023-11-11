# Project Iris Official Repo

Iris is a speed reading training application. It is deigned to be used as part of
an academic study on the effects of speed reading training on reading and academic 
performance. To facilitate this study, Iris is designed to collect data on the study
participants and their usage of the application. 

Check out the current production version [here](https://speedread-git-main-jasonboyett.vercel.app/)

---

## Project Authors
- Primary Developer: [Jason Boyett](GitHub.com/JasonBoyett)
- Project Manager: [Dr. Vojislav Petrovic PhD](https://schreiner.edu/su-directory/petrovic-vojislav/)
- UI Designer: Jason Boyett & [Zach Lyman](https://limeademedia.com) 

## Core Project Dependencies

- Iris uses the [t3 stack](https://create.t3.gg/) 
- [Zustand](https://zustand-demo.pmnd.rs/) for state management, 
- [Clerk](https://clerk.com/) for authentication, 
- [Class Variance Authority](https://cva.style/docs) for reusable styling,
- [Planet Scale](https://planetscale.com/) for our database.
- Iris also uses various chron jobs written in [Go](https://go.dev/) to handle various database operations that cannot be hosted on the public repository.

## Project Structure

Iris uses the pages router provided by Next.js. The [pages](src/pages) directory contains all
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

## Getting Started

The best entry point for the project is the [pages](src/pages) directory.
[Index.tsx](src/pages/index.tsx) Is the home page of the web sight but the main page of the app is [Nav](src/pages/nav.tsx). 
From there you can view the individual exercises by viewing the [exercises](src/pages/exercises) directory. 
Most exercises consist of some basic setup and a call to a primary component. Said components can be found in the [components directory](src/componants).


