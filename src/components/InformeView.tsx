import React, { useState, useMemo } from "react";
import { Search, ExternalLink, BookOpen, Video, Newspaper, Sparkles } from "lucide-react";
import { INFORME_ITEMS, InformeItem } from "../data/informe";

export const InformeView: React.FC = () => {
  const [busca, setBusca] = useState("");
  const [categoriaAtiva, setCategoriaAtiva] = useState<string>("Todos");

  const categorias = ["Todos", "Reportagens", "Artigos", "Vídeos"];

  const itensFiltrados = useMemo(() => {
    const termo = busca.trim().toLowerCase();
    return INFORME_ITEMS.filter((item) => {
      const matchCat = categoriaAtiva === "Todos" || item.categoria === categoriaAtiva;
      const matchBusca =
        termo === "" ||
        item.titulo.toLowerCase().includes(termo) ||
        item.veiculo.toLowerCase().includes(termo) ||
        (item.subtitulo && item.subtitulo.toLowerCase().includes(termo));

      return matchCat && matchBusca;
    });
  }, [busca, categoriaAtiva]);

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "Vídeos":
        return <Video className="w-3 h-3" />;
      case "Artigos":
        return <BookOpen className="w-3 h-3" />;
      default:
        return <Newspaper className="w-3 h-3" />;
    }
  };

  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-8">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--leaf)]">
          <Sparkles className="w-3.5 h-3.5" />
          Acervo e Evidências Científicas
        </span>
        <h1 className="mt-2 text-4xl md:text-5xl font-display font-bold text-primary">
          Informe-se!
        </h1>
        <p className="mt-3 text-foreground/75 text-sm sm:text-base leading-relaxed">
          Reunimos relatórios da Anvisa, manifestos do INCA, estudos da Fiocruz e investigações jornalísticas de credibilidade para fundamentar seu consumo consciente.
        </p>
      </div>

      {/* Search & Category Filter */}
      <div className="space-y-4 max-w-2xl mx-auto">
        {/* Search */}
        <div className="relative">
          <Search className="w-4 h-4 absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground" />
          <input
            type="text"
            value={busca}
            onChange={(e) => setBusca(e.target.value)}
            placeholder="Pesquisar relatório, tema ou veículo (ex: Anvisa, INCA, G1, frutas)..."
            className="w-full rounded-full border border-border bg-card pl-11 pr-4 py-2.5 text-sm outline-none focus:border-primary shadow-xs"
          />
          {busca && (
            <button
              onClick={() => setBusca("")}
              className="absolute right-4 top-1/2 -translate-y-1/2 text-xs font-bold text-muted-foreground hover:text-foreground cursor-pointer"
            >
              Limpar
            </button>
          )}
        </div>

        {/* Category Pills */}
        <div className="flex justify-center gap-2">
          {categorias.map((cat) => {
            const active = categoriaAtiva === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategoriaAtiva(cat)}
                className={`text-xs font-semibold px-4 py-1.5 rounded-full border transition cursor-pointer flex items-center gap-1.5 ${
                  active
                    ? "bg-primary text-primary-foreground border-primary shadow-xs"
                    : "border-border bg-card hover:border-primary/50 text-foreground/80"
                }`}
              >
                {cat !== "Todos" && getCategoryIcon(cat)}
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      {/* Count */}
      <div className="text-center text-xs font-semibold text-muted-foreground">
        Exibindo {itensFiltrados.length} de {INFORME_ITEMS.length} publicações
      </div>

      {/* Cards Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {itensFiltrados.map((item) => (
          <article
            key={item.id}
            className="rounded-3xl border border-border bg-card shadow-xs hover:shadow-md hover:border-primary/50 transition duration-200 flex flex-col justify-between overflow-hidden group"
          >
            <div>
              {/* Image */}
              <div className="relative aspect-video bg-secondary/30 overflow-hidden">
                <img
                  src={item.imagem}
                  alt={item.titulo}
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                  onError={(e) => {
                    // Fallback to logo or secondary background
                    (e.target as HTMLImageElement).src = "/assets/hero-bg.png";
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent" />

                {/* Badges */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between gap-2">
                  <span className="text-xs font-bold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-background/90 backdrop-blur-xs text-foreground border border-border shadow-xs flex items-center gap-1">
                    {getCategoryIcon(item.categoria)}
                    {item.categoria}
                  </span>

                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-primary text-primary-foreground shadow-xs">
                    {item.veiculo}
                  </span>
                </div>

                <div className="absolute bottom-2.5 left-3 text-xs text-white/90 font-semibold drop-shadow-sm">
                  {item.data}
                </div>
              </div>

              {/* Text content */}
              <div className="p-5 space-y-2">
                <h3 className="font-display text-lg font-bold text-foreground leading-snug group-hover:text-primary transition">
                  {item.titulo}
                </h3>
                {item.subtitulo && (
                  <p className="text-xs text-foreground/75 leading-relaxed line-clamp-3">
                    {item.subtitulo}
                  </p>
                )}
              </div>
            </div>

            {/* Bottom link */}
            <div className="p-5 pt-0">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-flex items-center justify-center gap-2 rounded-2xl bg-secondary/80 hover:bg-secondary text-secondary-foreground text-xs font-bold py-2.5 px-4 transition cursor-pointer"
              >
                <span>Acessar conteúdo oficial</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </article>
        ))}
      </div>

      {itensFiltrados.length === 0 && (
        <div className="text-center py-16 bg-card rounded-3xl border border-border p-8">
          <p className="text-sm font-semibold text-muted-foreground">
            Nenhuma publicação encontrada para o termo pesquisado.
          </p>
          <button
            onClick={() => {
              setBusca("");
              setCategoriaAtiva("Todos");
            }}
            className="mt-3 px-4 py-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold"
          >
            Limpar busca
          </button>
        </div>
      )}
    </section>
  );
};
