import { Card } from "@/components/ui/card";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-hero">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 lg:py-24">
        <div className="max-w-4xl mx-auto text-center">
          {/* Logo e Título Principal */}
          <div className="mb-12">
            <div className="inline-block p-4 bg-gradient-primary rounded-full mb-8 animate-float">
              <span className="text-6xl font-bold text-white">R</span>
            </div>
            <h1 className="text-5xl lg:text-7xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
              RAAV
            </h1>
            <p className="text-xl lg:text-2xl text-muted-foreground mb-8">
              Fintech Digital
            </p>
          </div>

          {/* Mensagem Principal */}
          <Card className="p-8 lg:p-12 mb-12 backdrop-blur-sm bg-card/80 border border-primary/20">
            <h2 className="text-2xl lg:text-3xl font-bold mb-6 text-foreground">
              Bem-vindo ao futuro das finanças digitais
            </h2>
            <p className="text-lg lg:text-xl text-muted-foreground mb-8 leading-relaxed">
              Estamos em construção da plataforma <span className="font-semibold text-primary">Raav</span>, 
              uma fintech digital inovadora que revolucionará sua experiência financeira. 
              Nossa plataforma estará disponível em breve para nossos clientes.
            </p>
            
            {/* Status Badge */}
            <div className="inline-flex items-center px-6 py-3 bg-primary/10 border border-primary/20 rounded-full">
              <div className="w-3 h-3 bg-primary rounded-full mr-3 animate-pulse"></div>
              <span className="text-primary font-medium">Em Desenvolvimento</span>
            </div>
          </Card>

          {/* Seção AngryCode */}
          <div className="border-t border-border pt-12">
            <p className="text-muted-foreground mb-6">
              Desenvolvido por
            </p>
            <div className="flex items-center justify-center space-x-4">
              <div className="w-16 h-16 lg:w-20 lg:h-20 bg-gradient-primary rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-2xl lg:text-3xl">AC</span>
              </div>
              <div className="text-left">
                <h3 className="text-2xl lg:text-3xl font-bold text-foreground">
                  AngryCode
                </h3>
                <p className="text-muted-foreground">
                  Desenvolvimento Web
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-muted-foreground">
            © 2024 Raav - Fintech Digital | Desenvolvido pela AngryCode
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;
