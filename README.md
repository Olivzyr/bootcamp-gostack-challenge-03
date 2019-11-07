
<p align="center">
  <img src="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/.github/logo.png?raw=true",>
  <br />
  <br />
  <br />
  <img src="https://img.shields.io/github/issues/SkullDarth/bootcamp-gostack-challenge-03">
  <img src="https://img.shields.io/github/forks/SkullDarth/bootcamp-gostack-challenge-03">
  <img src="https://img.shields.io/github/stars/SkullDarth/bootcamp-gostack-challenge-03">
  <img src="https://img.shields.io/github/license/SkullDarth/bootcamp-gostack-challenge-03?logoColor=MIT">


GoStack - [Challenge 3: Gympoint, continuing the application](#)

   > "How you look at it is pretty much how you'll see it." **Rasheed Ogunlaru**
</p>

## **About the challenge:**
#### **Developer one RESTful back-end system whe can control and manager gym's using Postgres, Redis and Node.JS**
---
* The objective of this challenge is to create a second part of backend API gym systems whe can save, search, controlling authentication services and edit students matriculated in the gym.

* To check the first part of project construction in function please, click [here][challange02].

* To view this project in function please. click [here](https://github.com/SkullDarth/bootcamp-gostack-challenge-03#resources-and-procedures).


---
# Resources and Procedures

## Technologies APIs and Libraries used to create this project

This project was developed with the following technologies:

- [Express][express]
- [Node.js][nodejs]
- [Sequelize][sequelize]
- [node-postgres][pg] and [pg-hstore][pg-hstore]
- [Json Web Tokens][jwt]
- [Nodemailer][nodemailer]
- [Bee Queue][bee]
- [dotenv][dotenv]
- [bcryptjs][bcryptjs]
- [Date-fns][date-fns]
- [express-handlebars][exphbs]
- [VS Code][vc] with [EditorConfig][vceditconfig] and [ESLint][vceslint]

## Developed Features

* Api for application admin session with JWT.
* Administrator authentication middleware.
* Apis for creation, update students in the gym.
* Apis for CRUD of plans offered by the academy.
* Api for checkin of students enrolled in the gym.
* Api for consultation of checkins made by students enrolled in the academy.
* CRUD Apis for student enrollment at the academy.
* Queue for sending emails to enrolled students.
* Apis for students to create and consult request for help for academy administrators.
* Just for administrators to consult and respond to student requests for help.
* Email queue for sending responses to academy students.

---

## Running for First Time

To clone and run this application, you'll need [Git](https://git-scm.com), [Docker](https://www.docker.com), [Node.js v10.16][nodejs] or higher + [Yarn v1.13][yarn] or higher installed on your computer. From your command line:

```bash
# Clone this repository
$ git clone https://github.com/SkullDarth/bootcamp-gostack-challenge-03.git gympoint-backend

# Go into the repository
$ cd gympoint-backend

# Install dependencies
$ yarn install

# Run Postgres
$ docker run --name database -e POSTGRES_PASSWORD=docker -d -p 5432:5432 -d postgres:11

# Run Redis
$ docker run --name redis -p 6379:6379 -d -t redis:alpine

# Create a new database named `gympoint` and run the following commands:
# Run Migrations and Seeds
$ yarn sequelize db:migrate
$ yarn sequelize db:seed:all

# Run Nodemailer
$ yarn queue

# Run the Server
$ yarn dev
```
#### There is an [Insomnia file](./insomnia.json) you can load on your Insomnia to test the routes.

---

## Project Tree
```
├── LICENSE.md
├── README.md
├── insomnia.json
├── nodemon.json
├── package.json
├── src
|  ├── app
|  |  ├── controllers
|  |  |  ├── CheckinController.js
|  |  |  ├── EnrollmentController.js
|  |  |  ├── HelpOrderController.js
|  |  |  ├── PlanController.js
|  |  |  ├── SessionController.js
|  |  |  ├── StudentController.js
|  |  |  └── UserController.js
|  |  ├── jobs
|  |  |  ├── EnrollmentMail.js
|  |  |  └── HelpOrderMail.js
|  |  ├── middlewares
|  |  |  └── auth.js
|  |  ├── models
|  |  |  ├── Checkin.js
|  |  |  ├── Enrollment.js
|  |  |  ├── HelpOrder.js
|  |  |  ├── Plan.js
|  |  |  ├── Student.js
|  |  |  └── User.js
|  |  └── views
|  |     └── emails
|  |        ├── enrollment.hbs
|  |        ├── helpOrder.hbs
|  |        ├── layouts
|  |        |  └── default.hbs
|  |        └── partials
|  |           └── footer.hbs
|  ├── app.js
|  ├── config
|  |  ├── auth.js
|  |  ├── database.js
|  |  ├── mail.js
|  |  └── redis.js
|  ├── database
|  |  ├── index.js
|  |  ├── migrations
|  |  |  ├── 20191019062320-create-users.js
|  |  |  ├── 20191022003954-create-students.js
|  |  |  ├── 20191101013800-create-plans.js
|  |  |  ├── 20191102171859-create-enrollments.js
|  |  |  ├── 20191104035006-create-checkins.js
|  |  |  └── 20191104213546-create-help-orders.js
|  |  └── seeds
|  |     └── 20191019173847-admin-user.js
|  ├── lib
|  |  ├── Mail.js
|  |  └── Queue.js
|  ├── queue.js
|  ├── routes.js
|  └── server.js
└── yarn.lock

directory: 3086 file: 17514
ignored: directory (84)
   ```
---

## Project in function

### - Insomnia: Routes and requests

![Insomnia Gympoint][Insomnia Gympoint]

### - Postgres: Structure database

![Postgres Gympoint database][Postgres Gympoint database]


### - Mailtrap: Emails notifications

![Mailtrap test][Mailtrap test]


## License
This project is under the MIT license. See the [LICENSE](./LICENSE) for more information.

---

#### Made by Yan Oliveira [Get in touch!](https://www.linkedin.com/in/yan-brito/)




[challange02]: https://github.com/SkullDarth/bootcamp-gostack-challenge-02

[gympoint logo]: https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/.github/logo.png?raw=true

[Insomnia Gympoint]: https://user-images.githubusercontent.com/16024701/68344233-4c806500-00cd-11ea-891c-c3844734c0cd.png
[Postgres Gympoint database]: https://user-images.githubusercontent.com/16024701/68344327-881b2f00-00cd-11ea-91ee-fa1db12141b0.png
[Mailtrap test]:https://user-images.githubusercontent.com/16024701/68344420-bbf65480-00cd-11ea-8764-a7f2c50fb635.png

[issues]: https://img.shields.io/github/issues/SkullDarth/bootcamp-gostack-challenge-03
[forks]: https://img.shields.io/github/forks/SkullDarth/bootcamp-gostack-challenge-03
[stars]: https://img.shields.io/github/stars/SkullDarth/bootcamp-gostack-challenge-03
[license]: https://img.shields.io/github/license/SkullDarth/bootcamp-gostack-challenge-03?logoColor=MIT

[nodejs]: https://nodejs.org/
[yarn]: https://yarnpkg.com/
[vc]: https://code.visualstudio.com/
[vceditconfig]: https://marketplace.visualstudio.com/items?itemName=EditorConfig.EditorConfig
[vceslint]: https://marketplace.visualstudio.com/items?itemName=dbaeumer.vscode-eslint
[express]: https://expressjs.com
[sequelize]: https://sequelize.org
[pg]:https://github.com/brianc/node-postgres
[pg-hstore]: https://github.com/scarney81/pg-hstore
[jwt]: https://jwt.io/
[nodemailer]: https://nodemailer.com/about/
[bee]: https://bee-queue.com/
[dotenv]: https://github.com/motdotla/dotenv#readme
[bcryptjs]: https://github.com/dcodeIO/bcrypt.js/
[date-fns]: (https://date-fns.org/)
[exphbs]: https://github.com/ericf/express-handlebars

