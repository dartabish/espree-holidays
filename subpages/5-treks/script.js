const longTreksContainer = document.querySelector('.long-trek-container');
const softTreksContainer = document.querySelector('.soft-trek-container');

const longTreks = [
  {
    id: 'long-trek-1',
    title: 'Kashmir Great Lakes Trek',
    img: 'https://images.unsplash.com/photo-1631420105765-caf5ccd069bc?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      duration: {
        days: 7,
      },
      totalDistance: `75`,
      highestAltitude: `Gadsar Pass (4190 m)`,
      difficulty: `Moderate - Difficult`,
      tourPlan: {
        day1: {
          id: 1,
          title:
            'Day 1: Drive from Srinagar to Shutkadi village, Sonamarg (2400m/7800 ft)  ',
          description: `Drive Distance:80 km | Drive Duration: 2-3 hours |
          <br/>
          Note: The process of your registration, health screening, and document verification starts at 4 pm. Ensure you reach Gagangir on time for it.`,
        },
        day2: {
          id: 2,
          title: 'Day 2: Trek from Shutkadi to Nichnai ',
          description: `Trek Distance:11.6 km | Trek Duration: 6.5 hours | Altitude: 3500m/11,500 ft
          <br/>
          Moderate climb with a combination of moderate to steep ascent through the pine and maple forest section for about 3 hours. This is followed by a descent through a river valley. The final two hours are a trek with a gentle ascent to reach the campsite of Nichnai.
          <br/>
          <i>Meals and Overnight at the campsite</i>`,
        },
        day3: {
          id: 3,
          title: 'Day 3: Trek from Nichnai to Vishnusar ',
          description: `Trek Distance: 13.5 km | Trek Duration: 7 hours | Altitude: 3650m/12000 ft via 4000m/13,100 ft
          <br/>
          A moderate day with a gradual ascent followed by an hour-long climb to the pass. On the top of the Nichnai pass you can get BSNL Network which is the last point under mobile network coverage. From the pass, you need to descend for about an hour easing off into a flat walk to reach the campsite.Lunch will be served there. First lake of the trek and one of the most beautiful ones. 
          <br/>
          In case the weather is not good, you may visit Krishnasar lake, which is at approx. 1 and a half kms from our campsite along the track to Gadsar and acclimatize at Vishansar, or else trek further.
          <br/>
          <i>Meals and Overnight at the campsite</i>`,
        },
        day4: {
          id: 4,
          title: 'Day 4: Trek from Vishnusar to Gadsar via Gadsar Pass ',
          description: `Trek Distance: 15 km | Trek Duration: 7.5 hours | Altitude: 3650 m /12,000 ft via 4200 m /13,850 ft 
          <br/>
          We start the trek earlier than usual. Moderate-Difficult day with a steep ascent to Gadsar Pass (the highest point of the trek) followed by a steep descent, easing off into a longer walk on the wide stretches of meadows.
          <br/>
          <i>Meals and Overnight at the campsite</i>`,
        },
        day5: {
          id: 5,
          title: 'Day 5: Trek from Gadsar to Satsar',
          description: `Trek Distance: 11.5 km | Trek Duration: 4.5 hours | Altitude: 3650 m / 12,000 ft  
          <br/>
          Another moderate day with a steep climb to begin with and then followed by a levelled walk. Once you reach the Maengandob plains, a gradual ascent starts to reach the series of Satsar lakes. 
          <br/>
          <i>Meals and Overnight at the campsite</i>`,
        },
        day6: {
          id: 6,
          title: 'Day 6: Trek from Satsar to Gangabal ',
          description: `Trek Distance: 9 km | Trek Duration: 6 hours | Altitude: 3500m/11,500 ft via 3950m/13000 ft 
          <br/>
          Difficult day with boulder hopping for the first half an hour followed by a steep ascent for about 45 minutes to Jaz pass. At the pass you can enjoy views of the 4 lakes, mt. Harmukh and it’s glacier and then a steep descent to the Gangabal lake and we camp at Nandkol lake. Nundkol lake which is about 20 minutes before Gangabal lake,  lies at the base of the Harmukh peak.  We visit the Gangabal lake, which is also one of the largest lakes in the trek. Both Gangabal and Nundkol lakes are famous for trout fishing. Post dinner, a team of Kashmiri staff will perform their traditional songs and dance   
          <br/>
          <i>Meals and Overnight at the campsite</i>`,
        },
        day7: {
          id: 7,
          title: 'Day 7: Trek from Gangabal to Naranag. Drive to Srinagar ',
          description: `Trek Distance: 13 km | Trek Duration: 6 hours
          <br/>
          Drive Duration: 2 hours | Altitude: 2250m / 7,450 ft  
          <br/>
          Moderate day with a mix of ascents and descents for the half way stage followed by a steep descent all the way down to reach Naranag. The trail will pass through pine tree forest.. After reaching Naranag start the 70 kms drive back to Srinagar. 
          <br/>
          <i>Meals and Overnight at the campsite</i>
          <br/>
          <br/>
          <i class="note">
            <span>Note*</span>: For all your travel plans include a buffer day to accommodate bad weather on the trek/political instability. This depends completely on the circumstances of the trek and the situation in Kashmir. The buffer day is mandatory to keep in your itinerary. 
          </i>
          `,
        },
      },
    },
  },
  {
    id: 'long-trek-2',
    title: 'Little Tibet Trek / Markha Valley Trek',
    img: 'https://images.unsplash.com/photo-1468215804491-50dce06d81f8?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      duration: {
        days: `6-7`,
      },
      totalDistance: `45 - 60`,
      highestAltitude: `Gadsan Sar (4650 m) `,
      difficulty: `Moderate - Difficult`,
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1: Leh to Chilling to Skiu',
          description: `Drive from Leh to Chilling: 55-65 km, about 3 hours.
          <br/>
          Trek from Chilling to Skiu: 8-9 km, 4-5 hours.
          <br/>
          Highlights: The journey starts with a scenic drive from Leh to Chilling, offering views of the confluence of the Zanskar and Indus Rivers. The trek to Skiu is a gentle introduction, meandering along the river amidst the backdrop of towering cliffs.`,
        },
        day2: {
          id: 2,
          title: 'Day 2: Skiu to Markha',
          description: `Trekking Distance: 20-22 km
          <br/>
          Duration: Approximately 7-8 hours
          <br/>
          Highlights: This segment takes trekkers through varied landscapes, including narrow gorges and wide valleys. The path also leads through several quaint Ladakhi villages and past ancient chortens, immersing trekkers in the local culture and spirituality.`,
        },
        day3: {
          id: 3,
          title: 'Day 3: Markha to Thachungtse',
          description: `Trekking Distance: 13-15 km.
          <br/>
          Duration: 5-6 hours.
          <br/>
          Highlights: The day’s journey showcases the heart of the Markha Valley, with its namesake village offering a chance to explore a beautiful monastery. The trek continues through agricultural fields before reaching Thachungtse, providing splendid views of the surrounding mountains.`,
        },
        day4: {
          id: 4,
          title: 'Day 4: Thachungtse to Nimaling ',
          description: `Trekking Distance: 7-8 km
          <br/>
          Duration: 4-5 hours
          <br/>
          Highlights: Ascending towards Nimaling opens up to high-altitude pastures where local nomads graze their livestock during the summer months. The panoramic views of Kang Yatse peak from Nimaling are truly spectacular, offering one of the trek's visual highlights.`,
        },
        day5: {
          id: 5,
          title: 'Day 5: Nimaling to Shang Sumdo via Kongmaru La',
          description: `Trekking Distance: 15-17 km
          <br/>
          Duration: 7-8 hours.
          <br/>
          Highlights: The ascent to Kongmaru La pass, the trek's highest point, presents challenging yet rewarding trekking with unparalleled views of the Ladakh and Zanskar ranges. The descent through a narrow gorge to Shang Sumdo is an adventurous end to the day.`,
        },
        day6: {
          id: 6,
          title: 'Day 6: Shang Sumdo to Hemis to Leh ',
          description: `Trek to Hemis Monastery: 6-8 km, about 2-3 hours
          <br/>
          Drive back to Leh: 40 km, about 1-2 hours.
          <br/>
          Highlights: The final day includes a visit to the Hemis Monastery, one of Ladakh's most important and wealthiest monasteries, offering insights into the region's rich Buddhist heritage before driving back to Leh.`,
        },
      },
    },
  },
  {
    id: 'long-trek-3',
    title: 'Sham Valley Trek / Baby Trek',
    img: 'https://images.unsplash.com/photo-1590555009076-5291296f5ab2?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      duration: {
        days: '3 - 4',
      },
      totalDistance: `25 - 30`,
      highestAltitude: ` 3,750m`,
      difficulty: `Easy - Moderate`,
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1: Leh to Likir (Drive) and Likir to Yangthang (Trek)',
          description: `Drive from Leh to Likir: Distance: 58 km | Duration: Approx. 2 hours
          <br/>
          Trek from Likir to Yangthang: Trekking Distance: 9 km | Duration: Approx. 4-5 hours
          <br/>
          Highlights: The trek starts at Likir, following a trail that crosses small passes including Phobe La (3580m) and Chagatse La (3630m), before descending into Yangthang.`,
        },
        day2: {
          id: 2,
          title: 'Day 2: Yangthang to Hemis Shukpachan',
          description: `Trekking Distance: 6 km
          <br/>
          Duration: Approx. 3-4 hours
          <br/>
          Highlights: This segment of the trek involves crossing the Tsermangchan La (3750m) pass, offering stunning views and leading to Hemis Shukpachan, a village known for its cedar trees and tranquil ambiance.`,
        },
        day3: {
          id: 3,
          title:
            'Day 3: Hemis Shukpachan to Temisgam and back to Leh (Trek & Drive) ',
          description: `Trek from Hemis Shukpachan to Temisgam: Trekking Distance: 8 km | Duration: Approx. 4 hours
          <br/>
          Highlights: The path leads over Mebtak La (3720m) and into Ang village, before reaching Temisgam, a historical site with ruins and a monastery worth exploring.
          <br/>
          Drive from Temisgam to Leh: Distance: 90 km | Duration: Approx. 3-4 hours`,
        },
      },
    },
  },
  {
    id: 'long-trek-4',
    title: 'Tulian Lake Trek',
    img: 'https://images.unsplash.com/photo-1666698590004-81cd561a35a7?q=80&w=1888&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      duration: {
        days: '2 - 3',
      },
      totalDistance: `32`,
      highestAltitude: ` 3,700m`,
      difficulty: `Easy - Moderate`,
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1: Pahalgam to Baisaran Valley',
          description: `Distance: 5 km
          <br/>
          Duration: 3-4 hours
          <br/>
          Highlights: The trek begins at Pahalgam, a popular tourist town known for its scenic beauty. The initial trek to Baisaran Valley is relatively easy, traversing through dense pine forests. Baisaran, often dubbed as “Mini Switzerland,” offers panoramic views of the surrounding mountains and is an ideal camping site for the night.`,
        },
        day2: {
          id: 2,
          title: 'Day 2: Baisaran Valley to Tulian Lake',
          description: `Distance: 10-12 km
          <br/>
          Duration: 6-7 hours
          <br/>
          Highlights: This day involves a steep ascent from Baisaran Valley to Tulian Lake. The trail snakes through dense forests, meadows, and rugged terrains. As you ascend, the stunning vistas of the surrounding peaks and valleys unfold. The final stretch involves navigating through a rocky terrain before reaching Tulian Lake. The lake, with its crystal-clear waters reflecting the surrounding snow-capped peaks, is a breathtaking sight.`,
        },
        day3: {
          id: 3,
          title: 'Day 3: Tulian Lake Exploration and Return to Baisaran Valley',
          description: `Distance: 10-12 km (return)
          <br/>
          Duration: 5-6 hours
          <br/>
          Highlights: Spend the morning exploring the serene environs of Tulian Lake. The tranquil waters and the majestic mountain backdrop provide a perfect setting for relaxation and photography. In the afternoon, begin the descent back to Baisaran Valley, retracing the steps taken the previous day.`,
        },
        day4: {
          id: 4,
          title: 'Day 4: Baisaran Valley to Pahalgam',
          description: `Distance: 5 km
          <br/>
          Duration: 2-3 hours
          <br/>
          Highlights: The final day's trek back to Pahalgam is a gentle descent through the pine forest, offering one last opportunity to soak in the natural beauty of the region. Upon arrival in Pahalgam, trekkers can explore local attractions or proceed to their next destination.`,
        },
      },
    },
  },
  {
    id: 'long-trek-5',
    title: 'Stok Kangri Trek',
    img: 'https://images.unsplash.com/photo-1536776814195-034a8b6e6d16?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      duration: {
        days: '9 - 10',
      },
      totalDistance: `14 - 16`,
      highestAltitude: ` 6153m`,
      difficulty: `Moderate - Difficult`,
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1: Arrival in Leh',
          description: `Altitude: 3,500 meters (11,483 feet)
          <br/>
          Activity: Acclimatize and explore Leh. Visit local attractions like Leh Palace, Shanti Stupa, and local markets.
          <br/>
          Highlights: Getting used to the high altitude of Ladakh.`,
        },
        day2: {
          id: 2,
          title: 'Day 2: Acclimatization in Leh',
          description: `Activity: Continue acclimatization. Short hikes nearby, visit monasteries (Thiksey, Hemis), and further explore the area.
          <br/>
          Highlights: Further adaptation to high altitude, understanding local culture.`,
        },
        day3: {
          id: 3,
          title: 'Day 3: Leh to Chang Ma via Stok Village',
          description: `Trekking Distance: 9 km
          <br/>
          Duration: 4-5 hours
          <br/>
          Altitude at Chang Ma: 3,980 meters (13,058 feet)
          <br/>
          Highlights: The trek begins, featuring scenic views of the Indus Valley and the Stok mountain range.`,
        },
        day4: {
          id: 4,
          title: 'Day 4: Chang Ma to Mankorma',
          description: `Trekking Distance: 4 km
          <br/>
          Duration: 2-3 hours
          <br/>
          Altitude at Mankorma: 4,300 meters (14,107 feet)
          <br/>
          Highlights: A short trek to aid further acclimatization, surrounded by beautiful landscapes.`,
        },
        day5: {
          id: 5,
          title: 'Day 5: Mankorma to Base Camp',
          description: `Trekking Distance: 4 km
          <br/>
          Duration: 3-4 hours
          <br/>
          Altitude at Base Camp: 5,000 meters (16,404 feet)
          <br/>
          Highlights: Setting up for the summit attempt, acclimatization walks.`,
        },
        day6: {
          id: 6,
          title: 'Day 6: Base Camp to Stok Kangri Summit and back to Base Camp',
          description: `Trekking Distance: 10-12 km (round trip)
          <br/>
          Duration: 10-12 hours
          <br/>
          Altitude at Stok Kangri Summit: 6,153 meters (20,187 feet)
          <br/>
          Highlights: The challenging ascent, witnessing a spectacular sunrise from the summit, panoramic views of the Zanskar and Karakoram ranges.`,
        },
        day7: {
          id: 7,
          title: 'Day 7: Base Camp to Stok Village and drive to Leh',
          description: `Trekking Distance: 13 km
          <br/>
          Duration: 6-7 hours
          <br/>
          Activity: Trek back to Stok Village followed by a drive to Leh.
          <br/>
          Highlights: Descending through the stunning landscapes, marking the completion of the trek.`,
        },
        day8: {
          id: 8,
          title: 'Day 8: Departure from Leh',
          description: `Transfer to the airport for departure, marking the end of the journey.`,
        },
      },
    },
  },
  {
    id: 'long-trek-6',
    title: 'Tarsar Marsar Trek',
    img: 'https://images.unsplash.com/photo-1666501549221-99909e572554?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      duration: {
        days: '7',
      },
      totalDistance: `36 - 40`,
      highestAltitude: ` 4036m`,
      difficulty: `Moderate`,
      tourPlan: {
        day1: {
          id: 1,
          title: 'Day 1: Arrival at Srinagar - Drive to Aru Base Camp',
          description: `Distance: 115 km drive
          <br/>
          Altitude: 2,400 meters (Aru Base Camp)
          <br/>
          Highlights: Scenic drive from Srinagar to Aru, preparations for the trek.`,
        },
        day2: {
          id: 2,
          title: 'Day 2: Aru to Lidderwat',
          description: `Trekking Distance: 10 km
          <br/>
          Duration: 5-6 hours
          <br/>
          Altitude at Lidderwat: 3,050 meters
          <br/>
          Highlights: Trek through dense pine forests, alongside the Lidder River, and into open meadows.`,
        },
        day3: {
          id: 3,
          title: 'Day 3: Lidderwat to Shekwas',
          description: `Trekking Distance: 6 km
          <br/>
          Duration: 4-5 hours
          <br/>
          Altitude at Shekwas: 3,350 meters
          <br/>
          Highlights: Gentle climb through meadows and valleys with panoramic views.`,
        },
        day4: {
          id: 4,
          title: 'Day 4: Shekwas to Tarsar and explore Tarsar',
          description: `Trekking Distance: 5 km
          <br/>
          Duration: 3-4 hours
          <br/>
          Altitude at Tarsar Lake: 3,960 meters
          <br/>
          Highlights: Arrival at the stunning Tarsar Lake, exploration and camping beside the lake.`,
        },
        day5: {
          id: 5,
          title: 'Day 5: Tarsar to Sundarsar',
          description: `Trekking Distance: 5 km
          <br/>
          Duration: 4-5 hours
          <br/>
          Altitude at Sundarsar: 3,900 meters
          <br/>
          Highlights: Trek over Tarsar Pass, descend to Sundarsar Lake, breathtaking views of the surrounding peaks.`,
        },
        day6: {
          id: 6,
          title: 'Day 6: Visit Marsar and trek to Homwas',
          description: `Trekking Distance: 9 km
          <br/>
          Duration: 7-8 hours
          <br/>
          Altitude at Marsar: 4,000 meters; return to Homwas: 3,400 meters
          <br/>
          Highlights: Trek to the elusive Marsar Lake, return journey through different landscapes, including meadows and shepherds’ trails.`,
        },
        day7: {
          id: 7,
          title: 'Day 7: Homwas to Aru; Drive back to Srinagar',
          description: `Trekking Distance: 13 km
          <br/>
          Duration: 5-6 hours trek, followed by a drive
          <br/>
          Highlights: Last views of the trek’s landscapes, drive back to Srinagar for departure or further exploration.`,
        },
      },
    },
  },
];

const softTreks = [
  {
    id: 'soft-trek-1',
    title: 'Dara - Hayan Trek ',
    img: 'https://images.unsplash.com/photo-1696615596718-c6df59650b1a?q=80&w=1886&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      totalDistance: '13',
      duration: {
        days: 1,
      },
      difficulty: `Easy`,
      tourPlan: `The trek traverses to the Sind valley but follows a more easterly trail which is on the right side of the Burzakut peak. This trek can also be done in a day but has to be started early in the day. 
      <br/>
      Route: Reach Dara Faqeer Gujri road point (road head) follow the Left Link Trail up towards the mountain to reach Dara top which is a ridge line meadow. Here camp can be established if required, however this place lacks water source as the springs are seasonal. The next stage is to be descend down to Hayan Bridge in the Sind valley (road head). `,
    },
  },
  {
    id: 'soft-trek-2',
    title: 'Bajpathri Trek ',
    img: 'https://images.unsplash.com/photo-1668173357686-a243123ca182?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    details: {
      totalDistance: '-',
      duration: {
        days: 1,
      },
      difficulty: `Easy`,
      tourPlan: `The trek traverses to the Sind Valley on the northern outskirts of Srinagar city between the Harwar peak (3450 mts) and Burzakut peak (3280 mts). The trail encounter a huge grass meadow approximately 1.5 sq. km/ on top of the mountain which is a wonder in itself. The trek can be done in a day if started very early else overnight camping in the meadow is highly recommended to enjoy the lovely views. 
      <br/>
      Route: Reach Takiya Sangreshi ( road head) follow the trial to Raikai, head towards Bajimarg where there is camping site, descend down to Chotimarg, follow trail through coniferous forestes to Nagwan ( road head)/ Kangan where shared taxis can be arranged to travel back to Srinagar.  `,
    },
  },
  {
    id: 'soft-trek-3',
    title: 'Mamneth Top Trek',
    img: 'https://scontent.fixj1-1.fna.fbcdn.net/v/t1.6435-9/67283831_2420233871371242_6201542457386074112_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=5f2048&_nc_ohc=05BamEAwgmUAX9d_K7-&_nc_ht=scontent.fixj1-1.fna&oh=00_AfA8yGzJFMaC01zmW11NGxrw86uvQs4ocxNihEW0Qo7B2Q&oe=66138BB5',
    details: {
      totalDistance: '4',
      duration: {
        days: `1`,
      },
      difficulty: `Easy`,
      tourPlan: `Mamneth Top is one of the lesser-known locations near Srinagar that takes one away from the bustling city and further into the fantastic natural surroundings. Spectacular lush green environments with the backdrop of the upper Himalayan Peaks make up the visuals of this location, and along with that, this region is pretty biodiverse as well and is home to a wide variety of birds, animals, and plants. 
      <br/>

This location was previously only frequented by locals to get away from all the hustle and bustle, but now it has become pretty famous among tourists. The trailhead for this particular trail lies by the Faqir Gurji, which is pretty well connected by roads and can be reached by many different modes of transports such as buses, taxis, cabs, or private vehicles. `,
    },
  },
  {
    id: 'soft-trek-4',
    title: 'Dumb Galinishat',
    img: 'https://content3.jdmagicbox.com/comp/srinagar/y4/9999px194.x194.220327011233.l3y4/catalogue/zabarwan-range-trekking-area-nishat-srinagar-tourist-attraction-slhgz00w11.jpg',
    details: {
      totalDistance: '-',
      duration: {
        days: `1`,
      },
      difficulty: `Easy`,
      tourPlan: `This is the shortest yet one of the prettiest trail of all. It explores the area behind Nishat Garden on the banks of the Dal Lake. The view of the lake with the mountain in the background is something which will linger in your memory for a very long time. Both up and down the mountain is less than 8 km.  
      <br/>

Route: Start from Sharabkul Road up behind the Nishat Garden area, follow route upwards along the apple and cherry orchards towards the Big Rock and then to Dumb Gali, Dumb Gali Top. Unrestricted views of the Dal Lake and Srinagar city can be enjoyed from here. Further exploration and views to dachigam wildlife Sacntuary is got from MachilGali and the Rock shelter. Return via the Big rock route. `,
    },
  },
];

displayTreks(longTreks, longTreksContainer);

trekTypeBtns = document.querySelectorAll('.trek-btn');
trekTypeBtns.forEach(trekBtn => {
  trekBtn.addEventListener('click', e => {
    const trekTypeIDs = ['long-trek', 'soft-trek'];
    trekTypeIDs.forEach(trekTypeID => {
      if (e.target.id === `${trekTypeID}-btn`) {
        document.querySelector(`.${trekTypeID}-container`).innerHTML = '';
        document.querySelector(`.${trekTypeID}-container`).style.display =
          'flex';

        switch (trekTypeID) {
          case 'long-trek':
            displayTreks(longTreks, longTreksContainer);
            break;
          case 'soft-trek':
            displaySoftTreks(softTreks, softTreksContainer);
            break;
        }
      } else {
        document.querySelector(`.${trekTypeID}-container`).style.display =
          'none';
      }
    });
  });
});

document.addEventListener('DOMContentLoaded', function () {
  var trekSwiper = new Swiper('.trek-swiper', {
    grabCursor: true,
    rewind: true,

    speed: 1000,
    spaceBetween: 20,
    slidesPerView: 1,

    breakpoints: {
      800: {
        slidesPerView: 2,
      },
    },
    navigation: {
      nextEl: '.trek-button-next',
      prevEl: '.trek-button-prev',
    },
  });

  /* const treksSwiperWrapper = document.querySelector('.trek-swiper-wrapper');

  trekSlides.forEach(slide => {
    const slideDiv = document.createElement('div');
    slideDiv.className = 'swiper-slide trek-slide';
    slideDiv.innerHTML = `
            <img
              src="${slide.img}"
              alt="img placeholder"
            />
    `;
    treksSwiperWrapper.appendChild(slideDiv);
  }); */
});

function displayTreks(object, container) {
  object.forEach(trek => {
    const packageCard = document.createElement('article');
    packageCard.className = 'package-card';
    packageCard.id = trek.id;

    let innerHTMLContent;
    innerHTMLContent = `
        <div class="package-card-banner">
          <img src="${trek.img}" alt="${trek.title}" />
        </div>

        <div
          class="package-card-details d-flex flex-column justify-content-between"
        >
          <div
            class="package-card-header d-flex justify-content-between align-items-center p-3"
          >
            <h3 class="package-card-title ps-2">${trek.title}</h3>
          </div>
          
          <ul
            class="package-card-amenities d-flex flex-column flex-xl-row justify-content-center gap-3 flex-xl-wrap mb-0 ps-4 ps-xl-0"
          >
            <li>
              <div class="trek-card-info" title="Duration">
                <div class="package-card-amenities-icon">
                    <img src="../../assets/clock.svg" width="25"
                height="25">
                </div>
                <div>
                <div class="trek-detail">Duration</div>
                  <h5>${trek.details.duration.days} Days</h5>
                </div>
              </div>
            </li>
            <li>
              <div class="trek-card-info" title="Distance">
                <div class="package-card-amenities-icon">
                    <img src="../../assets/distance.svg" width="30"
                height="30">
                </div>
                <div>
                 <div class="trek-detail">Distance</div>
                  <h5>${trek.details.totalDistance} Km.</h5>
                </div>
              </div>
            </li>
            <li>
              <div class="trek-card-info" title="Grade">
                <div class="package-card-amenities-icon">
                    <img src="../../assets/signal-alt.svg" width="25"
                height="25">
                </div>
                <div>
                    <div class="trek-detail">Grade</div>
                    <h5>${trek.details.difficulty}</h5>
                </div>
              </div>
            </li>
            <li>
              <div class="trek-card-info" title="Altitude">
                <div class="package-card-amenities-icon">
                    <img src="../../assets/mountains.svg" width="30"
                height="30">
                </div>
                <div>
                    <div class="trek-detail">Highest Altitude</div>
                    <h5>${trek.details.highestAltitude}</h5>
                </div>
              </div>
            </li>
            
          </ul>

          <div class="itenary">
            <div
              class="accordion accordion-flush itenary-accordian"
              id="accordian-${trek.id}"
            >
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#itenary-${trek.id}"
                    aria-expanded="false"
                    aria-controls="itenary-${trek.id}"
                  >
                    <h5 class="accordion-title">Itinerary</h5>
                  </button>
                </h2>
                <div
                  id="itenary-${trek.id}"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordian-${trek.id}"
                >
                  <div class="accordion-body">
                    <ul class="itenary">
                      ${Object.keys(trek.details.tourPlan)
                        .map(
                          day => `
                      <li class="tour-plan">
                        <div class="day">${trek.details.tourPlan[day].title}</div>
                        <div class="day-plan">${trek.details.tourPlan[day].description}</div>
                      </li>
                      `
                        )
                        .join('')}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div
            class="package-card-booking ps-3 pe-3 pb-2 d-flex justify-content-center"
          >
            <button class="package-enquiry-btn w-100" data-bs-toggle="modal" data-bs-target="#exampleModal${
              trek.id
            }">Send Enquiry
            </button>
          </div>
        </div>

         <!-- Modal -->
        <div class="modal fade " id="exampleModal${
          trek.id
        }" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-4">
                    <div class="d-flex justify-content-between">
                        <h4 class="fw-semi-bold">Enquiry Details</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div class="booking-details"></div>
                    <form action="https://formsubmit.co/info@espreeholidays.com"
                method="POST" id="bookingForm${
                  trek.id
                }" class="booking-form" data-trek-id="${trek.id}">
                <input
                  type="hidden"
                  name="_subject"
                  value="Trek Enquiry!"
                />
                <input type="hidden" name="_captcha" value="false" />
              <div class="form-floating d-flex">
              <input
              readonly
              value="${trek.title}"
              type="text"
              name="Selected Trek"
              class="form-control-plaintext"
              id="floatingTrek${trek.id}"
              placeholder="Selected Trek"
              required
              />
            <label for="floatingTrek${trek.id}">Selected Trek*</label>
            </div>
                <div class="form-floating mb-2">
                  <input
                  type="text"
                  name="Full Name"
                  class="form-control"
                  id="floatingFullName${trek.id}"
                  placeholder="Full Name"
                  required
                  />
                <label for="floatingFullName${trek.id}">Full Name*</label>
                </div>

                <div class="form-floating mb-2">
                            <input
                                type="email"
                                name="Email"
                                class="form-control"
                                id="floatingEmail${trek.id}"
                                placeholder="Email"
                                required
                            />
                            <label for="floatingEmail${trek.id}">Email*</label>
                        </div>

                <div class="form-floating mb-2">
                 <input
                 type="tel"
                 name="Phone"
                 class="form-control"
                 id="floatingPhone${trek.id}"
                 placeholder="Phone"
                  
                 />
                  <label for="floatingPhone${trek.id}">Phone (Optional)</label>
                </div>
                 
                 <div class="form-floating mb-2">
                    <textarea
                     class="form-control"
                     name="Message"
                     id="floatingMessage${trek.id}"
                     placeholder="Message"
                     rows="4"
                    cols="50"
                    style="height: 160px"
                    ></textarea>
                    <label for="floatingMessage${trek.id}">Message</label>
                 </div>
               <button id="submitForm" type="submit" class="send-enquiry enquiry-btn w-100 mt-4">Submit Now</button>
             </form>
                        </div>
                    </div>
                </div>
  `;
    packageCard.innerHTML = innerHTMLContent;
    container.appendChild(packageCard);
  });
}

function displaySoftTreks(object, container) {
  object.forEach(trek => {
    const packageCard = document.createElement('article');
    packageCard.className = 'package-card';
    packageCard.id = trek.id;

    let innerHTMLContent;
    innerHTMLContent = `
        <div class="package-card-banner">
          <img src="${trek.img}" alt="${trek.title}" />
        </div>

        <div
          class="package-card-details d-flex flex-column justify-content-between"
        >
          <div
            class="package-card-header d-flex justify-content-between align-items-center p-3"
          >
            <h3 class="package-card-title ps-2">${trek.title}</h3>
          </div>
          
          <ul
            class="package-card-amenities d-flex flex-column flex-xl-row justify-content-center gap-3 flex-xl-wrap mb-2 ps-4 ps-xl-0"
          >
            <li>
              <div class="trek-card-info" title="Duration">
                <div class="package-card-amenities-icon">
                    <img src="../../assets/clock.svg" width="25"
                height="25">
                </div>
                <div>
                <div class="trek-detail">Duration</div>
                  <h5>${trek.details.duration.days} Day</h5>
                </div>
              </div>
            </li>
            <li>
              <div class="trek-card-info" title="Distance">
                <div class="package-card-amenities-icon">
                    <img src="../../assets/distance.svg" width="30"
                height="30">
                </div>
                <div>
                 <div class="trek-detail">Distance</div>
                  <h5>${trek.details.totalDistance} Km.</h5>
                </div>
              </div>
            </li>
                   
          </ul>

          <div class="itenary">
            <div
              class="accordion accordion-flush itenary-accordian"
              id="accordian-${trek.id}"
            >
              <div class="accordion-item">
                <h2 class="accordion-header">
                  <button
                    class="accordion-button collapsed"
                    type="button"
                    data-bs-toggle="collapse"
                    data-bs-target="#itenary-${trek.id}"
                    aria-expanded="false"
                    aria-controls="itenary-${trek.id}"
                  >
                    <h5 class="accordion-title">Itinerary</h5>
                  </button>
                </h2>
                <div
                  id="itenary-${trek.id}"
                  class="accordion-collapse collapse"
                  data-bs-parent="#accordian-${trek.id}"
                >
                  <div class="accordion-body soft-trek-plan">
                    ${trek.details.tourPlan}
                  </div>
                </div>
              </div>
            </div>
          </div>


          <div
            class="package-card-booking ps-3 pe-3 pb-2 d-flex justify-content-center"
          >
            <button class="package-enquiry-btn w-100" data-bs-toggle="modal" data-bs-target="#exampleModal${trek.id}">Send Enquiry
            </button>
          </div>
        </div>

         <!-- Modal -->
        <div class="modal fade " id="exampleModal${trek.id}" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-dialog-centered">
                <div class="modal-content p-4">
                    <div class="d-flex justify-content-between">
                        <h4 class="fw-semi-bold">Enquiry Details</h4>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    
                    <div class="booking-details"></div>
                    <form action="https://formsubmit.co/info@espreeholidays.com"
                method="POST" id="bookingForm${trek.id}" class="booking-form" data-trek-id="${trek.id}">
                <input
                  type="hidden"
                  name="_subject"
                  value="Trek Enquiry!"
                />
                <input type="hidden" name="_captcha" value="false" />
              <div class="form-floating d-flex">
              <input
              readonly
              value="${trek.title}"
              type="text"
              name="Selected Trek"
              class="form-control-plaintext"
              id="floatingTrek${trek.id}"
              placeholder="Selected Trek"
              required
              />
            <label for="floatingTrek${trek.id}">Selected Trek*</label>
            </div>
                <div class="form-floating mb-2">
                  <input
                  type="text"
                  name="Full Name"
                  class="form-control"
                  id="floatingFullName${trek.id}"
                  placeholder="Full Name"
                  required
                  />
                <label for="floatingFullName${trek.id}">Full Name*</label>
                </div>

                <div class="form-floating mb-2">
                            <input
                                type="email"
                                name="Email"
                                class="form-control"
                                id="floatingEmail${trek.id}"
                                placeholder="Email"
                                required
                            />
                            <label for="floatingEmail${trek.id}">Email*</label>
                        </div>

                <div class="form-floating mb-2">
                 <input
                 type="tel"
                 name="Phone"
                 class="form-control"
                 id="floatingPhone${trek.id}"
                 placeholder="Phone"
                  
                 />
                  <label for="floatingPhone${trek.id}">Phone (Optional)</label>
                </div>
                 
                 <div class="form-floating mb-2">
                    <textarea
                     class="form-control"
                     name="Message"
                     id="floatingMessage${trek.id}"
                     placeholder="Message"
                     rows="4"
                    cols="50"
                    style="height: 160px"
                    ></textarea>
                    <label for="floatingMessage${trek.id}">Message</label>
                 </div>
               <button id="submitForm" type="submit" class="send-enquiry enquiry-btn w-100 mt-4">Submit Now</button>
             </form>
                        </div>
                    </div>
                </div>
  `;
    packageCard.innerHTML = innerHTMLContent;
    container.appendChild(packageCard);
  });
}

/* function handleFormSubmission(event) {
  event.preventDefault();
  let trekId = event.target.getAttribute('data-trek-id');

  let formData = {
    trek: event.target.querySelector(`#floatingTrek${trekId}`).value,
    fullName: event.target.querySelector(`#floatingFullName${trekId}`).value,
    phone: event.target.querySelector(`#floatingPhone${trekId}`).value,
    message: event.target.querySelector(`#floatingMessage${trekId}`).value,
  };

  var email = 'info@espreeholidays.com';
  var subject = 'Vehicle Rental Enquiry';
  var emailBody = `Hi, I'm interested in your Trek packages!\nSelected Trek: ${formData.trek}\nFull Name: ${formData.fullName}\nPhone: ${formData.phone}\nMessage: ${formData.message}`;
  var email = `mailto:${email}?subject=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(emailBody)}`;
  window.open(email, '_blank').focus();
}

document.addEventListener('submit', event => {
  if (event.target.classList.contains('booking-form')) {
    handleFormSubmission(event);
  }
  location.reload();
}); */

const backToTopBtn = document.getElementById('myBtn');
function scrollFunction() {
  if (
    document.body.scrollTop > 500 ||
    document.documentElement.scrollTop > 500
  ) {
    backToTopBtn.style.opacity = '1';
  } else {
    backToTopBtn.style.opacity = '0';
  }
}

/* Back To Top button functionality */
backToTopBtn.addEventListener('click', () => {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
});

window.onscroll = function () {
  scrollFunction();
};
