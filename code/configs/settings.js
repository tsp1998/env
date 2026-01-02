const settings = {
    "workbench.startupEditor": "none",
    "extensions.autoUpdate": false,
    "explorer.confirmDelete": false,
    "editor.mouseWheelZoom": true,
    "editor.fontLigatures": true,
    "editor.fontFamily": "Fira Code",
    "editor.fontSize": 16,
    "editor.tabSize": 2,
    "editor.wordWrap": "on",
    "explorer.confirmDragAndDrop": false,
    "javascript.updateImportsOnFileMove.enabled": "always",
    "javascript.suggest.classMemberSnippets.enabled": false,
    "typescript.suggest.classMemberSnippets.enabled": false,
    "typescript.suggest.objectLiteralMethodSnippets.enabled": false,
    "tailwindCSS.classAttributes": [
        "class",
        "className",
        "class:list",
        "_class",
        "_className"
    ],
    "typescript.updateImportsOnFileMove.enabled": "always",
    "tailwindCSS.experimental.classRegex": [
        ":*\\s*\\/\\*\\s*tw\\s*\\*\\/\\s*['`\"](.*)['`\"]"
    ],
    "telemetry.feedback.enabled": false,
    "telemetry.telemetryLevel": "off",
    "editor.experimental.treeSitterTelemetry": false,
    "git.autorefresh": false,
    "scm.diffDecorations": "none",
    "editor.formatOnSave": false,
    "update.mode": "manual",
    "extensions.autoCheckUpdates": false,
    "workbench.enableExperiments": false,
    "search.exclude": {
        "**/node_modules": true,
        "**/.git": true,
        "**/dist": true,
        "**/build": true,
        "**/coverage": true,
        "**/out": true,
        "**/temp": true,
        "**/tmp": true
    },
    "editor.cursorBlinking": "solid",
    "editor.matchBrackets": "near",
    "workbench.editor.empty.hint": "hidden",
    "window.menuBarVisibility": "toggle",
    "editor.minimap.autohide": "mouseover",
    "editor.codeLens": false,
    "workbench.secondarySideBar.defaultVisibility": "hidden",
    "files.watcherExclude": {
        "**/.git/objects/**": true,
        "**/node_modules/**": true,
        "**/dist/**": true
    },
    "editor.hover.delay": 1000,
}

module.exports = settings;