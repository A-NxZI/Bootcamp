<!-- setcookie(name, value, expire, path, domain, secure, httponly);
```

**Penjelasan Parameter:**
* **`name`** (Wajib): Nama dari cookie.
* **`value`** (Wajib): Nilai atau data yang disimpan dalam cookie.
* **`expire`** (Opsional): Waktu kedaluwarsa dalam format *Unix timestamp* (misalnya `time() + 3600` untuk 1 jam ke depan). Jika dikosongkan atau `0`, cookie akan terhapus saat browser ditutup.
* **`path`** (Opsional): Jalur direktori di server tempat cookie berlaku (contoh `'/'` untuk seluruh website).
* **`domain`** (Opsional): Nama domain yang diizinkan mengakses cookie.
* **`secure`** (Opsional): Nilai `TRUE` jika cookie hanya dikirim melalui koneksi HTTPS yang aman.
* **`httponly`** (Opsional): Jika diatur ke `TRUE`, cookie tidak dapat diakses melalui JavaScript di sisi klien.

*Catatan penting:* Fungsi `setcookie()` **harus dipanggil sebelum ada output apa pun** dikirim ke browser (sebelum tag `<html>`, spasi kosong, atau perintah `echo`) karena cookie adalah bagian dari *header* HTTP.

---

### Contoh Pembuatan Cookie -->

```php
<?php
// Membuat cookie bernama "username" dengan nilai "Ismail" berdurasi 1 jam
setcookie("username", "Ismail", time() + 3600, "/");
echo "Cookie 'username' berhasil dibuat!";
?>
```

---

### Cara Mengambil Nilai Cookie

Untuk membaca atau mengambil nilai dari cookie yang sudah diset, gunakan variabel superglobal `$_COOKIE['nama_cookie']`:

```php
<?php
if (isset($_COOKIE['username'])) {
    echo "Halo, " . $_COOKIE['username'];
} else {
    echo "Cookie belum diset.";
}
?>
```

---

### Cara Menghapus Cookie

Untuk menghapus cookie, panggil kembali fungsi `setcookie()` dengan nama yang sama, tetapi atur waktu kedaluwarsa ke masa lalu (misalnya `time() - 3600`):

```php
<?php
setcookie("username", "", time() - 3600, "/");
echo "Cookie 'username' telah dihapus.";
?>
```

Dokumentasi lengkap dan resmi bisa Anda pelajari melalui [Dokumentasi PHP.net](https://php.net).

<FollowUp>
Jika Anda mau, saya bisa membantu membuatkan contoh kode yang lebih spesifik, seperti:
* **Sistem "Remember Me"** pada halaman login
* **Keranjang belanja sederhana** menggunakan cookie
* Cara mengatasi error *"Headers already sent"*

Bagaimana rencana penerapan cookie pada proyek Anda?
</FollowUp>