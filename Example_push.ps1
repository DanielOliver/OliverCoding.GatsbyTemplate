nuget setapikey $((Get-ChildItem -Path env:Nuget_Key).Value)
nuget push .\OliverCoding.GatsbyTemplate.CSharp.0.2.0.nupkg  -Source https://api.nuget.org/v3/index.json