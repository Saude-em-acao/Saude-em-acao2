import React from "react";
import { Gamepad2, Play, Sparkles, ExternalLink, Youtube, Award, Heart } from "lucide-react";
import { KIDS_GAMES } from "../data/kids";

export const CriancasView: React.FC = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 sm:px-6 py-10 md:py-16 space-y-12">
      {/* Header */}
      <div className="text-center max-w-3xl mx-auto space-y-3">
        <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--berry)] bg-[var(--berry)]/10 px-3.5 py-1 rounded-full border border-[var(--berry)]/20">
          <Sparkles className="w-3.5 h-3.5" />
          Diversão com Propósito
        </span>
        <h1 className="text-4xl md:text-5xl font-display font-bold text-primary">
          Área Kids: Aprender Brincando
        </h1>
        <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
          Jogos educativos, desafios de memória e vídeos animados para incentivar a turminha a reconhecer os alimentos saudáveis e proteger o prato desde cedo.
        </p>
      </div>

      {/* Featured Main Game: Guardiões do Prato VS Turma da Contaminação */}
      <div className="rounded-3xl border-2 border-primary/30 bg-card p-6 sm:p-8 shadow-lg relative overflow-hidden">
        <div className="grid lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-6 space-y-4">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--sun)] text-foreground text-xs font-bold">
              <Award className="w-3.5 h-3.5" />
              Jogo Destaque
            </div>

            <h2 className="font-display text-2xl sm:text-3xl font-extrabold text-foreground leading-tight">
              Guardiões do Prato <br className="hidden sm:inline" />
              <span className="text-primary">VS Turma da Contaminação</span>
            </h2>

            <p className="text-sm text-foreground/80 leading-relaxed">
              Junte-se aos heróis da boa alimentação! Identifique os vegetais frescos, vença os vilões dos resíduos químicos e conquiste o selo oficial de Guardião da Saúde.
            </p>

            <div className="pt-2 flex flex-wrap items-center gap-3">
              <a
                href="https://wordwall.net/play/78229/440/400"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3 rounded-full shadow hover:opacity-90 transition cursor-pointer text-sm"
              >
                <Play className="w-4 h-4 fill-current" /> Jogar Agora Grátis
              </a>
              <span className="text-xs font-semibold text-muted-foreground">
                Classificação Livre • No computador ou celular
              </span>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden shadow-md border border-border group aspect-[16/10]">
              <img
                src="/assets/guardioes-vs-contaminacao.png"
                alt="Guardiões do Prato VS Turma da Contaminação"
                className="w-full h-full object-cover group-hover:scale-105 transition duration-500"
                onError={(e) => {
                  (e.target as HTMLImageElement).src = "/assets/hero-bg.png";
                }}
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition" />
            </div>
          </div>
        </div>
      </div>

      {/* Embedded Kids Video */}
      <div className="rounded-3xl border border-border bg-card p-6 sm:p-8 shadow-sm">
        <div className="text-center max-w-2xl mx-auto mb-6">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">
            Vídeo Animado Infantil
          </span>
          <h3 className="text-2xl font-display font-bold text-foreground mt-1">
            Assista e Descubra os Segredos da Comida
          </h3>
          <p className="text-xs sm:text-sm text-muted-foreground mt-1">
            Uma animação leve e divertida para assistir em família ou na sala de aula.
          </p>
        </div>

        <div className="max-w-3xl mx-auto rounded-2xl overflow-hidden aspect-video bg-black/10 shadow-md">
          <iframe
            src="https://www.youtube.com/embed/NOQNEPZstes"
            title="Vídeo Infantil — Saúde em Ação"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="w-full h-full border-0"
          />
        </div>
      </div>

      {/* 4 Games Grid */}
      <div>
        <div className="text-center max-w-2xl mx-auto mb-8">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <Gamepad2 className="w-4 h-4" />
            Minijogos Interativos
          </span>
          <h3 className="mt-1 text-2xl sm:text-3xl font-display font-bold text-foreground">
            Escolha seu Desafio
          </h3>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {KIDS_GAMES.map((game) => (
            <article
              key={game.id}
              className="rounded-3xl border border-border bg-card p-5 shadow-xs hover:shadow-md hover:border-primary/50 transition flex flex-col justify-between group"
            >
              <div>
                <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/30 border border-border/80 mb-4 p-4 flex items-center justify-center">
                  <img
                    src={game.imagem}
                    alt={game.titulo}
                    className="w-full h-full object-contain group-hover:scale-110 transition duration-300 drop-shadow-sm"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  <span className="absolute top-2 right-2 text-xs font-bold px-2 py-0.5 rounded-full bg-background/90 text-foreground border border-border">
                    {game.categoria}
                  </span>
                </div>

                <h4 className="font-display text-base font-bold text-foreground group-hover:text-primary transition leading-snug">
                  {game.titulo}
                </h4>
                <p className="text-xs font-semibold text-primary mt-0.5">
                  {game.subtitulo}
                </p>
                <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
                  {game.descricao}
                </p>
              </div>

              <div className="mt-4 pt-3 border-t border-border">
                <a
                  href={game.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-1.5 rounded-full bg-primary text-primary-foreground text-xs font-bold py-2.5 px-4 hover:opacity-90 transition cursor-pointer shadow-xs"
                >
                  <Play className="w-3.5 h-3.5 fill-current" /> Jogar no Wordwall
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* YouTube Channel Callout Banner */}
      <div className="rounded-3xl border border-destructive/20 bg-destructive/5 p-6 sm:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
        <div className="flex items-center gap-4">
          <div className="w-14 h-14 rounded-2xl bg-destructive text-destructive-foreground flex items-center justify-center shrink-0 shadow-md">
            <Youtube className="w-8 h-8" />
          </div>
          <div>
            <h4 className="font-display text-lg sm:text-xl font-bold text-foreground">
              Conheça nosso canal no YouTube!
            </h4>
            <p className="text-xs sm:text-sm text-foreground/75 mt-0.5">
              Inscreva-se para acompanhar novas animações educativas e conteúdos exclusivos sobre saúde.
            </p>
          </div>
        </div>

        <a
          href="https://www.youtube.com/@SaudeEmAcaoODS3"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 bg-destructive text-destructive-foreground font-bold px-6 py-3 rounded-full text-xs sm:text-sm hover:opacity-90 transition cursor-pointer shadow-xs shrink-0"
        >
          Acessar Canal <ExternalLink className="w-3.5 h-3.5" />
        </a>
      </div>
    </section>
  );
};
