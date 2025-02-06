# My Personal Blog

This is a React-based project that uses TypeScript and Vite for building a modern web application. The project structure is organized to maintain scalability and readability.

## Project Structure

```
/
├── .github/
│   └── workflows/
│       ├── build.yml
│       ├── codeql.yml
│       └── deploy.yml
├── .vscode/
│   └── extensions.json
├── src/
│   ├── assets/
│   │   ├── backgroundImage.jpg
│   │   ├── icon.svg
│   │   └── me.png
│   ├── language/
│   │   ├── constants/
│   │   │   ├── EN_US.json
│   │   │   └── PT_BR.json
│   │   ├── languageConfig.ts
│   │   └── languageUtil.ts
│   ├── pages/
│   │   ├── layout/
│   │   │   └── index.tsx
│   │   └── main/
│   │       ├── index.tsx
│   │       └── styles.ts
│   ├── styles/
│   │   └── GlobalStyles.ts
│   ├── ui/
│   │   ├── atom/
│   │   │   ├── ColoredText/
│   │   │   │   └── index.tsx
│   │   │   ├── IconAwesome/
│   │   │   │   └── index.tsx
│   │   │   ├── Label/
│   │   │   │   └── index.tsx
│   │   │   └── Paragraph/
│   │   │       └── index.tsx
│   │   ├── molecule/
│   │   │   ├── AnimatedIcon/
│   │   │   │   ├── container.ts
│   │   │   │   └── index.tsx
│   │   │   ├── AnimatedType/
│   │   │   │   ├── container.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.tsx
│   │   │   ├── EducationComponent/
│   │   │   │   ├── container.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── ExperienceComponent/
│   │   │   │   ├── container.ts
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   ├── ProjectComponent/
│   │   │   │   ├── container.tsx
│   │   │   │   ├── index.tsx
│   │   │   │   └── styles.ts
│   │   │   └── SocialIcons/
│   │   │       ├── index.tsx
│   │   │       └── styles.ts
│   │   └── organism/
│   │       ├── Footer/
│   │       │   ├── index.tsx
│   │       │   └── styles.ts
│   │       ├── Header/
│   │       │   ├── index.tsx
│   │       │   └── styles.ts
│   │       └── Sections/
│   │           ├── About/
│   │           │   ├── index.tsx
│   │           │   └── styles.ts
│   │           ├── ExperienceAndEducation/
│   │           │   ├── container.ts
│   │           │   ├── index.tsx
│   │           │   └── styles.ts
│   │           ├── Home/
│   │           │   ├── index.tsx
│   │           │   └── styles.ts
│   │           └── Project/
│   │               ├── container.ts
│   │               ├── index.tsx
│   │               └── styles.ts
│   ├── util/
│   │   ├── Scroll/
│   │   │   ├── scroll.ts
│   │   │   └── scrollConfig.ts
│   │   ├── constants.ts
│   │   └── interface.ts
│   ├── App.tsx
│   ├── Routes.tsx
│   └── main.tsx
├── .eslintrc
├── .nvmrc
├── .prettierrc
├── README.md
├── index.html
├── package.json
├── tsconfig.json
├── tsconfig.node.json
└── vite.config.ts
```

## Getting Started

### Prerequisites

- Node.js (v18.19.1)
- npm or yarn

### Installation

1. Clone the repository:
   ```sh
   git clone https://github.com/vitortenor/my-personal-blog.git
   ```
2. Navigate to the project directory:
   ```sh
   cd my-personal-blog
   ```
3. Install the dependencies:
   ```sh
   npm install
   ```
   or
   ```sh
   yarn install
   ```

### Running the Project

To start the development server, run:
```sh
npm run dev
```
or
```sh
yarn dev
```

### Building the Project

To build the project for production, run:
```sh
npm run build
```
or
```sh
yarn build
```

### Linting the Project

To lint the project, run:
```sh
npm run lint
```
or
```sh
yarn lint
```

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any changes.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgements

- [React](https://reactjs.org/)
- [TypeScript](https://www.typescriptlang.org/)
- [Vite](https://vitejs.dev/)
