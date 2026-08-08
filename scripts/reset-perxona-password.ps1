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

Write-Host "Perxona Connect password reset" -ForegroundColor Cyan
Write-Host "Your token and password stay in this local window and are sent only to Perxona."
Write-Host ""

$tokenSecure = Read-Host "Paste the reset token" -AsSecureString
$passwordSecure = Read-Host "Enter a new Perxona Connect password" -AsSecureString
$confirmationSecure = Read-Host "Enter the new password again" -AsSecureString

$token = ConvertFrom-LocalSecureString $tokenSecure
$password = ConvertFrom-LocalSecureString $passwordSecure
$confirmation = ConvertFrom-LocalSecureString $confirmationSecure

try {
  if ([string]::IsNullOrWhiteSpace($token)) {
    throw "The reset token cannot be empty."
  }
  if ([string]::IsNullOrWhiteSpace($password)) {
    throw "The password cannot be empty."
  }
  if ($password -cne $confirmation) {
    throw "The two passwords do not match."
  }

  $body = @{
    token = $token
    new_password = $password
    confirm_password = $confirmation
  } | ConvertTo-Json -Compress

  $response = Invoke-WebRequest `
    -Uri "https://console.perxona.ai/asia/api/v1/connect/auth/reset-password" `
    -Method Post `
    -ContentType "application/json" `
    -Body $body `
    -UseBasicParsing `
    -TimeoutSec 30

  if ([int]$response.StatusCode -ne 201) {
    throw "Perxona returned HTTP $([int]$response.StatusCode)."
  }

  Write-Host ""
  Write-Host "Password reset successful." -ForegroundColor Green
}
catch {
  Write-Host ""
  Write-Host "Password reset failed: $($_.Exception.Message)" -ForegroundColor Red
}
finally {
  $token = $null
  $password = $null
  $confirmation = $null
  $body = $null
}

Write-Host ""
Read-Host "Press Enter to close this window"
