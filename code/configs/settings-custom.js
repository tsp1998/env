const settings = require('./settings')

exports.agSettings = {
    ...settings,
    "workbench.colorTheme": "SynthWave84",    
}

exports.gitDisabledSettings = {
    ...settings,
    "git.enabled": false,
}