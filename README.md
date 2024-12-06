# Magic 8-Ball [![License](https://img.shields.io/github/license/Chris-1101/boxecho.svg)](https://github.com/Chris-1101/boxecho/blob/master/LICENSE.md)
![Magic 8-Ball](https://user-images.githubusercontent.com/28808441/54500297-a30d1900-491b-11e9-84e5-2b82606b9ccb.png)

### Run the Server Locally
```
git clone https://github.com/Chris-1101/magic-8ball.git && \
cd magic-8ball && \
npm install && \
npm start
```
You should be able to access the server at [http://localhost:3000](http://localhost:3000)

### Project Overview
|      Role | Framework    |
| --------: | ------------ |
|  Back-End | Node.js      |
| Front-End | React.js     |
|  REST API | Express.js   |
|       ORM | Sequelise.js |
|        DB | SQLite       |

### Directory Structure
```
app
├─ db/
│  └─ config.js        (database config, migration and seeds)
├─ models/             (sequelise models)
│  ├─ answerType.js
│  ├─ answer.js
│  └─ question.js
├─ public/             (static resources)
│  ├─ images/
│  │  └─ ...
│  ├─ javascripts/
│  │  └─ ajax.js       (AJAX script to send requests without refreshing page)
│  └─ stylesheets/
│     └─ style.less    (main stylesheet)
├─ routes/
│  ├─ index.js         (router/controller for requests to /)
│  └─ stats.js         (router/controller for requests to /stats)
└─ views/
   └─ ...              (react view templates)
app.js                 (entry point/server)
```

### Database Schema
![DB Schema](https://user-images.githubusercontent.com/28808441/54500298-a30d1900-491b-11e9-9bd6-7d7e09d0464b.png)

### Potential Imporvements
* Divide `style.less` into component modules
* Improve 8-ball reply animations
* Cleaner `Sequelise` setup
* Statistics Page Style
* `Delete` CRUD Route
* Open Graph Headers
* Responsive Design
* Write Tests + CI

### Plotly API Limits :warning:

The service used for the statistics charts has a limit on API calls for free accounts like mine. Just a heads up in case the statistics page stop updating!
