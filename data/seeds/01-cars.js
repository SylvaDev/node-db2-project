// STRETCH
const cars = [
    {
        vin: '1111111111111',
        make: 'toyota',
        model: 'camry',
        mileage: 125045,
        title: 'clear',
        transmission: 'automatic'
    },
    {
        vin: '2222222222222',
        make: 'nissan',
        model: 'altima',
        mileage: 77000,
        title: 'clear',
        transmission: 'manual'
    },
    {
        vin: '1212121212123',
        make: 'honda',
        model: 'civic',
        mileage: 245000,
        title: 'salvaged',
    },    {
        vin: '3232451245874',
        make: 'ford',
        model: 'raptor',
        mileage: 12045,
    },    {
        vin: '6589457852145',
        make: 'dodge',
        model: 'caravan',
        mileage: 5044,
        title: 'clear',
        transmission: 'automatic'
    },
]

exports.seed = async function(knex) {
    await knex('cars').truncate()
    await knex('cars').insert(cars)
}