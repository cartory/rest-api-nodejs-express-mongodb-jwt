//  REQUIRES
const Role = require('../../models/role');
const faker = require('faker');

//  ROLE SEEDER
module.exports = {
    seed: async () => {
        var roles = [
            {name: 'user', description: 'user', level: '3'},
            {name: 'moderator', description: 'moderator', level: '2'},
            {name: 'admin', description: 'admin', level: '1'},
        ];
        // console.log(roles);
        await Role.insertMany(roles);
        console.log(Role.modelName, "seeded succesfully");
    },

    make: async (quantity) => {
        while (quantity > 0) {
            await Role.create({
                name: faker.random.arrayElement(["moderator", "user"]),
                description: faker.lorem.slug(3),
                level: faker.random.arrayElement([1, 2])
            });
            quantity--;
        }
        console.log(Role.modelName,"made succesfully");
    }
}