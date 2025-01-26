function generatePasswords() {
  var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  var lastRow = sheet.getLastRow(); // Dapatkan baris terakhir
  var data = sheet.getRange(2, 7, lastRow - 1, 1).getValues(); // Kolom ke-7 (Password)
  
  for (var i = 0; i < data.length; i++) {
    if (data[i][0] === "") { // Hanya jika kolom Password kosong
      var password = generateRandomPassword();
      data[i][0] = password; // Isi password
    }
  }
  sheet.getRange(2, 7, lastRow - 1, 1).setValues(data); // Tulis ulang ke kolom Password
}

function generateRandomPassword() {
  var chars = "abcdefghijklmnopqrstuvwxyz0123456789";
  var password = "";
  for (var i = 0; i < 8; i++) {
    var randomIndex = Math.floor(Math.random() * chars.length);
    password += chars[randomIndex];
  }
  return password;
}
