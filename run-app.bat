@echo off
title SIMON - Sistem Informasi Monitoring Peminjaman Inventaris
echo ========================================================
echo   SIMON - Sistem Informasi Monitoring Peminjaman Inventaris
echo      Balai Monitoring Frekuensi Radio Kelas II Padang
echo ========================================================
echo.
echo Menjalankan aplikasi SIMON...
start "" http://localhost:5173
call npm run dev
pause
