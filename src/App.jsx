import { useState } from 'react'
function TagCard({ label, title, desc }) {
  return (
    <div className="relative">
      <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-5 h-5 rounded-full bg-ivory border-2 border-brass z-10" />
      <div className="h-full pt-9 pb-7 px-6 rounded-[28px] bg-pine-light border border-brass/30 text-ivory shadow-xl shadow-black/20 transition-transform duration-300 hover:-translate-y-1.5">
        <span className="font-tag text-xs tracking-widest text-brass-light uppercase">{label}</span>
        <h3 className="font-display text-3xl mt-2 mb-3">{title}</h3>
        <p className="text-sm leading-relaxed text-ivory/75">{desc}</p>
      </div>
    </div>
  )
}

function App() {
  const [menuOpen, setMenuOpen] = useState(false)

  const servicos = [
    { label: "01", title: "Banho & Tosa", desc: "Escovação, tosa na tesoura e hidratação sob medida para o tipo de pelo do seu pet." },
    { label: "02", title: "Veterinário", desc: "Consultas, vacinas e exames com equipe clínica presente todos os dias da semana." },
    { label: "03", title: "Adestramento", desc: "Treinamento comportamental individual, do filhote ao adulto, no ritmo de cada animal." },
    { label: "04", title: "Adoção", desc: "Encontros responsáveis entre tutores e animais resgatados, com acompanhamento pós-adoção." },
    { label: "05", title: "Produtos", desc: "Ração, acessórios e itens de bem-estar selecionados pela nossa equipe." },
  ]

  return (
    <div className="min-h-screen bg-ivory">
      {/* NAV */}
      <header className="max-w-7xl mx-auto flex items-center justify-between px-6 py-6 relative">
        <span className="font-display text-2xl tracking-wide text-pine">ÂMBAR</span>

        <nav className="hidden md:flex gap-8 font-tag text-xs uppercase tracking-widest text-pine/70">
          <a href="#servicos" className="hover:text-brass transition-colors">Serviços</a>
          <a href="#adocao" className="hover:text-brass transition-colors">Adoção</a>
          <a href="#contato" className="hover:text-brass transition-colors">Contato</a>
        </nav>

        <div className="flex items-center gap-3">
          <a href="#contato" className="hidden sm:inline-block font-tag text-xs uppercase tracking-widest bg-pine text-ivory px-5 py-2.5 rounded-full hover:bg-brass transition-colors">
            Agendar
          </a>

          {/* Botão hambúrguer — só aparece em telas pequenas */}
          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5"
            aria-label="Abrir menu"
            aria-expanded={menuOpen}
          >
            <span className={`block w-6 h-0.5 bg-pine transition-transform duration-300 ${menuOpen ? 'rotate-45 translate-y-2' : ''}`} />
            <span className={`block w-6 h-0.5 bg-pine transition-opacity duration-300 ${menuOpen ? 'opacity-0' : ''}`} />
            <span className={`block w-6 h-0.5 bg-pine transition-transform duration-300 ${menuOpen ? '-rotate-45 -translate-y-2' : ''}`} />
          </button>
        </div>

        {/* Menu mobile — dropdown */}
        {menuOpen && (
          <nav className="md:hidden absolute top-full left-0 right-0 bg-ivory border-t border-pine/10 flex flex-col px-6 py-6 gap-5 font-tag text-xs uppercase tracking-widest text-pine/70 shadow-lg">
            <a href="#servicos" onClick={() => setMenuOpen(false)} className="hover:text-brass transition-colors">Serviços</a>
            <a href="#adocao" onClick={() => setMenuOpen(false)} className="hover:text-brass transition-colors">Adoção</a>
            <a href="#contato" onClick={() => setMenuOpen(false)} className="hover:text-brass transition-colors">Contato</a>
          </nav>
        )}
      </header>

      {/* HERO */}
      <section className="bg-pine text-ivory">
        <div className="max-w-7xl mx-auto px-6 py-24 md:py-32">
          <span className="font-tag text-xs tracking-widest text-brass-light uppercase">Clínica & Atelier Pet</span>
          <h1 className="font-display text-5xl md:text-7xl leading-[1.05] mt-5 max-w-4xl">
            Um cuidado que carrega o <em className="text-brass-light not-italic italic">nome</em> do seu animal.
          </h1>
          <p className="mt-6 max-w-2xl text-ivory/70 text-lg leading-relaxed">
            Banho e tosa, atendimento veterinário, adestramento e adoção — tudo com o rigor de uma clínica e o afeto de uma casa.
          </p>
          <div className="flex flex-wrap gap-4 mt-10">
            <a href="#contato" className="bg-brass text-pine font-semibold px-7 py-3.5 rounded-full hover:bg-brass-light transition-colors">
              Agendar horário
            </a>
            <a href="#adocao" className="border border-ivory/30 px-7 py-3.5 rounded-full hover:border-brass hover:text-brass-light transition-colors">
              Conhecer a adoção
            </a>
          </div>
        </div>
      </section>

      {/* SERVIÇOS */}
      <section id="servicos" className="max-w-7xl mx-auto px-6 py-24">
        <span className="font-tag text-xs tracking-widest text-brass uppercase">Serviços</span>
        <h2 className="font-display text-4xl md:text-5xl text-pine mt-3 mb-14 max-w-xl">
          Cinco cuidados, uma só casa.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-10">
          {servicos.map((s) => (
            <TagCard key={s.label} {...s} />
          ))}
        </div>
      </section>

      {/* ADOÇÃO */}
      <section id="adocao" className="bg-parchment">
        <div className="max-w-7xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-12 items-center">
          <div>
            <span className="font-tag text-xs tracking-widest text-wax uppercase">Adoção responsável</span>
            <h2 className="font-display text-4xl md:text-5xl text-pine mt-3 mb-5">
              Quem espera um lar.
            </h2>
            <p className="text-pine/70 leading-relaxed mb-8 max-w-md">
              Todos os animais passam por avaliação veterinária e comportamental antes da adoção — e seguem acompanhados pela nossa equipe nas primeiras semanas.
            </p>
            <a href="#contato" className="inline-block bg-pine text-ivory font-semibold px-7 py-3.5 rounded-full hover:bg-wax transition-colors">
              Ver animais disponíveis
            </a>
          </div>
          <div className="aspect-[4/5] rounded-[28px] bg-pine-light border border-brass/30 flex items-center justify-center">
            <span className="font-tag text-xs uppercase tracking-widest text-ivory/30">Foto do espaço</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer id="contato" className="bg-pine text-ivory/60">
        <div className="max-w-7xl mx-auto px-6 py-14 flex flex-col md:flex-row justify-between gap-8">
          <div>
            <span className="font-display text-2xl text-ivory">ÂMBAR</span>
            <p className="text-sm mt-3 max-w-xs">Rua das Acácias, 210 — Matão, SP</p>
            <p className="text-sm">Seg a sáb, 8h às 19h</p>
          </div>
          <div className="font-tag text-xs uppercase tracking-widest">
            <p>(16) 99999-0000</p>
            <p className="mt-1">contato@ambarpet.com.br</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App