import './App.css'

function App() {
  return (
    <>
      <a href="#main-content" className="skip-link">
        Ana içeriğe atla
      </a>

      <header>
        <p className="site-title">Berfin Aslan</p>
        <nav aria-label="Ana navigasyon">
          <ul>
            <li><a href="#hakkimda">Hakkımda</a></li>
            <li><a href="#projeler">Projeler</a></li>
            <li><a href="#iletisim">İletişim</a></li>
          </ul>
        </nav>
      </header>

      <main id="main-content">
        <section id="hakkimda">
          <h2>Hakkımda</h2>
          <div className="about-content">
            <figure>
              <img
                src="/profil.jpg"
                alt="Berfin Aslan'ın vesikalık fotoğrafı"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = 'https://placehold.co/200x200/1e3a8a/ffffff?text=Profil';
                }}
              />
              <figcaption>Berfin Aslan</figcaption>
            </figure>
            <div>
              <p>Web geliştirme ve modern frontend teknolojileri ile ilgileniyorum.</p>
              <ul className="skill-tags" role="list" aria-label="Beceri etiketleri">
                <li>HTML5</li>
                <li>CSS3</li>
                <li>JavaScript</li>
                <li>React</li>
                <li>TypeScript</li>
                <li>Git</li>
              </ul>
            </div>
          </div>
        </section>

        <section id="projeler">
          <h2>Projelerim</h2>
          <div className="project-grid">
            <article className="project-card">
              <img
                src="https://placehold.co/600x200/1e3a8a/fff?text=Web+Lab"
                alt="Web Lab projesi ekran görüntüsü"
              />
              <h3>Web Lab Projesi</h3>
              <p>Semantik HTML ve erişilebilirlik üzerine tek sayfalık portföy.</p>
              <ul className="skill-tags" role="list">
                <li>React</li>
                <li>Vite</li>
                <li>TypeScript</li>
              </ul>
            </article>
            <article className="project-card">
              <img
                src="https://placehold.co/600x200/2563eb/fff?text=Ikinci+Proje"
                alt="İkinci proje arayüzü"
              />
              <h3>İkinci Proje</h3>
              <p>Örnek proje açıklaması. Buraya kendi projenizi ekleyebilirsiniz.</p>
              <ul className="skill-tags" role="list">
                <li>HTML</li>
                <li>CSS</li>
                <li>JavaScript</li>
              </ul>
            </article>
            <article className="project-card">
              <img
                src="https://placehold.co/600x200/7c3aed/fff?text=Ucuncu+Proje"
                alt="Üçüncü proje görünümü"
              />
              <h3>Üçüncü Proje</h3>
              <p>Responsive tasarım ve modern CSS ile geliştirilmiş örnek uygulama.</p>
              <ul className="skill-tags" role="list">
                <li>Flexbox</li>
                <li>Grid</li>
              </ul>
            </article>
          </div>
        </section>

        <section id="iletisim">
          <h2>İletişim</h2>
          <form action="#" method="POST" noValidate>
            <fieldset>
              <legend>İletişim Formu</legend>

              <div className="form-group">
                <label htmlFor="name">Ad Soyad:</label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  minLength={2}
                  aria-describedby="name-error"
                />
                <small id="name-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="email">E-posta:</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  aria-describedby="email-error"
                />
                <small id="email-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="subject">Konu:</label>
                <select
                  id="subject"
                  name="subject"
                  required
                  aria-describedby="subject-error"
                >
                  <option value="">-- Seçiniz --</option>
                  <option value="is">İş Teklifi</option>
                  <option value="soru">Soru</option>
                  <option value="oneri">Öneri</option>
                </select>
                <small id="subject-error" className="error-msg" role="alert"></small>
              </div>

              <div className="form-group">
                <label htmlFor="message">Mesajınız:</label>
                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  required
                  minLength={10}
                  aria-describedby="message-error"
                />
                <small id="message-error" className="error-msg" role="alert"></small>
              </div>

              <button type="submit">Gönder</button>
            </fieldset>
          </form>
        </section>
      </main>

      <footer>
        <p>© 2025 Berfin Aslan. Tüm hakları saklıdır.</p>
      </footer>
    </>
  )
}

export default App
