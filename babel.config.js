module.exports = {
  presets: ['module:metro-react-native-babel-preset'],
  "plugins": [
    [
      "module-resolver",
      {
        "root": [
          "./src"
        ],
        "alias": {
          "Navigation": "./navigation",
          "Screens": "./Screens",
          "Images": "./images",
          "Components": "./components",
          "Providers": "./Providers",
          "Hooks": "./hooks",
          "Constants": "./constants",
          "Root": "./"
        }
      }
    ]
  ]
};
