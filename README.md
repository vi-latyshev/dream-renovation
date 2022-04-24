# Dream Renovation

## Sections
1. [Links](#links)
1. [Requirements](#requirements)
1. [Technology stack](#technology-stack)
1. [Install](#install)
1. [Start developing](#start-developing)
1. [Scripts commands](#scripts-commands)
1. [Structure](#structure)
1. [Developing steps](#developing-steps)
    * [Branches](#branches)
    * [Commits](#commits)
        * [Examples](#examples)
    * [Pull Requests](#pull-requests)
1. [Build/Start app](#buildstart-app)
1. [Start app](#start-app)
1. [Deploy](#deploy)

## Links

### Site urls:

* https://dream-renovation.ru/ - main site
* https://dream-renovation.vercel.app/ - test site (preview)

## Requirements

* node `^15.0.0` - [install](https://nodejs.org/en/download/)
* yarn `^1.22.0` - [install](https://yarnpkg.com/en/docs/install/)

## Technology stack

* [React 16.8+](https://reactjs.org/) ─ base of app. Using functional components with hooks
* [Next.js](https://nextjs.org/) ─ framework for ssr and api
* [Typescript](https://www.typescriptlang.org/) - static type definitions
* [Material-UI](https://material-ui.com/) ─ components of user interface
* [axios](https://github.com/axios/axios) ─ xhr requests
* [react-hook-form](https://react-hook-form.com/) ─ react forms
* [superstruct](https://docs.superstructjs.org/) - validation of form fields, using for client and server side
* [nodemailer](https://nodemailer.com/) - for sending mails from backend

## Install

Clone project from repository and install all project's dependencies:

```bash
git clone git@github.com/vi-latyshev/dream-renovation
cd dream-renovation
yarn
```

## Start developing

Runs which starts Next.js in development mode:
```bash
yarn dev
```
This starts the development server on http://localhost:3000.

## Scripts commands

|`yarn <script>`    |Description|
|-------------------|-----------|
|`dev`              |Run app in develop mode|
|`test`             |Run lint and type code check and test app|
|`build`            |[Build app](#buildstart-ap) in production mode|
|`start`            |[Build and start app](#buildstart-ap) in production mode|

Others commands are used by auto services for build/deploy the project.

## Structure

### The project structure has both flat and [fractal structure](https://github.com/davezuko/react-redux-starter-kit/wiki/Fractal-Project-Structure)s.

**Important!** - Top-level `components`, `hooks`, `utils` and `icons` directories contain reusable components

```
|── public                      # static files (icons, images, robots.txt and etc)
|── src                         # all source files
|   |── components              # common reuseble components
|   |── configs                 # server/client configs (routes, csp and etc)
|   |── constants               # frontend constants (links, contacts, socials and etc)
|   |── hooks                   # common reuseble hooks
|   |── icons                   # common reuseble icons
|   |── pages                   # names of pages for routing
|   |   |── _app.tsx            # 'head layout' of page. Used by Next.js
|   |   |── _document.tsx       # 'head layout' of all pages, uses server-side rendering. Used by Next.js
|   |   |── index.tsx           # home page, includes all sections/components from `./views/home`
|   |   └── about.tsx           # some any page, includes all sections/components from `./views/about`
|   |── styles                  # settings theme for material-ui
|   |── types                   # types of node_modules libs for redeclaration
|   └── views                   # includes all `components`, `hooks`, `utils` and `icons` used only on specific page
|       |── home                # name of page
|       |   |── hooks           # hooks only for 'home' page
|       |   |── icons           # icons only for 'home' page
|       |   |── index.ts        # all exports components/interfaces for importing components of 'home' page
|       |   └── List.tsx        # some any component
|       └── about               # some any page
└──
```

Within of a fractal structure, an example of a list component might look like this:

```
…
|   |── SmthList
|   |   |── index.ts            # all exports components/interfaces for importing this component
|   |   |── SmthList.tsx        # includes all logic of component
|   |   |── constants.ts        # constants for this component, mostly to avoid circular dependencies
|   |   |── utils               # some utilities различные вспомогательные утилиты
|   |   |   └── smthFormatter.ts
|   |   └── Row                 # component representing list line
|   |       |── index.tx        # all exports components/interfaces for importing list line
|   |       └── Row.tsx         # includes all logic of list line
…
```

## Developing steps

### Branches

The process of adding new functionality begins by creating a new branch for development, branching from the `develop` branch. The name prefix for the branch is selected based on the type of added functionality:

* `feat` ─ adding new user features
* `fix` ─ fixing bugs
* `chore` ─ adding / updating new features that with doesn't affect user code. Example, optimizing package builds, code rules and etc
* `docs` - documentation

Then comes the `/` character and a short associative name in `kebab-case`.

So, for example, the name of the branch for adding the change new header may have the name: `feat/new-header`.

### Commits

Comments to commits are formatted to the following rule:

```
<type>(<scope>): <subject>
```

#### Type

* `feat` - using for adding new feature
* `fix` - fixing some bug
* `docs` - add or update docs
* `test` - add or update tests for app
* `chore` - optimizing package builds, code rules and etc

#### Scope

Here you must specify which areas were affected commit. Example: `(header)` or `(button)`

#### Subject

Common style message:

```
action (with lower case) + for which entity + (optional details)
```

For example:
```
fix margin in button
```

#### Examples

```
feat(footer): add phone in contact
fix(modal): fix shadow for modal
chore(next-config): add rewrite for redirect in next config
```

### Pull Requests

The development process ends with a Pull Request of the development branch in the `develop` branch on [github.com](https://github.com/vi-latyshev/dream-renovation).
* If the `develop` branch has gone ahead during development, it is necessary to `rebase` from it.

## Build/Start app

Builds app:
```bash
yarn build
```
or Start app
```bash
yarn start
```
App will be build and start on http://localhost:3000 with production mode.

## Deploy

Every commit pushed to the any branch will trigger a some deployment on [Vercel](https://vercel.com/):
* `master` - Production Deployment on [main site](#links)
* `develop` - Preview Deployment on [test site](#links)
* `any other branch` - Preview Deployment will available on `https://dream-renovation-[GIT_BRANCH_NAME]-vi-latyshev.vercel.app/`
