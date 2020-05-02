
exports.up = function(knex) {
    return knex.schema.createTable('stock', function (table){
        table.string('id').primary();
        table.string('name').notNullable();
        table.string('_size').notNullable();
        table.string('type').notNullable();
        table.string('imageUrl').notNullable();
        
});


};

exports.down = function(knex) {
    return knex.schema.dropTable('stock');
};
