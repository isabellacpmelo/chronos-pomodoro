# Chronos Pomodoro

<div align="left">
  <a href="chronos-pomodoro-lac.vercel.app">
    <img height="180em" alt="Chronos" src="./src/assets/chronos-print.png" />
  </a>
</div>
</br>
<a href="chronos-pomodoro-lac.vercel.app">
  Click here to access the website
</a>

## About the project

Chronos Pomodoro is an application developed with React 19 and TypeScript as
part of the course "React JS 19 e Next.js 15" taught by Professor Luiz Otávio
Miranda.

The project aims to apply the Pomodoro technique to improve users' focus and
productivity through well-defined work and rest cycles. In addition to being
useful, it also served as a practical opportunity to consolidate several
important concepts of the React ecosystem.

During development, the following technologies and practices were applied:

- Context API for global state management;
- Reducers for controlling complex state update logic;
- React Router for navigationbetween pages;
- React Hooks such as useState, useEffect, useContext, among others;
- Web Workers to handle time counting without crashing the interface.

The application was also built with a focus on:

- Componentization: modular and reusable structure;
- Accessibility: support for fluid and clear navigation;
- Responsiveness: adaptation to different screen sizes
- Good code practices: organization, readability and standardization with ESLint
  and Prettier.

## Technologies

- [React 19](https://react.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vite.dev/)
- [Eslint](https://eslint.org/)

## Project setup

### Install dependencies

`npm install`

### Compiles and hot-reloads for development

`npm run dev`

### Compiles and minifies for production

`npm run build`

`npm run preview`

### Lints and fixes files

`npm run lint`

## Project structure

```
📦public
 ┗ 📂images
 ┃ ┗ 📂favicon
 ┃ ┃ ┣ 📜apple-touch-icon.png
 ┃ ┃ ┣ 📜favicon-96x96.png
 ┃ ┃ ┣ 📜favicon.ico
 ┃ ┃ ┣ 📜favicon.png
 ┃ ┃ ┣ 📜favicon.psd
 ┃ ┃ ┣ 📜favicon.svg
 ┃ ┃ ┣ 📜site.webmanifest
 ┃ ┃ ┣ 📜web-app-manifest-192x192.png
 ┃ ┃ ┗ 📜web-app-manifest-512x512.png
📦src
 ┣ 📂adapters
 ┃ ┗ 📜showMessage.ts
 ┣ 📂assets
 ┃ ┗ 📂audios
 ┃ ┃ ┣ 📜beep.mp3
 ┃ ┃ ┣ 📜gravitational_beep.mp3
 ┃ ┃ ┣ 📜gravitational_beep_fixed.mp3
 ┃ ┃ ┗ 📜tic_tac_planeta_miller.mp3
 ┣ 📂components
 ┃ ┣ 📂Container
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂CountDown
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂Cycles
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂DefaultButton
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂DefaultInput
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂Dialog
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂Footer
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂GenericHtml
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂Heading
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂Logo
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂MainForm
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂Menu
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂MessagesContainer
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂RouterLink
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Tips
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂contexts
 ┃ ┗ 📂TaskContext
 ┃ ┃ ┣ 📜initialTaskState.ts
 ┃ ┃ ┣ 📜taskActions.ts
 ┃ ┃ ┣ 📜TaskContext.tsx
 ┃ ┃ ┣ 📜TaskContextProvider.tsx
 ┃ ┃ ┣ 📜taskReducer.ts
 ┃ ┃ ┗ 📜useTaskContext.ts
 ┣ 📂models
 ┃ ┣ 📜TaskModel.ts
 ┃ ┗ 📜TaskStateModel.ts
 ┣ 📂pages
 ┃ ┣ 📂AboutPomodoro
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂History
 ┃ ┃ ┣ 📜index.tsx
 ┃ ┃ ┗ 📜styles.module.css
 ┃ ┣ 📂Home
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┣ 📂NotFound
 ┃ ┃ ┗ 📜index.tsx
 ┃ ┗ 📂Settings
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂routers
 ┃ ┗ 📂MainRouter
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂styles
 ┃ ┣ 📜global.css
 ┃ ┗ 📜theme.css
 ┣ 📂templates
 ┃ ┗ 📂MainTemplate
 ┃ ┃ ┗ 📜index.tsx
 ┣ 📂utils
 ┃ ┣ 📜formatDate.ts
 ┃ ┣ 📜formatSecondsToMinutes.ts
 ┃ ┣ 📜getNextCycle.ts
 ┃ ┣ 📜getNextCycleType.ts
 ┃ ┣ 📜getTaskStatus.ts
 ┃ ┣ 📜loadBeep.ts
 ┃ ┗ 📜sortTasks.ts
 ┣ 📂workers
 ┃ ┣ 📜timerWorker.js
 ┃ ┗ 📜TimerWorkerManager.ts
 ┣ 📜App.tsx
 ┣ 📜index.css
 ┣ 📜main.tsx
 ┗ 📜vite-env.d.ts
 ┣ 📜.gitattributes
 ┣ 📜.gitignore
 ┣ 📜.hintrc
 ┣ 📜.prettierrc.json
 ┣ 📜eslint.config.js
 ┣ 📜index.html
 ┣ 📜package-lock.json
 ┣ 📜package.json
 ┣ 📜README.md
 ┣ 📜tsconfig.app.json
 ┣ 📜tsconfig.json
 ┣ 📜tsconfig.node.json
 ┣ 📜vercel.json
 ┗ 📜vite.config.ts
```
