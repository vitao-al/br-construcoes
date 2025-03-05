import { Truck, Users, ShieldCheck, Percent } from "lucide-react"

export default function Diferenciais(){
    return (
        <section className="py-20 bg-white">
        <div className="container mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4">Por que Escolher a BR Construções?</h2>
          <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
            Nosso compromisso é oferecer a melhor experiência em construção e reforma para nossos clientes.
          </p>

          <div className="grid md:grid-cols-4 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <Truck className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Entrega Rápida</h3>
              <p className="text-gray-600">Entrega em até 24h para toda região</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <Users className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Equipe Qualificada</h3>
              <p className="text-gray-600">Profissionais experientes e capacitados</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <ShieldCheck className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Garantia de Qualidade</h3>
              <p className="text-gray-600">Produtos das melhores marcas</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 mx-auto bg-orange-600 rounded-full flex items-center justify-center mb-4">
                <Percent className="w-8 h-8 text-gray-900" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Melhor Preço</h3>
              <p className="text-gray-600">Condições especiais de pagamento</p>
            </div>
          </div>
        </div>
      </section>
    )
}