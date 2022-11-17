import os from 'os'
import fs from 'fs'
import path from 'path'
const localSnippetFolderPath = path.resolve(__dirname, '..', '..', 'snippets')
let snippetFolderPath = ''
const platform = os.platform();
const homeDir = os.homedir()

switch (true) {
  case platform.includes('linux'): {
    snippetFolderPath = `${homeDir}/.config/Code/User/snippets`
  } break;
  case platform.includes('win'): {
    snippetFolderPath = `${homeDir}/AppData/Roaming/Code/User/snippets`
  } break;
}

if (!fs.existsSync(snippetFolderPath)) {
  fs.mkdirSync(snippetFolderPath)
}
const snippetFiles: string[] = fs.readdirSync(localSnippetFolderPath)
snippetFiles.forEach(snippetFile => {
  const srcFilePath = path.join(localSnippetFolderPath, snippetFile)
  const destFilePath = path.join(snippetFolderPath, snippetFile)
  if (fs.existsSync(destFilePath)) {
    fs.rmSync(destFilePath)
  }
  fs.copyFileSync(srcFilePath, destFilePath)
})