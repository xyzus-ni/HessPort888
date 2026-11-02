---
title: "Cara menambah tulisan di blog ini"
date: 2026-11-02
description: "Panduan singkat tentang cara menulis draft baru, menaruh gambar, dan menyalakan publikasi blog di situs statis ini."
tags: [blog, tutorial, iot]
lang: id
cover: /assets/blog/blog-guide.png
draft: false
---

# Cara menambah tulisan di blog ini

Blog ini dibuat untuk memudahkan Anda menulis konten baru tanpa CMS atau database. Prosesnya cukup sederhana: buat satu file Markdown yang sesuai, jalankan build, lalu deploy.

## 1. Buat file baru

Buka folder `content/blog/` lalu buat file dengan nama slug. Contohnya:

```bash
content/blog/cara-menambah-postingan-di-blog.md
```

Pastikan nama file singkat dan deskriptif, seperti `belajar-esp32-mqtt.md` atau `cara-menambah-postingan-di-blog.md`.

## 2. Isi frontmatter

Setiap file dimulai dengan frontmatter YAML:

```yaml
---
title: "Judul tulisan"
date: 2026-11-02
description: "Ringkasan 1-2 kalimat untuk list dan meta description"
tags: [iot, esp32]
lang: id
cover: /assets/blog/nama-gambar.png
draft: false
---
```

Penjelasan singkat:

- `title`: judul yang muncul di halaman artikel
- `date`: tanggal publikasi
- `description`: deskripsi singkat untuk list dan SEO
- `tags`: array tag untuk filter dan indeks
- `lang`: `id` atau `en`
- `cover`: path gambar opsional
- `draft`: `true` = disembunyikan dari publikasi

## 3. Tulis artikel

Setelah frontmatter, lanjutkan dengan isi Markdown biasa.

```md
## Judul bagian

- Gunakan list bullet
- Gunakan kode blok untuk contoh pengaturan
- Tambahkan gambar dengan format Markdown standar
```

## 4. Jalankan build

Setelah menulis konten, jalankan perintah:

```bash
npm run build:blog
```

Script akan membaca semua file `.md`, mengecek validasi frontmatter, lalu menghasilkan:

- `blog/index.html`
- `blog/<slug>/index.html`
- `blog/posts.json`
- `blog/rss.xml`
- `blog/sitemap.xml`

## 5. Publikasikan

Commit dan push perubahan ke repo. Vercel akan mendeteksi perubahan dan menjalankan build command yang sudah diatur di `vercel.json`.

## Menyembunyikan tulisan

Untuk menahan sebuah artikel agar tidak tampil di blog, cukup ubah:

```yaml
draft: true
```

Saat build berjalan, file tersebut otomatis diabaikan.

## Menambah gambar

Simpan gambar di folder `assets/blog/` lalu arahkan pathnya dalam frontmatter:

```yaml
cover: /assets/blog/nama-gambar.png
```

Pastikan file gambar tersedia di repo sebelum deploy.

## Menulis dalam bahasa Indonesia atau Inggris

Gunakan `lang: id` untuk konten Indonesia dan `lang: en` untuk konten Inggris. Frontmatter juga memengaruhi format tanggal dan metadata halaman artikel.

Dengan sistem ini, Anda cukup menulis satu file Markdown, lalu build akan mengubahnya menjadi halaman blog yang siap dipublikasikan.
