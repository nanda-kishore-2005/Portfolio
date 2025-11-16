# Fixing PowerShell Execution Policy Error

If you're getting this error:
```
npm : File C:\Program Files\nodejs\npm.ps1 cannot be loaded because running scripts is disabled on this system.
```

Here are several solutions:

## Solution 1: Use npm.cmd (Quickest Fix)

Instead of using `npm`, use `npm.cmd` in PowerShell:

```powershell
npm.cmd install
npm.cmd run dev
npm.cmd run build
```

## Solution 2: Change PowerShell Execution Policy (Recommended)

Open PowerShell as Administrator and run:

```powershell
Set-ExecutionPolicy -ExecutionPolicy RemoteSigned -Scope CurrentUser
```

Then type `Y` when prompted.

**What this does:**
- `RemoteSigned`: Allows local scripts to run, but requires downloaded scripts to be signed
- `CurrentUser`: Only affects your user account (doesn't require admin rights)

## Solution 3: Use Command Prompt (cmd) Instead

Instead of PowerShell, use Command Prompt (cmd) or Windows Terminal with cmd:

1. Press `Win + R`
2. Type `cmd` and press Enter
3. Navigate to your project:
   ```cmd
   cd "C:\Users\nanda\Desktop\VS Codes\Portfolio"
   ```
4. Run npm commands normally:
   ```cmd
   npm install
   npm run dev
   ```

## Solution 4: Bypass for Single Session

Run this command in PowerShell before using npm:

```powershell
Set-ExecutionPolicy -ExecutionPolicy Bypass -Scope Process
```

This only affects the current PowerShell session.

## Solution 5: Create an Alias

Add this to your PowerShell profile to always use npm.cmd:

```powershell
Set-Alias npm npm.cmd
```

To edit your profile:
```powershell
notepad $PROFILE
```

If the file doesn't exist, create it:
```powershell
New-Item -Path $PROFILE -Type File -Force
notepad $PROFILE
```

## Recommended Approach

For this project, I recommend **Solution 1** (using `npm.cmd`) as it's the quickest and doesn't require changing system settings.

## Verifying the Fix

After applying any solution, verify it works:

```powershell
npm.cmd --version
# or
npm --version  # (if you changed execution policy)
```

---

**Note:** The dev server is already running using `npm.cmd`. You should be able to access your portfolio at:
http://localhost:3000












