# Set your directory path
$directoryPath = 'C:\Users\hampt\OneDrive\Obsidian Vault\Spaces\Education\VVC\English 101'

# Iterate over each file in the directory
Get-ChildItem -Path $directoryPath -Recurse -File | ForEach-Object {
    # Create a new filename by replacing dashes and underscores
    $newName = $_.Name.Replace('-', '').Replace('_', '')

    # Rename the file
    Rename-Item -Path $_.FullName -NewName $newName
}