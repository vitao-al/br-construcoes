import { Star } from "lucide-react"

export default function Depoimentos(){
    return (
        <section id="depoimentos" className="py-20 bg-gray-50">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">O que Dizem Nossos Clientes</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            A satisfação dos nossos clientes é o nosso maior orgulho.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src='src/assets/dutra.png'
                  alt="Cliente"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Ewerton Dutra</h3>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Excelente atendimento e produtos de qualidade. A equipe técnica foi muito prestativa em todas as etapas do projeto."
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="src/assets/josi.png"
                  alt="Cliente"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Irmão Josi</h3>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Reforma completa do meu apartamento com a BR Construções. Resultado incrível e dentro do prazo!"
              </p>
            </div>

            <div className="bg-white p-8 rounded-xl shadow-lg">
              <div className="flex items-center mb-4">
                <img
                  src="src/assets/marcos.png"
                  alt="Cliente"
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">Marcos Lima</h3>
                  <div className="flex text-yellow-400">
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                    <Star className="w-4 h-4 fill-current" />
                  </div>
                </div>
              </div>
              <p className="text-gray-600">
                "Preços competitivos e entrega sempre no prazo. Minha construtora só compra com a ConstruMais."
              </p>
            </div>
          </div>
        </div>
      </section>
    )
}