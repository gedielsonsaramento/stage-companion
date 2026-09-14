@echo off
setlocal
cd /d "%~dp0server"
set "GOOS=windows"
set "GOARCH=amd64"
set "CGO_ENABLED=0"
go build -trimpath -ldflags="-s -w -H=windowsgui" -o "..\StageCompanion-Servidor-08G-R9.exe" main.go
if errorlevel 1 exit /b 1
echo Compilacao concluida.
endlocal
