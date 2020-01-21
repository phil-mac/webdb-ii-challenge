
exports.up = function(knex) {
  return knex.schema.createTable('cars', tbl => {
    tbl.increments();

    tbl.string('vin', 128).unique().index().notNullable();
    tbl.string('make', 128).notNullable();
    tbl.string('model', 128).notNullable();
    tbl.decimal('mileage').notNullable();

    tbl.string('transmission', 128);
    tbl.string('title-status', 128);

    tbl.timestamps(true, true);

  })
};

exports.down = function(knex) {
  return knex.schema.dropTableIfExists('cars');
};
