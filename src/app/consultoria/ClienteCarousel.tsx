"use client";
import dynamic from 'next/dynamic';
import { FaLaptop, FaServer, FaProjectDiagram, FaDigitalTachograph, FaChalkboardTeacher, FaSearch } from 'react-icons/fa';
import 'react-multi-carousel/lib/styles.css';

const Carousel = dynamic(() => import('react-multi-carousel'), { ssr: false });

const responsive = {
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
    partialVisibilityGutter: 40
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
    partialVisibilityGutter: 30
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
    partialVisibilityGutter: 30
  }
};

export default function ClientCarousel() {
  return (
    <Carousel
      additionalTransfrom={0}
      arrows
      autoPlay
      autoPlaySpeed={2000}
      centerMode={false}
      className=""
      containerClass="container-with-dots"
      dotListClass=""
      draggable
      focusOnSelect={false}
      infinite
      itemClass=""
      keyBoardControl
      minimumTouchDrag={80}
      pauseOnHover
      renderArrowsWhenDisabled={false}
      renderButtonGroupOutside={false}
      renderDotsOutside={false}
      responsive={responsive}
      rewind={false}
      rewindWithAnimation={false}
      rtl={false}
      shouldResetAutoplay
      showDots={false}
      sliderClass=""
      slidesToSlide={2}
      swipeable
    >
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md h-100 w-100"> {/* Tamanho do card */}
        <FaLaptop size={40} className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">Consultoria em Tecnologia da Informação</h2>
        <div className="text-center overflow-auto h-full">
          <p>Auxilio empresas a tomarem decisões estratégicas na aquisição de hardware e software adequados às suas necessidades específicas.</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md h-100 w-100"> {/* Tamanho do card */}
        <FaServer size={40} className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">Conexão com Empresas de Infraestrutura e Suporte Técnico</h2>
        <div className="text-center overflow-auto h-full">
          <p>Facilito a comunicação entre empresas e fornecedores confiáveis de serviços de infraestrutura e suporte técnico.</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md h-100 w-100"> {/* Tamanho do card */}
        <FaProjectDiagram size={40} className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">Planejamento e Implementação de Soluções de TI</h2>
        <div className="text-center overflow-auto h-full">
          <p>Desenvolvo estratégias de tecnologia para otimizar os processos internos das empresas.</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md h-100 w-100"> {/* Tamanho do card */}
        <FaDigitalTachograph size={40} className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">Consultoria em Estratégias Digitais</h2>
        <div className="text-center overflow-auto h-full">
          <p>Apoio empresas na transição para o ambiente digital, incluindo a escolha e configuração de ferramentas de comunicação e trabalho remoto.</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md h-100 w-100"> {/* Tamanho do card */}
        <FaChalkboardTeacher size={40} className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">Orientação e Treinamento</h2>
        <div className="text-center overflow-auto h-full">
          <p>Ofereço treinamentos personalizados para equipes, focados no uso eficiente de novas tecnologias.</p>
        </div>
      </div>
      <div className="flex flex-col items-center p-4 bg-gray-200 rounded-lg shadow-md h-100 w-100"> {/* Tamanho do card */}
        <FaSearch size={40} className="mb-4" />
        <h2 className="text-xl font-semibold mb-2">Auditoria e Otimização de Sistemas</h2>
        <div className="text-center overflow-auto h-full">
          <p>Realizo auditorias completas nos sistemas e infraestruturas de TI para identificar gargalos, vulnerabilidades e oportunidades de otimização.</p>
        </div>
      </div>
    </Carousel>
  );
}