/*
   Name:        Programming Assignment 2 (index.js)
   Purpose:     Let's a user explore different Amazonian Habitats

   Author:      Amogh Merudi
   Created:     13-Dec-2023
   Updated:     22-Dec-2023
*/

//This is required to get input from the user in the console.
const readline = require('readline-sync');

console.log("Hey! How's it going!");
console.log("Welcome to the Amazonian Habitat!");
console.log("");

//Declaring an array of habitats and displaying them
let habitats = ["SAVANNAS", "FLOODPLAIN FORESTS", "GRASSLANDS", "SWAMPS"];
habitats = habitats.sort();
console.log("Habitats available: ");
for (i in habitats) {
  console.log(habitats[i]);
}

//TAking input from the user for if they do or do not want to add their habitat to the array
let userDecision;

//Taking input from the user of the habitat they want to explore
let userHabitatInput = prompt("Enter a habitat you would like to explore: ");
console.log("");
userHabitatInput = userHabitatInput.toUpperCase(); userHabitatInput = userHabitatInput.trim();

try {
  userHabitatInput = prompt("Enter a habitat you would like to explore: ");
  console.log("");

  userHabitatInput = userHabitatInput.toUpperCase();
  userHabitatInput = userHabitatInput.trim();
}

catch (err) {
  console.log("Error: " + err.message);
  
  userHabitatInput = prompt("Enter a habitat you would like to explore: ");
  console.log("");
  userHabitatInput = userHabitatInput.toUpperCase();
  userHabitatInput = userHabitatInput.trim();
}

//Error checking for if userHabitatInput is not a string
while (!(isNaN(userHabitatInput))) {
  userHabitatInput = prompt("Enter a habitat you would like to explore: ");
  console.log("");
  userHabitatInput = userHabitatInput.toUpperCase();
  userHabitatInput = userHabitatInput.trim();
}

/* while (!(typeof userHabitatInput == String)) {
   userHabitatInput = prompt("Enter a habitat you would like to explore: ");
   console.log("");
   userHabitatInput = userHabitatInput.toUpperCase();
   userHabitatInput = userHabitatInput.trim();

   if (typeof userHabitatInput == String) {
      break;
   }
} */

/* while((typeof userHabitatInput == Int) || (typeof userHabitatInput == Float) || (typeof userHabitatInput == Double)){
   userHabitatInput = prompt("Enter a habitat you would like to explore: ");
   console.log("");
   userHabitatInput = userHabitatInput.toUpperCase();
   userHabitatInput = userHabitatInput.trim();
} */


/** 
* Function for if the user enters a habitat which isn't a part of the array
*/
const decision1 = () => {
  if (!habitats.includes(userHabitatInput)) {
    userDecision = readline.question("This habitat doesn't seem to be in the list of habitats provided. Would you like to add it to the list of habitats. Enter yes or no: ");
    console.log();
    userDecision = userDecision.toUpperCase();
    userDecision = userDecision.trim();

    //Error checking for if userDecision is not a string
    while (!(isNaN(userDecision))) {
      userDecision = readline.question("This habitat doesn't seem to be in the list of habitats provided. Would you like to add it to the list of habitats. Enter yes or no: ");
      console.log();
      userDecision = userDecision.toUpperCase();
      userDecision = userDecision.trim();
    }
  }
}

/** 
* Contains habitat info
*/
const habitatInfo = () => {
  if (userHabitatInput == "SAVANNAS") {
    //Tells the position of savannas in the array
    let savannaPosition = (habitats.findIndex(habitat => habitat == "SAVANNAS")) + 1;
    console.log(`Savannas is located at position ${savannaPosition}`);
    console.log("");

    //DEclaring an array which contains teh animals in the habitat and prints them
    let savannaAnimals = ["AFRICAN ELEPHANTS", "WILDEBEESTE", "WARTHOG", "MEERKAT"];
    console.log("Animals available: ");
    let temp = 1;
    for (i in savannaAnimals) {
      console.log(`Animal ${temp}: ${savannaAnimals[i]}`);
    }
    console.log();

    //Taking input from the user for which animal they would like to know about 
    let savannaAnimalChoice = prompt("Choose one animal from the list provided: ")
    savannaAnimalChoice = savannaAnimalChoice.toUpperCase();
    savannaAnimalChoice = savannaAnimalChoice.trim();

    //Error checking for if savannaAnimalChoice is not a string
    while (!(isNaN(savannaAnimalChoice))) {
      savannaAnimalChoice = prompt("Choose one animal from the list provided: ")
      savannaAnimalChoice = savannaAnimalChoice.toUpperCase();
      savannaAnimalChoice = savannaAnimalChoice.trim();
    }

    //if, else if to check and display the animal infos
    if (savannaAnimalChoice == "AFRICAN ELEPHANTS") {
      console.log("African elephants (Loxodonta africana) are the largest land animals on Earth and are one of the most iconic and well-known species in the animal kingdom. They are larger than their Asian counterparts. Adult males, known as bulls, can weigh between 5,000 to 14,000 pounds (2,268 to 6,350 kilograms), and stand about 8.2 to 13 feet (2.5 to 4 meters) tall at the shoulder.")
    }

    else if (savannaAnimalChoice == "WILDEBEESTE") {
      console.log("Wildebeests, also known as gnus, are large ungulates belonging to the genus Connochaetes. There are two species of wildebeest: the blue wildebeest (Connochaetes taurinus) and the black wildebeest (Connochaetes gnou). They are native to Africa and are best known for their massive annual migrations. They are medium to large-sized herbivores with a robust build and a distinctive appearance. They have a hump on their shoulders, a beard under their chin, and curved horns that sweep backward.")
    }

    else if (savannaAnimalChoice == "WARTHOG") {
      console.log("Warthogs (Phacochoerus africanus) are medium-sized, robust members of the pig family, and they are found in various habitats across sub-Saharan Africa. are easily recognized by their distinctive appearance. They have large, protruding tusks that curve upward, which are actually elongated canine teeth. Their bodies are covered in coarse bristly hair, and they often have a mane of longer hair along their backs. ")
    }

    else if (savannaAnimalChoice == "MEERKAT") {
      console.log("Meerkats (Suricata suricatta) are small, highly social mammals belonging to the mongoose family. They are native to southwestern Africa and are particularly well-known for their cooperative behavior and standing posture. They live in groups called mobs or clans, and they exhibit a complex social structure. A mob can consist of several family groups, each led by a dominant breeding pair. The alpha pair is usually the only one that breeds within the group.")
    }
  }

  else if (userHabitatInput == "FLOODPLAIN FORESTS") {
    //Tells the position of floodplain forests in the array
    let floodplainForestsPosition = (habitats.findIndex(habitat => habitat == "FLOODPLAIN FORESTS")) + 1;
    console.log(`Floodplain Forest is located at position ${floodplainForestsPosition}`);
    console.log("");

    //Declaring an array which stores the animals i the habitat and prints them
    let floodplainForestsAnimals = ["WATERFOWL", "HERONS", "BEAVERS", "SNAILS"];
    console.log("Animals available: ");
    let temp = 1;
    for (i in floodplainForestsAnimals) {
      console.log(`Animal ${temp}: ${floodplainForestsAnimals[i]}`);
    }
    console.log();

    //Taking input from the user for which animal they would like to know about
    let floodplainForestsAnimalChoice = prompt("Choose one animal from the list provided: ")
    floodplainForestsAnimalChoice = floodplainForestsAnimalChoice.toUpperCase();
    floodplainForestsAnimalChoice = floodplainForestsAnimalChoice.trim();

    //Error checking for if floodplainForestsAnimalChoice is not a string
    while (!(isNaN(floodplainForestsAnimalChoice))) {
      floodplainForestsAnimalChoice = prompt("Choose one animal from the list provided: ")
      floodplainForestsAnimalChoice = floodplainForestsAnimalChoice.toUpperCase();
      floodplainForestsAnimalChoice = floodplainForestsAnimalChoice.trim();
    }

    //if, else to check and display the animal info
    if (floodplainForestsAnimalChoice == "WATERFOWL") {
      console.log("Waterfowl is a general term used to describe a diverse group of aquatic birds that are specially adapted to life on and around bodies of water. These birds are part of the order Anseriformes, which includes ducks, geese, and swans. They encompass a wide variety of species, each with its own unique characteristics. This group includes dabbling ducks, diving ducks, sea ducks, geese, and swans.");
    }

    else if (floodplainForestsAnimalChoice == "HERONS") {
      console.log("Herons are wading birds belonging to the family Ardeidae, and they are known for their long legs, necks, and bills. These birds are commonly found in wetland habitats, where they hunt for fish, amphibians, insects, and other small animals. There are various species of herons, each with its own unique characteristics, but they share some common features. They  have long legs that are well adapted for wading in shallow water. Their long necks allow them to reach into the water to catch prey.");
    }

    else if (floodplainForestsAnimalChoice == "BEAVERS") {
      console.log("Beavers are large, semi-aquatic rodents known for their remarkable ability to build elaborate dams and lodges. They belong to the genus Castor and are found in North America, Europe, and Asia. Beavers play a significant role in shaping and modifying their environments through their dam-building activities. They  are well-adapted to aquatic life with webbed hind feet and a large, flat, scaly tail, which serves as a rudder and helps them steer in the water.");
    }

    else if (floodplainForestsAnimalChoice == "SNAILS") {
      console.log("Snails are gastropod mollusks that belong to the class Gastropoda, which is one of the largest and most diverse groups of animals in the animal kingdom. These fascinating creatures are found in a variety of habitats, ranging from marine and freshwater environments to terrestrial landscapes. The most distinctive feature of snails is their coiled shell, which is secreted by a specialized gland. The shell serves as a protective covering for the soft body of the snail and provides a means of defense against predators.")
    }
  }

  else if (userHabitatInput == "GRASSLANDS") {
    //Tells the position of grasslands in the array
    let grasslandPosition = (habitats.findIndex(habitat => habitat == "GRASSLANDS")) + 1;
    console.log(`Grasslands are present at position ${grasslandPosition}`);
    console.log("");

    //Declaring an array which stores the animals in the habitat and prints them
    let grasslandAnimals = ["BISON", "SECTRETARY BIRD", "GOPHERS", "MEADOW VOLES"];
    console.log("Animals available: ");
    let temp = 1;
    for (i in grasslandAnimals) {
      console.log(`Animal ${temp}: ${grasslandAnimals[i]}`);
    }
    console.log();

    //Taking input from the user for which animal they would like to know
    let grasslandAnimalChoice = prompt("Choose one animal from the list provided: ")
    grasslandAnimalChoice = grasslandAnimalChoice.toUpperCase();
    grasslandAnimalChoice = grasslandAnimalChoice.trim();

    //Error checking for if grasslandAnimalChoice is not a string
    while (!(isNaN(grasslandAnimalChoice))) {
      grasslandAnimalChoice = prompt("Choose one animal from the list provided: ")
      grasslandAnimalChoice = grasslandAnimalChoice.toUpperCase();
      grasslandAnimalChoice = grasslandAnimalChoice.trim();
    }

    //if, else to check and displayt eh animal info
    if (grasslandAnimalChoice == "BISON") {
      console.log("Bison, often referred to as buffalo, are large, herbivorous mammals belonging to the genus Bison in the family Bovidae. There are two species of bison: the American bison (Bison bison), which is found in North America, and the European bison (Bison bonasus), also known as the wisent, found in Europe. They are robust, large-bodied animals with a distinctive hump on their shoulders, which is formed by muscles supporting their massive heads.");
    }

    else if (grasslandAnimalChoice == "SECRETARY BIRD") {
      console.log("The secretary bird (Sagittarius serpentarius) is a large, terrestrial bird of prey native to the savannas and grasslands of sub-Saharan Africa. This unique bird is easily recognized by its distinctive appearance and is known for its remarkable hunting behavior. The secretary bird is a tall bird with an upright posture, standing around 4.5 to 5 feet (1.4 to 1.5 meters) tall. It has long legs and a distinctive crest of feathers on its head that resembles quill pens often tucked behind the ear, giving rise to its name.")
    }

    else if (grasslandAnimalChoice == "GOPHERS") {
      console.log("Gophers are small to medium-sized rodents belonging to the family Geomyidae. They are burrowing mammals known for their fossorial (adapted for digging) lifestyle, creating complex tunnel systems underground. Gophers are primarily found in North and Central America. Gophers have stout bodies, short legs, and strong forelimbs adapted for digging. Their fur is generally soft and ranges in color from brown to gray, depending on the species.")
    }

    else if (grasslandAnimalChoice == "MEADOW VOLES") {
      console.log("Meadow voles (Microtus pennsylvanicus) are small rodents belonging to the vole genus Microtus. They are widespread in North America and are commonly found in grasslands, meadows, and other open habitats. Meadow voles play important roles in ecosystems, particularly in influencing plant communities and serving as prey for various predators. Meadow voles have compact bodies with short legs, short tails, and dense fur. Their fur coloration can vary, but they typically have brown or gray-brown fur with a lighter belly. They have relatively small eyes and ears compared to their body size.")
    }
  }

  else if (userHabitatInput == "SWAMPS") {
    //Tells the position of swamps in the array
    let swampPosition = (habitats.findIndex(habitat => habitat == "SWAMPS")) + 1;
    console.log(`Swamps are presenet at position ${swampPosition}`);
    console.log("");

    //Declaring an array for the animals in the habitat and printing it
    let swampAnimals = ["ALLIGATORS", "MOLLUSKS", "CRUSTACEANS", "SNAILS"];
    console.log("Animals available: ");
    let temp = 1;
    for (i in swampAnimals) {
      console.log(`Animal ${temp}: ${swampAnimals[i]}`);
    }
    console.log();

    //TAking input from the user for which animal they would like to know
    let swampAnimalsChoice = prompt("Choose one animal from the list provided: ")
    swampAnimalsChoice = swampAnimalsChoice.toUpperCase();
    swampAnimalsChoice = swampAnimalsChoice.trim();

    //Error chekcing for if swampAnimalsChoice is not a string
    while (!(isNaN(swampAnimalsChoice))) {
      swampAnimalsChoice = prompt("Choose one animal from the list provided: ")
      swampAnimalsChoice = swampAnimalsChoice.toUpperCase();
      swampAnimalsChoice = swampAnimalsChoice.trim();
    }

    //if, else if to check and display the animal info
    if (swampAnimalsChoice == "ALLIGATORS") {
      console.log("Alligators are large, semi-aquatic reptiles belonging to the family Alligatoridae. They are closely related to crocodiles and caimans and are known for their distinctive appearance and behavior. Alligators are primarily found in freshwater habitats in the southeastern United States and parts of China. There are two living species of alligators: the American alligator (Alligator mississippiensis) and the Chinese alligator (Alligator sinensis). The American alligator is the more well-known and widely distributed of the two.")
    }

    else if (swampAnimalsChoice == "MOLLUSKS") {
      console.log("Mollusks are a diverse group of invertebrate animals belonging to the phylum Mollusca. This phylum includes a vast array of organisms, ranging from tiny snails to giant squids. Mollusks are found in a variety of habitats, including oceans, freshwater environments, and terrestrial ecosystems. They typically have a soft, unsegmented body that is often protected by a hard external shell. The body is divided into three main parts: the head, the visceral mass (containing internal organs), and the muscular foot (used for locomotion).")
    }

    else if (swampAnimalsChoice == "CRUSTACEANS") {
      console.log("Crustaceans are a diverse group of arthropods belonging to the subphylum Crustacea. This group includes a wide variety of marine, freshwater, and terrestrial species, many of which are well-known for their economic and ecological importance. They typically have a hard exoskeleton made of chitin, a tough polysaccharide. Their bodies are segmented, and they exhibit tagmatization, where segments are grouped into specialized regions, such as the head, thorax, and abdomen.")
    }

    else if (swampAnimalsChoice == "SNAILS") {
      console.log("Snails are gastropod mollusks that belong to the class Gastropoda, which is one of the largest and most diverse groups of animals in the animal kingdom. These fascinating creatures are found in a variety of habitats, ranging from marine and freshwater environments to terrestrial landscapes. The most distinctive feature of snails is their coiled shell, which is secreted by a specialized gland. The shell serves as a protective covering for the soft body of the snail and provides a means of defense against predators.");
    }
  }
}

/** 
* Runs the main part of the code
*/
const diffHabitat = () => {
  decision1();
  if (!habitats.includes(userHabitatInput)) {
    //Code for what would happen if the user's input isn't present in the array and they would like to add it to the array
    if (userDecision == 'YES') {
      habitats.push(userHabitatInput);
      console.log(userHabitatInput + " is added to the list of habitats");
      console.log("");

      //Taking input for 4 animals in the habitat
      let unknownHabitatAnimal = [];
      let temp = 1;
      console.log("Enter any four animals which reside in this habitat");
      for (let i = 0; i < 4; i++) {
        unknownHabitatAnimal[i] = prompt(`Animal ${temp}: `);
        temp++;
      }
      console.log("");

      //Printing the animals
      console.log("The animals entered are: ");
      for (i in unknownHabitatAnimal) {
        console.log(unknownHabitatAnimal[i]);
      }
      console.log("");

      //Taking input for the description of the 4 animals
      let unknownAnimalInfo = [];
      for (i in unknownHabitatAnimal) {
        unknownAnimalInfo[i] = prompt(`Enter a description for ${unknownHabitatAnimal[i]}`);
      }
      console.log("");

      //Printing the description of the animals
      for (i in unknownAnimalInfo) {
        console.log(unknownHabitatAnimal[i] + "\t" + unknownAnimalInfo[i]);
      }
      console.log();
    }

    //Code for waht would happen if the user's input isn't present in the array and they wouldn't like to add it to the array   
    else if (userDecision == 'NO') {
      console.log("It looks like you ran out of options. Thanks for trying to explore difference Amazonian habitats")
    }

    else {
      console.log("Invalid Input. Try again")
      decision1();
    }
  }

  habitatInfo();
}

diffHabitat();