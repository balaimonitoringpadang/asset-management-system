@echo off
title LABBORROW Build Script
echo ========================================================
echo         LABBORROW - Building Application
echo ========================================================
echo.
call npm install --legacy-peer-deps
call npm run build
echo.
echo ========================================================
echo  Build berhasil!
echo ========================================================
pause
