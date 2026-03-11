$ErrorActionPreference = "Stop"
$ProjectDir = "d:\project\Enkryx Website (React)"
Set-Location $ProjectDir

# ---- CONFIG ----
$TotalCommits  = 250   # How many fake commits to make
$DaysBack      = 365   # How far back to spread them (days)
# ----------------

$logFile = "$ProjectDir\contribution_log.txt"

$commitMessages = @(
    "refactor: improve code readability",
    "fix: resolve minor UI glitch",
    "chore: update dependencies",
    "style: adjust spacing and alignment",
    "feat: add minor UX improvement",
    "docs: update inline comments",
    "perf: optimize rendering logic",
    "fix: correct typo in component",
    "chore: clean up unused imports",
    "style: improve button hover state",
    "feat: enhance dark mode colors",
    "fix: resolve edge case in form validation",
    "refactor: simplify conditional logic",
    "chore: lint and format code",
    "style: update color variables",
    "feat: add smooth scroll behavior",
    "fix: correct z-index layering",
    "docs: add JSDoc to utility functions",
    "perf: lazy load images",
    "chore: remove console.log statements",
    "style: improve mobile responsiveness",
    "feat: add focus outline for accessibility",
    "fix: resolve broken link in footer",
    "refactor: extract reusable hook",
    "chore: update .gitignore",
    "style: refine typography scale",
    "feat: add loading skeleton",
    "fix: patch CSS specificity issue",
    "perf: reduce bundle size",
    "chore: organize file structure",
    "docs: update README",
    "style: unify border-radius values",
    "feat: add keyboard navigation support",
    "fix: resolve hydration mismatch",
    "refactor: move logic to utility file",
    "chore: upgrade ESLint rules",
    "style: add transition to theme toggle",
    "feat: improve hero section layout",
    "fix: correct header z-index",
    "perf: debounce scroll handler"
)

function Get-RandomDate {
    $daysAgo = Get-Random -Minimum 1 -Maximum $DaysBack
    $d = (Get-Date).AddDays(-$daysAgo)
    $h = (Get-Random -Minimum 7 -Maximum 23).ToString("D2")
    $m = (Get-Random -Minimum 0 -Maximum 59).ToString("D2")
    $s = (Get-Random -Minimum 0 -Maximum 59).ToString("D2")
    return $d.ToString("yyyy-MM-dd") + "T" + $h + ":" + $m + ":" + $s
}

Write-Host "Starting fake contribution generation: $TotalCommits commits..."
$logFile | Out-Null

for ($i = 1; $i -le $TotalCommits; $i++) {
    $randomDate = Get-RandomDate
    $msg = $commitMessages[($i - 1) % $commitMessages.Count]

    # Write a tiny change to a tracker file
    $content = "# contribution $i`n date: $randomDate`n msg: $msg"
    Set-Content -Path "$ProjectDir\.contrib_tracker" -Value $content -NoNewline

    git add .contrib_tracker

    $env:GIT_AUTHOR_DATE    = $randomDate
    $env:GIT_COMMITTER_DATE = $randomDate

    git commit -m $msg --quiet

    if ($i % 25 -eq 0) {
        Write-Host "  [$i / $TotalCommits] commits done..."
    }
}

$env:GIT_AUTHOR_DATE    = $null
$env:GIT_COMMITTER_DATE = $null

Write-Host "All $TotalCommits commits created! Pushing to GitHub..."
git push origin main --force

Write-Host "DONE! Your GitHub contribution graph just got a LOT greener!"
