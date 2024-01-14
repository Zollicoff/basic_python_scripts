# Set your directory path
$directoryPath = 'LOCATION OF FILES'

# Iterate over each file in the directory
Get-ChildItem -Path $directoryPath -Recurse -File | ForEach-Object {
    # Create a new filename by replacing dashes and underscores
    $newName = $_.Name.Replace('-', '').Replace('_', '')

    # Rename the file
    Rename-Item -Path $_.FullName -NewName $newName
}

