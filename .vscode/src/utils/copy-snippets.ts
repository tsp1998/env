import os from 'os'
import fs from 'fs'
import path from 'path'
const localSnippetFolderPath = path.resolve(__dirname, '..', '..', 'snippets')
let snippetFolderPath = ''
const platform = os.platform();
if (platform === 'linux') {
  snippetFolderPath = '/home/shubham/.config/Code/User/snippets'
}
if (!fs.existsSync(snippetFolderPath)) {
  fs.mkdirSync(snippetFolderPath)
}
const snippetFiles = fs.readdirSync(localSnippetFolderPath)
snippetFiles.forEach(snippetFile => {
  const srcFilePath = path.join(localSnippetFolderPath, snippetFile)
  const destFilePath = path.join(snippetFolderPath, snippetFile)
  if (fs.existsSync(destFilePath)) {
    fs.rmSync(destFilePath)
  }
  fs.copyFileSync(srcFilePath, destFilePath)
})