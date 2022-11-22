const moduleName = '3d-bennies';

Hooks.once('diceSoNiceReady', (dice3d) => {

  const models = [
    {
      id: "bullet",
      name: 'Bullet'
    },
    {
      id: "bullet-case",
      name: 'Bullet Case'
    },
    {
      id: "crystal-heart",
      name: 'Crystal Heart'
    },
    {
      id: "data-card",
      name: 'Data Card'
    },
    {
      id: "dynamite",
      name: 'Dynamite'
    },
    {
      id: "gear",
      name: 'Gear'
    },
    {
      id: "pirate-coin",
      name: 'Pirate Coin'
    },
    {
      id: "siberys-dragonshard",
      name: 'Siberys Dragonshard'
    },
    {
      id: "eberron-dragonshard",
      name: 'Eberron Dragonshard'
    },
    {
      id: "khyber-dragonshard",
      name: 'Khyber Dragonshard'
    },
    {
      id: "skull",
      name: 'Skull'
    },
    {
      id: "the-one-ring",
      name: 'The One Ring'
    },
  ];

  const choices = {};
  for (const model of models) {
    choices[model.id] = model.name;
  }

  game.settings.register(moduleName, 'selectedBenny', {
    name: "Select a Benny",
    hint: "Choose a Benny to use for this world.",
    scope: "world",
    config: true,
    requiresReload: true,
    type: String,
    choices: choices,
    default: "",
    onChange: async (value) => {
      const currentModelID = game.settings.get(moduleName, 'selectedBenny');
      const newModel = models.find((m) => m.id === currentModelID);
      if (currentModelID) {
        delete game.dice3d.DiceFactory.systems[currentModelID];
      }
      dice3d.addSystem({ id: newModel.id, name: newModel.name }, false);
      dice3d.addDicePreset({
        type: "db",
        system: newModel.id,
        modelFile: `modules/${moduleName}/assets/models/${newModel.id}.glb`
      });

      for (const user of game.users) {
        await user.unsetFlag("dice-so-nice", "appearance.db");
        await user.setFlag('dice-so-nice', 'appearance.db', { 'system': value });
      }
    }
  });

  // Get the currently selected model and register it.
  const modelId = game.settings.get(moduleName, 'selectedBenny');
  if (modelId) {
    const model = models.find((m) => m.id === modelId);
    dice3d.addSystem(model, false);
    dice3d.addDicePreset({
      type: "db",
      system: model.id,
      modelFile: `modules/${moduleName}/assets/models/${model.id}.glb`
    });
  }
});
