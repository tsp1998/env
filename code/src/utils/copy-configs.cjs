const os = require('os')
const fs = require('fs')
const path = require('path')
const localConfigFolderPath = path.resolve(__dirname, '..', '..', 'configs')
let configFolderPath = ''
const platform = os.platform();
const homeDir = os.homedir()
const { customFolderPath, isRev } = require('./common')

if (customFolderPath) {
  configFolderPath = customFolderPath
} else {
  switch (true) {
    case platform.includes('linux'): {
      configFolderPath = `${homeDir}/.config/Code/User`
    } break;
    case platform.includes('win'): {
      configFolderPath = `${homeDir}/AppData/Roaming/Code/User`
    } break;
  }
}

if (!fs.existsSync(configFolderPath)) {
  fs.mkdirSync(configFolderPath)
}

const configFiles = fs.readdirSync(localConfigFolderPath)
configFiles.forEach(configFile => {
  const srcFilePath = path.join(localConfigFolderPath, configFile)
  const destFilePath = path.join(configFolderPath, configFile)

  const content = isRev ? fs.readFileSync(destFilePath, "utf-8") : JSON.stringify(require(srcFilePath), null, 2)

  if (fs.existsSync(destFilePath)) {
    if (isRev) {
      fs.writeFileSync(srcFilePath, content, "utf-8")
    } else {
      fs.writeFileSync(destFilePath, content, "utf-8")
    }
  }
})