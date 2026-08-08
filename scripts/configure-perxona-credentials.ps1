$ErrorActionPreference = "Stop"

function ConvertFrom-LocalSecureString {
  param([Parameter(Mandatory = $true)][Security.SecureString]$Value)

  $pointer = [Runtime.InteropServices.Marshal]::SecureStringToBSTR($Value)
  try {
    return [Runtime.InteropServices.Marshal]::PtrToStringBSTR($pointer)
  }
  finally {
    [Runtime.InteropServices.Marshal]::ZeroFreeBSTR($pointer)
  }
}

function ConvertTo-DotEnvValue {
  param([Parameter(Mandatory = $true)][string]$Value)

  $escaped = $Value.Replace("\", "\\").Replace('"', '\"')
  $escaped = $escaped.Replace("`r", "\r").Replace("`n", "\n")
  return '"' + $escaped + '"'
}

$email = Read-Host "Enter your Perxona Connect email"
$projectRoot = Split-Path -Parent $PSScriptRoot
$envPath = Join-Path $projectRoot ".env"
$envExamplePath = Join-Path $projectRoot ".env.example"

Write-Host "Configure Food Spirit for Perxona Connect" -ForegroundColor Cyan
Write-Host "The password will be verified with Perxona and stored only in the ignored local .env file."
Write-Host ""

$passwordSecure = Read-Host "Enter your new Perxona Connect password" -AsSecureString
$password = ConvertFrom-LocalSecureString $passwordSecure

try {
  if ([string]::IsNullOrWhiteSpace($email)) {
    throw "The email cannot be empty."
  }
  if ([string]::IsNullOrWhiteSpace($password)) {
    throw "The password cannot be empty."
  }

  $loginBody = @{
    email = $email
    password = $password
  } | ConvertTo-Json -Compress

  $loginResponse = Invoke-WebRequest `
    -Uri "https://console.perxona.ai/asia/api/v1/connect/auth/login" `
    -Method Post `
    -ContentType "application/json" `
    -Body $loginBody `
    -UseBasicParsing `
    -TimeoutSec 30

  if ([int]$loginResponse.StatusCode -ne 200) {
    throw "Perxona returned HTTP $([int]$loginResponse.StatusCode)."
  }

  if (-not (Test-Path -LiteralPath $envPath)) {
    Copy-Item -LiteralPath $envExamplePath -Destination $envPath
  }

  $envText = [IO.File]::ReadAllText($envPath)
  $emailLine = "PERXONA_CONNECT_EMAIL=$email"
  $passwordLine = "PERXONA_CONNECT_PASSWORD=$(ConvertTo-DotEnvValue $password)"

  $envText = [Text.RegularExpressions.Regex]::Replace(
    $envText,
    '(?m)^PERXONA_CONNECT_EMAIL=.*$',
    { param($match) $emailLine }
  )
  $envText = [Text.RegularExpressions.Regex]::Replace(
    $envText,
    '(?m)^PERXONA_CONNECT_PASSWORD=.*$',
    { param($match) $passwordLine }
  )

  [IO.File]::WriteAllText($envPath, $envText, [Text.UTF8Encoding]::new($false))

  Write-Host ""
  Write-Host "Login verified and Food Spirit credentials saved." -ForegroundColor Green
}
catch {
  Write-Host ""
  Write-Host "Configuration failed: $($_.Exception.Message)" -ForegroundColor Red
}
finally {
  $password = $null
  $loginBody = $null
  $loginResponse = $null
}

Write-Host ""
Read-Host "Press Enter to close this window"
