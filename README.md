
<p align="center">
  <img src="https://github.com/Rocketseat/bootcamp-gostack-desafio-02/blob/master/.github/logo.png?raw=true">


   GoStack
  [Challenge 3: Gympoint, continuing the application](#)

   > "Simplicity is the ultimate sophistication." **Leonardo Da Vinci**
</p>

## **About the challenge:**
#### **Developer one system whe can control and manager gym's using MongoDB, Postgres, Redis and Node.JS**
--------------------------------------------------------------
* The objective of this challenge is to create a second part of backend API gym systems whe can save, search, controlling authentication services and edit students matriculated in the gym.

* To check the first part of project construction in function please, click [here](https://github.com/SkullDarth/bootcamp-gostack-challenge-02)


--------------------------------------------------------------
# Procedures

## Administrator funcionalities
- [x] Create migration table named plans with sequelize;
- [x] yarn sequelize migration:create --name=plans
- [x] Add coluns named title, duration, price, created_at, updated_at
- [x] Send migration to database (yarn sequelize db:migrate)
- [x] Create model for plans migration
- [x] Create routes for model plans
- [x] Create PlanController to group model, migration and route functionalities
- [] Create migration enrollment to connect student and plans migrations tables.
- [] Create model enrollment to struct database table for controller
- [] Create EnrollmentController to insert route crud functions.
