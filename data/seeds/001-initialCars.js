
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars')
    .truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        {vin: "45v6r45", make: "Tesla", model: "Model-S", mileage: 34.1},
        {vin: "fghn784", make: "Honda", model: "CRV", mileage: 21.7},
        {vin: "3vfdv7a", make: "Tesla", model: "Model-Y", mileage: 32.3}
      ]);
    });
};
