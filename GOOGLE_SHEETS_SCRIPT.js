/**
 * SIMON - GOOGLE APPS SCRIPT FOR REALTIME SPREADSHEET SYNC
 * Sistem Informasi Monitoring Peminjaman Inventaris
 * Spreadsheet Target: https://docs.google.com/spreadsheets/d/1ZjX4fuP49EXl4H9PvFXs59p6ZqfPHX9eKbQokskV0T0/edit
 */

function doGet(e) {
  return ContentService.createTextOutput("SIMON Webhook Active - Connected to Spreadsheet ID: 1ZjX4fuP49EXl4H9PvFXs59p6ZqfPHX9eKbQokskV0T0");
}

function doPost(e) {
  try {
    var contents = "";
    if (e && e.parameter && e.parameter.payload) {
      contents = e.parameter.payload;
    } else if (e && e.postData && e.postData.contents) {
      contents = e.postData.contents;
    }

    if (!contents) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Payload kosong" }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    var data = JSON.parse(contents);
    var SPREADSHEET_ID = "1ZjX4fuP49EXl4H9PvFXs59p6ZqfPHX9eKbQokskV0T0";
    
    var ss;
    try {
      ss = SpreadsheetApp.openById(SPREADSHEET_ID);
    } catch (errOpen) {
      ss = SpreadsheetApp.getActiveSpreadsheet();
    }

    if (!ss) {
      return ContentService.createTextOutput(JSON.stringify({ status: "error", message: "Gagal membuka Spreadsheet ID: " + SPREADSHEET_ID }))
        .setMimeType(ContentService.MimeType.JSON);
    }

    // 1. Tulis Data ke Tab "Inventaris"
    if (data.inventaris && data.inventaris.length > 0) {
      var sheetInv = ss.getSheetByName("Inventaris");
      if (!sheetInv) {
        sheetInv = ss.insertSheet("Inventaris", 0);
      }
      sheetInv.clearContents();
      sheetInv.getRange(1, 1, data.inventaris.length, data.inventaris[0].length).setValues(data.inventaris);
      sheetInv.getRange(1, 1, 1, data.inventaris[0].length).setFontWeight("bold").setBackground("#e2e8f0");
    }

    // 2. Tulis Data ke Tab "Peminjaman"
    if (data.peminjaman && data.peminjaman.length > 0) {
      var sheetPinjam = ss.getSheetByName("Peminjaman");
      if (!sheetPinjam) {
        sheetPinjam = ss.insertSheet("Peminjaman", 1);
      }
      sheetPinjam.clearContents();
      sheetPinjam.getRange(1, 1, data.peminjaman.length, data.peminjaman[0].length).setValues(data.peminjaman);
      sheetPinjam.getRange(1, 1, 1, data.peminjaman[0].length).setFontWeight("bold").setBackground("#e2e8f0");
    }

    return ContentService.createTextOutput(JSON.stringify({ status: "success", message: "Berhasil menyinkronkan data ke Google Sheets" }))
      .setMimeType(ContentService.MimeType.JSON);
  } catch (err) {
    return ContentService.createTextOutput(JSON.stringify({ status: "error", message: err.toString() }))
      .setMimeType(ContentService.MimeType.JSON);
  }
}
