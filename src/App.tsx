import { useState } from 'react';
import Button from './components/Button';
import Input from './components/Input';
import Card from './components/Card';
import Alert from './components/Alert';
import UIKit from './pages/UIKit';

function App() {
  const [showUIKit, setShowUIKit] = useState(false);
  const [formAlert, setFormAlert] = useState<string | null>(null);

  const toggleDark = () => {
    document.documentElement.classList.toggle('dark');
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setFormAlert('Mesajınız başarıyla gönderildi!');
    setTimeout(() => setFormAlert(null), 4000);
  };

  return (
    <div className="min-h-screen bg-white dark:bg-gray-950 text-gray-900 dark:text-gray-100 transition-colors">

      {/* Skip link */}
      <a
        href="#main-content"
        className="sr-only focus:not-sr-only focus:absolute focus:top-0 focus:left-0 bg-blue-800 text-white p-2 z-50"
      >
        Ana içeriğe atla
      </a>

      {/* Dark mode toggle */}
      <button
        onClick={toggleDark}
        className="fixed top-4 right-4 z-50 bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 p-2 rounded-full shadow-lg hover:scale-110 transition-transform"
        aria-label="Tema değiştir"
      >
        <span className="dark:hidden">☾</span>
        <span className="hidden dark:inline">☀</span>
      </button>

      {/* Header */}
      <header className="sticky top-0 z-40 bg-white dark:bg-gray-900 border-b border-gray-200 dark:border-gray-700">
        <div className="max-w-6xl mx-auto px-4 py-3 flex flex-col sm:flex-row justify-between items-center gap-3">
          <p className="text-xl font-bold text-blue-800 dark:text-blue-300">
            Berfin Aslan
          </p>
          <nav aria-label="Ana navigasyon">
            <ul className="flex flex-wrap gap-2 list-none p-0 m-0">
              <li>
                <a
                  href="#hakkimda"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Hakkımda
                </a>
              </li>
              <li>
                <a
                  href="#projeler"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  Projeler
                </a>
              </li>
              <li>
                <a
                  href="#iletisim"
                  className="px-3 py-1 rounded-md text-gray-700 dark:text-gray-300 hover:bg-blue-100 dark:hover:bg-gray-800 transition-colors"
                >
                  İletişim
                </a>
              </li>
              <li>
                <button
                  onClick={() => setShowUIKit(!showUIKit)}
                  className="px-3 py-1 rounded-md text-violet-700 dark:text-violet-300 hover:bg-violet-100 dark:hover:bg-gray-800 transition-colors font-medium"
                >
                  UI Kit
                </button>
              </li>
            </ul>
          </nav>
        </div>
      </header>

      {showUIKit ? (
        <UIKit />
      ) : (
        <main id="main-content">
          {/* Hakkımda */}
          <section id="hakkimda" className="py-16 px-4">
            <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start gap-8">
              <figure className="shrink-0">
                <img
                  src="/profil.jpg"
                  alt="Berfin Aslan'ın vesikalık fotoğrafı"
                  className="w-40 h-40 rounded-full object-cover shadow-lg"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src =
                      'https://placehold.co/200x200/1e3a8a/ffffff?text=BA';
                  }}
                />
              </figure>
              <div>
                <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-4 text-center md:text-left">
                  Hakkımda
                </h2>
                <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
                  Web geliştirme ve modern frontend teknolojileri ile ilgileniyorum.
                  Semantik HTML, erişilebilirlik ve responsive tasarım konularında
                  deneyim kazanıyorum.
                </p>
                <ul
                  className="flex flex-wrap gap-2 list-none p-0 m-0"
                  role="list"
                  aria-label="Beceri etiketleri"
                >
                  {['HTML5', 'CSS3', 'JavaScript', 'React', 'TypeScript', 'Tailwind', 'Git'].map(
                    (skill) => (
                      <li
                        key={skill}
                        className="bg-blue-800 text-white px-3 py-1 rounded-full text-sm dark:bg-blue-700"
                      >
                        {skill}
                      </li>
                    )
                  )}
                </ul>
              </div>
            </div>
          </section>

          {/* Projeler */}
          <section
            id="projeler"
            className="py-16 px-4 bg-gray-50 dark:bg-gray-900"
          >
            <div className="max-w-6xl mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-10">
                Projelerim
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                <Card
                  variant="elevated"
                  title="Web Lab Projesi"
                  image="https://placehold.co/600x200/1e3a8a/fff?text=Web+Lab"
                  imageAlt="Web Lab projesi ekran görüntüsü"
                  footer={
                    <Button size="sm" variant="ghost">
                      Detaylar →
                    </Button>
                  }
                >
                  Semantik HTML ve erişilebilirlik üzerine tek sayfalık portföy.
                </Card>
                <Card
                  variant="outlined"
                  title="İkinci Proje"
                  image="https://placehold.co/600x200/2563eb/fff?text=Ikinci+Proje"
                  imageAlt="İkinci proje arayüzü"
                  footer={
                    <Button size="sm" variant="ghost">
                      Detaylar →
                    </Button>
                  }
                >
                  Örnek proje açıklaması. Buraya kendi projenizi ekleyebilirsiniz.
                </Card>
                <Card
                  variant="filled"
                  title="Üçüncü Proje"
                  image="https://placehold.co/600x200/7c3aed/fff?text=Ucuncu+Proje"
                  imageAlt="Üçüncü proje görünümü"
                  footer={
                    <Button size="sm" variant="ghost">
                      Detaylar →
                    </Button>
                  }
                >
                  Responsive tasarım ve modern CSS ile geliştirilmiş örnek uygulama.
                </Card>
              </div>
            </div>
          </section>

          {/* İletişim */}
          <section id="iletisim" className="py-16 px-4">
            <div className="max-w-lg mx-auto">
              <h2 className="text-3xl font-bold text-center text-gray-900 dark:text-white mb-8">
                İletişim
              </h2>

              {formAlert && (
                <div className="mb-6">
                  <Alert variant="success" title="Başarılı" dismissible onDismiss={() => setFormAlert(null)}>
                    {formAlert}
                  </Alert>
                </div>
              )}

              <form className="space-y-4" onSubmit={handleSubmit} noValidate>
                <Input id="name" label="Ad Soyad" placeholder="Berfin Aslan" required />
                <Input
                  id="email"
                  label="E-posta"
                  type="email"
                  helpText="Örnek: ad@mail.com"
                  required
                />
                <div className="space-y-1">
                  <label
                    htmlFor="message"
                    className="block text-sm font-medium text-gray-700 dark:text-gray-300"
                  >
                    Mesajınız
                  </label>
                  <textarea
                    id="message"
                    rows={5}
                    required
                    placeholder="Mesajınızı buraya yazın..."
                    className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:outline-none dark:bg-gray-800 dark:text-gray-100 dark:border-gray-600"
                  />
                </div>
                <Button variant="primary" size="lg" type="submit" className="w-full">
                  Gönder
                </Button>
              </form>
            </div>
          </section>
        </main>
      )}

      {/* Footer */}
      <footer className="bg-gray-100 dark:bg-gray-900 border-t border-gray-200 dark:border-gray-700 text-center py-6 px-4 text-gray-500 dark:text-gray-400 text-sm">
        <p>© 2025 Berfin Aslan. Tüm hakları saklıdır.</p>
      </footer>
    </div>
  );
}

export default App;
