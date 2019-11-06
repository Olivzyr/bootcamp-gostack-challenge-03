
<p align="center">
  <img src="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/.github/logo.png?raw=true">


   GoStack
  [Challenge 3: Gympoint, continuing the application](#)

   > "How you look at it is pretty much how you'll see it." **Rasheed Ogunlaru**
</p>

## **About the challenge:**
#### **Developer one system whe can control and manager gym's using Postgres, Redis and Node.JS**
--------------------------------------------------------------
* The objective of this challenge is to create a second part of backend API gym systems whe can save, search, controlling authentication services and edit students matriculated in the gym.

* To check the first part of project construction in function please, click [here](https://github.com/SkullDarth/bootcamp-gostack-challenge-02).

* To view this project in function please. click [here](#).


--------------------------------------------------------------
# Resources and Procedures

## Technologies APIs and Libraries Used to create this project

* Postgres - Relational Data Base
* Redis - NoSQL Database to storage queue emails
* bcryptjs - Encryption services
* bee-queue - Creating in-app services using Redis
* cors - Application API Access and Security
* date-fns - Date Handling
* dotenv - Environment Variables
* express - Apis Development
* jsonwebtoken - JWT Authentication
* nodemailer - Sending Emails
* express-handlebars - Email Layout Development
* nodemailer-express-handlebars - Email Layout Development
* pg - For use with postgress database
* pg-hstore - For use with postgress database
* sequelize - Relational Object Mapping
* yup - Data Validation.
* eslint - Code Standardization
* nodemon - Statrt and automatic restart of the application during development.
* prettier - Code Formatter
* sucrase - Using the ES6 syntax pattern
* youch - Message handling for the development and production environment

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

## Project Tree
```
├── README.md
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
   ```

### - Insomnia requisitions

![Insomnia Gympoint](https://user-images.githubusercontent.com/16024701/68344233-4c806500-00cd-11ea-891c-c3844734c0cd.png)

### - Postgres structure database

![Postgres Gympoint database](https://user-images.githubusercontent.com/16024701/68344327-881b2f00-00cd-11ea-91ee-fa1db12141b0.png)


### - Mailtrap testing emails notifications

![Mailtrap test](https://user-images.githubusercontent.com/16024701/68344420-bbf65480-00cd-11ea-8764-a7f2c50fb635.png)

