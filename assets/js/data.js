// Wayfarer sample content — fictional tours used across the website UI kit.
window.WF_TRIPS = [
  {
    id: 'kyoto', title: 'Temples & Tea of Kyoto', location: 'Kyoto, Japan', region: 'Asia',
    image: 'https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=900&q=70&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1545569341-9eb8b30979d9?w=900&q=70&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1478436127897-769e1b3f0f36?w=600&q=70&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1524413840807-0c3cb6fa808d?w=600&q=70&auto=format&fit=crop'
    ],
    badge: 'Bestseller', badgeTone: 'marigold', rating: 4.9, reviews: 312, duration: '7 days', price: 1840,
    style: ['Culture', 'Food'], group: 'Max 12', level: 'Easy',
    summary: 'Wander lantern-lit alleys, sip matcha with a tea master, and sleep in a centuries-old ryokan on this slow, soulful week in Japan\u2019s old capital.',
    itinerary: [
      ['Arrive in Kyoto', 'Meet your guide over a welcome kaiseki dinner in Gion.'],
      ['Fushimi Inari at dawn', 'Beat the crowds through a thousand vermilion gates.'],
      ['Arashiyama & bamboo', 'Bamboo grove, monkey park, and a riverside lunch.'],
      ['Tea ceremony', 'A private matcha ceremony with a fifth-generation master.'],
      ['Nara day trip', 'Giant Buddha, friendly deer, and ancient cedar forest.'],
      ['Free day in Kyoto', 'Explore at your pace \u2014 your guide has tips for every mood.'],
      ['Farewell', 'Morning market breakfast before transfers.']
    ]
  },
  {
    id: 'patagonia', title: 'Patagonia Wild Trek', location: 'Torres del Paine, Chile', region: 'Americas',
    image: 'https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=900&q=70&auto=format&fit=crop',
    gallery: [
      'https://images.unsplash.com/photo-1531794343787-71b1f351b9b9?w=600&q=70&auto=format&fit=crop',
      'https://images.unsplash.com/photo-1483728642387-6c3bdd6c93e5?w=600&q=70&auto=format&fit=crop'
    ],
    badge: '2 spots left', badgeTone: 'clay', rating: 4.8, reviews: 154, duration: '9 days', price: 2390,
    style: ['Adventure'], group: 'Max 10', level: 'Challenging',
    summary: 'Trek the legendary W circuit beneath granite spires, sleeping in cozy refugios and crossing glacial valleys with a seasoned mountain guide.',
    itinerary: [
      ['Arrive Punta Arenas', 'Group dinner and trek briefing.'],
      ['Into the park', 'Transfer to Torres del Paine; first valley walk.'],
      ['Base of the Towers', 'The classic ascent to the granite towers.'],
      ['French Valley', 'Hanging glaciers and panoramic ridgelines.'],
      ['Grey Glacier', 'Walk the shore of a vast blue glacier.'],
      ['Rest & kayak', 'Optional paddle among icebergs.'],
      ['Patagonian estancia', 'Asado lunch with local gauchos.'],
      ['Reserve day', 'Weather buffer / free exploring.'],
      ['Departure', 'Transfer back to Punta Arenas.']
    ]
  },
  {
    id: 'morocco', title: 'Atlas Mountains & Marrakech', location: 'Marrakech, Morocco', region: 'Africa',
    image: 'https://images.unsplash.com/photo-1597212618440-806262de4f6b?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: 'Small group', badgeTone: 'pine', rating: 4.7, reviews: 208, duration: '8 days', price: 1560,
    style: ['Culture', 'Adventure'], group: 'Max 12', level: 'Moderate',
    summary: 'From souk to summit \u2014 spice markets and rooftop riads give way to Berber villages and High Atlas trails.',
    itinerary: [['Marrakech medina', 'Souks, gardens, and a rooftop welcome.'], ['Into the Atlas', 'Drive to a mountain village guesthouse.'], ['Berber trails', 'Walk between villages with a local guide.'], ['Summit day', 'Optional ascent for sunrise views.'], ['Desert edge', 'Camel trek and a night under the stars.'], ['Essaouira coast', 'Atlantic breezes and grilled seafood.'], ['Free day', 'Hammam and last-minute haggling.'], ['Farewell', 'Transfer to the airport.']]
  },
  {
    id: 'iceland', title: 'Land of Fire & Ice', location: 'Reykjav\u00edk, Iceland', region: 'Europe',
    image: 'https://images.unsplash.com/photo-1528181304800-259b08848526?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: 'New', badgeTone: 'pine', rating: 4.9, reviews: 96, duration: '6 days', price: 2120,
    style: ['Adventure'], group: 'Max 14', level: 'Easy',
    summary: 'Chase waterfalls, soak in geothermal lagoons, and hunt the northern lights along Iceland\u2019s south coast.',
    itinerary: [['Reykjav\u00edk', 'City walk and welcome dinner.'], ['Golden Circle', 'Geysers, Gullfoss, and tectonic rifts.'], ['South coast', 'Black sand beaches and glacier tongues.'], ['Glacier lagoon', 'Icebergs and Diamond Beach.'], ['Northern lights', 'Evening aurora chase.'], ['Blue Lagoon', 'Soak before departure.']]
  },
  {
    id: 'amalfi', title: 'Amalfi Coast by Vespa', location: 'Amalfi, Italy', region: 'Europe',
    image: 'https://images.unsplash.com/photo-1612698093158-e07ac200d44e?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: null, badgeTone: 'pine', rating: 4.6, reviews: 271, duration: '5 days', price: 1290,
    style: ['Food', 'Culture'], group: 'Max 10', level: 'Easy',
    summary: 'Lemon groves, cliffside villages, and long lunches by the sea \u2014 the dolce vita at scooter pace.',
    itinerary: [['Sorrento', 'Pick up your Vespa and coastal orientation.'], ['Positano', 'Cliffs, beaches, and a seafood feast.'], ['Ravello gardens', 'Hilltop villas and views.'], ['Cooking day', 'Make pasta with a local nonna.'], ['Capri', 'Boat to the Blue Grotto and farewell.']]
  },
  {
    id: 'peru', title: 'Inca Trail to Machu Picchu', location: 'Cusco, Peru', region: 'Americas',
    image: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: 'Bestseller', badgeTone: 'marigold', rating: 4.9, reviews: 488, duration: '8 days', price: 1980,
    style: ['Adventure', 'Culture'], group: 'Max 12', level: 'Challenging',
    summary: 'Acclimatize in Cusco, walk the ancient stone path over high passes, and arrive at the Sun Gate at dawn.',
    itinerary: [['Cusco', 'Acclimatize and explore the old town.'], ['Sacred Valley', 'Markets and Inca terraces.'], ['Trail day 1', 'Into the cloud forest.'], ['Dead Woman\u2019s Pass', 'The high point at 4,215m.'], ['Cloud forest', 'Ruins and orchids.'], ['Sun Gate', 'Dawn arrival at Machu Picchu.'], ['Machu Picchu', 'Full guided tour.'], ['Departure', 'Return to Cusco and fly out.']]
  },
  {
    id: 'santorini', title: 'Cyclades Island Hopper', location: 'Santorini, Greece', region: 'Europe',
    image: 'https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: 'Bestseller', badgeTone: 'marigold', rating: 4.8, reviews: 364, duration: '7 days', price: 1720,
    style: ['Beaches', 'Culture'], group: 'Max 12', level: 'Easy',
    summary: 'Whitewashed villages, caldera sunsets, and slow ferries between Santorini, Naxos, and Paros.',
    itinerary: [['Santorini', 'Caldera walk and a sunset in Oia.'], ['Naxos', 'Ferry over; mountain villages and beaches.'], ['Paros', 'Fishing harbors and sea kayaking.'], ['Island life', 'Cooking class and a winery visit.'], ['Free day', 'Beach time or boat trip.'], ['Delos', 'Ancient ruins by boat.'], ['Farewell', 'Last swim and transfers.']]
  },
  {
    id: 'safari', title: 'Serengeti Migration Safari', location: 'Serengeti, Tanzania', region: 'Africa',
    image: 'https://images.unsplash.com/photo-1516426122078-c23e76319801?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: '3 spots left', badgeTone: 'clay', rating: 4.9, reviews: 198, duration: '9 days', price: 3450,
    style: ['Wildlife', 'Adventure'], group: 'Max 8', level: 'Easy',
    summary: 'Track the great migration across endless plains, with sunrise game drives and nights under canvas.',
    itinerary: [['Arusha', 'Briefing and overnight lodge.'], ['Tarangire', 'Elephants and baobab country.'], ['Serengeti', 'First game drives on the plains.'], ['Migration', 'Follow the herds and river crossings.'], ['Ngorongoro', 'Crater floor full-day safari.'], ['Maasai village', 'Cultural visit and walking safari.'], ['Big cats', 'Dawn drive for lion and cheetah.'], ['Rest day', 'Camp and optional balloon ride.'], ['Departure', 'Fly out from Kilimanjaro.']]
  },
  {
    id: 'vietnam', title: 'Vietnam: Hanoi to Halong', location: 'Hanoi, Vietnam', region: 'Asia',
    image: 'https://images.unsplash.com/photo-1528127269322-539801943592?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: 'New', badgeTone: 'pine', rating: 4.7, reviews: 142, duration: '8 days', price: 1490,
    style: ['Culture', 'Food'], group: 'Max 12', level: 'Easy',
    summary: 'Street food in the old quarter, terraced rice fields, and an overnight cruise through Halong Bay.',
    itinerary: [['Hanoi', 'Old quarter food walk.'], ['Ninh Binh', 'Rowboats through limestone karsts.'], ['Sapa', 'Trek between hill-tribe villages.'], ['Homestay', 'Night with a local family.'], ['Halong Bay', 'Overnight cruise and kayaking.'], ['Hoi An', 'Lantern town and tailors.'], ['Cooking', 'Market tour and class.'], ['Departure', 'Fly home from Da Nang.']]
  },
  {
    id: 'norway', title: 'Norwegian Fjords & Northern Lights', location: 'Troms\u00f8, Norway', region: 'Europe',
    image: 'https://images.unsplash.com/photo-1601439678777-b2b3c56fa627?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: null, badgeTone: 'pine', rating: 4.8, reviews: 176, duration: '6 days', price: 2580,
    style: ['Adventure', 'Wildlife'], group: 'Max 10', level: 'Moderate',
    summary: 'Dog-sledding, fjord cruises, and aurora hunts above the Arctic Circle from a base in Troms\u00f8.',
    itinerary: [['Troms\u00f8', 'Arctic city and cable-car views.'], ['Fjord cruise', 'Silent electric boat among the peaks.'], ['Husky day', 'Dog-sledding across the tundra.'], ['Aurora night', 'Chase the northern lights.'], ['S\u00e1mi culture', 'Reindeer and traditional lavvu lunch.'], ['Departure', 'Morning at leisure, then home.']]
  },
  {
    id: 'newzealand', title: 'New Zealand South Island', location: 'Queenstown, New Zealand', region: 'Oceania',
    image: 'https://images.unsplash.com/photo-1469521669194-babb45599def?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: 'Bestseller', badgeTone: 'marigold', rating: 4.9, reviews: 221, duration: '10 days', price: 2890,
    style: ['Adventure'], group: 'Max 12', level: 'Moderate',
    summary: 'Glaciers, fjords, and alpine lakes \u2014 a road trip through Middle-earth with hikes at every stop.',
    itinerary: [['Queenstown', 'Adventure capital welcome.'], ['Glenorchy', 'Lord of the Rings country.'], ['Wanaka', 'Lakeside and Roys Peak hike.'], ['Franz Josef', 'Glacier walk.'], ['Arthur\u2019s Pass', 'Alpine crossing.'], ['Aoraki', 'Mt Cook and stargazing.'], ['Te Anau', 'Gateway to the fjords.'], ['Milford Sound', 'Cruise the fjord.'], ['Catlins', 'Waterfalls and wildlife.'], ['Departure', 'Fly out from Dunedin.']]
  },
  {
    id: 'jordan', title: 'Petra & Wadi Rum Desert', location: 'Petra, Jordan', region: 'Asia',
    image: 'https://images.unsplash.com/photo-1539768942893-daf53e448371?w=900&q=70&auto=format&fit=crop',
    gallery: [], badge: '2 spots left', badgeTone: 'clay', rating: 4.8, reviews: 167, duration: '7 days', price: 1840,
    style: ['Culture', 'Adventure'], group: 'Max 12', level: 'Moderate',
    summary: 'Walk into the rose-red city of Petra, sleep in a desert camp, and float in the Dead Sea.',
    itinerary: [['Amman', 'Citadel and street food.'], ['Jerash', 'Roman ruins.'], ['Petra', 'The Treasury at dawn.'], ['Petra hikes', 'Monastery trail and high places.'], ['Wadi Rum', 'Jeep safari and desert camp.'], ['Dead Sea', 'Float and mud spa.'], ['Departure', 'Transfer to Amman.']]
  }
];

window.WF_REVIEWS = [
  { name: 'Mara Okafor', photo: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=120&q=70&auto=format&fit=crop', rating: 5, date: 'May 2026', text: 'Our guide turned a great itinerary into the trip of a lifetime. Every detail was handled \u2014 we just had to show up and be amazed.' },
  { name: 'Liam Chen', photo: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&q=70&auto=format&fit=crop', rating: 5, date: 'Apr 2026', text: 'Small group meant we actually got to know each other. Pacing was perfect \u2014 challenging but never rushed.' },
  { name: 'Sofia Reyes', photo: null, rating: 4, date: 'Mar 2026', text: 'Beautiful trip and wonderful food. One travel day was long, but the views more than made up for it.' },
  { name: 'Tom Becker', photo: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=120&q=70&auto=format&fit=crop', rating: 5, date: 'Feb 2026', text: 'Every detail was handled so I could just be present. The small group felt like travelling with friends by day two.' }
];
