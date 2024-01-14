
I have full filled all requirments...please check my assignment


frontend deployment essues...because data is not showing but if you check manually then data will be shown into my frontend page.. just command: npm run dev on frontend
live frontend link: https://book-category-system.web.app/login
live backend-link: https://book-category-server.vercel.app/users

env var front end:   VITE_apiKey=AIzaSyDgiVVkK2AoCeqm2ohnLYP37OqypM4s1Xo
  VITE_authDomain=book-category-system.firebaseapp.com
  VITE_projectId=book-category-system
  VITE_storageBucket=book-category-system.appspot.com
  VITE_messagingSenderId=1090867016297
  VITE_appId=1:1090867016297:web:ade2aef11301716043a8f8

env var backend:   
    PORT=8080
    DB_USER=books-category-services
    DB_PASS=C5jfdfUCLd1WSGm3
    NODE_ENV=production

   





#####################################################################################################################################################
# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
