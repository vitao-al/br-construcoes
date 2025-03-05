
import {ChevronRight} from 'lucide-react'


export default function Header(){
    return(
        <header className="relative h-screen">
        <div className="absolute inset-0">
          <img
            src="/brlogo.png"
            alt="Construção"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/70 to-black/50"></div>
        </div>
        
        <nav className="relative z-10 container mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-2">
              <img className='w-12 h-12' src="https://drive.google.com/file/d/1rwFoV5gsNKcUdhyGbBTV3YdqcLbFMDBu/view?usp=sharing"/>
              <span className="text-2xl font-bold text-white">BR Construções</span>
            </div>
            <div className="hidden md:flex space-x-8 text-white">
              <a href="#produtos" className="hover:text-orange-600 transition-colors">Produtos</a>
              <a href="#servicos" className="hover:text-orange-600 transition-colors">Serviços</a>
              <a href="#projetos" className="hover:text-orange-600 transition-colors">Projetos</a>
              <a href="#depoimentos" className="hover:text-orange-600 transition-colors">Depoimentos</a>
              <a href="#contato" className="hover:text-orange-600 transition-colors">Contato</a>
            </div>
            <a href="#contato" className="hidden md:block bg-orange-600 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
              Orçamento
            </a>
          </div>
        </nav>

        <div className="relative z-10 container mx-auto px-6 h-[calc(100%-88px)] flex items-center">
          <div className="max-w-3xl">
            <h1 className="text-6xl font-bold text-white mb-6 leading-tight">
              Transforme seus sonhos em realidade com a BR Construções
            </h1>
            <p className="text-xl text-gray-200 mb-8">
              Há mais de 20 anos oferecendo materiais de construção de qualidade e serviços de engenharia profissionais para realizar seus projetos com excelência.
            </p>
            <div className="flex flex-wrap gap-4">
              <a href="#contato" className="bg-orange-600 text-gray-900 px-8 py-4 rounded-lg font-semibold hover:bg-orange-700 transition-colors flex items-center">
                Solicite um Orçamento
                <ChevronRight className="ml-2" />
              </a>
              <a href="#produtos" className="border-2 border-white text-white px-8 py-4 rounded-lg font-semibold hover:bg-white/10 transition-colors">
                Conheça Nossos Produtos
              </a>
            </div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-white to-transparent h-32"></div>
      </header>
    )
}