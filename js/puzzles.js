// Daily puzzle pool: 40 puzzles, each 4 groups x 4 words.
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
];
