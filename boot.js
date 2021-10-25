const RenJSConfig =  {
  'w': 1920,
  'h': 1080,
  'debugMode': true,
  'guiConfig': 'story/GUI.yaml',
  'storySetup': 'story/Setup.yaml',
  'storyConfig': 'story/Config.yaml',
  'storyText': [
    'story/Story.yaml'
  ],
  'name': "ThatMate_GUI_01",
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'loadingScreen': {},
  'fonts': 'assets/gui/fonts.css',
  'logChoices': true
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()
