import { Check, ArrowRight, Smartphone, MessageSquare, Shield, Sparkles, Utensils } from 'lucide-react';

export default function MenuDigitalLanding() {
  const WHATSAPP_NUMBER = "5581995032387";
  const getWhatsAppLink = (message: string) => `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;

  return (
    <div className="min-h-screen bg-[#EFECE6] text-[#2A2421] font-sans antialiased selection:bg-[#C85A32]/20 selection:text-[#C85A32]">
      
      {/* Header */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-[#EFECE6]/90 border-b border-[#DCD7CD]">
        <div className="max-w-6xl mx-auto px-6 h-20 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="p-2 bg-[#C85A32] rounded-lg text-[#EFECE6] shadow-sm">
              <Utensils size={18} />
            </div>
            <span className="font-bold text-lg tracking-tight uppercase text-[#2A2421]">Menu<span className="text-[#C85A32] font-light">Digital</span></span>
          </div>
          <nav className="hidden md:flex items-center gap-8 text-xs font-bold uppercase tracking-widest text-[#5C534E]">
            <a href="#funcionalidades" className="hover:text-[#C85A32] transition-colors">Funcionalidades</a>
            <a href="#planos" className="hover:text-[#C85A32] transition-colors">Preços</a>
            <a 
              href={getWhatsAppLink("Olá Pedro! Quero conhecer mais sobre o sistema de Menu Digital.")}
              target="_blank" 
              rel="noopener noreferrer" 
              className="bg-[#2A2421] text-[#EFECE6] px-6 py-2.5 rounded-md hover:bg-[#C85A32] transition-all shadow-md font-semibold"
            >
              Pedir meu Menu
            </a>
          </nav>
        </div>
      </header>

      <main className="max-w-5xl mx-auto px-6 py-20 space-y-40">
        
        {/* Hero Section */}
        <section className="text-center max-w-3xl mx-auto space-y-8 pt-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[#C85A32]/10 border border-[#C85A32]/30 text-[#C85A32] text-[10px] font-bold uppercase tracking-[0.2em]">
            <Sparkles size={12} /> Sabor & Tecnologia no mesmo lugar
          </div>
          <h1 className="text-5xl md:text-7xl font-serif font-light tracking-tight leading-[1.1] text-[#2A2421]">
            Seu cardápio digital, direto no <span className="italic font-normal text-[#C85A32] underline decoration-[#C85A32]/30 decoration-wavy underline-offset-8">WhatsApp</span>
          </h1>
          <p className="text-lg md:text-xl text-[#5C534E] max-w-xl mx-auto leading-relaxed font-light">
            Esqueça os aplicativos pesados ou as comandas de papel. Deixe que seus clientes façam pedidos elegantes que chegam prontos e organizados na sua cozinha.
          </p>
          <div className="flex flex-wrap items-center justify-center gap-5 pt-4">
            <a 
              href="#planos" 
              className="inline-flex items-center gap-3 px-8 h-14 rounded-md bg-[#C85A32] hover:bg-[#B24A25] text-[#EFECE6] text-sm font-bold uppercase tracking-widest transition-all shadow-lg shadow-[#C85A32]/30"
            >
              Ver Planos <ArrowRight size={16} />
            </a>
            <a 
              href="https://lanchonete-projeto.vercel.app/" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="inline-flex items-center gap-2 px-8 h-14 rounded-md bg-[#2A2421] text-[#EFECE6] text-sm font-bold uppercase tracking-widest hover:bg-[#3D3531] transition-all shadow-md"
            >
              Ver Demo Basic
            </a>
          </div>
        </section>

        {/* Recursos com Alto Destaque Escuro */}
        <section id="funcionalidades" className="scroll-mt-24 bg-[#2A2421] text-[#EFECE6] p-10 md:p-16 rounded-2xl shadow-xl space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-[10px] font-bold uppercase tracking-widest text-[#C85A32]">Vantagens Práticas</span>
            <h2 className="text-3xl font-serif text-white">Desenhado para o dia a dia do restaurante</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-12 pt-4">
            <div className="space-y-4">
              <div className="w-12 h-12 rounded-lg bg-[#C85A32] text-[#EFECE6] flex items-center justify-center shadow-md">
                <Smartphone size={20} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">Acesso via QR Code</h3>
              <p className="text-[#DCD7CD] text-sm leading-relaxed font-light">
                O cliente aponta a câmera para o QR Code na mesa e o menu abre instantaneamente no navegador do celular. Sem filas e sem fricção.
              </p>
            </div>

            <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#5C534E] pt-8 md:pt-0 md:pl-12">
              <div className="w-12 h-12 rounded-lg bg-[#C85A32] text-[#EFECE6] flex items-center justify-center shadow-md">
                <MessageSquare size={20} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">Carrinho no WhatsApp</h3>
              <p className="text-[#DCD7CD] text-sm leading-relaxed font-light">
                Os itens são selecionados, a taxa de entrega ou mesa é calculada e o pedido chega mastigado com todos os detalhes no seu WhatsApp.
              </p>
            </div>

            <div className="space-y-4 border-t md:border-t-0 md:border-l border-[#5C534E] pt-8 md:pt-0 md:pl-12">
              <div className="w-12 h-12 rounded-lg bg-[#C85A32] text-[#EFECE6] flex items-center justify-center shadow-md">
                <Shield size={20} />
              </div>
              <h3 className="text-lg font-bold uppercase tracking-tight text-white">Painel Administrador</h3>
              <p className="text-[#DCD7CD] text-sm leading-relaxed font-light">
                Altere os preços da sua hamburgueria ou pizzaria, adicione novos sabores ou pause itens esgotados em tempo real direto pelo celular.
              </p>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section id="planos" className="scroll-mt-24 space-y-16">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <h2 className="text-3xl font-serif text-[#2A2421]">Planos Diretos</h2>
            <p className="text-[#5C534E] text-sm">Escolha a estrutura ideal para começar a receber seus pedidos.</p>
          </div>

          <div className="grid md:grid-cols-2 gap-10 max-w-4xl mx-auto items-stretch">
            
            {/* Plano Basic */}
            <div className="p-10 rounded-xl bg-[#DCD7CD]/40 border-2 border-[#DCD7CD] flex flex-col justify-between space-y-12">
              <div className="space-y-6">
                <div className="flex justify-between items-start">
                  <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#5C534E]">Plano Basic</h3>
                </div>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif text-[#2A2421]">R$ 49</span>
                  <span className="text-[#5C534E] text-xs">/mês</span>
                </div>
                <ul className="space-y-4 text-sm text-[#5C534E]">
                  <li className="flex items-center gap-3 font-medium">
                    <Check size={16} className="text-[#C85A32]" /> Cardápio Digital personalizado
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Check size={16} className="text-[#C85A32]" /> Vendas ilimitadas no Cardapio Digital
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Check size={16} className="text-[#C85A32]" /> Até 50 produtos cadastrados
                  </li>
                  <li className="flex items-center gap-3 font-medium">
                    <Check size={16} className="text-[#C85A32]" /> Integração com 1 WhatsApp
                  </li>
                </ul>
              </div>
              <a 
                href={getWhatsAppLink("Olá Pedro! Quero o Plano Basic do Menu Digital.")}
                className="w-full py-4 border-2 border-[#2A2421] text-[#2A2421] text-[10px] font-bold uppercase tracking-widest hover:bg-[#2A2421] hover:text-[#EFECE6] transition-all text-center rounded-md"
              >
                Selecionar Basic
              </a>
            </div>

            {/* Plano Full (Destaque Pesado) */}
            <div className="p-10 rounded-xl bg-[#2A2421] text-[#EFECE6] flex flex-col justify-between space-y-12 shadow-2xl border-2 border-[#C85A32] relative overflow-hidden">
              <div className="absolute top-0 right-0 px-4 py-1.5 bg-[#C85A32] text-[#EFECE6] text-[9px] font-bold uppercase tracking-wider rounded-bl-lg">
                Mais Vendido
              </div>
              <div className="space-y-6">
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] text-[#DCD7CD]">Plano Full</h3>
                <div className="flex items-baseline gap-1">
                  <span className="text-5xl font-serif text-white">R$ 89</span>
                  <span className="text-[#DCD7CD] text-xs">/mês</span>
                </div>
                <ul className="space-y-4 text-sm text-[#DCD7CD]">
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-[#C85A32]" /> <span className="text-white font-medium">Todas as vantagens anteriores</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-[#C85A32]" /> <span>Produtos e categorias ilimitados</span>
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-[#C85A32]" /> Dashboard completo de vendas
                  </li>
                  <li className="flex items-center gap-3">
                    <Check size={16} className="text-[#C85A32]" /> Dashboard completo de pedidos
                  </li>
                </ul>
              </div>
              <a 
                href={getWhatsAppLink("Olá Pedro! Quero o Plano Full do Menu Digital.")}
                className="w-full py-4 bg-[#C85A32] hover:bg-[#B24A25] text-[#EFECE6] text-[10px] font-bold uppercase tracking-widest transition-all text-center rounded-md shadow-md shadow-[#C85A32]/20"
              >
                Garantir Acesso Completo
              </a>
            </div>

          </div>
        </section>

        {/* Footer */}
        <section className="pt-20 border-t border-[#DCD7CD] text-center space-y-6">
          <div className="flex justify-center gap-8">
            <a href="https://www.instagram.com/iampedrodavii/" className="text-[#5C534E] hover:text-[#C85A32] text-[10px] font-bold uppercase tracking-widest transition-colors">Instagram</a>
          </div>
          <p className="text-[10px] text-[#A69E94] uppercase tracking-[0.3em]">© {new Date().getFullYear()} — MenuDigital — Todos os direitos reservados</p>
        </section>

      </main>
    </div>
  );
}