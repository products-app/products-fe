<div align="center">
  <a href="https://github.com/products-app/products-fe">
    <img src="https://github.com/products-app/products-fe/assets/13439423/9f90454c-c622-4a20-8c3a-c739cd9a7f1b" width="100" /> 
  </a>

  <h3 align="center">Prompt - Shopping Cart (Front-end)</h3>

  <p align="center">
    A quick and easy to use shopping cart.
    <br />
    <i>This is a project I'm building as a test, but it's also intended to create a basis for building how a real, scalable application would work.</i>
    <br />
    <a href="https://github.com/products-app/products-fe"><strong>Explore the docs »</strong></a>
    <br />
    <br />
  </p>
</div>



<!-- TABLE OF CONTENTS -->
<details>
  <summary>Table of Contents</summary>
  <ol>
    <li><a href="#about-the-project">About The Project</a></li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#prerequisites">Prerequisites</a></li>
        <li><a href="#installation">Installation</a></li>
        <li><a href="#running-the-app">Running the app</a></li>
      </ul>
    </li>
    <li><a href="#license">License</a></li>
    <li><a href="#contact">Contact</a></li>
  </ol>
</details>


## About The Project

The project consists of 3 sub-projects: design system, api and front-end.<br />
This project is the front-end responsible for interacting with users and clients, integrating with the api and using the design system.<br />

Features:

- Displays list of products;
- Allows the user to create a shopping cart, where it is possible to: add, edit and remove items.
- Functionality to buy the items in the shopping cart.

There is also a simple admin with a few pages:
- Products: add, edit, remove;


_New features will be added soon._


## Getting Started

This is an example of how you may give instructions on setting up your project locally.
To get a local copy up and running follow these simple example steps.

### Prerequisites

This is an example of how to list things you need to use the software and how to install them.
* npm
  ```sh
  npm install npm@latest -g
  ```

### Installation

1 - Clone the repo
```sh
git clone git@github.com:products-app/products-fe.git
```
Enter the project folder
```sh
cd products-fe
```

2 - Install packages
```sh
npm install
```

### Running the app

Running this app is simple, just follow the commands below:

Build the application:

```
npm run build
```

Run the application in the local environment:

```
npm run dev
```

You can also run lint to perform code checks, with the command below:
```
npm run lint
```

_Ps: You need to run [backend-api](https://github.com/products-app/products-api) in another terminal if you want to run it locally._

## Installed Packages

In this section there is a list explaining the function of each installed package.

### Lint e Prettier Config

- [ESLint](https://www.npmjs.com/package/eslint): ESLint serves as a utility for detecting and reporting patterns observed within ECMAScript/JavaScript code.
- [eslint-config-prettier](https://www.npmjs.com/package/eslint-config-prettier): Installed to 
disable all rules that are deemed unnecessary or could potentially clash with Prettier.
- [eslint-config-standard](https://www.npmjs.com/package/eslint-config-standard): This package is used when you want to manually rewrite ESLint specifications.
- [eslint-plugin-import](https://www.npmjs.com/package/eslint-plugin-import): The purpose of this plugin is to facilitate the linting of ES2015+ (ES6+) import/export syntax and to prevent problems related to misspelled file paths and import names.
- [eslint-plugin-prettier](https://www.npmjs.com/package/eslint-plugin-prettier): This package executes Prettier as an ESLint rule and reports any discrepancies as separate ESLint problems.
- [eslint-plugin-promise](https://www.npmjs.com/package/eslint-plugin-promise): This package enforces best practices for JavaScript promises.
- [eslint-plugin-react](https://www.npmjs.com/package/eslint-plugin-react): This package provides a recommended configuration that promotes good React practices.
- [eslint-plugin-react-hooks](https://www.npmjs.com/package/eslint-plugin-react-hooks): This package provides a recommended configuration that promotes good React Hooks practices.
- [eslint-plugin-react-refresh](https://www.npmjs.com/package/eslint-plugin-react-refresh): This package validates that your components can be updated safely with a quick update.


### Router 

- [react-dom](https://www.npmjs.com/package/react-dom): This package serves as the entry point to the DOM and server renderers for React. For this project it is used to create the client side of the route.
- [react-router-dom](https://reactrouter.com/en/main): this package creates a routing on the client side.

### Tests

- [@testing-library](https://testing-library.com/): tool to create tests.
- [@testing-library/dom](https://www.npmjs.com/package/@testing-library/dom): tool to create DOM tests in the front-end.
- [@testing-library/jest-dom](https://www.npmjs.com/package/@testing-library/jest-dom): tool to create DOM tests with element matchers for Jest.
- [@testing-library/react](https://www.npmjs.com/package/@testing-library/react): tool to create DOM tests. It provides light utility functions on top of react-dom and react-dom/test-utils.
- [@vitest/coverage-v8](https://www.npmjs.com/package/@vitest/coverage-v8): this package create the coverago for the tests.
- [jsdom](https://www.npmjs.com/package/jsdom): this package is a pure JavaScript implementation of many web standards for use with Node.js.
- [vitest](https://vitest.dev/): this package is a easily testing framework.

### Others

- [tailwindcss](https://tailwindcss.com/): this package is a CSS framework to write css in the classname markup.
- [postcss](https://postcss.org/): converts the codes of modern css framework into a css file.
- [autoprefixer](https://github.com/postcss/autoprefixer): this package is used to convert some modern css attributes into css that older browsers can interpret.
- [@vitejs/plugin-react-swc](https://www.npmjs.com/package/@vitejs/plugin-react-swc): This package has limited options to enable good performances and be transpiler agnostic.

### Github functionalities

1 - Github actions have been implemented to validate the quality of the code using the [CodeQL](https://codeql.github.com/).

Ps: You can also implement ci to run the application's unit tests. Set a minimum test coverage base and check for minimum test coverage.<br />
*It hasn't been implemented yet, but I intend to add it in the next tasks.*

<img width="500" alt="Screen Shot 2023-10-11 at 09 42 20" src="https://github.com/products-app/products-fe/assets/13439423/18598f7b-7358-4a14-8a88-0a47b664a4a2">
<br /><br />

2 - Configure Dependabot to create pull requests with lib updates. It runs once a week.

3 - Create a template for pull requests. Here's an example: [Pull Request Example](https://github.com/products-app/products-fe/pull/8)

4 - In this project, direct commits to the `main` branch have been blocked. To commit to `main`, you need to create at least one `feature` branch. See [Git Flow](https://danielkummer.github.io/git-flow-cheatsheet/).

For the gitflow to be complete, you still need to add other branches such as `develop`, `fix`, `hotfix`, `release` and create a base flow:
`feature` -> `develop` -> `release` -> `main`

I won't go into too much detail, but you can ask me about it.

In this case it wasn't necessary to create the complete flow for the time being, but large companies have this flow to maintain quality, create testable scopes in each environment.

<!-- LICENSE -->
## License

Distributed under the MIT License. See `LICENSE` for more information.


<!-- CONTACT -->
## Contact

Letícia Bernardo - [@letisgobabe](https://twitter.com/letisgobabe)


<p align="right">(<a href="#top">back to top</a>)</p>
