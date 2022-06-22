# Autocomplete challenge

The project was developed in pure React according to this constraints: 
<img width="1011" alt="Screen Shot 2022-06-20 at 11 28 02" src="https://user-images.githubusercontent.com/71982936/174624042-3a5d7df7-06bf-476e-a95b-78b775b556b9.png">

Please prepare an auto-complete component in React TypeScript.

1. You cannot use any 3rd party libraries - only pure React and internal DOM
functions.
2. You should use typescript and write proper interfaces and types.
3. The function to filter the data should be asynchronous. You can use mock data
(such as a JSON array), but the function which uses it should be asynchronous
(similar to a real REST call).

4. It should have basic working CSS. No need for anything fancy (such as drop-
shadows etc), but should look decent.

5. You need to handle all non-standard/edge use-cases - it should have a perfect
user-experience.
6. Highlight the matching part of the text, in addition to showing it.
7. No external state management libraries (refer to #1 as well), only native React
method.
8. Use only functional component with hooks.
9. Shortcuts and hacks are perfectly ok - but you have to add comments on what
are you doing there and why. You should either write production ready code or
include comments on what needs to be changed for production.
10. Add a README.md file explaining how to run the project.
11. Bonus #1: load data using a real API call to some resource.

## 1. To run

Follow the steps bellow to enjoy it:

Note: You must to type the commands into the "root project" folder.

### 1.1 Install dependencies

To install all dependencies of the project

```bash
$ yarn
```

Boirlerplate:
-   Vite (see here full explanation https://vitejs.dev/guide/why.html)

### 1.2 Up the server

Expose the project folder

```bash
$ yarn dev
```

### 1.3 Enjoy it! =D

#### 1.3.1 To Access

```bash
http://localhost:3000
```

#### 2.1 IDE & Runtime:

-   VSCode (https://code.visualstudio.com/download)
-   Node.js (https://nodejs.org/en/download/)
-   Vite (Build tool - https://vitejs.dev/)

#### 2.2 Extentions:

-   ESlint Plugin (Airbnb Style Guide)
-   Prettier Plugin
-   SCSS IntelliSense
-   EditorConfig

#### 2.3 VSCode: User Settings (Prettier)

-   "prettier.eslintIntegration": true

#### 2.4 VSCode: User Settings (Editor Config)

-   "editor.formatOnSave": true,

#### 2.5 Chrome Extentions:

-   ColorZilla

#### 2.7 Concepts adopted:

-   Clean Code - (https://balta.io/artigos/clean-code)
-   JavaScript - AirBNB Style Guide (https://github.com/airbnb/javascript)
-   SCRUM Agile Method (http://scrummethodology.com/)
-   

##### Good codding!


## Improvements Opportunities 

- Improve the UX in order to have a scroll based drop-down hits
- Improve the API part as mentioned on SearchBox component
- Write some unit test
- Accepetance test
- Buid the project and focus on performance improvements

