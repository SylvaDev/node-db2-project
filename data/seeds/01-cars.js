// STRETCH
const cars = [
    {
        vin: '1C3LC55RX8N297984',
        make: 'toyota',
        model: 'camry',
        mileage: 125045,
        title: 'clear',
        transmission: 'automatic'
    },
    {
        vin: '5NPDH4AE5DH358716',
        make: 'nissan',
        model: 'altima',
        mileage: 77000,
        title: 'clear',
        transmission: 'manual'
    },
    {
        vin: '1GDW7LCG4B1169561',
        make: 'honda',
        model: 'civic',
        mileage: 245000,
        title: 'salvaged',
    },    {
        vin: 'KNAFX4A82E5074707',
        make: 'ford',
        model: 'raptor',
        mileage: 12045,
    },    {
        vin: '2G61N5S35E9208367',
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