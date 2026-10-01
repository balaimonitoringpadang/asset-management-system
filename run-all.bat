@echo off
title SIMON Application Launcher
echo ========================================================
echo   SIMON - Sistem Informasi Monitoring Peminjaman Inventaris
echo ========================================================
echo.
echo Menjalankan aplikasi di http://localhost:5173 ...
start "" http://localhost:5173
call npm run dev
pause
