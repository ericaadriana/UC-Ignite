# Bumper IGNITE 2026

Bumper pembuka IGNITE — UC Global Entrepreneurship Week 2026 (78 detik, 1920×1080, 25 fps).
Dibuat sebagai animasi HTML/CSS yang dirender frame demi frame, mengikuti storyboard 14 scene.

## Isi folder

- `index.html` — seluruh animasi. Setiap scene punya waktu mulai (`--s`) dan selesai (`--e`) dalam detik.
- `render.cjs` — merender frame ke JPEG dengan Playwright.
- `a/` — aset yang sudah dipotong dari file di repo (logo, foto pembicara, latar).
- `fonts/` — League Spartan (lisensi OFL).

## Pratinjau

Buka `index.html?play` di Chrome untuk memutar animasi secara langsung.

## Render ulang

```bash
mkdir -p /tmp/frames
```

```bash
node render.cjs /tmp/frames 0 1950
```

```bash
ffmpeg -framerate 25 -i /tmp/frames/f%05d.jpg -c:v libx264 -crf 21 -preset slow -pix_fmt yuv420p -movflags +faststart "Bumper Ignite 2026.mp4"
```

Video belum memiliki musik. Untuk menambahkan musik:

```bash
ffmpeg -i "Bumper Ignite 2026.mp4" -i musik.mp3 -c:v copy -c:a aac -b:a 192k -af "afade=t=out:st=66:d=4" -t 78 "Bumper Ignite 2026 (musik).mp4"
```
