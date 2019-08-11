# Node.js Technical Test

Simple base Express API, used for assessing JavaScript backend skills at
Zagalabs.

## Quick Start
1. Clone the repository: `git clone https://github.com/zagalabs/node-test`.
2. Install the dependencies: `npm install`.
3. Start the server: `npm start`.

## Code Style
This project uses ESLint and Prettier, as tools for enforcing a consistent code
style. Please make sure you follow the given configurations, which you can find
in `.eslintrc.yaml` and `.prettierrc.yaml`.

## Testing
Our main testing tools are [Jest](https://jestjs.io/) and
[Supertest](https://github.com/visionmedia/supertest).

### Running Tests & Reporting Coverage
To run all available tests, enter `npm test` in your CLI. If you'd rather have
a more TDD-like flow, use `npm run test:watch` to run tests in watch mode; it
not only executes test suites after a file change is detected, but also runs
only the tests relevant to those changes.

For checking the current code coverage, run `npm test:coverage`.

### Writing Tests
You will find an example of a very simple test in
`api/__tests__/health.test.js`. Read Supertest's documentation to learn how to
test more complex scenarios, if ever required.

For all test suites, `global.api` will be assigned to an instance of the API
server, created with Supertest; that means you will hardly need to do any
setup, unless you need more complex configurations. If that's the case, any
customisations can be done in `config/test.setup.js`.
