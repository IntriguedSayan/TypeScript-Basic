Basic things about TypeScript.
first TypeScript.


1. npm init -y
2. npm install typescript -g
3. check if typescript is installed or not `tsc -v`
4. Create a `src` folder, and write the basic TypeScript code inside index.ts
5. In package.json, inside scripts -> "build": "tsc --watch",
6. Create the tsconfig.json file, and paste the config given in the pre-class notes
7. Run npm run build to check the compiled .js file.

### Compilation V/s Transpilation

##### Compilation:

- Source code (High level language) -> Compiler -> some other language (generally low level language)
- Low level language is usually machine readable code, eg: binary, or bytecodes
- C, C++, `.exe`

Haskell, COBOL, Assembly languages, ....

##### Transpilation

- It generates code from High Level Language to another High Level Language
- Generated code is mostly human readable
- Transpiled code can go through another compilation step
- <h1>Hello world</h1> - JSX
- React.createElement("h1", null, "Hello world")
- from ES6; "const x = 1" to ES3 "var x = 1"

console.log(a) -> the variables are created first -> compiled
var a = 10;

- Depending on where the JS code is running, it can be both compiled and interpreted.
- V8 -> Just-In-Time compilation, NodeJs, Deno, Brave

#### Statically Types Language and Dynamically Typed language

#### Dynamically typed language

- The compiler has no idea about the "types" at the compile time.
- let name = "Masai"; let name;
- JS, Python, Ruby, etc..
- Generally slower
- Generally less safe.

#### Statically Typed Language

- The compiler knows the "types" at the compile time.
- C, C++, Rust, Java, Python, TypeScript,...
- int x; string y;
- Generally faster than dynamically typed language

#### TypeScript

- Statically typed language
- Superset of JS
- Just JavaScript
- TypeScript code -> Transpiled -> JavaScript

What, Why, How.