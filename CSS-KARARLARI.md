# CSS Kararları

## 1. Breakpoint Seçimi

- **Neden 640px ve 1024px seçtim?** Yaygın kabul görmüş değerler: 640px (sm) büyük telefonlar ile tabletler arası, 1024px (lg) tablet ile masaüstü arası. İçerik bu genişliklerde daha okunaklı ve kullanılabilir hale geliyor.
- **İçeriğim bu noktalarda nasıl değişiyor?** Mobilde header ve nav dikey yığın, tablette yatay; Hakkımda bölümü mobilde tek sütun ortalanmış, 640px üzerinde yatay (foto + metin); proje kartları mobilde tek sütun, 640px’te auto-fit grid, 1024px’te sabit 3 sütun. Main genişliği masaüstünde 1200px ile sınırlanıyor.

## 2. Layout Tercihleri

- **Header için neden Flexbox seçtim?** Logo (site adı) ile navigasyonu tek satırda, justify-content: space-between ile biri sola biri sağa hizalamak tek boyutlu bir düzen; Flexbox tam da bunun için uygun. Mobilde flex-direction: column ile dikey yığıyoruz.
- **Proje kartları için neden Grid seçtim?** Kartlar hem satır hem sütun düzeninde; Grid ile repeat(auto-fit, minmax(280px, 1fr)) kullanarak media query yazmadan responsive ızgara elde ettim.
- **auto-fit mi auto-fill mi kullandım, neden?** auto-fit kullandım. Boş sütun kaldığında bunları daraltıp mevcut kartların genişlemesini istiyorum; auto-fill boş sütunları bırakır, kartlar genişlemez.

## 3. Design Tokens

- **Hangi renk paletini seçtim ve neden?** Mavi tonlarında bir palet (primary: #1e3a8a, secondary: #2563eb); kurumsal ve sade. Arka plan ve yüzey için açık gri (#f9fafb), metin için koyu gri (#1f2937) kullandım; kontrast ve okunabilirlik için.
- **Spacing skalasını nasıl belirledim?** 0.25rem (4px) ile 4rem (64px) arasında xs’den 3xl’e kadar 7 adım. Tutarlı boşluk için tüm bileşenlerde var(--space-*) kullandım.
- **Fluid typography için clamp değerlerini nasıl ayarladım?** Her boyut için minimum (rem), tercih (rem + vw) ve maksimum (rem) verdim; sadece vw kullanmadım çünkü zoom’da erişilebilirlik bozulur. Örn. --text-base: clamp(1rem, 0.9rem + 0.5vw, 1.125rem).

## 4. Responsive Stratejiler

- **Mobile-first yaklaşımını nasıl uyguladım?** Varsayılan stiller mobil (dar ekran) için; tablet ve masaüstü için yalnızca min-width: 640px ve min-width: 1024px media query’leri ile ek kurallar yazdım. max-width sadece mobilde nav’ı dikey yapmak için 639px’te kullandım.
- **Hangi elemanlar breakpoint’lerde değişiyor?** Header (column → row), nav listesi (dikey → yatay, linkler block → inline-block), about-content (column ortalanmış → row sola hizalı), section padding’leri, submit butonu (full width → auto), project-grid (1 sütun → auto-fit → 3 sabit sütun), main max-width (1024px’te 1200px).
- **Görsel boyutları nasıl yönettim?** Tüm img’lerde max-width: 100%, height: auto; kart görsellerinde height: 200px ve object-fit: cover ile oran korundu. Hakkımda fotoğrafında aspect-ratio: 1 ve object-fit: cover kullandım.
