# Douban Back-End

> Awesome douban DEMO **Back-End** created with Express

Font End: [Douban](https://github.com/jeneser/douban)
Live Demo: [Douban Back-End](https://douban.herokuapp.com/)

# Getting started

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:3000
gulp
```

For detailed explanation on how things work, checkout the [generator-express](https://github.com/petecoop/generator-express)

# Deploy to heroku

``` bash
# Log in to your Heroku account
heroku login

# Initialize a git repository in a existing directory
cd douban-backend/
heroku git:remote -a your-repo

# Deploy your application
git add .
git commit -am "make it better"
git push heroku master
```

Learn more [Heroku](https://heroku.com/) and [Heroku CLI](https://devcenter.heroku.com/articles/heroku-cli)

# API

- Basic URI : `https://douban.herokuapp.com/`
- Create user
  - Path : `/user`
  - Method : `POST`
  - Status : `200`
- Query user
  - Path : `/user/:id`
  - Method : `GET`
  - Status : `200`

For detailed explanation on how things work. Please read the source code.
Next step : Perfect API document

# License

[MIT](https://github.com/jeneser/douban/blob/master/LICENSE) Copyright (c) 2017 Jeneser
