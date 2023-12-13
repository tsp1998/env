const os = require('os')
const fs = require('fs')
const path = require('path')
const localConfigFolderPath = path.resolve(__dirname, '..', '..', 'configs')
let configFolderPath = ''
const platform = os.platform();
const homeDir = os.homedir()

switch (true) {
  case platform.includes('linux'): {
    configFolderPath = `${homeDir}/.config/Code/User`
  } break;
  case platform.includes('win'): {
    configFolderPath = `${homeDir}/AppData/Roaming/Code/User`
  } break;
}

if (!fs.existsSync(configFolderPath)) {
  fs.mkdirSync(configFolderPath)
}
const configFiles = fs.readdirSync(localConfigFolderPath)
configFiles.forEach(configFile => {
  const srcFilePath = path.join(localConfigFolderPath, configFile)
  const destFilePath = path.join(configFolderPath, configFile)
  if (fs.existsSync(destFilePath)) {
    if ((process.argv[2] || '').includes('rev')) {
      fs.rmSync(srcFilePath)
    } else {
      fs.rmSync(destFilePath)
    }
  }
  if ((process.argv[2] || '').includes('rev')) {
    fs.copyFileSync(destFilePath, srcFilePath)
  } else {
    fs.copyFileSync(srcFilePath, destFilePath)
  }
})