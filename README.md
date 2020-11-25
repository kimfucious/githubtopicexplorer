# GitHub Topic Explorer

## Assignment:

Your task is to build a React web application that displays all the "[topics](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#topic)" related to the term "react", using the GitHub GraphQL API.

The application should display how many "[stargazers](https://docs.github.com/en/free-pro-team@latest/graphql/reference/objects#stargazerconnection)" each topic has. A click on a topic should display the topics related to that topic, and how many stargazers they have. And so forth.

To interact with the Github GraphQL API you'll need to have

- a [Github API key](https://docs.github.com/en/free-pro-team@latest/graphql/guides/forming-calls-with-graphql#authenticating-with-graphql)
- You'll want to make use of the key in the .env file within your application

You may use whatever React framework or library you find useful. URL routing is optional.

## Evaluation:

- We will pay particular attention to the way the code is organized, and to the overall readability
- Unit tests will be greatly appreciated
- Design will be ignored, however usability and accessibility will be taken into consideration
- Remember to update this README with instructions on how to install, run and test your application
- Your first goal is to have a working app, but feel free to improve the application however you see fit
- We hope that you can complete the assignment within 2 hours but don't set any time constraints
- Please reach out per email or by opening an issue if anything is unclear or blocking you

Best of luck

## Dev Notes

- The app was bootstrapped with Create React App
- Axios is used for the api calls
- Redux was added to demonstrate its use
- Bootstrap for CSS
- React spinners for visual feedback during data loads (better UX)

### How to run app & test

1. git clone repo
2. cd into repo
3. run `npm i`
4. run `npm start`

### Future Improvements

- Code Structuring: if this were more than a toy app, I'd consider the overall architecture of the application, separating out various pages and components into a structure that matches that.

- Refactoring: I'd move the graphql queries into the graphql directory along with mutations and subscriptions for better organization and less clutter in the action creators. Consolidate the action creators to reduce duplicate code.

- Additional Features: Perhaps add search for things other than just `react` for the topic. Add pagination for the repo topics. Better, global error handling.
