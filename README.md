# serverless-preval

A simple example of how to apply [`babel-plugin-preval`](https://github.com/kentcdodds/babel-plugin-preval) to run JS snippets on build time. Making code simpler by removing unrelated (non business-related) code, with flexible and explicit manipulations. It's just JS there, you know?!

## About this example

It's a [serverless](https://serverless.com) project, using webpack to reduce bundle size.

The snippet read some (possible sensible) content from a file (`message.txt`), that will be placed inside the code. It uses `babel-node` for local development and `webpack` for production bundles.

## Contribution

Please, feel free to open issues with questions and suggestions.