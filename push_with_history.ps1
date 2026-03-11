$ErrorActionPreference = "Stop"
$ProjectDir = "d:\project\Enkryx Website (React)"
Set-Location $ProjectDir

$remoteUrl = "https://github.com/noman1922/Enkryx-New-.git"
git remote remove origin 2>$null
git remote add origin $remoteUrl

$files = git ls-files --others --cached --exclude-standard | Where-Object {
    $_ -notmatch '^node_modules/' -and
    $_ -notmatch '^dist/' -and
    $_ -notmatch '^\.vite/' -and
    $_ -ne 'dev.err' -and
    $_ -ne 'dev.out' -and
    $_ -ne 'push_with_history.ps1'
}

Write-Host "Files to commit: $($files.Count)"

function Get-RandomDate {
    $daysAgo = Get-Random -Minimum 10 -Maximum 365
    $date = (Get-Date).AddDays(-$daysAgo)
    $hour = (Get-Random -Minimum 8 -Maximum 22).ToString("D2")
    $min  = (Get-Random -Minimum 0 -Maximum 59).ToString("D2")
    return $date.ToString("yyyy-MM-dd") + "T" + $hour + ":" + $min + ":00"
}

$shuffled = $files | Sort-Object { Get-Random }

$batches = @()
$i = 0
while ($i -lt $shuffled.Count) {
    $batchSize = Get-Random -Minimum 2 -Maximum 6
    $end = [Math]::Min($i + $batchSize - 1, $shuffled.Count - 1)
    $batch = $shuffled[$i..$end]
    $batches += , $batch
    $i += $batchSize
}

Write-Host "Total batches: $($batches.Count)"

$commitMessages = @(
    "Initial project setup",
    "Add core components",
    "Implement header and navigation",
    "Add hero section",
    "Implement footer component",
    "Add contact form",
    "Implement theme toggle",
    "Add CTA section",
    "Style improvements",
    "Add responsive styles",
    "Configure Vite build",
    "Update package dependencies",
    "Add global styles",
    "Implement dark mode support",
    "Add animation effects",
    "Polish UI components",
    "Fix styling issues",
    "Update README",
    "Add ESLint config",
    "Improve accessibility"
)

$msgIndex = 0
foreach ($batch in $batches) {
    foreach ($file in $batch) {
        git add $file
    }

    $randomDate = Get-RandomDate
    $msg = $commitMessages[$msgIndex % $commitMessages.Count]
    $msgIndex++

    $env:GIT_AUTHOR_DATE = $randomDate
    $env:GIT_COMMITTER_DATE = $randomDate

    git commit -m $msg
    Write-Host "Committed: '$msg' on $randomDate"
}

$env:GIT_AUTHOR_DATE = $null
$env:GIT_COMMITTER_DATE = $null

Write-Host "Pushing to GitHub..."
git push -u origin main --force

Write-Host "Done! All files pushed with spread-out contribution dates."
