import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Search, ShoppingCart, Trash2, Plus, Minus } from 'lucide-react';
import { storeData } from '../data/storeData';
import { useCart } from '../context/CartContext';

const StorePage: React.FC = () => {
  const navigate = useNavigate();
  const [searchQuery, setSearchQuery] = useState('');
  const { cartItems, addToCart, removeFromCart, increaseQuantity, decreaseQuantity, getCartTotal } = useCart();

  const filteredProducts = useMemo(() => {
    if (!searchQuery) {
      return storeData;
    }
    return storeData.filter(product =>
      product.name.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);
  
  const handleCheckout = () => {
    const total = getCartTotal();
    let message = "Hello! I'd like to order the following items:\n\n";
    
    cartItems.forEach(item => {
      message += `- ${item.name} (x${item.quantity})\n`;
    });
    
    message += `\n*Total Price: ₹${total.toLocaleString('en-IN')}*`;

    const phoneNumber = "+917994715830";
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
  };

  return (
    <div className="bg-black text-white pt-24 pb-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* UPDATED: Header now centers on mobile and shows the button */}
        <div className="flex flex-col sm:flex-row justify-between sm:items-center gap-8 mb-12 text-center sm:text-left">
          <div>
            <h1 className="text-4xl md:text-5xl font-bold mb-2">
              Component
              <span className="block bg-gradient-to-r from-orange-500 to-orange-600 bg-clip-text text-transparent">
                Store
              </span>
            </h1>
            <p className="text-lg text-gray-400">Your one-stop shop for project essentials.</p>
          </div>
          <button
            onClick={() => navigate('/')}
            className="self-center sm:self-auto inline-flex items-center px-6 py-3 bg-gray-800 text-white font-semibold rounded-full hover:bg-gray-700 transition-colors"
          >
            <ArrowLeft size={20} className="mr-2" />
            Back to Home
          </button>
        </div>

        <div className="relative mb-12">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
          <input
            type="text"
            placeholder="Search for a component..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full bg-gray-900 text-white rounded-full py-3 pl-12 pr-4 ring-1 ring-transparent focus:ring-orange-500 focus:outline-none transition"
          />
        </div>

        {cartItems.length > 0 && (
          <div className="bg-gray-900 p-4 sm:p-6 rounded-2xl mb-12 ring-1 ring-orange-500/50">
            <h2 className="text-2xl font-bold flex items-center mb-4"><ShoppingCart className="mr-3 text-orange-500"/>Your Cart</h2>
            <div className="space-y-3">
              {cartItems.map(item => (
                // UPDATED: Cart items now wrap on small screens for better readability
                <div key={item.id} className="flex flex-wrap justify-between items-center text-gray-300 gap-2">
                  <span className="flex-1 pr-4 font-semibold">{item.name}</span>
                  <div className="flex items-center gap-3">
                    <button onClick={() => decreaseQuantity(item.id)} className="p-1 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors">
                      <Minus size={14} />
                    </button>
                    <span className="font-bold w-4 text-center">{item.quantity}</span>
                    <button onClick={() => increaseQuantity(item.id)} className="p-1 rounded-full bg-gray-700 hover:bg-orange-500 transition-colors">
                      <Plus size={14} />
                    </button>
                  </div>
                  <div className="flex items-center gap-4 w-full sm:w-28 justify-end mt-2 sm:mt-0">
                    <span>₹{(Number(item.price.replace(/[₹,]/g, '')) * item.quantity).toLocaleString('en-IN')}</span>
                    <button onClick={() => removeFromCart(item.id)} className="text-red-500 hover:text-red-400 transition-colors"><Trash2 size={16} /></button>
                  </div>
                </div>
              ))}
            </div>
            <hr className="border-gray-700 my-4" />
            <div className="flex justify-between items-center font-bold text-xl">
              <span>Total</span>
              <span>₹{getCartTotal().toLocaleString('en-IN')}</span>
            </div>
            <button onClick={handleCheckout} className="w-full mt-6 py-3 bg-green-600 text-white font-semibold rounded-full hover:bg-green-700 transition-colors">
              Checkout on WhatsApp
            </button>
          </div>
        )}

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {filteredProducts.map((product) => (
            <div key={product.id} className="bg-gray-900 rounded-2xl overflow-hidden shadow-lg flex flex-col">
              <img src={product.image} alt={product.name} className="w-full h-56 object-cover" />
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">{product.name}</h3>
                <p className="text-gray-400 mb-4 flex-grow">{product.description}</p>
                <div className="flex flex-col sm:flex-row justify-between sm:items-center mt-4 gap-4">
                  <p className="text-xl sm:text-2xl font-bold text-orange-500">{product.price}</p>
                  <button
                    onClick={() => addToCart(product)}
                    className="w-full sm:w-auto px-5 py-2 bg-orange-500 text-black font-semibold rounded-full hover:bg-orange-600 transition-colors"
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {filteredProducts.length === 0 && (
          <div className="text-center py-16">
            <h3 className="text-2xl font-bold text-gray-400">No components found.</h3>
            <p className="text-gray-500">Try adjusting your search query.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default StorePage;