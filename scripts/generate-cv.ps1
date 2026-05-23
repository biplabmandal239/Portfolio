$streamLines = @(
  'BT'
  '/F1 24 Tf'
  '72 730 Td'
  '(Biplab Mandal Resume) Tj'
  '0 -32 Td'
  '/F1 14 Tf'
  '(React.js Frontend Developer) Tj'
  '0 -24 Td'
  '(Email: biplabmandalvip@gmail.com) Tj'
  '0 -24 Td'
  '(Location: India) Tj'
  '0 -24 Td'
  '(Experience: Associate Software Developer at Simpsoft Solutions Pvt. Ltd.) Tj'
  '0 -24 Td'
  '(Education: MCA from Vidyasagar University, BCA from Kharagpur College) Tj'
  '0 -24 Td'
  '(Focus: React.js, TypeScript, JavaScript, Redux, Node.js, React Native) Tj'
  '0 -24 Td'
  '(Projects: AgScout, SSuites, SimpVault) Tj'
  '0 -24 Td'
  '(LinkedIn: linkedin.com/in/biplab-mandal-778985271) Tj'
  'ET'
)

$stream = ($streamLines -join "`n") + "`n"
$streamLength = [System.Text.Encoding]::ASCII.GetByteCount($stream)

$objects = @(
  "1 0 obj`n<< /Type /Catalog /Pages 2 0 R >>`nendobj`n",
  "2 0 obj`n<< /Type /Pages /Kids [3 0 R] /Count 1 >>`nendobj`n",
  "3 0 obj`n<< /Type /Page /Parent 2 0 R /MediaBox [0 0 612 792] /Resources << /Font << /F1 5 0 R >> >> /Contents 4 0 R >>`nendobj`n",
  "4 0 obj`n<< /Length $streamLength >>`nstream`n$stream",
  "endstream`nendobj`n",
  "5 0 obj`n<< /Type /Font /Subtype /Type1 /BaseFont /Helvetica >>`nendobj`n"
)

$builder = [System.Text.StringBuilder]::new()
[void]$builder.Append("%PDF-1.4`n")

$offsets = [System.Collections.Generic.List[int]]::new()

foreach ($object in $objects) {
  if ($object -match '^[1-5] 0 obj') {
    [void]$offsets.Add([System.Text.Encoding]::ASCII.GetByteCount($builder.ToString()))
  }

  [void]$builder.Append($object)
}

$xrefStart = [System.Text.Encoding]::ASCII.GetByteCount($builder.ToString())

[void]$builder.Append("xref`n")
[void]$builder.Append("0 6`n")
[void]$builder.Append("0000000000 65535 f `n")

foreach ($offset in $offsets) {
  [void]$builder.Append(([string]::Format('{0:D10} 00000 n ', $offset)) + "`n")
}

[void]$builder.Append("trailer`n")
[void]$builder.Append("<< /Size 6 /Root 1 0 R >>`n")
[void]$builder.Append("startxref`n")
[void]$builder.Append($xrefStart.ToString() + "`n")
[void]$builder.Append("%%EOF`n")

$outputDirectory = Join-Path $PSScriptRoot '..\public\assets'
$outputPath = Join-Path $outputDirectory 'Biplab-Mandal-CV.pdf'

New-Item -ItemType Directory -Force $outputDirectory | Out-Null
[System.IO.File]::WriteAllText($outputPath, $builder.ToString(), [System.Text.Encoding]::ASCII)
