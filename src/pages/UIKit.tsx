import { useState } from 'react';
import Button from '../components/Button';
import Input from '../components/Input';
import Card from '../components/Card';
import Alert from '../components/Alert';

export default function UIKit() {
  const [dismissedAlerts, setDismissedAlerts] = useState<string[]>([]);

  const dismiss = (id: string) =>
    setDismissedAlerts((prev) => [...prev, id]);

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 p-8 space-y-12">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-gray-900 dark:text-white mb-2">
          UI Kit
        </h1>
        <p className="text-gray-500 dark:text-gray-400 mb-10">
          Tüm component varyantları tek sayfada — Tailwind CSS ile
        </p>

        {/* ---- BUTTONS ---- */}
        <section className="space-y-6">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
            Buttons
          </h2>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Varyant 1–4: Renk varyantları
            </p>
            <div className="flex flex-wrap gap-3">
              {/* Varyant 1 */}
              <Button variant="primary">Primary</Button>
              {/* Varyant 2 */}
              <Button variant="secondary">Secondary</Button>
              {/* Varyant 3 */}
              <Button variant="danger">Danger</Button>
              {/* Varyant 4 */}
              <Button variant="ghost">Ghost</Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Boyut varyantları
            </p>
            <div className="flex flex-wrap items-end gap-3">
              <Button size="sm">Small</Button>
              <Button size="md">Medium</Button>
              <Button size="lg">Large</Button>
            </div>
          </div>

          <div>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-3">
              Disabled durumu
            </p>
            <div className="flex flex-wrap gap-3">
              <Button variant="primary" disabled>
                Primary Disabled
              </Button>
              <Button variant="danger" disabled>
                Danger Disabled
              </Button>
            </div>
          </div>
        </section>

        {/* ---- INPUTS ---- */}
        <section className="space-y-4 max-w-md">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
            Inputs
          </h2>
          {/* Varyant 5 */}
          <Input
            id="ui-name"
            label="Normal Input"
            placeholder="Bir şey yazın..."
          />
          {/* Varyant 6 */}
          <Input
            id="ui-err"
            label="Hatalı Input"
            error="Bu alan zorunludur"
          />
          {/* Varyant 7 */}
          <Input
            id="ui-help"
            label="Help Text"
            type="email"
            helpText="E-posta adresinizi girin"
          />
          {/* Varyant 8 */}
          <Input
            id="ui-dis"
            label="Disabled"
            disabled
            value="Düzenlenemez"
            onChange={() => {}}
          />
        </section>

        {/* ---- CARDS ---- */}
        <section className="space-y-4">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
            Cards
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {/* Varyant 9 */}
            <Card variant="elevated" title="Elevated Card">
              <p>Gölge ile yükseltilmiş kart. Hover'da gölge artar.</p>
            </Card>
            {/* Varyant 10 */}
            <Card variant="outlined" title="Outlined Card">
              <p>Çerçeveli kart. Gölge yerine border kullanır.</p>
            </Card>
            {/* Varyant 11 */}
            <Card
              variant="filled"
              title="Filled Card"
              footer={
                <Button size="sm" variant="primary">
                  Detay
                </Button>
              }
            >
              <p>Dolgulu arka plan. Footer buton ile.</p>
            </Card>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {/* Varyant 12 */}
            <Card
              variant="elevated"
              title="Görselli Kart"
              image="https://placehold.co/600x200/1e3a8a/fff?text=Proje+Görseli"
              imageAlt="Proje görseli"
            >
              <p>Üstte görsel bulunan kart varyantı.</p>
            </Card>
          </div>
        </section>

        {/* ---- ALERTS ---- */}
        <section className="space-y-4 max-w-xl">
          <h2 className="text-2xl font-semibold border-b border-gray-200 dark:border-gray-700 pb-2 text-gray-900 dark:text-white">
            Alerts
          </h2>
          {/* Varyant 13 */}
          <Alert variant="info" title="Bilgi">
            Bilgilendirme mesajı. Mavi renk tonu kullanılır.
          </Alert>
          {/* Varyant 14 */}
          <Alert variant="success" title="Başarılı">
            İşlem tamamlandı. Yeşil renk tonu kullanılır.
          </Alert>
          {/* Varyant 15 */}
          <Alert variant="warning" title="Uyarı">
            Dikkat edilmesi gereken durum. Amber renk tonu.
          </Alert>
          {/* Varyant 16: Dismissible */}
          {!dismissedAlerts.includes('error-alert') && (
            <Alert
              variant="error"
              title="Hata"
              dismissible
              onDismiss={() => dismiss('error-alert')}
            >
              Bağlantı kurulamadı. Tekrar deneyin. (Kapatılabilir alert)
            </Alert>
          )}
          {dismissedAlerts.includes('error-alert') && (
            <div className="text-sm text-gray-400 italic">
              Hata alert'i kapatıldı.{' '}
              <button
                onClick={() =>
                  setDismissedAlerts((prev) =>
                    prev.filter((id) => id !== 'error-alert')
                  )
                }
                className="underline text-blue-500"
              >
                Tekrar göster
              </button>
            </div>
          )}
        </section>

        {/* Özet */}
        <section className="mt-12 p-6 bg-gray-50 dark:bg-gray-900 rounded-xl border border-gray-200 dark:border-gray-700">
          <h2 className="text-xl font-semibold text-gray-900 dark:text-white mb-4">
            Varyant Özeti
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Buttons (4)</p>
              <ul className="mt-1 space-y-1">
                <li>Primary</li>
                <li>Secondary</li>
                <li>Danger</li>
                <li>Ghost</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Inputs (4)</p>
              <ul className="mt-1 space-y-1">
                <li>Normal</li>
                <li>Hatalı</li>
                <li>Help Text</li>
                <li>Disabled</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Cards (3)</p>
              <ul className="mt-1 space-y-1">
                <li>Elevated</li>
                <li>Outlined</li>
                <li>Filled</li>
              </ul>
            </div>
            <div>
              <p className="font-medium text-gray-800 dark:text-gray-200">Alerts (4)</p>
              <ul className="mt-1 space-y-1">
                <li>Info</li>
                <li>Success</li>
                <li>Warning</li>
                <li>Error (Dismissible)</li>
              </ul>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}
