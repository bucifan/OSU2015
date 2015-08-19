$output = ""
$outputfolder = "c:/roster/2015/"
$path = "C:\Users\reroach\Documents\osu2015.csv"
$cnt=0

$csv = Import-csv -path $path
foreach($line in $csv) {
  $cnt++
  $pname = $line.name 
  $href= "http://www.ohiostatebuckeyes.com" + $line.url + ".html"
  $filename = "c:/roster/2015/" + $line.url.Substring($line.url.LastIndexOf("/") + 1) +".html" 
  Write-Host " requesting: $href -- $filename"
  [io.file]::WriteAllText($filename,(Invoke-WebRequest -URI "$href").content)
} 
