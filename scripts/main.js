const moduleName = 'swade-more-bennies';

Hooks.once('diceSoNiceReady', (dice3d) => {
  // ---------------------------------------------------------
  // Bullet
  dice3d.addSystem({id:"benny-bullet", name:"Bullet"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-bullet", 
    modelFile: 'modules/' + moduleName + '/models/bullet.glb'    
  });
  
  // ---------------------------------------------------------
  // Animated Bullet
  dice3d.addSystem({id:"benny-animated-bullet", name:"Animated Bullet"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-animated-bullet", 
    modelFile: 'modules/' + moduleName + '/models/bullet-animated.glb'    
  });
  
  // ---------------------------------------------------------
  // Pink Shard
  dice3d.addSystem({id:"benny-shard-pink", name:"Pink Shard"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-pink", 
    modelFile: 'modules/' + moduleName + '/models/shard_pink.glb'    
  });
  
  // ---------------------------------------------------------
  // Blue Shard
  dice3d.addSystem({id:"benny-shard-blue", name:"Blue Shard"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-blue", 
    modelFile: 'modules/' + moduleName + '/models/shard_blue.glb'    
  });

  // ---------------------------------------------------------
  // Yellow Shard
  dice3d.addSystem({id:"benny-shard-yellow", name:"Yellow Shard"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-yellow", 
    modelFile: 'modules/' + moduleName + '/models/shard_yellow.glb'    
  });

  // ---------------------------------------------------------
  // Green Shard
  dice3d.addSystem({id:"benny-shard-green", name:"Green Shard"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard-green", 
    modelFile: 'modules/' + moduleName + '/models/shard_green.glb'    
  });
  
  // ---------------------------------------------------------
  // Crystal Heart
  dice3d.addSystem({id:"benny-crystal-heart", name:"Red Crystal Heart"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-crystal-heart", 
    modelFile: 'modules/' + moduleName + '/models/crystal_heart.glb'    
  });

  // ---------------------------------------------------------
  // Crystal Heart
  dice3d.addSystem({id:"benny-crystal_heart-animated", name:"Animated Red Crystal Heart"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-crystal_heart-animated", 
    modelFile: 'modules/' + moduleName + '/models/crystal_heart-animated.glb'    
  });  

  // ---------------------------------------------------------
  // UFO
  dice3d.addSystem({id:"benny-ufo", name:"UFO"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-ufo", 
    modelFile: 'modules/' + moduleName + '/models/ufo.glb'    
  });  
  
});
