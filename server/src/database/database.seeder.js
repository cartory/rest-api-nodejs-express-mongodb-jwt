//  REQUIRES
const database = require('../../config/database.config');

//  SEEDERS
const userSeeder = require('./seeders/user.seeder');
const roleSeeder = require('./seeders/role.seeder');

//  DB CONNECTION
database.connect();

//  DB SEEDER
async function seedDatabase(){
    // await roleSeeder.seed();
    await roleSeeder.make(5);
    // await userSeeder.seed();
    // userSeeder.make(10);
    process.exit(0);
}

// MESSAGE ON EXIT
process.on('exit', () => {
    console.log("DATABASE SEEDED");
});

//  RUNING DB SEEDER
seedDatabase();