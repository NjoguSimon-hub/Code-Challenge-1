function calculateBodaFare(distanceInKm) {const baseFare = 50; // Fied fare
const farePerKm = 15; // Fare per kilometer

const exctrafare =distanceInKm * chargePerKm;
const totalFare = baseFare + exctrafare;

console.log(`Uko kwote? Iyo ni ${distanceInKm} km:`);
console.log(`Ukikali Pikipiki:KES ${totalFare} `);
console.log(`Mpaka Uko: KES${exctrafare} `);
console.log(`Total Fare: KES ${totalFare} `);
console.log(`Panda Pikipiki!`);
}
// Prompt the user (only work in brower)
const input = prompt("Unafika wapi Mkubwa?Kilomita ngapi? ");
const distanceInKm = Number(input);
// Call the function
calculateBodaFare(distanceInKm);

    