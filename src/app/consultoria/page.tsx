import { FaArrowLeft } from "react-icons/fa";
import ClientCarousel from './ClienteCarousel';
import Link from "next/link";
function Sidebar() {
    return (
        <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col p-4">
            <h2 className="text-2xl font-bold mb-8">Menu</h2>
            <nav className="flex flex-col gap-4">
                <a href="#nossos-servicos" className="hover:underline">Meus Serviços</a>
                <a href="/clientes" className="hover:underline">Clientes</a>
                <a href="/contato" className="hover:underline">Contato</a>
                <Link href="/" className="flex items-center gap-2 hover:underline mt-auto">
                    <FaArrowLeft />
                    Voltar
                </Link>
            </nav>
        </aside>
    );
}
/*
export default function Consultoria() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center">Consultoria em Aquisição de Hardware e Infraestrutura de TI</h1>
          <p className="text-center text-lg mt-4">
            Oferecemos consultoria especializada para ajudar sua empresa a escolher e implementar as melhores soluções de hardware e infraestrutura de TI, garantindo desempenho, segurança e escalabilidade.
          </p>
        </header>
        <main className="flex flex-col items-center gap-8">
          <section id="nossos-servicos" className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md">
                <FaLaptop size={40} className="mb-4" />
                <h2 className="text-xl font-semibold mb-2">Consultoria em Tecnologia da Informação</h2>
                <p className="text-center">Auxilio empresas a tomarem decisões estratégicas na aquisição de hardware e software adequados às suas necessidades específicas.</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md">
                <FaServer size={40} className="mb-4" />
                <h2 className="text-xl font-semibold mb-2">Conexão com Empresas de Infraestrutura e Suporte Técnico</h2>
                <p className="text-center">Facilito a comunicação entre empresas e fornecedores confiáveis de serviços de infraestrutura e suporte técnico.</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md">
                <FaProjectDiagram size={40} className="mb-4" />
                <h2 className="text-xl font-semibold mb-2">Planejamento e Implementação de Soluções de TI</h2>
                <p className="text-center">Desenvolvo estratégias de tecnologia para otimizar os processos internos das empresas.</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md">
                <FaDigitalTachograph size={40} className="mb-4" />
                <h2 className="text-xl font-semibold mb-2">Consultoria em Estratégias Digitais</h2>
                <p className="text-center">Apoio empresas na transição para o ambiente digital, incluindo a escolha e configuração de ferramentas de comunicação e trabalho remoto.</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md">
                <FaChalkboardTeacher size={40} className="mb-4" />
                <h2 className="text-xl font-semibold mb-2">Orientação e Treinamento</h2>
                <p className="text-center">Ofereço treinamentos personalizados para equipes, focados no uso eficiente de novas tecnologias.</p>
              </div>
              <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md">
                <FaSearch size={40} className="mb-4" />
                <h2 className="text-xl font-semibold mb-2">Auditoria e Otimização de Sistemas</h2>
                <p className="text-center">Realizo auditorias completas nos sistemas e infraestruturas de TI para identificar gargalos, vulnerabilidades e oportunidades de otimização.</p>
                <p className="text-center">Ofereço recomendações práticas para melhorar o desempenho, segurança e escalabilidade dos sistemas existentes.</p>
              </div>
            </div>
          </section>
          <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
            <p className="text-lg mb-4">Descubra como posso ajudar sua empresa a alcançar novos patamares com soluções tecnológicas personalizadas.</p>
            <a href="#contato" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Entre em Contato</a>
          </section>
        </main>
      </div>
    </div>
  );
}
*/
export default function Consultoria() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center">Consultoria em Aquisição de Hardware e Infraestrutura de TI</h1>
          <p className="text-center text-lg mt-4">
            Oferecemos consultoria especializada para ajudar sua empresa a escolher e implementar as melhores soluções de hardware e infraestrutura de TI, garantindo desempenho, segurança e escalabilidade.
          </p>
        </header>
        <main className="flex flex-col items-center gap-8">
          <section id="nossos-servicos" className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <ClientCarousel />
          </section>
          <section className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl text-center">
            <h2 className="text-2xl font-semibold mb-4">Entre em Contato</h2>
            <p className="text-lg mb-4">Descubra como posso ajudar sua empresa a alcançar novos patamares com soluções tecnológicas personalizadas.</p>
            <a href="#contato" className="px-4 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors">Entre em Contato</a>
          </section>
        </main>
      </div>
    </div>
  );
}