        Description of the Portfolio website : 
1.Welcome to my portfolio website, a passionate software developer with expertise in full-stack development and Web3 technologies. This website showcases my skills, educational background, projects, and contact details.

2.🛠️ Tech Stack & Skills Used :-

A.Frontend: HTML5, CSS3, JavaScript, React.js, Tailwind CSS, Bootstrap

B.Backend: Node.js, Express.js

C.Databases: MongoDB (NoSQL), Oracle (SQL)

D.Version Control: Git & GitHub

3.How to Run This Project Locally:-

a.Clone the repository:
  git clone https://github.com/shivam19575/PortFolio.git

b.Navigate to the project folder:
  cd portfolio-website

c.Install dependencies:
  npm install

d.Run the project:
  npm run dev



         Decription about the usage of React + Typescript + vite :- 

         
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
