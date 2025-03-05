import { useState } from "react";
import {products} from '../data/objects';

export default function Products(){

    const [activeTab, setActiveTab] = useState('todos');

    return (
        <section id="produtos" className="py-20 bg-gray-50">
                <div className="container mx-auto px-6">
                  <h2 className="text-4xl font-bold text-center mb-4">Nossos Produtos</h2>
                  <p className="text-gray-600 text-center mb-12 max-w-2xl mx-auto">
                    Oferecemos uma ampla variedade de materiais de construção e acabamentos das melhores marcas do mercado.
                  </p>
        
                  <div className="flex justify-center space-x-4 mb-12">
                    <div className="w-full overflow-x-auto whitespace-nowrap p-4">
                    <button
                      onClick={() => setActiveTab('todos')}
                      className={`px-6 py-2 rounded-full ${
                        activeTab === 'todos'
                          ? 'bg-orange-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      Todos
                    </button>
                    <button
                      onClick={() => setActiveTab('materiais')}
                      className={`px-6 py-2 rounded-full ${
                        activeTab === 'materiais'
                          ? 'bg-orange-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      Materiais Básicos
                    </button>
                    <button
                      onClick={() => setActiveTab('acabamentos')}
                      className={`px-6 py-2 rounded-full ${
                        activeTab === 'acabamentos'
                          ? 'bg-orange-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      Acabamentos
                    </button>
                    <button
                      onClick={() => setActiveTab('ferramentas')}
                      className={`px-6 py-2 rounded-full ${
                        activeTab === 'ferramentas'
                          ? 'bg-orange-600 text-white'
                          : 'bg-white text-gray-600 hover:bg-gray-100'
                      } transition-colors`}
                    >
                      Ferramentas
                    </button>
                    </div>
                  </div>
        
                  <div className="grid md:grid-cols-3 gap-8">
                    {products[activeTab].map((product, index) => (
                      <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
                        <div className="h-64 overflow-hidden">
                          <img
                            src={product.image}
                            alt={product.name}
                            className="w-full h-full object-cover hover:scale-105 transition-transform duration-300"
                          />
                        </div>
                        <div className="p-6">
                          <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
                          <p className="text-yellow-600 font-bold">{product.price}</p>
                          <button className="mt-4 w-full bg-orange-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-orange-700 transition-colors">
                            Solicitar Orçamento
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>
    )
}