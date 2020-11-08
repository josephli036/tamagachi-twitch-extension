# tamagachi-twitch-extension

Installation intructions

From the base project filter go into the twitch-tamagachi folder
`cd twitch-tamagachi`

Install dependencies
`npm install`

Then to run the app
`npm run serve`

To deploy the backend, Run the following from the root directory (not backend directory)
Make sure that you set your environmental varibales for heroku using `heroku config:set SECRET=...`
`git subtree push --prefix twitch-tamagachi-backend heroku master`
