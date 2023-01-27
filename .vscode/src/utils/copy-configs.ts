import os from 'os'
import fs from 'fs'
import path from 'path'
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
const configFiles: string[] = fs.readdirSync(localConfigFolderPath)
configFiles.forEach(configFile => {
  const srcFilePath = path.join(localConfigFolderPath, configFile)
  const destFilePath = path.join(configFolderPath, configFile)
  if (fs.existsSync(destFilePath)) {
    fs.rmSync(destFilePath)
  }
  fs.copyFileSync(srcFilePath, destFilePath)
})