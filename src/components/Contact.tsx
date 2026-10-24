import { useState, type FormEvent } from "react";
import { Mail, Send, ArrowUpRight } from "lucide-react";
import { Github, Linkedin } from "./Icons";
import AnimatedSection from "./AnimatedSection";
import { personalInfo } from "../data/portfolio";

type FormStatus = "idle" | "sending" | "success" | "error";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [status, setStatus] = useState<FormStatus>("idle");
  const [errors, setErrors] = useState<Record<string, string>>({});

  const validate = () => {
    const errs: Record<string, string> = {};
    if (!formData.name.trim()) errs.name = "Nama wajib diisi";
    if (!formData.email.trim()) errs.email = "Email wajib diisi";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email))
      errs.email = "Masukkan format email yang valid";
    if (!formData.message.trim()) errs.message = "Pesan wajib diisi";
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setStatus("sending");

    try {
      // Using Formspree as a real form backend
      // Replace 'xpwzjkdq' with your own Formspree form ID
      const res = await fetch("https://formspree.io/f/xpwzjkdq", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          name: formData.name,
          email: formData.email,
          message: formData.message,
        }),
      });

      if (res.ok) {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
        setTimeout(() => setStatus("idle"), 5000);
      } else {
        setStatus("error");
        setTimeout(() => setStatus("idle"), 4000);
      }
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section id="contact" className="section">
      <div className="container">
        <AnimatedSection>
          <span className="section-label">Hubungi Saya</span>
          <h2 className="section-title">Mari wujudkan kolaborasi yang bermakna.</h2>
          <p className="section-subtitle">
            Saya selalu terbuka untuk peluang karir, kolaborasi proyek, maupun diskusi seputar
            teknologi. Jangan ragu untuk menghubungi saya.
          </p>
        </AnimatedSection>

        <div className="contact-grid">
          {/* Contact links */}
          <AnimatedSection delay={0.1}>
            <div className="contact-info">
              <p className="contact-text">
                Jika Anda memiliki ide proyek, tawaran pekerjaan, atau sekadar ingin menyapa —
                saya akan sangat senang mendengarnya. Mari terhubung dan diskusikan peluang menarik
                bersama.
              </p>

              <div className="contact-links">
                <a
                  href={`mailto:${personalInfo.email}`}
                  className="contact-link"
                  aria-label="Kirim email"
                >
                  <div className="link-icon">
                    <Mail size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>Email</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                      {personalInfo.email}
                    </div>
                  </div>
                  <ArrowUpRight size={16} style={{ marginLeft: "auto", color: "var(--text-tertiary)" }} />
                </a>

                <a
                  href={personalInfo.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="Profil GitHub"
                >
                  <div className="link-icon">
                    <Github size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>GitHub</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                      @nafiatulmuawanah
                    </div>
                  </div>
                  <ArrowUpRight size={16} style={{ marginLeft: "auto", color: "var(--text-tertiary)" }} />
                </a>

                <a
                  href={personalInfo.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="contact-link"
                  aria-label="Profil LinkedIn"
                >
                  <div className="link-icon">
                    <Linkedin size={18} />
                  </div>
                  <div>
                    <div style={{ fontWeight: 600, fontSize: "0.85rem" }}>LinkedIn</div>
                    <div style={{ color: "var(--text-secondary)", fontSize: "0.85rem" }}>
                      Nafiatul Muawanah
                    </div>
                  </div>
                  <ArrowUpRight size={16} style={{ marginLeft: "auto", color: "var(--text-tertiary)" }} />
                </a>
              </div>
            </div>
          </AnimatedSection>

          {/* Contact form */}
          <AnimatedSection delay={0.2} direction="right">
            <form className="contact-form" onSubmit={handleSubmit} noValidate>
              <div className="form-group">
                <label htmlFor="contact-name">Nama Lengkap</label>
                <input
                  id="contact-name"
                  type="text"
                  placeholder="Nama Anda"
                  value={formData.name}
                  onChange={(e) => setFormData((d) => ({ ...d, name: e.target.value }))}
                  aria-invalid={!!errors.name}
                  aria-describedby={errors.name ? "name-error" : undefined}
                />
                {errors.name && (
                  <span id="name-error" style={{ color: "#dc5050", fontSize: "0.8rem" }}>
                    {errors.name}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-email">Alamat Email</label>
                <input
                  id="contact-email"
                  type="email"
                  placeholder="nama.anda@example.com"
                  value={formData.email}
                  onChange={(e) => setFormData((d) => ({ ...d, email: e.target.value }))}
                  aria-invalid={!!errors.email}
                  aria-describedby={errors.email ? "email-error" : undefined}
                />
                {errors.email && (
                  <span id="email-error" style={{ color: "#dc5050", fontSize: "0.8rem" }}>
                    {errors.email}
                  </span>
                )}
              </div>

              <div className="form-group">
                <label htmlFor="contact-message">Pesan</label>
                <textarea
                  id="contact-message"
                  placeholder="Ceritakan tentang proyek atau kesempatan kerja sama Anda..."
                  value={formData.message}
                  onChange={(e) => setFormData((d) => ({ ...d, message: e.target.value }))}
                  aria-invalid={!!errors.message}
                  aria-describedby={errors.message ? "message-error" : undefined}
                />
                {errors.message && (
                  <span id="message-error" style={{ color: "#dc5050", fontSize: "0.8rem" }}>
                    {errors.message}
                  </span>
                )}
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                disabled={status === "sending"}
                style={{ width: "100%", justifyContent: "center" }}
              >
                {status === "sending" ? (
                  "Mengirim..."
                ) : (
                  <>
                    <Send size={16} />
                    Kirim Pesan
                  </>
                )}
              </button>

              {status === "success" && (
                <div className="form-status success">
                  ✓ Pesan berhasil dikirim! Saya akan segera membalasnya.
                </div>
              )}
              {status === "error" && (
                <div className="form-status error">
                  Terjadi kesalahan. Silakan coba hubungi saya langsung melalui email.
                </div>
              )}
            </form>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
}
