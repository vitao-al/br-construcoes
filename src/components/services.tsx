import { Pencil, ChevronRight, Building2, Ruler } from "lucide-react"

export default function Services(){
    return (
        <section id="servicos" className="py-20">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Serviços de Engenharia</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Nossa equipe de engenheiros e arquitetos está pronta para tornar seu projeto realidade, desde o planejamento até a execução.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Pencil className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Projetos Arquitetônicos</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Plantas baixas detalhadas
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Projetos 3D
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Documentação completa
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Building2 className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Execução de Obras</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Construção residencial
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Reformas comerciais
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Acabamentos especiais
                </li>
              </ul>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <Ruler className="w-12 h-12 text-orange-600 mb-6" />
              <h3 className="text-xl font-semibold mb-4">Consultoria Técnica</h3>
              <ul className="space-y-3 text-gray-600">
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Avaliação estrutural
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Orientação técnica
                </li>
                <li className="flex items-center">
                  <ChevronRight className="w-5 h-5 text-orange-600 mr-2" />
                  Laudos técnicos
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    )
}