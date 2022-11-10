const moduleName = 'swade-more-bennies';

Hooks.once('diceSoNiceReady', (dice3d) => {
  const separator = `¤`;  
  
  /* Bennies List
  Bullet
  Bullet - Animated   
  Bullet Case
  Crystal Heart
  Crystal Heart - Animated
  Gear
  Goblin
  Grenade  
  Grenade 2
  Sci-Fi Card
  Shard - Blue
  Shard - Dark Blue
  Shard - Green
  Shard - Pink 
  Shard - Yellow
  Skull  
  UFO  
  */
  const models = [
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
      id: "benny-datapod_blue",
      name: `${separator} Datapod - Blue`,
      fileName: 'datapod_blue.glb'      
    },
    {
      id: "benny-datapod_red",
      name: `${separator} Datapod - Red`,
      fileName: 'datapod_red.glb'      
    },
    {
      id: "benny-datapod_yellow",
      name: `${separator} Datapod - Yellow`,
      fileName: 'datapod_yellow.glb'      
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
      id: "benny-ufo",
      name: `${separator} UFO`,
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

/*  
  // ---------------------------------------------------------
  // Bullet
  dice3d.addSystem({id:"benny-bullet", name: `${separator} Bullet` }, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-bullet", 
    modelFile: 'modules/' + moduleName + '/models/bullet.glb'    
  });

  // ---------------------------------------------------------
  // Animated Bullet
  dice3d.addSystem({id:"benny-animated-bullet", name:`${separator} Bullet - Animated`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-animated-bullet", 
    modelFile: 'modules/' + moduleName + '/models/bullet-animated.glb'    
  });

  // ---------------------------------------------------------
  // Bullet Case
  dice3d.addSystem({id:"benny-bullet-case", name:`${separator} Bullet Case`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-bullet-case", 
    modelFile: 'modules/' + moduleName + '/models/bullet-case.glb'    
  });
 
  // ---------------------------------------------------------
  // Crystal Heart
  dice3d.addSystem({id:"benny-crystal-heart", name:`${separator} Crystal Heart`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-crystal-heart", 
    modelFile: 'modules/' + moduleName + '/models/crystal_heart.glb'    
  });

  // ---------------------------------------------------------
  // Animated Crystal Heart
  dice3d.addSystem({id:"benny-crystal_heart-animated", name:`${separator} Crystal Heart - Animated`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-crystal_heart-animated", 
    modelFile: 'modules/' + moduleName + '/models/crystal_heart-animated.glb'    
  });   

  // ---------------------------------------------------------
  // Gear
  dice3d.addSystem({id:"benny-gear", name:`${separator} Gear`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-gear", 
    modelFile: 'modules/' + moduleName + '/models/gear.glb'    
  });

  // ---------------------------------------------------------
  // Goblin
  dice3d.addSystem({id:"benny-goblin", name:`${separator} Goblin`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-goblin", 
    modelFile: 'modules/' + moduleName + '/models/goblin.glb'    
  });   

  // ---------------------------------------------------------
  // Grenade
  dice3d.addSystem({id:"benny-grenade", name:`${separator} Grenade`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-grenade", 
    modelFile: 'modules/' + moduleName + '/models/grenade.glb'    
  });   
  
  // ---------------------------------------------------------
  // Grenade 2
  dice3d.addSystem({id:"benny-grenade2", name:`${separator} Grenade 2`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-grenade2", 
    modelFile: 'modules/' + moduleName + '/models/grenade2.glb'    
  }); 

  // ---------------------------------------------------------
  // Grenade 2
  dice3d.addSystem({id:"benny-scifi-card", name:`${separator} Sci-Fi Card`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-scifi-card", 
    modelFile: 'modules/' + moduleName + '/models/scifi-card.glb'    
  });   
  
  // ---------------------------------------------------------
  // Pink Shard
  dice3d.addSystem({id:"benny-shard-pink", name:`${separator} Shard - Pink`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-pink", 
    modelFile: 'modules/' + moduleName + '/models/shard_pink.glb'    
  });
  
  // ---------------------------------------------------------
  // Blue Shard
  dice3d.addSystem({id:"benny-shard-blue", name: `${separator} Shard - Blue`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-blue", 
    modelFile: 'modules/' + moduleName + '/models/shard_blue.glb'    
  });

  // ---------------------------------------------------------
  // Dark Blue Shard
  dice3d.addSystem({id:"benny-shard-dark-blue", name: `${separator} Shard - Dark Blue`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-dark-blue", 
    modelFile: 'modules/' + moduleName + '/models/shard_dark_blue.glb'    
  });
  
  // ---------------------------------------------------------
  // Yellow Shard
  dice3d.addSystem({id:"benny-shard-yellow", name:`${separator} Shard - Yellow`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-yellow", 
    modelFile: 'modules/' + moduleName + '/models/shard_yellow.glb'    
  });

  // ---------------------------------------------------------
  // Green Shard
  dice3d.addSystem({id:"benny-shard-green", name:`${separator} Shard - Green`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-green", 
    modelFile: 'modules/' + moduleName + '/models/shard_green.glb'    
  });

  // ---------------------------------------------------------
  // Skull
  dice3d.addSystem({id:"benny-skull", name:`${separator} Skull`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-skull", 
    modelFile: 'modules/' + moduleName + '/models/skull.glb'    
  }); 
  
  // ---------------------------------------------------------
  // UFO
  dice3d.addSystem({id:"benny-ufo", name:`${separator} UFO`}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-ufo", 
    modelFile: 'modules/' + moduleName + '/models/ufo.glb'    
  });
*/