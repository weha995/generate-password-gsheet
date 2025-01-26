# generate-password-gsheet
# Password Generator for Student Data in Google Sheets

## Overview
This Google Apps Script generates random 8-character passwords for student data stored in a Google Sheet. Each password consists of 4 lowercase letters and 4 numbers arranged randomly. It automatically populates the "Password" column, ensuring that no passwords are repeated.

---

## Dummy Data Example
Below is an example of how the data in the Google Sheet should look before running the script:

| No | Nama         | Kelas | No HP       | NISN         | Username   | Password  |
|----|--------------|-------|-------------|--------------|------------|-----------|
| 1  | Budi Santoso | X-1   | 08123456789 | 1234567890   | 1234567890 |           |
| 2  | Siti Aminah  | X-2   | 08129876543 | 0987654321   | 0987654321 |           |
| 3  | Andi Wijaya  | X-3   | 08126789012 | 9876543210   | 9876543210 |           |
| 4  | Rina Kartika | X-4   | 08122334455 | 8765432109   | 8765432109 |           |
| 5  | Agus Pratama | X-5   | 08129870001 | 7654321098   | 7654321098 |           |
| 6  | Wati Handini | X-6   | 08124445566 | 6543210987   | 6543210987 |           |
| 7  | Dani Saputra | X-7   | 08123334455 | 5432109876   | 5432109876 |           |
| 8  | Fina Agustin | X-8   | 08121122334 | 4321098765   | 4321098765 |           |
| 9  | Aldi Setiawan| X-9   | 08125556677 | 3210987654   | 3210987654 |           |
| 10 | Maya Sari    | X-10  | 08128887766 | 2109876543   | 2109876543 |           |

After running the script, the "Password" column will be automatically filled with randomly generated passwords like the following example:

| No | Nama         | Kelas | No HP       | NISN         | Username   | Password  |
|----|--------------|-------|-------------|--------------|------------|-----------|
| 1  | Budi Santoso | X-1   | 08123456789 | 1234567890   | 1234567890 | x4t9g6w7  |
| 2  | Siti Aminah  | X-2   | 08129876543 | 0987654321   | 0987654321 | 8a3f7r2t  |
| 3  | Andi Wijaya  | X-3   | 08126789012 | 9876543210   | 9876543210 | w5t2y3x9  |
| 4  | Rina Kartika | X-4   | 08122334455 | 8765432109   | 8765432109 | t9y4x6w3  |
| 5  | Agus Pratama | X-5   | 08129870001 | 7654321098   | 7654321098 | 6x3w7t2a  |
| 6  | Wati Handini | X-6   | 08124445566 | 6543210987   | 6543210987 | r4t2y6w5  |
| 7  | Dani Saputra | X-7   | 08123334455 | 5432109876   | 5432109876 | w9x3t7a6  |
| 8  | Fina Agustin | X-8   | 08121122334 | 4321098765   | 4321098765 | t5y9x4w7  |
| 9  | Aldi Setiawan| X-9   | 08125556677 | 3210987654   | 3210987654 | r7w3t2x6  |
| 10 | Maya Sari    | X-10  | 08128887766 | 2109876543   | 2109876543 | y9x5t4w3  |

---

## How to Use
1. Open your Google Sheet containing the student data.
2. Go to **Extensions > Apps Script** to open the script editor.
3. Copy and paste the following script into the editor:

   ```javascript
   function generatePasswords() {
     var sheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
     var lastRow = sheet.getLastRow(); // Get the last row of data
     var data = sheet.getRange(2, 7, lastRow - 1, 1).getValues(); // Column 7 (Password)
     
     for (var i = 0; i < data.length; i++) {
       if (data[i][0] === "") { // Only generate if the password cell is empty
         var password = generateRandomPassword();
         data[i][0] = password; // Assign the generated password
       }
     }
     sheet.getRange(2, 7, lastRow - 1, 1).setValues(data); // Write back to the Password column
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
