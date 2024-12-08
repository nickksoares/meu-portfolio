import Image from "next/image";
import { FaArrowLeft } from "react-icons/fa";
import Link from "next/link";

function Sidebar() {
  return (
    <aside className="fixed top-0 left-0 h-full w-64 bg-gray-800 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-8">Menu</h2>
      <nav className="flex flex-col gap-4">
        <a href="#sobre" className="hover:underline">Sobre</a>
        <a href="#aplicativos" className="hover:underline">Aplicativos Publicados</a>
        <a href="#contato" className="hover:underline">Contato</a>
        <Link href="/" className="flex items-center gap-2 hover:underline mt-auto">
          <FaArrowLeft />
          Voltar
        </Link>
      </nav>
    </aside>
  );
}

export default function Desenvolvimento() {
  return (
    <div className="flex">
      <Sidebar />
      <div className="flex flex-col items-center justify-center min-h-screen p-8 bg-gray-100 ml-64">
        <header className="mb-8">
          <h1 className="text-4xl font-bold text-center">Desenvolvimento Mobile</h1>
          <p className="text-center text-lg mt-4">Especialista em desenvolvimento de aplicativos móveis utilizando Flutter.</p>
        </header>
        <main className="flex flex-col items-center gap-8">
          <section id="sobre" className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Quem Sou e o Que Faço</h2>
            <p className="text-lg mb-4">Sou um desenvolvedor mobile com experiência no uso de tecnologias modernas como Flutter e React Native. Minha missão é transformar ideias em soluções digitais eficazes, sempre focando na experiência do usuário.</p>
            <p className="text-lg mb-4">Além de minha atuação como desenvolvedor, trago comigo uma sólida experiência como militar concursado, o que contribuiu para meu perfil disciplinado, resiliente e orientado para resultados.</p>
            <p className="text-lg mb-4">Atualmente, estou expandindo minha carreira para a tecnologia, com foco em desenvolvimento de aplicativos móveis e projetos inovadores que resolvem problemas reais.</p>
            <h2 className="text-2xl font-semibold mb-4">Minha Carreira e Experiência</h2>
            <p className="text-lg mb-4">Minha transição para a tecnologia começou com uma paixão por aplicativos móveis, onde encontrei uma oportunidade de unir criatividade e resolução de problemas.</p>
            <p className="text-lg mb-4">Tenho experiência prática com:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Desenvolvimento mobile multiplataforma (Android e iOS) usando Flutter.</li>
              <li>Segurança de aplicações e boas práticas para proteger dados sensíveis.</li>
              <li>Gerenciamento de estado e integração com APIs para construir soluções robustas e escaláveis.</li>
            </ul>
            <p className="text-lg mb-4">Com base na minha formação e trabalho anterior, trago também habilidades em planejamento estratégico, trabalho em equipe e liderança, que aplico na execução dos projetos de tecnologia.</p>
            <h2 className="text-2xl font-semibold mb-4">Projetos Concluídos</h2>
            <p className="text-lg mb-4">Radiation Calc:</p>
            <p className="text-lg mb-4">Um aplicativo já publicado que ajuda usuários a calcular doses de radiação, com foco em áreas técnicas e médicas.</p>
            <p className="text-lg mb-4">Destaques:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Interface simples e funcional.</li>
              <li>Foco na precisão dos cálculos e em uma experiência agradável para o usuário.</li>
            </ul>
            <p className="text-lg mb-4">DiveCalc2 (em desenvolvimento):</p>
            <p className="text-lg mb-4">Um aplicativo voltado para mergulhadores, projetado para calcular tabelas de mergulho sem descompressão.</p>
            <p className="text-lg mb-4">Destaques esperados:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Interface amigável para ambientes subaquáticos.</li>
              <li>Design intuitivo que auxilia mergulhadores com cálculos rápidos e precisos.</li>
            </ul>
            <p className="text-lg mb-4">[Outros Projetos]</p>
            <h2 className="text-2xl font-semibold mb-4">Minhas Habilidades</h2>
            <p className="text-lg mb-4">Desenvolvimento de Software</p>
            <p className="text-lg mb-4">Desenvolvimento Mobile:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Criação de aplicativos nativos e cross-platform (Flutter e React Native).</li>
              <li>Gerenciamento eficiente de estados com Provider e Riverpod.</li>
              <li>Integração com serviços de backend, incluindo APIs RESTful e Firebase.</li>
            </ul>
            <p className="text-lg mb-4">Segurança e Infraestrutura:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Implementação de boas práticas de segurança no desenvolvimento de aplicativos.</li>
              <li>Testes automatizados e controle de qualidade do software.</li>
            </ul>
            <p className="text-lg mb-4">Design e Experiência do Usuário:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Criação de interfaces modernas e responsivas, alinhadas às boas práticas de design.</li>
              <li>Uso de ferramentas como Figma para prototipagem e design colaborativo.</li>
            </ul>
            <h2 className="text-2xl font-semibold mb-4">Planos para o Futuro</h2>
            <p className="text-lg mb-4">Expansão de Habilidades Técnicas:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Aprimorar meus conhecimentos em React Native, DevOps e CI/CD para otimizar processos de desenvolvimento e entrega.</li>
              <li>Explorar tecnologias emergentes como Inteligência Artificial e Realidade Aumentada para incorporar novas funcionalidades aos aplicativos.</li>
            </ul>
            <p className="text-lg mb-4">Publicação de Novos Projetos:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Lançar o DiveCalc2 e expandir o Radiation Calc com novas funcionalidades baseadas no feedback dos usuários.</li>
              <li>Trabalhar em aplicativos voltados para produtividade e educação, focando em resolver problemas práticos do dia a dia.</li>
            </ul>
            <p className="text-lg mb-4">Contribuição para a Comunidade:</p>
            <ul className="list-disc list-inside mb-4">
              <li>Produzir conteúdo educacional, como artigos, tutoriais ou mentorias, para ajudar outros desenvolvedores a começarem suas carreiras.</li>
            </ul>
          </section>
          <section id="aplicativos" className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Meus Aplicativos</h2>
            <p className="text-lg mb-4">Confira alguns dos meus aplicativos publicados na Play Store:</p>
            <ul className="list-disc list-inside">
              <li className="flex items-center gap-2">
                <Image src="/playstore.png" alt="App 1" width={650} height={750} layout="intrinsic" />
              </li>
              <li><a href="https://play.google.com/store/apps/details?id=com.nickksoares.radCalc" className="text-blue-500 hover:underline">Radiation Calc</a></li>
            </ul>
          </section>
          <section id="contato" className="bg-white p-6 rounded-lg shadow-md w-full max-w-2xl">
            <h2 className="text-2xl font-semibold mb-4">Contato</h2>
            <p className="text-lg mb-4">Entre em contato comigo através do email: contact@nicksoares.com</p>
          </section>
        </main>
      </div>
    </div>
  );
}