const args = process.argv.slice(2)
exports.args = args

const [customFolderPath] = args
exports.customFolderPath = customFolderPath

const isRev = args.join().includes('--rev')
exports.isRev = isRev