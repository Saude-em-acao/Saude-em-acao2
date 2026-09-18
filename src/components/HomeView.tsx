import React from "react";
import { ShieldAlert, ArrowRight, BookOpen, Utensils, Award, HeartHandshake, Sparkles, ExternalLink } from "lucide-react";

interface HomeViewProps {
  navigate: (route: string) => void;
}

export const HomeView: React.FC<HomeViewProps> = ({ navigate }) => {
  return (
    <div className="space-y-16 md:space-y-24">
      {/* Hero Section with authentic hero-bg.png */}
      <section className="relative overflow-hidden pt-8 pb-16 md:py-24 border-b border-border">
        {/* Background graphic */}
        <div
          className="absolute inset-0 opacity-15 bg-cover bg-center pointer-events-none mix-blend-multiply"
          style={{ backgroundImage: `url('/assets/hero-bg.png')` }}
          aria-hidden="true"
        />
        <div
          aria-hidden="true"
          className="absolute -top-16 -left-16 w-80 h-80 rounded-full bg-[var(--leaf)]/20 blur-3xl -z-10"
        />
        <div
          aria-hidden="true"
          className="absolute -bottom-16 -right-16 w-80 h-80 rounded-full bg-[var(--sun)]/25 blur-3xl -z-10"
        />

        <div className="relative max-w-6xl mx-auto px-4 sm:px-6">
          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 space-y-5 text-center lg:text-left">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-primary/10 border border-primary/20 text-primary text-xs uppercase tracking-wider">
                <span className="w-2 h-2 rounded-full bg-[var(--leaf)] animate-pulse" />
                <strong className="font-extrabold">ODS 3 · Saúde e Bem-Estar da ONU</strong>
              </div>

              <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold text-foreground leading-[1.12] uppercase">
                DEFENSORES AGRÍCOLAS:{" "}
                <span className="text-primary italic">O QUE CHEGA À SUA MESA?</span>
              </h1>

              <p className="text-foreground/80 text-base sm:text-lg leading-relaxed max-w-2xl mx-auto lg:mx-0">
                O Brasil está entre os maiores consumidores de defensivos agrícolas do planeta. Conheça quais alimentos exigem mais atenção, aprenda métodos reais de higienização e registre seu dia para comer com mais segurança e consciência.
              </p>

              <div className="pt-2 flex flex-wrap items-center justify-center lg:justify-start gap-3">
                <button
                  onClick={() => navigate("/alimentos")}
                  className="inline-flex items-center gap-2 bg-primary text-primary-foreground font-bold px-6 py-3.5 rounded-full shadow-md hover:opacity-95 hover:shadow-lg transition cursor-pointer"
                >
                  <Utensils className="w-4 h-4" />
                  Ver Guia de Alimentos
                  <ArrowRight className="w-4 h-4" />
                </button>

                <button
                  onClick={() => navigate("/meu-dia")}
                  className="inline-flex items-center gap-2 bg-card border-2 border-border text-foreground font-bold px-6 py-3.5 rounded-full hover:border-primary hover:text-primary transition cursor-pointer"
                >
                  <Sparkles className="w-4 h-4 text-[var(--sun)]" />
                  Meu Dia Consciente
                </button>
              </div>

              <div className="pt-3 flex items-center justify-center lg:justify-start gap-4 text-xs font-semibold text-muted-foreground">
                <span>✓ 58 alimentos catalogados</span>
                <span>•</span>
                <span>✓ Monitoramento oficial Anvisa</span>
                <span>•</span>
                <span>✓ 100% gratuito e educativo</span>
              </div>
            </div>

            {/* Video embed proposal */}
            <div className="lg:col-span-5">
              <div className="rounded-3xl border-2 border-primary/20 bg-card p-2.5 shadow-xl overflow-hidden group">
                <div className="relative aspect-video rounded-2xl overflow-hidden bg-secondary/30">
                  <iframe
                    src="https://www.youtube.com/embed/HwNs7iGHnTg"
                    title="Vídeo de Apresentação — Saúde em Ação"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    className="w-full h-full border-0"
                  />
                </div>
                <div className="p-3.5 text-center">
                  <p className="text-xs font-bold text-primary uppercase tracking-wider">
                    Assista à Proposta do Projeto
                  </p>
                  <p className="text-sm text-foreground/75 mt-0.5">
                    Como a informação e a ODS 3 transformam a mesa brasileira
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Alerta Vermelho / Números do Brasil */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-[var(--tomato)]">
            <ShieldAlert className="w-3.5 h-3.5" />
            Alerta Vermelho
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-foreground">
            O cenário dos agrotóxicos no Brasil
          </h2>
          <p className="mt-2 text-foreground/70 text-sm">
            Indicadores reunidos a partir dos relatórios do PARA/Anvisa, IBGE, INCA e Fiocruz.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="rounded-3xl border border-border bg-card p-6 text-center hover:border-primary/50 transition shadow-sm">
            <div className="text-3xl font-display font-extrabold text-[var(--tomato)]">
              +700 mil
            </div>
            <div className="mt-1 text-sm font-bold text-foreground">Toneladas / ano</div>
            <p className="mt-2 text-xs text-muted-foreground">
              Volume anual de defensivos aplicados nas lavouras do país, consolidando o Brasil na liderança global.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 text-center hover:border-primary/50 transition shadow-sm">
            <div className="text-3xl font-display font-extrabold text-[var(--sun)]">
              1 em cada 4
            </div>
            <div className="mt-1 text-sm font-bold text-foreground">Amostras irregulares</div>
            <p className="mt-2 text-xs text-muted-foreground">
              Cerca de 25% dos vegetais avaliados pela Anvisa contêm resíduos acima do limite ou substâncias não autorizadas.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 text-center hover:border-primary/50 transition shadow-sm">
            <div className="text-3xl font-display font-extrabold text-[var(--leaf)]">
              58 Alimentos
            </div>
            <div className="mt-1 text-sm font-bold text-foreground">Guia Detalhado</div>
            <p className="mt-2 text-xs text-muted-foreground">
              Mapeamento de frutas, verduras e grãos com seus riscos e orientações precisas de limpeza.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 text-center hover:border-primary/50 transition shadow-sm">
            <div className="text-3xl font-display font-extrabold text-primary">
              ODS 3
            </div>
            <div className="mt-1 text-sm font-bold text-foreground">Meta da ONU</div>
            <p className="mt-2 text-xs text-muted-foreground">
              Assegurar uma vida saudável e promover o bem-estar para todas as idades, combatendo contaminações.
            </p>
          </div>
        </div>
      </section>

      {/* Alinhados à ODS 3 da ONU */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border-2 border-primary/25 bg-primary/5 p-8 sm:p-12 relative overflow-hidden">
          <div className="grid md:grid-cols-12 gap-8 items-center">
            <div className="md:col-span-8 space-y-4">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary text-primary-foreground text-xs font-bold">
                <HeartHandshake className="w-3.5 h-3.5" />
                Objetivos de Desenvolvimento Sustentável
              </div>
              <h3 className="text-2xl sm:text-3xl font-display font-bold text-primary">
                Como o Saúde em Ação se conecta à ODS 3?
              </h3>
              <p className="text-foreground/80 text-sm sm:text-base leading-relaxed">
                A Meta 3.9 da ONU busca <strong>reduzir substancialmente o número de mortes e doenças decorrentes de produtos químicos perigosos, contaminação e poluição do ar e da água</strong>. Nossa missão é democratizar dados científicos e empoderar as famílias com conhecimento prático diário.
              </p>
              <div className="pt-2 flex flex-wrap gap-2">
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-card border border-border">
                  🌿 Nutrição preventiva
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-card border border-border">
                  🧼 Higienização baseada em evidências
                </span>
                <span className="text-xs font-semibold px-3 py-1 rounded-full bg-card border border-border">
                  🧒 Educação infantil lúdica
                </span>
              </div>
            </div>
            <div className="md:col-span-4 text-center">
              <div className="w-24 h-24 mx-auto rounded-2xl bg-primary text-primary-foreground flex items-center justify-center text-4xl font-display font-black shadow-lg">
                3
              </div>
              <div className="mt-3 font-bold text-primary text-sm uppercase tracking-wide">
                Saúde e Bem-Estar
              </div>
              <p className="text-xs text-muted-foreground mt-1">Agenda 2030 das Nações Unidas</p>
            </div>
          </div>
        </div>
      </section>

      {/* O preço silencioso dos defensores agrícolas - 6 Health Risk Cards */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-2xl mx-auto mb-10">
          <span className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-primary">
            <BookOpen className="w-3.5 h-3.5" />
            Impacto no Organismo
          </span>
          <h2 className="mt-2 text-3xl sm:text-4xl font-display font-bold text-foreground">
            O preço silencioso dos defensivos agrícolas
          </h2>
          <p className="mt-2 text-foreground/70 text-sm">
            Efeitos documentados por estudos da Fiocruz, INCA e Organização Mundial da Saúde (OMS).
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition">
            <div className="text-3xl mb-3">🎗️</div>
            <h3 className="font-display text-lg font-bold text-foreground">Câncer e Tumores</h3>
            <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
              O INCA alerta que substâncias como glifosato, malationa e mancozebe possuem potencial carcinogênico associado a linfomas, leucemias e tumores no estômago e mama.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition">
            <div className="text-3xl mb-3">🧬</div>
            <h3 className="font-display text-lg font-bold text-foreground">Desregulação Hormonal</h3>
            <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
              Desreguladores endócrinos interferem na tireoide, reprodução e metabolismo, provocando puberdade precoce, infertilidade e distúrbios metabólicos crônicos.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition">
            <div className="text-3xl mb-3">🧠</div>
            <h3 className="font-display text-lg font-bold text-foreground">Danos Neurológicos</h3>
            <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
              Organofosforados e carbamatos atacam neurotransmissores, aumentando o risco de déficits cognitivos, neuropatias, Parkinson precoce e ansiedade severa.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition">
            <div className="text-3xl mb-3">🫀</div>
            <h3 className="font-display text-lg font-bold text-foreground">Fígado e Rins</h3>
            <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
              Os órgãos responsáveis pela filtragem sofrem sobrecarga contínua, levando a esteatose hepática, insuficiência renal progressiva e inflamações crônicas.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition">
            <div className="text-3xl mb-3">👶</div>
            <h3 className="font-display text-lg font-bold text-foreground">Riscos na Infância e Gestação</h3>
            <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
              Crianças possuem barreiras biológicas imaturas e maior taxa metabólica por peso, sendo extremamente vulneráveis a malformações e atrasos do neurodesenvolvimento.
            </p>
          </div>

          <div className="rounded-3xl border border-border bg-card p-6 shadow-sm hover:border-primary/40 transition">
            <div className="text-3xl mb-3">⏳</div>
            <h3 className="font-display text-lg font-bold text-foreground">Efeito Coquetel Cumulativo</h3>
            <p className="mt-2 text-xs text-foreground/75 leading-relaxed">
              Uma única fruta pode conter resíduos de 3 a 5 químicos distintos. A ciência ainda investiga a interação tóxica simultânea desses múltiplos compostos no corpo.
            </p>
          </div>
        </div>
      </section>

      {/* Não existe dose segura Callout */}
      <section className="max-w-4xl mx-auto px-4 sm:px-6">
        <div className="rounded-3xl border border-[var(--sun)]/50 bg-[var(--sun)]/10 p-6 sm:p-8 text-center space-y-3">
          <div className="text-3xl">⚠️</div>
          <h3 className="text-xl sm:text-2xl font-display font-bold text-foreground">
            Lavar apenas com água não resolve tudo
          </h3>
          <p className="text-sm text-foreground/80 max-w-2xl mx-auto leading-relaxed">
            Muitos defensores agrícolas modernos são sistêmicos: circulam pela seiva da planta e penetram na polpa, não ficando apenas na casca. Por isso, alternar os tipos de alimentos, preferir feiras agroecológicas e descascar os de maior risco são estratégias complementares essenciais.
          </p>
          <div className="pt-2">
            <button
              onClick={() => navigate("/jogo")}
              className="inline-flex items-center gap-2 bg-primary text-primary-foreground text-sm font-bold px-6 py-2.5 rounded-full hover:opacity-90 transition cursor-pointer"
            >
              <Award className="w-4 h-4" />
              Testar seus conhecimentos no Quiz
            </button>
          </div>
        </div>
      </section>

      {/* Direct link modules to explore */}
      <section className="max-w-6xl mx-auto px-4 sm:px-6 pb-12">
        <div className="grid md:grid-cols-3 gap-6">
          <div
            onClick={() => navigate("/alimentos")}
            className="rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-md transition cursor-pointer flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl">🥦</span>
              <h3 className="mt-3 font-display text-xl font-bold text-primary">Tabela de Alimentos</h3>
              <p className="mt-1 text-xs text-foreground/75">
                Consulte 58 itens com fotos reais, níveis de atenção, substâncias químicas e instruções passo a passo.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
              Explorar tabela →
            </span>
          </div>

          <div
            onClick={() => navigate("/informe-se")}
            className="rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-md transition cursor-pointer flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl">📚</span>
              <h3 className="mt-3 font-display text-xl font-bold text-primary">Biblioteca de Evidências</h3>
              <p className="mt-1 text-xs text-foreground/75">
                28 reportagens investigativas, artigos da Fiocruz e vídeos jornalísticos sobre agrotóxicos.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
              Acessar biblioteca →
            </span>
          </div>

          <div
            onClick={() => navigate("/criancas")}
            className="rounded-3xl border border-border bg-card p-6 hover:border-primary hover:shadow-md transition cursor-pointer flex flex-col justify-between"
          >
            <div>
              <span className="text-3xl">🎮</span>
              <h3 className="mt-3 font-display text-xl font-bold text-primary">Área Kids Educativa</h3>
              <p className="mt-1 text-xs text-foreground/75">
                Jogos da memória, palavras cruzadas, forca e o jogo dos Guardiões do Prato para crianças.
              </p>
            </div>
            <span className="mt-4 inline-flex items-center gap-1 text-xs font-bold text-primary">
              Jogar com a turma →
            </span>
          </div>
        </div>
      </section>
    </div>
  );
};
