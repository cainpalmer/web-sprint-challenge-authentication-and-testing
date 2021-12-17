exports.seed = function(knex, Promise) {
    return knex('users')
    .truncate()
    .then(function() {
        return knex('users').insert([
            {username: 'Cain', password: '1212'},
            {username: 'Joe', password: '2121'},
            {username: 'Jake', password: '3434'},
            {username: 'Lap', password: '4343'},
        ])
    })
}