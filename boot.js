const RenJSConfig =  {
  'w': 1920,
  'h': 1080,
  'guiConfig': 'story/GUI.yaml',
  'storySetup': 'story/Setup.yaml',
  'storyConfig': 'story/Config.yaml',
  'storyText': [
    'story/Story.yaml'
  ],
  'name': "ThatMate_GUI_01",
  'renderer': Phaser.AUTO, // become renderer
  'scaleMode': Phaser.ScaleManager.SHOW_ALL,
  'loadingScreen': {
  "background": "assets/gui/loaderasset11.jpg",
  "loadingBar": {
    "asset": "assets/gui/loaderasset13.png",
    "position": {
      "x": 378,
      "y": 850
    },
    "size": {
      "w": 1165,
      "h": 111
    }
  }
},
  'fonts': 'assets/gui/fonts.css',
  'logChoices': true,
  'debugMode': false
}

const RenJSGame = new RenJS.game(RenJSConfig)
RenJSGame.launch()
