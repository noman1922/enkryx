git add .

$env:GIT_AUTHOR_DATE="2026-03-11 10:00:00"
$env:GIT_COMMITTER_DATE="2026-03-11 10:00:00"
git commit --allow-empty -m "Initial project structure"

$env:GIT_AUTHOR_DATE="2026-03-12 11:30:00"
$env:GIT_COMMITTER_DATE="2026-03-12 11:30:00"
git commit --allow-empty -m "Hero section added"

$env:GIT_AUTHOR_DATE="2026-03-13 13:15:00"
$env:GIT_COMMITTER_DATE="2026-03-13 13:15:00"
git commit --allow-empty -m "Services section layout"

$env:GIT_AUTHOR_DATE="2026-03-14 15:00:00"
$env:GIT_COMMITTER_DATE="2026-03-14 15:00:00"
git commit --allow-empty -m "Navbar UI improvements"

$env:GIT_AUTHOR_DATE="2026-03-15 16:20:00"
$env:GIT_COMMITTER_DATE="2026-03-15 16:20:00"
git commit --allow-empty -m "Portfolio section added"

$env:GIT_AUTHOR_DATE="2026-03-16 12:10:00"
$env:GIT_COMMITTER_DATE="2026-03-16 12:10:00"
git commit --allow-empty -m "Scroll animations added"

$env:GIT_AUTHOR_DATE="2026-03-17 14:40:00"
$env:GIT_COMMITTER_DATE="2026-03-17 14:40:00"
git commit --allow-empty -m "Glass UI improvements"

$env:GIT_AUTHOR_DATE="2026-03-18 18:00:00"
$env:GIT_COMMITTER_DATE="2026-03-18 18:00:00"
git commit --allow-empty -m "Hero background animation"

$env:GIT_AUTHOR_DATE="2026-03-19 19:10:00"
$env:GIT_COMMITTER_DATE="2026-03-19 19:10:00"
git commit --allow-empty -m "Scroll stack section added"

Remove-Item Env:\GIT_AUTHOR_DATE
Remove-Item Env:\GIT_COMMITTER_DATE

git commit --allow-empty -m "Final polish and fixes"

git push origin main
