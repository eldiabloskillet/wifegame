// Daily puzzle pool: 405 puzzles (1-40 original; 41-405 added for the year from 2026-10-21), each 4 groups x 4 words.
// Each word entry is [WORD, clue]. Difficulty 0 (yellow) .. 3 (purple).
window.PUZZLES = [
  // 1
  { groups: [
    { category: "Fruits", difficulty: 0, words: [
      ["MANGO", "Tropical stone fruit with orange flesh"],
      ["PEACH", "Fuzzy-skinned summer fruit"],
      ["GRAPE", "Small vine fruit used for wine"],
      ["LEMON", "Sour yellow citrus"],
    ]},
    { category: "Shades of color", difficulty: 1, words: [
      ["CORAL", "Reef-building sea organism"],
      ["AMBER", "Fossilized tree resin"],
      ["IVORY", "Material from elephant tusks"],
      ["OLIVE", "Small fruit pressed for oil"],
    ]},
    { category: "Fish", difficulty: 2, words: [
      ["TROUT", "Freshwater fish, rainbow or brown"],
      ["PERCH", "A bird's resting spot"],
      ["BASS", "Lowest singing voice"],
      ["SALMON", "Pink-fleshed fish that swims upstream"],
    ]},
    { category: "Hidden animals", difficulty: 3, words: [
      ["SCATTER", "Throw about in all directions"],
      ["BRATS", "Spoiled, badly behaved children"],
      ["DOGMA", "Rigid set of beliefs"],
      ["HOWLED", "Cried out like a wolf"],
    ]},
  ]},
  // 2
  { groups: [
    { category: "Kitchen utensils", difficulty: 0, words: [
      ["WHISK", "Wire tool for beating eggs"],
      ["LADLE", "Deep spoon for serving soup"],
      ["SPATULA", "Flat tool for flipping food"],
      ["TONGS", "Hinged grabber for the grill"],
    ]},
    { category: "Sauces", difficulty: 1, words: [
      ["PESTO", "Basil and pine nut sauce"],
      ["GRAVY", "Sauce made from meat drippings"],
      ["AIOLI", "Garlic mayonnaise"],
      ["TAHINI", "Sesame seed paste"],
    ]},
    { category: "Dances", difficulty: 2, words: [
      ["TANGO", "Argentine dance for two"],
      ["SALSA", "Chunky tomato dip for chips"],
      ["WALTZ", "Ballroom dance in three-four time"],
      ["POLKA", "Lively Czech dance, or a dot pattern"],
    ]},
    { category: "NATO alphabet", difficulty: 3, words: [
      ["HOTEL", "Place to stay while traveling"],
      ["OSCAR", "Golden Academy Award statuette"],
      ["VICTOR", "Winner of a contest"],
      ["ROMEO", "Juliet's young lover"],
    ]},
  ]},
  // 3
  { groups: [
    { category: "Planets", difficulty: 0, words: [
      ["MARS", "The Red Planet"],
      ["VENUS", "Second planet from the sun"],
      ["SATURN", "Gas giant famous for its rings"],
      ["NEPTUNE", "Farthest planet from the sun"],
    ]},
    { category: "Chocolate bars", difficulty: 1, words: [
      ["TWIX", "Candy with two caramel cookie fingers"],
      ["SNICKERS", "Nougat, caramel and peanut candy bar"],
      ["BOUNTY", "Generous supply, or a reward"],
      ["KITKAT", "Candy that says have a break"],
    ]},
    { category: "Roman gods", difficulty: 2, words: [
      ["JUNO", "Queen of the Roman gods"],
      ["APOLLO", "God of the sun and music"],
      ["CUPID", "Winged archer of love"],
      ["BACCHUS", "Roman god of wine"],
    ]},
    { category: "___ belt", difficulty: 3, words: [
      ["SEAT", "Chair or bench spot"],
      ["BLACK", "Color of night"],
      ["SAFETY", "Freedom from danger"],
      ["ASTEROID", "Rocky body orbiting the sun"],
    ]},
  ]},
  // 4
  { groups: [
    { category: "Weather", difficulty: 0, words: [
      ["SLEET", "Icy rain"],
      ["THUNDER", "Rumble after lightning"],
      ["DRIZZLE", "Light, fine rain"],
      ["HAIL", "Balls of ice falling from the sky"],
    ]},
    { category: "Greetings", difficulty: 1, words: [
      ["HELLO", "Common way to answer the phone"],
      ["HOWDY", "Cowboy's hi"],
      ["ALOHA", "Hawaiian hi or bye"],
      ["HIYA", "Casual hi there"],
    ]},
    { category: "Scientists", difficulty: 2, words: [
      ["TESLA", "Inventor of AC motors, Nikola"],
      ["NEWTON", "Physicist hit by a falling apple"],
      ["CURIE", "Marie, radioactivity pioneer"],
      ["DARWIN", "Naturalist of the Galapagos"],
    ]},
    { category: "___ storm", difficulty: 3, words: [
      ["BRAIN", "Organ inside the skull"],
      ["SNOW", "Winter flakes"],
      ["SAND", "Beach grains"],
      ["FIRE", "Flames and heat"],
    ]},
  ]},
  // 5
  { groups: [
    { category: "Dog breeds", difficulty: 0, words: [
      ["POODLE", "Curly-coated French show dog"],
      ["BEAGLE", "Snoopy's breed"],
      ["BOXER", "Fighter in the ring"],
      ["CORGI", "Short-legged royal favorite dog"],
    ]},
    { category: "Pasta", difficulty: 1, words: [
      ["PENNE", "Pasta tubes cut on a slant"],
      ["ORZO", "Rice-shaped pasta"],
      ["RAVIOLI", "Stuffed pasta squares"],
      ["FUSILLI", "Corkscrew pasta"],
    ]},
    { category: "Voice descriptions", difficulty: 2, words: [
      ["RASPY", "Harsh and grating"],
      ["HOARSE", "Rough-voiced after too much yelling"],
      ["SHRILL", "High-pitched and piercing"],
      ["HUSKY", "Sled dog with blue eyes"],
    ]},
    { category: "___tail", difficulty: 3, words: [
      ["PONY", "Small horse"],
      ["FISH", "Gilled swimmer"],
      ["SWALLOW", "Gulp down"],
      ["DOVE", "Bird of peace"],
    ]},
  ]},
  // 6
  { groups: [
    { category: "Card games", difficulty: 0, words: [
      ["RUMMY", "Game of melds and runs, gin variety"],
      ["SNAP", "Break with a sharp crack"],
      ["EUCHRE", "Trick-taking game with bowers"],
      ["CANASTA", "Rummy-like game from Uruguay"],
    ]},
    { category: "Fireplace items", difficulty: 1, words: [
      ["POKER", "Game of bluffing and chips"],
      ["GRATE", "Shred cheese finely"],
      ["EMBERS", "Glowing remains of a fire"],
      ["BELLOWS", "Air pump for stoking flames"],
    ]},
    { category: "Dental work", difficulty: 2, words: [
      ["BRIDGE", "Structure over a river"],
      ["CROWN", "Monarch's headwear"],
      ["FILLING", "Stuffing inside a pie"],
      ["BRACES", "Wires that straighten teeth"],
    ]},
    { category: "Hidden numbers", difficulty: 3, words: [
      ["OFTEN", "Frequently"],
      ["CANINE", "Relating to dogs"],
      ["STONE", "Pebble or rock"],
      ["WEIGHT", "What a scale measures"],
    ]},
  ]},
  // 7
  { groups: [
    { category: "Birds", difficulty: 0, words: [
      ["EAGLE", "Bald national bird of the USA"],
      ["SPARROW", "Small brown songbird"],
      ["FALCON", "Fast bird of prey"],
      ["PENGUIN", "Flightless tuxedoed bird"],
    ]},
    { category: "Batman characters", difficulty: 1, words: [
      ["ROBIN", "Red-breasted songbird"],
      ["JOKER", "Wild card in a deck"],
      ["RIDDLER", "One who poses puzzles"],
      ["ALFRED", "Hitchcock's first name"],
    ]},
    { category: "Golf terms", difficulty: 2, words: [
      ["BIRDIE", "Shuttlecock"],
      ["BOGEY", "One over par, or a ghost"],
      ["CADDIE", "Club carrier"],
      ["DIVOT", "Chunk of turf dug up"],
    ]},
    { category: "___cake", difficulty: 3, words: [
      ["CHEESE", "Cheddar or brie"],
      ["SPONGE", "Porous kitchen scrubber"],
      ["CARROT", "Orange root vegetable"],
      ["POUND", "British currency unit"],
    ]},
  ]},
  // 8
  { groups: [
    { category: "Bodies of water", difficulty: 0, words: [
      ["LAKE", "Inland body of water"],
      ["LAGOON", "Shallow water behind a reef"],
      ["STREAM", "Small flowing brook"],
      ["CREEK", "Narrow waterway"],
    ]},
    { category: "Currencies", difficulty: 1, words: [
      ["EURO", "Money of Germany and France"],
      ["PESO", "Mexican money"],
      ["RUPEE", "Money of India"],
      ["FRANC", "Swiss money"],
    ]},
    { category: "Units of weight", difficulty: 2, words: [
      ["POUND", "Strike heavily again and again"],
      ["OUNCE", "One sixteenth of a pound"],
      ["GRAM", "Metric unit, a paperclip's heft"],
      ["TONNE", "Metric unit of a thousand kilos"],
    ]},
    { category: "___bank", difficulty: 3, words: [
      ["RIVER", "The Nile or the Amazon"],
      ["BLOOD", "Red fluid in veins"],
      ["PIGGY", "Childish word for a hog"],
      ["FOOD", "What you eat"],
    ]},
  ]},
  // 9
  { groups: [
    { category: "Shapes", difficulty: 0, words: [
      ["CIRCLE", "Perfectly round shape"],
      ["SQUARE", "Four equal sides, four right angles"],
      ["OVAL", "Egg shape"],
      ["HEXAGON", "Six-sided figure"],
    ]},
    { category: "Gemstones", difficulty: 1, words: [
      ["RUBY", "Red precious stone"],
      ["EMERALD", "Green precious stone"],
      ["TOPAZ", "Yellow November birthstone"],
      ["OPAL", "Iridescent October birthstone"],
    ]},
    { category: "Baseball field", difficulty: 2, words: [
      ["DIAMOND", "Hardest natural gem"],
      ["MOUND", "Raised pile of earth"],
      ["DUGOUT", "Canoe carved from a log"],
      ["BULLPEN", "Enclosure for livestock"],
    ]},
    { category: "Programming languages", difficulty: 3, words: [
      ["PYTHON", "Large constricting snake"],
      ["JAVA", "Indonesian island, or coffee slang"],
      ["SWIFT", "Very fast"],
      ["COBOL", "Old business programming language"],
    ]},
  ]},
  // 10
  { groups: [
    { category: "Orchestra instruments", difficulty: 0, words: [
      ["VIOLIN", "Four-stringed instrument played with a bow"],
      ["CELLO", "Large bowed instrument held between knees"],
      ["TRUMPET", "Brass instrument with three valves"],
      ["OBOE", "Double-reed woodwind"],
    ]},
    { category: "Glassware", difficulty: 1, words: [
      ["TUMBLER", "Acrobat who does flips"],
      ["GOBLET", "Stemmed drinking cup"],
      ["CARAFE", "Open-topped wine or water jug"],
      ["FLUTE", "Woodwind played sideways"],
    ]},
    { category: "Circus performers", difficulty: 2, words: [
      ["JUGGLER", "One who keeps balls in the air"],
      ["CLOWN", "Red-nosed joker"],
      ["ACROBAT", "Trapeze artist"],
      ["MIME", "Silent performer in white face"],
    ]},
    { category: "Palindromes", difficulty: 3, words: [
      ["LEVEL", "Flat and even"],
      ["RADAR", "System detecting planes"],
      ["KAYAK", "Paddled canoe-like boat"],
      ["CIVIC", "Relating to a city"],
    ]},
  ]},
  // 11
  { groups: [
    { category: "Breakfast foods", difficulty: 0, words: [
      ["WAFFLE", "Grid-patterned batter cake"],
      ["OMELET", "Folded eggs with fillings"],
      ["GRANOLA", "Toasted oats and nuts"],
      ["CEREAL", "Grain eaten from a bowl with milk"],
    ]},
    { category: "Philosophers", difficulty: 1, words: [
      ["BACON", "Salty pork strips"],
      ["PLATO", "Student of Socrates"],
      ["HUME", "Scottish skeptic, David"],
      ["LOCKE", "English thinker on the blank slate"],
    ]},
    { category: "Things you flip", difficulty: 2, words: [
      ["COIN", "Penny or quarter"],
      ["SWITCH", "Light control on a wall"],
      ["BURGER", "Patty in a bun"],
      ["PANCAKE", "Flat griddle cake"],
    ]},
    { category: "Sound like contractions", difficulty: 3, words: [
      ["KANT", "German philosopher of pure reason"],
      ["WEED", "Unwanted garden plant"],
      ["HEED", "Pay attention to"],
      ["AISLE", "Walkway between rows of seats"],
    ]},
  ]},
  // 12
  { groups: [
    { category: "Trees", difficulty: 0, words: [
      ["BIRCH", "Tree with white, papery bark"],
      ["WILLOW", "Weeping tree by the water"],
      ["CEDAR", "Fragrant wood for closets"],
      ["ASPEN", "Tree with trembling leaves"],
    ]},
    { category: "Canadian symbols", difficulty: 1, words: [
      ["MAPLE", "Tree tapped for syrup"],
      ["BEAVER", "Dam-building rodent"],
      ["MOOSE", "Large antlered deer"],
      ["MOUNTIE", "Red-coated police officer on horseback"],
    ]},
    { category: "Ski resorts", difficulty: 2, words: [
      ["VAIL", "Colorado ski town"],
      ["WHISTLER", "One who tweets a tune"],
      ["ZERMATT", "Swiss town under the Matterhorn"],
      ["STOWE", "Vermont ski town"],
    ]},
    { category: "___wood", difficulty: 3, words: [
      ["HOLLY", "Prickly plant with red berries"],
      ["DRIFT", "Float along aimlessly"],
      ["SANDAL", "Open-toed summer shoe"],
      ["BRUSH", "Tool for painting or hair"],
    ]},
  ]},
  // 13
  { groups: [
    { category: "Vegetables", difficulty: 0, words: [
      ["SPINACH", "Popeye's leafy green"],
      ["CELERY", "Crunchy green stalks"],
      ["RADISH", "Small red peppery root"],
      ["TURNIP", "Purple-topped root vegetable"],
    ]},
    { category: "Board games", difficulty: 1, words: [
      ["CHESS", "Game of checkmate"],
      ["CLUE", "Hint for a detective"],
      ["SORRY", "Word of apology"],
      ["RISK", "Chance of loss"],
    ]},
    { category: "Danger", difficulty: 2, words: [
      ["PERIL", "Serious danger"],
      ["HAZARD", "Something risky, like a golf bunker"],
      ["DANGER", "Threat of harm"],
      ["MENACE", "Threatening person, like Dennis"],
    ]},
    { category: "Fruit anagrams", difficulty: 3, words: [
      ["REAP", "Harvest a crop"],
      ["MILE", "Eight furlongs"],
      ["CHEAP", "Low in price"],
      ["AMONG", "In the middle of"],
    ]},
  ]},
  // 14
  { groups: [
    { category: "Farm animals", difficulty: 0, words: [
      ["SHEEP", "Woolly flock animal"],
      ["DONKEY", "Braying beast of burden"],
      ["HORSE", "Animal ridden by jockeys"],
      ["CATTLE", "Herd of cows"],
    ]},
    { category: "Cowards", difficulty: 1, words: [
      ["CHICKEN", "Hen or rooster"],
      ["WIMP", "Weakling"],
      ["WUSS", "Timid person, slangily"],
      ["SISSY", "Scaredy-cat"],
    ]},
    { category: "Chinese zodiac", difficulty: 2, words: [
      ["DRAGON", "Fire-breathing mythical beast"],
      ["TIGER", "Striped big cat"],
      ["MONKEY", "Banana-loving primate"],
      ["RABBIT", "Long-eared hopper"],
    ]},
    { category: "Acronyms", difficulty: 3, words: [
      ["GOAT", "Bearded barnyard animal"],
      ["SCUBA", "Underwater breathing gear"],
      ["LASER", "Focused beam of light"],
      ["SONAR", "Echo-based underwater detection"],
    ]},
  ]},
  // 15
  { groups: [
    { category: "Clothing", difficulty: 0, words: [
      ["SHIRT", "Top with buttons and a collar"],
      ["SWEATER", "Knitted pullover"],
      ["BLOUSE", "Woman's loose top"],
      ["SKIRT", "Garment hanging from the waist"],
    ]},
    { category: "Parts of a shoe", difficulty: 1, words: [
      ["HEEL", "Back of the foot"],
      ["TONGUE", "Organ used for tasting"],
      ["LACE", "Delicate openwork fabric"],
      ["EYELET", "Small reinforced hole"],
    ]},
    { category: "Only one", difficulty: 2, words: [
      ["SOLE", "Flatfish"],
      ["LONE", "Solitary, as a ranger"],
      ["SINGLE", "Unmarried"],
      ["UNIQUE", "One of a kind"],
    ]},
    { category: "___ potato", difficulty: 3, words: [
      ["JACKET", "Light coat"],
      ["SWEET", "Sugary"],
      ["COUCH", "Sofa"],
      ["MASHED", "Crushed to a pulp"],
    ]},
  ]},
  // 16
  { groups: [
    { category: "Office supplies", difficulty: 0, words: [
      ["PENCIL", "Writing tool with graphite"],
      ["ERASER", "Rubber that removes mistakes"],
      ["BINDER", "Ring folder for papers"],
      ["FOLDER", "Paper holder in a filing cabinet"],
    ]},
    { category: "First aid kit", difficulty: 1, words: [
      ["BANDAGE", "Wrap for a wound"],
      ["GAUZE", "Thin mesh dressing"],
      ["SPLINT", "Rigid support for a broken bone"],
      ["TWEEZERS", "Tool for pulling splinters"],
    ]},
    { category: "Poker actions", difficulty: 2, words: [
      ["CHECK", "Payment slip from a bank"],
      ["RAISE", "Lift up"],
      ["BLUFF", "Pretend to be confident"],
      ["CALL", "Phone someone"],
    ]},
    { category: "Hidden metals", difficulty: 3, words: [
      ["DESTINY", "Fate"],
      ["ENVIRONS", "Surrounding area"],
      ["MARIGOLD", "Orange garden flower"],
      ["PLEADS", "Begs earnestly"],
    ]},
  ]},
  // 17
  { groups: [
    { category: "Desserts", difficulty: 0, words: [
      ["PUDDING", "Creamy custard dessert"],
      ["SUNDAE", "Ice cream with toppings"],
      ["MOUSSE", "Airy whipped chocolate dessert"],
      ["ECLAIR", "Cream-filled pastry with icing"],
    ]},
    { category: "Sharp tastes", difficulty: 1, words: [
      ["TART", "Small fruit pie"],
      ["TANGY", "Zesty and sharp"],
      ["ACIDIC", "Having a low pH"],
      ["BITTER", "Like black coffee"],
    ]},
    { category: "Fairy folk", difficulty: 2, words: [
      ["BROWNIE", "Fudgy chocolate square"],
      ["PIXIE", "Mischievous tiny sprite"],
      ["GOBLIN", "Ugly mischievous creature"],
      ["GNOME", "Bearded garden statue"],
    ]},
    { category: "Soft drinks", difficulty: 3, words: [
      ["SPRITE", "Elf or fairy"],
      ["FANTA", "Orange soda brand"],
      ["PEPSI", "Coke's big rival"],
      ["SQUIRT", "Spray a thin jet of liquid"],
    ]},
  ]},
  // 18
  { groups: [
    { category: "Parts of a tree", difficulty: 0, words: [
      ["BRANCH", "Limb growing from a trunk"],
      ["LEAF", "Green part that falls in autumn"],
      ["TWIG", "Small thin stick"],
      ["BARK", "Rough outer covering of wood"],
    ]},
    { category: "Dog sounds", difficulty: 1, words: [
      ["WOOF", "Canine noise"],
      ["GROWL", "Low menacing rumble"],
      ["YELP", "Short sharp cry of pain"],
      ["HOWL", "Wolf's cry at the moon"],
    ]},
    { category: "Car parts", difficulty: 2, words: [
      ["TRUNK", "Elephant's long nose"],
      ["HOOD", "Head covering on a sweatshirt"],
      ["BUMPER", "Shock-absorbing bar"],
      ["FENDER", "Guitar brand, Stratocaster maker"],
    ]},
    { category: "___ beer", difficulty: 3, words: [
      ["ROOT", "Underground part of a plant"],
      ["GINGER", "Spicy root in Asian cooking"],
      ["CRAFT", "Skill with the hands"],
      ["DRAFT", "Early version of writing"],
    ]},
  ]},
  // 19
  { groups: [
    { category: "Sports", difficulty: 0, words: [
      ["SOCCER", "The beautiful game"],
      ["TENNIS", "Racket sport at Wimbledon"],
      ["RUGBY", "Sport with scrums and tries"],
      ["CRICKET", "Chirping insect"],
    ]},
    { category: "Insects", difficulty: 1, words: [
      ["BEETLE", "Hard-shelled bug"],
      ["MANTIS", "Praying insect"],
      ["HORNET", "Large stinging wasp"],
      ["TERMITE", "Wood-eating pest"],
    ]},
    { category: "Volkswagen models", difficulty: 2, words: [
      ["GOLF", "Game with clubs and eighteen holes"],
      ["POLO", "Sport played on horseback"],
      ["JETTA", "Compact German sedan"],
      ["PASSAT", "Midsize German sedan"],
    ]},
    { category: "Start with a body part", difficulty: 3, words: [
      ["EARNEST", "Sincere and serious"],
      ["ARMADA", "Fleet of warships"],
      ["SHINGLE", "Roof tile"],
      ["HIPSTER", "Trendy nonconformist"],
    ]},
  ]},
  // 20
  { groups: [
    { category: "Kitchen appliances", difficulty: 0, words: [
      ["TOASTER", "Browns bread slices"],
      ["BLENDER", "Makes smoothies"],
      ["OVEN", "Where you bake a cake"],
      ["FRIDGE", "Keeps food cold"],
    ]},
    { category: "Drums", difficulty: 1, words: [
      ["KETTLE", "Pot for boiling water"],
      ["SNARE", "Trap for small animals"],
      ["BONGO", "Small hand drum pair"],
      ["CONGA", "Tall Cuban drum, or a line dance"],
    ]},
    { category: "Cooking methods", difficulty: 2, words: [
      ["ROAST", "Comedic insult tribute"],
      ["BROIL", "Cook under direct heat"],
      ["BRAISE", "Slow-cook in liquid"],
      ["SEAR", "Brown quickly at high heat"],
    ]},
    { category: "Steal", difficulty: 3, words: [
      ["PINCH", "Squeeze between fingers"],
      ["SWIPE", "Slide a finger on a screen"],
      ["NICK", "Small cut"],
      ["POACH", "Cook an egg in simmering water"],
    ]},
  ]},
  // 21
  { groups: [
    { category: "Body parts", difficulty: 0, words: [
      ["ANKLE", "Joint above the foot"],
      ["WRIST", "Joint where a watch goes"],
      ["SHIN", "Front of the lower leg"],
      ["THIGH", "Upper leg"],
    ]},
    { category: "Oil companies", difficulty: 1, words: [
      ["SHELL", "Hard outer casing of an egg"],
      ["EXXON", "Oil giant merged with Mobil"],
      ["MOBIL", "Oil brand with a red pegasus"],
      ["CHEVRON", "V-shaped stripe"],
    ]},
    { category: "Pasta shapes", difficulty: 2, words: [
      ["ELBOW", "Arm's bending joint"],
      ["BOWTIE", "Formal neckwear"],
      ["SPIRAL", "Coiling curve"],
      ["RIBBON", "Strip tied on a gift"],
    ]},
    { category: "___pad", difficulty: 3, words: [
      ["KNEE", "Leg joint"],
      ["LAUNCH", "Send a rocket skyward"],
      ["LILY", "White trumpet-shaped flower"],
      ["MOUSE", "Small squeaking rodent"],
    ]},
  ]},
  // 22
  { groups: [
    { category: "Emotions", difficulty: 0, words: [
      ["ANGER", "Rage"],
      ["FEAR", "Dread or fright"],
      ["DISGUST", "Revulsion"],
      ["SADNESS", "Sorrow"],
    ]},
    { category: "Deadly sins", difficulty: 1, words: [
      ["ENVY", "Jealousy"],
      ["GREED", "Excessive desire for wealth"],
      ["LUST", "Intense craving"],
      ["WRATH", "Fierce fury"],
    ]},
    { category: "Animal groups", difficulty: 2, words: [
      ["PRIDE", "Self-respect"],
      ["MURDER", "Killing, crime"],
      ["SCHOOL", "Place of learning"],
      ["GAGGLE", "Noisy disorderly crowd"],
    ]},
    { category: "Rhymes with cloth", difficulty: 3, words: [
      ["SLOTH", "Slow tree-hanging mammal"],
      ["MOTH", "Nocturnal winged insect"],
      ["BROTH", "Thin soup"],
      ["FROTH", "Foam on top of a drink"],
    ]},
  ]},
  // 23
  { groups: [
    { category: "Weapons", difficulty: 0, words: [
      ["SWORD", "Knight's blade"],
      ["DAGGER", "Short stabbing knife"],
      ["SPEAR", "Long pointed throwing weapon"],
      ["CANNON", "Large gun on a pirate ship"],
    ]},
    { category: "Punctuation", difficulty: 1, words: [
      ["DASH", "Sprint"],
      ["COMMA", "Mark indicating a pause"],
      ["PERIOD", "Span of time or an era"],
      ["HYPHEN", "Mark joining compound words"],
    ]},
    { category: "Organs", difficulty: 2, words: [
      ["COLON", "Large intestine"],
      ["LIVER", "Organ that filters blood"],
      ["SPLEEN", "Organ near the stomach, venting anger"],
      ["BLADDER", "Sac that stores urine"],
    ]},
    { category: "Santa's reindeer", difficulty: 3, words: [
      ["DANCER", "Ballerina, for one"],
      ["VIXEN", "Female fox"],
      ["COMET", "Icy body with a glowing tail"],
      ["DONNER", "Ill-fated pioneer party"],
    ]},
  ]},
  // 24
  { groups: [
    { category: "Coffee drinks", difficulty: 0, words: [
      ["LATTE", "Espresso with steamed milk"],
      ["CORTADO", "Espresso cut with a little milk"],
      ["LUNGO", "Long-pulled espresso shot"],
      ["ESPRESSO", "Strong concentrated coffee shot"],
    ]},
    { category: "Shades of brown", difficulty: 1, words: [
      ["MOCHA", "Chocolate-coffee flavor"],
      ["TAUPE", "Grayish-brown hue"],
      ["BEIGE", "Pale sandy color"],
      ["SEPIA", "Old-photo tint"],
    ]},
    { category: "Pants", difficulty: 2, words: [
      ["CHINOS", "Cotton twill trousers"],
      ["JEANS", "Denim trousers"],
      ["SLACKS", "Casual dress trousers"],
      ["KHAKIS", "Tan trousers"],
    ]},
    { category: "___ bean", difficulty: 3, words: [
      ["JELLY", "Wobbly fruit spread"],
      ["KIDNEY", "Bean-shaped organ"],
      ["PINTO", "Spotted horse"],
      ["BAKED", "Cooked in an oven"],
    ]},
  ]},
  // 25
  { groups: [
    { category: "Cheeses", difficulty: 0, words: [
      ["BRIE", "Soft French cheese with a rind"],
      ["CHEDDAR", "Sharp English cheese"],
      ["GOUDA", "Dutch cheese with red wax"],
      ["FETA", "Crumbly Greek cheese"],
    ]},
    { category: "Nationalities", difficulty: 1, words: [
      ["SWISS", "From Zurich or Geneva"],
      ["DUTCH", "From Amsterdam"],
      ["GREEK", "From Athens"],
      ["IRISH", "From Dublin"],
    ]},
    { category: "Pastries", difficulty: 2, words: [
      ["DANISH", "From Copenhagen"],
      ["STRUDEL", "Layered apple pastry"],
      ["SCONE", "Tea-time biscuit with clotted cream"],
      ["BAKLAVA", "Honeyed phyllo and nut pastry"],
    ]},
    { category: "___horn", difficulty: 3, words: [
      ["FRENCH", "Language of Paris"],
      ["SHOE", "Footwear"],
      ["GREEN", "Color of grass"],
      ["BULL", "Male cow"],
    ]},
  ]},
  // 26
  { groups: [
    { category: "Chess terms", difficulty: 0, words: [
      ["KING", "Monarch"],
      ["ROOK", "Black crow-like bird"],
      ["PAWN", "Leave at a hock shop"],
      ["GAMBIT", "Opening sacrifice for advantage"],
    ]},
    { category: "Clergy", difficulty: 1, words: [
      ["BISHOP", "Head of a diocese"],
      ["PRIEST", "One who says Mass"],
      ["VICAR", "Anglican parish clergyman"],
      ["DEACON", "Church officer below a priest"],
    ]},
    { category: "Rock bands", difficulty: 2, words: [
      ["QUEEN", "Female monarch"],
      ["RUSH", "Hurry"],
      ["KISS", "Smooch"],
      ["GENESIS", "Beginning or origin"],
    ]},
    { category: "Silent first letter", difficulty: 3, words: [
      ["KNIGHT", "Armored warrior on horseback"],
      ["PSALM", "Sacred song or hymn"],
      ["WREN", "Tiny brown songbird"],
      ["GNASH", "Grind one's teeth"],
    ]},
  ]},
  // 27
  { groups: [
    { category: "Thanksgiving sides", difficulty: 0, words: [
      ["STUFFING", "Bread mixture cooked in a bird"],
      ["YAMS", "Sweet orange tubers"],
      ["GRAVY", "Brown sauce for mashed potatoes"],
      ["ROLLS", "Small bread buns"],
    ]},
    { category: "Countries", difficulty: 1, words: [
      ["CHAD", "Landlocked nation in central Africa"],
      ["PERU", "Home of Machu Picchu"],
      ["CUBA", "Caribbean island nation of Havana"],
      ["MALTA", "Mediterranean island nation"],
    ]},
    { category: "Famous Michaels", difficulty: 2, words: [
      ["JORDAN", "Country east of Israel"],
      ["PHELPS", "Swimmer with many golds"],
      ["CAINE", "British actor of Alfie"],
      ["JACKSON", "King of Pop"],
    ]},
    { category: "Things you carve", difficulty: 3, words: [
      ["TURKEY", "Thanksgiving bird"],
      ["PUMPKIN", "Big orange gourd"],
      ["TOTEM", "Carved emblem on a pole"],
      ["NICHE", "Specialized market segment"],
    ]},
  ]},
  // 28
  { groups: [
    { category: "Space objects", difficulty: 0, words: [
      ["METEOR", "Shooting star"],
      ["GALAXY", "Vast system of stars"],
      ["NEBULA", "Interstellar cloud of dust"],
      ["QUASAR", "Very bright distant galactic core"],
    ]},
    { category: "Ocean motion", difficulty: 1, words: [
      ["TIDE", "Rise and fall of the sea"],
      ["WAVE", "Hand gesture of greeting"],
      ["CURRENT", "Up to date"],
      ["SURF", "Browse the web"],
    ]},
    { category: "Old-timey praise", difficulty: 2, words: [
      ["SWELL", "Become larger"],
      ["DANDY", "Well-dressed man"],
      ["NIFTY", "Clever and handy"],
      ["PEACHY", "Just fine"],
    ]},
    { category: "Anagrams of each other", difficulty: 3, words: [
      ["TIME", "What clocks measure"],
      ["ITEM", "Entry on a list"],
      ["MITE", "Tiny arachnid"],
      ["EMIT", "Give off, as light"],
    ]},
  ]},
  // 29
  { groups: [
    { category: "Classroom items", difficulty: 0, words: [
      ["DESK", "Table for writing"],
      ["RULER", "Straightedge for measuring"],
      ["CRAYON", "Colored wax stick"],
      ["EASEL", "Stand for a painting"],
    ]},
    { category: "Royal titles", difficulty: 1, words: [
      ["EMPEROR", "Ruler of an empire"],
      ["SULTAN", "Ottoman ruler"],
      ["KAISER", "German emperor"],
      ["PHARAOH", "Egyptian ruler"],
    ]},
    { category: "Newspaper names", difficulty: 2, words: [
      ["GLOBE", "Spherical world map"],
      ["HERALD", "Messenger or forerunner"],
      ["TRIBUNE", "Roman official for the people"],
      ["GAZETTE", "Official journal"],
    ]},
    { category: "___board", difficulty: 3, words: [
      ["CHALK", "Soft white writing stick"],
      ["SKATE", "Glide on ice"],
      ["CLIP", "Fastener for papers"],
      ["CARD", "Playing piece from a deck"],
    ]},
  ]},
  // 30
  { groups: [
    { category: "Tools", difficulty: 0, words: [
      ["WRENCH", "Tool for turning bolts"],
      ["CHISEL", "Tool for carving wood or stone"],
      ["PLIERS", "Gripping pincer tool"],
      ["MALLET", "Wooden-headed hammer"],
    ]},
    { category: "Rappers", difficulty: 1, words: [
      ["EMINEM", "Slim Shady"],
      ["NELLY", "Hot in Herre rapper"],
      ["HAMMER", "Tool for nails"],
      ["LUDACRIS", "Atlanta rapper and Fast and Furious actor"],
    ]},
    { category: "Quick look", difficulty: 2, words: [
      ["GANDER", "Male goose"],
      ["GLANCE", "Brief look"],
      ["PEEK", "Sneaky look"],
      ["GLIMPSE", "Momentary view"],
    ]},
    { category: "Male animals", difficulty: 3, words: [
      ["DRAKE", "Canadian rapper of Hotline Bling"],
      ["STAG", "Antlered deer"],
      ["STALLION", "Adult male horse"],
      ["ROOSTER", "Crowing farm bird"],
    ]},
  ]},
  // 31
  { groups: [
    { category: "Baby animals", difficulty: 0, words: [
      ["FOAL", "Young horse"],
      ["KITTEN", "Young cat"],
      ["CALF", "Back of the lower leg"],
      ["JOEY", "Young kangaroo"],
    ]},
    { category: "Kinds of leather", difficulty: 1, words: [
      ["SUEDE", "Soft napped leather"],
      ["NUBUCK", "Sanded leather"],
      ["PATENT", "Exclusive right to an invention"],
      ["CORDOVAN", "Horsehide leather from Spain"],
    ]},
    { category: "Legal documents", difficulty: 2, words: [
      ["DEED", "Noble act"],
      ["LEASE", "Rental agreement"],
      ["WARRANT", "Justify or deserve"],
      ["SUBPOENA", "Court order to testify"],
    ]},
    { category: "___ love", difficulty: 3, words: [
      ["PUPPY", "Young dog"],
      ["TOUGH", "Hard to chew"],
      ["TRUE", "Not false"],
      ["FREE", "Costing nothing"],
    ]},
  ]},
  // 32
  { groups: [
    { category: "Music genres", difficulty: 0, words: [
      ["REGGAE", "Jamaican music of Bob Marley"],
      ["FOLK", "People, generally"],
      ["DISCO", "Seventies dance music"],
      ["PUNK", "Young hoodlum"],
    ]},
    { category: "Low spirits", difficulty: 1, words: [
      ["BLUES", "Melancholy feeling"],
      ["GLOOM", "Darkness or despondency"],
      ["DUMPS", "Garbage sites"],
      ["FUNK", "Bad smell, or a depressed state"],
    ]},
    { category: "NBA teams", difficulty: 2, words: [
      ["JAZZ", "Improvised New Orleans music"],
      ["HEAT", "Warmth"],
      ["MAGIC", "Wizardry"],
      ["SPURS", "Cowboy boot spikes"],
    ]},
    { category: "Heavy ___", difficulty: 3, words: [
      ["METAL", "Iron or copper"],
      ["DUTY", "Obligation"],
      ["HEART", "Blood-pumping organ"],
      ["LIFTING", "Raising up"],
    ]},
  ]},
  // 33
  { groups: [
    { category: "Footwear", difficulty: 0, words: [
      ["SNEAKER", "Rubber-soled athletic shoe"],
      ["SLIPPER", "Soft indoor shoe"],
      ["PUMP", "Device for inflating tires"],
      ["MOCCASIN", "Soft leather shoe"],
    ]},
    { category: "Lazy people", difficulty: 1, words: [
      ["LOAFER", "Idle person"],
      ["SLACKER", "Person who avoids work"],
      ["IDLER", "Do-nothing"],
      ["LAYABOUT", "Habitual couch dweller"],
    ]},
    { category: "Block", difficulty: 2, words: [
      ["CLOG", "Wooden Dutch shoe"],
      ["PLUG", "Stopper for a sink"],
      ["CHOKE", "Struggle to breathe"],
      ["OBSTRUCT", "Get in the way of"],
    ]},
    { category: "British motoring terms", difficulty: 3, words: [
      ["BOOT", "Knee-high footwear"],
      ["BONNET", "Baby's tied hat"],
      ["PETROL", "Gasoline"],
      ["LORRY", "Big truck"],
    ]},
  ]},
  // 34
  { groups: [
    { category: "Flowers", difficulty: 0, words: [
      ["TULIP", "Dutch spring bloom"],
      ["DAISY", "White petals, yellow center"],
      ["ORCHID", "Exotic tropical bloom"],
      ["POPPY", "Red remembrance flower"],
    ]},
    { category: "Parts of the eye", difficulty: 1, words: [
      ["IRIS", "Purple flower, or a Greek goddess"],
      ["LENS", "Glass in a camera"],
      ["RETINA", "Light-sensing layer"],
      ["CORNEA", "Clear front covering"],
    ]},
    { category: "Students", difficulty: 2, words: [
      ["PUPIL", "Dark center of the eye"],
      ["SCHOLAR", "Learned academic"],
      ["LEARNER", "One acquiring knowledge"],
      ["TRAINEE", "Apprentice"],
    ]},
    { category: "Past tense verbs", difficulty: 3, words: [
      ["ROSE", "Red flower with thorns"],
      ["WOUND", "Injury"],
      ["BORE", "Dull person"],
      ["FELL", "Hilly moorland"],
    ]},
  ]},
  // 35
  { groups: [
    { category: "Hats", difficulty: 0, words: [
      ["BERET", "Soft French cap"],
      ["FEDORA", "Indiana Jones's hat"],
      ["BEANIE", "Knit winter cap"],
      ["BOWLER", "Cricket player who delivers the ball"],
    ]},
    { category: "Bowling terms", difficulty: 1, words: [
      ["STRIKE", "Walkout by workers"],
      ["GUTTER", "Roof drain channel"],
      ["SPLIT", "Divide in two"],
      ["LANE", "Narrow road"],
    ]},
    { category: "Extra", difficulty: 2, words: [
      ["SPARE", "Kept in reserve"],
      ["SURPLUS", "Excess amount"],
      ["EXCESS", "Too much"],
      ["LEFTOVER", "Uneaten remainder"],
    ]},
    { category: "Words that are their own opposites", difficulty: 3, words: [
      ["CLEAVE", "Split apart, or cling to"],
      ["SANCTION", "Approve, or penalize"],
      ["DUST", "Remove powder, or sprinkle it"],
      ["BOLT", "Run off, or fasten shut"],
    ]},
  ]},
  // 36
  { groups: [
    { category: "Vehicles", difficulty: 0, words: [
      ["TRUCK", "Big hauling vehicle"],
      ["TRACTOR", "Farm vehicle"],
      ["SCOOTER", "Two-wheeled kick vehicle"],
      ["WAGON", "Four-wheeled cart"],
    ]},
    { category: "Advertising", difficulty: 1, words: [
      ["TRAILER", "Vehicle towed behind a car"],
      ["PROMO", "Short publicity clip"],
      ["ADVERT", "Commercial, in Britain"],
      ["JINGLE", "Catchy commercial tune"],
    ]},
    { category: "Puzzles", difficulty: 2, words: [
      ["RIDDLE", "Puzzling question"],
      ["REBUS", "Picture puzzle"],
      ["ENIGMA", "Mystery"],
      ["SUDOKU", "Nine-by-nine number grid"],
    ]},
    { category: "Brain ___", difficulty: 3, words: [
      ["CHILD", "Kid"],
      ["DRAIN", "Sink hole"],
      ["TEASER", "Short preview"],
      ["FREEZE", "Turn to ice"],
    ]},
  ]},
  // 37
  { groups: [
    { category: "Breads", difficulty: 0, words: [
      ["BAGEL", "Boiled ring-shaped roll"],
      ["BRIOCHE", "Rich buttery French loaf"],
      ["NAAN", "Indian flatbread"],
      ["PITA", "Pocket flatbread"],
    ]},
    { category: "Money slang", difficulty: 1, words: [
      ["MOOLAH", "Cash, slangily"],
      ["LOOT", "Stolen goods"],
      ["CABBAGE", "Leafy head used in slaw"],
      ["BUCKS", "Male deer"],
    ]},
    { category: "Pirate things", difficulty: 2, words: [
      ["PLANK", "Long flat board"],
      ["PARROT", "Talking bird"],
      ["CUTLASS", "Curved short sword"],
      ["GALLEON", "Old Spanish sailing ship"],
    ]},
    { category: "Things that rise", difficulty: 3, words: [
      ["DOUGH", "Unbaked bread mixture"],
      ["PHOENIX", "Mythical bird of fire"],
      ["TEMPERS", "Moods, often short"],
      ["SOUFFLE", "Puffy baked egg dish"],
    ]},
  ]},
  // 38
  { groups: [
    { category: "Parts of a song", difficulty: 0, words: [
      ["VERSE", "Stanza of a poem"],
      ["CHORUS", "Group of singers"],
      ["INTRO", "Opening section"],
      ["OUTRO", "Closing section"],
    ]},
    { category: "Fishing gear", difficulty: 1, words: [
      ["LURE", "Entice"],
      ["REEL", "Spool for line"],
      ["BAIT", "Worms on a line"],
      ["TACKLE", "Bring down a ball carrier"],
    ]},
    { category: "Football plays", difficulty: 2, words: [
      ["PUNT", "Kick dropped from the hands"],
      ["BLITZ", "Sudden all-out attack"],
      ["FUMBLE", "Drop the ball"],
      ["SACK", "Large cloth bag"],
    ]},
    { category: "Fictional captains", difficulty: 3, words: [
      ["HOOK", "Curved bit for catching fish"],
      ["AHAB", "Moby-Dick's obsessed hunter"],
      ["NEMO", "Clownfish lost in a Pixar film"],
      ["KIRK", "Star Trek's Enterprise leader"],
    ]},
  ]},
  // 39
  { groups: [
    { category: "Tree nuts", difficulty: 0, words: [
      ["ALMOND", "Nut used in marzipan"],
      ["CASHEW", "Kidney-shaped nut"],
      ["PECAN", "Nut in a Southern pie"],
      ["WALNUT", "Brain-shaped nut"],
    ]},
    { category: "Crazy", difficulty: 1, words: [
      ["BONKERS", "Mad"],
      ["LOONY", "Wacky"],
      ["BATTY", "Eccentric"],
      ["WACKY", "Zany and silly"],
    ]},
    { category: "Christmas things", difficulty: 2, words: [
      ["CRACKERS", "Thin crisp wafers"],
      ["TINSEL", "Glittery strands"],
      ["WREATH", "Circle of evergreen for a door"],
      ["STOCKING", "Sock hung by the fireplace"],
    ]},
    { category: "___ butter", difficulty: 3, words: [
      ["PEANUT", "Legume in a shell"],
      ["SHEA", "African nut used in lotion"],
      ["COCOA", "Chocolate powder"],
      ["APPLE", "Orchard fruit"],
    ]},
  ]},
  // 40
  { groups: [
    { category: "Computer hardware", difficulty: 0, words: [
      ["MODEM", "Internet connection box"],
      ["KEYBOARD", "Typing device"],
      ["SPEAKER", "One giving a talk"],
      ["WEBCAM", "Camera for video calls"],
    ]},
    { category: "Lizards", difficulty: 1, words: [
      ["MONITOR", "Computer screen"],
      ["GECKO", "Sticky-footed reptile"],
      ["IGUANA", "Green pet reptile"],
      ["SKINK", "Smooth-scaled reptile"],
    ]},
    { category: "Woodworking tools", difficulty: 2, words: [
      ["ROUTER", "Wi-Fi box"],
      ["PLANE", "Aircraft"],
      ["LATHE", "Spinning shaping machine"],
      ["SANDER", "Smoothing power tool"],
    ]},
    { category: "___ saver", difficulty: 3, words: [
      ["SCREEN", "Display surface"],
      ["LIFE", "Existence"],
      ["FACE", "Front of the head"],
      ["ENERGY", "Power or vigor"],
    ]},
  ]},
  // 41
  { groups: [
    { category: "Herbs", difficulty: 0, words: [
      ["BASIL", "Fawlty of Fawlty Towers"],
      ["THYME", "Sounds like what clocks keep"],
      ["SAGE", "Wise elder"],
      ["MINT", "Where coins are made"],
    ]},
    { category: "Pizza toppings", difficulty: 1, words: [
      ["ANCHOVY", "Tiny salty fish in Caesar dressing"],
      ["ONION", "Layered bulb that makes you cry"],
      ["HAM", "Overacting performer"],
      ["MUSHROOM", "Grow rapidly, like a cloud"],
    ]},
    { category: "Things with shells", difficulty: 2, words: [
      ["TACO", "Folded Tex-Mex tortilla"],
      ["EGG", "Urge, with 'on'"],
      ["CLAM", "Shut up tight, with 'up'"],
      ["TURTLE", "___neck sweater"],
    ]},
    { category: "Sound like letters", difficulty: 3, words: [
      ["TEA", "Earl Grey, for one"],
      ["PEA", "Green orb in a pod"],
      ["JAY", "Blue-crested bird"],
      ["QUEUE", "Line of waiting people"],
    ]},
  ]},
  // 42
  { groups: [
    { category: "Spices", difficulty: 0, words: [
      ["CUMIN", "Earthy seed in chili powder"],
      ["NUTMEG", "Soccer trick through the legs"],
      ["CLOVE", "One segment of a garlic bulb"],
      ["PAPRIKA", "Red Hungarian pepper powder"],
    ]},
    { category: "Sushi terms", difficulty: 1, words: [
      ["NIGIRI", "Rice mound topped with fish"],
      ["WASABI", "Green horseradish paste"],
      ["MAKI", "Seaweed-wrapped rice roll"],
      ["NORI", "Dried seaweed sheet"],
    ]},
    { category: "Restaurant staff", difficulty: 2, words: [
      ["HOST", "Emcee of a game show"],
      ["SERVER", "Computer that runs websites"],
      ["CHEF", "Kitchen boss in a white toque"],
      ["CASHIER", "Checkout worker"],
    ]},
    { category: "Hidden fruits", difficulty: 3, words: [
      ["FIGHT", "Brawl"],
      ["PEARL", "Oyster's gem"],
      ["DATELINE", "News article's header"],
      ["PLUMBER", "Pipe fixer"],
    ]},
  ]},
  // 43
  { groups: [
    { category: "Citrus fruits", difficulty: 0, words: [
      ["LIME", "Key ___ pie"],
      ["ORANGE", "A Clockwork ___"],
      ["YUZU", "Fragrant Japanese citrus"],
      ["POMELO", "Largest citrus fruit"],
    ]},
    { category: "Grains", difficulty: 1, words: [
      ["BARLEY", "Malted grain in beer"],
      ["OATS", "Sow one's wild ___"],
      ["RYE", "The Catcher in the ___"],
      ["MILLET", "Painter of The Gleaners"],
    ]},
    { category: "Cocktails", difficulty: 2, words: [
      ["MOJITO", "Minty Cuban rum drink"],
      ["MARTINI", "Bond's shaken drink"],
      ["SIDECAR", "Motorcycle's passenger pod"],
      ["MANHATTAN", "NYC's busiest borough"],
    ]},
    { category: "___corn", difficulty: 3, words: [
      ["POP", "Dad, informally"],
      ["PEPPER", "Sgt. ___ of Beatles fame"],
      ["CANDY", "Trick-or-treat haul"],
      ["UNI", "College, in British slang"],
    ]},
  ]},
  // 44
  { groups: [
    { category: "Soups", difficulty: 0, words: [
      ["BORSCHT", "Beet soup from Eastern Europe"],
      ["GAZPACHO", "Chilled Spanish tomato soup"],
      ["CHOWDER", "Creamy New England clam dish"],
      ["BISQUE", "Creamy shellfish puree"],
    ]},
    { category: "Kitchen measures", difficulty: 1, words: [
      ["CUP", "Trophy, often silver"],
      ["PINT", "Pub serving of beer"],
      ["QUART", "Two pints"],
      ["OUNCE", "Snow leopard's other name"],
    ]},
    { category: "Things with stems", difficulty: 2, words: [
      ["WINEGLASS", "Bowl on a long stalk"],
      ["ROSE", "Got up from bed"],
      ["WATCH", "Observe closely"],
      ["APPLE", "Tech giant from Cupertino"],
    ]},
    { category: "Starts with a farm animal", difficulty: 3, words: [
      ["HENNA", "Reddish-brown hair dye"],
      ["PIGMENT", "Coloring substance"],
      ["COWBOY", "Ranch hand on horseback"],
      ["RAMBLE", "Wander aimlessly"],
    ]},
  ]},
  // 45
  { groups: [
    { category: "Leafy greens", difficulty: 0, words: [
      ["KALE", "Curly superfood leaf"],
      ["SPINACH", "Popeye's power food"],
      ["ARUGULA", "Peppery leaf, a.k.a. rocket"],
      ["CHARD", "Beet relative, often Swiss"],
    ]},
    { category: "Sandwiches", difficulty: 1, words: [
      ["CLUB", "Golf stick"],
      ["HERO", "Brave rescuer"],
      ["SUB", "Underwater boat, briefly"],
      ["WRAP", "Finish filming"],
    ]},
    { category: "Egg preparations", difficulty: 2, words: [
      ["POACHED", "Hunted illegally"],
      ["SCRAMBLED", "Hurried in a panic"],
      ["FRIED", "Totally burned out, slangily"],
      ["BOILED", "Got very hot, like water"],
    ]},
    { category: "___fish", difficulty: 3, words: [
      ["SWORD", "Knight's blade"],
      ["CAT", "Purring pet"],
      ["STAR", "Twinkling night light"],
      ["JELLY", "Fruit spread on toast"],
    ]},
  ]},
  // 46
  { groups: [
    { category: "Chili peppers", difficulty: 0, words: [
      ["JALAPENO", "Smoked to make chipotle"],
      ["HABANERO", "Fiery orange lantern-shaped pepper"],
      ["POBLANO", "Mild pepper for chiles rellenos"],
      ["CAYENNE", "French Guiana's capital"],
    ]},
    { category: "Candies", difficulty: 1, words: [
      ["TOFFEE", "Buttery hard candy"],
      ["FUDGE", "Dodge the truth"],
      ["TAFFY", "Chewy saltwater sweet"],
      ["NOUGAT", "Chewy center of many bars"],
    ]},
    { category: "Celebrity chef surnames", difficulty: 2, words: [
      ["CHILD", "Young person"],
      ["RAMSAY", "Gordon of Hell's Kitchen"],
      ["FLAY", "Strip off the skin"],
      ["BOURDAIN", "Anthony of Parts Unknown"],
    ]},
    { category: "Hidden drinks", difficulty: 3, words: [
      ["STEAK", "T-bone or ribeye"],
      ["GALE", "Strong wind"],
      ["PORTAL", "Doorway to another world"],
      ["RUMBLE", "Low thunder sound"],
    ]},
  ]},
  // 47
  { groups: [
    { category: "Cuts of beef", difficulty: 0, words: [
      ["SIRLOIN", "Steak cut from the loin"],
      ["BRISKET", "Slow-smoked Texas barbecue cut"],
      ["FLANK", "Side of an army formation"],
      ["CHUCK", "Toss casually"],
    ]},
    { category: "Japanese foods", difficulty: 1, words: [
      ["RAMEN", "Instant noodles for students"],
      ["TEMPURA", "Light batter-fried dish"],
      ["MOCHI", "Chewy pounded rice cake"],
      ["UDON", "Thick wheat noodle"],
    ]},
    { category: "Mythical creatures", difficulty: 2, words: [
      ["GRIFFIN", "Peter of Family Guy"],
      ["KRAKEN", "Giant sea monster of legend"],
      ["HYDRA", "Many-headed water serpent"],
      ["SPHINX", "Egyptian lion with a human head"],
    ]},
    { category: "___dog", difficulty: 3, words: [
      ["HOT", "Very warm"],
      ["CORN", "Grain grown on cobs"],
      ["UNDER", "Beneath"],
      ["SHEEP", "Woolly flock animal"],
    ]},
  ]},
  // 48
  { groups: [
    { category: "Fast food menu", difficulty: 0, words: [
      ["BURGER", "Patty in a bun"],
      ["FRIES", "Cooks in hot oil"],
      ["NUGGET", "Small lump of gold"],
      ["SHAKE", "Tremble"],
    ]},
    { category: "Frozen treats", difficulty: 1, words: [
      ["GELATO", "Italian ice cream"],
      ["SORBET", "Dairy-free fruit ice"],
      ["POPSICLE", "Ice pop on a stick"],
      ["SUNDAE", "Sounds like the weekend's last day"],
    ]},
    { category: "Tennis terms", difficulty: 2, words: [
      ["LOVE", "Strong affection"],
      ["DEUCE", "Two on a playing card"],
      ["ACE", "Top playing card"],
      ["LET", "Allow"],
    ]},
    { category: "Vegetable homophones", difficulty: 3, words: [
      ["LEAK", "Drip from a faucet"],
      ["BEAT", "Defeat"],
      ["MAZE", "Labyrinth"],
      ["CARAT", "Diamond weight unit"],
    ]},
  ]},
  // 49
  { groups: [
    { category: "Condiments", difficulty: 0, words: [
      ["KETCHUP", "Tomato sauce for fries"],
      ["MUSTARD", "Colonel in the game Clue"],
      ["RELISH", "Enjoy greatly"],
      ["MAYO", "Minnesota's famous clinic"],
    ]},
    { category: "Pie fillings", difficulty: 1, words: [
      ["PECAN", "Southern nut"],
      ["PUMPKIN", "Cinderella's coach, originally"],
      ["CHERRY", "Fruit of George Washington's tree"],
      ["MINCEMEAT", "Spiced fruit-and-suet mixture"],
    ]},
    { category: "Parts of a ship", difficulty: 2, words: [
      ["GALLEY", "Printer's proof sheet"],
      ["MAST", "Pole for a sail"],
      ["HULL", "English port city"],
      ["DECK", "Pack of cards"],
    ]},
    { category: "Starts with a kitchen vessel", difficulty: 3, words: [
      ["PANDA", "Bamboo-eating bear"],
      ["POTTER", "Harry of Hogwarts"],
      ["WOKE", "Stopped sleeping"],
      ["JARGON", "Technical lingo"],
    ]},
  ]},
  // 50
  { groups: [
    { category: "Dried fruits", difficulty: 0, words: [
      ["RAISIN", "Shriveled grape"],
      ["PRUNE", "Trim a shrub"],
      ["DATE", "Romantic evening out"],
      ["FIG", "Not give a ___"],
    ]},
    { category: "Beer styles", difficulty: 1, words: [
      ["LAGER", "Crisp, cold-fermented brew"],
      ["STOUT", "Sturdy and thickset"],
      ["PORTER", "Train station bag carrier"],
      ["PILSNER", "Pale Czech-style brew"],
    ]},
    { category: "Shades of red", difficulty: 2, words: [
      ["RUBY", "July birthstone"],
      ["CRIMSON", "Harvard's school color"],
      ["SCARLET", "O'Hara of Gone with the Wind"],
      ["MAROON", "Strand on an island"],
    ]},
    { category: "___room", difficulty: 3, words: [
      ["MUSH", "Soft pulpy mass"],
      ["BALL", "Round toy"],
      ["BATH", "Tub soak"],
      ["CLASS", "Students taught together"],
    ]},
  ]},
  // 51
  { groups: [
    { category: "Pork products", difficulty: 0, words: [
      ["BACON", "Kevin of Footloose"],
      ["SAUSAGE", "Links on a breakfast plate"],
      ["PROSCIUTTO", "Thin Italian dry-cured slices"],
      ["CHORIZO", "Spicy Spanish link"],
    ]},
    { category: "Kinds of rice", difficulty: 1, words: [
      ["BASMATI", "Fragrant long-grain from India"],
      ["JASMINE", "Fragrant white flower"],
      ["ARBORIO", "Risotto grain"],
      ["WILD", "Untamed"],
    ]},
    { category: "Ballet terms", difficulty: 2, words: [
      ["PLIE", "Knee bend at the barre"],
      ["JETE", "Leap from one foot"],
      ["TUTU", "Desmond, archbishop"],
      ["POINTE", "Dancing on the toes"],
    ]},
    { category: "___bread", difficulty: 3, words: [
      ["SWEET", "Sugary"],
      ["MONKEY", "Banana-loving primate"],
      ["FLAT", "Apartment, in London"],
      ["SHORT", "Not tall"],
    ]},
  ]},
  // 52
  { groups: [
    { category: "Cookware", difficulty: 0, words: [
      ["SKILLET", "Cast-iron frying pan"],
      ["WOK", "Stir-fry pan"],
      ["STOCKPOT", "Tall pot for broth"],
      ["GRIDDLE", "Flat pancake surface"],
    ]},
    { category: "Mexican dishes", difficulty: 1, words: [
      ["TAMALE", "Corn husk-wrapped dish"],
      ["BURRITO", "Rolled flour tortilla meal"],
      ["POZOLE", "Hominy stew"],
      ["FAJITA", "Sizzling strips with tortillas"],
    ]},
    { category: "Famous ships", difficulty: 2, words: [
      ["TITANIC", "Enormous"],
      ["MAYFLOWER", "Pilgrims' 1620 vessel"],
      ["BOUNTY", "Reward for capture"],
      ["BEAGLE", "Snoopy's breed"],
    ]},
    { category: "Hidden meats", difficulty: 3, words: [
      ["SHAME", "Embarrassment"],
      ["REVEAL", "Unveil"],
      ["FLAMBE", "Set alight with brandy"],
      ["GOATEE", "Chin beard"],
    ]},
  ]},
  // 53
  { groups: [
    { category: "Mushrooms", difficulty: 0, words: [
      ["SHIITAKE", "Dark Asian cap, often dried"],
      ["MOREL", "Honeycomb-capped spring find"],
      ["ENOKI", "Thin, long-stemmed white cluster"],
      ["OYSTER", "Pearl-making mollusk"],
    ]},
    { category: "Teas", difficulty: 1, words: [
      ["OOLONG", "Partly oxidized Chinese brew"],
      ["CHAI", "Spiced Indian milk drink"],
      ["MATCHA", "Powdered green brew"],
      ["ROOIBOS", "South African red bush brew"],
    ]},
    { category: "Hairstyles", difficulty: 2, words: [
      ["BOB", "Float up and down"],
      ["BUN", "Hamburger holder"],
      ["MULLET", "Gray coastal fish"],
      ["PERM", "Lasting salon curls"],
    ]},
    { category: "___ pie", difficulty: 3, words: [
      ["HUMBLE", "Modest"],
      ["MUD", "Wet dirt"],
      ["CUTIE", "Adorable person"],
      ["POT", "Cooking vessel"],
    ]},
  ]},
  // 54
  { groups: [
    { category: "Dips", difficulty: 0, words: [
      ["HUMMUS", "Chickpea and tahini spread"],
      ["GUACAMOLE", "Mashed avocado dip"],
      ["QUESO", "Spanish for cheese"],
      ["RANCH", "Cattle farm"],
    ]},
    { category: "Drink order lingo", difficulty: 1, words: [
      ["NEAT", "Tidy"],
      ["ROCKS", "Stones"],
      ["DIRTY", "Unclean"],
      ["DRY", "Not wet"],
    ]},
    { category: "The Simpsons", difficulty: 2, words: [
      ["HOMER", "Baseball home run"],
      ["LISA", "Mona ___"],
      ["BART", "Bay Area transit system"],
      ["MARGE", "Mom with towering blue hair"],
    ]},
    { category: "Starts with a grain", difficulty: 3, words: [
      ["OATH", "Sworn promise"],
      ["CORNEA", "Eye's clear outer layer"],
      ["BRANCH", "Tree limb"],
      ["BRANDY", "Distilled wine spirit"],
    ]},
  ]},
  // 55
  { groups: [
    { category: "Root vegetables", difficulty: 0, words: [
      ["TURNIP", "White-and-purple globe root"],
      ["PARSNIP", "Pale carrot cousin"],
      ["RADISH", "Peppery red salad root"],
      ["RUTABAGA", "Swede, to Brits"],
    ]},
    { category: "Indian dishes", difficulty: 1, words: [
      ["CURRY", "Steph of the Warriors"],
      ["SAMOSA", "Fried triangular pastry"],
      ["NAAN", "Tandoor-baked flatbread"],
      ["KORMA", "Mild, creamy braise"],
    ]},
    { category: "Fonts", difficulty: 2, words: [
      ["ARIAL", "Sans-serif Microsoft default"],
      ["TIMES", "Periods, eras"],
      ["COURIER", "Package messenger"],
      ["GEORGIA", "Peach State"],
    ]},
    { category: "___nut", difficulty: 3, words: [
      ["DOUGH", "Raw bread"],
      ["CHEST", "Treasure box"],
      ["COCO", "Designer Chanel"],
      ["HAZEL", "Greenish-brown eye color"],
    ]},
  ]},
  // 56
  { groups: [
    { category: "Dumplings", difficulty: 0, words: [
      ["GYOZA", "Pan-fried Japanese potsticker"],
      ["PIEROGI", "Polish filled half-moons"],
      ["WONTON", "Chinese soup filler"],
      ["GNOCCHI", "Potato pasta pillows"],
    ]},
    { category: "Wine tasting terms", difficulty: 1, words: [
      ["TANNIN", "Compound used to tan leather"],
      ["VINTAGE", "Old but stylish"],
      ["BOUQUET", "Bunch of flowers"],
      ["BODY", "Torso and limbs"],
    ]},
    { category: "Marvel heroes", difficulty: 2, words: [
      ["THOR", "Norse thunder god"],
      ["VISION", "Eyesight"],
      ["FALCON", "Bird of prey"],
      ["STORM", "Thunder and lightning event"],
    ]},
    { category: "Anagrams of STEAL", difficulty: 3, words: [
      ["STALE", "No longer fresh, like old bread"],
      ["LEAST", "Smallest amount"],
      ["SLATE", "Gray rock for roofing"],
      ["TALES", "Stories"],
    ]},
  ]},
  // 57
  { groups: [
    { category: "Shellfish", difficulty: 0, words: [
      ["LOBSTER", "Maine's red-shelled delicacy"],
      ["SHRIMP", "Small, puny person"],
      ["CRAB", "Grouchy person"],
      ["MUSSEL", "Sounds like a bicep"],
    ]},
    { category: "Knife cuts", difficulty: 1, words: [
      ["DICE", "Cubes for board games"],
      ["MINCE", "Walk daintily"],
      ["JULIENNE", "Matchstick-thin strips"],
      ["SLICE", "Golf shot that curves right"],
    ]},
    { category: "Rivers", difficulty: 2, words: [
      ["NILE", "Africa's longest waterway"],
      ["AMAZON", "Online retail giant"],
      ["SEINE", "Large fishing net"],
      ["VOLGA", "Russia's longest waterway"],
    ]},
    { category: "Hidden fish", difficulty: 3, words: [
      ["CODE", "Secret cipher"],
      ["CARPET", "Rug"],
      ["FEELING", "Sensation"],
      ["BASSOON", "Double-reed woodwind"],
    ]},
  ]},
  // 58
  { groups: [
    { category: "Sweeteners", difficulty: 0, words: [
      ["HONEY", "Term of endearment"],
      ["MOLASSES", "Slow as ___ in January"],
      ["AGAVE", "Succulent used for tequila"],
      ["STEVIA", "Zero-calorie plant extract"],
    ]},
    { category: "Deli meats", difficulty: 1, words: [
      ["SALAMI", "Dry-cured Italian sausage"],
      ["PASTRAMI", "Smoked beef on rye"],
      ["BOLOGNA", "Italian university city"],
      ["TURKEY", "Country spanning two continents"],
    ]},
    { category: "Things that pop", difficulty: 2, words: [
      ["CORK", "Irish county"],
      ["BUBBLE", "Speculative market surge"],
      ["BALLOON", "Grow rapidly"],
      ["KNUCKLE", "Finger joint"],
    ]},
    { category: "___fly", difficulty: 3, words: [
      ["FIRE", "Flames"],
      ["BUTTER", "Toast spread"],
      ["DRAGON", "Fire-breathing beast"],
      ["HORSE", "Stallion or mare"],
    ]},
  ]},
  // 59
  { groups: [
    { category: "Egg dishes", difficulty: 0, words: [
      ["OMELET", "Folded dish with fillings"],
      ["QUICHE", "Savory custard tart"],
      ["FRITTATA", "Italian open-faced egg bake"],
      ["SOUFFLE", "Puffy baked dish that can fall"],
    ]},
    { category: "Wine grapes", difficulty: 1, words: [
      ["MERLOT", "Soft red from Bordeaux"],
      ["MALBEC", "Argentina's signature red"],
      ["SHIRAZ", "Iranian city of poets"],
      ["RIESLING", "German white varietal"],
    ]},
    { category: "Islands", difficulty: 2, words: [
      ["JAVA", "Coffee, slangily"],
      ["CRETE", "Minoan civilization's home"],
      ["BALI", "Indonesian surfing paradise"],
      ["CUBA", "Havana's country"],
    ]},
    { category: "Starts with a dessert", difficulty: 3, words: [
      ["TARTAN", "Scottish plaid pattern"],
      ["FLANNEL", "Soft brushed fabric"],
      ["PIERCE", "Poke a hole through"],
      ["CAKEWALK", "Very easy task"],
    ]},
  ]},
  // 60
  { groups: [
    { category: "Squashes", difficulty: 0, words: [
      ["ACORN", "Oak's seed"],
      ["BUTTERNUT", "Pear-shaped tan gourd"],
      ["SPAGHETTI", "Long thin pasta"],
      ["ZUCCHINI", "Summer courgette"],
    ]},
    { category: "Starbucks sizes", difficulty: 1, words: [
      ["TALL", "Not short"],
      ["GRANDE", "Ariana of pop"],
      ["VENTI", "Twenty, in Italian"],
      ["TRENTA", "Thirty, in Italian"],
    ]},
    { category: "Horse gaits", difficulty: 2, words: [
      ["TROT", "Light jog"],
      ["CANTER", "Smooth three-beat run"],
      ["GALLOP", "Fastest four-beat run"],
      ["AMBLE", "Leisurely stroll"],
    ]},
    { category: "Hidden vegetables", difficulty: 3, words: [
      ["PEACOCK", "Bird with a showy tail"],
      ["KALEIDOSCOPE", "Colorful pattern tube"],
      ["YAMMER", "Talk on and on"],
      ["BEETLE", "Hard-winged insect"],
    ]},
  ]},
  // 61
  { groups: [
    { category: "Fermented foods", difficulty: 0, words: [
      ["KIMCHI", "Spicy Korean cabbage"],
      ["MISO", "Soybean paste in soup"],
      ["KEFIR", "Tangy cultured milk drink"],
      ["KOMBUCHA", "Fizzy fermented tea"],
    ]},
    { category: "Apple varieties", difficulty: 1, words: [
      ["GALA", "Fancy party"],
      ["FUJI", "Japan's tallest mountain"],
      ["BRAEBURN", "New Zealand-born crisp red"],
      ["JAZZ", "Improvised music genre"],
    ]},
    { category: "Yoga poses", difficulty: 2, words: [
      ["COBRA", "Venomous hooded snake"],
      ["WARRIOR", "Fighter"],
      ["LOTUS", "Sacred water flower"],
      ["PLANK", "Wooden board"],
    ]},
    { category: "___fruit", difficulty: 3, words: [
      ["GRAPE", "Wine's source"],
      ["PASSION", "Intense emotion"],
      ["JACK", "Card below the queen"],
      ["BREAD", "Toast's starting point"],
    ]},
  ]},
  // 62
  { groups: [
    { category: "Burger toppings", difficulty: 0, words: [
      ["LETTUCE", "Money, in slang"],
      ["PICKLE", "Tricky situation"],
      ["TOMATO", "You say potato, I say..."],
      ["CHEESE", "Say this for a photo"],
    ]},
    { category: "Parts of a meal", difficulty: 1, words: [
      ["STARTER", "Engine's ignition helper"],
      ["ENTREE", "Admission or access"],
      ["SIDE", "Team in a match"],
      ["DESSERT", "Final sweet course"],
    ]},
    { category: "Constellations", difficulty: 2, words: [
      ["ORION", "Hunter with a famous belt"],
      ["DRACO", "Malfoy of Hogwarts"],
      ["LYRA", "Heroine of His Dark Materials"],
      ["PERSEUS", "Medusa's slayer"],
    ]},
    { category: "Ends with a container", difficulty: 3, words: [
      ["JAPAN", "Land of the Rising Sun"],
      ["DESPOT", "Tyrant"],
      ["PELICAN", "Pouched seabird"],
      ["AJAR", "Slightly open"],
    ]},
  ]},
  // 63
  { groups: [
    { category: "Cake varieties", difficulty: 0, words: [
      ["BUNDT", "Ring-shaped fluted bake"],
      ["ANGEL", "Heavenly being"],
      ["SPONGE", "Kitchen scrubber"],
      ["CARROT", "Bugs Bunny's snack"],
    ]},
    { category: "French foods", difficulty: 1, words: [
      ["CREPE", "Thin pancake"],
      ["BRIE", "Larson, Oscar winner"],
      ["CROISSANT", "Flaky crescent roll"],
      ["BAGUETTE", "Long thin loaf"],
    ]},
    { category: "Poets", difficulty: 2, words: [
      ["FROST", "Icy morning coating"],
      ["BYRON", "Lord who wrote Don Juan"],
      ["KEATS", "Ode to a Nightingale writer"],
      ["POE", "The Raven's author"],
    ]},
    { category: "___ cream", difficulty: 3, words: [
      ["SOUR", "Tart, like lemons"],
      ["ICE", "Frozen water"],
      ["COLD", "Chilly"],
      ["SHAVING", "Using a razor"],
    ]},
  ]},
  // 64
  { groups: [
    { category: "Lettuces", difficulty: 0, words: [
      ["ROMAINE", "Caesar salad leaf"],
      ["ICEBERG", "Titanic's nemesis"],
      ["BIBB", "Soft butterhead variety"],
      ["RADICCHIO", "Red-leafed Italian chicory"],
    ]},
    { category: "Ballpark snacks", difficulty: 1, words: [
      ["PRETZEL", "Twisted shape"],
      ["PEANUTS", "Charlie Brown comic strip"],
      ["NACHOS", "Chips with melted cheese"],
      ["POPCORN", "Movie theater tub snack"],
    ]},
    { category: "Gymnastics events", difficulty: 2, words: [
      ["VAULT", "Bank's safe room"],
      ["BEAM", "Smile broadly"],
      ["RINGS", "Wedding bands"],
      ["FLOOR", "Story of a building"],
    ]},
    { category: "Hidden eggs", difficulty: 3, words: [
      ["BEGGAR", "Panhandler"],
      ["LEGGINGS", "Stretchy pants"],
      ["REGGAE", "Bob Marley's genre"],
      ["VEGGIE", "Plant food, informally"],
    ]},
  ]},
  // 65
  { groups: [
    { category: "Toast spreads", difficulty: 0, words: [
      ["JAM", "Traffic snarl"],
      ["MARMALADE", "Paddington's favorite"],
      ["NUTELLA", "Hazelnut cocoa spread"],
      ["VEGEMITE", "Aussie yeast spread"],
    ]},
    { category: "Middle Eastern foods", difficulty: 1, words: [
      ["FALAFEL", "Fried chickpea balls"],
      ["SHAWARMA", "Spit-roasted meat wrap"],
      ["PITA", "Pocket bread"],
      ["KEBAB", "Skewered grilled meat"],
    ]},
    { category: "Seven Dwarfs", difficulty: 2, words: [
      ["DOC", "Physician, informally"],
      ["HAPPY", "Joyful"],
      ["SLEEPY", "Drowsy"],
      ["BASHFUL", "Shy"],
    ]},
    { category: "Number homophones", difficulty: 3, words: [
      ["WON", "Came first"],
      ["ATE", "Consumed a meal"],
      ["FOR", "In favor of"],
      ["TOO", "Also"],
    ]},
  ]},
  // 66
  { groups: [
    { category: "Tomato varieties", difficulty: 0, words: [
      ["ROMA", "Italian capital, locally"],
      ["HEIRLOOM", "Family treasure"],
      ["BEEFSTEAK", "Big slicing type"],
      ["PLUM", "Professor in the game Clue"],
    ]},
    { category: "Dinnerware", difficulty: 1, words: [
      ["PLATE", "Home ___ in baseball"],
      ["BOWL", "Super ___ Sunday"],
      ["SAUCER", "Flying ___ (UFO)"],
      ["PLATTER", "Large serving dish"],
    ]},
    { category: "Cartoon ducks", difficulty: 2, words: [
      ["DONALD", "Glover of Atlanta"],
      ["DAFFY", "Crazy, silly"],
      ["DAISY", "White-petaled flower"],
      ["SCROOGE", "Dickens miser"],
    ]},
    { category: "___ware", difficulty: 3, words: [
      ["SOFT", "Not hard"],
      ["HARD", "Difficult"],
      ["SILVER", "Second-place medal"],
      ["GLASS", "Window pane material"],
    ]},
  ]},
  // 67
  { groups: [
    { category: "Beans", difficulty: 0, words: [
      ["PINTO", "Old Ford compact car"],
      ["KIDNEY", "Organ that filters blood"],
      ["NAVY", "Dark blue"],
      ["LIMA", "Peru's capital"],
    ]},
    { category: "Chocolate types", difficulty: 1, words: [
      ["DARK", "Without light"],
      ["MILK", "Cow's output"],
      ["WHITE", "Snow's color"],
      ["BAKING", "Using an oven"],
    ]},
    { category: "Things with scales", difficulty: 2, words: [
      ["PIANO", "Grand or upright instrument"],
      ["MAP", "Atlas page"],
      ["SNAKE", "Slithering reptile"],
      ["JUSTICE", "Fairness under the law"],
    ]},
    { category: "Starts with a Greek letter", difficulty: 3, words: [
      ["PIGEON", "Park bird that bobs its head"],
      ["TAUNT", "Mock"],
      ["CHIMNEY", "Santa's entryway"],
      ["MUSIC", "Melodies and harmonies"],
    ]},
  ]},
  // 68
  { groups: [
    { category: "Picnic gear", difficulty: 0, words: [
      ["BASKET", "Hoop score"],
      ["BLANKET", "Covering everything, as a ban"],
      ["COOLER", "Less warm"],
      ["THERMOS", "Insulated flask"],
    ]},
    { category: "Barbecue gear", difficulty: 1, words: [
      ["SMOKER", "One who puffs cigarettes"],
      ["GRILL", "Interrogate"],
      ["SPIT", "Expel saliva"],
      ["SKEWER", "Criticize harshly"],
    ]},
    { category: "Volcanoes", difficulty: 2, words: [
      ["ETNA", "Sicily's smoking peak"],
      ["VESUVIUS", "Pompeii's destroyer"],
      ["KRAKATOA", "Indonesian peak of 1883"],
      ["KILAUEA", "Hawaii's most active peak"],
    ]},
    { category: "___cracker", difficulty: 3, words: [
      ["NUT", "Hard-shelled seed"],
      ["GRAHAM", "Bell's middle name"],
      ["SAFE", "Free from danger"],
      ["WISE", "Full of wisdom"],
    ]},
  ]},
  // 69
  { groups: [
    { category: "Edible seeds", difficulty: 0, words: [
      ["SESAME", "Open ___!"],
      ["CHIA", "___ Pet"],
      ["FLAX", "Linen's source plant"],
      ["POPPY", "Remembrance Day flower"],
    ]},
    { category: "Liquors", difficulty: 1, words: [
      ["GIN", "___ rummy"],
      ["RUM", "Odd, in old British slang"],
      ["VODKA", "Russian spirit"],
      ["TEQUILA", "Agave spirit from Jalisco"],
    ]},
    { category: "Muppets", difficulty: 2, words: [
      ["KERMIT", "Green frog with a banjo"],
      ["GONZO", "Wildly offbeat, as journalism"],
      ["ANIMAL", "Creature"],
      ["BEAKER", "Lab glassware"],
    ]},
    { category: "Sea creature homophones", difficulty: 3, words: [
      ["WAIL", "Cry loudly"],
      ["MUSCLE", "Bicep, for one"],
      ["SOUL", "Spirit"],
      ["REY", "Star Wars scavenger heroine"],
    ]},
  ]},
  // 70
  { groups: [
    { category: "Morning bakes", difficulty: 0, words: [
      ["BAGEL", "Boiled ring-shaped roll"],
      ["MUFFIN", "Cup-shaped breakfast bake"],
      ["SCONE", "Scottish site where kings were crowned"],
      ["CRUMPET", "Griddle cake full of holes"],
    ]},
    { category: "Places to eat", difficulty: 1, words: [
      ["DINER", "One eating a meal"],
      ["BISTRO", "Small French eatery"],
      ["CAFE", "Coffee shop"],
      ["CANTEEN", "Hiker's water bottle"],
    ]},
    { category: "Shakespeare plays", difficulty: 2, words: [
      ["HAMLET", "Small village"],
      ["OTHELLO", "Black-and-white disc board game"],
      ["MACBETH", "Scottish play"],
      ["TEMPEST", "Violent storm"],
    ]},
    { category: "Add S to make a food", difficulty: 3, words: [
      ["TEAK", "Hardwood for furniture"],
      ["LAW", "Rule of the land"],
      ["QUASH", "Suppress"],
      ["PAM", "Beesly of The Office"],
    ]},
  ]},
  // 71
  { groups: [
    { category: "Ice cream flavors", difficulty: 0, words: [
      ["VANILLA", "Plain, unexciting"],
      ["PISTACHIO", "Green nut"],
      ["COFFEE", "Morning brew"],
      ["CHOCOLATE", "Cacao treat"],
    ]},
    { category: "Sundae toppings", difficulty: 1, words: [
      ["SPRINKLES", "Light showers"],
      ["MARASCHINO", "Bright red cocktail cherry"],
      ["NUTS", "Crazy"],
      ["WAFER", "Communion bread"],
    ]},
    { category: "Monopoly spaces", difficulty: 2, words: [
      ["BOARDWALK", "Seaside promenade"],
      ["JAIL", "Lockup"],
      ["CHANCE", "Possibility"],
      ["RAILROAD", "Force through hastily"],
    ]},
    { category: "___ chip", difficulty: 3, words: [
      ["MICRO", "Tiny, as a prefix"],
      ["POKER", "Fireplace tool"],
      ["BLUE", "Sad"],
      ["POTATO", "Spud"],
    ]},
  ]},
  // 72
  { groups: [
    { category: "Southern dishes", difficulty: 0, words: [
      ["GRITS", "Ground hominy porridge"],
      ["GUMBO", "Okra-thickened Louisiana stew"],
      ["JAMBALAYA", "Cajun rice dish"],
      ["CORNBREAD", "Skillet-baked yellow loaf"],
    ]},
    { category: "Small recipe amounts", difficulty: 1, words: [
      ["DASH", "Sprint"],
      ["PINCH", "Squeeze between fingers"],
      ["SPLASH", "Make waves"],
      ["DOLLOP", "Blob of whipped cream"],
    ]},
    { category: "Track and field events", difficulty: 2, words: [
      ["SPRINT", "Short agile work cycle"],
      ["HURDLE", "Obstacle to overcome"],
      ["RELAY", "Pass on a message"],
      ["MARATHON", "Binge-watching session"],
    ]},
    { category: "Baking homophones", difficulty: 3, words: [
      ["NEED", "Require"],
      ["FLOWER", "Rose or daisy"],
      ["ROLE", "Part in a play"],
      ["DOE", "Female deer"],
    ]},
  ]},
  // 73
  { groups: [
    { category: "Tropical fruits", difficulty: 0, words: [
      ["PAPAYA", "Orange fruit with black seeds"],
      ["GUAVA", "Pink-fleshed tropical fruit"],
      ["LYCHEE", "Small fruit with bumpy red skin"],
      ["PINEAPPLE", "Spiky-crowned Hawaiian fruit"],
    ]},
    { category: "Cooking fats", difficulty: 1, words: [
      ["LARD", "Pig fat for flaky crusts"],
      ["SUET", "Hard fat in bird feeders"],
      ["GHEE", "Clarified butter"],
      ["SCHMALTZ", "Excessive sentimentality"],
    ]},
    { category: "Chemical elements", difficulty: 2, words: [
      ["NEON", "Bright sign gas"],
      ["IRON", "Press clothes"],
      ["COPPER", "Police officer"],
      ["LEAD", "Guide the way"],
    ]},
    { category: "Hidden oil", difficulty: 3, words: [
      ["SPOIL", "Ruin"],
      ["TOILET", "Bathroom fixture"],
      ["TURMOIL", "Chaos"],
      ["FOIL", "Thwart a plan"],
    ]},
  ]},
  // 74
  { groups: [
    { category: "Bar appetizers", difficulty: 0, words: [
      ["WINGS", "Bird limbs"],
      ["SLIDERS", "Breaking baseball pitches"],
      ["POPPERS", "Exploding party toys"],
      ["SKINS", "Video game outfits"],
    ]},
    { category: "Bread ingredients", difficulty: 1, words: [
      ["YEAST", "Fungus that makes dough rise"],
      ["FLOUR", "Milled wheat powder"],
      ["SALT", "Old sailor, informally"],
      ["WATER", "Hydrate a plant"],
    ]},
    { category: "Painters", difficulty: 2, words: [
      ["MONET", "Water lilies painter"],
      ["DALI", "Melting clocks surrealist"],
      ["KAHLO", "Mexican self-portrait icon"],
      ["MATISSE", "Fauvist who made paper cutouts"],
    ]},
    { category: "Starts with a drink", difficulty: 3, words: [
      ["PORTION", "Serving size"],
      ["ALERT", "Watchful"],
      ["COLANDER", "Pasta strainer"],
      ["MEADOW", "Grassy field"],
    ]},
  ]},
  // 75
  { groups: [
    { category: "Cooking oils", difficulty: 0, words: [
      ["CANOLA", "Rapeseed product"],
      ["OLIVE", "Popeye's girlfriend ___ Oyl"],
      ["COCONUT", "Hairy tropical drupe"],
      ["SUNFLOWER", "Kansas state flower"],
    ]},
    { category: "Salads", difficulty: 1, words: [
      ["NICOISE", "From Nice, on the Riviera"],
      ["COBB", "Ty of baseball"],
      ["CAPRESE", "From Capri, in Italian"],
      ["WALDORF", "Muppet balcony heckler"],
    ]},
    { category: "Baseball moves", difficulty: 2, words: [
      ["BUNT", "Light tap of the bat"],
      ["BALK", "Hesitate to proceed"],
      ["STEAL", "Take without permission"],
      ["SQUEEZE", "Hug tightly"],
    ]},
    { category: "___ dressing", difficulty: 3, words: [
      ["WINDOW", "Glass pane"],
      ["FRENCH", "Language of Paris"],
      ["ITALIAN", "Language of Rome"],
      ["WOUND", "Injury"],
    ]},
  ]},
  // 76
  { groups: [
    { category: "Pasta sauces", difficulty: 0, words: [
      ["MARINARA", "Sailor-style tomato sauce"],
      ["ALFREDO", "Creamy Parmesan sauce"],
      ["BOLOGNESE", "Meaty ragu"],
      ["CARBONARA", "Egg-and-pancetta sauce"],
    ]},
    { category: "Kitchen gadgets", difficulty: 1, words: [
      ["ZESTER", "Citrus peel scraper"],
      ["PEELER", "Potato skin remover"],
      ["GRATER", "Cheese shredder"],
      ["MASHER", "Tool for lumpy potatoes"],
    ]},
    { category: "Taylor Swift albums", difficulty: 2, words: [
      ["RED", "Stop sign color"],
      ["LOVER", "Romantic partner"],
      ["EVERMORE", "Forever, poetically"],
      ["MIDNIGHTS", "Late-night hours"],
    ]},
    { category: "___house", difficulty: 3, words: [
      ["GREEN", "Grass color"],
      ["LIGHT", "Not heavy"],
      ["TREE", "Oak or elm"],
      ["OPERA", "Puccini's art form"],
    ]},
  ]},
  // 77
  { groups: [
    { category: "Steaks", difficulty: 0, words: [
      ["RIBEYE", "Marbled steak from the rib"],
      ["TBONE", "Letter-shaped steak cut"],
      ["FILET", "Boneless fish piece"],
      ["STRIP", "Comic panel row"],
    ]},
    { category: "Diets", difficulty: 1, words: [
      ["VEGAN", "No animal products at all"],
      ["KETO", "Very low-carb plan"],
      ["PALEO", "Ancient, as a prefix"],
      ["ATKINS", "Chet, guitar legend"],
    ]},
    { category: "Comic strips", difficulty: 2, words: [
      ["GARFIELD", "President shot in 1881"],
      ["ZIGGY", "Bowie's Stardust"],
      ["CATHY", "Ack!-shouting cartoon gal"],
      ["BLONDIE", "Debbie Harry's band"],
    ]},
    { category: "___ jam", difficulty: 3, words: [
      ["TRAFFIC", "Cars and trucks"],
      ["PAPER", "Printer's sheet stock"],
      ["LOG", "Fallen tree trunk"],
      ["STRAWBERRY", "Red fruit dotted with seeds"],
    ]},
  ]},
  // 78
  { groups: [
    { category: "Kinds of sugar", difficulty: 0, words: [
      ["BROWN", "Color of chocolate"],
      ["CANE", "Walking stick"],
      ["CASTER", "Wheel on a chair leg"],
      ["ICING", "Hockey infraction"],
    ]},
    { category: "Brunch cocktails", difficulty: 1, words: [
      ["MIMOSA", "Fluffy-flowered tree"],
      ["BELLINI", "Italian opera composer"],
      ["BLOODYMARY", "Tomato juice and vodka drink"],
      ["SPRITZ", "Quick squirt"],
    ]},
    { category: "Dog commands", difficulty: 2, words: [
      ["SIT", "Pose for a portrait"],
      ["STAY", "Remain overnight"],
      ["HEEL", "Back of the foot"],
      ["DOWN", "Soft duck feathers"],
    ]},
    { category: "Anagrams of MEAT", difficulty: 3, words: [
      ["TEAM", "Players on one side"],
      ["MATE", "Buddy, Down Under"],
      ["TAME", "Domesticated"],
      ["META", "Self-referential"],
    ]},
  ]},
  // 79
  { groups: [
    { category: "Often pickled", difficulty: 0, words: [
      ["GHERKIN", "Small cucumber"],
      ["CAPER", "Daring heist"],
      ["HERRING", "Red ___ (misleading clue)"],
      ["BEET", "Red root in borscht"],
    ]},
    { category: "Italian sweets", difficulty: 1, words: [
      ["TIRAMISU", "Coffee-soaked ladyfinger dessert"],
      ["CANNOLI", "Ricotta-filled pastry tubes"],
      ["PANNACOTTA", "Cooked cream dessert"],
      ["BISCOTTI", "Twice-baked almond cookies"],
    ]},
    { category: "Pixar films", difficulty: 2, words: [
      ["CARS", "Autos"],
      ["BRAVE", "Courageous"],
      ["ONWARD", "Forward"],
      ["ELEMENTAL", "Basic, fundamental"],
    ]},
    { category: "Rhymes with pickle", difficulty: 3, words: [
      ["NICKEL", "Five-cent coin"],
      ["TICKLE", "Make someone giggle"],
      ["SICKLE", "Curved harvesting blade"],
      ["FICKLE", "Changeable, inconstant"],
    ]},
  ]},
  // 80
  { groups: [
    { category: "Warm drinks", difficulty: 0, words: [
      ["COCOA", "Powder from cacao beans"],
      ["CIDER", "Pressed apple juice"],
      ["TODDY", "Hot whiskey nightcap"],
      ["LATTE", "Espresso with steamed milk"],
    ]},
    { category: "Cereal mascots", difficulty: 1, words: [
      ["TONY", "Broadway award"],
      ["SNAP", "Quick photo"],
      ["TOUCAN", "Big-billed bird"],
      ["COUNT", "Number tally"],
    ]},
    { category: "Mountain ranges", difficulty: 2, words: [
      ["ALPS", "Swiss peaks"],
      ["ANDES", "South American spine"],
      ["URALS", "Europe-Asia divider"],
      ["ATLAS", "Book of maps"],
    ]},
    { category: "Hidden insects", difficulty: 3, words: [
      ["PANTRY", "Kitchen storage closet"],
      ["BEEF", "Complaint, slangily"],
      ["FLYER", "Paper handbill"],
      ["MOTHER", "Mom"],
    ]},
  ]},
  // 81
  { groups: [
    { category: "Seafood dishes", difficulty: 0, words: [
      ["PAELLA", "Spanish saffron rice pan"],
      ["CEVICHE", "Citrus-cured raw fish"],
      ["SCAMPI", "Garlic-butter shrimp"],
      ["POKE", "Jab with a finger"],
    ]},
    { category: "Place setting", difficulty: 1, words: [
      ["FORK", "Split in a road"],
      ["KNIFE", "Cutlery blade"],
      ["SPOON", "Cuddle side by side"],
      ["NAPKIN", "Lap cloth"],
    ]},
    { category: "Martial arts", difficulty: 2, words: [
      ["KARATE", "The ___ Kid"],
      ["JUDO", "Olympic throwing sport"],
      ["AIKIDO", "Japanese art of redirection"],
      ["KUNGFU", "Panda's fighting style"],
    ]},
    { category: "___spoon", difficulty: 3, words: [
      ["SOUP", "Bowl of broth"],
      ["TABLE", "Dining furniture"],
      ["GREASY", "Oily"],
      ["WOODEN", "Made of timber"],
    ]},
  ]},
  // 82
  { groups: [
    { category: "Chicken parts", difficulty: 0, words: [
      ["THIGH", "Upper leg"],
      ["DRUMSTICK", "Percussion beater"],
      ["TENDER", "Gentle"],
      ["LIVER", "Bile-producing organ"],
    ]},
    { category: "Coffee origins", difficulty: 1, words: [
      ["KONA", "Big Island district"],
      ["SUMATRA", "Indonesian island"],
      ["ETHIOPIA", "Addis Ababa's nation"],
      ["COLOMBIA", "Bogota's nation"],
    ]},
    { category: "Ninja Turtles", difficulty: 2, words: [
      ["LEONARDO", "DiCaprio's first name"],
      ["RAPHAEL", "Archangel of healing"],
      ["DONATELLO", "Florentine sculptor of David"],
      ["MICHELANGELO", "Sistine Chapel painter"],
    ]},
    { category: "___stick", difficulty: 3, words: [
      ["CHOP", "Cut into pieces"],
      ["LIP", "Mouth edge"],
      ["JOY", "Happiness"],
      ["YARD", "Three feet"],
    ]},
  ]},
  // 83
  { groups: [
    { category: "Melons", difficulty: 0, words: [
      ["HONEYDEW", "Pale green sweet orb"],
      ["CANTALOUPE", "Orange-fleshed netted orb"],
      ["WATERMELON", "Big striped picnic fruit"],
      ["CASABA", "Wrinkly yellow winter variety"],
    ]},
    { category: "Cake decorating", difficulty: 1, words: [
      ["FONDANT", "Rolled sugar paste"],
      ["GANACHE", "Chocolate-cream glaze"],
      ["PIPING", "Very hot, ___ hot"],
      ["GLAZE", "Pottery's glassy coat"],
    ]},
    { category: "NASA programs", difficulty: 2, words: [
      ["APOLLO", "Greek sun god"],
      ["GEMINI", "Twins zodiac sign"],
      ["MERCURY", "Thermometer liquid metal"],
      ["ARTEMIS", "Moon goddess"],
    ]},
    { category: "___fall", difficulty: 3, words: [
      ["NIGHT", "Opposite of day"],
      ["LAND", "Solid ground"],
      ["RAIN", "Precipitation"],
      ["SNOW", "Winter flakes"],
    ]},
  ]},
  // 84
  { groups: [
    { category: "Cookies", difficulty: 0, words: [
      ["OATMEAL", "Hot porridge"],
      ["MACAROON", "Coconut drop treat"],
      ["GINGERSNAP", "Spiced crisp round"],
      ["FORTUNE", "Wealth"],
    ]},
    { category: "Hot sauces", difficulty: 1, words: [
      ["SRIRACHA", "Rooster-bottle chili sauce"],
      ["TABASCO", "Louisiana pepper sauce"],
      ["HARISSA", "North African chili paste"],
      ["SAMBAL", "Indonesian chili relish"],
    ]},
    { category: "Grandmas", difficulty: 2, words: [
      ["NANA", "Peter Pan's dog nursemaid"],
      ["GRAMMY", "Music award statuette"],
      ["GRANNY", "___ Smith apple"],
      ["OMA", "German for grandmother"],
    ]},
    { category: "___ pepper", difficulty: 3, words: [
      ["BELL", "Ringer in a tower"],
      ["GHOST", "Spirit"],
      ["BLACK", "Dark"],
      ["CHILI", "Spicy bean-and-meat stew"],
    ]},
  ]},
  // 85
  { groups: [
    { category: "Onion family", difficulty: 0, words: [
      ["SHALLOT", "Small mild bulb"],
      ["SCALLION", "Green onion"],
      ["LEEK", "Welsh national vegetable"],
      ["CHIVE", "Thin green garnish herb"],
    ]},
    { category: "Dairy products", difficulty: 1, words: [
      ["YOGURT", "Cultured breakfast cup"],
      ["CREAM", "Best part, the ___ of the crop"],
      ["CURD", "Lemon ___ tart filling"],
      ["WHEY", "Protein powder source"],
    ]},
    { category: "Moons", difficulty: 2, words: [
      ["TITAN", "Giant of Greek myth"],
      ["EUROPA", "Princess carried off by Zeus"],
      ["PHOBOS", "Greek god of fear"],
      ["TRITON", "Merman son of Poseidon"],
    ]},
    { category: "Drop the first letter for a food", difficulty: 3, words: [
      ["SHAM", "Pretense"],
      ["SPEAR", "Pointed weapon"],
      ["GOAT", "Bearded farm animal"],
      ["SLIME", "Gooey stuff"],
    ]},
  ]},
  // 86
  { groups: [
    { category: "Summer sippers", difficulty: 0, words: [
      ["LEMONADE", "Sweet-tart stand drink"],
      ["PUNCH", "Hit with a fist"],
      ["SLUSHIE", "Icy blended drink"],
      ["SANGRIA", "Spanish wine and fruit pitcher"],
    ]},
    { category: "Pancakes of the world", difficulty: 1, words: [
      ["BLINI", "Russian caviar rounds"],
      ["DOSA", "Crispy South Indian crepe"],
      ["LATKE", "Hanukkah potato fritter"],
      ["INJERA", "Ethiopian spongy flatbread"],
    ]},
    { category: "Beatles first names", difficulty: 2, words: [
      ["JOHN", "Bathroom, slangily"],
      ["PAUL", "Apostle who wrote epistles"],
      ["GEORGE", "Curious monkey of kids' books"],
      ["RINGO", "Drummer Starr"],
    ]},
    { category: "___ Bowl", difficulty: 3, words: [
      ["SUPER", "Excellent"],
      ["DUST", "Tiny dirt particles"],
      ["SUGAR", "Sweet white crystals"],
      ["FISH", "Swimmer with fins"],
    ]},
  ]},
  // 87
  { groups: [
    { category: "Disney princesses", difficulty: 0, words: [
      ["ARIEL", "Prospero's airy spirit in The Tempest"],
      ["BELLE", "Southern ___, a charming lady"],
      ["JASMINE", "Fragrant rice variety"],
      ["MULAN", "Disney heroine who disguised herself as a soldier"],
    ]},
    { category: "Breaking Bad characters", difficulty: 1, words: [
      ["WALT", "Whitman, Leaves of Grass poet"],
      ["JESSE", "Owens, 1936 Olympic sprinter"],
      ["SAUL", "King of Israel before David"],
      ["SKYLER", "Walter White's wife"],
    ]},
    { category: "Simpsons characters", difficulty: 2, words: [
      ["HOMER", "Ballpark long ball, slangily"],
      ["MOE", "Stooge with the bowl haircut"],
      ["LISA", "Mona ___, da Vinci portrait"],
      ["NED", "Stark of Winterfell"],
    ]},
    { category: "___ bear", difficulty: 3, words: [
      ["TEDDY", "Roosevelt's nickname"],
      ["POLAR", "Opposite in every way"],
      ["GUMMY", "Toothless, like a baby's smile"],
      ["GRIZZLY", "Big brown bear of Yellowstone"],
    ]},
  ]},
  // 88
  { groups: [
    { category: "Star Wars characters", difficulty: 0, words: [
      ["YODA", "Tiny green Jedi master"],
      ["LUKE", "Gospel writer and physician"],
      ["HAN", "Chinese dynasty"],
      ["REY", "Spanish word for king"],
    ]},
    { category: "Monopoly tokens", difficulty: 1, words: [
      ["BOOT", "Kick out"],
      ["THIMBLE", "Sewer's fingertip protector"],
      ["IRON", "Wrinkle remover"],
      ["BATTLESHIP", "Grid-guessing naval board game"],
    ]},
    { category: "Harrison Ford roles", difficulty: 2, words: [
      ["INDIANA", "The Hoosier State"],
      ["DECKARD", "Blade Runner's replicant hunter"],
      ["RYAN", "Gosling or Reynolds"],
      ["KIMBLE", "Dr. Richard ___ of The Fugitive"],
    ]},
    { category: "Hidden fish", difficulty: 3, words: [
      ["FORTUNATE", "Lucky"],
      ["SOLEMN", "Serious and dignified"],
      ["RAYON", "Silky synthetic fabric"],
      ["CARPET", "Floor covering"],
    ]},
  ]},
  // 89
  { groups: [
    { category: "Breakfast cereals", difficulty: 0, words: [
      ["CHEERIOS", "British goodbyes"],
      ["TRIX", "Cereal that's 'for kids,' says the rabbit"],
      ["CHEX", "Checkered cereal squares"],
      ["LIFE", "Existence"],
    ]},
    { category: "Hogwarts professors", difficulty: 1, words: [
      ["SNAPE", "Potions master in Harry Potter"],
      ["SPROUT", "Young shoot of a plant"],
      ["MOODY", "Prone to sulks"],
      ["LUPIN", "Tall purple-flowered plant"],
    ]},
    { category: "Inside Out emotions", difficulty: 2, words: [
      ["ENNUI", "Listless boredom"],
      ["ANXIETY", "Nervous worry"],
      ["DISGUST", "Strong revulsion"],
      ["SADNESS", "Sorrow"],
    ]},
    { category: "Color anagrams", difficulty: 3, words: [
      ["GENRE", "Category of art or music"],
      ["MILE", "Exactly 5,280 feet"],
      ["LATE", "Not on time"],
      ["SORE", "Achy"],
    ]},
  ]},
  // 90
  { groups: [
    { category: "Friends characters", difficulty: 0, words: [
      ["JOEY", "Baby kangaroo"],
      ["ROSS", "Diana of the Supremes"],
      ["CHANDLER", "Old-time candle maker"],
      ["PHOEBE", "Moon of Saturn"],
    ]},
    { category: "Nintendo heroes", difficulty: 1, words: [
      ["LINK", "Chain segment"],
      ["KIRBY", "Brand of vacuum cleaner"],
      ["YOSHI", "Mario's green dinosaur steed"],
      ["ZELDA", "Mrs. F. Scott Fitzgerald"],
    ]},
    { category: "Mario baddies", difficulty: 2, words: [
      ["GOOMBA", "Mushroom-shaped walking foe"],
      ["BOO", "Jeer from the crowd"],
      ["BOWSER", "Spiky turtle king"],
      ["KOOPA", "Turtle trooper in Mario"],
    ]},
    { category: "Start with a Greek letter", difficulty: 3, words: [
      ["TAUNT", "Mock or jeer"],
      ["MUSTARD", "Yellow hot dog topping"],
      ["CHIMNEY", "Smoke outlet on a roof"],
      ["PILLOW", "Bedtime head rest"],
    ]},
  ]},
  // 91
  { groups: [
    { category: "Toy Story characters", difficulty: 0, words: [
      ["WOODY", "Like a forest"],
      ["BUZZ", "Bee's hum"],
      ["REX", "Latin for king"],
      ["HAMM", "Mia, US soccer legend"],
    ]},
    { category: "Bee words", difficulty: 1, words: [
      ["HIVE", "Colony's home"],
      ["HONEY", "Sweetie, as a pet name"],
      ["STING", "Lead singer of the Police"],
      ["DRONE", "Flying camera gadget"],
    ]},
    { category: "Astronauts", difficulty: 2, words: [
      ["ARMSTRONG", "Louis, jazz trumpeter"],
      ["ALDRIN", "Second man on the moon"],
      ["GLENN", "Close, Fatal Attraction actress"],
      ["RIDE", "Roller coaster trip"],
    ]},
    { category: "Space ___", difficulty: 3, words: [
      ["JAM", "Fruit spread"],
      ["CADET", "Military academy student"],
      ["CAMP", "Tent site"],
      ["STATION", "Train stop"],
    ]},
  ]},
  // 92
  { groups: [
    { category: "Avengers", difficulty: 0, words: [
      ["THOR", "Thursday's namesake god"],
      ["HULK", "Huge, hefty guy"],
      ["WASP", "Stinging insect"],
      ["VISION", "Eyesight"],
    ]},
    { category: "One-name singers", difficulty: 1, words: [
      ["ADELE", "Singer of Rolling in the Deep"],
      ["CHER", "French for dear"],
      ["MADONNA", "Virgin Mary in art"],
      ["PRINCE", "Royal heir"],
    ]},
    { category: "Chess pieces", difficulty: 2, words: [
      ["QUEEN", "Band behind Bohemian Rhapsody"],
      ["KNIGHT", "Holder of the title Sir"],
      ["ROOK", "Crow-like bird"],
      ["BISHOP", "Church official"],
    ]},
    { category: "Letter homophones", difficulty: 3, words: [
      ["QUEUE", "Line of waiting people"],
      ["EWE", "Female sheep"],
      ["JAY", "Blue-crested bird"],
      ["SEA", "Ocean"],
    ]},
  ]},
  // 93
  { groups: [
    { category: "Sitcoms", difficulty: 0, words: [
      ["CHEERS", "Clinking-glasses toast"],
      ["TAXI", "Yellow cab"],
      ["COMMUNITY", "Neighborhood group"],
      ["FRIENDS", "Pals"],
    ]},
    { category: "Seinfeld characters", difficulty: 1, words: [
      ["ELAINE", "Benes of the little kicks"],
      ["KRAMER", "Jerry's sliding-in neighbor"],
      ["GEORGE", "Curious monkey of kids' books"],
      ["NEWMAN", "Paul, blue-eyed movie star"],
    ]},
    { category: "Talk show hosts", difficulty: 2, words: [
      ["CONAN", "___ the Barbarian"],
      ["LENO", "Jay with the big chin"],
      ["OPRAH", "Winfrey of book club fame"],
      ["KIMMEL", "Jimmy of late night"],
    ]},
    { category: "Hidden trees", difficulty: 3, words: [
      ["HELMET", "Biker's headgear"],
      ["SOAKED", "Drenched"],
      ["CASHEW", "Kidney-shaped nut"],
      ["SPINE", "Book's backbone"],
    ]},
  ]},
  // 94
  { groups: [
    { category: "Fictional dogs", difficulty: 0, words: [
      ["LASSIE", "Young girl, in Scotland"],
      ["SNOOPY", "Nosy, prying"],
      ["PLUTO", "Dwarf planet"],
      ["BEETHOVEN", "Composer of the Fifth Symphony"],
    ]},
    { category: "Composers", difficulty: 1, words: [
      ["BACH", "Composer of the Brandenburg Concertos"],
      ["CHOPIN", "Polish piano poet"],
      ["VERDI", "Italian who composed Aida"],
      ["MOZART", "Wolfgang Amadeus"],
    ]},
    { category: "Film studios", difficulty: 2, words: [
      ["PARAMOUNT", "Supreme, foremost"],
      ["UNIVERSAL", "Worldwide"],
      ["COLUMBIA", "District of ___"],
      ["PIXAR", "Lamp-logo animation studio"],
    ]},
    { category: "Animal anagrams", difficulty: 3, words: [
      ["SHORE", "Beach's edge"],
      ["FLOW", "Stream along"],
      ["SNEAK", "Creep quietly"],
      ["LOINS", "Cuts of pork"],
    ]},
  ]},
  // 95
  { groups: [
    { category: "Video game consoles", difficulty: 0, words: [
      ["GENESIS", "First book of the Bible"],
      ["SWITCH", "Light toggle"],
      ["SATURN", "Ringed planet"],
      ["GAMECUBE", "Nintendo console after the N64"],
    ]},
    { category: "Books of the Bible", difficulty: 1, words: [
      ["EXODUS", "Mass departure"],
      ["JOB", "Employment"],
      ["MARK", "Smudge or stain"],
      ["NUMBERS", "Digits"],
    ]},
    { category: "Bands named for places", difficulty: 2, words: [
      ["KANSAS", "Dorothy's home state"],
      ["BOSTON", "Beantown"],
      ["CHICAGO", "The Windy City"],
      ["ASIA", "Largest continent"],
    ]},
    { category: "___ Wars", difficulty: 3, words: [
      ["STAR", "The sun, for one"],
      ["CLONE", "Exact copy"],
      ["PRICE", "Cost"],
      ["ROBOT", "Mechanical worker"],
    ]},
  ]},
  // 96
  { groups: [
    { category: "Sesame Street", difficulty: 0, words: [
      ["ELMO", "Red furry monster who loves tickles"],
      ["GROVER", "Cleveland, two-term president"],
      ["COUNT", "Tally up"],
      ["ERNIE", "Golfer Els"],
    ]},
    { category: "Vampire lore", difficulty: 1, words: [
      ["FANG", "Snake's venom tooth"],
      ["COFFIN", "Casket"],
      ["STAKE", "Wager, as in poker"],
      ["GARLIC", "Pungent bulb for pasta"],
    ]},
    { category: "Twilight characters", difficulty: 2, words: [
      ["BELLA", "Beautiful, in Italian"],
      ["EDWARD", "___ Scissorhands"],
      ["JACOB", "Son of Isaac"],
      ["ALICE", "Wonderland visitor"],
    ]},
    { category: "___ball", difficulty: 3, words: [
      ["ODD", "Strange"],
      ["SCREW", "Twisty fastener"],
      ["GUM", "Chewy treat"],
      ["MEAT", "Butcher's goods"],
    ]},
  ]},
  // 97
  { groups: [
    { category: "Superman characters", difficulty: 0, words: [
      ["LEX", "Latin for law"],
      ["JIMMY", "Pry open a lock"],
      ["CLARK", "Lewis's exploring partner"],
      ["LOIS", "Peter Griffin's wife"],
    ]},
    { category: "Bond actors", difficulty: 1, words: [
      ["MOORE", "Demi of Ghost"],
      ["CRAIG", "Daniel of Knives Out"],
      ["DALTON", "Timothy who played 007 twice"],
      ["CONNERY", "Sean, the first film 007"],
    ]},
    { category: "Bond films", difficulty: 2, words: [
      ["SKYFALL", "Adele sang its theme"],
      ["SPECTRE", "Ghostly apparition"],
      ["GOLDFINGER", "Shirley Bassey sang its theme"],
      ["MOONRAKER", "Bond goes to space in this"],
    ]},
    { category: "___stone", difficulty: 3, words: [
      ["KEY", "Lock opener"],
      ["LIME", "Green citrus"],
      ["CORNER", "Where two walls meet"],
      ["TOMB", "Burial chamber"],
    ]},
  ]},
  // 98
  { groups: [
    { category: "Pac-Man ghosts", difficulty: 0, words: [
      ["BLINKY", "Red ghost in a maze game"],
      ["PINKY", "Smallest finger"],
      ["INKY", "Smudged black"],
      ["CLYDE", "Bonnie's partner in crime"],
    ]},
    { category: "Cartoon mice", difficulty: 1, words: [
      ["JERRY", "Comedian Seinfeld"],
      ["SPEEDY", "Fast"],
      ["STUART", "Royal house of Scotland"],
      ["MICKEY", "Take the ___, to tease"],
    ]},
    { category: "Fast food chains", difficulty: 2, words: [
      ["WENDYS", "Pigtailed redhead's burger chain"],
      ["SUBWAY", "Underground train"],
      ["SONIC", "Sega's blue hedgehog"],
      ["POPEYES", "Spinach-loving sailor's peepers"],
    ]},
    { category: "End in a vehicle", difficulty: 3, words: [
      ["VICAR", "Parish priest"],
      ["SCAB", "Healing wound crust"],
      ["WORSHIP", "Revere"],
      ["CARAVAN", "Desert camel train"],
    ]},
  ]},
  // 99
  { groups: [
    { category: "Scooby-Doo gang", difficulty: 0, words: [
      ["FRED", "Astaire, dancer"],
      ["DAPHNE", "Nymph who became a laurel tree"],
      ["VELMA", "Kelly of the musical Chicago"],
      ["SHAGGY", "Unkempt and hairy"],
    ]},
    { category: "Flintstones characters", difficulty: 1, words: [
      ["WILMA", "Big 2005 hurricane"],
      ["BARNEY", "Purple TV dinosaur"],
      ["PEBBLES", "Small stones"],
      ["BETTY", "White of Golden Girls fame"],
    ]},
    { category: "Things with tails", difficulty: 2, words: [
      ["KITE", "Toy flown on a string"],
      ["COMET", "Icy body orbiting the sun"],
      ["COIN", "Penny or dime"],
      ["TADPOLE", "Baby frog"],
    ]},
    { category: "Sound like body parts", difficulty: 3, words: [
      ["HARE", "Tortoise's racing rival"],
      ["NAVAL", "Of the fleet"],
      ["HEAL", "Mend"],
      ["MUSSEL", "Shellfish in paella"],
    ]},
  ]},
  // 100
  { groups: [
    { category: "Famous Toms", difficulty: 0, words: [
      ["HANKS", "Twisted coils of yarn"],
      ["CRUISE", "Ocean voyage"],
      ["BRADY", "Bunch of TV siblings"],
      ["HIDDLESTON", "Actor who plays Loki"],
    ]},
    { category: "Beach bag items", difficulty: 1, words: [
      ["TOWEL", "Absorbent drying cloth"],
      ["SANDALS", "Open-toed footwear"],
      ["SUNSCREEN", "SPF lotion"],
      ["BUCKET", "___ list, life goals"],
    ]},
    { category: "Dutch things", difficulty: 2, words: [
      ["TULIP", "Spring bulb flower"],
      ["CLOG", "Block a drain"],
      ["WINDMILL", "Farm power tower with sails"],
      ["GOUDA", "Mild yellow cheese"],
    ]},
    { category: "Start with a day abbreviation", difficulty: 3, words: [
      ["SATIN", "Glossy fabric"],
      ["FRIDGE", "Where leftovers go"],
      ["WEDGE", "Doorstop shape"],
      ["MONKEY", "Banana-loving primate"],
    ]},
  ]},
  // 101
  { groups: [
    { category: "Wizard of Oz", difficulty: 0, words: [
      ["TOTO", "Band behind the song Africa"],
      ["LION", "King of the jungle"],
      ["SCARECROW", "Straw field guardian"],
      ["GLINDA", "Good Witch of the North"],
    ]},
    { category: "Garden tools", difficulty: 1, words: [
      ["RAKE", "Dissolute playboy"],
      ["EDGER", "Lawn-border trimming tool"],
      ["TROWEL", "Bricklayer's spreading tool"],
      ["SHEARS", "Big scissors"],
    ]},
    { category: "Famous lions", difficulty: 2, words: [
      ["ASLAN", "Narnia's great lion"],
      ["MUFASA", "Simba's father"],
      ["ELSA", "Frozen's snow queen"],
      ["ALEX", "Trebek of Jeopardy!"],
    ]},
    { category: "___ Brothers", difficulty: 3, words: [
      ["WRIGHT", "Maker, as in ship___"],
      ["MARX", "Karl who wrote Das Kapital"],
      ["JONAS", "Salk of polio vaccine fame"],
      ["BLUES", "Sad feelings"],
    ]},
  ]},
  // 102
  { groups: [
    { category: "Game of Thrones houses", difficulty: 0, words: [
      ["STARK", "Bleak and bare"],
      ["LANNISTER", "Family of Tyrion and Cersei"],
      ["TARGARYEN", "Dragon-riding royal family"],
      ["GREYJOY", "Iron Islands ruling family"],
    ]},
    { category: "Ice Age characters", difficulty: 1, words: [
      ["MANNY", "Pacquiao, boxing champ"],
      ["SID", "Vicious of the Sex Pistols"],
      ["DIEGO", "San ___, California city"],
      ["SCRAT", "Acorn-chasing prehistoric squirrel"],
    ]},
    { category: "Winter Olympic sports", difficulty: 2, words: [
      ["LUGE", "Feet-first sled race"],
      ["CURLING", "Making ringlets in hair"],
      ["SKELETON", "Bony frame"],
      ["BOBSLED", "Team sled down an icy chute"],
    ]},
    { category: "___jack", difficulty: 3, words: [
      ["FLAP", "Wave wings"],
      ["CAR", "Sedan or coupe"],
      ["APPLE", "iPhone maker"],
      ["LUMBER", "Timber"],
    ]},
  ]},
  // 103
  { groups: [
    { category: "Pokemon", difficulty: 0, words: [
      ["PIKACHU", "Yellow electric mouse"],
      ["DITTO", "Same here!"],
      ["SNORLAX", "Huge sleepy blocker"],
      ["ABRA", "Psychic Pokemon that teleports away"],
    ]},
    { category: "Magic words", difficulty: 1, words: [
      ["PRESTO", "Very fast, in music"],
      ["SHAZAM", "Song-identifying app"],
      ["HOCUSPOCUS", "Halloween film with Sanderson sisters"],
      ["OPENSESAME", "Ali Baba's password"],
    ]},
    { category: "Poker hands", difficulty: 2, words: [
      ["FLUSH", "Toilet handle action"],
      ["STRAIGHT", "Not curved"],
      ["PAIR", "Couple"],
      ["FULLHOUSE", "Sitcom with the Tanner family"],
    ]},
    { category: "___card", difficulty: 3, words: [
      ["WILD", "Untamed"],
      ["POST", "Mail"],
      ["SCORE", "Twenty"],
      ["FLASH", "Speedy DC hero"],
    ]},
  ]},
  // 104
  { groups: [
    { category: "SpongeBob characters", difficulty: 0, words: [
      ["SANDY", "Like a beach"],
      ["PLANKTON", "Tiny drifting sea life"],
      ["GARY", "Indiana city"],
      ["PATRICK", "Patron saint of Ireland"],
    ]},
    { category: "Birthday party items", difficulty: 1, words: [
      ["CAKE", "Layered dessert"],
      ["CANDLES", "Wax light sources"],
      ["BALLOONS", "Swells up rapidly"],
      ["PRESENTS", "Introduces formally"],
    ]},
    { category: "Marine mammals", difficulty: 2, words: [
      ["SEAL", "Close an envelope"],
      ["OTTER", "Playful river swimmer"],
      ["WALRUS", "I Am the ___, Beatles song"],
      ["MANATEE", "Sea cow"],
    ]},
    { category: "Sweet ___", difficulty: 3, words: [
      ["TOOTH", "Molar or incisor"],
      ["PEA", "Pod veggie"],
      ["TALK", "Chat"],
      ["CORN", "Kernels on a cob"],
    ]},
  ]},
  // 105
  { groups: [
    { category: "Classic video games", difficulty: 0, words: [
      ["PONG", "Ping's partner"],
      ["DOOM", "Grim fate"],
      ["ASTEROIDS", "Space rocks"],
      ["TETRIS", "Falling-block puzzle game"],
    ]},
    { category: "Video game publishers", difficulty: 1, words: [
      ["SEGA", "Sonic's publisher"],
      ["ATARI", "Maker of Breakout"],
      ["CAPCOM", "Street Fighter publisher"],
      ["KONAMI", "Frogger and Metal Gear publisher"],
    ]},
    { category: "Space movies", difficulty: 2, words: [
      ["GRAVITY", "Newton's apple-dropping force"],
      ["CONTACT", "Touch"],
      ["ARMAGEDDON", "Final battle of the world"],
      ["PASSENGERS", "Riders on a train"],
    ]},
    { category: "Mega___", difficulty: 3, words: [
      ["BYTE", "Eight bits"],
      ["WATT", "Unit of power"],
      ["TON", "Two thousand pounds"],
      ["HERTZ", "Car rental company"],
    ]},
  ]},
  // 106
  { groups: [
    { category: "Golden Girls", difficulty: 0, words: [
      ["DOROTHY", "Girl from Kansas in Oz"],
      ["ROSE", "Red flower"],
      ["BLANCHE", "Turn pale"],
      ["SOPHIA", "Loren, Italian film star"],
    ]},
    { category: "Types of tea", difficulty: 1, words: [
      ["GREEN", "Golf putting area"],
      ["BLACK", "Darkest color"],
      ["OOLONG", "Partly oxidized Chinese tea"],
      ["CHAI", "Spiced milky Indian tea"],
    ]},
    { category: "Fictional detectives", difficulty: 2, words: [
      ["MONK", "Robed brother"],
      ["SPADE", "Card suit"],
      ["COLUMBO", "Rumpled TV cop with one more thing"],
      ["POIROT", "Christie's Belgian sleuth"],
    ]},
    { category: "Hidden car brands", difficulty: 3, words: [
      ["AUDITION", "Tryout for a role"],
      ["AFFORDABLE", "Reasonably priced"],
      ["MINISTER", "Government official"],
      ["DODGEBALL", "Gym class throwing game"],
    ]},
  ]},
  // 107
  { groups: [
    { category: "Lord of the Rings characters", difficulty: 0, words: [
      ["MERRY", "Jolly"],
      ["PIPPIN", "Old apple variety"],
      ["FRODO", "Ring-bearer from the Shire"],
      ["GOLLUM", "Precious-obsessed creature"],
    ]},
    { category: "Jewelry", difficulty: 1, words: [
      ["RING", "Phone sound"],
      ["BROOCH", "Decorative pin"],
      ["ANKLET", "Chain worn above the foot"],
      ["PENDANT", "Hanging charm on a chain"],
    ]},
    { category: "Castle features", difficulty: 2, words: [
      ["MOAT", "Water-filled ditch"],
      ["TOWER", "Tall narrow building"],
      ["KEEP", "Retain"],
      ["TURRET", "Small tower on a tank"],
    ]},
    { category: "Hidden ORC", difficulty: 3, words: [
      ["FORCE", "Physics push or pull"],
      ["PORCH", "Covered front step"],
      ["ORCHARD", "Fruit tree grove"],
      ["SCORCH", "Singe"],
    ]},
  ]},
  // 108
  { groups: [
    { category: "Cartoon cats", difficulty: 0, words: [
      ["GARFIELD", "20th US president"],
      ["TOM", "Male turkey"],
      ["SYLVESTER", "Stallone's first name"],
      ["FELIX", "Oscar's neat roommate"],
    ]},
    { category: "Famous Jimmys", difficulty: 1, words: [
      ["BUFFETT", "Margaritaville singer"],
      ["HENDRIX", "Purple Haze guitarist"],
      ["STEWART", "Martha, lifestyle guru"],
      ["DEAN", "College administrator"],
    ]},
    { category: "Presidents' surnames", difficulty: 2, words: [
      ["GRANT", "Award of money"],
      ["PIERCE", "Puncture"],
      ["CARTER", "One who drives a cart"],
      ["TAFT", "Heaviest president"],
    ]},
    { category: "Start with a farm animal", difficulty: 3, words: [
      ["PIGMENT", "Coloring substance"],
      ["RAMBLE", "Talk on and on"],
      ["GOATEE", "Chin beard"],
      ["BULLET", "Gun's projectile"],
    ]},
  ]},
  // 109
  { groups: [
    { category: "Looney Tunes", difficulty: 0, words: [
      ["BUGS", "Insects"],
      ["DAFFY", "Silly, goofy"],
      ["PORKY", "Overweight"],
      ["TWEETY", "Yellow canary"],
    ]},
    { category: "Pies", difficulty: 1, words: [
      ["PUMPKIN", "Cinderella's coach, before"],
      ["CUSTARD", "Yellow egg dessert"],
      ["RHUBARB", "Noisy quarrel, slangily"],
      ["BLUEBERRY", "Small dark berry"],
    ]},
    { category: "Social media actions", difficulty: 2, words: [
      ["LIKE", "Similar to"],
      ["SHARE", "Unit of stock"],
      ["FOLLOW", "Trail behind"],
      ["TAG", "Playground chasing game"],
    ]},
    { category: "Things with eyes", difficulty: 3, words: [
      ["NEEDLE", "Haystack-hidden item"],
      ["POTATO", "Spud"],
      ["HURRICANE", "Tropical cyclone"],
      ["PEACOCK", "Show-off bird"],
    ]},
  ]},
  // 110
  { groups: [
    { category: "Michael Jackson albums", difficulty: 0, words: [
      ["THRILLER", "Suspense genre"],
      ["BAD", "Not good"],
      ["DANGEROUS", "Risky"],
      ["INVINCIBLE", "Unbeatable"],
    ]},
    { category: "Horror villains", difficulty: 1, words: [
      ["JASON", "Argonaut leader"],
      ["FREDDY", "Krueger of Elm Street"],
      ["CHUCKY", "Killer doll"],
      ["PENNYWISE", "Thrifty in small matters"],
    ]},
    { category: "Bathroom items", difficulty: 2, words: [
      ["SOAP", "Daytime drama"],
      ["SHAMPOO", "Hair wash"],
      ["LOOFAH", "Scrubbing sponge gourd"],
      ["PLUNGER", "Clog-clearing tool"],
    ]},
    { category: "Body part plus a letter", difficulty: 3, words: [
      ["LEGO", "Brick toy brand"],
      ["CHINA", "Fine dinnerware"],
      ["ARMY", "Military force"],
      ["SHINE", "Gleam"],
    ]},
  ]},
  // 111
  { groups: [
    { category: "Units of time", difficulty: 0, words: [
      ["SECOND", "Runner-up"],
      ["MINUTE", "Tiny"],
      ["DECADE", "Ten years"],
      ["MONTH", "About four weeks"],
    ]},
    { category: "Back to the Future characters", difficulty: 1, words: [
      ["MARTY", "1955 Best Picture about a butcher"],
      ["DOC", "Physician, informally"],
      ["BIFF", "Punch, in comics"],
      ["LORRAINE", "Quiche region of France"],
    ]},
    { category: "Watch brands", difficulty: 2, words: [
      ["ROLEX", "Luxury Swiss timepiece"],
      ["TIMEX", "Takes a licking, keeps on ticking"],
      ["SWATCH", "Fabric sample"],
      ["CASIO", "Calculator maker"],
    ]},
    { category: "___ hour", difficulty: 3, words: [
      ["RUSH", "Hurry"],
      ["ZERO", "Nothing"],
      ["AMATEUR", "Non-professional"],
      ["WITCHING", "Casting spells"],
    ]},
  ]},
  // 112
  { groups: [
    { category: "Christopher Nolan films", difficulty: 0, words: [
      ["TENET", "Core belief"],
      ["MEMENTO", "Keepsake"],
      ["INSOMNIA", "Sleeplessness"],
      ["DUNKIRK", "WWII evacuation port"],
    ]},
    { category: "Short sleeps", difficulty: 1, words: [
      ["NAP", "Fuzzy surface of fabric"],
      ["DOZE", "Drift off"],
      ["SNOOZE", "Alarm-delay button"],
      ["SIESTA", "Spanish afternoon rest"],
    ]},
    { category: "Camera gear", difficulty: 2, words: [
      ["LENS", "Eyeglass piece"],
      ["SHUTTER", "Window cover"],
      ["TRIPOD", "Three-legged stand"],
      ["VIEWFINDER", "Eyepiece for framing a shot"],
    ]},
    { category: "___shot", difficulty: 3, words: [
      ["SNAP", "Break with a crack"],
      ["SLING", "Arm-injury support"],
      ["MUG", "Coffee cup"],
      ["BUCK", "Male deer"],
    ]},
  ]},
  // 113
  { groups: [
    { category: "DreamWorks films", difficulty: 0, words: [
      ["SHREK", "Ogre in a swamp"],
      ["TROLLS", "Bridge-dwelling monsters"],
      ["TURBO", "Engine booster"],
      ["MADAGASCAR", "Big island off Africa"],
    ]},
    { category: "Cars characters", difficulty: 1, words: [
      ["MATER", "Alma ___, one's old school"],
      ["SALLY", "Ride, first American woman in space"],
      ["MCQUEEN", "Steve of The Great Escape"],
      ["LUIGI", "Mario's brother"],
    ]},
    { category: "Engine parts", difficulty: 2, words: [
      ["PISTON", "Detroit NBA player"],
      ["VALVE", "Heart flap"],
      ["GASKET", "Blow a ___, lose your temper"],
      ["CRANKSHAFT", "Rotating engine rod"],
    ]},
    { category: "Silent K", difficulty: 3, words: [
      ["KNOT", "Tie in a rope"],
      ["KNACK", "Talent"],
      ["KNEAD", "Work dough"],
      ["KNUCKLE", "Finger joint"],
    ]},
  ]},
  // 114
  { groups: [
    { category: "Stranger Things characters", difficulty: 0, words: [
      ["ELEVEN", "Players on a soccer side"],
      ["WILL", "Inheritance document"],
      ["MAX", "Upper limit, informally"],
      ["HOPPER", "Nighthawks painter Edward"],
    ]},
    { category: "Sandwiches", difficulty: 1, words: [
      ["CLUB", "Golf stick"],
      ["REUBEN", "Corned beef on rye"],
      ["PANINI", "Pressed Italian sandwich"],
      ["GYRO", "Greek pita wrap"],
    ]},
    { category: "Shades of blue", difficulty: 2, words: [
      ["NAVY", "Sailors' service"],
      ["TEAL", "Dabbling duck"],
      ["AZURE", "Cloudless sky color"],
      ["COBALT", "Metal element Co"],
    ]},
    { category: "___man", difficulty: 3, words: [
      ["SUPER", "Excellent"],
      ["MAIL", "Letters"],
      ["PAC", "Political action committee, briefly"],
      ["SPIDER", "Eight-legged web spinner"],
    ]},
  ]},
  // 115
  { groups: [
    { category: "The Office characters", difficulty: 0, words: [
      ["CREED", "Statement of belief"],
      ["STANLEY", "___ Cup, hockey trophy"],
      ["DWIGHT", "Eisenhower's first name"],
      ["PAM", "Cooking spray brand"],
    ]},
    { category: "Hockey terms", difficulty: 1, words: [
      ["PUCK", "Mischief sprite in Midsummer"],
      ["ICING", "Cake frosting"],
      ["RINK", "Skating surface"],
      ["GOALIE", "Net minder"],
    ]},
    { category: "Shakespeare characters", difficulty: 2, words: [
      ["HAMLET", "Small village"],
      ["OTHELLO", "Black-and-white disc board game"],
      ["LEAR", "Edward, nonsense poet"],
      ["IAGO", "Jafar's parrot in Aladdin"],
    ]},
    { category: "Hidden boys' names", difficulty: 3, words: [
      ["TEDIOUS", "Boring"],
      ["MATTRESS", "Bed's cushion"],
      ["SAMPLE", "Free taste"],
      ["BOBBIN", "Thread spool"],
    ]},
  ]},
  // 116
  { groups: [
    { category: "Harry Potter spells", difficulty: 0, words: [
      ["ACCIO", "Summoning charm"],
      ["LUMOS", "Wand-lighting charm"],
      ["NOX", "Wand-darkening charm"],
      ["STUPEFY", "Stun or astonish"],
    ]},
    { category: "Light sources", difficulty: 1, words: [
      ["LAMP", "Bedside light"],
      ["LANTERN", "Jack-o'-___"],
      ["TORCH", "Olympic flame carrier"],
      ["FLASHLIGHT", "Battery-powered handheld light"],
    ]},
    { category: "Cat breeds", difficulty: 2, words: [
      ["SIAMESE", "Thai, in old terms"],
      ["PERSIAN", "Iranian, in old terms"],
      ["BENGAL", "Bay off India"],
      ["RAGDOLL", "Limp, floppy toy"],
    ]},
    { category: "Add ION to get a word", difficulty: 3, words: [
      ["LOT", "Parking area"],
      ["CHAMP", "Title holder, informally"],
      ["MILL", "Grinding place"],
      ["BULL", "Male bovine"],
    ]},
  ]},
  // 117
  { groups: [
    { category: "Disney villains", difficulty: 0, words: [
      ["SCAR", "Healed wound mark"],
      ["HADES", "Greek underworld"],
      ["URSULA", "Sea witch with tentacles"],
      ["JAFAR", "Sorcerer with a parrot sidekick"],
    ]},
    { category: "Pets", difficulty: 1, words: [
      ["HAMSTER", "Wheel-running rodent"],
      ["GOLDFISH", "Bowl swimmer"],
      ["PARROT", "Repeat mindlessly"],
      ["FERRET", "Search out"],
    ]},
    { category: "Disney sidekicks", difficulty: 2, words: [
      ["FLOUNDER", "Struggle clumsily"],
      ["SEBASTIAN", "Bach's middle name, Johann ___"],
      ["PASCAL", "Unit of pressure"],
      ["ABU", "Aladdin's monkey pal"],
    ]},
    { category: "Monkey ___", difficulty: 3, words: [
      ["ISLAND", "Atoll"],
      ["BUSINESS", "Commerce"],
      ["BARS", "Pubs"],
      ["SUIT", "Legal case in court"],
    ]},
  ]},
  // 118
  { groups: [
    { category: "Doctor TV shows", difficulty: 0, words: [
      ["HOUSE", "Home"],
      ["SCRUBS", "Cleans hard"],
      ["MASH", "Potato prep"],
      ["BONES", "Dice, slangily"],
    ]},
    { category: "Bones of the body", difficulty: 1, words: [
      ["RIB", "Tease gently"],
      ["FEMUR", "Thigh bone"],
      ["SKULL", "Pirate flag symbol"],
      ["PELVIS", "Hip girdle"],
    ]},
    { category: "Famous horses", difficulty: 2, words: [
      ["SEABISCUIT", "Underdog racehorse of a 2003 film"],
      ["SECRETARIAT", "Administrative office"],
      ["TRIGGER", "Gun's firing lever"],
      ["SILVER", "Second-place medal metal"],
    ]},
    { category: "Dr. ___", difficulty: 3, words: [
      ["JEKYLL", "Hyde's respectable alter ego"],
      ["STRANGE", "Odd"],
      ["EVIL", "Wicked"],
      ["PHIL", "Collins, Genesis drummer"],
    ]},
  ]},
  // 119
  { groups: [
    { category: "Beatles songs", difficulty: 0, words: [
      ["HELP", "Assist"],
      ["YESTERDAY", "The day before today"],
      ["GIRL", "Young lady"],
      ["MICHELLE", "Obama, former first lady"],
    ]},
    { category: "Kinds of shark", difficulty: 1, words: [
      ["TIGER", "Striped big cat"],
      ["NURSE", "Hospital caregiver"],
      ["HAMMERHEAD", "Shark with a T-shaped head"],
      ["MAKO", "Fastest shark"],
    ]},
    { category: "Golfers", difficulty: 2, words: [
      ["WOODS", "Forest"],
      ["PALMER", "Iced tea and lemonade namesake"],
      ["NICKLAUS", "The Golden Bear"],
      ["SPIETH", "Jordan, 2015 Masters champ"],
    ]},
    { category: "Anagrams of LISTEN", difficulty: 3, words: [
      ["SILENT", "Making no sound"],
      ["TINSEL", "Shiny tree garland"],
      ["ENLIST", "Join the army"],
      ["INLETS", "Small coastal bays"],
    ]},
  ]},
  // 120
  { groups: [
    { category: "Minecraft mobs", difficulty: 0, words: [
      ["CREEPER", "Climbing vine"],
      ["ENDERMAN", "Tall teleporting block thief"],
      ["GHAST", "Floating Nether ghost"],
      ["WITHER", "Shrivel and dry up"],
    ]},
    { category: "Houseplants", difficulty: 1, words: [
      ["FERN", "Feathery-fronded plant"],
      ["CACTUS", "Prickly desert plant"],
      ["IVY", "___ League"],
      ["ALOE", "Sunburn gel plant"],
    ]},
    { category: "Gamer slang", difficulty: 2, words: [
      ["NOOB", "Clueless beginner"],
      ["LAG", "Fall behind"],
      ["NERF", "Foam dart blaster brand"],
      ["BUFF", "Polish to a shine"],
    ]},
    { category: "___craft", difficulty: 3, words: [
      ["HOVER", "Float in place"],
      ["MINE", "Belonging to me"],
      ["HAND", "Palm and fingers"],
      ["WAR", "Battle"],
    ]},
  ]},
  // 121
  { groups: [
    { category: "Classic toys", difficulty: 0, words: [
      ["SLINKY", "Sleek and curvy"],
      ["FRISBEE", "Flying disc"],
      ["BARBIE", "Doll with a Dreamhouse"],
      ["FURBY", "Owl-like talking toy"],
    ]},
    { category: "Halloween costumes", difficulty: 1, words: [
      ["WITCH", "Broom rider"],
      ["GHOST", "Suddenly stop texting someone"],
      ["PIRATE", "Illegal copier"],
      ["MUMMY", "Mom, in Britain"],
    ]},
    { category: "Baking verbs", difficulty: 2, words: [
      ["WHIP", "Lion tamer's tool"],
      ["FOLD", "Give up in poker"],
      ["CREAM", "Defeat soundly"],
      ["SIFT", "Search through thoroughly"],
    ]},
    { category: "Repeated halves", difficulty: 3, words: [
      ["BONBON", "Chocolate-coated candy"],
      ["COUSCOUS", "Tiny semolina pasta"],
      ["CANCAN", "High-kicking dance"],
      ["DODO", "Extinct flightless bird"],
    ]},
  ]},
  // 122
  { groups: [
    { category: "Kardashians", difficulty: 0, words: [
      ["KHLOE", "Tallest Kardashian sister"],
      ["KOURTNEY", "Eldest Kardashian sister"],
      ["KYLIE", "Minogue, Aussie pop star"],
      ["KENDALL", "Jenner, supermodel"],
    ]},
    { category: "Spice Girls nicknames", difficulty: 1, words: [
      ["SCARY", "Frightening"],
      ["SPORTY", "Athletic"],
      ["BABY", "Infant"],
      ["POSH", "Fancy and upscale"],
    ]},
    { category: "Famous Jacksons", difficulty: 2, words: [
      ["PETER", "Saint at the pearly gates"],
      ["JANET", "Reno, attorney general"],
      ["PERCY", "Shelley, Romantic poet"],
      ["SAMUEL", "Prophet who anointed David"],
    ]},
    { category: "Peter ___", difficulty: 3, words: [
      ["PAN", "Skillet"],
      ["PIPER", "Pied musician of Hamelin"],
      ["PARKER", "Fountain pen brand"],
      ["GRIFFIN", "Eagle-lion beast of myth"],
    ]},
  ]},
  // 123
  { groups: [
    { category: "Famous Chrises", difficulty: 0, words: [
      ["PRATT", "Star-Lord actor"],
      ["PINE", "Long for, yearn"],
      ["EVANS", "Captain America actor"],
      ["ROCK", "Stone"],
    ]},
    { category: "Kinds of rock", difficulty: 1, words: [
      ["GRANITE", "Countertop stone"],
      ["MARBLE", "Glass playing sphere"],
      ["SLATE", "List of candidates"],
      ["BASALT", "Dark volcanic stone"],
    ]},
    { category: "Kinds of crab", difficulty: 2, words: [
      ["KING", "Monarch"],
      ["HERMIT", "Recluse"],
      ["BLUE", "Sad"],
      ["FIDDLER", "Violin player"],
    ]},
    { category: "Add S to the front", difficulty: 3, words: [
      ["WORD", "Unit of language"],
      ["HOVEL", "Shabby little shack"],
      ["PARK", "Leave the car"],
      ["TRAIN", "Railway vehicle"],
    ]},
  ]},
  // 124
  { groups: [
    { category: "Wrestlers", difficulty: 0, words: [
      ["UNDERTAKER", "Funeral director"],
      ["KANE", "Citizen ___, Welles film"],
      ["EDGE", "Border"],
      ["GOLDBERG", "Whoopi's surname"],
    ]},
    { category: "Knife parts", difficulty: 1, words: [
      ["BLADE", "Single leaf of grass"],
      ["HANDLE", "Cope with"],
      ["TIP", "Gratuity"],
      ["BOLSTER", "Support, reinforce"],
    ]},
    { category: "Film directors", difficulty: 2, words: [
      ["BURTON", "Richard, Liz Taylor's husband"],
      ["LUCAS", "Skywalker creator George"],
      ["KUBRICK", "Director of The Shining"],
      ["SPIELBERG", "Director of Jaws"],
    ]},
    { category: "___ pin", difficulty: 3, words: [
      ["BOBBY", "British cop, slangily"],
      ["SAFETY", "Freedom from danger"],
      ["ROLLING", "Turning over and over"],
      ["CLOTHES", "Garments"],
    ]},
  ]},
  // 125
  { groups: [
    { category: "NFL teams", difficulty: 0, words: [
      ["JETS", "Fast airplanes"],
      ["GIANTS", "Huge beings"],
      ["SAINTS", "Canonized people"],
      ["BILLS", "Invoices"],
    ]},
    { category: "Airport words", difficulty: 1, words: [
      ["GATE", "Fence opening"],
      ["RUNWAY", "Fashion catwalk"],
      ["TERMINAL", "Fatal, as an illness"],
      ["HANGAR", "Aircraft garage"],
    ]},
    { category: "Wedding things", difficulty: 2, words: [
      ["VEIL", "Thin covering"],
      ["TOAST", "Browned bread"],
      ["VOWS", "Solemn promises"],
      ["BOUQUET", "Wine's aroma"],
    ]},
    { category: "End in a pronoun", difficulty: 3, words: [
      ["BANDIT", "Robber"],
      ["BONUS", "Extra reward"],
      ["PANTHER", "Black big cat"],
      ["WELCOME", "Greeting on a doormat"],
    ]},
  ]},
  // 126
  { groups: [
    { category: "Lion King characters", difficulty: 0, words: [
      ["SIMBA", "Cub who becomes king"],
      ["PUMBAA", "Flatulent warthog"],
      ["RAFIKI", "Wise baboon"],
      ["ZAZU", "Hornbill royal advisor"],
    ]},
    { category: "African animals", difficulty: 1, words: [
      ["ZEBRA", "Striped referee, slangily"],
      ["GIRAFFE", "Long-necked browser"],
      ["HIPPO", "River horse, briefly"],
      ["CHEETAH", "Fastest land animal"],
    ]},
    { category: "Famous Bobs", difficulty: 2, words: [
      ["HOPE", "Optimism"],
      ["MARLEY", "Scrooge's ghostly partner"],
      ["BARKER", "Carnival crier"],
      ["DYLAN", "Welsh poet Thomas"],
    ]},
    { category: "Sound like animals", difficulty: 3, words: [
      ["BARE", "Naked"],
      ["DEAR", "Letter salutation"],
      ["MOUSSE", "Fluffy chocolate dessert"],
      ["NEW", "Fresh"],
    ]},
  ]},
  // 127
  { groups: [
    { category: "Video game series", difficulty: 0, words: [
      ["HALO", "Angel's ring"],
      ["PORTAL", "Doorway to another world"],
      ["FALLOUT", "Nuclear aftermath"],
      ["MADDEN", "Football coach John"],
    ]},
    { category: "Dessert toppings", difficulty: 1, words: [
      ["SPRINKLES", "Light rain showers"],
      ["SYRUP", "Pancake pour"],
      ["FUDGE", "Fake, as numbers"],
      ["CARAMEL", "Burnt-sugar sauce"],
    ]},
    { category: "Paint finishes", difficulty: 2, words: [
      ["MATTE", "Not shiny"],
      ["GLOSS", "Lip shine"],
      ["EGGSHELL", "Fragile breakfast casing"],
      ["FLAT", "Apartment, in Britain"],
    ]},
    { category: "Hidden grains", difficulty: 3, words: [
      ["BOAT", "Watercraft"],
      ["BRANDY", "Distilled wine liquor"],
      ["TRICERATOPS", "Three-horned dinosaur"],
      ["SCORNED", "Treated with contempt"],
    ]},
  ]},
  // 128
  { groups: [
    { category: "Famous Bruces", difficulty: 0, words: [
      ["BANNER", "Long flag sign"],
      ["LEE", "Sheltered side"],
      ["WILLIS", "Chicago's tallest tower name"],
      ["SPRINGSTEEN", "The Boss"],
    ]},
    { category: "School subjects", difficulty: 1, words: [
      ["MATH", "Numbers class"],
      ["HISTORY", "Past events"],
      ["ART", "Gallery works"],
      ["BIOLOGY", "Study of living things"],
    ]},
    { category: "Batman actors", difficulty: 2, words: [
      ["BALE", "Hay bundle"],
      ["KILMER", "Joyce, poet of Trees"],
      ["KEATON", "Diane of Annie Hall"],
      ["CLOONEY", "George of Ocean's Eleven"],
    ]},
    { category: "French ___", difficulty: 3, words: [
      ["FRIES", "Cooks in oil"],
      ["KISS", "Rock band in face paint"],
      ["HORN", "Car honker"],
      ["PRESS", "News media"],
    ]},
  ]},
  // 129
  { groups: [
    { category: "Fictional bears", difficulty: 0, words: [
      ["POOH", "Dismiss scornfully"],
      ["PADDINGTON", "London rail station"],
      ["BALOO", "Mowgli's mentor"],
      ["YOGI", "Berra, Yankees catcher"],
    ]},
    { category: "Exercise classes", difficulty: 1, words: [
      ["YOGA", "Downward dog practice"],
      ["PILATES", "Core-strength method"],
      ["SPIN", "Rotate"],
      ["ZUMBA", "Latin dance workout"],
    ]},
    { category: "Baseball legends", difficulty: 2, words: [
      ["MANTLE", "Fireplace shelf"],
      ["COBB", "Salad with blue cheese and egg"],
      ["RUTH", "Compassion, in old usage"],
      ["AARON", "Moses's brother"],
    ]},
    { category: "Super___", difficulty: 3, words: [
      ["NOVA", "Exploding star"],
      ["MODEL", "Scale replica"],
      ["MARKET", "Bazaar"],
      ["NATURAL", "Untouched by humans"],
    ]},
  ]},
  // 130
  { groups: [
    { category: "Zodiac signs", difficulty: 0, words: [
      ["LEO", "Tolstoy's first name"],
      ["LIBRA", "Ancient Roman pound"],
      ["ARIES", "Ram sign"],
      ["SCORPIO", "Stinging sign"],
    ]},
    { category: "Car models", difficulty: 1, words: [
      ["CIVIC", "Relating to citizens"],
      ["ACCORD", "Agreement"],
      ["FOCUS", "Concentrate"],
      ["MUSTANG", "Wild horse"],
    ]},
    { category: "Gotham villains", difficulty: 2, words: [
      ["JOKER", "Wild card in a deck"],
      ["BANE", "Source of misery"],
      ["PENGUIN", "Tuxedoed bird"],
      ["RIDDLER", "One who poses puzzles"],
    ]},
    { category: "___line", difficulty: 3, words: [
      ["DEAD", "Not alive"],
      ["BEE", "Honey maker"],
      ["SKY", "Blue overhead"],
      ["PIPE", "Plumbing tube"],
    ]},
  ]},
  // 131
  { groups: [
    { category: "Tom Hanks films", difficulty: 0, words: [
      ["BIG", "Large"],
      ["SPLASH", "Make waves"],
      ["SULLY", "Tarnish, soil"],
      ["GREYHOUND", "Racing dog"],
    ]},
    { category: "Swimming strokes", difficulty: 1, words: [
      ["CRAWL", "Move on hands and knees"],
      ["BUTTERFLY", "Winged insect"],
      ["FREESTYLE", "Improvised rap"],
      ["BACKSTROKE", "Swim on your back"],
    ]},
    { category: "US airlines", difficulty: 2, words: [
      ["DELTA", "River mouth"],
      ["UNITED", "Joined"],
      ["SPIRIT", "Ghost"],
      ["FRONTIER", "Wild West border"],
    ]},
    { category: "Hidden containers", difficulty: 3, words: [
      ["TURNIP", "Root vegetable"],
      ["MUGGY", "Humid"],
      ["JUGGLE", "Keep balls in the air"],
      ["BOXER", "Prizefighter"],
    ]},
  ]},
  // 132
  { groups: [
    { category: "Peanuts characters", difficulty: 0, words: [
      ["LINUS", "Torvalds of Linux"],
      ["WOODSTOCK", "1969 music festival"],
      ["LUCY", "Famous fossil hominid"],
      ["PATTY", "Burger disc"],
    ]},
    { category: "Guitar parts", difficulty: 1, words: [
      ["FRET", "Worry"],
      ["NECK", "Body part below the head"],
      ["PICK", "Choose"],
      ["BRIDGE", "Span over a river"],
    ]},
    { category: "Guitar brands", difficulty: 2, words: [
      ["FENDER", "Car bumper"],
      ["GIBSON", "Mel of Braveheart"],
      ["MARTIN", "Steve, wild and crazy comedian"],
      ["TAYLOR", "Swift's first name"],
    ]},
    { category: "___ brown", difficulty: 3, words: [
      ["HASH", "Make a mess of things"],
      ["GOLDEN", "Gilded"],
      ["CHARLIE", "Snoopy's owner"],
      ["NUT", "Acorn, for one"],
    ]},
  ]},
  // 133
  { groups: [
    { category: "Brass instruments", difficulty: 0, words: [
      ["TRUMPET", "Proclaim loudly"],
      ["TUBA", "Oompah band's lowest horn"],
      ["BUGLE", "Valveless military horn"],
      ["TROMBONE", "Horn with a slide"],
    ]},
    { category: "Bugle calls", difficulty: 1, words: [
      ["REVEILLE", "Morning wake-up call"],
      ["TAPS", "Faucets"],
      ["RETREAT", "Fall back"],
      ["CHARGE", "Credit card fee"],
    ]},
    { category: "Things with keys", difficulty: 2, words: [
      ["PIANO", "Instrument with 88 ivories"],
      ["MAP", "Folded guide with a legend"],
      ["FLORIDA", "The Sunshine State"],
      ["JANITOR", "School custodian"],
    ]},
    { category: "Hidden instruments", difficulty: 3, words: [
      ["HORNET", "Stinging yellowjacket relative"],
      ["HARPOON", "Whaler's spear"],
      ["SALUTE", "Military hand gesture"],
      ["VIOLATE", "Break a rule"],
    ]},
  ]},
  // 134
  { groups: [
    { category: "Musicals", difficulty: 0, words: [
      ["CATS", "Feline pets"],
      ["RENT", "Monthly apartment payment"],
      ["ANNIE", "Little Orphan ___"],
      ["GREASE", "Lubricate a gear"],
    ]},
    { category: "Parts of a theater", difficulty: 1, words: [
      ["WINGS", "A bird's flying limbs"],
      ["APRON", "Kitchen cover-up"],
      ["BALCONY", "Juliet's perch"],
      ["LOBBY", "Pressure lawmakers"],
    ]},
    { category: "Fasteners", difficulty: 2, words: [
      ["BUTTON", "\"Cute as a ___\""],
      ["ZIPPER", "Pants fly closer"],
      ["SNAP", "Finger click"],
      ["BUCKLE", "Collapse under pressure"],
    ]},
    { category: "___step", difficulty: 3, words: [
      ["DOOR", "Entryway's swinging panel"],
      ["SIDE", "Edge or flank"],
      ["GOOSE", "Honking waterfowl"],
      ["LOCK", "Device opened with a key"],
    ]},
  ]},
  // 135
  { groups: [
    { category: "Woodwinds", difficulty: 0, words: [
      ["FLUTE", "Tall, narrow champagne glass"],
      ["OBOE", "Double-reed orchestra instrument"],
      ["CLARINET", "Benny Goodman's instrument"],
      ["PICCOLO", "Tiny, high-pitched flute"],
    ]},
    { category: "Opera vocabulary", difficulty: 1, words: [
      ["ARIA", "Operatic solo"],
      ["DIVA", "Temperamental star"],
      ["LIBRETTO", "Text of an opera"],
      ["OVERTURE", "Friendly opening proposal"],
    ]},
    { category: "Things with necks", difficulty: 2, words: [
      ["BOTTLE", "Wine container"],
      ["GIRAFFE", "Tallest animal"],
      ["SHIRT", "Button-up top"],
      ["VIOLIN", "Fiddle"],
    ]},
    { category: "Things you blow", difficulty: 3, words: [
      ["FUSE", "Melt together"],
      ["GASKET", "Engine seal"],
      ["NOSE", "Sniffer"],
      ["WHISTLE", "Referee's tweeter"],
    ]},
  ]},
  // 136
  { groups: [
    { category: "Band members", difficulty: 0, words: [
      ["DRUMMER", "Old-time traveling salesman"],
      ["BASSIST", "Player of the low four strings"],
      ["GUITARIST", "Hendrix, for one"],
      ["FRONTMAN", "Public face of a group"],
    ]},
    { category: "Tempo markings", difficulty: 1, words: [
      ["PRESTO", "Magician's \"Voila!\""],
      ["LARGO", "Very slow tempo"],
      ["ADAGIO", "Slow, stately passage"],
      ["ALLEGRO", "Brisk, lively tempo"],
    ]},
    { category: "Beetles", difficulty: 2, words: [
      ["SCARAB", "Sacred Egyptian beetle"],
      ["WEEVIL", "Grain-eating pest"],
      ["LADYBUG", "Red spotted garden helper"],
      ["FIREFLY", "Summer night glower"],
    ]},
    { category: "___ star", difficulty: 3, words: [
      ["ROCK", "Small stone"],
      ["MOVIE", "Feature film"],
      ["NORTH", "Compass point at the top"],
      ["SHOOTING", "Firing a camera, or a gun"],
    ]},
  ]},
  // 137
  { groups: [
    { category: "Crafts", difficulty: 0, words: [
      ["POTTERY", "Ceramic ware"],
      ["ORIGAMI", "Paper-folding art"],
      ["QUILTING", "Patchwork bedcover making"],
      ["WEAVING", "Darting through traffic"],
    ]},
    { category: "Art supplies", difficulty: 1, words: [
      ["EASEL", "Artist's stand"],
      ["CANVAS", "Survey door to door"],
      ["PALETTE", "Range of colors"],
      ["BRUSH", "Hair-tidying tool"],
    ]},
    { category: "Art museums", difficulty: 2, words: [
      ["LOUVRE", "Paris home of the Mona Lisa"],
      ["PRADO", "Madrid's great museum"],
      ["TATE", "London's Modern gallery"],
      ["UFFIZI", "Florence gallery of Botticelli"],
    ]},
    { category: "Hidden art", difficulty: 3, words: [
      ["PARTY", "Celebration with guests"],
      ["CARTON", "Milk container"],
      ["DARTS", "Pub game with a board"],
      ["STARTLE", "Make jump in surprise"],
    ]},
  ]},
  // 138
  { groups: [
    { category: "Voice parts", difficulty: 0, words: [
      ["SOPRANO", "Tony of HBO's mob drama"],
      ["ALTO", "Palo ___, California"],
      ["TENOR", "General tone or meaning"],
      ["BARITONE", "Male voice in the middle range"],
    ]},
    { category: "Note values", difficulty: 1, words: [
      ["WHOLE", "Complete, entire"],
      ["HALF", "Fifty percent"],
      ["QUARTER", "Twenty-five-cent coin"],
      ["EIGHTH", "Ordinal after seventh"],
    ]},
    { category: "Things you draw", difficulty: 2, words: [
      ["BATH", "Tub soak"],
      ["CURTAINS", "Window drapes"],
      ["SWORD", "Knight's blade"],
      ["BREATH", "Inhale"],
    ]},
    { category: "___note", difficulty: 3, words: [
      ["FOOT", "Twelve inches"],
      ["LOVE", "Zero, in tennis"],
      ["KEY", "Lock opener"],
      ["BANK", "Sloped side of a river"],
    ]},
  ]},
  // 139
  { groups: [
    { category: "Audience reactions", difficulty: 0, words: [
      ["CLAP", "Thunder sound"],
      ["CHEER", "Make happy"],
      ["BOO", "Ghost's shout"],
      ["HISS", "Snake's sound"],
    ]},
    { category: "Theater jobs", difficulty: 1, words: [
      ["USHER", "Singer of \"Yeah!\""],
      ["PROMPTER", "Whisperer of forgotten lines"],
      ["DIRECTOR", "Company board member"],
      ["STAGEHAND", "Backstage crew member"],
    ]},
    { category: "Things you cast", difficulty: 2, words: [
      ["SPELL", "Witch's incantation"],
      ["VOTE", "Ballot choice"],
      ["NET", "Fishing mesh"],
      ["SHADOW", "Dark shape that follows you"],
    ]},
    { category: "___light", difficulty: 3, words: [
      ["SPOT", "Small dot"],
      ["MOON", "Earth's natural satellite"],
      ["FLASH", "Brief burst"],
      ["HEAD", "Top of the body"],
    ]},
  ]},
  // 140
  { groups: [
    { category: "Keyboard instruments", difficulty: 0, words: [
      ["ORGAN", "Heart or liver"],
      ["HARPSICHORD", "Baroque plucked keyboard"],
      ["ACCORDION", "Squeezebox"],
      ["SYNTH", "Electronic keyboard, for short"],
    ]},
    { category: "Musician slang", difficulty: 1, words: [
      ["AXE", "Lumberjack's tool"],
      ["CHOPS", "Lamb cuts"],
      ["LICK", "Taste with the tongue"],
      ["RIFF", "Variation on a theme"],
    ]},
    { category: "Piano parts", difficulty: 2, words: [
      ["PEDAL", "Bike's foot lever"],
      ["HAMMER", "Nail driver"],
      ["STRING", "Kite's line"],
      ["LID", "Pot cover"],
    ]},
    { category: "Hidden KEY", difficulty: 3, words: [
      ["DONKEY", "Stubborn pack animal"],
      ["JOCKEY", "Racehorse rider"],
      ["LACKEY", "Servile follower"],
      ["HOCKEY", "Sport played with pucks"],
    ]},
  ]},
  // 141
  { groups: [
    { category: "Musical symbols", difficulty: 0, words: [
      ["CLEF", "Staff's opening symbol"],
      ["SHARP", "Keen-edged"],
      ["FLAT", "Apartment, in London"],
      ["REST", "Take a nap"],
    ]},
    { category: "Quick-witted", difficulty: 1, words: [
      ["BRIGHT", "Shining"],
      ["CLEVER", "Smart and inventive"],
      ["ASTUTE", "Shrewd"],
      ["KEEN", "Eager"],
    ]},
    { category: "Apartment types", difficulty: 2, words: [
      ["STUDIO", "Recording workspace"],
      ["LOFT", "Hay storage space upstairs"],
      ["CONDO", "Unit you own in a building"],
      ["PENTHOUSE", "Top-floor suite"],
    ]},
    { category: "___print", difficulty: 3, words: [
      ["FINGER", "Pinky, for one"],
      ["BLUE", "Sad"],
      ["NEWS", "Current events report"],
      ["THUMB", "Opposable digit"],
    ]},
  ]},
  // 142
  { groups: [
    { category: "Latin dances", difficulty: 0, words: [
      ["RUMBA", "Cuban ballroom dance"],
      ["SAMBA", "Brazilian Carnival dance"],
      ["MAMBO", "Dance in Lou Bega's \"No. 5\""],
      ["CHACHA", "Dance with a quick triple step"],
    ]},
    { category: "Dance moves", difficulty: 1, words: [
      ["ROBOT", "Mechanical automaton"],
      ["WORM", "Garden crawler"],
      ["MOONWALK", "Jackson's backward glide"],
      ["FLOSS", "Dental string"],
    ]},
    { category: "Dental hygiene", difficulty: 2, words: [
      ["MOUTHWASH", "Minty rinse"],
      ["TOOTHPASTE", "Paste on a bristle brush"],
      ["RINSE", "Wash off the suds"],
      ["PICK", "Choose"],
    ]},
    { category: "Doubled-up words", difficulty: 3, words: [
      ["TUTU", "Archbishop Desmond ___"],
      ["BONBON", "Chocolate-covered candy"],
      ["YOYO", "Up-and-down toy"],
      ["COUSCOUS", "North African semolina dish"],
    ]},
  ]},
  // 143
  { groups: [
    { category: "Pop divas", difficulty: 0, words: [
      ["MADONNA", "Virgin Mary, in art"],
      ["BEYONCE", "\"Single Ladies\" singer"],
      ["ADELE", "\"Rolling in the Deep\" singer"],
      ["RIHANNA", "\"Umbrella\" singer"],
    ]},
    { category: "Rain gear", difficulty: 1, words: [
      ["UMBRELLA", "Collapsible canopy"],
      ["PONCHO", "Blanket-like cape"],
      ["GALOSHES", "Rubber overshoes"],
      ["SLICKER", "Smooth con artist"],
    ]},
    { category: "Hawaiian islands", difficulty: 2, words: [
      ["MAUI", "Demigod in \"Moana\""],
      ["OAHU", "Island home of Honolulu"],
      ["KAUAI", "The Garden Isle"],
      ["LANAI", "Hawaiian veranda"],
    ]},
    { category: "Hidden singers", difficulty: 3, words: [
      ["CHERUB", "Chubby angel"],
      ["STINGRAY", "Flat fish with a barbed tail"],
      ["SEALANT", "Waterproof caulk"],
      ["PRINCESS", "King's daughter"],
    ]},
  ]},
  // 144
  { groups: [
    { category: "Kinds of plays", difficulty: 0, words: [
      ["COMEDY", "Stand-up genre"],
      ["TRAGEDY", "Terrible disaster"],
      ["FARCE", "Ridiculous sham"],
      ["MUSICAL", "Melodious"],
    ]},
    { category: "Magician's props", difficulty: 1, words: [
      ["WAND", "Sorcerer's stick"],
      ["TOPHAT", "Tall formal headwear"],
      ["CAPE", "Cod's headland, in Massachusetts"],
      ["RABBIT", "Easter bunny"],
    ]},
    { category: "Coastal landforms", difficulty: 2, words: [
      ["BAY", "Laurel tree"],
      ["SPIT", "Expel saliva"],
      ["ISTHMUS", "Narrow land bridge"],
      ["DUNE", "Frank Herbert sci-fi epic"],
    ]},
    { category: "Sound like fruits", difficulty: 3, words: [
      ["PAIR", "Two of a kind"],
      ["PLUMB", "Weight on a builder's line"],
      ["BURY", "Inter in the ground"],
      ["CURRENT", "A river's flow"],
    ]},
  ]},
  // 145
  { groups: [
    { category: "Kinds of songs", difficulty: 0, words: [
      ["BALLAD", "Narrative poem"],
      ["ANTHEM", "National song before a game"],
      ["LULLABY", "Bedtime song"],
      ["JINGLE", "A bell's tinkle"],
    ]},
    { category: "Figure skating moves", difficulty: 1, words: [
      ["AXEL", "Jump with one and a half turns"],
      ["LUTZ", "Toe-pick jump named for a skater"],
      ["LOOP", "Circle back around"],
      ["SPIRAL", "Downward economic trend"],
    ]},
    { category: "Cereal brands", difficulty: 2, words: [
      ["CHEERIOS", "British goodbyes"],
      ["TRIX", "Cereal a rabbit can't have"],
      ["KIX", "\"Kid-tested, mother-approved\" cereal"],
      ["WHEATIES", "\"Breakfast of Champions\""],
    ]},
    { category: "Hidden music genres", difficulty: 3, words: [
      ["ROCKET", "Launch vehicle"],
      ["FOLKLORE", "Traditional tales"],
      ["RAPID", "Very fast"],
      ["POPLAR", "Tall, slender tree"],
    ]},
  ]},
  // 146
  { groups: [
    { category: "Film genres", difficulty: 0, words: [
      ["WESTERN", "From where the sun sets"],
      ["HORROR", "Shock and dread"],
      ["NOIR", "Black, in French"],
      ["THRILLER", "Michael Jackson's best-selling album"],
    ]},
    { category: "Entertainment awards", difficulty: 1, words: [
      ["EMMY", "TV's statuette"],
      ["TONY", "Stark of Iron Man fame"],
      ["GRAMMY", "Gramophone-shaped award"],
      ["OSCAR", "Sesame Street grouch"],
    ]},
    { category: "Award show sights", difficulty: 2, words: [
      ["PRESENTER", "Slide-show giver"],
      ["ENVELOPE", "Letter holder"],
      ["SPEECH", "Talk"],
      ["NOMINEE", "Candidate"],
    ]},
    { category: "Grand ___", difficulty: 3, words: [
      ["SLAM", "Shut loudly"],
      ["CANYON", "Deep gorge"],
      ["PRIX", "French for \"prize\""],
      ["JURY", "Panel that reaches a verdict"],
    ]},
  ]},
  // 147
  { groups: [
    { category: "Percussion instruments", difficulty: 0, words: [
      ["CYMBAL", "Crashing brass disc"],
      ["MARIMBA", "Wooden-keyed mallet instrument"],
      ["GONG", "Loud signal to end a bad act"],
      ["CASTANETS", "Clicking Spanish hand clappers"],
    ]},
    { category: "Things that ring", difficulty: 1, words: [
      ["ALARM", "Sudden fear"],
      ["PHONE", "Mobile device"],
      ["BELL", "Taco ___"],
      ["EARS", "Hearing organs"],
    ]},
    { category: "Bermuda ___", difficulty: 2, words: [
      ["SHORTS", "Brief films"],
      ["GRASS", "Lawn cover"],
      ["ONION", "Layered bulb vegetable"],
      ["TRIANGLE", "Three-sided shape"],
    ]},
    { category: "Start with a vehicle", difficulty: 3, words: [
      ["CARPET", "Floor covering"],
      ["VANISH", "Disappear"],
      ["BUSTLE", "Busy commotion"],
      ["TRAMPLE", "Crush underfoot"],
    ]},
  ]},
  // 148
  { groups: [
    { category: "Sushi bar foods", difficulty: 0, words: [
      ["WASABI", "Green horseradish paste"],
      ["NORI", "Seaweed wrapper"],
      ["SASHIMI", "Sliced raw fish"],
      ["TEMPURA", "Battered and fried dish"],
    ]},
    { category: "Ensemble sizes", difficulty: 1, words: [
      ["DUET", "Song for two"],
      ["TRIO", "Group of three"],
      ["QUARTET", "Barbershop foursome"],
      ["QUINTET", "Group of five musicians"],
    ]},
    { category: "Words from Japanese", difficulty: 2, words: [
      ["TYCOON", "Business magnate"],
      ["KARAOKE", "Sing-along bar entertainment"],
      ["EMOJI", "Smiley icon"],
      ["TSUNAMI", "Giant sea wave"],
    ]},
    { category: "Start with a solfege syllable", difficulty: 3, words: [
      ["DOMINO", "Spotted game tile"],
      ["MIRROR", "Reflective glass"],
      ["FABLE", "Tale with a moral"],
      ["TICKET", "Admission pass"],
    ]},
  ]},
  // 149
  { groups: [
    { category: "Church features", difficulty: 0, words: [
      ["PEW", "Long wooden bench"],
      ["ALTAR", "Wedding vow spot"],
      ["STEEPLE", "Tall pointed tower"],
      ["PULPIT", "Preacher's platform"],
    ]},
    { category: "Sacred songs", difficulty: 1, words: [
      ["PSALM", "Biblical song"],
      ["HYMN", "Church song that sounds like \"him\""],
      ["CAROL", "Comedian Burnett's first name"],
      ["CHANT", "Crowd's repeated slogan"],
    ]},
    { category: "Carol vocabulary", difficulty: 2, words: [
      ["NOEL", "Playwright Coward's first name"],
      ["WASSAIL", "Spiced holiday cider toast"],
      ["FALALA", "Refrain in \"Deck the Halls\""],
      ["YULETIDE", "Christmas season"],
    ]},
    { category: "___ song", difficulty: 3, words: [
      ["SWAN", "Graceful long-necked bird"],
      ["SING", "Croon"],
      ["THEME", "Main idea"],
      ["SIREN", "Ambulance wail"],
    ]},
  ]},
  // 150
  { groups: [
    { category: "Loud", difficulty: 0, words: [
      ["NOISY", "Clamorous"],
      ["ROWDY", "Unruly"],
      ["RAUCOUS", "Harsh-sounding"],
      ["DEAFENING", "Ear-splitting"],
    ]},
    { category: "Opera composers", difficulty: 1, words: [
      ["VERDI", "Composer of \"Aida\""],
      ["PUCCINI", "\"La Boheme\" composer"],
      ["WAGNER", "\"Ride of the Valkyries\" composer"],
      ["ROSSINI", "\"William Tell\" composer"],
    ]},
    { category: "Things that get stuffed", difficulty: 2, words: [
      ["TURKEY", "Country of Istanbul"],
      ["PEPPER", "Salt's partner"],
      ["MUSHROOM", "Grow rapidly"],
      ["PINATA", "Candy-filled party target"],
    ]},
    { category: "Instrument anagrams", difficulty: 3, words: [
      ["GROAN", "Moan in pain"],
      ["STAIR", "One step of many"],
      ["RELY", "Depend"],
      ["ABUT", "Border on"],
    ]},
  ]},
  // 151
  { groups: [
    { category: "Parties", difficulty: 0, words: [
      ["BASH", "Hit hard"],
      ["SHINDIG", "Lively get-together"],
      ["SOIREE", "Elegant evening affair"],
      ["FIESTA", "Spanish celebration"],
    ]},
    { category: "DJ gear", difficulty: 1, words: [
      ["TURNTABLE", "Lazy Susan"],
      ["MIXER", "Social gathering"],
      ["VINYL", "Plastic used for siding"],
      ["SAMPLER", "Variety box of chocolates"],
    ]},
    { category: "Courtroom figures", difficulty: 2, words: [
      ["JUDGE", "Form an opinion"],
      ["BAILIFF", "Courtroom officer"],
      ["CLERK", "Store checkout worker"],
      ["JUROR", "Verdict decider"],
    ]},
    { category: "World ___", difficulty: 3, words: [
      ["SERIES", "Sequence of episodes"],
      ["CUP", "Mug"],
      ["WAR", "Kids' card game"],
      ["PEACE", "Harmony"],
    ]},
  ]},
  // 152
  { groups: [
    { category: "Terms of endearment", difficulty: 0, words: [
      ["SUGAR", "Sweetener"],
      ["DARLING", "Peter Pan's Wendy's surname"],
      ["SWEETIE", "Sweet person"],
      ["CUPCAKE", "Small frosted cake"],
    ]},
    { category: "Hair removal methods", difficulty: 1, words: [
      ["SHAVE", "Close call, a close ___"],
      ["THREAD", "Sewing strand"],
      ["LASER", "Concentrated light beam"],
      ["TWEEZE", "Remove with tiny pincers"],
    ]},
    { category: "Henhouse sights", difficulty: 2, words: [
      ["ROOST", "Rule the ___"],
      ["PERCH", "A bird's resting spot"],
      ["NEST", "Fit inside one another"],
      ["FEED", "Give food to"],
    ]},
    { category: "Things you pluck", difficulty: 3, words: [
      ["HARP", "Nag on and on"],
      ["EYEBROW", "Hair above the eye"],
      ["CHICKEN", "Coward"],
      ["PETAL", "Daisy part for \"loves me not\""],
    ]},
  ]},
  // 153
  { groups: [
    { category: "Rodents", difficulty: 0, words: [
      ["BEAVER", "Dam builder"],
      ["HAMSTER", "Wheel-running pet"],
      ["GERBIL", "Small desert pet"],
      ["SQUIRREL", "Acorn hoarder"],
    ]},
    { category: "Rap vocabulary", difficulty: 1, words: [
      ["BEAT", "Defeat"],
      ["RHYME", "Poetic echo"],
      ["FLOW", "River's movement"],
      ["VERSE", "Bible passage"],
    ]},
    { category: "Kinds of poems", difficulty: 2, words: [
      ["SONNET", "Fourteen-line poem"],
      ["HAIKU", "Japanese three-line verse"],
      ["LIMERICK", "Irish city"],
      ["ODE", "Keats wrote one to a nightingale"],
    ]},
    { category: "Hidden rat", difficulty: 3, words: [
      ["PIRATE", "Buccaneer"],
      ["KARATE", "Martial art with belts"],
      ["CRATER", "Volcano's mouth"],
      ["ORATOR", "Speechmaker"],
    ]},
  ]},
  // 154
  { groups: [
    { category: "Ways to sing", difficulty: 0, words: [
      ["YODEL", "Alpine call"],
      ["CROON", "Sing like Sinatra"],
      ["SCAT", "Shoo!"],
      ["HUM", "Sing with closed lips"],
    ]},
    { category: "Music get-togethers", difficulty: 1, words: [
      ["GIG", "Freelance job"],
      ["JAM", "Fruit preserve"],
      ["SESSION", "Meeting period"],
      ["RECITAL", "Detailed account"],
    ]},
    { category: "Things with rings", difficulty: 2, words: [
      ["SATURN", "Sixth planet"],
      ["TREE", "Oak or elm"],
      ["CIRCUS", "Big top show"],
      ["OLYMPICS", "Games held every four years"],
    ]},
    { category: "Traffic ___", difficulty: 3, words: [
      ["CONE", "Ice cream holder"],
      ["COP", "Police officer"],
      ["CIRCLE", "Round shape"],
      ["SIGNAL", "Wave to someone"],
    ]},
  ]},
  // 155
  { groups: [
    { category: "Pizza toppings", difficulty: 0, words: [
      ["PEPPERONI", "Spicy salami slices"],
      ["SAUSAGE", "Link of ground meat"],
      ["ANCHOVY", "Tiny salty fish"],
      ["BACON", "Bring home the ___"],
    ]},
    { category: "Dance movies", difficulty: 1, words: [
      ["FAME", "Celebrity status"],
      ["HAIRSPRAY", "Styling mist"],
      ["FOOTLOOSE", "Free to go anywhere"],
      ["FLASHDANCE", "1983 film about a welder who dances"],
    ]},
    { category: "Hair products", difficulty: 2, words: [
      ["GEL", "Come together as a team"],
      ["POMADE", "Slick hair grease"],
      ["WAX", "Candle material"],
      ["SHAMPOO", "Clean a carpet with suds"],
    ]},
    { category: "Rhymes with dance", difficulty: 3, words: [
      ["LANCE", "Knight's spear"],
      ["TRANCE", "Hypnotic state"],
      ["FRANCE", "Country of Paris"],
      ["CHANCE", "Luck"],
    ]},
  ]},
  // 156
  { groups: [
    { category: "Italian cities", difficulty: 0, words: [
      ["ROME", "The Eternal City"],
      ["MILAN", "Home of La Scala opera house"],
      ["VENICE", "City of canals"],
      ["NAPLES", "Birthplace of pizza"],
    ]},
    { category: "Musical directions", difficulty: 1, words: [
      ["FORTE", "Strong suit"],
      ["CRESCENDO", "Gradual build to a climax"],
      ["STACCATO", "Short and detached"],
      ["LEGATO", "Smooth and connected"],
    ]},
    { category: "Italian dishes", difficulty: 2, words: [
      ["GELATO", "Italian ice cream"],
      ["RISOTTO", "Creamy rice dish"],
      ["GNOCCHI", "Potato dumplings"],
      ["LASAGNA", "Layered pasta bake"],
    ]},
    { category: "Hidden capitals", difficulty: 3, words: [
      ["PROMENADE", "Seaside walkway"],
      ["COMPARISON", "Weighing one against another"],
      ["CLIMATE", "Long-term weather pattern"],
      ["TABERNACLE", "Place of worship"],
    ]},
  ]},
  // 157
  { groups: [
    { category: "Clumsy folks", difficulty: 0, words: [
      ["KLUTZ", "Butterfingers"],
      ["OAF", "Lumbering lout"],
      ["LUMMOX", "Big, awkward person"],
      ["GOOF", "Silly mistake"],
    ]},
    { category: "Musical theater terms", difficulty: 1, words: [
      ["FINALE", "Grand ending"],
      ["REPRISE", "Repeat of an earlier song"],
      ["INTERMISSION", "Break between acts"],
      ["ENSEMBLE", "Outfit of coordinated clothes"],
    ]},
    { category: "Sticky substances", difficulty: 2, words: [
      ["GLUE", "Hold together"],
      ["PASTE", "Copy-and-___"],
      ["SYRUP", "Pancake topper"],
      ["SAP", "Gullible fool"],
    ]},
    { category: "___ bee", difficulty: 3, words: [
      ["SPELLING", "Orthography"],
      ["BUMBLE", "Fumble clumsily"],
      ["HONEY", "Sweetheart"],
      ["QUEEN", "Monarch's wife"],
    ]},
  ]},
  // 158
  { groups: [
    { category: "Actor's homework", difficulty: 0, words: [
      ["LINES", "Queues"],
      ["CUES", "Pool sticks"],
      ["ACCENT", "Regional twang"],
      ["BLOCKING", "Obstructing"],
    ]},
    { category: "Acting roles", difficulty: 1, words: [
      ["LEAD", "Heavy metal"],
      ["EXTRA", "Additional"],
      ["CAMEO", "Carved brooch"],
      ["UNDERSTUDY", "Backup performer"],
    ]},
    { category: "Pencil case contents", difficulty: 2, words: [
      ["ERASER", "Whiteboard wiper"],
      ["SHARPENER", "Knife-honing tool"],
      ["RULER", "Monarch"],
      ["PROTRACTOR", "Angle-measuring tool"],
    ]},
    { category: "Drop the first letter for a body part", difficulty: 3, words: [
      ["CHAIR", "Seat with four legs"],
      ["WHEEL", "Tire's rim"],
      ["SHIP", "Ocean liner"],
      ["SLIP", "Lose your footing"],
    ]},
  ]},
  // 159
  { groups: [
    { category: "New Orleans eats", difficulty: 0, words: [
      ["BEIGNET", "Powdered French doughnut"],
      ["MUFFULETTA", "Olive-salad sandwich on round bread"],
      ["JAMBALAYA", "Rice dish with sausage and shrimp"],
      ["POBOY", "Louisiana sub sandwich"],
    ]},
    { category: "Jazz styles", difficulty: 1, words: [
      ["BEBOP", "Fast 1940s jazz form"],
      ["SWING", "Playground seat"],
      ["RAGTIME", "Scott Joplin's style"],
      ["FUSION", "Nuclear energy process"],
    ]},
    { category: "Playground equipment", difficulty: 2, words: [
      ["SLIDE", "Trombone part"],
      ["SEESAW", "Go back and forth"],
      ["SANDBOX", "Kids' digging pit"],
      ["CAROUSEL", "Rotating luggage belt"],
    ]},
    { category: "Spell new words backward", difficulty: 3, words: [
      ["DRAWER", "Dresser compartment"],
      ["LIVE", "Reside"],
      ["STOP", "Red octagon's command"],
      ["PART", "Hair division"],
    ]},
  ]},
  // 160
  { groups: [
    { category: "Sculpting materials", difficulty: 0, words: [
      ["CLAY", "Cassius ___, Ali's birth name"],
      ["MARBLE", "Glass toy sphere"],
      ["BRONZE", "Third-place medal"],
      ["PLASTER", "Wall coating"],
    ]},
    { category: "Museum words", difficulty: 1, words: [
      ["GALLERY", "Shooting ___"],
      ["CURATOR", "Collection keeper"],
      ["DOCENT", "Museum tour guide"],
      ["EXHIBIT", "Display, as symptoms"],
    ]},
    { category: "Famous boxers", difficulty: 2, words: [
      ["TYSON", "Astrophysicist Neil deGrasse ___"],
      ["ALI", "Prince ___ of \"Aladdin\""],
      ["FOREMAN", "Factory crew boss"],
      ["FRAZIER", "Joe of the \"Thrilla in Manila\""],
    ]},
    { category: "___ Age", difficulty: 3, words: [
      ["STONE", "Rock"],
      ["ICE", "Frozen water"],
      ["GOLDEN", "Shiny yellow"],
      ["SPACE", "The final frontier"],
    ]},
  ]},
  // 161
  { groups: [
    { category: "Sound properties", difficulty: 0, words: [
      ["VOLUME", "Book in a set"],
      ["TONE", "Firm up muscles"],
      ["TIMBRE", "Tone color, sounds like wood"],
      ["ECHO", "Repeat back"],
    ]},
    { category: "Soccer terms", difficulty: 1, words: [
      ["PITCH", "Musical highness or lowness"],
      ["KEEPER", "Goalie"],
      ["STRIKER", "Forward"],
      ["OFFSIDE", "Illegally ahead of the defense"],
    ]},
    { category: "Camping gear", difficulty: 2, words: [
      ["LANTERN", "Portable light"],
      ["COOLER", "Chillier"],
      ["HAMMOCK", "Swinging bed"],
      ["CANTEEN", "Military snack bar"],
    ]},
    { category: "Start with a month abbreviation", difficulty: 3, words: [
      ["MAYOR", "City leader"],
      ["NOVICE", "Beginner"],
      ["OCTOPUS", "Eight-armed sea creature"],
      ["DECADE", "Ten years"],
    ]},
  ]},
  // 162
  { groups: [
    { category: "Barn dance words", difficulty: 0, words: [
      ["FIDDLE", "Tinker aimlessly"],
      ["HOEDOWN", "Rowdy country dance party"],
      ["JIG", "Fishing lure"],
      ["REEL", "Fishing line spool"],
    ]},
    { category: "World string instruments", difficulty: 1, words: [
      ["SITAR", "Ravi Shankar's instrument"],
      ["BALALAIKA", "Triangular Russian strummer"],
      ["MANDOLIN", "Kitchen slicer, sometimes"],
      ["LUTE", "Renaissance strummer"],
    ]},
    { category: "Good luck charms", difficulty: 2, words: [
      ["HORSESHOE", "U-shaped iron for a hoof"],
      ["CLOVER", "Field plant bees love"],
      ["WISHBONE", "Bird bone you pull apart"],
      ["PENNY", "One cent"],
    ]},
    { category: "End in a body part", difficulty: 3, words: [
      ["TULIP", "Spring bulb flower"],
      ["URCHIN", "Spiny sea creature"],
      ["DISARM", "Take weapons away"],
      ["MISTLETOE", "Holiday kissing plant"],
    ]},
  ]},
  // 163
  { groups: [
    { category: "Bathroom fixtures", difficulty: 0, words: [
      ["TOWEL", "Throw in the ___"],
      ["FAUCET", "Tap"],
      ["TOILET", "Flushing seat"],
      ["LOOFAH", "Scrubbing sponge"],
    ]},
    { category: "Musical forms", difficulty: 1, words: [
      ["SONATA", "Hyundai sedan"],
      ["SYMPHONY", "Harmony of sounds"],
      ["CONCERTO", "Work for soloist and orchestra"],
      ["FUGUE", "Amnesiac wandering state"],
    ]},
    { category: "Honda models", difficulty: 2, words: [
      ["CIVIC", "Relating to a city"],
      ["ACCORD", "Agreement"],
      ["PILOT", "Plane flyer"],
      ["ODYSSEY", "Homer's epic"],
    ]},
    { category: "___hole", difficulty: 3, words: [
      ["PORT", "Left side of a ship"],
      ["PIGEON", "City park bird"],
      ["POT", "Cooking vessel"],
      ["SINK", "Go under"],
    ]},
  ]},
  // 164
  { groups: [
    { category: "Halloween things", difficulty: 0, words: [
      ["PUMPKIN", "Sweetie, as a pet name"],
      ["COSTUME", "Actor's outfit"],
      ["CANDY", "Sweets"],
      ["CAULDRON", "Big kettle over a fire"],
    ]},
    { category: "Ghosts", difficulty: 1, words: [
      ["PHANTOM", "Masked man of the Opera"],
      ["SPECTER", "Looming threat"],
      ["WRAITH", "Pale, ghostly figure"],
      ["SPOOK", "Spy, slangily"],
    ]},
    { category: "Spies", difficulty: 2, words: [
      ["MOLE", "Burrowing mammal"],
      ["AGENT", "Talent rep"],
      ["PLANT", "Fern or ivy"],
      ["OPERATIVE", "In effect, as a rule"],
    ]},
    { category: "Sound like question words", difficulty: 3, words: [
      ["WITCH", "Broomstick rider"],
      ["WATT", "Unit of power"],
      ["WEAR", "Have on, as clothes"],
      ["WYE", "The letter Y spelled out"],
    ]},
  ]},
  // 165
  { groups: [
    { category: "Shades of green", difficulty: 0, words: [
      ["MINT", "Coin factory"],
      ["JADE", "Worn out"],
      ["SAGE", "Wise person"],
      ["EMERALD", "May birthstone"],
    ]},
    { category: "Wise ones", difficulty: 1, words: [
      ["GURU", "Spiritual teacher"],
      ["ORACLE", "Delphi's prophet"],
      ["MAVEN", "Expert"],
      ["SAVANT", "Learned scholar"],
    ]},
    { category: "Salads", difficulty: 2, words: [
      ["CAESAR", "Roman dictator"],
      ["COBB", "Ty of baseball fame"],
      ["GREEK", "Language of Homer"],
      ["CHEF", "Kitchen boss"],
    ]},
    { category: "Hidden ARIA", difficulty: 3, words: [
      ["MALARIA", "Mosquito-borne illness"],
      ["VARIABLE", "Changeable"],
      ["CAFETERIA", "School lunchroom"],
      ["BAVARIAN", "From Munich's region"],
    ]},
  ]},
  // 166
  { groups: [
    { category: "Film follow-ups", difficulty: 0, words: [
      ["SEQUEL", "Part two"],
      ["PREQUEL", "Story set before the original"],
      ["REMAKE", "Do over"],
      ["SPINOFF", "Show built around a side character"],
    ]},
    { category: "Film crew", difficulty: 1, words: [
      ["GRIP", "Firm hold"],
      ["GAFFER", "Chief lighting electrician"],
      ["EDITOR", "Newspaper boss"],
      ["PRODUCER", "Farmer, broadly"],
    ]},
    { category: "Camera moves", difficulty: 2, words: [
      ["PAN", "Criticize harshly"],
      ["ZOOM", "Speed by"],
      ["TILT", "Pinball foul"],
      ["DOLLY", "Cloned sheep"],
    ]},
    { category: "Hidden snakes", difficulty: 3, words: [
      ["BOAST", "Brag"],
      ["LADDER", "Climbing tool with rungs"],
      ["GRASP", "Comprehend"],
      ["PRATTLER", "Chatterbox"],
    ]},
  ]},
  // 167
  { groups: [
    { category: "Fights", difficulty: 0, words: [
      ["BRAWL", "Rowdy scrap"],
      ["SCUFFLE", "Short, confused struggle"],
      ["MELEE", "Free-for-all"],
      ["FRACAS", "Noisy disturbance"],
    ]},
    { category: "Comic book sound effects", difficulty: 1, words: [
      ["POW", "Prisoner of war, briefly"],
      ["BAM", "Emeril's catchphrase"],
      ["WHAM", "\"Wake Me Up\" pop duo"],
      ["BIFF", "\"Back to the Future\" bully"],
    ]},
    { category: "Boxing punches", difficulty: 2, words: [
      ["JAB", "Flu shot, in Britain"],
      ["HOOK", "Catchy part of a song"],
      ["CROSS", "Angry"],
      ["UPPERCUT", "Upward blow to the chin"],
    ]},
    { category: "Peter Pan characters", difficulty: 3, words: [
      ["WENDY", "Fast-food chain with a redhead"],
      ["SMEE", "Bosun of the Jolly Roger"],
      ["NANA", "Grandma"],
      ["PETER", "Fizzle out"],
    ]},
  ]},
  // 168
  { groups: [
    { category: "Sea creatures", difficulty: 0, words: [
      ["WHALE", "Big-spending gambler"],
      ["DOLPHIN", "Miami football player"],
      ["SHARK", "Card hustler"],
      ["SQUID", "Ink-squirting mollusk"],
    ]},
    { category: "Swindlers", difficulty: 1, words: [
      ["GRIFTER", "Small-time con artist"],
      ["CROOK", "Shepherd's staff"],
      ["FRAUD", "Impostor"],
      ["SWINDLER", "Cheat"],
    ]},
    { category: "Aquarium equipment", difficulty: 2, words: [
      ["GRAVEL", "Small stones"],
      ["FILTER", "Coffee maker insert"],
      ["HEATER", "Space warmer"],
      ["PUMP", "Inflate a tire"],
    ]},
    { category: "End with an instrument", difficulty: 3, words: [
      ["CONUNDRUM", "Puzzling problem"],
      ["SHOEHORN", "Squeeze in tightly"],
      ["ABSOLUTE", "Total, complete"],
      ["BARBELL", "Weightlifter's bar"],
    ]},
  ]},
  // 169
  { groups: [
    { category: "Wallet contents", difficulty: 0, words: [
      ["CASH", "Paper money"],
      ["LICENSE", "Permission"],
      ["RECEIPT", "Proof of purchase"],
      ["PHOTO", "Snapshot"],
    ]},
    { category: "Music business terms", difficulty: 1, words: [
      ["ROYALTY", "Kings and queens"],
      ["LABEL", "Sticker tag"],
      ["DEMO", "Product showcase"],
      ["SINGLE", "Unmarried"],
    ]},
    { category: "Marital statuses", difficulty: 2, words: [
      ["MARRIED", "Wed"],
      ["WIDOWED", "Having lost a spouse"],
      ["DIVORCED", "Legally split"],
      ["ENGAGED", "Busy, as a phone line"],
    ]},
    { category: "___check", difficulty: 3, words: [
      ["SOUND", "Healthy and whole"],
      ["REALITY", "What actually is"],
      ["PAY", "Settle a bill"],
      ["DOUBLE", "Twice as much"],
    ]},
  ]},
  // 170
  { groups: [
    { category: "Kids' instruments", difficulty: 0, words: [
      ["RECORDER", "Tape machine"],
      ["KAZOO", "Buzzing toy horn"],
      ["HARMONICA", "Mouth organ"],
      ["MARACA", "Rattle shaker"],
    ]},
    { category: "Office machines", difficulty: 1, words: [
      ["PRINTER", "Ink-jet device"],
      ["SHREDDER", "Ninja Turtles villain"],
      ["SCANNER", "Barcode reader"],
      ["COPIER", "Imitator"],
    ]},
    { category: "Skateboard tricks", difficulty: 2, words: [
      ["OLLIE", "Laurel's partner Hardy"],
      ["KICKFLIP", "Board-spinning jump"],
      ["GRIND", "Daily routine"],
      ["MANUAL", "Instruction booklet"],
    ]},
    { category: "Sound like plural letters", difficulty: 3, words: [
      ["EASE", "Comfort"],
      ["SEIZE", "Grab"],
      ["TEASE", "Poke fun at"],
      ["WISE", "Full of wisdom"],
    ]},
  ]},
  // 171
  { groups: [
    { category: "Picnic things", difficulty: 0, words: [
      ["BASKET", "Hoop in hoops"],
      ["ANTS", "Tiny colony insects"],
      ["THERMOS", "Insulated flask"],
      ["HAMPER", "Hinder"],
    ]},
    { category: "Basketball terms", difficulty: 1, words: [
      ["DUNK", "Dip a cookie in milk"],
      ["REBOUND", "Bounce back"],
      ["DRIBBLE", "Drool"],
      ["LAYUP", "Easy close-range shot"],
    ]},
    { category: "Security ___", difficulty: 2, words: [
      ["GUARD", "Protect"],
      ["CAMERA", "Photographer's tool"],
      ["DEPOSIT", "Bank drop-off"],
      ["BLANKET", "Bed cover"],
    ]},
    { category: "Hidden insects", difficulty: 3, words: [
      ["MOTHER", "Mom"],
      ["BEETROOT", "Red root vegetable"],
      ["CANTER", "Horse's easy gait"],
      ["WASPISH", "Irritable"],
    ]},
  ]},
  // 172
  { groups: [
    { category: "Car brands", difficulty: 0, words: [
      ["FORD", "Cross a river on foot"],
      ["TESLA", "Inventor Nikola"],
      ["JEEP", "Rugged off-roader"],
      ["MAZDA", "Japanese maker of the Miata"],
    ]},
    { category: "Units named for scientists", difficulty: 1, words: [
      ["VOLT", "Unit of electric potential"],
      ["OHM", "Unit of resistance"],
      ["NEWTON", "Apple-inspired physicist"],
      ["KELVIN", "Absolute temperature scale"],
    ]},
    { category: "Car rental companies", difficulty: 2, words: [
      ["HERTZ", "Unit of frequency"],
      ["AVIS", "Bird, in Latin"],
      ["BUDGET", "Spending plan"],
      ["ALAMO", "Texas mission to remember"],
    ]},
    { category: "Anagrams of SPARE", difficulty: 3, words: [
      ["PARSE", "Analyze grammatically"],
      ["SPEAR", "Hunter's pointed weapon"],
      ["PEARS", "Bartletts, for example"],
      ["REAPS", "Harvests"],
    ]},
  ]},
  // 173
  { groups: [
    { category: "Orchestra sections", difficulty: 0, words: [
      ["STRINGS", "Kite lines"],
      ["BRASS", "Top military officers"],
      ["WINDS", "Breezes"],
      ["PERCUSSION", "Impact of one object on another"],
    ]},
    { category: "Relay race terms", difficulty: 1, words: [
      ["LEG", "Thigh to ankle"],
      ["ANCHOR", "Newscaster"],
      ["HANDOFF", "Football exchange"],
      ["EXCHANGE", "Swap"],
    ]},
    { category: "Conducting essentials", difficulty: 2, words: [
      ["CONDUCTOR", "Train ticket taker"],
      ["BATON", "Relay race stick"],
      ["PODIUM", "Medal stand"],
      ["SCORE", "Game's tally"],
    ]},
    { category: "___ story", difficulty: 3, words: [
      ["SHORT", "Brief"],
      ["SOB", "Weep"],
      ["COVER", "Lid"],
      ["BACK", "Spine's location"],
    ]},
  ]},
  // 174
  { groups: [
    { category: "Birthday party things", difficulty: 0, words: [
      ["CANDLES", "Wax lights"],
      ["PRESENT", "Here, at roll call"],
      ["CONFETTI", "Paper bits for tossing"],
      ["STREAMER", "Video gamer who broadcasts live"],
    ]},
    { category: "Concert venues", difficulty: 1, words: [
      ["ARENA", "Field of activity"],
      ["STADIUM", "Big ballpark"],
      ["AMPHITHEATER", "Outdoor tiered venue"],
      ["AUDITORIUM", "School assembly hall"],
    ]},
    { category: "Grammatical tenses", difficulty: 2, words: [
      ["PAST", "Bygone"],
      ["FUTURE", "Tomorrow and beyond"],
      ["PERFECT", "Flawless"],
      ["PROGRESSIVE", "Forward-thinking"],
    ]},
    { category: "Sound like past-tense verbs", difficulty: 3, words: [
      ["MIST", "Light fog"],
      ["BOARD", "Plank of wood"],
      ["GUEST", "Visitor"],
      ["PACT", "Agreement"],
    ]},
  ]},
  // 175
  { groups: [
    { category: "Fabrics", difficulty: 0, words: [
      ["DENIM", "Jeans material"],
      ["VELVET", "Plush, soft fabric"],
      ["TWEED", "Woolly jacket fabric"],
      ["LINEN", "Bed sheets, collectively"],
    ]},
    { category: "Stagecraft", difficulty: 1, words: [
      ["PROP", "Support beam"],
      ["BACKDROP", "Setting or context"],
      ["SCENERY", "Landscape view"],
      ["TRAPDOOR", "Hidden hatch"],
    ]},
    { category: "Injury supports", difficulty: 2, words: [
      ["CRUTCH", "Something you lean on"],
      ["BRACE", "Pair, as of pheasants"],
      ["SPLINT", "Bone stabilizer"],
      ["SLING", "Hurl, like a stone"],
    ]},
    { category: "Hidden animal homes", difficulty: 3, words: [
      ["NESTLE", "Snuggle in"],
      ["ARCHIVE", "Store of records"],
      ["STYLE", "Fashion sense"],
      ["SCOOP", "Ice cream ladleful"],
    ]},
  ]},
  // 176
  { groups: [
    { category: "Diner foods", difficulty: 0, words: [
      ["WAFFLE", "Be indecisive"],
      ["BURGER", "Patty on a bun"],
      ["MEATLOAF", "Singer of \"Bat Out of Hell\""],
      ["PANCAKE", "Flat stack item"],
    ]},
    { category: "Dance crazes", difficulty: 1, words: [
      ["TWIST", "Plot surprise"],
      ["MACARENA", "1990s line dance with hand moves"],
      ["HUSTLE", "Hurry"],
      ["LIMBO", "In-between state"],
    ]},
    { category: "Hurry", difficulty: 2, words: [
      ["SCURRY", "Scamper like a mouse"],
      ["SCRAMBLE", "Mix up, as eggs"],
      ["HASTEN", "Speed up"],
      ["BOLT", "Lightning streak"],
    ]},
    { category: "Add B for a new word", difficulty: 3, words: [
      ["RAIN", "Drizzle"],
      ["LUSH", "Thick and green"],
      ["OUNCE", "Sixteenth of a pound"],
      ["RAVE", "Gush with praise"],
    ]},
  ]},
  // 177
  { groups: [
    { category: "Computer keys", difficulty: 0, words: [
      ["SHIFT", "Work period"],
      ["ENTER", "Go in"],
      ["ESCAPE", "Break free"],
      ["TAB", "Bar bill"],
    ]},
    { category: "Stage speeches", difficulty: 1, words: [
      ["MONOLOGUE", "Talk show host's opening"],
      ["SOLILOQUY", "Hamlet's \"To be or not to be\""],
      ["ASIDE", "Off to one side"],
      ["PROLOGUE", "Introductory section"],
    ]},
    { category: "Night___", difficulty: 2, words: [
      ["MARE", "Female horse"],
      ["OWL", "Hooting bird"],
      ["CAP", "Bottle top"],
      ["FALL", "Autumn"],
    ]},
    { category: "Stage ___", difficulty: 3, words: [
      ["FRIGHT", "Sudden scare"],
      ["COACH", "Team trainer"],
      ["NAME", "Moniker"],
      ["LEFT", "Departed"],
    ]},
  ]},
  // 178
  { groups: [
    { category: "Madonna hits", difficulty: 0, words: [
      ["HOLIDAY", "Day off work"],
      ["MUSIC", "Arranged sounds"],
      ["FROZEN", "Iced over"],
      ["BORDERLINE", "On the edge"],
    ]},
    { category: "Fashion words", difficulty: 1, words: [
      ["MODEL", "Scale replica"],
      ["COUTURE", "High fashion"],
      ["VOGUE", "Madonna hit about striking a pose"],
      ["CHIC", "Stylish"],
    ]},
    { category: "Sci-fi films", difficulty: 2, words: [
      ["ALIEN", "Foreigner"],
      ["AVATAR", "Profile picture character"],
      ["TRON", "1982 film with light cycles"],
      ["GRAVITY", "Seriousness"],
    ]},
    { category: "___sick", difficulty: 3, words: [
      ["HOME", "Residence"],
      ["AIR", "What we breathe"],
      ["CAR", "Sedan"],
      ["SEA", "Ocean"],
    ]},
  ]},
  // 179
  { groups: [
    { category: "Ski slope words", difficulty: 0, words: [
      ["MOGUL", "Business tycoon"],
      ["PISTE", "Groomed ski run, in Europe"],
      ["POWDER", "Talc, e.g."],
      ["SLALOM", "Zigzag race through gates"],
    ]},
    { category: "Things with strings", difficulty: 1, words: [
      ["KITE", "Hawk-like bird of prey"],
      ["YOYO", "Toy that goes up and down"],
      ["PUPPET", "Person controlled by another"],
      ["VIOLIN", "Fiddle played with a bow"],
    ]},
    { category: "Pinball machine parts", difficulty: 2, words: [
      ["FLIPPER", "Dolphin's paddle-like limb"],
      ["BUMPER", "Car's front guard"],
      ["PLUNGER", "Toilet unclogger"],
      ["TILT", "Lean to one side"],
    ]},
    { category: "Hidden body parts", difficulty: 3, words: [
      ["PHARMACY", "Where prescriptions are filled"],
      ["MACHINE", "Device with moving parts"],
      ["WHIPPET", "Slim, speedy dog breed"],
      ["HEARTH", "Floor of a fireplace"],
    ]},
  ]},
  // 180
  { groups: [
    { category: "Juggling props", difficulty: 0, words: [
      ["CLUBS", "Card suit of trefoils"],
      ["BALLS", "Formal dances"],
      ["RINGS", "Saturn's bands"],
      ["TORCHES", "Flashlights, to a Brit"],
    ]},
    { category: "Sewing kit", difficulty: 1, words: [
      ["NEEDLE", "Tease or provoke"],
      ["SPOOL", "Reel for film or tape"],
      ["BOBBIN", "Small spindle in a sewing machine"],
      ["THREAD", "Chain of online replies"],
    ]},
    { category: "___ jump", difficulty: 2, words: [
      ["HIGH", "Far above the ground"],
      ["LONG", "Not short"],
      ["TRIPLE", "Three times as much"],
      ["BUNGEE", "Elastic cord for daring leaps"],
    ]},
    { category: "Hidden sports", difficulty: 3, words: [
      ["APOLOGY", "Saying sorry"],
      ["SKIPPER", "Boat captain"],
      ["SURFACE", "Outer layer"],
      ["DELUGE", "Downpour or flood"],
    ]},
  ]},
  // 181
  { groups: [
    { category: "Lopsided wins", difficulty: 0, words: [
      ["ROUT", "Disorderly retreat"],
      ["ROMP", "Play boisterously"],
      ["BLOWOUT", "Sudden tire burst"],
      ["LANDSLIDE", "Hillside collapse"],
    ]},
    { category: "Texas hold'em words", difficulty: 1, words: [
      ["FLOP", "Box-office bomb"],
      ["TURN", "Rotate"],
      ["RIVER", "The Mississippi, for one"],
      ["BLIND", "Window shade"],
    ]},
    { category: "Chess ploys", difficulty: 2, words: [
      ["GAMBIT", "Clever opening ploy"],
      ["PIN", "Sharp sewing fastener"],
      ["SKEWER", "Kebab stick"],
      ["CHECK", "Restaurant bill"],
    ]},
    { category: "___mate", difficulty: 3, words: [
      ["CLASS", "Group of students"],
      ["ROOM", "Space with four walls"],
      ["PLAY", "Have fun"],
      ["SHIP", "Large ocean vessel"],
    ]},
  ]},
  // 182
  { groups: [
    { category: "Water sports", difficulty: 0, words: [
      ["SURFING", "Flipping channels or browsing the web"],
      ["ROWING", "Quarreling, in British slang"],
      ["SAILING", "Plain ___ (smooth progress)"],
      ["DIVING", "Plunging headfirst"],
    ]},
    { category: "Snakes", difficulty: 1, words: [
      ["PYTHON", "Popular programming language"],
      ["VIPER", "Treacherous person"],
      ["ADDER", "Calculator, perhaps"],
      ["MAMBA", "Fast African snake, black or green"],
    ]},
    { category: "Surfer slang", difficulty: 2, words: [
      ["GNARLY", "Twisted and knotty"],
      ["STOKED", "Fed fuel, as a fire"],
      ["WIPEOUT", "Total destruction"],
      ["BARREL", "Wine cask"],
    ]},
    { category: "___ dive", difficulty: 3, words: [
      ["SWAN", "Graceful white bird"],
      ["STAGE", "Theater platform"],
      ["SKY", "Where clouds float"],
      ["SCUBA", "Diving gear acronym"],
    ]},
  ]},
  // 183
  { groups: [
    { category: "Basketball greats", difficulty: 0, words: [
      ["JORDAN", "Country east of Israel"],
      ["BIRD", "Feathered flyer"],
      ["MAGIC", "Hocus-pocus"],
      ["KOBE", "Japanese city famed for beef"],
    ]},
    { category: "Feathered things", difficulty: 1, words: [
      ["PILLOW", "Bed cushion"],
      ["QUILL", "Porcupine spine"],
      ["BOA", "Constricting snake"],
      ["DUSTER", "Long, light coat"],
    ]},
    { category: "Middle East nations", difficulty: 2, words: [
      ["OMAN", "Sultanate on the Arabian Sea"],
      ["YEMEN", "Country south of Saudi Arabia"],
      ["QATAR", "2022 World Cup host"],
      ["KUWAIT", "Small Gulf state invaded in 1990"],
    ]},
    { category: "Sport anagrams", difficulty: 3, words: [
      ["FLOG", "Whip"],
      ["BLOWS", "Exhales hard"],
      ["STEAK", "Ribeye, e.g."],
      ["LOOP", "Circle back"],
    ]},
  ]},
  // 184
  { groups: [
    { category: "Fishing lures", difficulty: 0, words: [
      ["SPOON", "Soup utensil"],
      ["JIG", "Lively Irish dance"],
      ["POPPER", "Party cracker"],
      ["PLUG", "Stopper for a drain"],
    ]},
    { category: "They steer", difficulty: 1, words: [
      ["PILOT", "TV show's test episode"],
      ["CHAUFFEUR", "Limo driver"],
      ["HELMSMAN", "Person at a ship's wheel"],
      ["CABBIE", "Taxi driver"],
    ]},
    { category: "Golf clubs", difficulty: 2, words: [
      ["WOOD", "Lumber"],
      ["PUTTER", "Tinker aimlessly"],
      ["DRIVER", "Person behind the wheel"],
      ["WEDGE", "Doorstop shape"],
    ]},
    { category: "Hidden birds", difficulty: 3, words: [
      ["BOWLER", "Round hat, or cricket pitcher"],
      ["SWANKY", "Posh and stylish"],
      ["CROWD", "Throng of people"],
      ["PATTERN", "Repeating design"],
    ]},
  ]},
  // 185
  { groups: [
    { category: "Track and field events", difficulty: 0, words: [
      ["HURDLES", "Obstacles to overcome"],
      ["JAVELIN", "Spear thrown for distance"],
      ["DISCUS", "Flat disc hurled in athletics"],
      ["SHOTPUT", "Heavy ball pushed from the shoulder"],
    ]},
    { category: "Greek letters", difficulty: 1, words: [
      ["ALPHA", "Dominant member of the pack"],
      ["BETA", "Early test version of software"],
      ["GAMMA", "Type of high-energy ray"],
      ["OMEGA", "The very end"],
    ]},
    { category: "Fraternity life", difficulty: 2, words: [
      ["PLEDGE", "Solemn promise"],
      ["PADDLE", "Ping-pong racket"],
      ["MIXER", "Kitchen beater appliance"],
      ["FORMAL", "Not casual"],
    ]},
    { category: "Reverse to get a new word", difficulty: 3, words: [
      ["STRAW", "Drinking tube"],
      ["REWARD", "Prize for good work"],
      ["DEVIL", "Horned troublemaker"],
      ["KNITS", "Makes a sweater by hand"],
    ]},
  ]},
  // 186
  { groups: [
    { category: "Polygons", difficulty: 0, words: [
      ["TRIANGLE", "Percussion instrument struck with a rod"],
      ["PENTAGON", "US defense headquarters"],
      ["HEXAGON", "Shape of a honeycomb cell"],
      ["RHOMBUS", "Slanted diamond shape"],
    ]},
    { category: "Words for grandma", difficulty: 1, words: [
      ["NANA", "Dog nursemaid in Peter Pan"],
      ["NONNA", "Italian grandmother"],
      ["OMA", "German grandmother"],
      ["MEEMAW", "Southern grandma"],
    ]},
    { category: "Knots", difficulty: 2, words: [
      ["HITCH", "Snag or problem"],
      ["GRANNY", "Grandmother, informally"],
      ["REEF", "Ridge of coral"],
      ["SQUARE", "Four equal sides"],
    ]},
    { category: "Square ___", difficulty: 3, words: [
      ["ROOT", "Plant's anchor"],
      ["MEAL", "Breakfast or dinner"],
      ["DANCE", "Move to music"],
      ["FOOT", "Twelve inches"],
    ]},
  ]},
  // 187
  { groups: [
    { category: "Baseball pitches", difficulty: 0, words: [
      ["CURVE", "Bend in the road"],
      ["SLIDER", "Mini burger"],
      ["SINKER", "Fishing line weight"],
      ["FASTBALL", "Heater over the plate"],
    ]},
    { category: "Gold prospecting", difficulty: 1, words: [
      ["PAN", "Criticize harshly"],
      ["NUGGET", "Chicken bite"],
      ["SLUICE", "Water channel with a gate"],
      ["CLAIM", "Assert as true"],
    ]},
    { category: "Tedious work", difficulty: 2, words: [
      ["CHORE", "Household task"],
      ["TOIL", "Labor hard"],
      ["SLOG", "Long, tiring trudge"],
      ["DRUDGERY", "Menial, dull labor"],
    ]},
    { category: "Start with a golf term", difficulty: 3, words: [
      ["PARSLEY", "Garnish herb"],
      ["CHIPMUNK", "Striped ground squirrel"],
      ["IRONY", "Opposite of what's expected"],
      ["TEENAGER", "Thirteen-to-nineteen-year-old"],
    ]},
  ]},
  // 188
  { groups: [
    { category: "Tennis shots", difficulty: 0, words: [
      ["LOB", "Toss gently"],
      ["SMASH", "Big hit movie"],
      ["SLICE", "Piece of pizza"],
      ["VOLLEY", "Burst of gunfire"],
    ]},
    { category: "Bread words", difficulty: 1, words: [
      ["CRUST", "Earth's outer layer"],
      ["CRUMB", "Tiny bit"],
      ["LOAF", "Laze around"],
      ["DOUGH", "Money, slangily"],
    ]},
    { category: "Hit hard", difficulty: 2, words: [
      ["WALLOP", "Big punch"],
      ["CLOBBER", "Defeat badly"],
      ["WHACK", "Sharp blow"],
      ["SLUG", "Shell-less garden pest"],
    ]},
    { category: "___ster", difficulty: 3, words: [
      ["HAM", "Holiday roast"],
      ["MOB", "Unruly crowd"],
      ["PRANK", "Practical joke"],
      ["YOUNG", "Not old"],
    ]},
  ]},
  // 189
  { groups: [
    { category: "Things with pedals", difficulty: 0, words: [
      ["DRUMKIT", "Rock band percussion setup"],
      ["ORGAN", "Heart or liver"],
      ["HARP", "Angel's instrument"],
      ["TRICYCLE", "Toddler's three-wheeler"],
    ]},
    { category: "Bicycle parts", difficulty: 1, words: [
      ["CHAIN", "Linked metal loops"],
      ["SPOKE", "Talked"],
      ["SADDLE", "Burden someone with"],
      ["FRAME", "Picture border"],
    ]},
    { category: "Horse tack", difficulty: 2, words: [
      ["BRIDLE", "Bristle with anger"],
      ["REINS", "Controls, as of power"],
      ["STIRRUP", "Rider's foot loop"],
      ["HALTER", "Backless top tied at the neck"],
    ]},
    { category: "Sound like weather", difficulty: 3, words: [
      ["HALE", "Healthy, as in ___ and hearty"],
      ["MISSED", "Failed to hit"],
      ["REIGN", "A monarch's rule"],
      ["SON", "Male child"],
    ]},
  ]},
  // 190
  { groups: [
    { category: "Casino games", difficulty: 0, words: [
      ["CRAPS", "Dice game at the casino"],
      ["ROULETTE", "Spinning wheel with a little ball"],
      ["KENO", "Lottery-like number game"],
      ["BACCARAT", "Card game James Bond plays"],
    ]},
    { category: "Slot machine symbols", difficulty: 1, words: [
      ["DIAMOND", "Engagement ring stone"],
      ["WATERMELON", "Big striped summer fruit"],
      ["BAR", "Pub"],
      ["SEVEN", "Number of deadly sins"],
    ]},
    { category: "Honest", difficulty: 2, words: [
      ["LEVEL", "Flat and even"],
      ["CANDID", "Unposed, as a photo"],
      ["FRANK", "Hot dog"],
      ["SINCERE", "Heartfelt"],
    ]},
    { category: "Hidden card games", difficulty: 3, words: [
      ["AWARD", "Prize"],
      ["HOSPITAL", "Place with an ER"],
      ["ORIGIN", "Starting point"],
      ["SNAPPY", "Quick and lively"],
    ]},
  ]},
  // 191
  { groups: [
    { category: "Back-and-forth motions", difficulty: 0, words: [
      ["SWING", "Golfer's stroke"],
      ["SWAY", "Influence"],
      ["ROCK", "Stone"],
      ["TEETER", "Totter unsteadily"],
    ]},
    { category: "Things that spin", difficulty: 1, words: [
      ["TOP", "Highest point"],
      ["DREIDEL", "Hanukkah game piece"],
      ["TURBINE", "Wind farm machine"],
      ["CAROUSEL", "Airport baggage conveyor"],
    ]},
    { category: "Jazz terms", difficulty: 2, words: [
      ["SCAT", "Shoo!"],
      ["RIFF", "Improvise on a theme"],
      ["BEBOP", "Fast 1940s jazz style"],
      ["COMBO", "Burger, fries and a drink"],
    ]},
    { category: "Hidden vehicles", difficulty: 3, words: [
      ["SCARF", "Wintry neckwear"],
      ["BUSTLE", "Busy activity"],
      ["VANISH", "Disappear"],
      ["STRAIN", "Pull a muscle"],
    ]},
  ]},
  // 192
  { groups: [
    { category: "Beauty pageant", difficulty: 0, words: [
      ["SASH", "Window frame"],
      ["GOWN", "Formal dress"],
      ["TALENT", "Natural gift"],
      ["CROWN", "Dental cap"],
    ]},
    { category: "Volleyball terms", difficulty: 1, words: [
      ["SPIKE", "Sudden sharp rise"],
      ["DIG", "Excavate"],
      ["SET", "Collection of matching items"],
      ["SERVE", "Wait on tables"],
    ]},
    { category: "Hair accessories", difficulty: 2, words: [
      ["CLIP", "Short video excerpt"],
      ["BOW", "Bend at the waist"],
      ["BARRETTE", "Decorative hair clasp"],
      ["TIARA", "Pageant winner's crown"],
    ]},
    { category: "___ point", difficulty: 3, words: [
      ["MATCH", "Fire starter"],
      ["BOILING", "Very hot"],
      ["POWER", "Electricity"],
      ["FOCAL", "Central, as a point of interest"],
    ]},
  ]},
  // 193
  { groups: [
    { category: "Pub games", difficulty: 0, words: [
      ["DARTS", "Dashes"],
      ["POOL", "Swimming spot"],
      ["SKITTLES", "Rainbow-colored candy"],
      ["CRIBBAGE", "Card game scored on a pegboard"],
    ]},
    { category: "Shake", difficulty: 1, words: [
      ["SHIVER", "Shake from cold"],
      ["QUAKE", "Earth tremor"],
      ["SHUDDER", "Convulse with horror"],
      ["WOBBLE", "Rock unsteadily"],
    ]},
    { category: "Archery", difficulty: 2, words: [
      ["ARROW", "Pointer symbol on a sign"],
      ["QUIVER", "Tremble slightly"],
      ["BULLSEYE", "Dead center"],
      ["TARGET", "Big red-logo retailer"],
    ]},
    { category: "___head", difficulty: 3, words: [
      ["BONE", "Part of the skeleton"],
      ["HOT", "Very warm"],
      ["EGG", "Hen's product"],
      ["FIGURE", "Number or shape"],
    ]},
  ]},
  // 194
  { groups: [
    { category: "Golf scores", difficulty: 0, words: [
      ["BIRDIE", "Little feathered friend"],
      ["EAGLE", "Bald national bird"],
      ["BOGEY", "Booger, or a ghostly bugbear"],
      ["PAR", "Normal level"],
    ]},
    { category: "Military ranks", difficulty: 1, words: [
      ["MAJOR", "Important; college focus"],
      ["PRIVATE", "Secret"],
      ["GENERAL", "Not specific"],
      ["COLONEL", "KFC's Sanders, e.g."],
    ]},
    { category: "Wrestling moves", difficulty: 2, words: [
      ["NELSON", "Admiral at Trafalgar"],
      ["HEADLOCK", "Arm around the neck"],
      ["SUPLEX", "Lift-and-flip throw"],
      ["SLAM", "Shut hard"],
    ]},
    { category: "___ eye", difficulty: 3, words: [
      ["RED", "Color of a fire truck"],
      ["PINK", "Color of bubblegum"],
      ["EVIL", "Wicked"],
      ["NAKED", "Without clothes"],
    ]},
  ]},
  // 195
  { groups: [
    { category: "Racket sports", difficulty: 0, words: [
      ["SQUASH", "Gourd vegetable"],
      ["PADEL", "Racket sport in a walled court"],
      ["BADMINTON", "Sport with a shuttlecock"],
      ["PICKLEBALL", "Paddle sport with a wiffle ball"],
    ]},
    { category: "Halloween sights", difficulty: 1, words: [
      ["COBWEB", "Dusty spider silk"],
      ["CAULDRON", "Big bubbling pot"],
      ["GHOST", "Write for someone uncredited"],
      ["WITCH", "Broom-riding spellcaster"],
    ]},
    { category: "Words for mom", difficulty: 2, words: [
      ["MAMA", "\"___ Mia!\" (ABBA musical)"],
      ["MUM", "Silent, as in keep ___"],
      ["MOMMY", "What a toddler calls mother"],
      ["MUMMY", "Wrapped Egyptian corpse"],
    ]},
    { category: "Ending in an animal", difficulty: 3, words: [
      ["COMBAT", "Fighting"],
      ["SCOWL", "Angry frown"],
      ["INFANT", "Newborn baby"],
      ["SCAPEGOAT", "One blamed for others"],
    ]},
  ]},
  // 196
  { groups: [
    { category: "Bones", difficulty: 0, words: [
      ["FEMUR", "Thigh bone"],
      ["TIBIA", "Shin bone"],
      ["ULNA", "Forearm bone on the pinky side"],
      ["PELVIS", "Hip girdle"],
    ]},
    { category: "Basketball moves", difficulty: 1, words: [
      ["PIVOT", "Turning point"],
      ["CROSSOVER", "Hybrid SUV"],
      ["FADEAWAY", "Gradual disappearance"],
      ["ALLEYOOP", "Lob for a mid-air dunk"],
    ]},
    { category: "Toy fads", difficulty: 2, words: [
      ["POGS", "Collectible cardboard discs"],
      ["FURBY", "Owl-like talking toy"],
      ["TAMAGOTCHI", "Egg-shaped digital pet"],
      ["BEYBLADE", "Battling spinning top"],
    ]},
    { category: "Hidden colors", difficulty: 3, words: [
      ["CREDIT", "Buy now, pay later"],
      ["STANDARD", "Normal or usual"],
      ["PROSE", "Writing that isn't poetry"],
      ["PLUMBER", "Pipe fixer"],
    ]},
  ]},
  // 197
  { groups: [
    { category: "Card table actions", difficulty: 0, words: [
      ["DEAL", "Bargain"],
      ["SHUFFLE", "Walk dragging the feet"],
      ["TRUMP", "Outrank"],
      ["TRICK", "Prank"],
    ]},
    { category: "Dog tricks", difficulty: 1, words: [
      ["BEG", "Plead"],
      ["FETCH", "Go get"],
      ["ROLLOVER", "Move savings into a new account"],
      ["PLAYDEAD", "Feign death"],
    ]},
    { category: "iPod models", difficulty: 2, words: [
      ["NANO", "One-billionth prefix"],
      ["CLASSIC", "Timeless"],
      ["TOUCH", "Feel"],
      ["MINI", "Short skirt"],
    ]},
    { category: "Hidden card ranks", difficulty: 3, words: [
      ["SMOKING", "Puffing a pipe"],
      ["JACKAL", "Wild African dog"],
      ["FURNACE", "Basement heater"],
      ["ATTENTION", "Focus"],
    ]},
  ]},
  // 198
  { groups: [
    { category: "Kids' card games", difficulty: 0, words: [
      ["OLDMAID", "Unmarried woman, dated term"],
      ["CRAZYEIGHTS", "Card game with wild eights"],
      ["SLAPJACK", "Game of slapping a face card"],
      ["GOFISH", "\"Do you have any sevens?\" game"],
    ]},
    { category: "Garment parts", difficulty: 1, words: [
      ["ZIPPER", "Toothed fastener"],
      ["CUFF", "Slap lightly on the head"],
      ["COLLAR", "Arrest, in cop slang"],
      ["HEM", "Hesitate, with haw"],
    ]},
    { category: "Billiards", difficulty: 2, words: [
      ["CUE", "Actor's signal"],
      ["RACK", "Shelf for drying dishes"],
      ["CHALK", "Sidewalk art stick"],
      ["POCKET", "Pants pouch"],
    ]},
    { category: "___ dance", difficulty: 3, words: [
      ["TAP", "Faucet"],
      ["LINE", "Queue"],
      ["BELLY", "Tummy"],
      ["BREAK", "Short rest"],
    ]},
  ]},
  // 199
  { groups: [
    { category: "Swim bag items", difficulty: 0, words: [
      ["GOGGLES", "Stares wide-eyed"],
      ["EARPLUGS", "Noise-blocking inserts"],
      ["KICKBOARD", "Foam float for leg drills"],
      ["NOSECLIP", "Swimmer's nostril pincher"],
    ]},
    { category: "Football positions", difficulty: 1, words: [
      ["GUARD", "Sentry"],
      ["SAFETY", "Freedom from harm"],
      ["CENTER", "Middle point"],
      ["TACKLE", "Fishing gear"],
    ]},
    { category: "Protect", difficulty: 2, words: [
      ["SHIELD", "Knight's defense"],
      ["SHELTER", "Animal rescue home"],
      ["DEFEND", "Argue for in court"],
      ["PRESERVE", "Jam, as fruit"],
    ]},
    { category: "___ net", difficulty: 3, words: [
      ["HAIR", "It grows on your head"],
      ["CARGO", "Freight"],
      ["MOSQUITO", "Buzzing biter"],
      ["BUTTERFLY", "Colorful winged insect"],
    ]},
  ]},
  // 200
  { groups: [
    { category: "House parts", difficulty: 0, words: [
      ["ATTIC", "Top floor storage"],
      ["CELLAR", "Wine storage below ground"],
      ["PORCH", "Covered entrance area"],
      ["FOYER", "Entrance hall"],
    ]},
    { category: "Light streams", difficulty: 1, words: [
      ["SHAFT", "Elevator passage"],
      ["RAY", "Manta, for one"],
      ["GLINT", "Brief sparkle"],
      ["GLEAM", "Shine softly"],
    ]},
    { category: "Smile", difficulty: 2, words: [
      ["GRIN", "Cheshire cat's feature"],
      ["SMIRK", "Self-satisfied look"],
      ["BEAM", "Ray of light"],
      ["SIMPER", "Silly, coy expression"],
    ]},
    { category: "Hidden house parts", difficulty: 3, words: [
      ["SWALLOW", "Gulp down"],
      ["PROOF", "Evidence"],
      ["BROOM", "Witch's ride"],
      ["CHALLENGE", "Dare"],
    ]},
  ]},
  // 201
  { groups: [
    { category: "Stadium features", difficulty: 0, words: [
      ["BLEACHERS", "Open-air bench seats"],
      ["SKYBOX", "Luxury suite up high"],
      ["DUGOUT", "Canoe carved from a log"],
      ["CONCOURSE", "Walkway with concession stands"],
    ]},
    { category: "Attempt", difficulty: 1, words: [
      ["STAB", "Pierce with a knife"],
      ["CRACK", "Split in a sidewalk"],
      ["WHIRL", "Spin around"],
      ["SHOT", "Vaccine dose"],
    ]},
    { category: "Rugby terms", difficulty: 2, words: [
      ["SCRUM", "Huddled pack of forwards"],
      ["TRY", "Make an attempt"],
      ["MAUL", "Attack savagely, like a bear"],
      ["CONVERSION", "Change of religion"],
    ]},
    { category: "Kick___", difficulty: 3, words: [
      ["OFF", "Not on"],
      ["STAND", "Rise to your feet"],
      ["BOXING", "Putting in cartons"],
      ["START", "Begin"],
    ]},
  ]},
  // 202
  { groups: [
    { category: "Hiking gear", difficulty: 0, words: [
      ["BACKPACK", "Bag worn on the shoulders"],
      ["CANTEEN", "Military cafeteria"],
      ["MAP", "Plan out, as a route"],
      ["WHISTLE", "Referee's tool"],
    ]},
    { category: "Things with needles", difficulty: 1, words: [
      ["CACTUS", "Desert succulent"],
      ["PORCUPINE", "Quill-covered rodent"],
      ["SYRINGE", "Nurse's injector"],
      ["COMPASS", "Tool for drawing circles"],
    ]},
    { category: "Sweaters", difficulty: 2, words: [
      ["CARDIGAN", "Welsh corgi breed"],
      ["HOODIE", "Sweatshirt with a head covering"],
      ["JUMPER", "Pinafore dress, in the US"],
      ["PULLOVER", "Stop the car on the shoulder"],
    ]},
    { category: "___suit", difficulty: 3, words: [
      ["SPACE", "The final frontier"],
      ["SWIM", "Do laps in a pool"],
      ["TRACK", "Railroad rails"],
      ["LAW", "Rule of the land"],
    ]},
  ]},
  // 203
  { groups: [
    { category: "Epic poets", difficulty: 0, words: [
      ["HOMER", "Simpsons dad"],
      ["VIRGIL", "Author of the Aeneid"],
      ["DANTE", "Poet who toured the Inferno"],
      ["MILTON", "Author of Paradise Lost"],
    ]},
    { category: "Labor protests", difficulty: 1, words: [
      ["PICKET", "Fence slat"],
      ["WALKOUT", "Leaving in protest"],
      ["BOYCOTT", "Refuse to buy from"],
      ["SLOWDOWN", "Deceleration"],
    ]},
    { category: "Baseball plays", difficulty: 2, words: [
      ["BUNT", "Light tap of the bat"],
      ["BALK", "Refuse to go along with"],
      ["STRIKE", "Workers' walkout"],
      ["WALK", "Stroll"],
    ]},
    { category: "___ run", difficulty: 3, words: [
      ["HOME", "Where the heart is"],
      ["DRY", "Not wet"],
      ["TRIAL", "Court case"],
      ["BANK", "Riverside slope"],
    ]},
  ]},
  // 204
  { groups: [
    { category: "Greek gods", difficulty: 0, words: [
      ["ZEUS", "Thunderbolt-throwing king of Olympus"],
      ["HERA", "Queen of Olympus"],
      ["APOLLO", "NASA moon program"],
      ["HERMES", "Luxury French fashion house"],
    ]},
    { category: "Summer Olympic hosts", difficulty: 1, words: [
      ["ATHENS", "Capital of Greece"],
      ["SYDNEY", "City with a famous opera house"],
      ["TOKYO", "Capital of Japan"],
      ["BEIJING", "Home of the Forbidden City"],
    ]},
    { category: "Sailing terms", difficulty: 2, words: [
      ["STERN", "Strict"],
      ["MAST", "Tall pole holding a sail"],
      ["KEEL", "___ over (topple)"],
      ["PORT", "Sweet fortified wine"],
    ]},
    { category: "Air___", difficulty: 3, words: [
      ["LOCK", "It opens with a key"],
      ["CRAFT", "Handmade hobby"],
      ["PLANE", "Jet"],
      ["WAVES", "Ocean swells"],
    ]},
  ]},
  // 205
  { groups: [
    { category: "Pottery", difficulty: 0, words: [
      ["KILN", "Brick-firing oven"],
      ["GLAZE", "Donut coating"],
      ["WHEEL", "Round thing on a car axle"],
      ["CLAY", "Tennis court surface"],
    ]},
    { category: "Workout moves", difficulty: 1, words: [
      ["SQUAT", "Live somewhere without permission"],
      ["BURPEE", "Squat-thrust-jump combo"],
      ["CRUNCH", "Moment of pressure"],
      ["LUNGE", "Sudden forward thrust"],
    ]},
    { category: "Fencing terms", difficulty: 2, words: [
      ["FOIL", "Aluminum kitchen wrap"],
      ["EPEE", "Fencing sword with a big guard"],
      ["PARRY", "Dodge a tough question"],
      ["SABRE", "Cavalry sword"],
    ]},
    { category: "Famous Harrys", difficulty: 3, words: [
      ["POTTER", "Clay craftsperson"],
      ["STYLES", "Fashions"],
      ["HOUDINI", "Great escape artist"],
      ["TRUMAN", "33rd US president"],
    ]},
  ]},
  // 206
  { groups: [
    { category: "Worn on the wrist", difficulty: 0, words: [
      ["BRACELET", "Charm holder"],
      ["BANGLE", "Rigid ring bracelet"],
      ["CORSAGE", "Prom flower"],
      ["WRISTBAND", "Festival entry strip"],
    ]},
    { category: "In a deck of cards", difficulty: 1, words: [
      ["HEART", "Ticker in your chest"],
      ["JACK", "Car-lifting tool"],
      ["JOKER", "Prankster"],
      ["SPADE", "Digging tool"],
    ]},
    { category: "Funny people", difficulty: 2, words: [
      ["CLOWN", "Circus performer with a red nose"],
      ["WAG", "Shake, as a tail"],
      ["CARD", "Greeting on folded paper"],
      ["WIT", "Cleverness"],
    ]},
    { category: "Things with crowns", difficulty: 3, words: [
      ["TOOTH", "Chompers piece"],
      ["WATCH", "Look at"],
      ["PINEAPPLE", "Spiky tropical fruit"],
      ["HAT", "Head covering"],
    ]},
  ]},
  // 207
  { groups: [
    { category: "Clouds", difficulty: 0, words: [
      ["CIRRUS", "Wispy high-altitude cloud"],
      ["CUMULUS", "Puffy fair-weather cloud"],
      ["STRATUS", "Low gray sheet cloud"],
      ["NIMBUS", "Halo around a saint's head"],
    ]},
    { category: "NFL teams", difficulty: 1, words: [
      ["RAVENS", "Poe's black birds"],
      ["BRONCOS", "Untamed horses"],
      ["GIANTS", "Beanstalk dwellers"],
      ["CHIEFS", "Leaders of tribes"],
    ]},
    { category: "Huge", difficulty: 2, words: [
      ["JUMBO", "Large size of shrimp"],
      ["MAMMOTH", "Woolly Ice Age elephant"],
      ["COLOSSAL", "Gigantic"],
      ["TITANIC", "Ship that hit an iceberg"],
    ]},
    { category: "Hidden boys' names", difficulty: 3, words: [
      ["STOMACH", "Belly"],
      ["CANDY", "Sweets"],
      ["MATTRESS", "Bed cushion"],
      ["DONKEY", "Stubborn beast of burden"],
    ]},
  ]},
  // 208
  { groups: [
    { category: "Bingo hall", difficulty: 0, words: [
      ["DAUBER", "Ink marker for game cards"],
      ["CALLER", "Person on the phone"],
      ["BLACKOUT", "Power outage"],
      ["JACKPOT", "Big win"],
    ]},
    { category: "Board game equipment", difficulty: 1, words: [
      ["DICE", "Chop into small cubes"],
      ["SPINNER", "Bowler who turns the ball"],
      ["TOKEN", "Arcade coin"],
      ["HOURGLASS", "Sand timer"],
    ]},
    { category: "Souvenirs", difficulty: 2, words: [
      ["MEMENTO", "Keepsake reminder"],
      ["KEEPSAKE", "Cherished memento"],
      ["RELIC", "Ancient artifact"],
      ["TROPHY", "Prize cup"],
    ]},
    { category: "___worm", difficulty: 3, words: [
      ["BOOK", "Reserve a table"],
      ["SILK", "Smooth fabric"],
      ["INCH", "Move slowly"],
      ["TAPE", "Record on video"],
    ]},
  ]},
  // 209
  { groups: [
    { category: "Afternoon tea", difficulty: 0, words: [
      ["TEAPOT", "Short and stout vessel"],
      ["SAUCER", "Flying ___ (UFO)"],
      ["SCONE", "Clotted-cream pastry"],
      ["DOILY", "Lacy paper mat"],
    ]},
    { category: "In a boxing ring", difficulty: 1, words: [
      ["CORNER", "Where two walls meet"],
      ["ROPES", "Learn the ___"],
      ["CANVAS", "Painter's surface"],
      ["STOOL", "Three-legged seat"],
    ]},
    { category: "Quiet", difficulty: 2, words: [
      ["MUTE", "TV remote button"],
      ["STILL", "Even so"],
      ["HUSHED", "Spoken in whispers"],
      ["SILENT", "Like the K in knee"],
    ]},
    { category: "___bell", difficulty: 3, words: [
      ["DUMB", "Unable to speak"],
      ["KETTLE", "Whistling teapot"],
      ["DOOR", "Entry way"],
      ["COW", "Dairy animal"],
    ]},
  ]},
  // 210
  { groups: [
    { category: "Slow animals", difficulty: 0, words: [
      ["SLOTH", "Laziness, a deadly sin"],
      ["SNAIL", "Escargot"],
      ["TORTOISE", "Hare's race rival"],
      ["MANATEE", "Sea cow"],
    ]},
    { category: "Even results", difficulty: 1, words: [
      ["DRAW", "Sketch"],
      ["STALEMATE", "Chess deadlock"],
      ["DEADLOCK", "Impasse in talks"],
      ["STANDOFF", "Tense face-off"],
    ]},
    { category: "Move slowly", difficulty: 2, words: [
      ["CREEP", "Weirdo"],
      ["PLOD", "Trudge heavily"],
      ["DAWDLE", "Waste time lingering"],
      ["MOSEY", "Amble along"],
    ]},
    { category: "___ tie", difficulty: 3, words: [
      ["NECK", "Giraffe's long feature"],
      ["CABLE", "TV service with many channels"],
      ["BOLO", "Western string necktie"],
      ["HOG", "Pig"],
    ]},
  ]},
  // 211
  { groups: [
    { category: "Measuring tools", difficulty: 0, words: [
      ["RULER", "Monarch"],
      ["SCALE", "Fish's skin plate"],
      ["GAUGE", "Estimate or judge"],
      ["BEAKER", "Lab glass container"],
    ]},
    { category: "Car racing terms", difficulty: 1, words: [
      ["PIT", "Peach stone"],
      ["LAP", "Seated thighs"],
      ["POLE", "North or South end"],
      ["DRAFT", "First version of an essay"],
    ]},
    { category: "Europeans", difficulty: 2, words: [
      ["DANE", "Great ___ (dog)"],
      ["SWEDE", "Rutabaga, in Britain"],
      ["FINN", "Huckleberry ___"],
      ["CZECH", "Sounds like a restaurant bill"],
    ]},
    { category: "Sound like produce", difficulty: 3, words: [
      ["BEAT", "Defeat"],
      ["LEAK", "Drip from a faucet"],
      ["PLUMB", "Perfectly vertical"],
      ["TIME", "What a clock tells"],
    ]},
  ]},
  // 212
  { groups: [
    { category: "Boats", difficulty: 0, words: [
      ["KAYAK", "Palindromic paddle craft"],
      ["CANOE", "Open paddle boat"],
      ["YACHT", "Rich person's pleasure boat"],
      ["DINGHY", "Small inflatable boat"],
    ]},
    { category: "Big cats", difficulty: 1, words: [
      ["JAGUAR", "British luxury car brand"],
      ["COUGAR", "Mountain lion"],
      ["CHEETAH", "Fastest land animal"],
      ["PANTHER", "Pink cartoon cat"],
    ]},
    { category: "Carmakers", difficulty: 2, words: [
      ["HONDA", "Maker of the Civic"],
      ["TESLA", "Unit of magnetic flux density"],
      ["SUBARU", "Pleiades, in Japanese"],
      ["MAZDA", "Maker of the Miata"],
    ]},
    { category: "Ways to cross a river", difficulty: 3, words: [
      ["FORD", "Model T maker"],
      ["WADE", "Walk through water"],
      ["FERRY", "Boat for cars and passengers"],
      ["TUNNEL", "Underground passage"],
    ]},
  ]},
  // 213
  { groups: [
    { category: "Couches", difficulty: 0, words: [
      ["SETTEE", "Small upholstered bench"],
      ["DIVAN", "Backless low couch"],
      ["FUTON", "Folding mattress-sofa"],
      ["LOVESEAT", "Two-person sofa"],
    ]},
    { category: "Campfire basics", difficulty: 1, words: [
      ["EMBER", "Glowing coal"],
      ["KINDLING", "Small sticks to start a fire"],
      ["SPARK", "Inspire"],
      ["FLINT", "Michigan city"],
    ]},
    { category: "Records", difficulty: 2, words: [
      ["DIARY", "Private daily journal"],
      ["JOURNAL", "Scholarly publication"],
      ["LEDGER", "Accounting book"],
      ["LOG", "Chunk of firewood"],
    ]},
    { category: "___fire", difficulty: 3, words: [
      ["WILD", "Untamed"],
      ["GUN", "Pistol"],
      ["CROSS", "Angry"],
      ["SURE", "Certain"],
    ]},
  ]},
  // 214
  { groups: [
    { category: "Wedding party", difficulty: 0, words: [
      ["BRIDE", "Woman getting married"],
      ["GROOM", "Brush a horse"],
      ["VEIL", "Hide from view"],
      ["BOUQUET", "Wine's aroma"],
    ]},
    { category: "Car interior", difficulty: 1, words: [
      ["DASH", "Punctuation line"],
      ["CONSOLE", "Comfort in grief"],
      ["VISOR", "Cap brim that blocks the sun"],
      ["GLOVEBOX", "Compartment for maps and manuals"],
    ]},
    { category: "Small amounts", difficulty: 2, words: [
      ["PINCH", "Squeeze between fingers"],
      ["SMIDGEN", "Tiny bit"],
      ["IOTA", "Ninth Greek letter"],
      ["TAD", "A little bit"],
    ]},
    { category: "Thrown at weddings", difficulty: 3, words: [
      ["RICE", "Grain in sushi"],
      ["GARTER", "Snake type"],
      ["BIRDSEED", "Feeder filler"],
      ["PETALS", "Flower parts"],
    ]},
  ]},
  // 215
  { groups: [
    { category: "Yellow things", difficulty: 0, words: [
      ["TAXI", "Cab"],
      ["CANARY", "Coal mine bird"],
      ["DAFFODIL", "Spring bulb flower"],
      ["YOLK", "Center of an egg"],
    ]},
    { category: "Cowboy gear", difficulty: 1, words: [
      ["LASSO", "Rope with a running noose"],
      ["SPURS", "San Antonio NBA team"],
      ["CHAPS", "Guys, to a Brit"],
      ["STETSON", "Ten-gallon hat brand"],
    ]},
    { category: "British words for a guy", difficulty: 2, words: [
      ["BLOKE", "Ordinary fellow, in London"],
      ["GEEZER", "Old man"],
      ["LAD", "Young boy"],
      ["FELLA", "Fellow, casually"],
    ]},
    { category: "___boat", difficulty: 3, words: [
      ["GRAVY", "Thanksgiving sauce"],
      ["TUG", "Pull hard"],
      ["SHOW", "Performance"],
      ["BANANA", "Yellow fruit"],
    ]},
  ]},
  // 216
  { groups: [
    { category: "Playground games", difficulty: 0, words: [
      ["TAG", "Price label"],
      ["HOPSCOTCH", "Chalk-square hopping game"],
      ["MARBLES", "Glass balls for a game"],
      ["FOURSQUARE", "Bouncing-ball game on a split court"],
    ]},
    { category: "Countertop materials", difficulty: 1, words: [
      ["GRANITE", "Hard igneous rock"],
      ["QUARTZ", "Watch crystal mineral"],
      ["SOAPSTONE", "Soft carving rock"],
      ["LAMINATE", "Cover with plastic film"],
    ]},
    { category: "Lose your ___", difficulty: 2, words: [
      ["TEMPER", "Harden steel by heating"],
      ["COOL", "Slightly cold"],
      ["NERVE", "Bundle of fibers carrying signals"],
      ["MIND", "Look after, as a baby"],
    ]},
    { category: "Add P to the front", difficulty: 3, words: [
      ["LANE", "Road division"],
      ["LACE", "Delicate openwork fabric"],
      ["OUCH", "Cry of pain"],
      ["RAISE", "Pay increase"],
    ]},
  ]},
  // 217
  { groups: [
    { category: "Ski lifts", difficulty: 0, words: [
      ["TRAM", "Streetcar"],
      ["GONDOLA", "Venetian boat"],
      ["TBAR", "Ski lift shaped like a letter"],
      ["ROPETOW", "Rope that pulls skiers uphill"],
    ]},
    { category: "Pep rally", difficulty: 1, words: [
      ["POMPOM", "Fluffy yarn ball"],
      ["MEGAPHONE", "Cone that amplifies a voice"],
      ["MASCOT", "Team's costumed character"],
      ["CHANT", "Repeated rhythmic shout"],
    ]},
    { category: "Hair colors", difficulty: 2, words: [
      ["AUBURN", "Alabama university town"],
      ["BRUNETTE", "Dark-haired person"],
      ["BLONDE", "Fair-haired"],
      ["GINGER", "Root used in stir-fries"],
    ]},
    { category: "___lift", difficulty: 3, words: [
      ["FORK", "Dinner utensil with tines"],
      ["SHOP", "Store"],
      ["CHAIR", "Seat with a back"],
      ["SKI", "Glide down a snowy slope"],
    ]},
  ]},
  // 218
  { groups: [
    { category: "Runner's ailments", difficulty: 0, words: [
      ["CRAMP", "Muscle spasm"],
      ["BLISTER", "Friction bubble on skin"],
      ["CHAFING", "Rubbing raw"],
      ["SPRAIN", "Twisted ligament"],
    ]},
    { category: "Untruths", difficulty: 1, words: [
      ["FIB", "Little white lie"],
      ["WHOPPER", "Burger King's signature burger"],
      ["HOAX", "Elaborate deception"],
      ["FABLE", "Moral tale like Aesop's"],
    ]},
    { category: "Knitting terms", difficulty: 2, words: [
      ["PURL", "Sounds like a cat's contented hum"],
      ["SKEIN", "Loosely coiled bundle"],
      ["STITCH", "Sharp side pain from running"],
      ["YARN", "Tall tale"],
    ]},
    { category: "___hound", difficulty: 3, words: [
      ["BLOOD", "It runs through your veins"],
      ["GREY", "British spelling of a dull color"],
      ["FOX", "Sly animal"],
      ["NEWS", "Daily headlines"],
    ]},
  ]},
  // 219
  { groups: [
    { category: "Laundry room", difficulty: 0, words: [
      ["BLEACH", "Whiten"],
      ["HAMPER", "Hinder"],
      ["DRYER", "More arid"],
      ["LINT", "Fuzz in your belly button"],
    ]},
    { category: "Grab", difficulty: 1, words: [
      ["GRASP", "Understand"],
      ["SEIZE", "Take by force"],
      ["GRIP", "Firm hold"],
      ["NAB", "Arrest"],
    ]},
    { category: "Handbags", difficulty: 2, words: [
      ["CLUTCH", "Car pedal for shifting gears"],
      ["TOTE", "Carry"],
      ["SATCHEL", "Schoolbag with a flap"],
      ["HOBO", "Train-hopping drifter"],
    ]},
    { category: "Weightlifting moves", difficulty: 3, words: [
      ["SNATCH", "Grab quickly"],
      ["CLEAN", "Free of dirt"],
      ["JERK", "Sudden tug"],
      ["DEADLIFT", "Lift a barbell from the floor"],
    ]},
  ]},
  // 220
  { groups: [
    { category: "Primates", difficulty: 0, words: [
      ["GORILLA", "Silverback ape"],
      ["BABOON", "Monkey with a doglike snout"],
      ["LEMUR", "Ring-tailed Madagascar animal"],
      ["GIBBON", "Long-armed swinging ape"],
    ]},
    { category: "Video game words", difficulty: 1, words: [
      ["BOSS", "Person in charge"],
      ["AVATAR", "Profile picture"],
      ["RESPAWN", "Come back to life in a game"],
      ["LOOT", "Plunder"],
    ]},
    { category: "Treasure", difficulty: 2, words: [
      ["BOOTY", "Pirate's plunder"],
      ["DOUBLOON", "Old Spanish gold coin"],
      ["BULLION", "Gold bars"],
      ["TROVE", "Valuable collection"],
    ]},
    { category: "Bull___", difficulty: 3, words: [
      ["DOZER", "Napper"],
      ["FROG", "Ribbiting amphibian"],
      ["HORN", "Rhino's feature"],
      ["PEN", "Writing tool"],
    ]},
  ]},
  // 221
  { groups: [
    { category: "Trail snacks", difficulty: 0, words: [
      ["JERKY", "Moving in sudden starts"],
      ["GORP", "Raisins-and-peanuts mix"],
      ["GRANOLA", "Crunchy, earthy type, slangily"],
      ["RAISINS", "Dried grapes"],
    ]},
    { category: "Scuba gear", difficulty: 1, words: [
      ["MASK", "Halloween face cover"],
      ["FINS", "Shark's back blades"],
      ["SNORKEL", "Breathing tube"],
      ["WETSUIT", "Neoprene bodysuit"],
    ]},
    { category: "Fragile", difficulty: 2, words: [
      ["DELICATE", "Needing tact, as a situation"],
      ["FLIMSY", "Weak, like a bad excuse"],
      ["FRAIL", "Weak and elderly"],
      ["DAINTY", "Small and pretty"],
    ]},
    { category: "___ cup", difficulty: 3, words: [
      ["BUTTER", "Spread for toast"],
      ["WORLD", "Earth"],
      ["SIPPY", "Toddler's spill-proof style"],
      ["MEASURING", "Gauging size"],
    ]},
  ]},
  // 222
  { groups: [
    { category: "Lawn care", difficulty: 0, words: [
      ["MOWER", "Grass cutter"],
      ["SPRINKLER", "Fire safety ceiling device"],
      ["EDGER", "Tool for neat borders"],
      ["HOSE", "Stockings"],
    ]},
    { category: "Thrown in lawn games", difficulty: 1, words: [
      ["DART", "Dash quickly"],
      ["FRISBEE", "Flying disc"],
      ["BOOMERANG", "Thing that comes back"],
      ["BEANBAG", "Squishy chair"],
    ]},
    { category: "Things that come back", difficulty: 2, words: [
      ["TIDE", "Laundry detergent brand"],
      ["ECHO", "Repeated sound"],
      ["KARMA", "What goes around"],
      ["SALMON", "Pink-fleshed fish"],
    ]},
    { category: "___shoe", difficulty: 3, words: [
      ["TENNIS", "Wimbledon sport"],
      ["GUM", "Chewy treat"],
      ["BRAKE", "Car stopper"],
      ["OVER", "Finished"],
    ]},
  ]},
  // 223
  { groups: [
    { category: "Superheroes", difficulty: 0, words: [
      ["THOR", "Norse god of thunder"],
      ["HULK", "Big, bulky person"],
      ["STORM", "Thunder and lightning"],
      ["ROBIN", "Red-breasted songbird"],
    ]},
    { category: "Instant", difficulty: 1, words: [
      ["FLASH", "Brief burst of light"],
      ["JIFFY", "Brand of peanut butter"],
      ["TRICE", "Very short time"],
      ["SECOND", "Runner-up"],
    ]},
    { category: "Window treatments", difficulty: 2, words: [
      ["BLINDS", "Unable to see, plural"],
      ["DRAPES", "Hangs loosely"],
      ["CURTAINS", "The end, informally"],
      ["VALANCE", "Short drapery at the top"],
    ]},
    { category: "Anagrams of STOP", difficulty: 3, words: [
      ["SPOT", "Small mark"],
      ["TOPS", "The best"],
      ["POST", "Share on social media"],
      ["OPTS", "Chooses"],
    ]},
  ]},
  // 224
  { groups: [
    { category: "Pond fish", difficulty: 0, words: [
      ["KOI", "Colorful Japanese carp"],
      ["MINNOW", "Tiny bait fish"],
      ["GUPPY", "Popular aquarium fish"],
      ["BLUEGILL", "Sunfish species"],
    ]},
    { category: "Skate park features", difficulty: 1, words: [
      ["RAMP", "Sloped surface"],
      ["RAIL", "Train track bar"],
      ["BOWL", "Cereal dish"],
      ["HALFPIPE", "U-shaped snowboard course"],
    ]},
    { category: "Complain", difficulty: 2, words: [
      ["GRIPE", "Grumble"],
      ["MOAN", "Groan"],
      ["WHINE", "High-pitched complaint"],
      ["CARP", "Freshwater fish"],
    ]},
    { category: "___pipe", difficulty: 3, words: [
      ["BAG", "Sack"],
      ["DRAIN", "Sink's exit"],
      ["STOVE", "Kitchen range"],
      ["PEACE", "Calm"],
    ]},
  ]},
  // 225
  { groups: [
    { category: "Owls", difficulty: 0, words: [
      ["BARN", "Farm building for hay"],
      ["SNOWY", "Like a winter landscape"],
      ["SCREECH", "Squealing tire noise"],
      ["HORNED", "Like a rhino or ram"],
    ]},
    { category: "Female animals", difficulty: 1, words: [
      ["DOE", "John ___, anonymous man"],
      ["SOW", "Plant seeds"],
      ["HEN", "Bachelorette party, ___ night"],
      ["VIXEN", "Flirtatious troublemaker"],
    ]},
    { category: "Sharks", difficulty: 2, words: [
      ["TIGER", "Striped big cat"],
      ["NURSE", "Hospital caregiver"],
      ["BULL", "Charging animal in a ring"],
      ["LEMON", "Sour yellow citrus"],
    ]},
    { category: "Animal plus a letter", difficulty: 3, words: [
      ["COWL", "Monk's hood"],
      ["BATH", "Tub soak"],
      ["ANTE", "Poker stake"],
      ["RATE", "Speed or price"],
    ]},
  ]},
  // 226
  { groups: [
    { category: "Parrots", difficulty: 0, words: [
      ["MACAW", "Big colorful rainforest talker"],
      ["COCKATOO", "Crested Australian talker"],
      ["PARAKEET", "Budgie, by another name"],
      ["COCKATIEL", "Small crested pet with orange cheeks"],
    ]},
    { category: "Teeth", difficulty: 1, words: [
      ["MOLAR", "Back grinding tooth"],
      ["CANINE", "Doglike"],
      ["INCISOR", "Front cutting tooth"],
      ["FANG", "Snake's venom delivery point"],
    ]},
    { category: "Animal adjectives", difficulty: 2, words: [
      ["FELINE", "Catlike"],
      ["BOVINE", "Cowlike and dull"],
      ["EQUINE", "Horsey"],
      ["LUPINE", "Blue-spiked garden flower"],
    ]},
    { category: "___bird", difficulty: 3, words: [
      ["JAIL", "Lockup"],
      ["HUMMING", "Singing with closed lips"],
      ["MOCKING", "Teasing"],
      ["EARLY", "Ahead of schedule"],
    ]},
  ]},
  // 227
  { groups: [
    { category: "Precipitation", difficulty: 0, words: [
      ["RAIN", "Drops from the clouds"],
      ["SLEET", "Icy pellets mixed with rain"],
      ["HAIL", "Call out to a taxi"],
      ["SNOW", "Old TV static"],
    ]},
    { category: "Lab equipment", difficulty: 1, words: [
      ["BEAKER", "Muppet lab assistant"],
      ["FLASK", "Hip whiskey container"],
      ["BURNER", "Throwaway phone"],
      ["PIPETTE", "Dropper for measuring liquid"],
    ]},
    { category: "Named winds", difficulty: 2, words: [
      ["CHINOOK", "Twin-rotor military helicopter"],
      ["MISTRAL", "Cold wind of southern France"],
      ["SIROCCO", "Hot wind off the Sahara"],
      ["ZEPHYR", "Gentle west breeze, poetically"],
    ]},
    { category: "Wind___", difficulty: 3, words: [
      ["MILL", "Grind into flour"],
      ["SHIELD", "Protective guard"],
      ["FALL", "Autumn"],
      ["SOCK", "Footwear item"],
    ]},
  ]},
  // 228
  { groups: [
    { category: "Polar animals", difficulty: 0, words: [
      ["WALRUS", "Tusked blubbery sea mammal"],
      ["NARWHAL", "Unicorn of the sea"],
      ["PENGUIN", "Tuxedoed flightless bird"],
      ["SEAL", "Stamp of approval"],
    ]},
    { category: "Flower parts", difficulty: 1, words: [
      ["PETAL", "Colorful bloom segment"],
      ["STAMEN", "Pollen-bearing part of a blossom"],
      ["PISTIL", "Seed-bearing part of a blossom"],
      ["SEPAL", "Green leaflike part under a bud"],
    ]},
    { category: "Things with cells", difficulty: 2, words: [
      ["PRISON", "Lockup with bars"],
      ["BATTERY", "Assault's legal partner"],
      ["HONEYCOMB", "Wax hexagon structure"],
      ["SPREADSHEET", "Excel document"],
    ]},
    { category: "Moon___", difficulty: 3, words: [
      ["LIT", "Set aflame"],
      ["WALK", "Stroll"],
      ["SHINE", "Polish, as shoes"],
      ["STRUCK", "Hit"],
    ]},
  ]},
  // 229
  { groups: [
    { category: "Storms", difficulty: 0, words: [
      ["TYPHOON", "Pacific hurricane"],
      ["CYCLONE", "Famous Coney Island roller coaster"],
      ["BLIZZARD", "Dairy Queen frozen treat"],
      ["TORNADO", "Twister"],
    ]},
    { category: "Muscles", difficulty: 1, words: [
      ["BICEPS", "Flex these to show off"],
      ["DELTOID", "Rounded shoulder muscle"],
      ["GLUTE", "Rear-end muscle, informally"],
      ["PEC", "Chest muscle, for short"],
    ]},
    { category: "Honeybee colony", difficulty: 2, words: [
      ["DRONE", "Unmanned flying aircraft"],
      ["QUEEN", "Chess's most powerful piece"],
      ["WORKER", "Employee"],
      ["LARVA", "Grub stage of an insect"],
    ]},
    { category: "___bone", difficulty: 3, words: [
      ["WISH", "Birthday candle desire"],
      ["FUNNY", "Hilarious"],
      ["CHEEK", "Sass, impudence"],
      ["HERRING", "Red ___, a false clue"],
    ]},
  ]},
  // 230
  { groups: [
    { category: "Noble gases", difficulty: 0, words: [
      ["NEON", "Bright sign lighting"],
      ["ARGON", "Gas filling many light bulbs"],
      ["XENON", "Gas in bright car headlights"],
      ["KRYPTON", "Superman's home planet"],
    ]},
    { category: "Birds of prey", difficulty: 1, words: [
      ["FALCON", "Han Solo's Millennium ship"],
      ["OSPREY", "Fish-catching hawk"],
      ["KESTREL", "Small hovering raptor"],
      ["CONDOR", "Huge Andean vulture"],
    ]},
    { category: "Blood vessels", difficulty: 2, words: [
      ["AORTA", "Main vessel leaving the heart"],
      ["VEIN", "Streak of ore in rock"],
      ["CAPILLARY", "Tiniest vessel in the body"],
      ["ARTERY", "Major highway, figuratively"],
    ]},
    { category: "Starts with a vehicle", difficulty: 3, words: [
      ["CARTON", "Milk container"],
      ["BUSHEL", "Basket measure of apples"],
      ["VANILLA", "Plain ice cream flavor"],
      ["CABBAGE", "Leafy coleslaw base"],
    ]},
  ]},
  // 231
  { groups: [
    { category: "Volcano parts", difficulty: 0, words: [
      ["CRATER", "Dent on the moon's surface"],
      ["MAGMA", "Molten rock below ground"],
      ["VENT", "Let off steam, emotionally"],
      ["CONE", "Ice cream holder"],
    ]},
    { category: "Weasel family", difficulty: 1, words: [
      ["FERRET", "Search out, with out"],
      ["MINK", "Luxe fur coat"],
      ["ERMINE", "White fur on royal robes"],
      ["WOLVERINE", "X-Men hero with claws"],
    ]},
    { category: "Cell parts", difficulty: 2, words: [
      ["NUCLEUS", "Atom's dense center"],
      ["MEMBRANE", "Thin skinlike layer"],
      ["VACUOLE", "Storage sac in a plant cell"],
      ["RIBOSOME", "Protein-building cell structure"],
    ]},
    { category: "Rain___", difficulty: 3, words: [
      ["FOREST", "Woodland"],
      ["COAT", "Layer of paint"],
      ["DROP", "Let fall"],
      ["GAUGE", "Measure or estimate"],
    ]},
  ]},
  // 232
  { groups: [
    { category: "Shellfish", difficulty: 0, words: [
      ["PRAWN", "Jumbo shrimp, by another name"],
      ["OYSTER", "Pearl producer"],
      ["MUSSEL", "Sounds like arm strength"],
      ["SCALLOP", "Wavy edge on fabric"],
    ]},
    { category: "Wild cats", difficulty: 1, words: [
      ["JAGUAR", "British luxury car brand"],
      ["PUMA", "Athletic shoe brand"],
      ["LYNX", "Tufted-ear bobcat relative"],
      ["CHEETAH", "Fastest land runner"],
    ]},
    { category: "Skin features", difficulty: 2, words: [
      ["FRECKLE", "Sun-kissed spot"],
      ["MOLE", "Spy inside an organization"],
      ["PORE", "Read intently, with over"],
      ["SCAR", "Traumatize emotionally"],
    ]},
    { category: "___ fever", difficulty: 3, words: [
      ["CABIN", "Log house"],
      ["TYPHOID", "___ Mary, notorious disease spreader"],
      ["YELLOW", "Banana color"],
      ["SPRING", "Coiled metal piece"],
    ]},
  ]},
  // 233
  { groups: [
    { category: "Rainbow colors", difficulty: 0, words: [
      ["INDIGO", "Deep blue plant dye"],
      ["VIOLET", "Shrinking ___, a shy person"],
      ["ORANGE", "Citrus fruit"],
      ["GREEN", "Inexperienced, like a newbie"],
    ]},
    { category: "Medicine forms", difficulty: 1, words: [
      ["TABLET", "iPad, for one"],
      ["CAPSULE", "Time ___, buried for the future"],
      ["SYRUP", "Pancake topping"],
      ["OINTMENT", "Fly in the ___"],
    ]},
    { category: "Seabirds", difficulty: 2, words: [
      ["GANNET", "Greedy eater, in British slang"],
      ["PELICAN", "Big-billed pouch bird"],
      ["TERN", "Sounds like a rotation"],
      ["PUFFIN", "Clown-faced cliff bird"],
    ]},
    { category: "Sky___", difficulty: 3, words: [
      ["LARK", "Harmless prank"],
      ["LINE", "Queue"],
      ["SCRAPER", "Ice removal tool"],
      ["DIVER", "Scuba swimmer"],
    ]},
  ]},
  // 234
  { groups: [
    { category: "Wetlands", difficulty: 0, words: [
      ["SWAMP", "Overwhelm with work"],
      ["MIRE", "Stuck in the ___"],
      ["BOG", "Get stuck, with down"],
      ["BAYOU", "Louisiana backwater"],
    ]},
    { category: "Brain parts", difficulty: 1, words: [
      ["CORTEX", "Outer layer of an organ"],
      ["LOBE", "Fleshy dangling ear part"],
      ["CEREBRUM", "Largest part of the brain"],
      ["THALAMUS", "Sensory relay station in the brain"],
    ]},
    { category: "Evergreens", difficulty: 2, words: [
      ["SPRUCE", "Tidy up, with up"],
      ["PINE", "Long for wistfully"],
      ["CEDAR", "Wood for closets and chests"],
      ["HEMLOCK", "Poison Socrates drank"],
    ]},
    { category: "Hidden tools", difficulty: 3, words: [
      ["TAXES", "April burdens"],
      ["BRAWL", "Bar fight"],
      ["SHOE", "Sneaker or sandal"],
      ["PLANET", "Mars or Venus"],
    ]},
  ]},
  // 235
  { groups: [
    { category: "Wading birds", difficulty: 0, words: [
      ["STORK", "Baby-delivering bird of legend"],
      ["CRANE", "Construction lifter"],
      ["FLAMINGO", "Pink bird on one leg"],
      ["HERON", "Long-legged fish spearer"],
    ]},
    { category: "Energy sources", difficulty: 1, words: [
      ["SOLAR", "Like panels on a roof"],
      ["WIND", "Turn the crank on a clock"],
      ["TIDAL", "Like a big ocean wave"],
      ["NUCLEAR", "___ family: parents and kids"],
    ]},
    { category: "Things that orbit", difficulty: 2, words: [
      ["MOON", "Earth's satellite"],
      ["COMET", "Santa's reindeer"],
      ["SATELLITE", "Dish TV source"],
      ["ASTEROID", "Space rock"],
    ]},
    { category: "Fore___", difficulty: 3, words: [
      ["CAST", "Throw a fishing line"],
      ["FINGER", "Pinky, for one"],
      ["CLOSE", "Shut"],
      ["MOST", "Greatest amount"],
    ]},
  ]},
  // 236
  { groups: [
    { category: "Common ailments", difficulty: 0, words: [
      ["COLD", "Chilly"],
      ["COUGH", "Hack"],
      ["FEVER", "Saturday Night ___"],
      ["RASH", "Hasty, impulsive"],
    ]},
    { category: "Soil types", difficulty: 1, words: [
      ["LOAM", "Rich garden earth"],
      ["CLAY", "Pottery material"],
      ["SILT", "River sediment"],
      ["PEAT", "Bog fuel"],
    ]},
    { category: "Spotted animals", difficulty: 2, words: [
      ["GIRAFFE", "Tallest animal"],
      ["LEOPARD", "Can't change its spots, they say"],
      ["LADYBUG", "Lucky red beetle"],
      ["HYENA", "Laughing scavenger"],
    ]},
    { category: "Starts with a body of water", difficulty: 3, words: [
      ["PONDER", "Think deeply"],
      ["BAYONET", "Rifle blade"],
      ["SEANCE", "Spirit-summoning session"],
      ["BROOKLYN", "New York City borough"],
    ]},
  ]},
  // 237
  { groups: [
    { category: "Biting pests", difficulty: 0, words: [
      ["MOSQUITO", "Buzzing summer bloodsucker"],
      ["FLEA", "___ market, for bargains"],
      ["TICK", "Clock sound"],
      ["LOUSE", "Contemptible person"],
    ]},
    { category: "Bright stars", difficulty: 1, words: [
      ["SIRIUS", "The Dog Star"],
      ["VEGA", "Suzanne who sang Tom's Diner"],
      ["RIGEL", "Blue-white star in Orion's foot"],
      ["POLARIS", "The North Star"],
    ]},
    { category: "Insect anatomy", difficulty: 2, words: [
      ["THORAX", "Chest region"],
      ["ABDOMEN", "Belly"],
      ["ANTENNA", "TV signal catcher"],
      ["MANDIBLE", "Lower jaw bone"],
    ]},
    { category: "Drop the first letter for an animal", difficulty: 3, words: [
      ["SCOW", "Flat-bottomed boat"],
      ["TRAM", "Streetcar"],
      ["WHEN", "At what time"],
      ["SHARE", "Divide up"],
    ]},
  ]},
  // 238
  { groups: [
    { category: "Succulents", difficulty: 0, words: [
      ["ALOE", "Sunburn soother"],
      ["AGAVE", "Tequila plant"],
      ["YUCCA", "Spiky Southwest plant"],
      ["SAGUARO", "Giant desert plant with arms"],
    ]},
    { category: "Digestive tract", difficulty: 1, words: [
      ["COLON", "Punctuation mark with two dots"],
      ["STOMACH", "Tolerate, as in can't ___ it"],
      ["ESOPHAGUS", "Tube from throat to belly"],
      ["APPENDIX", "Back-of-book section"],
    ]},
    { category: "Simple machines", difficulty: 2, words: [
      ["LEVER", "Bar used to pry"],
      ["PULLEY", "Rope-and-wheel lifter"],
      ["WEDGE", "Shoe with a sloped heel"],
      ["SCREW", "Spiral fastener"],
    ]},
    { category: "Hidden organs", difficulty: 3, words: [
      ["DELIVER", "Bring to the door"],
      ["LUNGE", "Fencer's thrust"],
      ["SWEETHEART", "Darling"],
      ["SKINNY", "Very thin"],
    ]},
  ]},
  // 239
  { groups: [
    { category: "Garden weeds", difficulty: 0, words: [
      ["DANDELION", "Puffball-making yellow bloom"],
      ["THISTLE", "Scotland's prickly emblem"],
      ["NETTLE", "Irritate"],
      ["RAGWEED", "Hay fever trigger"],
    ]},
    { category: "Surgical instruments", difficulty: 1, words: [
      ["SCALPEL", "Surgeon's blade"],
      ["SYRINGE", "Needle for injections"],
      ["FORCEPS", "Delivery-room tongs"],
      ["LANCET", "Small two-edged pricking blade"],
    ]},
    { category: "Nocturnal animals", difficulty: 2, words: [
      ["BAT", "Baseball club"],
      ["MOTH", "Closet pest that eats wool"],
      ["RACCOON", "Masked trash bandit"],
      ["OWL", "Wise bird of fables"],
    ]},
    { category: "___ cell", difficulty: 3, words: [
      ["STEM", "Flower stalk"],
      ["FUEL", "Gasoline, e.g."],
      ["BLOOD", "Red stuff in veins"],
      ["PADDED", "Cushioned"],
    ]},
  ]},
  // 240
  { groups: [
    { category: "Garden pests", difficulty: 0, words: [
      ["APHID", "Tiny sap-sucking insect"],
      ["SLUG", "Hit hard"],
      ["SNAIL", "___ mail, slow post"],
      ["GRUB", "Food, informally"],
    ]},
    { category: "Alloys", difficulty: 1, words: [
      ["BRASS", "Trumpets section"],
      ["PEWTER", "Old tankard metal"],
      ["STEEL", "Brace oneself"],
      ["SOLDER", "Electronics joining metal"],
    ]},
    { category: "Space telescopes", difficulty: 2, words: [
      ["HUBBLE", "Telescope launched in 1990"],
      ["WEBB", "Sounds like a spider's home"],
      ["KEPLER", "Planet-motion astronomer"],
      ["SPITZER", "Infrared telescope retired in 2020"],
    ]},
    { category: "___stone", difficulty: 3, words: [
      ["MILE", "5,280 feet"],
      ["KIDNEY", "Bean-shaped organ"],
      ["BRIM", "Hat's edge"],
      ["COBBLE", "Put together hastily"],
    ]},
  ]},
  // 241
  { groups: [
    { category: "Bears", difficulty: 0, words: [
      ["GRIZZLY", "Big brown bear of the Rockies"],
      ["POLAR", "Diametrically opposite"],
      ["PANDA", "Bamboo eater"],
      ["KODIAK", "Huge Alaskan island bear"],
    ]},
    { category: "The five senses", difficulty: 1, words: [
      ["TASTE", "Sense of style"],
      ["SIGHT", "A ___ for sore eyes"],
      ["HEARING", "Courtroom proceeding"],
      ["TOUCH", "Football's ___down"],
    ]},
    { category: "Cephalopods", difficulty: 2, words: [
      ["SQUID", "Ink-squirting sea creature"],
      ["OCTOPUS", "Eight-armed sea creature"],
      ["CUTTLEFISH", "Its bone is a bird-cage treat"],
      ["NAUTILUS", "Captain Nemo's submarine"],
    ]},
    { category: "Hidden colors", difficulty: 3, words: [
      ["SCARED", "Frightened"],
      ["PINKIE", "Littlest finger"],
      ["BROWNIE", "Chocolate square dessert"],
      ["STEALTH", "Sneakiness"],
    ]},
  ]},
  // 242
  { groups: [
    { category: "Tooth parts", difficulty: 0, words: [
      ["ENAMEL", "Glossy paint"],
      ["PULP", "Orange juice bits"],
      ["CROWN", "King's headwear"],
      ["CUSP", "Brink, as of greatness"],
    ]},
    { category: "Dietary minerals", difficulty: 1, words: [
      ["IRON", "Press wrinkles out"],
      ["ZINC", "Metal coating galvanized steel"],
      ["CALCIUM", "Milk's bone builder"],
      ["POTASSIUM", "Nutrient bananas are known for"],
    ]},
    { category: "Solar features", difficulty: 2, words: [
      ["CORONA", "Mexican beer brand"],
      ["FLARE", "Roadside emergency signal"],
      ["SUNSPOT", "Dark patch on our star"],
      ["PROMINENCE", "Fame, importance"],
    ]},
    { category: "Thunder___", difficulty: 3, words: [
      ["CLAP", "Applaud"],
      ["BIRD", "Tweeter"],
      ["STORM", "Barge in angrily"],
      ["CLOUD", "Obscure, as judgment"],
    ]},
  ]},
  // 243
  { groups: [
    { category: "Forecast words", difficulty: 0, words: [
      ["SUNNY", "Cheerful in disposition"],
      ["WINDY", "Like Chicago, by nickname"],
      ["FOGGY", "Hazy, as a memory"],
      ["STORMY", "Turbulent, as a relationship"],
    ]},
    { category: "Bones", difficulty: 1, words: [
      ["HUMERUS", "Upper arm bone"],
      ["RADIUS", "Half of a diameter"],
      ["ULNA", "Forearm bone on the pinky side"],
      ["STERNUM", "Breastbone"],
    ]},
    { category: "Grasslands", difficulty: 2, words: [
      ["SAVANNA", "Lion-dotted African plain"],
      ["STEPPE", "Sounds like a stair move"],
      ["PRAIRIE", "Little House on the ___"],
      ["PAMPAS", "Plume-topped ornamental grass"],
    ]},
    { category: "Animal homophones", difficulty: 3, words: [
      ["DEAR", "Letter's opening word"],
      ["BARE", "Unclothed"],
      ["HOARSE", "Raspy-voiced"],
      ["WAIL", "Cry loudly"],
    ]},
  ]},
  // 244
  { groups: [
    { category: "Hair textures", difficulty: 0, words: [
      ["CURLY", "Stooge with a buzz cut"],
      ["WAVY", "Like a rippling flag"],
      ["FRIZZY", "Puffed up in humidity"],
      ["STRAIGHT", "Five-in-a-row poker hand"],
    ]},
    { category: "Hormones", difficulty: 1, words: [
      ["INSULIN", "Diabetes treatment"],
      ["ADRENALINE", "Rush of excitement"],
      ["MELATONIN", "Popular sleep supplement"],
      ["CORTISOL", "Stress chemical in the body"],
    ]},
    { category: "Antelopes", difficulty: 2, words: [
      ["IMPALA", "Chevy sedan"],
      ["GAZELLE", "Graceful leaper of the savanna"],
      ["GNU", "Wildebeest"],
      ["SPRINGBOK", "South African rugby player"],
    ]},
    { category: "___berry", difficulty: 3, words: [
      ["GOOSE", "Honking bird"],
      ["ELDER", "Senior tribe member"],
      ["RASP", "Grating voice"],
      ["BAR", "Pub counter"],
    ]},
  ]},
  // 245
  { groups: [
    { category: "Deserts", difficulty: 0, words: [
      ["SAHARA", "Huge North African desert"],
      ["GOBI", "Mongolian desert"],
      ["MOJAVE", "Desert home of Joshua trees"],
      ["ATACAMA", "Chile's super-dry desert"],
    ]},
    { category: "Earthquake terms", difficulty: 1, words: [
      ["FAULT", "Blame"],
      ["TREMOR", "Shaky hand symptom"],
      ["AFTERSHOCK", "Later rumble after the big one"],
      ["EPICENTER", "Focal point of activity"],
    ]},
    { category: "States of matter", difficulty: 2, words: [
      ["SOLID", "Firm, dependable"],
      ["LIQUID", "Easily turned into cash"],
      ["GAS", "Fuel for a car"],
      ["PLASMA", "Big flat TV type"],
    ]},
    { category: "___dust", difficulty: 3, words: [
      ["SAW", "Cutting tool with teeth"],
      ["GOLD", "Olympic first-place medal"],
      ["PIXIE", "Mischievous fairy"],
      ["COAL", "Lump in a naughty stocking"],
    ]},
  ]},
  // 246
  { groups: [
    { category: "Great apes", difficulty: 0, words: [
      ["GORILLA", "___ Glue, a strong adhesive"],
      ["CHIMP", "Tool-using ape, for short"],
      ["ORANGUTAN", "Red-haired ape of Borneo"],
      ["BONOBO", "Peaceful cousin of the chimp"],
    ]},
    { category: "Breathing anatomy", difficulty: 1, words: [
      ["TRACHEA", "Windpipe"],
      ["LARYNX", "Voice box"],
      ["DIAPHRAGM", "Dome-shaped muscle under the lungs"],
      ["NOSTRIL", "Nose opening"],
    ]},
    { category: "Things that erupt", difficulty: 2, words: [
      ["GEYSER", "Old Faithful, e.g."],
      ["VOLCANO", "Lava mountain"],
      ["ZIT", "Teen's facial blemish"],
      ["APPLAUSE", "Clapping from an audience"],
    ]},
    { category: "___weed", difficulty: 3, words: [
      ["TUMBLE", "Fall down"],
      ["DUCK", "Quacker"],
      ["RAG", "Cleaning cloth"],
      ["KNOT", "Tie in a rope"],
    ]},
  ]},
  // 247
  { groups: [
    { category: "Aquarium fish", difficulty: 0, words: [
      ["GUPPY", "Tiny pet fish with a fancy tail"],
      ["TETRA", "Neon ___, glowing pet fish"],
      ["MOLLY", "Girl's name, or a livebearer fish"],
      ["BETTA", "Siamese fighting fish"],
    ]},
    { category: "Electromagnetic spectrum", difficulty: 1, words: [
      ["RADIO", "Car stereo"],
      ["GAMMA", "Third Greek letter"],
      ["INFRARED", "Night-vision light"],
      ["MICROWAVE", "Kitchen reheating box"],
    ]},
    { category: "Amphibians", difficulty: 2, words: [
      ["FROG", "Throat lump, informally"],
      ["TOAD", "Warty hopper"],
      ["NEWT", "Eye of ___, witches' ingredient"],
      ["AXOLOTL", "Smiling Mexican salamander"],
    ]},
    { category: "Fire___", difficulty: 3, words: [
      ["ARM", "Limb"],
      ["PLACE", "Spot"],
      ["WORKS", "Functions"],
      ["PROOF", "Evidence"],
    ]},
  ]},
  // 248
  { groups: [
    { category: "Spring bulbs", difficulty: 0, words: [
      ["TULIP", "Dutch spring bloom"],
      ["DAFFODIL", "Yellow trumpet-shaped bloom"],
      ["CROCUS", "Early purple bloom through snow"],
      ["HYACINTH", "Fragrant clustered spring bloom"],
    ]},
    { category: "Hospital areas", difficulty: 1, words: [
      ["WARD", "Charge of a guardian"],
      ["PHARMACY", "Drugstore"],
      ["NURSERY", "Plant shop"],
      ["LAB", "Popular retriever, for short"],
    ]},
    { category: "Flightless birds", difficulty: 2, words: [
      ["EMU", "Big Australian bird"],
      ["KIWI", "Fuzzy green fruit"],
      ["OSTRICH", "Bird said to bury its head"],
      ["DODO", "Extinct Mauritius bird"],
    ]},
    { category: "___ shower", difficulty: 3, words: [
      ["METEOR", "Shooting star"],
      ["BABY", "Infant"],
      ["BRIDAL", "Wedding-related"],
      ["APRIL", "Month of fools' pranks"],
    ]},
  ]},
  // 249
  { groups: [
    { category: "Whales", difficulty: 0, words: [
      ["ORCA", "Black-and-white killer of the sea"],
      ["BELUGA", "Prized caviar sturgeon"],
      ["HUMPBACK", "Song-singing baleen giant"],
      ["GRAY", "Color of storm clouds"],
    ]},
    { category: "Rockhound finds", difficulty: 1, words: [
      ["FOSSIL", "Old-fashioned person, jokingly"],
      ["GEODE", "Hollow rock lined with crystals"],
      ["QUARTZ", "Crystal in many watches"],
      ["AGATE", "Banded marble stone"],
    ]},
    { category: "Joints", difficulty: 2, words: [
      ["ELBOW", "Macaroni shape"],
      ["KNEE", "___-jerk reaction"],
      ["WRIST", "Where a watch goes"],
      ["HIP", "Trendy, cool"],
    ]},
    { category: "Hidden weather", difficulty: 3, words: [
      ["TRAINER", "Gym coach"],
      ["MISTAKE", "Error"],
      ["WINDOW", "Pane in the wall"],
      ["FROSTING", "Cake icing"],
    ]},
  ]},
  // 250
  { groups: [
    { category: "Field crops", difficulty: 0, words: [
      ["CORN", "Painful foot bump"],
      ["WHEAT", "Grain for most flour"],
      ["SOYBEAN", "Tofu's source"],
      ["COTTON", "Fabric for T-shirts"],
    ]},
    { category: "Medicine cabinet items", difficulty: 1, words: [
      ["ASPIRIN", "Headache pill"],
      ["ANTACID", "Heartburn remedy"],
      ["LOZENGE", "Throat drop"],
      ["TWEEZERS", "Splinter pullers"],
    ]},
    { category: "Kinds of stars", difficulty: 2, words: [
      ["DWARF", "One of Snow White's seven"],
      ["GIANT", "Fee-fi-fo-fum figure"],
      ["NOVA", "PBS science series"],
      ["PULSAR", "Rapidly spinning neutron star"],
    ]},
    { category: "___bug", difficulty: 3, words: [
      ["BED", "Place to sleep"],
      ["JUNE", "Summer month"],
      ["STINK", "Bad odor"],
      ["LITTER", "Trash on the ground"],
    ]},
  ]},
  // 251
  { groups: [
    { category: "Cattle breeds", difficulty: 0, words: [
      ["ANGUS", "Steakhouse beef breed"],
      ["HOLSTEIN", "Black-and-white dairy cow"],
      ["JERSEY", "Football shirt"],
      ["HEREFORD", "English city, or red-and-white cow"],
    ]},
    { category: "Facial hair", difficulty: 1, words: [
      ["BEARD", "Confront boldly, as a lion"],
      ["MUSTACHE", "Hair above the upper lip"],
      ["SIDEBURNS", "Hair down the sides of the face"],
      ["STUBBLE", "Short growth after shaving"],
    ]},
    { category: "Wild canines", difficulty: 2, words: [
      ["COYOTE", "Road Runner's foe"],
      ["JACKAL", "Animal of the god Anubis"],
      ["DINGO", "Aussie outback hunter"],
      ["FOX", "Sly, cunning person"],
    ]},
    { category: "___paper", difficulty: 3, words: [
      ["SAND", "Beach grains"],
      ["WALL", "Great one in China"],
      ["NEWS", "Current events"],
      ["TISSUE", "Group of similar body cells"],
    ]},
  ]},
  // 252
  { groups: [
    { category: "River parts", difficulty: 0, words: [
      ["DELTA", "Airline"],
      ["RAPIDS", "Whitewater stretch"],
      ["MOUTH", "Lips' location"],
      ["BANK", "Money keeper"],
    ]},
    { category: "Microbes", difficulty: 1, words: [
      ["VIRUS", "Computer infection"],
      ["BACTERIA", "Germs in yogurt cultures"],
      ["FUNGUS", "Mold or mildew"],
      ["AMOEBA", "Shape-shifting single cell"],
    ]},
    { category: "Highest points", difficulty: 2, words: [
      ["SUMMIT", "Leaders' meeting"],
      ["APEX", "Top of a triangle"],
      ["ZENITH", "Point directly overhead"],
      ["PINNACLE", "Slender rock spire"],
    ]},
    { category: "Animals spelled backward", difficulty: 3, words: [
      ["TAR", "Sticky road pitch"],
      ["TAB", "Bar bill"],
      ["TANG", "Sharp flavor"],
      ["FLOW", "Steady stream"],
    ]},
  ]},
  // 253
  { groups: [
    { category: "Animal coats", difficulty: 0, words: [
      ["FUR", "Mink coat material"],
      ["FLEECE", "Overcharge, scam"],
      ["PELT", "Pummel with throws"],
      ["HIDE", "Conceal"],
    ]},
    { category: "Waves", difficulty: 1, words: [
      ["SWELL", "Great, in old slang"],
      ["BREAKER", "Circuit switch"],
      ["ROLLER", "Paint applicator"],
      ["SURF", "Browse the web"],
    ]},
    { category: "Food chain", difficulty: 2, words: [
      ["PREDATOR", "Sci-fi alien hunter film"],
      ["PREY", "Sounds like a request to heaven"],
      ["PRODUCER", "Film financier"],
      ["CONSUMER", "Shopper"],
    ]},
    { category: "Heat ___", difficulty: 3, words: [
      ["STROKE", "Swimming movement"],
      ["SINK", "Kitchen basin"],
      ["LAMP", "Bedside light"],
      ["INDEX", "Back-of-book list"],
    ]},
  ]},
  // 254
  { groups: [
    { category: "Australian animals", difficulty: 0, words: [
      ["KANGAROO", "___ court, an unfair trial"],
      ["WOMBAT", "Stocky Aussie burrower"],
      ["KOALA", "Eucalyptus muncher"],
      ["PLATYPUS", "Duck-billed egg layer"],
    ]},
    { category: "Cold symptoms", difficulty: 1, words: [
      ["SNEEZE", "Achoo!"],
      ["SNIFFLE", "Repeated nose sniff"],
      ["CHILLS", "Spine-tingling thrills"],
      ["ACHE", "Yearn, as a heart"],
    ]},
    { category: "Moon phases", difficulty: 2, words: [
      ["CRESCENT", "Croissant shape"],
      ["GIBBOUS", "More than half lit"],
      ["WANING", "Diminishing"],
      ["WAXING", "Hair removal method"],
    ]},
    { category: "Hidden APE", difficulty: 3, words: [
      ["DRAPE", "Curtain"],
      ["GRAPE", "Vine fruit"],
      ["SHAPE", "Circle or square"],
      ["ESCAPE", "Break out"],
    ]},
  ]},
  // 255
  { groups: [
    { category: "Bird anatomy", difficulty: 0, words: [
      ["BEAK", "Pointed bill"],
      ["WING", "Side of a building"],
      ["TALON", "Eagle claw"],
      ["CREST", "Top of a wave"],
    ]},
    { category: "Butterflies", difficulty: 1, words: [
      ["MONARCH", "King or queen"],
      ["ADMIRAL", "Navy officer"],
      ["SKIPPER", "Ship's captain"],
      ["VICEROY", "Colonial governor"],
    ]},
    { category: "Fields of science", difficulty: 2, words: [
      ["BOTANY", "Plant study"],
      ["ECOLOGY", "Ecosystem study"],
      ["GENETICS", "Heredity study"],
      ["OPTICS", "How things look to the public"],
    ]},
    { category: "___shell", difficulty: 3, words: [
      ["BOMB", "Flop at the box office"],
      ["NUT", "Crazy fan"],
      ["TORTOISE", "Hare's rival"],
      ["CLAM", "Shut up, with up"],
    ]},
  ]},
  // 256
  { groups: [
    { category: "Rainforest animals", difficulty: 0, words: [
      ["TOUCAN", "Big-billed fruit-loving bird"],
      ["SLOTH", "Laziness"],
      ["PARROT", "Repeat mindlessly"],
      ["ANACONDA", "Giant swamp-dwelling constrictor"],
    ]},
    { category: "Subatomic particles", difficulty: 1, words: [
      ["PROTON", "Positive bit of an atom"],
      ["NEUTRON", "Neutral bit of an atom"],
      ["ELECTRON", "Negative bit of an atom"],
      ["QUARK", "Building block of a proton"],
    ]},
    { category: "Gardening verbs", difficulty: 2, words: [
      ["PRUNE", "Dried plum"],
      ["WEED", "Unwanted plant"],
      ["MULCH", "Shredded bark layer"],
      ["RAKE", "Dashing rogue"],
    ]},
    { category: "Hidden electrical units", difficulty: 3, words: [
      ["REVOLT", "Uprising"],
      ["SWATTER", "Fly ___"],
      ["LAMPOON", "Satirize"],
      ["SCAMPER", "Scurry about playfully"],
    ]},
  ]},
  // 257
  { groups: [
    { category: "Monkeys", difficulty: 0, words: [
      ["HOWLER", "Big blunder"],
      ["CAPUCHIN", "Friar of a Franciscan order"],
      ["SPIDER", "Eight-legged web spinner"],
      ["MANDRILL", "Colorful-faced primate"],
    ]},
    { category: "Plant parts", difficulty: 1, words: [
      ["ROOT", "Cheer for a team"],
      ["BULB", "Light source in a lamp"],
      ["THORN", "Prickly annoyance"],
      ["TUBER", "A potato, botanically"],
    ]},
    { category: "Physical forces", difficulty: 2, words: [
      ["GRAVITY", "Seriousness"],
      ["FRICTION", "Conflict between people"],
      ["TENSION", "Nervous stress"],
      ["DRAG", "Pull along the ground"],
    ]},
    { category: "___ tooth", difficulty: 3, words: [
      ["SWEET", "Sugary"],
      ["WISDOM", "Sageness"],
      ["SABER", "Fencing sword"],
      ["BUCK", "Male deer"],
    ]},
  ]},
  // 258
  { groups: [
    { category: "Hot and sticky", difficulty: 0, words: [
      ["HUMID", "Like August air"],
      ["MUGGY", "Oppressively damp"],
      ["SULTRY", "Steamy and seductive"],
      ["STEAMY", "Like a bathroom after a shower"],
    ]},
    { category: "Heart anatomy", difficulty: 1, words: [
      ["VALVE", "Faucet part"],
      ["ATRIUM", "Open central hall"],
      ["VENTRICLE", "Lower pumping chamber"],
      ["SEPTUM", "Wall dividing the nostrils"],
    ]},
    { category: "Crustaceans", difficulty: 2, words: [
      ["SHRIMP", "Tiny person"],
      ["KRILL", "Whale food"],
      ["BARNACLE", "Clingy hull hitchhiker"],
      ["LOBSTER", "Turns red when boiled"],
    ]},
    { category: "Hidden ARK", difficulty: 3, words: [
      ["SHARK", "Loan ___, predatory lender"],
      ["PARKA", "Hooded winter coat"],
      ["BARKING", "Woofing"],
      ["REMARK", "Comment"],
    ]},
  ]},
  // 259
  { groups: [
    { category: "Found in a nest", difficulty: 0, words: [
      ["EGG", "Urge on, with on"],
      ["TWIG", "Small branch"],
      ["FEATHER", "Quill pen material"],
      ["CHICK", "Newly hatched bird"],
    ]},
    { category: "DNA words", difficulty: 1, words: [
      ["GENE", "Sounds like denim pants"],
      ["HELIX", "Spiral shape"],
      ["MUTATION", "Change in a hero's origin story"],
      ["CHROMOSOME", "X or Y, for one"],
    ]},
    { category: "Fish parts", difficulty: 2, words: [
      ["GILL", "Quarter of a pint"],
      ["FIN", "Shark's back sail"],
      ["SCALE", "Bathroom weighing device"],
      ["TAIL", "Follow secretly"],
    ]},
    { category: "Sun___", difficulty: 3, words: [
      ["DIAL", "Phone action"],
      ["FLOWER", "Bloom"],
      ["BURN", "Set ablaze"],
      ["SCREEN", "Monitor display"],
    ]},
  ]},
  // 260
  { groups: [
    { category: "Woodland animals", difficulty: 0, words: [
      ["BADGER", "Pester persistently"],
      ["SQUIRREL", "Hide away for later, with away"],
      ["CHIPMUNK", "Striped acorn hoarder"],
      ["HEDGEHOG", "Sonic, for one"],
    ]},
    { category: "Inside the ear", difficulty: 1, words: [
      ["ANVIL", "Blacksmith's block"],
      ["HAMMER", "Nail-driving tool"],
      ["STIRRUP", "Saddle's foot loop"],
      ["COCHLEA", "Snail-shaped hearing organ"],
    ]},
    { category: "Natural disasters", difficulty: 2, words: [
      ["FLOOD", "Overwhelm, as with mail"],
      ["DROUGHT", "Long dry spell"],
      ["AVALANCHE", "Snowslide"],
      ["LANDSLIDE", "Lopsided election win"],
    ]},
    { category: "___hog", difficulty: 3, words: [
      ["GROUND", "Earth or soil"],
      ["ROAD", "Highway"],
      ["WART", "Toad-associated bump"],
      ["WHOLE", "Entire"],
    ]},
  ]},
  // 261
  { groups: [
    { category: "Horse colors", difficulty: 0, words: [
      ["PALOMINO", "Golden horse with a white mane"],
      ["DAPPLE", "Mark with patches of light"],
      ["ROAN", "Speckled horse coat"],
      ["BAY", "Coastal inlet"],
    ]},
    { category: "Sleepy things", difficulty: 1, words: [
      ["SNORE", "Saw logs"],
      ["DREAM", "Hope for the future"],
      ["NAP", "Fuzzy fabric surface"],
      ["YAWN", "Open-mouthed sign of boredom"],
    ]},
    { category: "Bird sounds", difficulty: 2, words: [
      ["TWEET", "Post on X"],
      ["HOOT", "A very funny person"],
      ["CAW", "Crow's call"],
      ["TRILL", "Rolled R"],
    ]},
    { category: "Hidden Greek letters", difficulty: 3, words: [
      ["CHIPS", "Potato snack"],
      ["SPINE", "Backbone"],
      ["MUSIC", "Songs"],
      ["TAUNT", "Mock"],
    ]},
  ]},
  // 262
  { groups: [
    { category: "Feather parts", difficulty: 0, words: [
      ["QUILL", "Old writing pen"],
      ["SHAFT", "Elevator passage"],
      ["VANE", "Weather ___"],
      ["BARB", "Snide remark"],
    ]},
    { category: "Glands", difficulty: 1, words: [
      ["THYROID", "Butterfly-shaped neck gland"],
      ["ADRENAL", "Gland atop each kidney"],
      ["PITUITARY", "Master gland of the brain"],
      ["SWEAT", "Work hard, perspire"],
    ]},
    { category: "Electricity terms", difficulty: 2, words: [
      ["CURRENT", "Up-to-date"],
      ["CIRCUIT", "Racetrack loop"],
      ["CHARGE", "Fee"],
      ["AMP", "Guitar speaker"],
    ]},
    { category: "Hidden OX", difficulty: 3, words: [
      ["TOXIC", "Poisonous"],
      ["DETOX", "Juice cleanse"],
      ["PARADOX", "Self-contradiction"],
      ["OXYGEN", "Element number 8"],
    ]},
  ]},
  // 263
  { groups: [
    { category: "Wildflowers", difficulty: 0, words: [
      ["DAISY", "Donald Duck's girlfriend"],
      ["POPPY", "Red remembrance bloom"],
      ["CLOVER", "Lucky four-leaf plant"],
      ["BUTTERCUP", "Yellow meadow bloom"],
    ]},
    { category: "Injuries", difficulty: 1, words: [
      ["SPRAIN", "Twist an ankle"],
      ["BRUISE", "Black-and-blue mark"],
      ["BLISTER", "Friction bubble on the skin"],
      ["WHIPLASH", "Fender-bender neck injury"],
    ]},
    { category: "Astronomy words", difficulty: 2, words: [
      ["ORBIT", "Path around a planet"],
      ["ECLIPSE", "Overshadow"],
      ["GALAXY", "Samsung phone line"],
      ["NEBULA", "Gas cloud in space"],
    ]},
    { category: "___drop", difficulty: 3, words: [
      ["DEW", "Morning moisture"],
      ["TEAR", "Rip"],
      ["BACK", "Rear"],
      ["GUM", "Chewy candy"],
    ]},
  ]},
  // 264
  { groups: [
    { category: "Horses", difficulty: 0, words: [
      ["MARE", "Female horse"],
      ["FOAL", "Newborn horse"],
      ["COLT", "Revolver maker"],
      ["FILLY", "Young female horse"],
    ]},
    { category: "Eyewear", difficulty: 1, words: [
      ["BIFOCALS", "Two-part lenses"],
      ["CONTACTS", "Networking connections"],
      ["MONOCLE", "Mr. Peanut's single lens"],
      ["GOGGLES", "Swimmer's eye protection"],
    ]},
    { category: "Ice formations", difficulty: 2, words: [
      ["GLACIER", "Slow-moving river of ice"],
      ["ICEBERG", "Titanic's nemesis"],
      ["FLOE", "Sounds like a smooth stream"],
      ["ICICLE", "Hangs from winter eaves"],
    ]},
    { category: "___box", difficulty: 3, words: [
      ["JUKE", "Fake out a defender"],
      ["LUNCH", "Midday meal"],
      ["MATCH", "Tennis contest"],
      ["CHATTER", "Idle talk"],
    ]},
  ]},
  // 265
  { groups: [
    { category: "Rainfall", difficulty: 0, words: [
      ["DRIZZLE", "Pour lightly over, as sauce"],
      ["DOWNPOUR", "Heavy, sudden rain"],
      ["SHOWER", "Bathroom wash"],
      ["DELUGE", "Flood of complaints"],
    ]},
    { category: "Childhood illnesses", difficulty: 1, words: [
      ["MEASLES", "Spotty virus prevented by MMR"],
      ["MUMPS", "Swollen-cheek virus"],
      ["CROUP", "Barking-cough illness"],
      ["COLIC", "Baby's fussy stomach pain"],
    ]},
    { category: "Tide pool finds", difficulty: 2, words: [
      ["URCHIN", "Scruffy street kid"],
      ["ANEMONE", "Clownfish's stinging host"],
      ["LIMPET", "Clinging cone-shelled snail"],
      ["KELP", "Giant seaweed"],
    ]},
    { category: "Sea___", difficulty: 3, words: [
      ["FOOD", "Nourishment"],
      ["SICK", "Ill"],
      ["SIDE", "Edge"],
      ["SON", "Male child"],
    ]},
  ]},
  // 266
  { groups: [
    { category: "Antlered animals", difficulty: 0, words: [
      ["MOOSE", "Bullwinkle, for one"],
      ["ELK", "Fraternal lodge member"],
      ["CARIBOU", "Migrating tundra deer"],
      ["REINDEER", "Rudolph, for one"],
    ]},
    { category: "Chemistry basics", difficulty: 1, words: [
      ["ATOM", "Tiny sliver"],
      ["MOLECULE", "Bonded group of atoms"],
      ["COMPOUND", "Fenced residential complex"],
      ["ISOTOPE", "Variant with extra neutrons"],
    ]},
    { category: "Health workers", difficulty: 2, words: [
      ["MEDIC", "Army first-aider"],
      ["SURGEON", "Operating-room doctor"],
      ["DENTIST", "Cavity filler"],
      ["MIDWIFE", "Birthing helper"],
    ]},
    { category: "Things you can pitch", difficulty: 3, words: [
      ["TENT", "Camping shelter"],
      ["IDEA", "Bright notion"],
      ["HAY", "Bale of dried grass"],
      ["STRIKE", "Labor walkout"],
    ]},
  ]},
  // 267
  { groups: [
    { category: "Forest greenery", difficulty: 0, words: [
      ["MOSS", "A rolling stone gathers none"],
      ["FERN", "Feathery-fronded plant"],
      ["LICHEN", "Crusty growth on rocks"],
      ["IVY", "Poison ___"],
    ]},
    { category: "Sugars", difficulty: 1, words: [
      ["GLUCOSE", "Blood sugar"],
      ["FRUCTOSE", "Fruit sugar"],
      ["LACTOSE", "Milk sugar"],
      ["SUCROSE", "Table sugar"],
    ]},
    { category: "Desert landforms", difficulty: 2, words: [
      ["MESA", "Arizona city near Phoenix"],
      ["BUTTE", "Montana mining city"],
      ["CANYON", "Deep river-carved gorge"],
      ["GORGE", "Eat greedily"],
    ]},
    { category: "Butter___", difficulty: 3, words: [
      ["MILK", "Dairy drink"],
      ["SCOTCH", "Whisky from Scotland"],
      ["CUP", "Mug"],
      ["FLY", "Zipper on trousers"],
    ]},
  ]},
  // 268
  { groups: [
    { category: "Songbirds", difficulty: 0, words: [
      ["ROBIN", "Batman's sidekick"],
      ["CARDINAL", "Red-robed church official"],
      ["ORIOLE", "Baltimore baseball player"],
      ["FINCH", "Atticus of To Kill a Mockingbird"],
    ]},
    { category: "Bodily noises", difficulty: 1, words: [
      ["HICCUP", "Small setback"],
      ["BURP", "Pat a baby's back for this"],
      ["GROWL", "Hungry stomach's noise"],
      ["WHEEZE", "Asthmatic breath sound"],
    ]},
    { category: "Microscope parts", difficulty: 2, words: [
      ["STAGE", "Theater platform"],
      ["OBJECTIVE", "Goal"],
      ["EYEPIECE", "Part you look into"],
      ["BASE", "Home plate"],
    ]},
    { category: "Body parts used as verbs", difficulty: 3, words: [
      ["SHOULDER", "Bear, as a burden"],
      ["HAND", "Pass over"],
      ["NOSE", "Pry, with around"],
      ["FACE", "Confront"],
    ]},
  ]},
  // 269
  { groups: [
    { category: "Stone fruits", difficulty: 0, words: [
      ["CHERRY", "Sundae topper"],
      ["PLUM", "Choice, as a job"],
      ["APRICOT", "Small orange fruit, often dried"],
      ["NECTARINE", "Smooth-skinned peach cousin"],
    ]},
    { category: "Gases", difficulty: 1, words: [
      ["NITROGEN", "Most of the air we breathe"],
      ["OZONE", "Layer depleted by CFCs"],
      ["METHANE", "Cow-burp gas"],
      ["HYDROGEN", "Element number 1"],
    ]},
    { category: "Spiders", difficulty: 2, words: [
      ["WOLF", "Gobble food quickly"],
      ["WIDOW", "Woman whose husband has died"],
      ["RECLUSE", "Hermit"],
      ["TARANTULA", "Big hairy arachnid"],
    ]},
    { category: "Things you crack", difficulty: 3, words: [
      ["CODE", "Secret cipher"],
      ["JOKE", "Funny one-liner"],
      ["SAFE", "Out of danger"],
      ["KNUCKLE", "Finger joint"],
    ]},
  ]},
  // 270
  { groups: [
    { category: "Cat coats", difficulty: 0, words: [
      ["TABBY", "Striped cat"],
      ["CALICO", "Patchwork cotton fabric"],
      ["TUXEDO", "Formal suit"],
      ["TORTIE", "Mottled orange-and-black cat, informally"],
    ]},
    { category: "Allergens", difficulty: 1, words: [
      ["POLLEN", "Bee-carried powder"],
      ["DANDER", "Get your ___ up, to anger"],
      ["MOLD", "Shape into a form"],
      ["PEANUT", "Ballpark snack"],
    ]},
    { category: "Animal homes", difficulty: 2, words: [
      ["LODGE", "Ski chalet"],
      ["BURROW", "Dig in"],
      ["LAIR", "Villain's hideout"],
      ["WARREN", "Maze of cramped rooms"],
    ]},
    { category: "Ends with a farm animal", difficulty: 3, words: [
      ["SCAPEGOAT", "One who takes the blame"],
      ["MONGOOSE", "Snake-fighting mammal"],
      ["SAWHORSE", "Carpenter's trestle"],
      ["MOSCOW", "Russian capital"],
    ]},
  ]},
  // 271
  { groups: [
    { category: "European capitals", difficulty: 0, words: [
      ["PARIS", "Trojan prince who judged a beauty contest"],
      ["ROME", "City built on seven hills"],
      ["OSLO", "City where the Peace Prize is awarded"],
      ["VIENNA", "Austrian city of waltzes and coffeehouses"],
    ]},
    { category: "Trojan War figures", difficulty: 1, words: [
      ["HECTOR", "Badger or bully"],
      ["AJAX", "Scouring powder brand"],
      ["HELEN", "Face that launched a thousand ships"],
      ["PRIAM", "Aged king of Troy"],
    ]},
    { category: "Named after people", difficulty: 2, words: [
      ["LEOTARD", "Dancer's stretchy one-piece"],
      ["BOYCOTT", "Refuse to buy in protest"],
      ["SANDWICH", "Two slices with a filling"],
      ["MAGNOLIA", "Southern flowering tree"],
    ]},
    { category: "___horse", difficulty: 3, words: [
      ["DARK", "Lacking light"],
      ["HOBBY", "Pastime"],
      ["ROCKING", "Swaying to and fro"],
      ["SAW", "Toothed cutting tool"],
    ]},
  ]},
  // 272
  { groups: [
    { category: "Inventors", difficulty: 0, words: [
      ["EDISON", "The Wizard of Menlo Park"],
      ["NOBEL", "Dynamite maker who endowed prizes"],
      ["DIESEL", "Fuel for big rigs"],
      ["GUTENBERG", "Movable-type printing pioneer"],
    ]},
    { category: "Sites of ancient wonders", difficulty: 1, words: [
      ["GIZA", "Plateau of the Great Pyramid"],
      ["BABYLON", "City of hanging gardens"],
      ["OLYMPIA", "Washington's capital city"],
      ["EPHESUS", "City of the Temple of Artemis"],
    ]},
    { category: "Ancient measures", difficulty: 2, words: [
      ["CUBIT", "Forearm-length unit for Noah's ark"],
      ["TALENT", "Natural skill"],
      ["LEAGUE", "Group of sports teams"],
      ["SHEKEL", "Israeli currency"],
    ]},
    { category: "Hidden currencies", difficulty: 3, words: [
      ["RANDOM", "Haphazard"],
      ["EUROPE", "Continent of Spain and Italy"],
      ["MARKET", "Farmers' ___"],
      ["REALM", "Kingdom"],
    ]},
  ]},
  // 273
  { groups: [
    { category: "US states", difficulty: 0, words: [
      ["TEXAS", "The Lone Star State"],
      ["OHIO", "The Buckeye State"],
      ["MAINE", "Lobster-loving New England state"],
      ["UTAH", "The Beehive State"],
    ]},
    { category: "Norse gods", difficulty: 1, words: [
      ["THOR", "Marvel hero with a hammer"],
      ["ODIN", "One-eyed All-Father"],
      ["LOKI", "Trickster of Asgard"],
      ["FREYA", "Goddess of love who rides a cat chariot"],
    ]},
    { category: "Texas cities", difficulty: 2, words: [
      ["HOUSTON", "NASA mission control city"],
      ["WACO", "Home of Baylor University"],
      ["LAREDO", "Border city on the Rio Grande"],
      ["AMARILLO", "Yellow, in Spanish"],
    ]},
    { category: "___hammer", difficulty: 3, words: [
      ["SLEDGE", "Snow sled"],
      ["CLAW", "Cat's nail"],
      ["WAR", "Armed conflict"],
      ["TACK", "Small flat-headed nail"],
    ]},
  ]},
  // 274
  { groups: [
    { category: "Parts of speech", difficulty: 0, words: [
      ["NOUN", "Person, place, or thing word"],
      ["VERB", "Action word"],
      ["ADVERB", "Word like quickly or softly"],
      ["PRONOUN", "He, she, or it"],
    ]},
    { category: "Asian capitals", difficulty: 1, words: [
      ["TOKYO", "Japan's capital"],
      ["SEOUL", "Sounds like the spirit within you"],
      ["HANOI", "Vietnam's capital"],
      ["MANILA", "Tan paper used for envelopes"],
    ]},
    { category: "Fictional detectives", difficulty: 2, words: [
      ["HOLMES", "Baker Street sleuth"],
      ["POIROT", "Belgian sleuth with a waxed moustache"],
      ["MARPLE", "Agatha Christie's village spinster"],
      ["MORSE", "Code of dots and dashes"],
    ]},
    { category: "___word", difficulty: 3, words: [
      ["PASS", "Decline a turn"],
      ["CROSS", "Angry"],
      ["BUZZ", "Bee's hum"],
      ["CATCH", "Grab"],
    ]},
  ]},
  // 275
  { groups: [
    { category: "Japanese cities", difficulty: 0, words: [
      ["KYOTO", "Old imperial capital of temples"],
      ["OSAKA", "Port city famed for street food"],
      ["KOBE", "Prized marbled beef"],
      ["SAPPORO", "Japanese beer brand"],
    ]},
    { category: "Japanese islands", difficulty: 1, words: [
      ["HONSHU", "Largest island of Japan"],
      ["HOKKAIDO", "Northern isle of snow festivals"],
      ["KYUSHU", "Southern main isle of Nagasaki"],
      ["OKINAWA", "Karate's island birthplace"],
    ]},
    { category: "Mountains", difficulty: 2, words: [
      ["EVEREST", "Highest peak on Earth"],
      ["DENALI", "Tallest peak in North America"],
      ["FUJI", "Crisp, sweet apple variety"],
      ["OLYMPUS", "Camera brand, or home of the gods"],
    ]},
    { category: "Countries missing their last letter", difficulty: 3, words: [
      ["CHIN", "Part of the face below the mouth"],
      ["CUB", "Young bear or lion"],
      ["MALT", "Grain used in brewing"],
      ["PER", "For each"],
    ]},
  ]},
  // 276
  { groups: [
    { category: "Mexican cities", difficulty: 0, words: [
      ["CANCUN", "Spring-break resort on the Yucatan"],
      ["TIJUANA", "Border city south of San Diego"],
      ["ACAPULCO", "Pacific resort famed for cliff divers"],
      ["PUEBLA", "City of mole sauce"],
    ]},
    { category: "Ancient civilizations", difficulty: 1, words: [
      ["AZTEC", "Empire of Tenochtitlan"],
      ["MAYA", "Poet Angelou's first name"],
      ["INCA", "Andean empire of Machu Picchu"],
      ["OLMEC", "Mesoamerican carvers of colossal heads"],
    ]},
    { category: "Famous explorers", difficulty: 2, words: [
      ["COOK", "Prepare a meal"],
      ["DRAKE", "Male duck"],
      ["POLO", "Sport played on horseback"],
      ["COLUMBUS", "Ohio's capital city"],
    ]},
    { category: "___ Day", difficulty: 3, words: [
      ["LABOR", "Hard work"],
      ["BOXING", "Ring sport"],
      ["ARBOR", "Shady garden bower"],
      ["PAY", "Wages"],
    ]},
  ]},
  // 277
  { groups: [
    { category: "Zodiac signs", difficulty: 0, words: [
      ["LEO", "Tolstoy's first name"],
      ["GEMINI", "NASA's two-man spacecraft program"],
      ["CANCER", "Tropic north of the equator"],
      ["PISCES", "Sign of the two fish"],
    ]},
    { category: "Dickens characters", difficulty: 1, words: [
      ["PIP", "Seed in an apple"],
      ["OLIVER", "Orphan who asked for more"],
      ["FAGIN", "Leader of a boy pickpocket gang"],
      ["SCROOGE", "Stingy, miserly person"],
    ]},
    { category: "Ancient Greek city-states", difficulty: 2, words: [
      ["SPARTA", "Kingdom of Leonidas"],
      ["ATHENS", "Georgia college town"],
      ["THEBES", "City ruled by Oedipus"],
      ["CORINTH", "City Saint Paul wrote letters to"],
    ]},
    { category: "Add an S at the front", difficulty: 3, words: [
      ["HOVEL", "Shabby little dwelling"],
      ["MILE", "5,280 feet"],
      ["TABLE", "Dining furniture"],
      ["WORD", "Unit of language"],
    ]},
  ]},
  // 278
  { groups: [
    { category: "Parts of a book", difficulty: 0, words: [
      ["SPINE", "Backbone"],
      ["COVER", "Song recorded by another artist"],
      ["INDEX", "Pointing finger"],
      ["CHAPTER", "Local branch of a club"],
    ]},
    { category: "Famous wizards", difficulty: 1, words: [
      ["MERLIN", "Small falcon"],
      ["GANDALF", "Grey wanderer of Middle-earth"],
      ["SARUMAN", "White wizard who betrays the Fellowship"],
      ["PROSPERO", "Magician of The Tempest"],
    ]},
    { category: "Literary awards", difficulty: 2, words: [
      ["PULITZER", "Joseph, the newspaper magnate"],
      ["BOOKER", "One who makes reservations"],
      ["HUGO", "Victor, author of Les Miserables"],
      ["EDGAR", "Poe's first name"],
    ]},
    { category: "Hidden ORB", difficulty: 3, words: [
      ["ORBIT", "Circle a planet"],
      ["SORBET", "Fruity frozen dessert"],
      ["ABSORB", "Soak up"],
      ["MORBID", "Gruesome"],
    ]},
  ]},
  // 279
  { groups: [
    { category: "African countries", difficulty: 0, words: [
      ["KENYA", "Nation whose capital is Nairobi"],
      ["EGYPT", "Land of the pyramids"],
      ["GHANA", "West African nation, capital Accra"],
      ["CHAD", "Bit of punched-out ballot paper"],
    ]},
    { category: "African rivers", difficulty: 1, words: [
      ["ZAMBEZI", "River of Victoria Falls"],
      ["LIMPOPO", "Kipling's great grey-green, greasy river"],
      ["CONGO", "River through Kinshasa"],
      ["VOLTA", "Inventor of the battery"],
    ]},
    { category: "Languages", difficulty: 2, words: [
      ["DUTCH", "Going ___ means splitting the bill"],
      ["GREEK", "Fraternity or sorority member"],
      ["HINDI", "Bollywood's main tongue"],
      ["SWAHILI", "East Africa's lingua franca"],
    ]},
    { category: "Starts with an alcoholic drink", difficulty: 3, words: [
      ["RUMBLE", "Low thunderous sound"],
      ["GINGER", "Spicy root"],
      ["PORTRAIT", "Painted likeness"],
      ["MEADOW", "Grassy field"],
    ]},
  ]},
  // 280
  { groups: [
    { category: "Australian cities", difficulty: 0, words: [
      ["SYDNEY", "Opera House city"],
      ["PERTH", "Scottish town on the Tay"],
      ["DARWIN", "Theorist of natural selection"],
      ["HOBART", "Tasmania's capital"],
    ]},
    { category: "Aussie slang", difficulty: 1, words: [
      ["BARBIE", "Mattel's fashion doll"],
      ["BILLABONG", "Surfwear brand"],
      ["SHEILA", "Common girl's name"],
      ["BLOKE", "Ordinary guy"],
    ]},
    { category: "Medieval life", difficulty: 2, words: [
      ["KNIGHT", "Chess piece shaped like a horse"],
      ["MOAT", "Water-filled ditch around a fortress"],
      ["JOUST", "Lance combat on horseback"],
      ["SQUIRE", "Country gentleman"],
    ]},
    { category: "Contains an insect", difficulty: 3, words: [
      ["PANTRY", "Food cupboard"],
      ["MOTHER", "Mom"],
      ["BEEFY", "Muscular and burly"],
      ["BUGLE", "Brass horn that plays reveille"],
    ]},
  ]},
  // 281
  { groups: [
    { category: "Ancient Egypt", difficulty: 0, words: [
      ["MUMMY", "Mother, in Britain"],
      ["PYRAMID", "Scheme with a recruiting hierarchy"],
      ["SPHINX", "Riddling monster with a lion's body"],
      ["SCARAB", "Sacred dung beetle"],
    ]},
    { category: "Portuguese cities", difficulty: 1, words: [
      ["LISBON", "Capital on the Tagus"],
      ["PORTO", "City that names a fortified wine"],
      ["FARO", "Algarve's airport city"],
      ["BRAGA", "Ancient northern city in the Minho"],
    ]},
    { category: "Greek heroes", difficulty: 2, words: [
      ["JASON", "Masked slasher of Friday the 13th"],
      ["ACHILLES", "Tendon at the back of the heel"],
      ["PERSEUS", "Medusa's slayer"],
      ["THESEUS", "Slayer of the Minotaur"],
    ]},
    { category: "___ code", difficulty: 3, words: [
      ["ZIP", "Close up a jacket"],
      ["DRESS", "One-piece garment"],
      ["AREA", "Length times width"],
      ["BAR", "Pub counter"],
    ]},
  ]},
  // 282
  { groups: [
    { category: "Caribbean islands", difficulty: 0, words: [
      ["JAMAICA", "Reggae's homeland"],
      ["ARUBA", "Dutch isle off Venezuela"],
      ["BARBADOS", "Rihanna's home island"],
      ["CURACAO", "Blue orange liqueur"],
    ]},
    { category: "Famous pirates", difficulty: 1, words: [
      ["HOOK", "Barbed fishing tool"],
      ["KIDD", "Captain William, hanged in 1701"],
      ["MORGAN", "Captain on a spiced rum label"],
      ["BLACKBEARD", "Edward Teach's fearsome nickname"],
    ]},
    { category: "Biblical figures", difficulty: 2, words: [
      ["NOAH", "Ark builder"],
      ["MOSES", "Parter of the Red Sea"],
      ["DAVID", "Michelangelo's famous marble statue"],
      ["JONAH", "Man swallowed by a great fish"],
    ]},
    { category: "Contains ARR", difficulty: 3, words: [
      ["BARREL", "Wine cask"],
      ["MARROW", "Bone's soft center"],
      ["SPARROW", "Small brown songbird"],
      ["CARRIAGE", "Horse-drawn coach"],
    ]},
  ]},
  // 283
  { groups: [
    { category: "Spanish numbers", difficulty: 0, words: [
      ["UNO", "Card game with Draw Four cards"],
      ["DOS", "Old Microsoft operating system"],
      ["TRES", "Very, in French"],
      ["CINCO", "___ de Mayo"],
    ]},
    { category: "Borrowed from French", difficulty: 1, words: [
      ["GENRE", "Category of art or music"],
      ["DEBUT", "First public appearance"],
      ["BOUQUET", "Bunch of flowers"],
      ["BALLET", "Dance performed on pointe"],
    ]},
    { category: "German cities", difficulty: 2, words: [
      ["COLOGNE", "Scented splash, eau de ___"],
      ["HAMBURG", "City that lent its name to a patty"],
      ["BONN", "Former West German capital"],
      ["DRESDEN", "Baroque city on the Elbe"],
    ]},
    { category: "Hidden German numbers", difficulty: 3, words: [
      ["YACHT", "Luxury sailing boat"],
      ["PROTEIN", "Nutrient in meat and beans"],
      ["SHELF", "Bookcase ledge"],
      ["DREIDEL", "Hanukkah spinning top"],
    ]},
  ]},
  // 284
  { groups: [
    { category: "South American capitals", difficulty: 0, words: [
      ["LIMA", "Flat, pale green bean"],
      ["QUITO", "Ecuador's capital"],
      ["BOGOTA", "Colombia's capital"],
      ["SANTIAGO", "Chile's capital"],
    ]},
    { category: "Shakespeare heroines", difficulty: 1, words: [
      ["VIOLA", "Instrument a bit larger than a violin"],
      ["PORTIA", "Ellen DeGeneres's wife"],
      ["OPHELIA", "Hamlet's drowned love"],
      ["MIRANDA", "Rights read during an arrest"],
    ]},
    { category: "Ancient Romans", difficulty: 2, words: [
      ["CAESAR", "Salad with croutons and parmesan"],
      ["NERO", "Emperor said to fiddle as Rome burned"],
      ["BRUTUS", "'Et tu' addressee"],
      ["CICERO", "Great orator of the Senate"],
    ]},
    { category: "Another word backward", difficulty: 3, words: [
      ["STRAW", "Drinking tube"],
      ["DRAWER", "Dresser compartment"],
      ["REGAL", "Kingly"],
      ["DIAPER", "Baby's nappy"],
    ]},
  ]},
  // 285
  { groups: [
    { category: "Russian cities", difficulty: 0, words: [
      ["MOSCOW", "Kremlin city"],
      ["SOCHI", "2014 Winter Olympics host"],
      ["KAZAN", "Tatar capital on the Volga"],
      ["VOLGOGRAD", "City once called Stalingrad"],
    ]},
    { category: "Russian authors", difficulty: 1, words: [
      ["TOLSTOY", "War and Peace author"],
      ["CHEKHOV", "The Cherry Orchard playwright"],
      ["PUSHKIN", "Poet killed in a duel"],
      ["GOGOL", "Author of The Nose"],
    ]},
    { category: "Scottish things", difficulty: 2, words: [
      ["HAGGIS", "Savory pudding in a sheep's stomach"],
      ["BAGPIPE", "Droning instrument with a bag"],
      ["KILT", "Pleated knee-length garment"],
      ["TARTAN", "Plaid pattern of a clan"],
    ]},
    { category: "Hidden rivers", difficulty: 3, words: [
      ["INDUSTRY", "Manufacturing sector"],
      ["MURAL", "Wall painting"],
      ["SENILE", "Doddering with age"],
      ["MODERN", "Contemporary"],
    ]},
  ]},
  // 286
  { groups: [
    { category: "Canadian provinces", difficulty: 0, words: [
      ["ALBERTA", "Province of Banff and Lake Louise"],
      ["ONTARIO", "Easternmost Great Lake"],
      ["QUEBEC", "Letter Q in the NATO alphabet"],
      ["MANITOBA", "Province whose capital is Winnipeg"],
    ]},
    { category: "Famous queens", difficulty: 1, words: [
      ["VICTORIA", "Capital of British Columbia"],
      ["CLEOPATRA", "Last pharaoh of Egypt"],
      ["ISABELLA", "Spanish monarch who funded Columbus"],
      ["ANNE", "Orphan of Green Gables"],
    ]},
    { category: "Canadian cities", difficulty: 2, words: [
      ["OTTAWA", "Canada's capital"],
      ["HALIFAX", "Nova Scotia port"],
      ["REGINA", "Queen, in Latin"],
      ["MONTREAL", "City of the Canadiens"],
    ]},
    { category: "Ends with a body part", difficulty: 3, words: [
      ["ALARM", "Wake-up bell"],
      ["TULIP", "Dutch spring flower"],
      ["SPEAR", "Hunter's throwing weapon"],
      ["WORSHIP", "Revere and adore"],
    ]},
  ]},
  // 287
  { groups: [
    { category: "Spanish cities", difficulty: 0, words: [
      ["MADRID", "Spain's capital"],
      ["SEVILLE", "Bitter orange used for marmalade"],
      ["VALENCIA", "Sweet orange variety"],
      ["BILBAO", "Basque city with a titanium Guggenheim"],
    ]},
    { category: "Long stretches of time", difficulty: 1, words: [
      ["ERA", "Pitcher's earned-run stat"],
      ["EPOCH", "Notable period in history"],
      ["EON", "Billion years, to geologists"],
      ["CENTURY", "Hundred runs in cricket"],
    ]},
    { category: "Jane Austen heroines", difficulty: 2, words: [
      ["EMMA", "Stone, the Oscar-winning actress"],
      ["ELINOR", "Sensible elder Dashwood sister"],
      ["FANNY", "Price of Mansfield Park"],
      ["MARIANNE", "Emblem of the French Republic"],
    ]},
    { category: "___span", difficulty: 3, words: [
      ["WING", "Bird's flapper"],
      ["LIFE", "Existence"],
      ["ATTENTION", "Notice"],
      ["HAND", "Five-fingered appendage"],
    ]},
  ]},
  // 288
  { groups: [
    { category: "Egyptian cities", difficulty: 0, words: [
      ["LUXOR", "Pyramid-shaped Las Vegas hotel"],
      ["ASWAN", "City of the High Dam"],
      ["ALEXANDRIA", "Virginia city across from D.C."],
      ["SUEZ", "Canal city on the Red Sea"],
    ]},
    { category: "Arthurian legend", difficulty: 1, words: [
      ["CAMELOT", "Kennedy White House nickname"],
      ["GRAIL", "Holy object of a quest"],
      ["AVALON", "Mystic isle of apples"],
      ["EXCALIBUR", "Sword drawn from the stone"],
    ]},
    { category: "Egyptian gods", difficulty: 2, words: [
      ["THOTH", "Ibis-headed god of writing"],
      ["OSIRIS", "Green-skinned lord of the dead"],
      ["ANUBIS", "Jackal-headed embalmer god"],
      ["HORUS", "Falcon-headed sky god"],
    ]},
    { category: "They have a bridge", difficulty: 3, words: [
      ["NOSE", "Scent detector"],
      ["GUITAR", "Six-stringed instrument"],
      ["VIOLIN", "Fiddle"],
      ["SHIP", "Ocean liner"],
    ]},
  ]},
  // 289
  { groups: [
    { category: "Asian countries", difficulty: 0, words: [
      ["CHINA", "Fine porcelain dishes"],
      ["NEPAL", "Himalayan nation of Sherpas"],
      ["INDIA", "Letter I in the NATO alphabet"],
      ["LAOS", "Landlocked nation, capital Vientiane"],
    ]},
    { category: "Asian rivers", difficulty: 1, words: [
      ["MEKONG", "River of Vietnam's delta"],
      ["YANGTZE", "China's longest river"],
      ["GANGES", "Holy river of Varanasi"],
      ["YELLOW", "Color of a banana"],
    ]},
    { category: "Tolkien races", difficulty: 2, words: [
      ["ELF", "Will Ferrell Christmas movie"],
      ["ENT", "Ear, nose, and throat doctor"],
      ["ORC", "Brutish goblin soldier"],
      ["HOBBIT", "Small, hairy-footed halfling"],
    ]},
    { category: "Hidden countries", difficulty: 3, words: [
      ["PERUSE", "Read carefully"],
      ["WOMAN", "Adult female"],
      ["PIRANHA", "Sharp-toothed river fish"],
      ["MALIGN", "Speak ill of"],
    ]},
  ]},
  // 290
  { groups: [
    { category: "US presidents", difficulty: 0, words: [
      ["GRANT", "Scholarship or award"],
      ["BUSH", "Shrub"],
      ["CARTER", "Cart driver"],
      ["LINCOLN", "Ford's luxury car division"],
    ]},
    { category: "US state capitals", difficulty: 1, words: [
      ["BOISE", "Idaho's capital"],
      ["DENVER", "The Mile High City"],
      ["AUSTIN", "Powers, the groovy spy"],
      ["DOVER", "English port of white cliffs"],
    ]},
    { category: "Stephen King novels", difficulty: 2, words: [
      ["CARRIE", "Fisher, who played Princess Leia"],
      ["MISERY", "Great unhappiness"],
      ["CUJO", "Rabid Saint Bernard"],
      ["CHRISTINE", "Possessed Plymouth Fury"],
    ]},
    { category: "Hidden presidents", difficulty: 3, words: [
      ["POLKA", "Dotted pattern"],
      ["AFFORD", "Be able to pay for"],
      ["AMBUSH", "Surprise attack"],
      ["VAGRANT", "Homeless wanderer"],
    ]},
  ]},
  // 291
  { groups: [
    { category: "French painters", difficulty: 0, words: [
      ["RENOIR", "Painter of a boating-party luncheon"],
      ["CEZANNE", "Painter of apples and card players"],
      ["SEURAT", "Dotty pointillist"],
      ["MANET", "Painter of Luncheon on the Grass"],
    ]},
    { category: "Places in Paris", difficulty: 1, words: [
      ["LOUVRE", "Home of the Mona Lisa"],
      ["BASTILLE", "Prison stormed in 1789"],
      ["SORBONNE", "Historic university on the Left Bank"],
      ["MONTMARTRE", "Hilltop artists' quarter"],
    ]},
    { category: "Art movements", difficulty: 2, words: [
      ["DADA", "Father, casually"],
      ["BAROQUE", "Ornate style of Bach's era"],
      ["CUBISM", "Picasso's fractured style"],
      ["ROCOCO", "Frilly, ornate 1700s style"],
    ]},
    { category: "Sound like countries", difficulty: 3, words: [
      ["CHILLY", "A bit cold"],
      ["GREASE", "Cooking fat"],
      ["WHALES", "Ocean giants"],
      ["CUTTER", "Sharp tool, or small boat"],
    ]},
  ]},
  // 292
  { groups: [
    { category: "Historic rulers' titles", difficulty: 0, words: [
      ["TSAR", "Ivan the Terrible, for one"],
      ["SULTAN", "Ottoman ruler"],
      ["KAISER", "Crusty round sandwich roll"],
      ["SHAH", "Persian monarch"],
    ]},
    { category: "Arab capitals", difficulty: 1, words: [
      ["CAIRO", "Egypt's capital"],
      ["AMMAN", "Jordan's capital"],
      ["DOHA", "Qatar's capital"],
      ["BEIRUT", "Lebanon's capital"],
    ]},
    { category: "Arabian Nights characters", difficulty: 2, words: [
      ["ALADDIN", "Lamp-rubbing street boy"],
      ["SINBAD", "Sailor of seven voyages"],
      ["GENIE", "Wish granter from a lamp"],
      ["SCHEHERAZADE", "Storyteller who kept her king listening"],
    ]},
    { category: "Open ___", difficulty: 3, words: [
      ["SESAME", "Seed on a burger bun"],
      ["SEASON", "Winter or spring"],
      ["HOUSE", "Home"],
      ["SECRET", "Something kept hidden"],
    ]},
  ]},
  // 293
  { groups: [
    { category: "Nordic countries", difficulty: 0, words: [
      ["NORWAY", "Land of fjords"],
      ["SWEDEN", "IKEA's homeland"],
      ["DENMARK", "Hamlet's homeland"],
      ["ICELAND", "Island of fire and ice"],
    ]},
    { category: "Moby-Dick characters", difficulty: 1, words: [
      ["AHAB", "Peg-legged captain"],
      ["ISHMAEL", "'Call me ___'"],
      ["STARBUCK", "First mate whose name went to a coffee chain"],
      ["QUEEQUEG", "Tattooed harpooner"],
    ]},
    { category: "Viking heritage", difficulty: 2, words: [
      ["RUNE", "Ancient letter carved in stone"],
      ["SAGA", "Long, dramatic story"],
      ["FJORD", "Narrow sea inlet between cliffs"],
      ["LONGSHIP", "Oared raiding vessel"],
    ]},
    { category: "Hidden OAR", difficulty: 3, words: [
      ["SOAR", "Fly high"],
      ["COARSE", "Rough-textured"],
      ["HOARD", "Stockpile"],
      ["UPROAR", "Commotion"],
    ]},
  ]},
  // 294
  { groups: [
    { category: "French cities", difficulty: 0, words: [
      ["NICE", "Pleasant"],
      ["LYON", "Where the Rhone meets the Saone"],
      ["LILLE", "Northern city near Belgium"],
      ["BORDEAUX", "Red wine region"],
    ]},
    { category: "French regions", difficulty: 1, words: [
      ["NORMANDY", "Region of the D-Day beaches"],
      ["PROVENCE", "Region of lavender fields"],
      ["CHAMPAGNE", "Celebratory bubbly"],
      ["ALSACE", "Region bordering Germany on the Rhine"],
    ]},
    { category: "Military commanders", difficulty: 2, words: [
      ["PATTON", "WWII general played by George C. Scott"],
      ["LEE", "Jeans brand"],
      ["CUSTER", "General of the Last Stand"],
      ["HANNIBAL", "Crossed the Alps with elephants"],
    ]},
    { category: "Hidden trees", difficulty: 3, words: [
      ["HELMET", "Protective headgear"],
      ["CLOAK", "Hooded cape"],
      ["WASHER", "Laundry machine"],
      ["FIRST", "Gold-medal position"],
    ]},
  ]},
  // 295
  { groups: [
    { category: "Months", difficulty: 0, words: [
      ["MARCH", "Walk in step"],
      ["AUGUST", "Majestic and venerable"],
      ["MAY", "Might, perhaps"],
      ["JUNE", "Carter Cash, the country singer"],
    ]},
    { category: "Famous battles", difficulty: 1, words: [
      ["WATERLOO", "ABBA's Eurovision winner"],
      ["HASTINGS", "1066 clash in England"],
      ["SOMME", "WWI river battle of 1916"],
      ["ALAMO", "Car rental company"],
    ]},
    { category: "Ancient Rome", difficulty: 2, words: [
      ["TOGA", "Bedsheet costume at a frat party"],
      ["FORUM", "Online discussion board"],
      ["LEGION", "Vast multitude"],
      ["AQUEDUCT", "Arched water channel"],
    ]},
    { category: "Starts with a month abbreviation", difficulty: 3, words: [
      ["OCTOPUS", "Eight-armed sea creature"],
      ["JANITOR", "School custodian"],
      ["APRICOT", "Orange stone fruit"],
      ["NOVICE", "Beginner"],
    ]},
  ]},
  // 296
  { groups: [
    { category: "Chemical elements", difficulty: 0, words: [
      ["NEON", "Bright, vivid, like a highlighter"],
      ["HELIUM", "Gas that makes balloons float"],
      ["RADON", "Radioactive basement gas"],
      ["CARBON", "___ copy"],
    ]},
    { category: "Romeo and Juliet characters", difficulty: 1, words: [
      ["NURSE", "Hospital caregiver"],
      ["TYBALT", "Juliet's hot-headed cousin"],
      ["MERCUTIO", "Witty friend slain in a duel"],
      ["CAPULET", "Juliet's family name"],
    ]},
    { category: "NASA missions", difficulty: 2, words: [
      ["MERCURY", "Element Hg"],
      ["ARTEMIS", "Greek goddess of the hunt"],
      ["VOYAGER", "Star Trek series with Captain Janeway"],
      ["PIONEER", "Early settler"],
    ]},
    { category: "Hidden planets", difficulty: 3, words: [
      ["MARSH", "Swampy wetland"],
      ["HEARTH", "Fireplace floor"],
      ["PLUTOCRAT", "Ruler by wealth"],
      ["SATURNINE", "Gloomy in temperament"],
    ]},
  ]},
  // 297
  { groups: [
    { category: "Desert sights", difficulty: 0, words: [
      ["OASIS", "Britpop band behind Wonderwall"],
      ["DUNE", "Frank Herbert sci-fi epic"],
      ["MIRAGE", "Optical illusion"],
      ["CACTUS", "Spiny succulent"],
    ]},
    { category: "Sci-fi authors", difficulty: 1, words: [
      ["WELLS", "Holes dug for water"],
      ["VERNE", "Twenty Thousand Leagues author"],
      ["ASIMOV", "I, Robot author"],
      ["BRADBURY", "Fahrenheit 451 author"],
    ]},
    { category: "Greek islands", difficulty: 2, words: [
      ["RHODES", "Scholarship to Oxford"],
      ["CORFU", "Ionian isle off Albania"],
      ["IOS", "Apple's mobile operating system"],
      ["SANTORINI", "Isle of white houses and blue domes"],
    ]},
    { category: "___ machine", difficulty: 3, words: [
      ["SLOT", "Narrow opening"],
      ["FAX", "Document sent by phone line"],
      ["VENDING", "Selling"],
      ["WASHING", "Doing the laundry"],
    ]},
  ]},
  // 298
  { groups: [
    { category: "Map features", difficulty: 0, words: [
      ["LEGEND", "Myth or tale"],
      ["SCALE", "Bathroom weighing device"],
      ["COMPASS", "Tool for drawing circles"],
      ["LATITUDE", "Freedom of action"],
    ]},
    { category: "Legendary places", difficulty: 1, words: [
      ["ATLANTIS", "Sunken city of legend"],
      ["ELDORADO", "Classic Cadillac model"],
      ["UTOPIA", "Perfect society"],
      ["EDEN", "Garden of Genesis"],
    ]},
    { category: "Ancient ruins", difficulty: 2, words: [
      ["PETRA", "Rose-red city carved from rock"],
      ["POMPEII", "City buried by Vesuvius"],
      ["TROY", "Ounce system for gold"],
      ["ANGKOR", "___ Wat"],
    ]},
    { category: "___ map", difficulty: 3, words: [
      ["ROAD", "Highway"],
      ["HEAT", "Warmth"],
      ["TREASURE", "Riches"],
      ["STREET", "Avenue"],
    ]},
  ]},
  // 299
  { groups: [
    { category: "Musical directions", difficulty: 0, words: [
      ["FORTE", "Strong point"],
      ["PIANO", "Upright keyboard instrument"],
      ["LARGO", "Very slow and broad"],
      ["PRESTO", "Magician's word"],
    ]},
    { category: "Operas", difficulty: 1, words: [
      ["CARMEN", "Sandiego, the elusive thief"],
      ["TOSCA", "Diva who leaps from a castle"],
      ["AIDA", "Ethiopian princess of opera"],
      ["NORMA", "Marilyn Monroe's real first name"],
    ]},
    { category: "Italian composers", difficulty: 2, words: [
      ["ROSSINI", "Composer of William Tell"],
      ["VIVALDI", "Four Seasons composer"],
      ["PUCCINI", "Composer of La Boheme"],
      ["MONTEVERDI", "Early opera pioneer"],
    ]},
    { category: "Contains ROME", difficulty: 3, words: [
      ["CHROME", "Shiny metal plating"],
      ["PALINDROME", "Racecar, for example"],
      ["SYNDROME", "Set of medical symptoms"],
      ["PROMENADE", "Seaside walkway"],
    ]},
  ]},
  // 300
  { groups: [
    { category: "Irish symbols", difficulty: 0, words: [
      ["SHAMROCK", "Three-leaf plant"],
      ["HARP", "Angelic stringed instrument"],
      ["LEPRECHAUN", "Wee shoemaker with a pot of gold"],
      ["BLARNEY", "Flattering nonsense"],
    ]},
    { category: "Irish cities", difficulty: 1, words: [
      ["DUBLIN", "James Joyce's home city"],
      ["CORK", "Wine bottle stopper"],
      ["GALWAY", "City on Ireland's west coast bay"],
      ["DERRY", "Walled city on the River Foyle"],
    ]},
    { category: "Irish writers", difficulty: 2, words: [
      ["WILDE", "Oscar of witty epigrams"],
      ["SWIFT", "Speedy"],
      ["YEATS", "Poet of The Second Coming"],
      ["STOKER", "Tender of a furnace fire"],
    ]},
    { category: "Starts with a fish", difficulty: 3, words: [
      ["CARPENTER", "Woodworker"],
      ["RAYON", "Synthetic silk fabric"],
      ["SOLEMN", "Grave and serious"],
      ["BASSOON", "Double-reed woodwind"],
    ]},
  ]},
  // 301
  { groups: [
    { category: "Indian cities", difficulty: 0, words: [
      ["DELHI", "India's capital territory"],
      ["MUMBAI", "Bollywood's home"],
      ["AGRA", "Home of the Taj Mahal"],
      ["JAIPUR", "The Pink City of Rajasthan"],
    ]},
    { category: "Indian states", difficulty: 1, words: [
      ["GOA", "Beachy former Portuguese colony"],
      ["KERALA", "Southwestern land of backwaters"],
      ["PUNJAB", "Land of five rivers"],
      ["ASSAM", "Tea-growing state in the northeast"],
    ]},
    { category: "Hindu deities", difficulty: 2, words: [
      ["SHIVA", "The Destroyer in the Hindu trinity"],
      ["VISHNU", "The Preserver in the Hindu trinity"],
      ["KRISHNA", "Flute-playing blue-skinned god"],
      ["GANESHA", "Elephant-headed remover of obstacles"],
    ]},
    { category: "Sound like baking words", difficulty: 3, words: [
      ["NEED", "Require"],
      ["ROLE", "Part in a play"],
      ["WRY", "Dryly humorous"],
      ["BRED", "Raised, like livestock"],
    ]},
  ]},
  // 302
  { groups: [
    { category: "English counties", difficulty: 0, words: [
      ["KENT", "Clark of the Daily Planet"],
      ["ESSEX", "County northeast of London"],
      ["DEVON", "Cream-tea county"],
      ["SURREY", "Carriage with fringe on top"],
    ]},
    { category: "London neighborhoods", difficulty: 1, words: [
      ["SOHO", "Theatre-land district in the West End"],
      ["CHELSEA", "Clinton's daughter"],
      ["MAYFAIR", "Priciest square on a British Monopoly board"],
      ["CAMDEN", "North London area famed for its market"],
    ]},
    { category: "Middle-earth places", difficulty: 2, words: [
      ["SHIRE", "Huge draft horse breed"],
      ["MORDOR", "Land where the shadows lie"],
      ["GONDOR", "Kingdom of Minas Tirith"],
      ["ROHAN", "Land of the horse-lords"],
    ]},
    { category: "Famous ___ Street", difficulty: 3, words: [
      ["WALL", "Brick partition"],
      ["FLEET", "Group of ships"],
      ["BAKER", "Bread maker"],
      ["DOWNING", "Gulping, as a drink"],
    ]},
  ]},
  // 303
  { groups: [
    { category: "US cities", difficulty: 0, words: [
      ["BOSTON", "Cream pie city"],
      ["MIAMI", "Florida city of South Beach"],
      ["DALLAS", "Cowboys' home city"],
      ["CHICAGO", "The Windy City"],
    ]},
    { category: "Jazz legends", difficulty: 1, words: [
      ["MONK", "Monastery dweller"],
      ["ARMSTRONG", "First man on the moon"],
      ["PARKER", "Spider-Man's surname"],
      ["BASIE", "Count of big-band swing"],
    ]},
    { category: "Broadway musicals", difficulty: 2, words: [
      ["RENT", "Monthly housing payment"],
      ["ANNIE", "___ Hall, Woody Allen film"],
      ["EVITA", "Story of Argentina's first lady"],
      ["HAMILTON", "Face on the ten-dollar bill"],
    ]},
    { category: "___band", difficulty: 3, words: [
      ["RUBBER", "Eraser"],
      ["WRIST", "Joint between arm and hand"],
      ["BRASS", "Copper-zinc alloy"],
      ["BOY", "Young lad"],
    ]},
  ]},
  // 304
  { groups: [
    { category: "Fictional witches", difficulty: 0, words: [
      ["ELPHABA", "Wicked's green heroine"],
      ["SABRINA", "Teenage witch of TV"],
      ["HERMIONE", "Granger of Gryffindor"],
      ["GLINDA", "Good one of the North"],
    ]},
    { category: "Narnia characters", difficulty: 1, words: [
      ["ASLAN", "Great lion beyond the wardrobe"],
      ["LUCY", "I Love ___"],
      ["CASPIAN", "Sea bordering Iran"],
      ["TUMNUS", "Faun with an umbrella"],
    ]},
    { category: "___ Sea", difficulty: 2, words: [
      ["RED", "Color of a stop sign"],
      ["DEAD", "No longer living"],
      ["BLACK", "Darkest color"],
      ["IRISH", "Like a setter or a stew"],
    ]},
    { category: "Sound like animals", difficulty: 3, words: [
      ["BORE", "Dull person"],
      ["HOARSE", "Raspy-voiced"],
      ["MOUSSE", "Airy chocolate dessert"],
      ["LINKS", "Golf course"],
    ]},
  ]},
  // 305
  { groups: [
    { category: "South American countries", difficulty: 0, words: [
      ["CHILE", "Spicy pepper, by another spelling"],
      ["BRAZIL", "Kind of nut"],
      ["PERU", "Nation of Machu Picchu"],
      ["BOLIVIA", "Landlocked nation with La Paz"],
    ]},
    { category: "Revolutionaries", difficulty: 1, words: [
      ["BOLIVAR", "The Liberator of South America"],
      ["CASTRO", "Fidel of Cuba"],
      ["ZAPATA", "Mexican rebel with a famous moustache"],
      ["LENIN", "Bolshevik leader of 1917"],
    ]},
    { category: "Camelids", difficulty: 2, words: [
      ["LLAMA", "Woolly Andean pack animal"],
      ["ALPACA", "Fleecy animal prized for soft wool"],
      ["CAMEL", "Ship of the desert"],
      ["VICUNA", "Wild Andean grazer with fine wool"],
    ]},
    { category: "Words from Spanish", difficulty: 3, words: [
      ["PATIO", "Paved outdoor area"],
      ["RODEO", "Bronco-riding event"],
      ["SIESTA", "Afternoon nap"],
      ["MOSQUITO", "Itchy-bite bug"],
    ]},
  ]},
  // 306
  { groups: [
    { category: "Writing implements", difficulty: 0, words: [
      ["QUILL", "Porcupine spine"],
      ["CHALK", "Climber's hand powder"],
      ["CRAYON", "Waxy coloring stick"],
      ["MARKER", "Signpost along a trail"],
    ]},
    { category: "Literary genres", difficulty: 1, words: [
      ["ROMANCE", "Courtship"],
      ["FABLE", "Aesop's specialty"],
      ["SATIRE", "Mocking humor"],
      ["MYSTERY", "Enigma"],
    ]},
    { category: "Writing systems", difficulty: 2, words: [
      ["BRAILLE", "Raised-dot reading"],
      ["CUNEIFORM", "Wedge-shaped script"],
      ["CYRILLIC", "Alphabet of Russian"],
      ["KANJI", "Japanese characters from Chinese"],
    ]},
    { category: "Starts with PEN", difficulty: 3, words: [
      ["PENGUIN", "Tuxedoed Antarctic bird"],
      ["PENNANT", "Triangular sports banner"],
      ["PENINSULA", "Land almost surrounded by water"],
      ["PENALTY", "Punishment for a foul"],
    ]},
  ]},
  // 307
  { groups: [
    { category: "Chinese cities", difficulty: 0, words: [
      ["BEIJING", "2008 Olympics host"],
      ["SHANGHAI", "Kidnap onto a ship"],
      ["MACAU", "Casino hub on the Pearl River Delta"],
      ["CANTON", "Swiss state"],
    ]},
    { category: "Chinese dynasties", difficulty: 1, words: [
      ["TANG", "Orange drink powder astronauts took"],
      ["HAN", "Solo of Star Wars"],
      ["SONG", "Tune"],
      ["MING", "Era of prized blue-and-white vases"],
    ]},
    { category: "Chinese inventions", difficulty: 2, words: [
      ["KITE", "Hawk-like bird of prey"],
      ["ABACUS", "Bead counting frame"],
      ["GUNPOWDER", "Fireworks' explosive"],
      ["SILK", "Fabric spun by worms"],
    ]},
    { category: "___dragon", difficulty: 3, words: [
      ["SNAP", "Break with a crack"],
      ["KOMODO", "Indonesian island"],
      ["BEARDED", "Having facial hair"],
      ["PUFF", "Short breath of smoke"],
    ]},
  ]},
  // 308
  { groups: [
    { category: "Landforms", difficulty: 0, words: [
      ["MESA", "Arizona city east of Phoenix"],
      ["ATOLL", "Ring-shaped coral island"],
      ["PLATEAU", "Level off, as progress might"],
      ["CANYON", "Grand ___"],
    ]},
    { category: "Muses", difficulty: 1, words: [
      ["CLIO", "Advertising award"],
      ["CALLIOPE", "Circus steam organ"],
      ["THALIA", "Comedy's patron"],
      ["ERATO", "Love poetry's patron"],
    ]},
    { category: "Titans of Greek myth", difficulty: 2, words: [
      ["ATLAS", "Book of maps"],
      ["RHEA", "Flightless South American bird"],
      ["CRONUS", "Father of Zeus"],
      ["PROMETHEUS", "Fire thief chained to a rock"],
    ]},
    { category: "___cap", difficulty: 3, words: [
      ["KNEE", "Leg joint"],
      ["NIGHT", "Dark hours"],
      ["HUB", "Center of activity"],
      ["SKULL", "Cranium"],
    ]},
  ]},
  // 309
  { groups: [
    { category: "Swiss cities", difficulty: 0, words: [
      ["GENEVA", "Convention on wartime conduct"],
      ["ZURICH", "Banking hub on a lake"],
      ["BASEL", "Art fair city on the Rhine"],
      ["LUCERNE", "Lake city with a covered wooden bridge"],
    ]},
    { category: "Swiss specialties", difficulty: 1, words: [
      ["FONDUE", "Pot of melted cheese for dipping"],
      ["YODEL", "Warbling mountain call"],
      ["CUCKOO", "Crazy"],
      ["MUESLI", "Oat-and-fruit breakfast"],
    ]},
    { category: "Robin Hood characters", difficulty: 2, words: [
      ["TUCK", "Fold in the bedsheets"],
      ["MARIAN", "Maid of Sherwood"],
      ["SHERIFF", "Lawman with a star badge"],
      ["LITTLEJOHN", "Giant outlaw with an ironic name"],
    ]},
    { category: "___hood", difficulty: 3, words: [
      ["CHILD", "Kid"],
      ["FALSE", "Untrue"],
      ["BROTHER", "Male sibling"],
      ["PRIEST", "Clergyman at Mass"],
    ]},
  ]},
  // 310
  { groups: [
    { category: "Shades of purple", difficulty: 0, words: [
      ["LILAC", "Fragrant spring shrub"],
      ["PLUM", "Juicy stone fruit"],
      ["MAUVE", "Pale pinkish-purple"],
      ["VIOLET", "Shrinking ___, a shy person"],
    ]},
    { category: "Roman emperors", difficulty: 1, words: [
      ["HADRIAN", "Builder of a wall in Britain"],
      ["TRAJAN", "Emperor with a famous column"],
      ["CALIGULA", "Emperor nicknamed Little Boot"],
      ["CLAUDIUS", "I, ___ (Robert Graves novel)"],
    ]},
    { category: "Spinning storms", difficulty: 2, words: [
      ["TWISTER", "Party game with colored spots"],
      ["CYCLONE", "Coney Island roller coaster"],
      ["TYPHOON", "Western Pacific tempest"],
      ["WHIRLWIND", "Romance that moves very fast"],
    ]},
    { category: "Hidden OZ", difficulty: 3, words: [
      ["DOZEN", "Twelve"],
      ["COZY", "Snug and warm"],
      ["FROZEN", "Disney film with Elsa"],
      ["WOOZY", "Dizzy"],
    ]},
  ]},
  // 311
  { groups: [
    { category: "US coins", difficulty: 0, words: [
      ["PENNY", "___ Lane, Beatles song"],
      ["NICKEL", "Element with the symbol Ni"],
      ["QUARTER", "District of a city"],
      ["DIME", "Ten-cent piece"],
    ]},
    { category: "Currencies before the euro", difficulty: 1, words: [
      ["MARK", "Spot or stain"],
      ["FRANC", "Old French money"],
      ["LIRA", "Old Italian money"],
      ["DRACHMA", "Old Greek money"],
    ]},
    { category: "Kings of legend", difficulty: 2, words: [
      ["MIDAS", "Muffler shop chain"],
      ["ARTHUR", "Aardvark of PBS cartoons"],
      ["MINOS", "Cretan king of the labyrinth"],
      ["OEDIPUS", "Riddle-solver of Thebes"],
    ]},
    { category: "___mark", difficulty: 3, words: [
      ["BOOK", "Novel"],
      ["BENCH", "Park seat"],
      ["LAND", "Ground"],
      ["HALL", "Corridor"],
    ]},
  ]},
  // 312
  { groups: [
    { category: "Olympic sights", difficulty: 0, words: [
      ["TORCH", "Flashlight, in Britain"],
      ["MEDAL", "Award of honor"],
      ["PODIUM", "Speaker's stand"],
      ["RINGS", "Finger jewelry"],
    ]},
    { category: "Throwing events", difficulty: 1, words: [
      ["DISCUS", "Flat disc hurled in a circle"],
      ["JAVELIN", "Spear thrown for distance"],
      ["HAMMER", "Nail driver"],
      ["SHOT", "Photo or injection"],
    ]},
    { category: "Words named for myth figures", difficulty: 2, words: [
      ["ECHO", "Repeated sound"],
      ["MENTOR", "Wise advisor"],
      ["PANIC", "Sudden fear"],
      ["CEREAL", "Breakfast grain in a bowl"],
    ]},
    { category: "___bag", difficulty: 3, words: [
      ["AIR", "What we breathe"],
      ["BEAN", "Legume"],
      ["GAS", "Fuel for a car"],
      ["WIND", "Breeze"],
    ]},
  ]},
  // 313
  { groups: [
    { category: "Royal residences", difficulty: 0, words: [
      ["WINDSOR", "Knot for a necktie"],
      ["BALMORAL", "Scottish royal retreat"],
      ["VERSAILLES", "Treaty site of 1919"],
      ["SANDRINGHAM", "Norfolk estate of the royals"],
    ]},
    { category: "Noble ranks", difficulty: 1, words: [
      ["DUKE", "Ellington of jazz"],
      ["EARL", "Grey of tea fame"],
      ["BARON", "Red ___, Snoopy's foe"],
      ["COUNT", "Tally"],
    ]},
    { category: "Knights of the Round Table", difficulty: 2, words: [
      ["GALAHAD", "Noble, chivalrous man"],
      ["LANCELOT", "Guinevere's secret love"],
      ["GAWAIN", "Foe of the Green Knight"],
      ["PERCIVAL", "Grail seeker raised in the woods"],
    ]},
    { category: "Hidden EARL", difficulty: 3, words: [
      ["EARLY", "Ahead of schedule"],
      ["YEARLING", "One-year-old horse"],
      ["EARLOBE", "Spot for a stud"],
      ["PEARLY", "___ whites (teeth)"],
    ]},
  ]},
  // 314
  { groups: [
    { category: "Romance languages", difficulty: 0, words: [
      ["FRENCH", "Kind of fry"],
      ["ITALIAN", "Style of sub sandwich"],
      ["ROMANIAN", "Tongue of Bucharest"],
      ["CATALAN", "Tongue of Barcelona"],
    ]},
    { category: "Grammar terms", difficulty: 1, words: [
      ["CLAUSE", "Santa ___"],
      ["SUFFIX", "Ending like -ness"],
      ["SYNTAX", "Sentence structure rules"],
      ["GERUND", "Verb acting as a noun"],
    ]},
    { category: "Figures of speech", difficulty: 2, words: [
      ["SIMILE", "Comparison using like or as"],
      ["IRONY", "Rain on your wedding day, per Alanis"],
      ["PUN", "Groan-worthy wordplay"],
      ["OXYMORON", "Jumbo shrimp, for one"],
    ]},
    { category: "Starts with a bug", difficulty: 3, words: [
      ["ANTHEM", "National song"],
      ["LICENSE", "Driver's permit"],
      ["FLYER", "Leaflet"],
      ["BEECH", "Smooth-barked tree"],
    ]},
  ]},
  // 315
  { groups: [
    { category: "New Zealand cities", difficulty: 0, words: [
      ["AUCKLAND", "Largest Kiwi city"],
      ["WELLINGTON", "Rubber boot, in Britain"],
      ["NELSON", "Admiral of Trafalgar"],
      ["DUNEDIN", "Southern city with Scottish roots"],
    ]},
    { category: "Words from Polynesia", difficulty: 1, words: [
      ["TABOO", "Forbidden"],
      ["TATTOO", "Inked design"],
      ["LUAU", "Island feast with roast pig"],
      ["ALOHA", "Hello and goodbye"],
    ]},
    { category: "Pacific island nations", difficulty: 2, words: [
      ["FIJI", "Bottled water brand"],
      ["SAMOA", "Caramel-coconut Girl Scout cookie"],
      ["TONGA", "Kingdom near the Date Line"],
      ["TUVALU", "Tiny nation with the .tv domain"],
    ]},
    { category: "Hidden islands", difficulty: 3, words: [
      ["CONCRETE", "Sidewalk material"],
      ["NATIONAL", "Countrywide"],
      ["TARANTULA", "Hairy spider"],
      ["CAPRICORN", "Sea-goat sign of the zodiac"],
    ]},
  ]},
  // 316
  { groups: [
    { category: "Movie monsters", difficulty: 0, words: [
      ["VAMPIRE", "Kind of bat"],
      ["ZOMBIE", "Strong rum cocktail"],
      ["WEREWOLF", "Full-moon shapeshifter"],
      ["GHOUL", "Graveyard fiend"],
    ]},
    { category: "Bronte characters", difficulty: 1, words: [
      ["HEATHCLIFF", "Brooding Wuthering Heights hero"],
      ["ROCHESTER", "Upstate New York city"],
      ["EYRE", "Plain, orphaned governess"],
      ["ADELE", "Singer of Hello"],
    ]},
    { category: "Things a psychic reads", difficulty: 2, words: [
      ["PALM", "Tropical tree"],
      ["TAROT", "Deck with The Fool and Death"],
      ["AURA", "Glowing energy field"],
      ["MIND", "Brain's thoughts"],
    ]},
    { category: "___moon", difficulty: 3, words: [
      ["HONEY", "Bee's sweet product"],
      ["HARVEST", "Reap the crops"],
      ["HALF", "Fifty percent"],
      ["BLUE", "Sad color"],
    ]},
  ]},
  // 317
  { groups: [
    { category: "Furniture", difficulty: 0, words: [
      ["SOFA", "Comfy couch for the living room"],
      ["TABLE", "Rows and columns of data"],
      ["DRESSER", "Bedroom chest of drawers"],
      ["STOOL", "Backless seat at a bar"],
    ]},
    { category: "Hospital staff", difficulty: 1, words: [
      ["NURSE", "Sip slowly to make it last"],
      ["SURGEON", "Operating room doctor"],
      ["ORDERLY", "Neat and well arranged"],
      ["MEDIC", "Army first-aid soldier"],
    ]},
    { category: "Things with a hood", difficulty: 2, words: [
      ["CLOAK", "Wizard's long garment"],
      ["STOVE", "Kitchen range"],
      ["MONK", "Robed brother"],
      ["CAR", "Automobile"],
    ]},
    { category: "Doctor ___", difficulty: 3, words: [
      ["WHO", "Question about a person"],
      ["STRANGE", "Odd"],
      ["SEUSS", "Pen name of Theodor Geisel"],
      ["FEELGOOD", "Upbeat, as a movie"],
    ]},
  ]},
  // 318
  { groups: [
    { category: "Inside a car", difficulty: 0, words: [
      ["SEATBELT", "Buckle up with this"],
      ["DASHBOARD", "Panel behind the steering wheel"],
      ["HEADREST", "Cushion behind your skull"],
      ["ODOMETER", "Mileage counter"],
    ]},
    { category: "Bathroom fixtures", difficulty: 1, words: [
      ["SINK", "Go under the waves"],
      ["TUB", "Container of ice cream or margarine"],
      ["TOILET", "Porcelain throne"],
      ["SHOWER", "Party for a bride-to-be"],
    ]},
    { category: "Things you run", difficulty: 2, words: [
      ["ERRAND", "Quick chore trip"],
      ["FEVER", "High temperature"],
      ["TAB", "Bar bill"],
      ["RISK", "Board game of world conquest"],
    ]},
    { category: "___car", difficulty: 3, words: [
      ["STREET", "Road in town"],
      ["STOCK", "Inventory"],
      ["CABLE", "TV service"],
      ["SQUAD", "Team"],
    ]},
  ]},
  // 319
  { groups: [
    { category: "Garage contents", difficulty: 0, words: [
      ["LADDER", "Run in a pair of tights"],
      ["RAKE", "Charming rogue"],
      ["MOWER", "Grass cutter"],
      ["HOSE", "Stockings, collectively"],
    ]},
    { category: "Window styles", difficulty: 1, words: [
      ["BAY", "Inlet of the sea"],
      ["DORMER", "Upright roof window"],
      ["SKYLIGHT", "Window in the ceiling"],
      ["PICTURE", "Photo"],
    ]},
    { category: "Trade jobs", difficulty: 2, words: [
      ["MASON", "Glass jar for pickling"],
      ["ROOFER", "One who fixes shingles"],
      ["PAINTER", "Picasso or Monet"],
      ["WELDER", "Metal joiner with a torch"],
    ]},
    { category: "Things you raise", difficulty: 3, words: [
      ["BAR", "Pub counter"],
      ["EYEBROW", "Hair above the eye"],
      ["FAMILY", "Parents and kids"],
      ["STAKES", "Wagers"],
    ]},
  ]},
  // 320
  { groups: [
    { category: "Public transport", difficulty: 0, words: [
      ["BUS", "Clear dishes at a restaurant"],
      ["TRAIN", "Coach an athlete"],
      ["TRAM", "Streetcar"],
      ["SUBWAY", "Sandwich chain"],
    ]},
    { category: "Tops", difficulty: 1, words: [
      ["BLOUSE", "Woman's button-up shirt"],
      ["TANK", "Armored military vehicle"],
      ["POLO", "Sport played on horseback"],
      ["TEE", "Golf ball peg"],
    ]},
    { category: "Garden structures", difficulty: 2, words: [
      ["GAZEBO", "Open-sided garden pavilion"],
      ["PERGOLA", "Vine-covered walkway frame"],
      ["TRELLIS", "Lattice for climbing plants"],
      ["ARBOR", "Tree-planting ___ Day"],
    ]},
    { category: "___bed", difficulty: 3, words: [
      ["FLOWER", "Rose or tulip"],
      ["HOT", "Spicy"],
      ["FEATHER", "Bird's plume"],
      ["TEST", "Exam"],
    ]},
  ]},
  // 321
  { groups: [
    { category: "Home rooms", difficulty: 0, words: [
      ["DEN", "Lion's lair"],
      ["STUDY", "Cram for an exam"],
      ["KITCHEN", "Where the cooking happens"],
      ["PARLOR", "Ice cream shop"],
    ]},
    { category: "House styles", difficulty: 1, words: [
      ["TUDOR", "English royal house"],
      ["RANCH", "Cattle farm"],
      ["COLONIAL", "Of the early settlers"],
      ["CRAFTSMAN", "Skilled artisan"],
    ]},
    { category: "Fabric patterns", difficulty: 2, words: [
      ["PLAID", "Tartan pattern"],
      ["PAISLEY", "Teardrop-shaped pattern"],
      ["CHECK", "Restaurant bill"],
      ["STRIPE", "Sergeant's sleeve badge"],
    ]},
    { category: "Things you check", difficulty: 3, words: [
      ["COAT", "Layer of paint"],
      ["PULSE", "Heartbeat"],
      ["SPELLING", "Bee contestant's skill"],
      ["EMAIL", "Inbox message"],
    ]},
  ]},
  // 322
  { groups: [
    { category: "Wristwatch parts", difficulty: 0, words: [
      ["HANDS", "Farm workers"],
      ["DIAL", "Make a phone call"],
      ["CROWN", "Monarch's headwear"],
      ["BEZEL", "Ring around a gem or watch face"],
    ]},
    { category: "Hotel jobs", difficulty: 1, words: [
      ["DOORMAN", "Building entrance attendant"],
      ["BELLHOP", "Uniformed bag carrier"],
      ["PORTER", "Dark style of beer"],
      ["CONCIERGE", "Hotel's helpful front-desk fixer"],
    ]},
    { category: "Car body styles", difficulty: 2, words: [
      ["COUPE", "Two-door car"],
      ["SEDAN", "Four-door family car"],
      ["WAGON", "Covered pioneer cart"],
      ["MINIVAN", "Soccer mom's people mover"],
    ]},
    { category: "End in a silent T", difficulty: 3, words: [
      ["BALLET", "Swan Lake art form"],
      ["BUFFET", "All-you-can-eat spread"],
      ["BERET", "French artist's cap"],
      ["GOURMET", "Food connoisseur"],
    ]},
  ]},
  // 323
  { groups: [
    { category: "Bedding", difficulty: 0, words: [
      ["BLANKET", "Covering everything, as a statement"],
      ["DUVET", "Fluffy comforter"],
      ["SHEET", "Single piece of paper"],
      ["QUILT", "Patchwork bed covering"],
    ]},
    { category: "Crew on a ship", difficulty: 1, words: [
      ["CAPTAIN", "Team leader"],
      ["PURSER", "Ship's money officer"],
      ["NAVIGATOR", "Person who plots the route"],
      ["BOSUN", "Ship's deck foreman"],
    ]},
    { category: "Fabrics named for places", difficulty: 2, words: [
      ["CALICO", "Patchy-coated cat"],
      ["MUSLIN", "Thin cotton cloth"],
      ["DAMASK", "Reversible patterned fabric"],
      ["CASHMERE", "Soft goat-wool fabric"],
    ]},
    { category: "___case", difficulty: 3, words: [
      ["BRIEF", "Short"],
      ["SUIT", "Business attire"],
      ["BOOK", "Reserve a table"],
      ["STAIR", "Single step"],
    ]},
  ]},
  // 324
  { groups: [
    { category: "Road sign words", difficulty: 0, words: [
      ["STOP", "Halt"],
      ["YIELD", "Crop output"],
      ["MERGE", "Combine two companies"],
      ["DETOUR", "Roundabout route"],
    ]},
    { category: "Window coverings", difficulty: 1, words: [
      ["BLINDS", "Hunters' hiding spots"],
      ["SHADE", "Area out of the sun"],
      ["SHUTTER", "Camera part that clicks"],
      ["DRAPES", "Hangs loosely"],
    ]},
    { category: "Gearshift positions", difficulty: 2, words: [
      ["PARK", "Green space in a city"],
      ["NEUTRAL", "Impartial"],
      ["REVERSE", "Opposite"],
      ["LOW", "Not high"],
    ]},
    { category: "___smith", difficulty: 3, words: [
      ["BLACK", "Darkest color"],
      ["GOLD", "Olympic first prize"],
      ["LOCK", "Curl of hair"],
      ["WORD", "Unit of language"],
    ]},
  ]},
  // 325
  { groups: [
    { category: "Home security", difficulty: 0, words: [
      ["CAMERA", "Photo snapper"],
      ["DEADBOLT", "Sturdy door lock"],
      ["PEEPHOLE", "Door's tiny viewer"],
      ["SIREN", "Mythical singer luring sailors"],
    ]},
    { category: "Railroad jobs", difficulty: 1, words: [
      ["CONDUCTOR", "Orchestra leader"],
      ["ENGINEER", "Bridge designer"],
      ["BRAKEMAN", "Old-time train crew member"],
      ["STOKER", "Bram who wrote Dracula"],
    ]},
    { category: "Neckwear", difficulty: 2, words: [
      ["TIE", "Even score"],
      ["ASCOT", "Famous English racecourse"],
      ["CRAVAT", "Old-fashioned neck cloth"],
      ["BOLO", "Western string tie"],
    ]},
    { category: "Sound like trees", difficulty: 3, words: [
      ["FUR", "Animal's coat"],
      ["BEACH", "Sandy shore"],
      ["PAIR", "Two of a kind"],
      ["YOU", "Second-person pronoun"],
    ]},
  ]},
  // 326
  { groups: [
    { category: "Glove box contents", difficulty: 0, words: [
      ["MANUAL", "Not automatic"],
      ["NAPKINS", "Lap protectors at dinner"],
      ["SUNGLASSES", "Shades"],
      ["TISSUES", "Kleenex, for example"],
    ]},
    { category: "Parts of a train", difficulty: 1, words: [
      ["ENGINE", "Motor"],
      ["CABOOSE", "Last car on a freight train"],
      ["TENDER", "Gentle and loving"],
      ["BOXCAR", "Enclosed freight car"],
    ]},
    { category: "Building materials", difficulty: 2, words: [
      ["BRICK", "Lego piece"],
      ["CEMENT", "Solidify, as a deal"],
      ["STEEL", "Rob"],
      ["TIMBER", "Lumberjack's warning cry"],
    ]},
    { category: "Snow___", difficulty: 3, words: [
      ["BALL", "Fancy dance"],
      ["FLAKE", "Unreliable person"],
      ["DRIFT", "Wander aimlessly"],
      ["BOARD", "Get on a plane"],
    ]},
  ]},
  // 327
  { groups: [
    { category: "Kinds of tape", difficulty: 0, words: [
      ["DUCT", "Air vent passage"],
      ["MASKING", "Hiding"],
      ["SCOTCH", "Whisky from Scotland"],
      ["PACKING", "Filling a suitcase"],
    ]},
    { category: "Fashion houses", difficulty: 1, words: [
      ["GUCCI", "Italian label with interlocking Gs"],
      ["PRADA", "The devil wears it, in a film"],
      ["DIOR", "Christian of the New Look"],
      ["CHANEL", "Coco of No. 5 perfume"],
    ]},
    { category: "Post office items", difficulty: 2, words: [
      ["STAMP", "Stomp the foot"],
      ["PARCEL", "Divide into portions"],
      ["LETTER", "A, B, or C"],
      ["ENVELOPE", "Paper sleeve you seal"],
    ]},
    { category: "___chair", difficulty: 3, words: [
      ["ARM", "Limb with an elbow"],
      ["HIGH", "Tall"],
      ["WHEEL", "Car's rolling part"],
      ["DECK", "Pack of cards"],
    ]},
  ]},
  // 328
  { groups: [
    { category: "Parts of a door", difficulty: 0, words: [
      ["HINGE", "Depend on"],
      ["KNOB", "Small pat of butter"],
      ["KNOCKER", "Brass rapper on the front"],
      ["PANEL", "Group of judges"],
    ]},
    { category: "Horse-drawn vehicles", difficulty: 1, words: [
      ["BUGGY", "Full of software errors"],
      ["CHARIOT", "Ben-Hur's racing vehicle"],
      ["STAGECOACH", "Wild West passenger wagon"],
      ["SURREY", "English county"],
    ]},
    { category: "Museum jobs", difficulty: 2, words: [
      ["CURATOR", "Exhibit organizer"],
      ["DOCENT", "Tour-giving guide"],
      ["GUARD", "Basketball position"],
      ["ARCHIVIST", "Keeper of old records"],
    ]},
    { category: "Hidden dishware", difficulty: 3, words: [
      ["POTION", "Witch's brew"],
      ["SPANISH", "Language of Mexico"],
      ["CUPID", "Valentine's archer"],
      ["PLATEAU", "Flat elevated land"],
    ]},
  ]},
  // 329
  { groups: [
    { category: "Winter wear", difficulty: 0, words: [
      ["MITTENS", "Kittens lost theirs in a rhyme"],
      ["PARKA", "Hooded winter coat"],
      ["BEANIE", "Snug knit cap"],
      ["GLOVES", "Boxer's padded mitts"],
    ]},
    { category: "Parts of a ship", difficulty: 1, words: [
      ["BOW", "Ribbon knot"],
      ["STERN", "Strict"],
      ["HULL", "English city on the Humber"],
      ["KEEL", "Fall over, ___ over"],
    ]},
    { category: "Cleaning gear", difficulty: 2, words: [
      ["MOP", "Shaggy mane of hair"],
      ["BROOM", "Witch's ride"],
      ["SPONGE", "Freeloader"],
      ["DUSTER", "Long cowboy coat"],
    ]},
    { category: "___ tag", difficulty: 3, words: [
      ["PRICE", "Cost"],
      ["NAME", "Title"],
      ["DOG", "Man's best friend"],
      ["FREEZE", "Turn to ice"],
    ]},
  ]},
  // 330
  { groups: [
    { category: "Furniture woods", difficulty: 0, words: [
      ["TEAK", "Hard wood for decks"],
      ["MAHOGANY", "Reddish-brown wood"],
      ["WALNUT", "Wrinkly nut"],
      ["ROSEWOOD", "Dark wood for guitars"],
    ]},
    { category: "Hammers", difficulty: 1, words: [
      ["CLAW", "Crab's pincer"],
      ["SLEDGE", "Sled"],
      ["MALLET", "Croquet stick"],
      ["GAVEL", "Judge's hammer"],
    ]},
    { category: "Forms of pay", difficulty: 2, words: [
      ["WAGE", "Carry on, as a war"],
      ["SALARY", "Yearly pay"],
      ["FEE", "Charge for a service"],
      ["BONUS", "Extra reward"],
    ]},
    { category: "Shoe___", difficulty: 3, words: [
      ["HORN", "Car's honker"],
      ["LACE", "Doily fabric"],
      ["BOX", "Spar in the ring"],
      ["STRING", "Guitar wire"],
    ]},
  ]},
  // 331
  { groups: [
    { category: "Living room items", difficulty: 0, words: [
      ["COUCH", "Phrase carefully"],
      ["RUG", "Toupee, slangily"],
      ["LAMP", "Aladdin's genie's home"],
      ["OTTOMAN", "Old Turkish empire"],
    ]},
    { category: "Staircase parts", difficulty: 1, words: [
      ["TREAD", "Walk on"],
      ["BANISTER", "Stair railing"],
      ["LANDING", "Plane's touchdown"],
      ["RISER", "Early bird, e.g."],
    ]},
    { category: "Elevator buttons", difficulty: 2, words: [
      ["OPEN", "Not closed"],
      ["CLOSE", "Nearby"],
      ["ALARM", "Wake-up buzzer"],
      ["HOLD", "Grip"],
    ]},
    { category: "Anagrams of TEARS", difficulty: 3, words: [
      ["STARE", "Gaze fixedly"],
      ["ASTER", "Daisy-like flower"],
      ["RATES", "Prices"],
      ["TASER", "Stun gun"],
    ]},
  ]},
  // 332
  { groups: [
    { category: "Bathroom essentials", difficulty: 0, words: [
      ["TOWEL", "Throw in the ___ (give up)"],
      ["RAZOR", "Occam's ___"],
      ["LOOFAH", "Exfoliating gourd sponge"],
      ["SOAP", "Daytime TV drama"],
    ]},
    { category: "Hired rides", difficulty: 1, words: [
      ["CAB", "Truck driver's compartment"],
      ["LIMO", "Prom-night ride"],
      ["RICKSHAW", "Pulled two-wheeled cart"],
      ["SHUTTLE", "Weaving loom part"],
    ]},
    { category: "Fashion magazines", difficulty: 2, words: [
      ["VOGUE", "Madonna dance hit"],
      ["ELLE", "French for she"],
      ["GLAMOUR", "Showbiz sparkle"],
      ["ALLURE", "Charm, attraction"],
    ]},
    { category: "___ office", difficulty: 3, words: [
      ["POST", "Fence upright"],
      ["OVAL", "Egg shape"],
      ["FRONT", "Weather boundary"],
      ["HEAD", "Top of the body"],
    ]},
  ]},
  // 333
  { groups: [
    { category: "Toolbox contents", difficulty: 0, words: [
      ["HAMMER", "Shark with a T-shaped head"],
      ["CHISEL", "Sculptor's cutting tool"],
      ["PLIERS", "Gripping pincers"],
      ["LEVEL", "Video game stage"],
    ]},
    { category: "Slang for jail", difficulty: 1, words: [
      ["CLINK", "Glass-tapping sound"],
      ["SLAMMER", "Door banger"],
      ["POKEY", "Slow"],
      ["BRIG", "Two-masted sailing ship"],
    ]},
    { category: "Jobs at a ballpark", difficulty: 2, words: [
      ["UMPIRE", "Rules arbiter"],
      ["VENDOR", "Seller"],
      ["USHER", "One-named R&B singer"],
      ["ANNOUNCER", "Voice over the PA"],
    ]},
    { category: "Finger___", difficulty: 3, words: [
      ["PRINT", "Publish"],
      ["TIP", "Gratuity"],
      ["FOOD", "Grub"],
      ["PAINT", "Coat the walls"],
    ]},
  ]},
  // 334
  { groups: [
    { category: "Jackets", difficulty: 0, words: [
      ["BLAZER", "Portland basketball player"],
      ["TRENCH", "Deep ditch"],
      ["BOMBER", "Plane that drops payloads"],
      ["ANORAK", "Hooded windproof pullover"],
    ]},
    { category: "Places to stay", difficulty: 1, words: [
      ["RESORT", "Last ___ (final option)"],
      ["MOTEL", "Roadside lodging with parking"],
      ["HOSTEL", "Budget backpacker lodging"],
      ["LODGE", "Get stuck, as in the throat"],
    ]},
    { category: "Painting supplies", difficulty: 2, words: [
      ["ROLLER", "Big rolling wave"],
      ["TRAY", "Serving platter"],
      ["PRIMER", "Beginner's book"],
      ["TARP", "Waterproof cover sheet"],
    ]},
    { category: "Hidden INN", difficulty: 3, words: [
      ["DINNER", "Evening meal"],
      ["WINNER", "Champion"],
      ["SPINNER", "Fidget toy"],
      ["BEGINNER", "Novice"],
    ]},
  ]},
  // 335
  { groups: [
    { category: "Coffee table items", difficulty: 0, words: [
      ["COASTER", "Roller ___ ride"],
      ["REMOTE", "Far away"],
      ["MAGAZINE", "Gun's ammo holder"],
      ["VASE", "Flower holder"],
    ]},
    { category: "Gas station words", difficulty: 1, words: [
      ["PUMP", "Inflate a tire"],
      ["NOZZLE", "Hose's spout"],
      ["DIESEL", "Vin of Fast and Furious"],
      ["UNLEADED", "Regular fuel grade"],
    ]},
    { category: "Sleeve styles", difficulty: 2, words: [
      ["CAP", "Hat with a brim"],
      ["RAGLAN", "Sleeve named for a British lord"],
      ["PUFF", "Drag on a pipe"],
      ["BELL", "Church ringer"],
    ]},
    { category: "Add C to the front", difficulty: 3, words: [
      ["RANK", "Military position"],
      ["HAIR", "Grows on your head"],
      ["LEVER", "Crowbar, for one"],
      ["LOSER", "Last-place finisher"],
    ]},
  ]},
  // 336
  { groups: [
    { category: "Kinds of doors", difficulty: 0, words: [
      ["REVOLVING", "Spinning"],
      ["SLIDING", "Gliding along"],
      ["DUTCH", "Language of Amsterdam"],
      ["SWING", "Jazz style"],
    ]},
    { category: "Roof parts", difficulty: 1, words: [
      ["SHINGLE", "Pebbly beach"],
      ["GUTTER", "Bowling lane ditch"],
      ["EAVES", "Roof overhangs"],
      ["RIDGE", "Mountain crest"],
    ]},
    { category: "Barber shop items", difficulty: 2, words: [
      ["CLIPPERS", "Fast sailing ships"],
      ["COMB", "Rooster's red crest"],
      ["CAPE", "Superhero's cloak"],
      ["POMADE", "Slick hair grease"],
    ]},
    { category: "Start with a haircut", difficulty: 3, words: [
      ["BOBCAT", "Wild lynx relative"],
      ["PERMIT", "Official license"],
      ["BUNKER", "Golf sand trap"],
      ["CREWMAN", "Sailor"],
    ]},
  ]},
  // 337
  { groups: [
    { category: "Kitchen storage", difficulty: 0, words: [
      ["PANTRY", "Food storage closet"],
      ["CUPBOARD", "Cabinet for dishes"],
      ["DRAWER", "Artist who sketches"],
      ["CANISTER", "Lidded container for flour"],
    ]},
    { category: "Highway features", difficulty: 1, words: [
      ["LANE", "Superman's love Lois"],
      ["RAMP", "Skateboard incline"],
      ["TOLL", "Ring slowly, like a bell"],
      ["EXIT", "Leave"],
    ]},
    { category: "Sewing terms", difficulty: 2, words: [
      ["DART", "Pub game projectile"],
      ["SEAM", "Layer of coal"],
      ["TUCK", "Friar of Sherwood"],
      ["PLEAT", "Accordion fold in a skirt"],
    ]},
    { category: "Start with a pronoun", difficulty: 3, words: [
      ["SHEPHERD", "Flock tender"],
      ["HERON", "Long-legged wading bird"],
      ["WEASEL", "Sneaky person"],
      ["ITEM", "Couple, in gossip"],
    ]},
  ]},
  // 338
  { groups: [
    { category: "Baby gear", difficulty: 0, words: [
      ["CRIB", "Cheat sheet"],
      ["RATTLE", "Unnerve"],
      ["BIB", "Lobster-eater's napkin"],
      ["MOBILE", "Cell phone, in Britain"],
    ]},
    { category: "Teachers", difficulty: 1, words: [
      ["TUTOR", "Private instructor"],
      ["COACH", "Long-distance bus"],
      ["MENTOR", "Trusted adviser"],
      ["TRAINER", "Sneaker, in Britain"],
    ]},
    { category: "Babysitters", difficulty: 2, words: [
      ["NANNY", "Female goat"],
      ["SITTER", "Artist's model"],
      ["AUPAIR", "Live-in foreign helper"],
      ["MINDER", "Bodyguard, in Britain"],
    ]},
    { category: "___way", difficulty: 3, words: [
      ["DRIVE", "Golf tee shot"],
      ["RUN", "Jog"],
      ["GANG", "Group of hoodlums"],
      ["RAIL", "Train track bar"],
    ]},
  ]},
  // 339
  { groups: [
    { category: "Parts of a window", difficulty: 0, words: [
      ["SILL", "Ledge at the bottom"],
      ["PANE", "Single sheet of glass"],
      ["SASH", "Beauty pageant ribbon"],
      ["LATCH", "Gate fastener"],
    ]},
    { category: "Jobs ending in IST", difficulty: 1, words: [
      ["DENTIST", "Tooth doctor"],
      ["FLORIST", "Flower arranger"],
      ["CHEMIST", "Pharmacist, in Britain"],
      ["TYPIST", "Keyboard clerk"],
    ]},
    { category: "Kinds of glass", difficulty: 2, words: [
      ["STAINED", "Discolored"],
      ["FROSTED", "Iced, as a cake"],
      ["TEMPERED", "Moderated"],
      ["PLATE", "Dinner dish"],
    ]},
    { category: "Sound like jobs", difficulty: 3, words: [
      ["MINOR", "Not yet an adult"],
      ["KERNEL", "Popcorn seed"],
      ["PRINCIPLE", "Moral rule"],
      ["MARTIAL", "Like karate arts"],
    ]},
  ]},
  // 340
  { groups: [
    { category: "Types of homes", difficulty: 0, words: [
      ["CONDO", "Owned apartment unit"],
      ["BUNGALOW", "One-story house"],
      ["MANSION", "Huge, fancy residence"],
      ["COTTAGE", "Lumpy ___ cheese"],
    ]},
    { category: "Flying machines", difficulty: 1, words: [
      ["DRONE", "Male bee"],
      ["BLIMP", "Airship over a stadium"],
      ["GLIDER", "Engineless aircraft"],
      ["JET", "Shiny black gemstone"],
    ]},
    { category: "Parts of a shirt", difficulty: 2, words: [
      ["COLLAR", "Arrest"],
      ["CUFF", "Shackle a suspect's wrists"],
      ["POCKET", "Pool table hole"],
      ["YOKE", "Oxen's wooden harness"],
    ]},
    { category: "Auto___", difficulty: 3, words: [
      ["GRAPH", "Chart"],
      ["PILOT", "Plane flyer"],
      ["CORRECT", "Right"],
      ["IMMUNE", "Resistant to disease"],
    ]},
  ]},
  // 341
  { groups: [
    { category: "On the ceiling", difficulty: 0, words: [
      ["FAN", "Supporter"],
      ["SPRINKLER", "Lawn waterer"],
      ["VENT", "Express anger"],
      ["CHANDELIER", "Crystal light fixture"],
    ]},
    { category: "Auto features", difficulty: 1, words: [
      ["SUNROOF", "Car ceiling that opens"],
      ["AIRBAG", "Chatterbox, slangily"],
      ["SPOILER", "Plot revealer"],
      ["BUMPER", "Extra large, as a crop"],
    ]},
    { category: "Things a mechanic replaces", difficulty: 2, words: [
      ["FILTER", "Strain, as coffee"],
      ["BELT", "Sing loudly"],
      ["WIPER", "Windshield cleaner"],
      ["BATTERY", "Assault and ___"],
    ]},
    { category: "Spell another word backward", difficulty: 3, words: [
      ["DIAPER", "Baby's nappy"],
      ["STRAP", "Watch band"],
      ["LIVE", "Not recorded"],
      ["DESSERTS", "Sweets after dinner"],
    ]},
  ]},
  // 342
  { groups: [
    { category: "Desk setup", difficulty: 0, words: [
      ["STAPLER", "Paper fastening gadget"],
      ["MONITOR", "Watch closely"],
      ["KEYBOARD", "Synthesizer, in a band"],
      ["MOUSE", "Small rodent"],
    ]},
    { category: "School rooms", difficulty: 1, words: [
      ["GYM", "Fitness center"],
      ["LAB", "Retriever, for short"],
      ["LIBRARY", "Book-lending building"],
      ["CAFETERIA", "Self-serve dining hall"],
    ]},
    { category: "Undergarments", difficulty: 2, words: [
      ["BOXERS", "Fighters in the ring"],
      ["BRIEFS", "Lawyer's documents"],
      ["SLIP", "Lose your footing"],
      ["THONG", "Flip-flop, in Australia"],
    ]},
    { category: "___shop", difficulty: 3, words: [
      ["WORK", "Labor"],
      ["PAWN", "Lowly chess piece"],
      ["SWEAT", "Perspire"],
      ["TALK", "Speak"],
    ]},
  ]},
  // 343
  { groups: [
    { category: "Backyard features", difficulty: 0, words: [
      ["PATIO", "Paved outdoor area"],
      ["POOL", "Billiards game"],
      ["SHED", "Lose fur"],
      ["HAMMOCK", "Hanging bed between trees"],
    ]},
    { category: "Snow vehicles", difficulty: 1, words: [
      ["SLED", "Rosebud, in Citizen Kane"],
      ["SLEIGH", "Santa's ride"],
      ["TOBOGGAN", "Long flat-bottomed sled"],
      ["SNOWMOBILE", "Motorized ride on skis"],
    ]},
    { category: "Employment", difficulty: 2, words: [
      ["GIG", "Rock concert"],
      ["ROLE", "Actor's part"],
      ["BERTH", "Ship's bunk"],
      ["POSITION", "Stance or posture"],
    ]},
    { category: "Hidden bugs", difficulty: 3, words: [
      ["ANTHEM", "National song"],
      ["MOTHER", "Mom"],
      ["BUGLE", "Brass instrument at reveille"],
      ["TICKET", "Concert pass"],
    ]},
  ]},
  // 344
  { groups: [
    { category: "Pet supplies", difficulty: 0, words: [
      ["LEASH", "Dog walker's strap"],
      ["BOWL", "Play tenpins"],
      ["LITTER", "Trash on the ground"],
      ["TREAT", "Reward"],
    ]},
    { category: "Jobs with animals", difficulty: 1, words: [
      ["VET", "Check thoroughly"],
      ["GROOMER", "Pet hair stylist"],
      ["ZOOKEEPER", "Caretaker of lions and tigers"],
      ["JOCKEY", "Maneuver for position"],
    ]},
    { category: "Sailboat parts", difficulty: 2, words: [
      ["MAST", "Tall pole on a ship"],
      ["BOOM", "Loud bang"],
      ["RUDDER", "Steering blade at the stern"],
      ["JIB", "Front triangular sail"],
    ]},
    { category: "___yard", difficulty: 3, words: [
      ["JUNK", "Trash"],
      ["VINE", "Climbing plant"],
      ["LUMBER", "Move heavily"],
      ["GRAVE", "Serious"],
    ]},
  ]},
  // 345
  { groups: [
    { category: "Kinds of lamps", difficulty: 0, words: [
      ["DESK", "Office workstation"],
      ["FLOOR", "Ground level"],
      ["LAVA", "Volcano's molten rock"],
      ["READING", "Book time"],
    ]},
    { category: "Kinds of trucks", difficulty: 1, words: [
      ["PICKUP", "Improvement, as in sales"],
      ["TANKER", "Oil-carrying ship"],
      ["FLATBED", "Open-backed hauler"],
      ["MIXER", "Social get-together"],
    ]},
    { category: "Wedding wear", difficulty: 2, words: [
      ["VEIL", "Hide or conceal"],
      ["TUXEDO", "Formal black-tie suit"],
      ["GOWN", "Hospital patient's garment"],
      ["GARTER", "Order of knighthood"],
    ]},
    { category: "Hidden capitals", difficulty: 3, words: [
      ["PARISH", "Church district"],
      ["CHROME", "Google web browser"],
      ["FRIGATE", "Warship"],
      ["CLIMAX", "Peak of a story"],
    ]},
  ]},
  // 346
  { groups: [
    { category: "Workout wear", difficulty: 0, words: [
      ["LEGGINGS", "Stretchy tights"],
      ["SHORTS", "Brief films"],
      ["SWEATBAND", "Headband for perspiration"],
      ["LEOTARD", "Gymnast's one-piece"],
    ]},
    { category: "Places to park", difficulty: 1, words: [
      ["GARAGE", "Rock music genre"],
      ["LOT", "Fate in life"],
      ["CURB", "Restrain"],
      ["SPACE", "The final frontier"],
    ]},
    { category: "Newsroom jobs", difficulty: 2, words: [
      ["EDITOR", "Text-editing program"],
      ["REPORTER", "Correspondent"],
      ["ANCHOR", "Ship's heavy weight"],
      ["CRITIC", "Harsh judge"],
    ]},
    { category: "___ roll", difficulty: 3, words: [
      ["EGG", "Omelet base"],
      ["SPRING", "Season after winter"],
      ["HONOR", "Respect"],
      ["BARREL", "Wine cask"],
    ]},
  ]},
  // 347
  { groups: [
    { category: "Flooring", difficulty: 0, words: [
      ["PARQUET", "Wood-block floor pattern"],
      ["TILE", "Square in Scrabble"],
      ["LINOLEUM", "Vinyl-like flooring"],
      ["HARDWOOD", "Oak or maple, e.g."],
    ]},
    { category: "Electrical", difficulty: 1, words: [
      ["OUTLET", "Discount store"],
      ["SWITCH", "Trade places"],
      ["FUSE", "Join together"],
      ["BREAKER", "Large crashing wave"],
    ]},
    { category: "Car noises", difficulty: 2, words: [
      ["HONK", "Goose call"],
      ["PURR", "Contented cat sound"],
      ["VROOM", "Revving engine sound"],
      ["SQUEAL", "Pig's shriek"],
    ]},
    { category: "Hidden AMP", difficulty: 3, words: [
      ["CAMPER", "RV"],
      ["LAMPOON", "Satirize"],
      ["CHAMPION", "Winner"],
      ["TAMPA", "Florida city"],
    ]},
  ]},
  // 348
  { groups: [
    { category: "Plumbing", difficulty: 0, words: [
      ["PIPE", "Smoker's bowl"],
      ["VALVE", "Heart flap"],
      ["FAUCET", "Sink tap"],
      ["SPIGOT", "Outdoor water tap"],
    ]},
    { category: "Paving materials", difficulty: 1, words: [
      ["ASPHALT", "Blacktop"],
      ["GRAVEL", "Low, rough voice"],
      ["TARMAC", "Airport apron"],
      ["CONCRETE", "Real, not abstract"],
    ]},
    { category: "Road crew gear", difficulty: 2, words: [
      ["BARRIER", "Obstacle"],
      ["JACKHAMMER", "Pavement-breaking drill"],
      ["FLAG", "Grow tired"],
      ["SHOVEL", "Spade's cousin"],
    ]},
    { category: "Things you tap", difficulty: 3, words: [
      ["KEG", "Frat party beer barrel"],
      ["SHOULDER", "Arm-to-neck joint"],
      ["MAPLE", "Syrup tree"],
      ["TOE", "Little piggy"],
    ]},
  ]},
  // 349
  { groups: [
    { category: "Car fluids", difficulty: 0, words: [
      ["OIL", "Lubricate"],
      ["COOLANT", "Radiator fluid"],
      ["GASOLINE", "Fuel at the pump"],
      ["ANTIFREEZE", "Winter radiator additive"],
    ]},
    { category: "Kinds of beds", difficulty: 1, words: [
      ["BUNK", "Nonsense"],
      ["COT", "Folding camp bed"],
      ["FUTON", "Japanese floor mattress"],
      ["DAYBED", "Sofa that doubles as a bed"],
    ]},
    { category: "Emergency car kit", difficulty: 2, words: [
      ["SPARE", "Bowling score"],
      ["JACK", "Playing card"],
      ["FLARE", "Bell-bottom widening"],
      ["TRIANGLE", "Three-sided shape"],
    ]},
    { category: "Bed___", difficulty: 3, words: [
      ["ROCK", "Stone"],
      ["SPREAD", "Butter on toast"],
      ["PAN", "Peter of Neverland"],
      ["ROLL", "Bread bun"],
    ]},
  ]},
  // 350
  { groups: [
    { category: "Seating", difficulty: 0, words: [
      ["RECLINER", "Lean-back chair"],
      ["ROCKER", "Punk musician"],
      ["BENCH", "Judge's seat"],
      ["LOVESEAT", "Small sofa for two"],
    ]},
    { category: "Makeup", difficulty: 1, words: [
      ["LIPSTICK", "Tube of color for the mouth"],
      ["MASCARA", "Lash darkener"],
      ["BLUSH", "Turn red in the face"],
      ["POWDER", "Snow skier's dream"],
    ]},
    { category: "Hotel areas", difficulty: 2, words: [
      ["LOBBY", "Pressure politicians"],
      ["SUITE", "Set of musical movements"],
      ["BALLROOM", "Dance hall"],
      ["SPA", "Bubbly hot tub resort"],
    ]},
    { category: "Love ___", difficulty: 3, words: [
      ["BIRD", "Feathered flyer"],
      ["SICK", "Ill"],
      ["SONG", "Tune"],
      ["NEST", "Bird's home"],
    ]},
  ]},
  // 351
  { groups: [
    { category: "Shades of yellow", difficulty: 0, words: [
      ["LEMON", "Defective car"],
      ["MUSTARD", "Colonel in Clue"],
      ["CANARY", "Coal mine songbird"],
      ["BUTTERCUP", "Powerpuff Girl in green"],
    ]},
    { category: "Kinds of trains", difficulty: 1, words: [
      ["EXPRESS", "Say out loud"],
      ["LOCAL", "Nearby resident"],
      ["BULLET", "Gun ammo"],
      ["FREIGHT", "Cargo"],
    ]},
    { category: "Film crew jobs", difficulty: 2, words: [
      ["GAFFER", "Old man, in Britain"],
      ["GRIP", "Firm hold"],
      ["EXTRA", "Additional"],
      ["DIRECTOR", "Board member"],
    ]},
    { category: "Gold___", difficulty: 3, words: [
      ["MINE", "Belongs to me"],
      ["FINCH", "Atticus of Mockingbird"],
      ["SMITH", "Common surname"],
      ["FINGER", "Digit"],
    ]},
  ]},
  // 352
  { groups: [
    { category: "Recyclables", difficulty: 0, words: [
      ["BOTTLE", "Courage, in Britain"],
      ["CAN", "Is able to"],
      ["CARTON", "Box of cigarettes or milk"],
      ["JAR", "Startle"],
    ]},
    { category: "Moving day", difficulty: 1, words: [
      ["TAPE", "Cassette"],
      ["DOLLY", "Famous cloned sheep"],
      ["CRATE", "Slatted wooden box"],
      ["VAN", "Morrison who sang Brown Eyed Girl"],
    ]},
    { category: "Closet fixtures", difficulty: 2, words: [
      ["HANGER", "Coat holder"],
      ["ROD", "Fishing pole"],
      ["SHELF", "Continental ___"],
      ["RACK", "Antlers"],
    ]},
    { category: "___fall", difficulty: 3, words: [
      ["WATER", "Hydrate plants"],
      ["PIT", "Fruit stone"],
      ["NIGHT", "Dark hours"],
      ["DOWN", "Feathery fluff"],
    ]},
  ]},
  // 353
  { groups: [
    { category: "Beachwear", difficulty: 0, words: [
      ["BIKINI", "Pacific atoll"],
      ["SARONG", "Wraparound skirt"],
      ["SWIMSUIT", "Pool outfit"],
      ["COVERUP", "Hiding of a scandal"],
    ]},
    { category: "Ford models", difficulty: 1, words: [
      ["MUSTANG", "Wild horse"],
      ["BRONCO", "Bucking horse"],
      ["FIESTA", "Party"],
      ["FOCUS", "Concentrate"],
    ]},
    { category: "Laundry steps", difficulty: 2, words: [
      ["FOLD", "Give up in poker"],
      ["PRESS", "Journalists"],
      ["RINSE", "Wash with clean water"],
      ["SPIN", "PR twist"],
    ]},
    { category: "Start with a fruit", difficulty: 3, words: [
      ["PEARL", "Oyster gem"],
      ["FIGURE", "Body shape"],
      ["DATELINE", "News story's location header"],
      ["PLUMAGE", "Bird's feathers"],
    ]},
  ]},
  // 354
  { groups: [
    { category: "Grocery aisles", difficulty: 0, words: [
      ["DELI", "Sandwich shop"],
      ["BAKERY", "Bread shop"],
      ["PRODUCE", "Make or create"],
      ["FROZEN", "Disney film with Elsa"],
    ]},
    { category: "Two-wheelers", difficulty: 1, words: [
      ["MOPED", "Sulked"],
      ["SCOOTER", "Kick-pushed toy ride"],
      ["TANDEM", "Working together, in ___"],
      ["MOTORBIKE", "Motorcycle"],
    ]},
    { category: "Tailor's measurements", difficulty: 2, words: [
      ["INSEAM", "Crotch-to-ankle length"],
      ["CHEST", "Treasure box"],
      ["NECK", "Make out"],
      ["SLEEVE", "Record cover"],
    ]},
    { category: "___door", difficulty: 3, words: [
      ["TRAP", "Snare"],
      ["NEXT", "Following"],
      ["BACK", "Support"],
      ["STAGE", "Phase"],
    ]},
  ]},
  // 355
  { groups: [
    { category: "Bosses", difficulty: 0, words: [
      ["CHIEF", "Main, principal"],
      ["MANAGER", "Team skipper in baseball"],
      ["FOREMAN", "Jury leader"],
      ["SUPERVISOR", "Overseer"],
    ]},
    { category: "Skirts", difficulty: 1, words: [
      ["MINI", "Small British car"],
      ["PENCIL", "Writing tool with an eraser"],
      ["TUTU", "Desmond, the archbishop"],
      ["KILT", "Scotsman's tartan wrap"],
    ]},
    { category: "Architecture", difficulty: 2, words: [
      ["DOME", "Bald head, slangily"],
      ["SPIRE", "Church steeple"],
      ["ARCH", "Curve of the foot"],
      ["COLUMN", "Newspaper opinion piece"],
    ]},
    { category: "End with a body part", difficulty: 3, words: [
      ["AIRSHIP", "Zeppelin"],
      ["CHARM", "Lucky trinket"],
      ["APPEAR", "Show up"],
      ["MISTLETOE", "Christmas kissing plant"],
    ]},
  ]},
  // 356
  { groups: [
    { category: "Farm machines", difficulty: 0, words: [
      ["TRACTOR", "Big farm puller"],
      ["PLOW", "Clear snow"],
      ["COMBINE", "Merge"],
      ["BALER", "Hay-bundling machine"],
    ]},
    { category: "Farm buildings", difficulty: 1, words: [
      ["BARN", "Big red farm building"],
      ["SILO", "Isolated department"],
      ["COOP", "Henhouse"],
      ["STABLE", "Steady, unchanging"],
    ]},
    { category: "Car lights", difficulty: 2, words: [
      ["HAZARD", "Danger"],
      ["FOG", "Mist"],
      ["TAIL", "Dog's wagger"],
      ["BRAKE", "Slow down"],
    ]},
    { category: "Hidden jobs", difficulty: 3, words: [
      ["COOKIE", "Oreo, for one"],
      ["MAIDEN", "First, as a voyage"],
      ["VETERAN", "Former soldier"],
      ["MINERAL", "Quartz or calcite"],
    ]},
  ]},
  // 357
  { groups: [
    { category: "Containers", difficulty: 0, words: [
      ["BASKET", "Score with a hoop shot"],
      ["POUCH", "Kangaroo's pocket"],
      ["PAIL", "Sand bucket at the beach"],
      ["CADDY", "Golfer's bag carrier"],
    ]},
    { category: "Bedtime wear", difficulty: 1, words: [
      ["PAJAMAS", "Bananas in ___ (song)"],
      ["ROBE", "Judge's garment"],
      ["SLIPPERS", "Dorothy's ruby shoes"],
      ["NIGHTIE", "Short nightgown"],
    ]},
    { category: "Nautical directions", difficulty: 2, words: [
      ["PORT", "Sweet fortified wine"],
      ["STARBOARD", "Right side of a ship"],
      ["AFT", "Toward the stern"],
      ["LEEWARD", "Away from the wind"],
    ]},
    { category: "Dream___", difficulty: 3, words: [
      ["CATCHER", "Baseball backstop"],
      ["TEAM", "Squad"],
      ["LAND", "Touch down"],
      ["BOAT", "Vessel"],
    ]},
  ]},
  // 358
  { groups: [
    { category: "Party decorations", difficulty: 0, words: [
      ["BALLOON", "Grow rapidly"],
      ["STREAMER", "Online video broadcaster"],
      ["CONFETTI", "Paper bits thrown at parades"],
      ["PINATA", "Candy-filled party target"],
    ]},
    { category: "Spa treatments", difficulty: 1, words: [
      ["FACIAL", "Of the face"],
      ["MASSAGE", "Fudge, as numbers"],
      ["MANICURE", "Nail grooming"],
      ["SAUNA", "Finnish steam room"],
    ]},
    { category: "Airplane seats", difficulty: 2, words: [
      ["AISLE", "Wedding walkway"],
      ["WINDOW", "Time frame for opportunity"],
      ["MIDDLE", "Center"],
      ["BULKHEAD", "Wall dividing a ship's hull"],
    ]},
    { category: "Start with SPA", difficulty: 3, words: [
      ["SPADE", "Card suit"],
      ["SPAWN", "Fish eggs laid"],
      ["SPASM", "Muscle twitch"],
      ["SPARROW", "Small brown bird"],
    ]},
  ]},
  // 359
  { groups: [
    { category: "Real estate terms", difficulty: 0, words: [
      ["DEED", "Heroic act"],
      ["LEASE", "Rental contract"],
      ["MORTGAGE", "Home loan"],
      ["ESCROW", "Third-party holding account"],
    ]},
    { category: "Wedding roles", difficulty: 1, words: [
      ["BRIDE", "Woman getting married"],
      ["GROOM", "Brush a horse"],
      ["BRIDESMAID", "Bride's attendant"],
      ["OFFICIANT", "One who performs a ceremony"],
    ]},
    { category: "House framing", difficulty: 2, words: [
      ["BEAM", "Smile broadly"],
      ["STUD", "Earring type"],
      ["JOIST", "Floor-supporting timber"],
      ["RAFTER", "White-water paddler"],
    ]},
    { category: "Sound like tools", difficulty: 3, words: [
      ["ALL", "Every one"],
      ["PLAIN", "Ordinary"],
      ["ACTS", "Divisions of a play"],
      ["VICE", "Bad habit"],
    ]},
  ]},
  // 360
  { groups: [
    { category: "Chores", difficulty: 0, words: [
      ["DUST", "Fine dry dirt"],
      ["VACUUM", "Empty space"],
      ["SWEEP", "Win every game"],
      ["SCRUB", "Cancel, as a launch"],
    ]},
    { category: "Houses of worship", difficulty: 1, words: [
      ["CHURCH", "Steeple-topped building"],
      ["TEMPLE", "Side of the forehead"],
      ["MOSQUE", "Building with a minaret"],
      ["CHAPEL", "Small place of prayer"],
    ]},
    { category: "Shoe styles", difficulty: 2, words: [
      ["MULE", "Donkey-horse hybrid"],
      ["LOAFER", "Idler"],
      ["OXFORD", "English university city"],
      ["BROGUE", "Irish accent"],
    ]},
    { category: "___mat", difficulty: 3, words: [
      ["DOOR", "Entrance"],
      ["YOGA", "Pose practice"],
      ["PLACE", "Location"],
      ["WELCOME", "Greeting"],
    ]},
  ]},
  // 361
  { groups: [
    { category: "Jeans fits", difficulty: 0, words: [
      ["SKINNY", "Very thin"],
      ["BOOTCUT", "Slightly flared jeans style"],
      ["BAGGY", "Loose-fitting"],
      ["RELAXED", "Calm"],
    ]},
    { category: "Fasteners", difficulty: 1, words: [
      ["NAIL", "Fingertip covering"],
      ["SCREW", "Ship's propeller"],
      ["BOLT", "Dash off"],
      ["RIVET", "Hold attention"],
    ]},
    { category: "Necklines", difficulty: 2, words: [
      ["CREW", "Ship's staff"],
      ["SCOOP", "News exclusive"],
      ["COWL", "Monk's hood"],
      ["HALTER", "Horse's head harness"],
    ]},
    { category: "___saw", difficulty: 3, words: [
      ["HACK", "Cough roughly"],
      ["JIG", "Lively Irish dance"],
      ["CHAIN", "Link series"],
      ["BAND", "Musical group"],
    ]},
  ]},
  // 362
  { groups: [
    { category: "Luggage", difficulty: 0, words: [
      ["SUITCASE", "Traveler's bag"],
      ["DUFFEL", "Cylindrical gym bag"],
      ["BACKPACK", "Hiker's bag"],
      ["TRUNK", "Elephant's nose"],
    ]},
    { category: "Formal words for home", difficulty: 1, words: [
      ["ABODE", "Humble ___"],
      ["DWELLING", "Place of residence"],
      ["RESIDENCE", "Where one lives"],
      ["DOMICILE", "Legal home"],
    ]},
    { category: "Construction vehicles", difficulty: 2, words: [
      ["CRANE", "Long-necked bird"],
      ["BULLDOZER", "Earth-pushing machine"],
      ["FORKLIFT", "Pallet lifter"],
      ["DIGGER", "Archaeologist, informally"],
    ]},
    { category: "Back___", difficulty: 3, words: [
      ["FIRE", "Dismiss from a job"],
      ["LOG", "Fireplace fuel"],
      ["SLASH", "Cut with a sword"],
      ["STROKE", "Pet gently"],
    ]},
  ]},
  // 363
  { groups: [
    { category: "Financial instruments", difficulty: 0, words: [
      ["BOND", "Connection between close friends"],
      ["SHARE", "Split with a sibling"],
      ["OPTION", "A choice on a menu"],
      ["FUTURE", "Time yet to come"],
    ]},
    { category: "Auction words", difficulty: 1, words: [
      ["BID", "Say farewell, ___ adieu"],
      ["LOT", "Parking area"],
      ["RESERVE", "Book in advance"],
      ["PADDLE", "Canoe oar"],
    ]},
    { category: "Things with bills", difficulty: 2, words: [
      ["DUCK", "Crouch to avoid a ball"],
      ["PELICAN", "Seabird with a throat pouch"],
      ["PLATYPUS", "Egg-laying Australian mammal"],
      ["CAP", "Lid for a pen"],
    ]},
    { category: "___ market", difficulty: 3, words: [
      ["FLEA", "Tiny jumping pest"],
      ["NIGHT", "Time for stargazing"],
      ["MASS", "Church service"],
      ["FREE", "Costing nothing"],
    ]},
  ]},
  // 364
  { groups: [
    { category: "Touchscreen gestures", difficulty: 0, words: [
      ["TAP", "Faucet"],
      ["SWIPE", "Steal, casually"],
      ["ZOOM", "Move very fast"],
      ["FLICK", "Movie, slangily"],
    ]},
    { category: "Group chat content", difficulty: 1, words: [
      ["EMOJI", "Tiny smiley picture"],
      ["MEME", "Viral joke image"],
      ["GIF", "Looping animated image"],
      ["STICKER", "Decal for a laptop"],
    ]},
    { category: "Things you feed", difficulty: 2, words: [
      ["METER", "Parking spot coin-taker"],
      ["TROLL", "Bridge-dwelling creature"],
      ["JUKEBOX", "Coin-op music machine"],
      ["KITTY", "Pet cat, to a toddler"],
    ]},
    { category: "Hidden BIT", difficulty: 3, words: [
      ["ORBIT", "Path around a planet"],
      ["HABIT", "Nun's garment"],
      ["EXHIBIT", "Museum display"],
      ["AMBITION", "Drive to succeed"],
    ]},
  ]},
  // 365
  { groups: [
    { category: "Assignments", difficulty: 0, words: [
      ["HOMEWORK", "After-school task"],
      ["PROJECT", "Display onto a screen"],
      ["REPORT", "Loud bang of a gun"],
      ["WORKSHEET", "Page of practice problems"],
    ]},
    { category: "Class years", difficulty: 1, words: [
      ["FRESHMAN", "First-year"],
      ["SOPHOMORE", "Second album's slump, often"],
      ["JUNIOR", "Son named after Dad"],
      ["SENIOR", "Retiree, e.g."],
    ]},
    { category: "Pass the ___", difficulty: 2, words: [
      ["BUCK", "Male deer"],
      ["SALT", "Pepper's partner"],
      ["BATON", "Conductor's stick"],
      ["HAT", "Cap or beret"],
    ]},
    { category: "Sound like two letters", difficulty: 3, words: [
      ["ENVY", "The green-eyed monster"],
      ["EASY", "Not difficult"],
      ["CUTIE", "Adorable person"],
      ["ESSAY", "Five-paragraph assignment"],
    ]},
  ]},
  // 366
  { groups: [
    { category: "Bank accounts", difficulty: 0, words: [
      ["CHECKING", "Verifying"],
      ["SAVINGS", "Daylight ___ Time"],
      ["JOINT", "Knee or elbow"],
      ["ESCROW", "Funds held by a third party"],
    ]},
    { category: "Loan vocabulary", difficulty: 1, words: [
      ["INTEREST", "Curiosity"],
      ["TERM", "Semester"],
      ["LENDER", "One who loans"],
      ["COSIGNER", "Second signature on a lease"],
    ]},
    { category: "Things you break", difficulty: 2, words: [
      ["RECORD", "Vinyl album"],
      ["BREAD", "Sandwich slices"],
      ["CURFEW", "Teen's time to be home"],
      ["PROMISE", "Pinky swear"],
    ]},
    { category: "___ jar", difficulty: 3, words: [
      ["COOKIE", "Browser tracking file"],
      ["TIP", "Pointy end"],
      ["MASON", "Stone worker"],
      ["SWEAR", "Take an oath"],
    ]},
  ]},
  // 367
  { groups: [
    { category: "Valentine's Day symbols", difficulty: 0, words: [
      ["ARROW", "Archer's projectile"],
      ["CUPID", "Winged archer"],
      ["HEART", "Organ that pumps blood"],
      ["CARD", "Ace or king, e.g."],
    ]},
    { category: "Easter things", difficulty: 1, words: [
      ["CHICK", "Baby hen"],
      ["PEEPS", "Marshmallow candy birds"],
      ["LILY", "Pond pad flower"],
      ["BONNET", "Baby's tied-on hat"],
    ]},
    { category: "Fourth of July", difficulty: 2, words: [
      ["FIREWORKS", "Heated argument, figuratively"],
      ["FLAG", "Mark for attention"],
      ["PARADE", "Procession down Main Street"],
      ["PICNIC", "Lunch on a blanket outdoors"],
    ]},
    { category: "___ hunt", difficulty: 3, words: [
      ["TREASURE", "Pirate's buried chest"],
      ["JOB", "Work position"],
      ["BARGAIN", "Haggle over a price"],
      ["MAN", "Adult male"],
    ]},
  ]},
  // 368
  { groups: [
    { category: "Tech companies", difficulty: 0, words: [
      ["ADOBE", "Sun-dried clay brick"],
      ["GOOGLE", "Look something up online"],
      ["ORACLE", "Prophet of Delphi"],
      ["INTEL", "Spy's gathered information"],
    ]},
    { category: "Email terms", difficulty: 1, words: [
      ["INBOX", "Where new messages land"],
      ["SPAM", "Canned luncheon meat"],
      ["DRAFT", "Cold breeze through a window"],
      ["ATTACHMENT", "Emotional bond"],
    ]},
    { category: "Server room gear", difficulty: 2, words: [
      ["SERVER", "Waiter"],
      ["RACK", "Spice holder"],
      ["ROUTER", "Woodworking cutting tool"],
      ["CABLE", "TV subscription"],
    ]},
    { category: "Apple products minus the i", difficulty: 3, words: [
      ["PAD", "Lily ___"],
      ["POD", "Pea's casing"],
      ["MAC", "Raincoat, in Britain"],
      ["TUNES", "Melodies"],
    ]},
  ]},
  // 369
  { groups: [
    { category: "Excellent, in slang", difficulty: 0, words: [
      ["RAD", "Gnarly, dude!"],
      ["SICK", "Under the weather"],
      ["FLY", "Buzzing pest"],
      ["LIT", "Set aflame"],
    ]},
    { category: "Piece of ___", difficulty: 1, words: [
      ["CAKE", "Birthday dessert"],
      ["MIND", "Brain's thinking part"],
      ["WORK", "Job"],
      ["ADVICE", "Counsel"],
    ]},
    { category: "Kick back", difficulty: 2, words: [
      ["CHILL", "Cold feeling"],
      ["RELAX", "Unwind"],
      ["LOUNGE", "Airport waiting area"],
      ["VEG", "Carrot or pea, for short"],
    ]},
    { category: "Hang ___", difficulty: 3, words: [
      ["TEN", "Perfect score"],
      ["GLIDER", "Motorless aircraft"],
      ["NAIL", "Hammer's target"],
      ["TIME", "Hours and minutes"],
    ]},
  ]},
  // 370
  { groups: [
    { category: "Sneaker brands", difficulty: 0, words: [
      ["NIKE", "Greek goddess of victory"],
      ["REEBOK", "Boston-born shoe company"],
      ["VANS", "Minibuses for families"],
      ["ASICS", "Japanese running-shoe maker"],
    ]},
    { category: "Running words", difficulty: 1, words: [
      ["PACE", "Walk back and forth"],
      ["STRIDE", "Take it in ___"],
      ["LAP", "Seat formed by thighs"],
      ["JOG", "Nudge, as a memory"],
    ]},
    { category: "Things with stripes", difficulty: 2, words: [
      ["ZEBRA", "Black-and-white African horse"],
      ["BARCODE", "Scanned at checkout"],
      ["REFEREE", "Whistle-blowing official"],
      ["SKUNK", "Shut out an opponent, slangily"],
    ]},
    { category: "___ ray", difficulty: 3, words: [
      ["MANTA", "Giant ocean glider"],
      ["STING", "Bee's painful jab"],
      ["SUN", "Star at our system's center"],
      ["HEAT", "Miami NBA team"],
    ]},
  ]},
  // 371
  { groups: [
    { category: "Kinds of schools", difficulty: 0, words: [
      ["CHARTER", "Rent a boat or plane"],
      ["BOARDING", "Getting on a plane"],
      ["PRIVATE", "Lowest Army rank"],
      ["MAGNET", "Fridge decoration"],
    ]},
    { category: "School staff", difficulty: 1, words: [
      ["PRINCIPAL", "Loan amount before interest"],
      ["COUNSELOR", "Summer camp leader"],
      ["COACH", "Economy class on a plane"],
      ["JANITOR", "Custodian"],
    ]},
    { category: "Graduation day", difficulty: 2, words: [
      ["GOWN", "Ballroom dress"],
      ["TASSEL", "Dangling fringe ornament"],
      ["DIPLOMA", "Official certificate of study"],
      ["SPEECH", "Talk given at a podium"],
    ]},
    { category: "___book", difficulty: 3, words: [
      ["FACE", "Clock's front"],
      ["COOK", "Chef"],
      ["YEAR", "Twelve months"],
      ["NOTE", "Musical symbol"],
    ]},
  ]},
  // 372
  { groups: [
    { category: "Winter things", difficulty: 0, words: [
      ["FROST", "Poet Robert"],
      ["SLED", "Runner-equipped ride"],
      ["MITTEN", "Thumb-only glove"],
      ["ICICLE", "Hanging frozen spike"],
    ]},
    { category: "Autumn sights", difficulty: 1, words: [
      ["ACORN", "Squirrel's stash"],
      ["HAYRIDE", "Wagon trip on bales"],
      ["SCARECROW", "Dorothy's brainless friend"],
      ["CIDER", "Pressed apple drink"],
    ]},
    { category: "New Year's Eve", difficulty: 2, words: [
      ["TOAST", "Browned bread slice"],
      ["BALL", "Round toy"],
      ["RESOLUTION", "Screen sharpness, in pixels"],
      ["CONFETTI", "Paper bits thrown at parties"],
    ]},
    { category: "___break", difficulty: 3, words: [
      ["JAIL", "Lockup"],
      ["SPRING", "Coiled metal piece"],
      ["WIND", "Breeze"],
      ["TIE", "Neckwear for a suit"],
    ]},
  ]},
  // 373
  { groups: [
    { category: "Kinds of insurance", difficulty: 0, words: [
      ["AUTO", "Car, for short"],
      ["HEALTH", "Wellness"],
      ["TRAVEL", "Go on a trip"],
      ["DENTAL", "Related to teeth"],
    ]},
    { category: "Price reductions", difficulty: 1, words: [
      ["DISCOUNT", "Dismiss as unimportant"],
      ["MARKDOWN", "Lightweight text formatting syntax"],
      ["REBATE", "Partial refund by mail"],
      ["COUPON", "Clipped from a Sunday paper"],
    ]},
    { category: "Tooth ___", difficulty: 2, words: [
      ["FAIRY", "Tinker Bell, e.g."],
      ["BRUSH", "Painter's tool"],
      ["PICK", "Choose"],
      ["PASTE", "Glue made from flour"],
    ]},
    { category: "CO___", difficulty: 3, words: [
      ["PAY", "Salary"],
      ["PILOT", "Plane flier"],
      ["AUTHOR", "Writer"],
      ["EXIST", "Be"],
    ]},
  ]},
  // 374
  { groups: [
    { category: "Web browsers", difficulty: 0, words: [
      ["CHROME", "Shiny metal plating"],
      ["FIREFOX", "Browser with a flaming fox logo"],
      ["EDGE", "Border or rim"],
      ["OPERA", "Sung drama"],
    ]},
    { category: "Journeys", difficulty: 1, words: [
      ["CRUISE", "Tom of Top Gun"],
      ["TREK", "Star ___"],
      ["VOYAGE", "Long sea journey"],
      ["ODYSSEY", "Honda minivan"],
    ]},
    { category: "Things that crash", difficulty: 2, words: [
      ["WAVE", "Hand gesture hello"],
      ["CYMBAL", "Drummer's brass plate"],
      ["PARTY", "Birthday celebration"],
      ["PLANE", "Flat surface"],
    ]},
    { category: "Anagrams of TEAMS", difficulty: 3, words: [
      ["MATES", "Partners"],
      ["MEATS", "Deli selections"],
      ["STEAM", "Kettle vapor"],
      ["TAMES", "Domesticates"],
    ]},
  ]},
  // 375
  { groups: [
    { category: "Office jobs", difficulty: 0, words: [
      ["MANAGER", "Baseball team's skipper"],
      ["INTERN", "Summer trainee"],
      ["CLERK", "Store checkout worker"],
      ["DIRECTOR", "Film boss who yells cut"],
    ]},
    { category: "Meeting terms", difficulty: 1, words: [
      ["AGENDA", "Hidden motive"],
      ["MINUTES", "Sixty seconds each"],
      ["MOTION", "Movement"],
      ["QUORUM", "Minimum number to hold a vote"],
    ]},
    { category: "Fired, informally", difficulty: 2, words: [
      ["AXED", "Chopped with a hatchet"],
      ["CANNED", "Preserved in tins"],
      ["SACKED", "Tackled the quarterback"],
      ["BOOTED", "Started up a computer"],
    ]},
    { category: "Hidden body parts", difficulty: 3, words: [
      ["CHARM", "Bracelet trinket"],
      ["BEARD", "Chin whiskers"],
      ["ECLIPSE", "Moon blocking the sun"],
      ["ELEGANT", "Stylish and graceful"],
    ]},
  ]},
  // 376
  { groups: [
    { category: "Toy brands", difficulty: 0, words: [
      ["LEGO", "Snap-together plastic brick"],
      ["NERF", "Weaken in a video game update"],
      ["BARBIE", "Aussie slang for grill"],
      ["SLINKY", "Stair-walking spring toy"],
    ]},
    { category: "Toy box finds", difficulty: 1, words: [
      ["YOYO", "Toy on a string"],
      ["KAZOO", "Humming instrument"],
      ["MARBLE", "Polished stone for statues"],
      ["SLIME", "Gooey ooze"],
    ]},
    { category: "Kids build them", difficulty: 2, words: [
      ["FORT", "Army stronghold"],
      ["SANDCASTLE", "Beach creation with a moat"],
      ["SNOWMAN", "Frosty, e.g."],
      ["BIRDHOUSE", "Backyard home for wrens"],
    ]},
    { category: "Backward words", difficulty: 3, words: [
      ["SPOOL", "Thread holder"],
      ["STRESSED", "Under pressure"],
      ["STRAW", "Sipping tube"],
      ["PARTS", "Components"],
    ]},
  ]},
  // 377
  { groups: [
    { category: "Nonsense", difficulty: 0, words: [
      ["BUNK", "Camp bed stacked on another"],
      ["HOGWASH", "Pig slop"],
      ["BALONEY", "Deli meat, alternate spelling"],
      ["RUBBISH", "British word for trash"],
    ]},
    { category: "Things with beds", difficulty: 1, words: [
      ["RIVER", "Flowing body of water"],
      ["PICKUP", "Casual game of hoops, ___ game"],
      ["OYSTER", "Pearl producer"],
      ["GARDEN", "Vegetable plot"],
    ]},
    { category: "Hit the ___", difficulty: 2, words: [
      ["ROAD", "Street"],
      ["BOOKS", "Novels and such"],
      ["JACKPOT", "Slot machine top prize"],
      ["HAY", "Dried grass for horses"],
    ]},
    { category: "___ dream", difficulty: 3, words: [
      ["LUCID", "Clear-headed"],
      ["DAY", "Twenty-four hours"],
      ["AMERICAN", "Yankee"],
      ["FEVER", "High temperature"],
    ]},
  ]},
  // 378
  { groups: [
    { category: "Hanukkah things", difficulty: 0, words: [
      ["MENORAH", "Nine-branched candelabrum"],
      ["DREIDEL", "Spinning top with Hebrew letters"],
      ["LATKE", "Potato pancake"],
      ["GELT", "Chocolate coins"],
    ]},
    { category: "St. Patrick's Day", difficulty: 1, words: [
      ["SHAMROCK", "Three-leaf plant"],
      ["LEPRECHAUN", "Irish trickster with gold"],
      ["BAGPIPE", "Instrument with drones"],
      ["RAINBOW", "Arc after a storm"],
    ]},
    { category: "Birthday party", difficulty: 2, words: [
      ["BALLOON", "Grow rapidly, like debt"],
      ["CANDLE", "Wax light with a wick"],
      ["PINATA", "Candy-filled thing you whack"],
      ["PRESENT", "Here, at roll call"],
    ]},
    { category: "Lucky ___", difficulty: 3, words: [
      ["SEVEN", "Days in a week"],
      ["CHARMS", "Bracelet trinkets"],
      ["STREAK", "Run of wins"],
      ["NUMBER", "Digit"],
    ]},
  ]},
  // 379
  { groups: [
    { category: "Accounting terms", difficulty: 0, words: [
      ["ASSET", "Valuable quality in a person"],
      ["DEBIT", "Card that pulls from checking"],
      ["CREDIT", "Recognition for work"],
      ["LEDGER", "Heath who played the Joker"],
    ]},
    { category: "At the movies", difficulty: 1, words: [
      ["SCREEN", "Filter job applicants"],
      ["POPCORN", "Buttered snack"],
      ["TICKET", "Speeding fine"],
      ["TRAILER", "Mobile home"],
    ]},
    { category: "Things you balance", difficulty: 2, words: [
      ["BUDGET", "Spending plan"],
      ["DIET", "Eating plan"],
      ["EQUATION", "Math statement with an equals sign"],
      ["TIRES", "Grows weary"],
    ]},
    { category: "Rhymes with money", difficulty: 3, words: [
      ["BUNNY", "Ski slope for beginners, ___ hill"],
      ["FUNNY", "Hilarious"],
      ["SUNNY", "Cloudless"],
      ["RUNNY", "Like a drippy nose"],
    ]},
  ]},
  // 380
  { groups: [
    { category: "Mouse actions", difficulty: 0, words: [
      ["CLICK", "Tongue sound"],
      ["SCROLL", "Ancient rolled document"],
      ["DRAG", "Boring chore, slangily"],
      ["HOVER", "Stay suspended in midair"],
    ]},
    { category: "Laptop parts", difficulty: 1, words: [
      ["TRACKPAD", "Finger-swiped mousing surface"],
      ["WEBCAM", "Video-call lens"],
      ["HINGE", "Door's pivot"],
      ["BEZEL", "Ring around a watch face"],
    ]},
    { category: "They hover", difficulty: 2, words: [
      ["DRAGONFLY", "Four-winged pond flier"],
      ["HUMMINGBIRD", "Tiny fast-winged bird"],
      ["HELICOPTER", "Overbearing kind of parent"],
      ["BLIMP", "Goodyear airship"],
    ]},
    { category: "Start with a keyboard key", difficulty: 3, words: [
      ["SHIFTY", "Evasive and sneaky"],
      ["ALTO", "Voice below soprano"],
      ["ENDURE", "Withstand"],
      ["TABLOID", "Gossipy newspaper"],
    ]},
  ]},
  // 381
  { groups: [
    { category: "Book formats", difficulty: 0, words: [
      ["HARDCOVER", "Rigid-bound edition"],
      ["PAPERBACK", "Soft-bound edition"],
      ["EBOOK", "Kindle download"],
      ["AUDIOBOOK", "Narrated version"],
    ]},
    { category: "Parts of the school day", difficulty: 1, words: [
      ["RECESS", "Alcove in a wall"],
      ["LUNCH", "Midday meal"],
      ["HOMEROOM", "Morning attendance class"],
      ["ASSEMBLY", "Putting together furniture"],
    ]},
    { category: "Book genres", difficulty: 2, words: [
      ["MYSTERY", "Unsolved puzzle"],
      ["ROMANCE", "Courtship"],
      ["FANTASY", "Daydream"],
      ["THRILLER", "Michael Jackson album"],
    ]},
    { category: "Lunch ___", difficulty: 3, words: [
      ["BOX", "Square container"],
      ["MONEY", "Cash"],
      ["BREAK", "Snap in two"],
      ["TRAY", "Serving platter"],
    ]},
  ]},
  // 382
  { groups: [
    { category: "Summer fun", difficulty: 0, words: [
      ["BEACH", "Sandy shore"],
      ["POOL", "Combine resources"],
      ["CAMP", "Tent site"],
      ["SURF", "Channel-flip"],
    ]},
    { category: "Signs of spring", difficulty: 1, words: [
      ["CROCUS", "Early purple bloom"],
      ["THAW", "Melt, as ice"],
      ["BLOSSOM", "Develop and flourish"],
      ["SHOWER", "Bathroom wash"],
    ]},
    { category: "Gift wrapping", difficulty: 2, words: [
      ["RIBBON", "Award for a fair winner"],
      ["BOW", "Archer's weapon"],
      ["TISSUE", "Facial ___"],
      ["TAG", "Playground chase game"],
    ]},
    { category: "___ camp", difficulty: 3, words: [
      ["SUMMER", "Season of heat"],
      ["BASE", "Home plate, e.g."],
      ["BAND", "Musical group"],
      ["TRAINING", "Practice regimen"],
    ]},
  ]},
  // 383
  { groups: [
    { category: "Whodunit elements", difficulty: 0, words: [
      ["ALIBI", "Proof you were elsewhere"],
      ["MOTIVE", "Reason behind it"],
      ["SUSPECT", "Have a hunch"],
      ["CULPRIT", "Guilty party"],
    ]},
    { category: "Clue weapons", difficulty: 1, words: [
      ["ROPE", "Lasso material"],
      ["CANDLESTICK", "Taper holder"],
      ["REVOLVER", "Beatles album"],
      ["DAGGER", "Obelisk symbol in typography"],
    ]},
    { category: "Clue rooms", difficulty: 2, words: [
      ["STUDY", "Cram for a test"],
      ["HALL", "Long corridor"],
      ["KITCHEN", "Cooking room"],
      ["LIBRARY", "Book-lending building"],
    ]},
    { category: "___house", difficulty: 3, words: [
      ["FARM", "Old MacDonald had one"],
      ["DOG", "Man's best friend"],
      ["GUEST", "Visitor"],
      ["BOAT", "Rowing vessel"],
    ]},
  ]},
  // 384
  { groups: [
    { category: "Goodbyes", difficulty: 0, words: [
      ["CIAO", "Italian hello, too"],
      ["ADIOS", "Spanish farewell"],
      ["FAREWELL", "Retirement party, often"],
      ["LATER", "Afterward"],
    ]},
    { category: "Friends, informally", difficulty: 1, words: [
      ["BUDDY", "Elf character played by Will Ferrell"],
      ["PAL", "Gal ___ (female friend)"],
      ["CHUM", "Fish bait"],
      ["MATE", "Chess finish, for short"],
    ]},
    { category: "Laughs", difficulty: 2, words: [
      ["GIGGLE", "Schoolkid's titter"],
      ["CHUCKLE", "Soft quiet laugh"],
      ["SNICKER", "Sly, smug laugh"],
      ["CACKLE", "Witch's laugh"],
    ]},
    { category: "___ship", difficulty: 3, words: [
      ["HARD", "Difficult"],
      ["TOWN", "Small city"],
      ["OWNER", "Proprietor"],
      ["LEADER", "Head of the pack"],
    ]},
  ]},
  // 385
  { groups: [
    { category: "Monthly bills", difficulty: 0, words: [
      ["RENT", "Torn, as fabric"],
      ["MORTGAGE", "Home loan"],
      ["ELECTRIC", "Charged with excitement"],
      ["PHONE", "Call up"],
    ]},
    { category: "Video game terms", difficulty: 1, words: [
      ["SPAWN", "Fish eggs"],
      ["BOSS", "Workplace supervisor"],
      ["AVATAR", "James Cameron's blue film"],
      ["CHEAT", "Copy on a test"],
    ]},
    { category: "Things with buttons", difficulty: 2, words: [
      ["REMOTE", "Far away"],
      ["ELEVATOR", "Lift"],
      ["SHIRT", "Tee, e.g."],
      ["BELLY", "Tummy"],
    ]},
    { category: "Hidden boats", difficulty: 3, words: [
      ["CRAFTY", "Cunning"],
      ["MARKET", "Grocery store"],
      ["WORSHIP", "Adore"],
      ["EYELINER", "Makeup pencil"],
    ]},
  ]},
  // 386
  { groups: [
    { category: "College words", difficulty: 0, words: [
      ["DORM", "Student residence hall"],
      ["QUAD", "Four-wheeled ATV, for short"],
      ["DEAN", "Actor James of Rebel Without a Cause"],
      ["CAMPUS", "School grounds"],
    ]},
    { category: "Ivy League schools", difficulty: 1, words: [
      ["YALE", "Lock brand"],
      ["BROWN", "Color of chocolate"],
      ["CORNELL", "Ithaca university"],
      ["PENN", "Magician paired with Teller"],
    ]},
    { category: "Greek life words", difficulty: 2, words: [
      ["RUSH", "Hurry"],
      ["PLEDGE", "Allegiance promise"],
      ["CHAPTER", "Book section"],
      ["MIXER", "Stand appliance for dough"],
    ]},
    { category: "Hidden MIT", difficulty: 3, words: [
      ["SUMMIT", "Mountain peak"],
      ["LIMIT", "Speed cap"],
      ["SMITH", "Common English surname"],
      ["HERMIT", "Recluse"],
    ]},
  ]},
  // 387
  { groups: [
    { category: "Rich", difficulty: 0, words: [
      ["WEALTHY", "Very well-off"],
      ["LOADED", "Fully stocked, like a baked potato"],
      ["AFFLUENT", "Prosperous"],
      ["FLUSH", "Toilet lever action"],
    ]},
    { category: "Poor", difficulty: 1, words: [
      ["BROKE", "Shattered"],
      ["NEEDY", "Clingy"],
      ["STRAPPED", "Buckled in"],
      ["BANKRUPT", "Insolvent"],
    ]},
    { category: "___ table", difficulty: 2, words: [
      ["COFFEE", "Morning brew"],
      ["POKER", "Fireplace iron rod"],
      ["PERIODIC", "Recurring at intervals"],
      ["ROUND", "Shaped like a circle"],
    ]},
    { category: "Hidden CENT", difficulty: 3, words: [
      ["SCENT", "Fragrance"],
      ["DECENT", "Respectable"],
      ["ACCENT", "Way of pronouncing words"],
      ["RECENT", "Not long ago"],
    ]},
  ]},
  // 388
  { groups: [
    { category: "Mardi Gras sights", difficulty: 0, words: [
      ["BEADS", "Drops of sweat"],
      ["MASK", "Snorkeler's eyewear"],
      ["FLOAT", "Bob on water"],
      ["JESTER", "Court fool"],
    ]},
    { category: "Carnival cities", difficulty: 1, words: [
      ["RIO", "___ Grande"],
      ["VENICE", "City of canals"],
      ["TRINIDAD", "___ and Tobago"],
      ["NICE", "Pleasant"],
    ]},
    { category: "They wear masks", difficulty: 2, words: [
      ["SURGEON", "Operating-room doctor"],
      ["CATCHER", "Squatter behind home plate"],
      ["GOALIE", "Net minder"],
      ["BANDIT", "Outlaw"],
    ]},
    { category: "Fat ___", difficulty: 3, words: [
      ["CHANCE", "Opportunity"],
      ["LIP", "Mouth edge"],
      ["CAT", "Purring pet"],
      ["TUESDAY", "Day after Monday"],
    ]},
  ]},
  // 389
  { groups: [
    { category: "Webpage elements", difficulty: 0, words: [
      ["HEADER", "Soccer shot off the noggin"],
      ["FOOTER", "Bottom margin text"],
      ["BANNER", "Parade sign"],
      ["SIDEBAR", "Aside in a news story"],
    ]},
    { category: "Domain suffixes", difficulty: 1, words: [
      ["COM", "Dot-___ bubble"],
      ["ORG", "Nonprofit web ending"],
      ["EDU", "College web ending"],
      ["GOV", "Federal website ending"],
    ]},
    { category: "They charge", difficulty: 2, words: [
      ["LAWYER", "Attorney"],
      ["RHINO", "Horned African beast"],
      ["CAVALRY", "Horse soldiers"],
      ["BATTERY", "Assault and ___"],
    ]},
    { category: "___ fighter", difficulty: 3, words: [
      ["PRIZE", "Reward"],
      ["CRIME", "Lawbreaking"],
      ["STREET", "Avenue"],
      ["FREEDOM", "Liberty"],
    ]},
  ]},
  // 390
  { groups: [
    { category: "Business casual", difficulty: 0, words: [
      ["BLAZER", "Portland NBA player"],
      ["KHAKIS", "Tan trousers"],
      ["LOAFERS", "Idle people"],
      ["OXFORD", "English university city"],
    ]},
    { category: "Fast", difficulty: 1, words: [
      ["RAPID", "River whitewater"],
      ["SWIFT", "Taylor the pop star"],
      ["BRISK", "Chilly and refreshing"],
      ["FLEET", "Group of ships"],
    ]},
    { category: "Clothes, slangily", difficulty: 2, words: [
      ["THREADS", "Online conversation chains"],
      ["DUDS", "Failures"],
      ["GETUP", "Costume or outfit"],
      ["DRIP", "Leaky faucet sound"],
    ]},
    { category: "Cat's ___", difficulty: 3, words: [
      ["PAJAMAS", "Bedtime outfit"],
      ["MEOW", "Feline sound"],
      ["WHISKERS", "Cheek hairs"],
      ["CRADLE", "Baby's rocking bed"],
    ]},
  ]},
  // 391
  { groups: [
    { category: "Car brands", difficulty: 0, words: [
      ["SUBARU", "Outback maker"],
      ["HONDA", "Civic maker"],
      ["TOYOTA", "Camry maker"],
      ["KIA", "Korean maker of the Soul"],
    ]},
    { category: "Animal car models", difficulty: 1, words: [
      ["MUSTANG", "Wild horse"],
      ["BEETLE", "Hard-shelled insect"],
      ["IMPALA", "African antelope"],
      ["VIPER", "Venomous snake"],
    ]},
    { category: "Car-buying terms", difficulty: 2, words: [
      ["LEASE", "Rent long-term"],
      ["WARRANTY", "Repair guarantee"],
      ["MILEAGE", "Odometer reading"],
      ["DEALER", "Card handler at blackjack"],
    ]},
    { category: "___ trip", difficulty: 3, words: [
      ["GUILT", "Feeling of having done wrong"],
      ["EGO", "Sense of self"],
      ["POWER", "Electricity supply"],
      ["FIELD", "Meadow"],
    ]},
  ]},
  // 392
  { groups: [
    { category: "On a business card", difficulty: 0, words: [
      ["TITLE", "Book's name"],
      ["EMAIL", "Inbox message"],
      ["LOGO", "Brand symbol"],
      ["ADDRESS", "Speech to a crowd"],
    ]},
    { category: "Startup lingo", difficulty: 1, words: [
      ["PITCH", "Baseball throw"],
      ["PIVOT", "Basketball footwork move"],
      ["SEED", "Apple pip"],
      ["UNICORN", "Horned mythical horse"],
    ]},
    { category: "Companies go ___", difficulty: 2, words: [
      ["PUBLIC", "Open to all"],
      ["BUST", "Statue of a head"],
      ["GLOBAL", "Worldwide"],
      ["VIRAL", "Spreading like a germ"],
    ]},
    { category: "___ tank", difficulty: 3, words: [
      ["SHARK", "Toothy predator"],
      ["THINK", "Ponder"],
      ["GAS", "Fuel"],
      ["DUNK", "Slam ___"],
    ]},
  ]},
  // 393
  { groups: [
    { category: "Math operations", difficulty: 0, words: [
      ["ADD", "Tack on"],
      ["SUBTRACT", "Take away"],
      ["MULTIPLY", "Breed rapidly"],
      ["DIVIDE", "Split into parts"],
    ]},
    { category: "College degrees", difficulty: 1, words: [
      ["BACHELOR", "Unmarried man"],
      ["MASTER", "Expert"],
      ["DOCTOR", "Physician"],
      ["ASSOCIATE", "Coworker"],
    ]},
    { category: "School clubs", difficulty: 2, words: [
      ["CHESS", "Game of kings"],
      ["DRAMA", "Theatrics"],
      ["DEBATE", "Argue formally"],
      ["ROBOTICS", "Building machines that move"],
    ]},
    { category: "Spelled with Roman numerals", difficulty: 3, words: [
      ["MIX", "Stir together"],
      ["CIVIL", "Polite"],
      ["LIVID", "Furious"],
      ["MIMIC", "Copycat"],
    ]},
  ]},
  // 394
  { groups: [
    { category: "Winter sports", difficulty: 0, words: [
      ["SKIING", "Downhill pursuit"],
      ["HOCKEY", "Puck sport"],
      ["CURLING", "Using an iron on hair"],
      ["LUGE", "Feet-first sled race"],
    ]},
    { category: "Winter warm-ups", difficulty: 1, words: [
      ["COCOA", "Chocolate powder"],
      ["BROTH", "Soup base"],
      ["TODDY", "Hot whiskey drink"],
      ["EGGNOG", "Holiday custard drink"],
    ]},
    { category: "Frosted ___", difficulty: 2, words: [
      ["GLASS", "Window material"],
      ["FLAKES", "Unreliable people"],
      ["TIPS", "Helpful hints"],
      ["DONUT", "Ring-shaped pastry"],
    ]},
    { category: "Snow ___", difficulty: 3, words: [
      ["GLOBE", "Spherical world map"],
      ["PLOW", "Farm tilling tool"],
      ["ANGEL", "Heavenly being"],
      ["CONE", "Traffic marker"],
    ]},
  ]},
  // 395
  { groups: [
    { category: "Devices", difficulty: 0, words: [
      ["TABLET", "Medicine pill"],
      ["LAPTOP", "Computer for your knees"],
      ["PHONE", "Call up"],
      ["KINDLE", "Light a fire"],
    ]},
    { category: "Edit menu commands", difficulty: 1, words: [
      ["CUT", "Snip with scissors"],
      ["COPY", "Imitate"],
      ["UNDO", "Untie"],
      ["REDO", "Do over"],
    ]},
    { category: "Retro tech", difficulty: 2, words: [
      ["PAGER", "Beeper of the nineties"],
      ["FLOPPY", "Limp, like bunny ears"],
      ["WALKMAN", "Portable cassette player"],
      ["CASSETTE", "Mixtape format"],
    ]},
    { category: "Hidden APP", difficulty: 3, words: [
      ["HAPPY", "Joyful"],
      ["NAPPING", "Dozing"],
      ["SAPPHIRE", "Blue gemstone"],
      ["CHAPPED", "Like lips in winter"],
    ]},
  ]},
  // 396
  { groups: [
    { category: "At the bank", difficulty: 0, words: [
      ["VAULT", "Pole jumper's leap"],
      ["TELLER", "Penn's silent magic partner"],
      ["DEPOSIT", "Down payment"],
      ["ATM", "Cash machine"],
    ]},
    { category: "Gymnastics moves", difficulty: 1, words: [
      ["HANDSTAND", "Upside-down balance"],
      ["CARTWHEEL", "Sideways handspring"],
      ["SPLIT", "Divide the bill"],
      ["FLIP", "Resell a house for profit"],
    ]},
    { category: "Penny-pinchers", difficulty: 2, words: [
      ["MISER", "Hoarder of money"],
      ["SCROOGE", "Dickens's humbug man"],
      ["TIGHTWAD", "Stingy person"],
      ["CHEAPSKATE", "Bargain-hunting skinflint"],
    ]},
    { category: "___ change", difficulty: 3, words: [
      ["CLIMATE", "Long-term weather patterns"],
      ["CHUMP", "Sucker"],
      ["SPARE", "Bowling's second-best result"],
      ["LOOSE", "Not tight"],
    ]},
  ]},
  // 397
  { groups: [
    { category: "Gen Z slang", difficulty: 0, words: [
      ["SLAY", "Defeat a dragon"],
      ["VIBE", "Feeling a place gives off"],
      ["RIZZ", "Charm, in teen talk"],
      ["BET", "Wager"],
    ]},
    { category: "Prom night", difficulty: 1, words: [
      ["CORSAGE", "Wrist flower"],
      ["LIMO", "Stretch car"],
      ["TUXEDO", "Formal black suit"],
      ["DATE", "Sweet palm fruit"],
    ]},
    { category: "Group of friends", difficulty: 2, words: [
      ["SQUAD", "Police unit"],
      ["CREW", "Rowing team"],
      ["POSSE", "Sheriff's band of helpers"],
      ["GANG", "Our ___ (Little Rascals)"],
    ]},
    { category: "Hidden ICE", difficulty: 3, words: [
      ["POLICE", "Officers on patrol"],
      ["OFFICE", "Cubicle setting"],
      ["JUSTICE", "Fairness"],
      ["NOVICE", "Beginner"],
    ]},
  ]},
  // 398
  { groups: [
    { category: "Fashion brands", difficulty: 0, words: [
      ["GAP", "Space between teeth"],
      ["GUESS", "Make an estimate"],
      ["EXPRESS", "Fast train"],
      ["PRADA", "The Devil Wears ___"],
    ]},
    { category: "Fashion show", difficulty: 1, words: [
      ["RUNWAY", "Airport strip"],
      ["MODEL", "Small-scale replica"],
      ["CATWALK", "Narrow raised walkway"],
      ["DESIGNER", "Creator of a plan"],
    ]},
    { category: "Mall sights", difficulty: 2, words: [
      ["KIOSK", "Freestanding booth"],
      ["ESCALATOR", "Moving staircase"],
      ["FOUNTAIN", "Coin-wishing spot"],
      ["ATRIUM", "Heart chamber"],
    ]},
    { category: "___cut", difficulty: 3, words: [
      ["BUZZ", "Bee sound"],
      ["PAPER", "Sheet to write on"],
      ["UPPER", "Higher"],
      ["SHORT", "Not tall"],
    ]},
  ]},
  // 399
  { groups: [
    { category: "Office buzzwords", difficulty: 0, words: [
      ["SYNERGY", "Combined effect"],
      ["BANDWIDTH", "Data transfer capacity"],
      ["LEVERAGE", "Mechanical advantage"],
      ["SILO", "Farm grain tower"],
    ]},
    { category: "Gym equipment", difficulty: 1, words: [
      ["BARBELL", "Long weightlifting bar"],
      ["TREADMILL", "Monotonous routine"],
      ["DUMBBELL", "Dimwit"],
      ["MAT", "Doorway rug"],
    ]},
    { category: "Courtroom", difficulty: 2, words: [
      ["JUDGE", "Evaluate"],
      ["JURY", "Twelve peers"],
      ["GAVEL", "Auctioneer's hammer"],
      ["WITNESS", "See happen"],
    ]},
    { category: "___work", difficulty: 3, words: [
      ["HOME", "Where the heart is"],
      ["TEAM", "Group of players"],
      ["NET", "Fishing mesh"],
      ["FRAME", "Picture border"],
    ]},
  ]},
  // 400
  { groups: [
    { category: "Party games", difficulty: 0, words: [
      ["CHARADES", "Pretenses"],
      ["LIMBO", "Uncertain in-between state"],
      ["TWISTER", "Tornado"],
      ["BINGO", "Exactly right!"],
    ]},
    { category: "Anniversary gifts", difficulty: 1, words: [
      ["TIN", "Can metal"],
      ["CRYSTAL", "Clear quartz"],
      ["LEATHER", "Bomber jacket material"],
      ["PEARL", "Oyster gem"],
    ]},
    { category: "Things you throw", difficulty: 2, words: [
      ["FIT", "Healthy and toned"],
      ["SHADE", "Tree's cool spot"],
      ["TANTRUM", "Toddler meltdown"],
      ["CURVEBALL", "Unexpected twist"],
    ]},
    { category: "___ clock", difficulty: 3, words: [
      ["ALARM", "Fire warning sound"],
      ["CUCKOO", "Crazy"],
      ["BODY", "Torso, head and limbs"],
      ["GRANDFATHER", "Mom's or dad's dad"],
    ]},
  ]},
  // 401
  { groups: [
    { category: "Internet verbs", difficulty: 0, words: [
      ["STREAM", "Babbling brook"],
      ["BROWSE", "Window-shop"],
      ["SEARCH", "Look for"],
      ["UPLOAD", "Send a file to the cloud"],
    ]},
    { category: "Cyber threats", difficulty: 1, words: [
      ["VIRUS", "Flu cause"],
      ["TROJAN", "Citizen of ancient Troy"],
      ["SPYWARE", "Secret tracking software"],
      ["PHISHING", "Scam emails fishing for passwords"],
    ]},
    { category: "Video meeting words", difficulty: 2, words: [
      ["MUTE", "Silent"],
      ["LAG", "Fall behind"],
      ["HOST", "Party giver"],
      ["FREEZE", "Stop moving"],
    ]},
    { category: "Sound like money terms", difficulty: 3, words: [
      ["CACHE", "Hidden supply"],
      ["SENT", "Mailed off"],
      ["DOE", "Female deer"],
      ["LONE", "Solitary"],
    ]},
  ]},
  // 402
  { groups: [
    { category: "Kinds of exams", difficulty: 0, words: [
      ["FINAL", "Last"],
      ["MIDTERM", "Halfway-point test"],
      ["ORAL", "Related to the mouth"],
      ["PLACEMENT", "Positioning"],
    ]},
    { category: "Field trip spots", difficulty: 1, words: [
      ["MUSEUM", "Louvre, e.g."],
      ["ZOO", "Chaotic scene"],
      ["AQUARIUM", "Fish tank"],
      ["PLANETARIUM", "Dome with a starry ceiling"],
    ]},
    { category: "Lunchbox contents", difficulty: 2, words: [
      ["SANDWICH", "Lunch between bread slices"],
      ["NAPKIN", "Lap cloth at dinner"],
      ["JUICE", "Electricity, slangily"],
      ["PUDDING", "Proof is in it"],
    ]},
    { category: "Pop ___", difficulty: 3, words: [
      ["QUIZ", "Test with questions"],
      ["ART", "Painting and sculpture"],
      ["TART", "Sour-tasting"],
      ["GUN", "Starting ___ of a race"],
    ]},
  ]},
  // 403
  { groups: [
    { category: "Travel papers", difficulty: 0, words: [
      ["PASSPORT", "Stamped travel booklet"],
      ["VISA", "Credit card brand"],
      ["ITINERARY", "Trip schedule"],
      ["VOUCHER", "Coupon for later use"],
    ]},
    { category: "Hotel chains", difficulty: 1, words: [
      ["HILTON", "Paris the heiress's surname"],
      ["HYATT", "Regency hotel brand"],
      ["MARRIOTT", "Bonvoy rewards brand"],
      ["WESTIN", "Heavenly Bed hotel brand"],
    ]},
    { category: "Hotel words", difficulty: 2, words: [
      ["LOBBY", "Pressure lawmakers"],
      ["SUITE", "Bach cello piece"],
      ["VALET", "Parking attendant"],
      ["CONCIERGE", "Front-desk helper"],
    ]},
    { category: "Jet ___", difficulty: 3, words: [
      ["SKI", "Glide on snow"],
      ["SET", "Tennis match unit"],
      ["PACK", "Fill a suitcase"],
      ["LINER", "Ocean cruise ship"],
    ]},
  ]},
  // 404
  { groups: [
    { category: "Nervous", difficulty: 0, words: [
      ["JUMPY", "Easily startled"],
      ["ANTSY", "Restless"],
      ["EDGY", "Daringly avant-garde"],
      ["TENSE", "Past or present, in grammar"],
    ]},
    { category: "Cold ___", difficulty: 1, words: [
      ["FEET", "Twelve inches each"],
      ["SHOULDER", "Road edge"],
      ["FRONT", "Weather boundary"],
      ["CALL", "Phone someone"],
    ]},
    { category: "Things that snap", difficulty: 2, words: [
      ["TWIG", "Small branch"],
      ["TURTLE", "Shelled reptile"],
      ["CROCODILE", "Nile reptile"],
      ["FINGERS", "Digits"],
    ]},
    { category: "Start with a bird", difficulty: 3, words: [
      ["EMULATE", "Imitate"],
      ["HENCE", "Therefore"],
      ["DOVETAIL", "Interlocking wood joint"],
      ["JAYWALK", "Cross against the light"],
    ]},
  ]},
  // 405
  { groups: [
    { category: "Kinds of pie", difficulty: 0, words: [
      ["MINCE", "Chop finely"],
      ["CUSTARD", "Eggy dessert"],
      ["PEACH", "Georgia fruit"],
      ["RHUBARB", "Tart red-stalked plant"],
    ]},
    { category: "Pie parts", difficulty: 1, words: [
      ["CRUST", "Bread's outer edge"],
      ["FILLING", "Dentist's cavity fix"],
      ["LATTICE", "Crisscross garden trellis"],
      ["MERINGUE", "Whipped egg-white topping"],
    ]},
    { category: "Big ___", difficulty: 2, words: [
      ["TOP", "Spinning toy"],
      ["WIG", "Hairpiece"],
      ["SHOT", "Vaccine dose"],
      ["DEAL", "Hand out cards"],
    ]},
    { category: "Apple ___", difficulty: 3, words: [
      ["SAUCE", "Ketchup or salsa"],
      ["TURNOVER", "Employee departure rate"],
      ["CORE", "Center"],
      ["JACKS", "Ball-and-star game pieces"],
    ]},
  ]},
];
