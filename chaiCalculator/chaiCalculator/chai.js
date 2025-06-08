function calculateChaiIngridients(numberofCups) {
    const waterPerCup = 200; // in ml
    const milkPerCup = 100; // in ml
    const teaLeavesPerCup = 5; // tablespoon
    const sugarPerCup = 10; // teaspoon

    const totalWater = numberofCups * waterPerCup;
    const totalMilk = numberofCups * milkPerCup;
    const totalTeaLeaves = numberofCups * teaLeavesPerCup;
    const totalSugar = numberofCups * sugarPerCup;

    console.log(`\nTo make ${numberofCups} cups of chai, you will need:`);
    console.log(`Water:${totalWater} ml`);
    console.log(`Milk:${totalMilk} ml`);
    console.log(`Tea Leaves(Majani):${totalTeaLeaves} tablespoons`);
    console.log(`Sugar(Sukari):${totalSugar} teaspoons`);
    console.log(`Enjoy your chai Bora!`);
}
// Prompt the user 
const input = prompt("Karibu! How many cups of Chai Bora would you like to make? ");
const numberofCups = Number(input);

// Call the  functon 
calculateChaiIngridients(numberofCups);