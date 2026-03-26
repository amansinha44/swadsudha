import React, { useState, useEffect } from 'react';
import { Trash2, User, Phone, MapPin, Home, ArrowRight, Mail, Info, ShieldCheck, RefreshCcw, Plus, Minus, Loader2 } from 'lucide-react'; // Loader2 add kiya loading animation ke liye

const CheckoutPage = ({ cart, setCart }) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    email: '',
    address: '',
    landmark: ''
  });

  // 🔴 Loading state for API Call
  const [isSubmitting, setIsSubmitting] = useState(false);

  // Captcha States
  const [captcha, setCaptcha] = useState({ num1: 0, num2: 0 });
  const [captchaInput, setCaptchaInput] = useState('');

  const generateCaptcha = () => {
    setCaptcha({
      num1: Math.floor(Math.random() * 10) + 1,
      num2: Math.floor(Math.random() * 10) + 1
    });
    setCaptchaInput('');
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const finalTotal = cart.reduce((total, item) => total + (item.price * item.qty), 0);

  const handleRemove = (id) => {
    setCart(cart.filter(item => item.id !== id));
  };

  // Quantity Change Handler
  const handleQuantityChange = (id, newQty) => {
    if (newQty < 1) return;
    if (newQty > 12) {
      alert("Aap ek baar mein maximum 12 items hi order kar sakte hain.");
      return;
    }
    
    setCart(cart.map(item => 
      item.id === id ? { ...item, qty: newQty } : item
    ));
  };

  // 🔴 NEW: Vercel API Call Logic
  const handlePlaceOrder = async (e) => {
    e.preventDefault();
    
    if(cart.length === 0) {
      alert("Aapka cart khali hai! Pehle menu se kuch add karein.");
      return;
    }

    if (parseInt(captchaInput) !== captcha.num1 + captcha.num2) {
      alert("Kripya sahi Captcha (Math Answer) enter karein!");
      generateCaptcha();
      return;
    }

    setIsSubmitting(true); // Button ko loading state me daalein

    try {
      // 🔴 Vercel Backend API ko data bhejein
      const response = await fetch('/api/sendOrder', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          customer: formData,
          items: cart,
          totalAmount: finalTotal
        }),
      });

      const data = await response.json();

      if (response.ok && data.success) {
        alert(`Shukriya ${formData.name}! Aapka ₹${finalTotal} ka order tayyar ho raha hai. Confirmation email jald hi aayega.`);
        
        // Order success hone ke baad form aur cart clear karein
        setCart([]);
        setFormData({ name: '', phone: '', email: '', address: '', landmark: '' });
        generateCaptcha();
      } else {
        alert("Oops! Kuch technical issue aa gaya. Kripya humein direct call karein.");
        console.error("API Error:", data.message);
      }
    } catch (error) {
      console.error("Checkout Error:", error);
      alert("Internet connection check karein aur wapas try karein.");
    } finally {
      setIsSubmitting(false); // Loading hata dein
    }
  };

  return (
    <div className="w-full max-w-[1150px] mx-auto py-12 px-4 md:px-6 font-body pb-24">
      
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-heading text-green-900 drop-shadow-sm">Complete Your Order</h1>
        <p className="text-gray-500 mt-2 font-medium">Bhookh lagi hai? Bas ek aakhri kadam aur garma-garam khana aapke paas!</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-start">
        
        {/* =========================================
            LEFT SIDE: CART SUMMARY
            ========================================= */}
        <div className="w-full lg:w-5/12 bg-white rounded-lg shadow-[0_-5px_40px_rgba(0,0,0,0.06)] p-6 md:p-8 border border-gray-100 sticky top-24">
          <h2 className="text-2xl font-bold border-b border-gray-200 pb-4 mb-6 text-[#7CB342] flex items-center gap-2">
            Your Plate 🍽️
          </h2>
          
          {cart.length === 0 ? (
            <div className="text-center py-10 bg-gray-50 rounded-lg border border-dashed border-gray-300">
              <p className="text-gray-500 font-medium">Abhi aapki plate khali hai.</p>
              <a href="/menu" className="inline-block mt-4 text-[#7CB342] font-bold hover:underline">
                Menu dekhein →
              </a>
            </div>
          ) : (
            <>
              {/* Cart Items List */}
              <div className="space-y-4 mb-6 max-h-[350px] overflow-y-auto pr-2 custom-scrollbar">
                {cart.map((item) => (
                  <div key={item.id} className="flex flex-col sm:flex-row justify-between items-start sm:items-center bg-gray-50 p-4 rounded-lg border border-gray-100 transition-all hover:border-green-200 gap-3">
                    
                    <div className="flex-1 pr-4">
                      <h4 className="font-bold text-gray-800 leading-tight">{item.name}</h4>
                      <p className="text-sm text-gray-500 mt-1">₹{item.price} / item</p>
                    </div>
                    
                    <div className="flex items-center justify-between w-full sm:w-auto gap-4 shrink-0">
                      
                      {/* Quantity Controls */}
                      <div className="flex items-center bg-white border border-gray-200 rounded-md overflow-hidden shadow-sm">
                        <button 
                          type="button"
                          onClick={() => handleQuantityChange(item.id, item.qty - 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-[#7CB342] transition-colors"
                        >
                          <Minus size={14} strokeWidth={3} />
                        </button>
                        <span className="w-8 text-center font-bold text-sm">{item.qty}</span>
                        <button 
                          type="button"
                          onClick={() => handleQuantityChange(item.id, item.qty + 1)}
                          className="px-2 py-1 text-gray-500 hover:bg-gray-100 hover:text-[#7CB342] transition-colors"
                        >
                          <Plus size={14} strokeWidth={3} />
                        </button>
                      </div>

                      {/* Price & Delete */}
                      <div className="flex items-center gap-3">
                        <span className="font-extrabold text-gray-900 text-lg w-12 text-right">₹{item.price * item.qty}</span>
                        <button 
                          type="button"
                          onClick={() => handleRemove(item.id)} 
                          className="text-red-400 hover:text-white hover:bg-red-500 p-1.5 rounded-md transition-colors"
                          title="Remove Item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>

                    </div>
                  </div>
                ))}
              </div>

              {/* Bill Details */}
              <div className="border-t border-gray-200 pt-5 space-y-3 bg-white">
                <div className="flex justify-between items-center text-xl md:text-2xl font-black text-gray-900">
                  <span>Total Amount</span>
                  <span className="text-[#7CB342]">₹{finalTotal}</span>
                </div>
              </div>
            </>
          )}
        </div>

        {/* =========================================
            RIGHT SIDE: DELIVERY FORM
            ========================================= */}
        <div className="w-full lg:w-7/12 bg-white rounded-lg shadow-[0_-5px_40px_rgba(0,0,0,0.06)] p-6 md:p-8 border border-gray-100 mb-12">
          
          <div className="border-b border-gray-200 pb-4 mb-6">
            <h2 className="text-2xl font-bold text-gray-800">
              Detailed Delivery Information
            </h2>
            <p className="text-sm text-gray-500 mt-1">Kripya apni sahi jankari bharein taaki khana samay par pahunch sake.</p>
          </div>
          
          <form onSubmit={handlePlaceOrder} className="space-y-6">
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {/* Full Name */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Full Name <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <User size={18} />
                  </div>
                  <input 
                    required 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-[#7CB342] outline-none transition-all bg-gray-50 focus:bg-white" 
                    placeholder="Rahul Kumar"
                  />
                </div>
              </div>

              {/* Phone Number */}
              <div>
                <label className="block text-sm font-bold text-gray-700 mb-2">Phone Number <span className="text-red-500">*</span></label>
                <div className="relative">
                  <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                    <Phone size={18} />
                  </div>
                  <input 
                    required 
                    type="tel" 
                    value={formData.phone}
                    onChange={(e) => setFormData({...formData, phone: e.target.value})}
                    className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-[#7CB342] outline-none transition-all bg-gray-50 focus:bg-white" 
                    placeholder="+91 9876543210"
                  />
                </div>
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Email Address (Optional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <Mail size={18} />
                </div>
                <input 
                  type="email" 
                  value={formData.email}
                  onChange={(e) => setFormData({...formData, email: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-[#7CB342] outline-none transition-all bg-gray-50 focus:bg-white" 
                  placeholder="rahul@example.com"
                />
              </div>
            </div>

            {/* Complete Address */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Complete Address <span className="text-red-500">*</span></label>
              <div className="relative">
                <div className="absolute top-3 left-3 pointer-events-none text-gray-400">
                  <Home size={18} />
                </div>
                <textarea 
                  required 
                  rows="3" 
                  value={formData.address}
                  onChange={(e) => setFormData({...formData, address: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-[#7CB342] outline-none transition-all resize-none bg-gray-50 focus:bg-white" 
                  placeholder="House/Flat No., Building Name, Area, Street"
                ></textarea>
              </div>
            </div>

            {/* Landmark */}
            <div>
              <label className="block text-sm font-bold text-gray-700 mb-2">Landmark (Optional)</label>
              <div className="relative">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-gray-400">
                  <MapPin size={18} />
                </div>
                <input 
                  type="text" 
                  value={formData.landmark}
                  onChange={(e) => setFormData({...formData, landmark: e.target.value})}
                  className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CB342] focus:border-[#7CB342] outline-none transition-all bg-gray-50 focus:bg-white" 
                  placeholder="Near Post Office, Opposite Metro Station, etc."
                />
              </div>
            </div>

            {/* Delivery Info Banner */}
            <div className="bg-green-50 border border-green-200 rounded-lg p-4 flex items-start gap-3 mt-6">
              <Info className="text-green-600 shrink-0 mt-0.5" size={20} />
              <div>
                <p className="text-sm text-gray-800">
                  <span className="font-bold text-green-700">Free Delivery</span> is available in <span className="font-bold">Gomti Nagar</span> only. 
                </p>
                <p className="text-xs text-gray-500 mt-1">
                  For other locations, delivery charges will depend on the distance (Kilometers).
                </p>
              </div>
            </div>

            {/* Math Captcha Section */}
            <div className="bg-gray-50 p-4 rounded-lg border border-gray-200 mt-6 flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="flex items-center gap-3">
                <ShieldCheck className="text-[#7CB342]" size={24} />
                <span className="text-gray-700 font-bold">Verify you are human:</span>
                <div className="bg-white px-3 py-1.5 rounded-md border border-gray-300 font-bold text-lg tracking-wider shadow-sm flex items-center gap-3 ml-2">
                  {captcha.num1} + {captcha.num2} = ?
                  <button 
                    type="button" 
                    onClick={generateCaptcha} 
                    className="text-gray-400 hover:text-[#7CB342] transition-colors" 
                    title="Change Captcha"
                  >
                    <RefreshCcw size={16} />
                  </button>
                </div>
              </div>
              <input
                type="number"
                required
                value={captchaInput}
                onChange={(e) => setCaptchaInput(e.target.value)}
                className="w-full sm:w-24 px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#7CB342] outline-none text-center font-bold text-lg"
                placeholder="Ans"
              />
            </div>

            {/* 🔴 NEW: Submit Button with Loading State */}
            <button 
              type="submit" 
              disabled={cart.length === 0 || isSubmitting}
              className={`w-full flex items-center justify-center gap-2 text-white text-lg font-bold py-4 rounded-lg shadow-md transition-all mt-6 ${
                cart.length === 0 || isSubmitting
                  ? 'bg-gray-400 cursor-not-allowed' 
                  : 'bg-[#7CB342] hover:bg-green-700 hover:-translate-y-1 active:scale-95'
              }`}
            >
              {isSubmitting ? (
                <>
                  <Loader2 className="animate-spin" size={24} />
                  Processing Order...
                </>
              ) : (
                <>
                  Confirm Order • ₹{cart.length > 0 ? finalTotal : 0} <ArrowRight size={20} />
                </>
              )}
            </button>
            
            <p className="text-center text-xs text-gray-400 mt-3 font-medium">
              Payment Method: Cash on Delivery (COD) / UPI on Delivery
            </p>
          </form>
          
        </div>

      </div>
    </div>
  );
};

export default CheckoutPage;