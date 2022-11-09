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
  // Shard
  dice3d.addSystem({id:"benny-shard", name:"Red Shard"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-shard", 
    modelFile: 'modules/' + moduleName + '/models/shard.glb'    
  });

  // ---------------------------------------------------------
  // Crystal Heart
  dice3d.addSystem({id:"benny-crystal-heart", name:"Crystal Heart"}, false);
  
  dice3d.addDicePreset({
    type:"db",
    system:"benny-crystal-heart", 
    modelFile: 'modules/' + moduleName + '/models/crystal_heart.glb'    
  });
  
});
