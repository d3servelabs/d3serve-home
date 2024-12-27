# d3serve-home

[WEBSITE](https://d3serve-home.vercel.app/) |
[REPOSITORY](https://github.com/d3servelabs/d3serve-home/)
[FIGMA](<https://www.figma.com/design/Otm6uc726w4rl3G4u3bVf4/Namefi-Home-(https%3A%2F%2Fnamefi.io)?node-id=247-12427&m=dev>)

A brief description of your project goes here.

## Table of Contents

- [Installation](#installation)
- [Available Scripts](#available-scripts)
- [Development](#development)
- [Database](#database)
- [Building and Deployment](#building-and-deployment)
- [Code Quality and Formatting](#code-quality-and-formatting)
- [Testing](#testing)
  - [Unit and Integration Tests](#unit-and-integration-tests)
  - [End-to-End Tests](#end-to-end-tests)
  - [Component Tests](#component-tests)
- [Other Utilities](#other-utilities)
- [Contributing](#contributing)
- [License](#license)

## Installation

To set up the project, run:

```bash
pnpm run bootstrap
```

This will install all dependencies, format code, lint, and run type-checks.

## Available Scripts

Here are the scripts available for this project:

- **Development**
  - `pnpm run dev`: Starts the development server with Turbopack.
- **Building and Deployment**
  - `pnpm run build`: Builds the application for production.
  - `pnpm run start`: Starts the production server.
- **Code Quality and Formatting**
  - `pnpm run lint`: Lints code and fixes issues automatically.
  - `pnpm run prettier`: Formats code using Prettier.
  - `pnpm run type`: Runs TypeScript type-checking.
  - `pnpm run format`: Runs Prettier, lint, and type-checking.
  - `pnpm run bootstrap`: Installs dependencies and performs initial setup.
- **Testing**
  - `pnpm run test`: Runs unit and integration tests using Jest.
  - `pnpm run test:watch`: Runs tests in watch mode.
  - `pnpm run e2e:headless`: Runs end-to-end tests in headless mode using Playwright.
  - `pnpm run e2e:ui`: Runs end-to-end tests with a UI.
- **Storybook**
  - `pnpm run storybook`: Starts Storybook on port 6006.
  - `pnpm run build-storybook`: Builds the Storybook static site.
- **Sitemap**
  - `pnpm run postbuild`: Generates a sitemap.
  - `pnpm run sitemap`: Runs the sitemap generation script.
- **Utilities**
  - `pnpm run clean`: Cleans `node_modules`, `.next`, and `.turbo` directories.
  - `pnpm run svgr`: Converts SVG files into React components.
- **Scripts**
  - `pnpm run scripts:checks`: Runs custom checks script.
  - `pnpm run scripts:seeds`: Runs database seeding scripts.

## Development

To start the development server, run:

```bash
pnpm run dev
```

## Database

```bash
pnpm run scripts:seeds
```

## Building and Deployment

To build the project for production, use:

```bash
pnpm run build
```

To start the production server, run:

```bash
pnpm run start
```

## Code Quality and Formatting

This project enforces code quality and formatting standards. Run the following scripts to maintain code consistency:

- **Linting**: `pnpm run lint`
- **Formatting**: `pnpm run prettier`
- **Type-Checking**: `pnpm run type`
- **All-in-One**: `pnpm run format`

## Testing

### Unit and Integration Tests

Run unit and integration tests using Jest:

```bash
pnpm run test
```

To run tests in watch mode:

```bash
pnpm run test:watch
```

### End-to-End Tests

Run end-to-end tests using Playwright:

- Headless mode:

  ```bash
  pnpm run e2e:headless
  ```

- With UI:

  ```bash
  pnpm run e2e:ui
  ```

### Component Tests

Develop and test components using Storybook:

- Start Storybook:

  ```bash
  pnpm run storybook
  ```

- Build Storybook:

  ```bash
  pnpm run build-storybook
  ```

## Other Utilities

- **Clean Project**: Removes `node_modules`, `.next`, and `.turbo` directories:
  ```bash
  pnpm run clean
  ```
- **Generate React Icons from SVG**:
  ```bash
  pnpm run svgr
  ```

## Contributing

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a feature branch: `git checkout -b feature-name`.
3. Commit your changes: `git commit -m 'Add feature'`.
4. Push to the branch: `git push origin feature-name`.
5. Open a pull request.

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
