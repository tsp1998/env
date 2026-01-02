const keybindings = require('./keybindings')

exports.agKeybindings = [
    {
        "key": "ctrl+b",
        "command": "antigravity.prioritized.chat.open"
    },
    {
        "key": "ctrl+e",
        "command": "-antigravity.switchBetweenWorkspaceAndAgent"
    },
    {
        "key": "ctrl+alt+a",
        "command": "antigravity.switchBetweenWorkspaceAndAgent"
    },
    {
        "key": "ctrl+l",
        "command": "-antigravity.prioritized.chat.open",
        "when": "!terminalFocus"
    },
    ...keybindings   
]