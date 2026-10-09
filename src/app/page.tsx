
"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowDown,
  ArrowRight,
  ArrowUpRight,
  Flower2,
  Gift,
  Heart,
  Mail,
  MapPin,
  Menu,
  Sparkles,
  Users,
  Wine,
  X,
} from "lucide-react";
import { FaInstagram } from "react-icons/fa";

const photos = {
  hero: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=2200&q=90",
  about: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1100&q=85",
  detail: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=700&q=85",
  wedding: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=1000&q=85",
  engagement: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1000&q=85",
  henna: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=1000&q=85",
  birthday: "https://images.unsplash.com/photo-1530103862676-de8c9debad1d?auto=format&fit=crop&w=1000&q=85",
  corporate: "https://images.unsplash.com/photo-1505373877841-8d25f7d46678?auto=format&fit=crop&w=1000&q=85",
  private: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=1000&q=85",
  gallery1: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1200&q=85",
  gallery2: "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&w=900&q=85",
  gallery3: "https://images.unsplash.com/photo-1511795409834-ef04bbd61622?auto=format&fit=crop&w=900&q=85",
  gallery4: "https://images.unsplash.com/photo-1464366400600-7168b8af9bc3?auto=format&fit=crop&w=900&q=85",
  gallery5: "https://images.unsplash.com/photo-1523438885200-e635ba2c371e?auto=format&fit=crop&w=1200&q=85",
  closing: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&w=1900&q=85",
};

const services = [
  {
    number: "01",
    title: "Düğün Organizasyonu",
    description:
      "Hayalinizdeki düğün atmosferi için mekân düzeni, dekorasyon ve konsept planlaması.",
    image: photos.wedding,
    icon: Heart,
  },
  {
    number: "02",
    title: "Nişan & Söz",
    description:
      "Özel anlarınızı yansıtan zarif masa düzenleri, çiçekler ve kişiselleştirilmiş detaylar.",
    image: photos.engagement,
    icon: Flower2,
  },
  {
    number: "03",
    title: "Kına Gecesi",
    description:
      "Geleneksel dokunuşları modern tasarım anlayışıyla buluşturan konseptler.",
    image: photos.henna,
    icon: Sparkles,
  },
  {
    number: "04",
    title: "Doğum Günü",
    description:
      "Her yaşa ve farklı zevklere uyarlanabilen, neşeli ve özgün kutlama alanları.",
    image: photos.birthday,
    icon: Gift,
  },
  {
    number: "05",
    title: "Kurumsal Etkinlikler",
    description:
      "Marka kimliğine uygun davetler, toplantılar ve özel kurumsal buluşmalar.",
    image: photos.corporate,
    icon: Users,
  },
  {
    number: "06",
    title: "Özel Davetler",
    description:
      "Samimi buluşmalardan gösterişli davetlere, her ana uygun etkinlik tasarımları.",
    image: photos.private,
    icon: Wine,
  },
];

const gallery = [
  {
    image: photos.gallery1,
    title: "Romantik Detaylar",
    category: "DÜĞÜN KONSEPTİ",
    className: "gallery-tall",
  },
  {
    image: photos.gallery2,
    title: "Birlikte Başlayan Hikâyeler",
    category: "ÖZEL ANLAR",
    className: "",
  },
  {
    image: photos.gallery3,
    title: "Zarif Sofralar",
    category: "DAVET TASARIMI",
    className: "",
  },
  {
    image: photos.gallery4,
    title: "İncelikle Hazırlanan Anlar",
    category: "DEKORASYON",
    className: "",
  },
  {
    image: photos.gallery5,
    title: "Unutulmaz Başlangıçlar",
    category: "ORGANİZASYON",
    className: "gallery-wide",
  },
];

const steps = [
  {
    number: "01",
    title: "Tanışma",
    description:
      "Etkinliğiniz için beklentilerinizi, fikirlerinizi ve ihtiyaçlarınızı dinliyoruz.",
  },
  {
    number: "02",
    title: "Konsept Tasarımı",
    description:
      "Renk paleti, dekorasyon ve genel atmosfer için size özel bir konsept oluşturuyoruz.",
  },
  {
    number: "03",
    title: "Planlama",
    description:
      "Etkinliğin ayrıntılarını, hazırlık aşamalarını ve organizasyon akışını planlıyoruz.",
  },
  {
    number: "04",
    title: "O Özel Gün",
    description:
      "Planlanan detayları bir araya getirerek hayal edilen atmosferi hayata geçiriyoruz.",
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: { opacity: 1, y: 0 },
};

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [demoOpen, setDemoOpen] = useState(false);

  const openDemo = () => {
    setMenuOpen(false);
    setDemoOpen(true);
  };

  useEffect(() => {
    if (!demoOpen) return;

    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setDemoOpen(false);
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      document.body.style.overflow = previousOverflow;
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [demoOpen]);

  return (
    <main>
      {/* DUYURU ŞERİDİ */}
      <div className="announcement">
        <Sparkles size={13} strokeWidth={1.5} />
        HER HİKÂYE, ÖZEL BİR KUTLAMAYI HAK EDER.
        <Sparkles size={13} strokeWidth={1.5} />
      </div>

      {/* NAVBAR */}
      <header className="site-header">
        <div className="container nav-inner">
          <a
            href="#anasayfa"
            className="brand"
            onClick={() => setMenuOpen(false)}
          >
            <span className="brand-symbol">
              <Flower2 size={30} strokeWidth={1.1} />
            </span>
            <span className="brand-text">
              LIVA
              <small>EVENTS & DESIGN</small>
            </span>
          </a>

          <nav className={`nav-links ${menuOpen ? "nav-open" : ""}`}>
            <a href="#anasayfa" onClick={() => setMenuOpen(false)}>
              Ana Sayfa
            </a>
            <a href="#hakkimizda" onClick={() => setMenuOpen(false)}>
              Hikâyemiz
            </a>
            <a href="#hizmetler" onClick={() => setMenuOpen(false)}>
              Hizmetlerimiz
            </a>
            <a href="#galeri" onClick={() => setMenuOpen(false)}>
              Galeri
            </a>
            <a href="#surec" onClick={() => setMenuOpen(false)}>
              Sürecimiz
            </a>
            <a href="#iletisim" onClick={() => setMenuOpen(false)}>
              İletişim
            </a>
          </nav>

          <button className="nav-cta" type="button" onClick={openDemo}>
            TEKLİF AL
            <ArrowUpRight size={16} />
          </button>

          <button
            className="menu-toggle"
            type="button"
            aria-label={menuOpen ? "Menüyü kapat" : "Menüyü aç"}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen(!menuOpen)}
          >
            {menuOpen ? <X size={25} /> : <Menu size={25} />}
          </button>
        </div>
      </header>

      {/* HERO */}
      <section className="hero-section" id="anasayfa">
        <div className="hero-background">
          <img
            src={photos.hero}
            alt="Zarif düğün organizasyonu atmosferi"
          />
          <div className="hero-overlay" />
        </div>

        <div className="hero-content container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
          >
            <span className="hero-eyebrow">
              <span />
              LIVA EVENTS & DESIGN
              <span />
            </span>

            <h1>
              En güzel anlarınıza
              <br />
              <em>zarif dokunuşlar.</em>
            </h1>

            <p>
              Hayallerinizden ilham alan organizasyonlar,
              incelikle düşünülmüş detaylar ve uzun süre
              hatırlanacak özel anlar.
            </p>

            <div className="hero-actions">
              <button
                className="button button-primary"
                type="button"
                onClick={openDemo}
              >
                HAYALİNİZİ PAYLAŞIN
                <ArrowUpRight size={18} />
              </button>

              <a href="#hizmetler" className="button button-outline">
                HİZMETLERİMİZ
                <ArrowRight size={18} />
              </a>
            </div>
          </motion.div>
        </div>

        <div className="hero-bottom container">
          <a href="#hakkimizda">
            KEŞFETMEYE BAŞLAYIN
            <ArrowDown size={16} />
          </a>
          <span>BEAUTIFULLY PLANNED, LOVINGLY DESIGNED</span>
        </div>
      </section>

      {/* İMZA METNİ */}
      <section className="intro-section">
        <div className="container intro-inner">
          <Flower2 size={35} strokeWidth={1} />
          <span>THE ART OF CELEBRATION</span>

          <h2>
            Bazı anlar vardır,
            <br />
            <em>bir ömür hatırlanır.</em>
          </h2>

          <p>
            Biz o anların her detayında güzellik,
            uyum ve zarafet olmasını hayal ediyoruz.
          </p>

          <div className="intro-line" />
        </div>
      </section>

      {/* HAKKIMIZDA */}
      <section className="about-section section-padding" id="hakkimizda">
        <div className="container about-grid">
          <motion.div
            className="about-visual"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <img
              className="about-main-image"
              src={photos.about}
              alt="Şık organizasyon masa düzeni"
            />
            <img
              className="about-detail-image"
              src={photos.detail}
              alt="Davet dekorasyonu detayları"
            />
            <span className="about-caption">
              DETAILS MAKE THE MOMENT
            </span>
          </motion.div>

          <motion.div
            className="about-content"
            variants={fadeUp}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            transition={{ duration: 0.65 }}
          >
            <span className="section-eyebrow">
              BİZİM HİKÂYEMİZ
            </span>

            <h2>
              Her detayda
              <br />
              <em>bir parça siz.</em>
            </h2>

            <div className="ornament-line">
              <span />
              <Flower2 size={17} strokeWidth={1.2} />
              <span />
            </div>

            <p>
              Liva Events, özel günlerin yalnızca bir
              organizasyondan ibaret olmadığı fikriyle
              tasarlanmış butik bir etkinlik konseptidir.
              Her kutlamanın kendine özgü bir hikâyesi
              olduğuna inanıyoruz.
            </p>

            <p>
              Renklerden çiçeklere, masa düzeninden
              atmosferin en küçük ayrıntısına kadar
              her unsurun bir bütün oluşturmasını
              önemsiyoruz.
            </p>

            <p>
              Amacımız, sizin hayal ettiğiniz duyguyu
              mekâna taşımak ve sevdiklerinizle
              paylaşacağınız anlara zarif bir dokunuş
              katmak.
            </p>

            <a href="#hizmetler" className="text-link">
              NELER YAPIYORUZ?
              <ArrowUpRight size={18} />
            </a>
          </motion.div>
        </div>
      </section>

      {/* HİZMETLER */}
      <section className="services-section section-padding" id="hizmetler">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-eyebrow">
              ÖZEL ANLAR İÇİN
            </span>

            <h2>
              Her kutlamaya
              <br />
              <em>ayrı bir hikâye.</em>
            </h2>

            <p>
              Sizin için anlamlı olan anları,
              özgün detaylarla tasarlanan konseptlere
              dönüştürüyoruz.
            </p>
          </div>

          <div className="services-grid">
            {services.map((service, index) => {
              const Icon = service.icon;

              return (
                <motion.article
                  className="service-card"
                  key={service.number}
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    delay: (index % 3) * 0.09,
                  }}
                >
                  <div className="service-image">
                    <img
                      src={service.image}
                      alt={service.title}
                    />
                    <span className="service-number">
                      {service.number}
                    </span>
                  </div>

                  <div className="service-body">
                    <Icon size={22} strokeWidth={1.3} />

                    <h3>{service.title}</h3>

                    <p>{service.description}</p>

                    <button
                      type="button"
                      className="service-link"
                      onClick={openDemo}
                    >
                      DETAYLARI KEŞFEDİN
                      <ArrowUpRight size={17} />
                    </button>
                  </div>
                </motion.article>
              );
            })}
          </div>
        </div>
      </section>

      {/* ALINTI / BANNER */}
      <section className="quote-section">
        <div className="container quote-inner">
          <Flower2 size={33} strokeWidth={1} />

          <span>CELEBRATE BEAUTIFULLY</span>

          <h2>
            Çünkü en güzel anılar,
            <br />
            <em>
              özenle hazırlanan detaylarda saklıdır.
            </em>
          </h2>

          <a href="#galeri">
            İLHAM ALIN
            <ArrowDown size={18} />
          </a>
        </div>
      </section>

      {/* GALERİ */}
      <section className="gallery-section section-padding" id="galeri">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-eyebrow">
              İLHAM VEREN KARELER
            </span>

            <h2>
              Zarafetin <em>izinde.</em>
            </h2>

            <p>
              Özel davetlerin atmosferinden ilham alan
              renkler, çiçekler ve unutulmaz detaylar.
            </p>
          </div>

          <div className="gallery-grid">
            {gallery.map((item, index) => (
              <motion.div
                className={`gallery-item ${item.className}`}
                key={`${item.title}-${index}`}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.07 }}
              >
                <img
                  src={item.image}
                  alt={item.title}
                />

                <div className="gallery-overlay">
                  <span>{item.category}</span>
                  <h3>{item.title}</h3>
                </div>
              </motion.div>
            ))}
          </div>

          <p className="gallery-disclaimer">
            * Bu galerideki fotoğraflar temsili
            görsellerdir. Liva Events tarafından
            gerçekleştirilmiş organizasyonları
            göstermemektedir.
          </p>
        </div>
      </section>

      {/* SÜREÇ */}
      <section className="process-section section-padding" id="surec">
        <div className="container">
          <div className="section-heading centered">
            <span className="section-eyebrow">
              BİRLİKTE PLANLIYORUZ
            </span>

            <h2>
              Hayalden <em>gerçeğe.</em>
            </h2>

            <p>
              Her özel günün arkasında, incelikle
              düşünülmüş bir hazırlık süreci vardır.
            </p>
          </div>

          <div className="process-grid">
            {steps.map((step, index) => (
              <motion.div
                className="process-card"
                key={step.number}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.09 }}
              >
                <span className="process-number">
                  {step.number}
                </span>

                <div className="process-divider">
                  <span />
                  <Flower2 size={18} strokeWidth={1.1} />
                  <span />
                </div>

                <h3>{step.title}</h3>
                <p>{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* İLETİŞİM */}
      <section className="contact-section" id="iletisim">
        <div className="contact-background">
          <img
            src={photos.closing}
            alt="Romantik organizasyon atmosferi"
          />
          <div />
        </div>

        <div className="container contact-inner">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="section-eyebrow">
              HİKÂYENİZİ BİRLİKTE TASARLAYALIM
            </span>

            <h2>
              Sizin hikâyeniz,
              <br />
              <em>bizim ilhamımız.</em>
            </h2>

            <p>
              Hayal ettiğiniz atmosferi konuşmak,
              fikirlerinizi paylaşmak ve özel gününüz
              için ilk adımı atmak ister misiniz?
            </p>

            <button
              type="button"
              className="button button-primary"
              onClick={openDemo}
            >
              TEKLİF ALIN
              <ArrowUpRight size={18} />
            </button>
          </motion.div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="footer">
        <div className="container footer-main">
          <div className="footer-about">
            <a href="#anasayfa" className="brand footer-brand">
              <span className="brand-symbol">
                <Flower2 size={30} strokeWidth={1.1} />
              </span>

              <span className="brand-text">
                LIVA
                <small>EVENTS & DESIGN</small>
              </span>
            </a>

            <p>
              Hayallerinizden ilham alan, zarafetle
              tasarlanmış özel anlar.
            </p>

            <small>
              TYGenerate tarafından hazırlanmış
              örnek organizasyon web sitesi.
            </small>
          </div>

          <div className="footer-links">
            <h4>KEŞFEDİN</h4>
            <a href="#anasayfa">Ana Sayfa</a>
            <a href="#hakkimizda">Hikâyemiz</a>
            <a href="#hizmetler">Hizmetlerimiz</a>
            <a href="#galeri">Galeri</a>
            <a href="#surec">Sürecimiz</a>
            <a href="#iletisim">İletişim</a>
          </div>

          <div className="footer-links">
            <h4>İLETİŞİM</h4>

            <span>
              <MapPin size={16} />
              Örnek Konum, Türkiye
            </span>

            <span>
              <Mail size={16} />
              Demo iletişim alanı
            </span>

            <a
              href="https://instagram.com/tygenerate"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={16} />
              TYGenerate Instagram
            </a>
          </div>
        </div>

        <div className="container footer-bottom">
          <span>
            © 2026 Liva Events — Demo Web Sitesi
          </span>

          <span>
            DESIGNED BY <strong>TYGENERATE</strong>
          </span>
        </div>
      </footer>

      {/* DEMO BİLGİLENDİRME PENCERESİ */}
      <AnimatePresence>
        {demoOpen && (
          <motion.div
            className="modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setDemoOpen(false)}
          >
            <motion.div
              className="modal-card"
              role="dialog"
              aria-modal="true"
              aria-labelledby="demo-modal-title"
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 25,
                scale: 0.96,
              }}
              onClick={(event) =>
                event.stopPropagation()
              }
            >
              <button
                className="modal-close"
                type="button"
                aria-label="Pencereyi kapat"
                onClick={() => setDemoOpen(false)}
              >
                <X size={21} />
              </button>

              <div className="modal-icon">
                <Flower2 size={38} strokeWidth={1.2} />
              </div>

              <span className="section-eyebrow">
                TYGENERATE DEMO PROJESİ
              </span>

              <h2 id="demo-modal-title">
                Bu bir <em>demo</em> sitesidir.
              </h2>

              <p>
                Liva Events, TYGenerate tarafından
                hazırlanmış örnek bir organizasyon
                ve davet web sitesi tasarımıdır.
              </p>

              <p>
                Teklif alma, organizasyon talebi ve
                işletme iletişim bilgileri tanıtım
                amaçlıdır. Gerçek bir işletme için
                bu özellikler ihtiyaca göre
                geliştirilebilir.
              </p>

              <button
                type="button"
                className="button button-primary"
                onClick={() => setDemoOpen(false)}
              >
                ANLADIM
                <ArrowRight size={17} />
              </button>

              <small>
                DESIGNED BY <strong>TYGENERATE</strong>
              </small>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
