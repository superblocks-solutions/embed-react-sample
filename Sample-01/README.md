# Superblocks Embed React SDK Sample Application

This sample demonstrates the integration of [Superblocks Embed React SDK](https://github.com/superblocksteam/embed-react) into a React application created using [create-react-app](https://reactjs.org/docs/create-a-new-react-app.html).

The sample is a companion to the [Auth0 React SDK Quickstart](https://auth0.com/docs/quickstart/spa/react).

## Project setup

Use `npm` to install the project dependencies:

```bash
npm install
```

## Configuration

### Configure credentials

The project needs to be configured with an Auth0 domain and client ID in order for the authentication flow to work.

To do this, first copy `src/auth_config.json.example` into a new file in the same folder called `src/auth_config.json`, and replace the values with Auth0 application credentials provided by Kris.

```json
{
  "domain": "{PROVIDED AUTH0 DOMAIN}",
  "clientId": "{PROVIDED AUTH0 CLIENT ID}",
  "audience": "{PROVIDED AUTH0 API_IDENTIFIER}",
}
```

## Run the sample

### Compile and hot-reload for development

This compiles and serves the React app and starts the backend API server on port 3001.

```bash
npm run dev
```

## Start Embedding

Go to the [Superblocks docs](https://docs-git-embedded-app-beta-superblocks.vercel.app/applications/embedded-apps/) to learn how to embed a Superblocks App into the app.
