"use client"

import { useCallback, useEffect, useState } from "react"
import {
  certificates,
  education,
  experience,
  expertise,
  languages,
  otherWork,
  profile,
  projects,
  tr,
  ui,
  type Lang,
  type Project,
} from "@/lib/content"

function Arrow({ down }: { down?: boolean }) {
  return (
    <svg className="arrow" viewBox="0 0 16 16" aria-hidden="true">
      {down ? <path d="M8 3v10M3.5 8.5 8 13l4.5-4.5" /> : <path d="M4 12 12 4M5.5 4H12v6.5" />}
    </svg>
  )
}

function Visual({ p }: { p: Project }) {
  const v = p.visual
  if (v.type === "phones") {
    return (
      <div className="phones">
        {v.shots.map((s, i) => (
          <div key={s} className={`phone phone-${i}`}>
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={s} alt="" loading="lazy" width={253} height={450} />
          </div>
        ))}
      </div>
    )
  }
  if (v.type === "browser") {
    return (
      <div className="browser">
        <div className="browser-bar">
          <span />
          <span />
          <span />
          <em>{v.url}</em>
        </div>
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={v.shot} alt="" loading="lazy" width={1520} height={730} />
      </div>
    )
  }
  if (v.type === "landscape") {
    return (
      <div className="landscape">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src={v.shot} alt="" loading="lazy" width={1600} height={900} />
      </div>
    )
  }
  return <ModelChart />
}

function ModelChart() {
  const rows = [
    { name: "XGBoost", v: 0.965 },
    { name: "Hybrid (ML + Graph)", v: 0.965 },
    { name: "GNN", v: 0.5038 },
  ]
  return (
    <div className="model">
      <div className="pipeline">
        {["URL", "Features", "XGBoost + PageRank", "Verdict"].map((s, i, a) => (
          <span key={s} className="step">
            {s}
            {i < a.length - 1 && <i aria-hidden="true">→</i>}
          </span>
        ))}
      </div>
      <div className="bars">
        {rows.map((r) => (
          <div key={r.name} className="bar-row">
            <span className="bar-name">{r.name}</span>
            <span className="bar-track">
              <span className="bar-fill" style={{ width: `${r.v * 100}%` }} />
            </span>
            <span className="bar-val">{(r.v * 100).toFixed(1)}%</span>
          </div>
        ))}
      </div>
      <p className="model-note">Test accuracy · github.com/cihanumut/PhishingTest</p>
    </div>
  )
}

export default function Site() {
  const [lang, setLang] = useState<Lang>("tr")
  const [copied, setCopied] = useState(false)

  useEffect(() => {
    let saved: string | null = null
    try {
      saved = localStorage.getItem("lang")
    } catch {}
    setLang(saved === "en" || saved === "tr" ? saved : navigator.language.toLowerCase().startsWith("tr") ? "tr" : "en")
  }, [])

  useEffect(() => {
    document.documentElement.lang = lang
  }, [lang])

  const chooseLang = (l: Lang) => {
    setLang(l)
    try {
      localStorage.setItem("lang", l)
    } catch {}
  }

  const t = useCallback(<V,>(v: V | { tr: V; en: V }) => tr(v, lang), [lang])

  const copyEmail = async () => {
    try {
      await navigator.clipboard.writeText(profile.email)
      setCopied(true)
      setTimeout(() => setCopied(false), 1800)
    } catch {}
  }

  const live = projects.filter((p) => p.status)

  return (
    <>
      <header className="top">
        <div className="wrap top-inner">
          <a href="#" className="brand">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src={profile.photo} alt="" width={32} height={32} />
            <span>{profile.name}</span>
          </a>
          <nav className="nav">
            <a href="#work">{t(ui.nav.work)}</a>
            <a href="#expertise">{t(ui.nav.expertise)}</a>
            <a href="#experience">{t(ui.nav.experience)}</a>
            <a href="#contact">{t(ui.nav.contact)}</a>
          </nav>
          <div className="lang" role="group" aria-label="Language">
            {(["tr", "en"] as Lang[]).map((l) => (
              <button key={l} aria-pressed={lang === l} onClick={() => chooseLang(l)}>
                {l.toUpperCase()}
              </button>
            ))}
          </div>
        </div>
      </header>

      <main>
        <section className="hero wrap">
          <p className="kicker">
            <span className="pulse" aria-hidden="true" />
            {t(ui.title)} · {t(ui.location)}
          </p>
          <h1>{t(ui.headline)}</h1>
          <p className="lead">{t(ui.intro)}</p>
          <div className="actions">
            <a className="btn btn-solid" href="#work">
              {t(ui.cta)}
              <Arrow down />
            </a>
            <a className="btn" href={`mailto:${profile.email}`}>
              {t(ui.write)}
            </a>
            <a className="btn btn-ghost" href="https://github.com/cihanumut" target="_blank" rel="noreferrer">
              GitHub
              <Arrow />
            </a>
            <a className="btn btn-ghost" href="https://www.linkedin.com/in/cihanumut9/" target="_blank" rel="noreferrer">
              LinkedIn
              <Arrow />
            </a>
          </div>
          <ul className="shipped">
            {live.map((p) => (
              <li key={p.id}>
                <a href={p.links[0].href} target="_blank" rel="noreferrer">
                  {p.icon ? (
                    // eslint-disable-next-line @next/next/no-img-element
                    <img src={p.icon} alt="" width={36} height={36} />
                  ) : (
                    <span className="shipped-mono">{p.name.slice(0, 2)}</span>
                  )}
                  <span>
                    <b>{p.name}</b>
                    <small>{t(p.status!)}</small>
                  </span>
                </a>
              </li>
            ))}
          </ul>
        </section>

        <section id="work" className="wrap section">
          <h2 className="section-title">{t(ui.workTitle)}</h2>
          <div className="cases">
            {projects.map((p, i) => (
              <article key={p.id} className={`case case-${p.id}${i % 2 ? " flip" : ""}`}>
                <div className="case-info">
                  <div className="case-head">
                    {p.icon && (
                      // eslint-disable-next-line @next/next/no-img-element
                      <img className="case-icon" src={p.icon} alt="" width={52} height={52} />
                    )}
                    <div>
                      <h3>{p.name}</h3>
                      <p className="meta">
                        {t(p.type)} · {p.year}
                      </p>
                    </div>
                  </div>
                  {p.status && (
                    <span className="status">
                      <span className="pulse" aria-hidden="true" />
                      {t(p.status)}
                    </span>
                  )}
                  <p className="summary">{t(p.summary)}</p>
                  <ul className="points">
                    {t(p.points).map((x) => (
                      <li key={x}>{x}</li>
                    ))}
                  </ul>
                  <p className="role">
                    <span>{t(ui.roleLabel)}</span>
                    {t(p.role)}
                  </p>
                  <div className="tags">
                    {p.stack.map((s) => (
                      <span key={s}>{s}</span>
                    ))}
                  </div>
                  <div className="case-links">
                    {p.links.map((l, j) => (
                      <a key={l.href} className={j === 0 ? "btn btn-solid" : "btn"} href={l.href} target="_blank" rel="noreferrer">
                        {t(l.label)}
                        <Arrow />
                      </a>
                    ))}
                  </div>
                </div>
                <div className="case-visual">
                  <Visual p={p} />
                </div>
              </article>
            ))}
          </div>

          <div className="other">
            <h3>{t(ui.other)}</h3>
            {otherWork.map((o) => (
              <div key={o.name.en} className="other-row">
                <b>{t(o.name)}</b>
                <span>{t(o.note)}</span>
                <em>{o.year}</em>
              </div>
            ))}
          </div>
        </section>

        <section id="expertise" className="wrap section">
          <h2 className="section-title">{t(ui.expertiseTitle)}</h2>
          <div className="expertise">
            {expertise.map((e) => (
              <div key={e.title.en} className="skill">
                <h3>{t(e.title)}</h3>
                <p>{t(e.text)}</p>
                <div className="tags">
                  {e.tools.map((x) => (
                    <span key={x}>{x}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        <section id="experience" className="wrap section">
          <h2 className="section-title">{t(ui.experienceTitle)}</h2>
          <div className="exp-grid">
            <ol className="jobs">
              {experience.map((e) => (
                <li key={e.org}>
                  <span className="when">{e.when}</span>
                  <div>
                    <h3>{e.org}</h3>
                    <p className="job-title">{t(e.title)}</p>
                    <p>{t(e.note)}</p>
                  </div>
                </li>
              ))}
            </ol>
            <aside className="side">
              <div>
                <h4>{t(ui.education)}</h4>
                <p>
                  <b>{t(education.degree)}</b>
                  <br />
                  {t(education.school)}
                </p>
              </div>
              <div>
                <h4>{t(ui.certificates)}</h4>
                <ul>
                  {certificates.map((c) => (
                    <li key={t(c.name)}>
                      <b>{t(c.name)}</b> <span>{c.by}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h4>{t(ui.languages)}</h4>
                <ul>
                  {languages.map((l) => (
                    <li key={l.name.en}>
                      <b>{t(l.name)}</b> <span>{t(l.level)}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>
          </div>
        </section>

        <section id="contact" className="wrap section">
          <div className="contact">
            <h2>{t(ui.contactTitle)}</h2>
            <p>{t(ui.contactSub)}</p>
            <div className="mail">
              <a href={`mailto:${profile.email}`}>{profile.email}</a>
              <button onClick={copyEmail}>{copied ? t(ui.copied) : t(ui.copy)}</button>
            </div>
            <div className="contact-links">
              {profile.links.map((l) => (
                <a key={l.label} href={l.href} target="_blank" rel="noreferrer">
                  {l.label}
                  <Arrow />
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer className="wrap foot">
        <span>
          © {new Date().getFullYear()} {profile.name}
        </span>
        <span>{t(ui.footer)}</span>
      </footer>
    </>
  )
}
