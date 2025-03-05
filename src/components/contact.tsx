import { MapPin, Phone, Mail, Clock } from "lucide-react"

export default function Contact(){
    return(
        <section id="contato" className="py-20">
        <div className="container mx-auto px-6">
          <div className="bg-white rounded-2xl shadow-xl overflow-hidden">
            <div className="grid md:grid-cols-2">
              <div className="p-12 bg-neutral-900 text-white">
                <h2 className="text-3xl font-bold mb-6">Entre em Contato</h2>
                <p className="text-gray-400 mb-8">
                  Estamos prontos para atender você e tirar todas as suas dúvidas.
                </p>
                <div className="space-y-6">
                  <div className="flex items-center space-x-4">
                    <Phone className="w-6 h-6 text-orange-600" />
                    <span>(82) 9 9171-5371</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Mail className="w-6 h-6 text-orange-600" />
                    <span>br.construcooes@gmail.com</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <MapPin className="w-6 h-6 text-orange-600" />
                    <span>AV PRESIDENTE GARRASTAZU MEDICI, 85 - Matriz de Camaragibe, AL</span>
                  </div>
                  <div className="flex items-center space-x-4">
                    <Clock className="w-6 h-6 text-orange-600" />
                    <span>Seg - Sáb: 8h às 18h</span>
                  </div>
                </div>
              </div>

              <div className="p-12">
                <form className="space-y-6">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-2">
                      Nome Completo
                    </label>
                    <input
                      type="text"
                      id="name"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="Seu nome"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      id="email"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="seu@email.com"
                    />
                  </div>
                  <div>
                    <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                      Telefone
                    </label>
                    <input
                      type="tel"
                      id="phone"
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="(00) 00000-0000"
                    />
                  </div>
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-2">
                      Mensagem
                    </label>
                    <textarea
                      id="message"
                      rows={4}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600"
                      placeholder="Como podemos ajudar?"
                    ></textarea>
                  </div>
                  <button className="w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                    Enviar Mensagem
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    )
}