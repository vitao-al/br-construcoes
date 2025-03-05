export default function Footer(){
    return (
        <footer className="bg-neutral-900 text-white py-12">
        <div className="container mx-auto px-6">
          <div className="grid md:grid-cols-4 gap-12 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <img className="w-12 h-12" src="/brlogo.png"/>
                <span className="text-2xl font-bold">BR Construções</span>
              </div>
              <p className="text-gray-400">
                Sua parceira completa em construção, oferecendo qualidade e excelência em todos os projetos.
              </p>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb- 4">Produtos</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Materiais Básicos</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Acabamentos</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Ferramentas</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Elétrica</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Hidráulica</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Serviços</h3>
              <ul className="space-y-2 text-gray-400">
                <li><a href="#" className="hover:text-orange-600 transition-colors">Projetos</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Construção</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Reformas</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Consultoria</a></li>
                <li><a href="#" className="hover:text-orange-600 transition-colors">Orçamentos</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold mb-4">Newsletter</h3>
              <p className="text-gray-400 mb-4">
                Receba nossas novidades e ofertas exclusivas.
              </p>
              <form className="space-y-2">
                <input
                  type="email"
                  placeholder="Seu email"
                  className="w-full px-4 py-2 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-600 text-white"
                />
                <button className="w-full bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                  Inscrever-se
                </button>
              </form>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 text-center">
            <p className="text-gray-400">© 2024 BR Construções. Todos os direitos reservados.</p>
          </div>
        </div>
      </footer>
    )
}