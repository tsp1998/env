const os = require('os')
const fs = require('fs')
const path = require('path')
const localSnippetFolderPath = path.resolve(__dirname, '..', '..', 'snippets')
let snippetFolderPath = ''
const platform = os.platform();
const homeDir = os.homedir()
const { customFolderPath, isRev } = require('./common')

if (customFolderPath) {
  snippetFolderPath = customFolderPath
} else {
  switch (true) {
    case platform.includes('linux'): {
      snippetFolderPath = `${homeDir}/.config/Code/User/snippets`
    } break;
    case platform.includes('win'): {
      snippetFolderPath = `${homeDir}/AppData/Roaming/Code/User/snippets`
    } break;
  }
}

if (!fs.existsSync(snippetFolderPath)) {
  fs.mkdirSync(snippetFolderPath)
}

const snippetFiles = fs.readdirSync(localSnippetFolderPath)
snippetFiles.forEach(snippetFile => {
  const srcFilePath = path.join(localSnippetFolderPath, snippetFile)
  const destFilePath = path.join(snippetFolderPath, snippetFile)

  if (fs.existsSync(destFilePath)) {
    if (isRev) {
      fs.rmSync(srcFilePath)
    } else {
      fs.rmSync(destFilePath)
    }
  }
  if (isRev) {
    fs.copyFileSync(destFilePath, srcFilePath)
  } else {
    fs.copyFileSync(srcFilePath, destFilePath)
  }
})