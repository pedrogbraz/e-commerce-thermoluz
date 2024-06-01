"use client"

import { motion } from "framer-motion";

export default function Sobre() {
  return (
    <div className="px-5 sm:px-12 md:px-16 space-y-6">
     <div className="flex flex-col gap-4 font-light text-[--text] bg-[--bg] md:bg-[--bg] px-4 py-6 rounded-xl">
     <motion.h1
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      className="text-3xl font-medium text-[--black70]">Sobre nós</motion.h1>
      <motion.span
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.1 }}
      >A <b className="font-medium">Thermoluz</b> é uma <b className="font-medium">empresa líder</b> sediada em Guarulhos, especializada em soluções de <b className="font-medium">aquecimento de alta qualidade</b> para uma variedade de aplicações industriais e comerciais. Desde a sua fundação, a <b className="font-medium">Thermoluz</b> tem sido uma <b className="font-medium">pioneira</b> em oferecer <b className="font-medium">resistências tubulares, cartuchos</b> e uma ampla gama de materiais de aquecimento, garantindo <b className="font-medium">eficiência</b> e <b className="font-medium">confiabilidade</b> em cada projeto.</motion.span>

      <motion.span
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.2 }}
      >Com <b className="font-medium">décadas de experiência</b> no setor, nossa equipe altamente qualificada oferece um <b className="font-medium">atendimento personalizado</b>, combinando expertise técnica com um compromisso inabalável com a <b className="font-medium">satisfação do cliente</b>. Estamos comprometidos em fornecer não apenas os <b className="font-medium">melhores produtos do mercado</b>, mas também <b className="font-medium">soluções personalizadas</b> que atendam às <b className="font-medium">necessidades específicas</b> de cada cliente.</motion.span>

      <motion.span
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.3 }}
      >Na <b className="font-medium">Thermoluz</b>, valorizamos a <b className="font-medium">inovação</b> e a <b className="font-medium">excelência</b> em tudo o que fazemos. Nosso foco contínuo em <b className="font-medium">pesquisa e desenvolvimento</b> nos permite estar na <b className="font-medium">vanguarda da tecnologia</b> de aquecimento, garantindo que nossos clientes tenham acesso às <b className="font-medium">soluções mais avançadas</b> disponíveis.</motion.span>

      <motion.span
      initial={{ opacity: 0, translateY: -20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ delay: 0.4 }}
      >Seja para aplicações <b className="font-medium">industriais</b>, <b className="font-medium">comerciais</b> ou <b className="font-medium">personalizadas</b>, na <b className="font-medium">Thermoluz</b> você encontrará não apenas produtos de <b className="font-medium">alta qualidade</b>, mas também um <b className="font-medium">parceiro confiável</b> e comprometido com o seu <b className="font-medium">sucesso</b>. Estamos dedicados a fornecer soluções de aquecimento eficientes, <b className="font-medium">confiáveis e sob medida</b> para atender às <b className="font-medium">demandas mais exigentes</b> de nossos clientes.</motion.span>
     </div>
    </div>
  )
}