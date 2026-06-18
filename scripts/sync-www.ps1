# Sync web assets to www/ for Capacitor
$root = Split-Path -Parent $PSScriptRoot
$www = Join-Path $root "www"

# Create www directory if not exists
if (-not (Test-Path $www)) {
    New-Item -ItemType Directory -Path $www -Force | Out-Null
}

# Files and directories to copy
$include = @(
    "*.html", "*.css", "*.js", "*.json", "*.xml", "*.ico", "*.png", "*.svg",
    ".htaccess", "htaccess.txt"
)

# Copy root files
Get-ChildItem -Path $root -Include $include -Depth 0 | ForEach-Object {
    Copy-Item -Path $_.FullName -Destination $www -Force
}

# Copy assets folder
if (Test-Path (Join-Path $root "assets")) {
    Copy-Item -Path (Join-Path $root "assets") -Destination $www -Recurse -Force
}

Write-Host "✓ Web assets synced to www/"
