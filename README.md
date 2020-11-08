# tamagachi-twitch-extension

Installation intructions

From the base project filter go into the twitch-tamagachi folder
`cd twitch-tamagachi`

Install dependencies
`npm install`

Then to run the app
`npm run serve`

To deploy the backend, Run the following from the root directory (not backend directory)
`git subtree push --prefix twitch-tamagachi-backend heroku master`
