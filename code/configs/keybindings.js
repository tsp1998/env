const keybindings = [
    {
        "key": "ctrl+l",
        "command": "-workbench.action.chat.newChat",
        "when": "chatIsEnabled && inChat"
    },
    {
        "key": "ctrl+l",
        "command": "-notebook.centerActiveCell",
        "when": "notebookEditorFocused"
    },
    {
        "key": "shift+alt+down",
        "command": "editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+alt+down",
        "command": "-editor.action.copyLinesDownAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "shift+alt+down",
        "command": "-editor.action.insertCursorBelow",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+up",
        "command": "-editor.action.insertCursorAbove",
        "when": "editorTextFocus"
    },
    {
        "key": "shift+alt+up",
        "command": "editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+alt+up",
        "command": "-editor.action.copyLinesUpAction",
        "when": "editorTextFocus && !editorReadonly"
    },
    {
        "key": "ctrl+shift+/",
        "command": "editor.action.blockComment",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+k ctrl+/",
        "command": "-editor.foldAllBlockComments",
        "when": "editorTextFocus && foldingEnabled"
    },
    {
        "key": "ctrl+alt+n",
        "command": "workbench.files.action.createFolderFromExplorer"
    },
    {
        "key": "ctrl+alt+m",
        "command": "workbench.files.action.createFileFromExplorer"
    },
    {
        "key": "ctrl+meta+q",
        "command": "workbench.action.quit"
    },
    {
        "key": "ctrl+q",
        "command": "-workbench.action.quit"
    },
    {
        "key": "ctrl+q",
        "command": "workbench.action.remote.close"
    },
    {
        "key": "shift+alt+f",
        "command": "editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
        "key": "ctrl+shift+i",
        "command": "-editor.action.formatDocument",
        "when": "editorHasDocumentFormattingProvider && editorTextFocus && !editorReadonly && !inCompositeEditor"
    },
    {
        "key": "ctrl+alt+f",
        "command": "editor.action.formatDocument.none",
        "when": "editorTextFocus && !editorHasDocumentFormattingProvider && !editorReadonly"
    },
    {
        "key": "ctrl+shift+i",
        "command": "-editor.action.formatDocument.none",
        "when": "editorTextFocus && !editorHasDocumentFormattingProvider && !editorReadonly"
    },
    {
        "key": "ctrl+b",
        "command": "-workbench.action.toggleSidebarVisibility"
    }
]

module.exports = keybindings;