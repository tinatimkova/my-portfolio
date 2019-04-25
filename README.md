# Installation

clone

```
npm i
npm start
```

# Deployment

Change homepage in package

#### Note: User Pages can only be run from master branch and additional changes need to be made

##### Step 2: Install gh-pages and add deploy to scripts in package.json
Now, whenever you run npm run build, you will see a cheat sheet with instructions on how to deploy to GitHub Pages.

To publish it at https://myusername.github.io/my-app, run:

```
npm install --save gh-pages
```

Alternatively you may use yarn:

```
yarn add gh-pages
```

Add the following scripts in your package.json:

```
  "scripts": {
+   "predeploy": "npm run build",
+   "deploy": "gh-pages -d build",
    "start": "react-scripts start",
    "build": "react-scripts build"
}
```

The predeploy script will run automatically before deploy is run.
If you are deploying to a GitHub user page instead of a project page you'll need to make one additional modification:

Tweak your package.json scripts to push deployments to master:
```
  "scripts": {
    ...
    "predeploy": "npm run build",
-   "deploy": "gh-pages -d build",
+   "deploy": "gh-pages -b master -d build"
}
```
##### Step 3: Deploy the site by running npm run deploy
Then run:

```
npm run deploy
```
