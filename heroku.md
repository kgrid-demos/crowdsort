
# Crowdsort On Heroku
The crowdsort app is running on Heroku. [Crowdsort Heroku](https://crowdsort.herokuapp.com/).  The app consists of static content and api backend the communicates with MongoDB.  MongoDB is also hosted on the heroku instance.

The instance own by the heroku kgrid team.  Create a [Heroku login](https://signup.heroku.com/) or you can use an existing login.  Have a kgrid team memeber add you to the team. 

Once a memeber you should be able to navigate to the [Heroku Dashboard](https://dashboard.heroku.com/apps/crowdsort)

## Getting Started 

- Install [Heroku CLI](https://devcenter.heroku.com/categories/command-line)

## Deploying

- Crowdsort root directory
- herkou login ```heroku login```
- add heroku as a remote repo ```heroku git:remote -a crowdsort```
- ```git remote -v``` verifies that you not have to remotes github and git heroku
- Push to heroku repo ```git push heroku master``` or if deploying from a branch besides maste r```git push heroku heroku:master```
- Push custom branch to Heroku
  ```
  git push <branch name> heroku:master
  ```

## Useful
- [Heroku and Git](https://devcenter.heroku.com/articles/git)
