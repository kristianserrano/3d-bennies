const moduleName = 'swade-more-bennies';

Hooks.once('diceSoNiceReady', (dice3d) => {
  const separator = `¤`;  
  
  /* Bennies List
  Bullet
  Bullet - Animated   
  Bullet Case
  Capybara
  Cheese
  Coin
  Crystal Heart
  Crystal Heart - Animated  
  Dynamite
  Gear
  Goblin
  Grenade  
  Grenade 2
  Helmet - World War
  Horseshoe
  Mushroom
  POW
  Sci-Fi Card
  Shard - Blue
  Shard - Dark Blue
  Shard - Green
  Shard - Pink 
  Shard - Yellow
  Skull  
  Ring - That One
  UFO  
  */
  const models = [
    {
      id: "benny-bomb",
      name: `${separator} Bomb - Animated`,
      fileName: 'bomb.glb'      
    },  
    {
      id: "benny-bullet",
      name: `${separator} Bullet`,
      fileName: 'bullet.glb'      
    },
    {
      id: "benny-animated-bullet",
      name: `${separator} Bullet - Animated`,
      fileName: 'bullet_animated.glb'      
    },
    {
      id: "benny-bullet-case",
      name: `${separator} Bullet Case`,
      fileName: 'bullet_case.glb'      
    },
    {
      id: "benny-capybara",
      name: `${separator} Capybara`,
      fileName: 'capybara.glb'      
    },        
    {
      id: "benny-cheese",
      name: `${separator} Cheese`,
      fileName: 'cheese.glb'      
    },    
    {
      id: "benny-coin",
      name: `${separator} Coin`,
      fileName: 'coin.glb'      
    },    
    {
      id: "benny-crystal-heart",
      name: `${separator} Crystal Heart`,
      fileName: 'crystal_heart.glb'      
    },
    {
      id: "benny-crystal_heart-animated",
      name: `${separator} Crystal Heart - Animated`,
      fileName: 'crystal_heart_animated.glb'      
    },
    {
      id: "benny-dynamite",
      name: `${separator} Dynamite`,
      fileName: 'dynamite.glb'      
    },    
    {
      id: "benny-gear",
      name: `${separator} Gear`,
      fileName: 'gear.glb'      
    },
    {
      id: "benny-goblin",
      name: `${separator} Goblin`,
      fileName: 'goblin.glb'      
    },
    {
      id: "benny-grenade",
      name: `${separator} Grenade`,
      fileName: 'grenade.glb'      
    },
    {
      id: "benny-grenade2",
      name: `${separator} Grenade 2`,
      fileName: 'grenade2.glb'      
    },
    {
      id: "benny-helmet-world-war",
      name: `${separator} Helmet - World War`,
      fileName: 'helmet.glb'      
    },    
    {
      id: "benny-horseshoe",
      name: `${separator} Horseshoe`,
      fileName: 'horseshoe.glb'      
    },        
    {
      id: "benny-mushroom",
      name: `${separator} Mushroom`,
      fileName: 'mushroom.glb'      
    },    
    {
      id: "benny-pow",
      name: `${separator} POW`,
      fileName: 'pow.glb'      
    },    
    {
      id: "benny-scifi-card",
      name: `${separator} Sci-Fi Card`,
      fileName: 'scifi_card.glb'      
    },
    {
      id: "benny-grenade2",
      name: `${separator} Grenade 2`,
      fileName: 'grenade2.glb'      
    },
    {
      id: "benny-shard-pink",
      name: `${separator} Shard - Pink`,
      fileName: 'shard_pink.glb'      
    },
    {
      id: "benny-shard-blue",
      name: `${separator} Shard - Blue`,
      fileName: 'shard_blue.glb'      
    },
    {
      id: "benny-shard-dark-blue",
      name: `${separator} Shard - Dark Blue`,
      fileName: 'shard_dark_blue.glb'      
    },
    {
      id: "benny-shard-yellow",
      name: `${separator} Shard - Yellow`,
      fileName: 'shard_yellow.glb'      
    },
    {
      id: "benny-shard-green",
      name: `${separator} Shard - Green`,
      fileName: 'shard_green.glb'      
    },           
    {
      id: "benny-skull",
      name: `${separator} Skull`,
      fileName: 'skull.glb'      
    },   
    {
      id: "one-ring",
      name: `${separator} Ring - That One`,
      fileName: 'one-ring.glb'      
    },    
    {
      id: "benny-ufo",
      name: `${separator} UFO - Animated`,
      fileName: 'ufo.glb'      
    }
  ];
  
  for (let model of models) {
    dice3d.addSystem({id: model.id, name: model.name }, false);
    
    dice3d.addDicePreset({
      type:"db",
      system: model.id, 
      modelFile: 'modules/' + moduleName + '/models/' + model.fileName    
    });
  }

});
