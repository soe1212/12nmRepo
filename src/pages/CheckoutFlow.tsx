import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { 
  CreditCard, 
  Lock, 
  ShoppingCart, 
  Tag, 
  Check, 
  ArrowLeft,
  Star,
  Users,
  Clock,
  Gift
} from 'lucide-react';
import { useToast } from '../contexts/ToastContext';

const CheckoutFlow: React.FC = () => {
  const navigate = useNavigate();
  const { addToast } = useToast();
  const [step, setStep] = useState(1);
  const [couponCode, setCouponCode] = useState('');
  const [paymentMethod, setPaymentMethod] = useState('card');
  const [formData, setFormData] = useState({
    cardNumber: '',
    expiryDate: '',
    cvv: '',
    cardName: '',
    email: '',
    country: 'US'
  });

  const cartItems = [
    {
      id: 1,
      title: 'Complete React Developer Course',
      instructor: 'Sarah Johnson',
      rating: 4.9,
      students: 25420,
      duration: '42 hours',
      originalPrice: 129.99,
      discountPrice: 89.99,
      image: 'https://images.pexels.com/photos/574071/pexels-photo-574071.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    },
    {
      id: 2,
      title: 'Advanced JavaScript Patterns',
      instructor: 'Michael Chen',
      rating: 4.8,
      students: 18750,
      duration: '28 hours',
      originalPrice: 99.99,
      discountPrice: 69.99,
      image: 'https://images.pexels.com/photos/11035471/pexels-photo-11035471.jpeg?auto=compress&cs=tinysrgb&w=300&h=200&dpr=1'
    }
  ];

  const subtotal = cartItems.reduce((sum, item) => sum + item.discountPrice, 0);
  const discount = cartItems.reduce((sum, item) => sum + (item.originalPrice - item.discountPrice), 0);
  const tax = subtotal * 0.08; // 8% tax
  const total = subtotal + tax;

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const applyCoupon = () => {
    if (couponCode.toLowerCase() === 'save20') {
      addToast('Coupon applied successfully! 20% off', 'success');
    } else {
      addToast('Invalid coupon code', 'error');
    }
  };

  const handlePayment = () => {
    // Simulate payment processing
    setStep(3);
    setTimeout(() => {
      addToast('Payment successful! Welcome to your courses!', 'success');
      navigate('/dashboard/student');
    }, 2000);
  };

  const steps = [
    { number: 1, title: 'Cart Review', active: step >= 1 },
    { number: 2, title: 'Payment', active: step >= 2 },
    { number: 3, title: 'Confirmation', active: step >= 3 }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        {/* Header */}
        <div className="mb-8">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center space-x-2 text-gray-400 hover:text-white transition-colors mb-4"
          >
            <ArrowLeft className="h-5 w-5" />
            <span>Back</span>
          </button>
          <h1 className="text-3xl font-bold text-white">Checkout</h1>
        </div>

        {/* Progress Steps */}
        <div className="mb-8">
          <div className="flex items-center justify-center space-x-8">
            {steps.map((stepItem, index) => (
              <div key={stepItem.number} className="flex items-center">
                <div className={`flex items-center justify-center w-10 h-10 rounded-full border-2 ${
                  stepItem.active 
                    ? 'bg-orange-500 border-orange-500 text-white' 
                    : 'border-gray-600 text-gray-400'
                }`}>
                  {stepItem.active && step > stepItem.number ? (
                    <Check className="h-5 w-5" />
                  ) : (
                    stepItem.number
                  )}
                </div>
                <span className={`ml-2 text-sm ${
                  stepItem.active ? 'text-white' : 'text-gray-400'
                }`}>
                  {stepItem.title}
                </span>
                {index < steps.length - 1 && (
                  <div className={`w-16 h-0.5 ml-4 ${
                    step > stepItem.number ? 'bg-orange-500' : 'bg-gray-600'
                  }`} />
                )}
              </div>
            ))}
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            {step === 1 && (
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <ShoppingCart className="h-6 w-6 text-orange-500" />
                  <h2 className="text-xl font-bold text-white">Your Cart</h2>
                </div>

                <div className="space-y-4">
                  {cartItems.map((item) => (
                    <div key={item.id} className="bg-gray-900 rounded-lg p-4 border border-gray-700">
                      <div className="flex items-center space-x-4">
                        <img
                          src={item.image}
                          alt={item.title}
                          className="w-20 h-14 object-cover rounded"
                        />
                        <div className="flex-1">
                          <h3 className="text-white font-medium mb-1">{item.title}</h3>
                          <p className="text-gray-400 text-sm">by {item.instructor}</p>
                          <div className="flex items-center space-x-4 mt-2 text-sm text-gray-400">
                            <div className="flex items-center space-x-1">
                              <Star className="h-4 w-4 text-yellow-500" />
                              <span>{item.rating}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Users className="h-4 w-4" />
                              <span>{item.students.toLocaleString()}</span>
                            </div>
                            <div className="flex items-center space-x-1">
                              <Clock className="h-4 w-4" />
                              <span>{item.duration}</span>
                            </div>
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-gray-400 text-sm line-through">
                            ${item.originalPrice}
                          </div>
                          <div className="text-orange-500 font-bold text-lg">
                            ${item.discountPrice}
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Coupon Section */}
                <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-2 mb-3">
                    <Gift className="h-5 w-5 text-orange-500" />
                    <span className="text-white font-medium">Have a coupon?</span>
                  </div>
                  <div className="flex space-x-3">
                    <input
                      type="text"
                      placeholder="Enter coupon code"
                      value={couponCode}
                      onChange={(e) => setCouponCode(e.target.value)}
                      className="flex-1 px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                    <button
                      onClick={applyCoupon}
                      className="bg-orange-500 hover:bg-orange-600 text-white px-4 py-2 rounded-md transition-colors"
                    >
                      Apply
                    </button>
                  </div>
                </div>

                <button
                  onClick={() => setStep(2)}
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all"
                >
                  Proceed to Payment
                </button>
              </div>
            )}

            {step === 2 && (
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6">
                <div className="flex items-center space-x-2 mb-6">
                  <CreditCard className="h-6 w-6 text-orange-500" />
                  <h2 className="text-xl font-bold text-white">Payment Information</h2>
                </div>

                {/* Payment Methods */}
                <div className="mb-6">
                  <label className="block text-sm font-medium text-gray-300 mb-3">
                    Payment Method
                  </label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'card'
                        ? 'border-orange-500 bg-orange-500 bg-opacity-10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="card"
                        checked={paymentMethod === 'card'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <CreditCard className="h-5 w-5 text-gray-400 mr-3" />
                      <span className="text-white">Credit/Debit Card</span>
                    </label>
                    <label className={`flex items-center p-3 border rounded-lg cursor-pointer transition-all ${
                      paymentMethod === 'paypal'
                        ? 'border-orange-500 bg-orange-500 bg-opacity-10'
                        : 'border-gray-600 hover:border-gray-500'
                    }`}>
                      <input
                        type="radio"
                        name="paymentMethod"
                        value="paypal"
                        checked={paymentMethod === 'paypal'}
                        onChange={(e) => setPaymentMethod(e.target.value)}
                        className="sr-only"
                      />
                      <div className="w-5 h-5 bg-blue-500 rounded mr-3" />
                      <span className="text-white">PayPal</span>
                    </label>
                  </div>
                </div>

                {paymentMethod === 'card' && (
                  <div className="space-y-4">
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Card Number
                      </label>
                      <input
                        type="text"
                        name="cardNumber"
                        placeholder="1234 5678 9012 3456"
                        value={formData.cardNumber}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          Expiry Date
                        </label>
                        <input
                          type="text"
                          name="expiryDate"
                          placeholder="MM/YY"
                          value={formData.expiryDate}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-300 mb-2">
                          CVV
                        </label>
                        <input
                          type="text"
                          name="cvv"
                          placeholder="123"
                          value={formData.cvv}
                          onChange={handleInputChange}
                          className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                        />
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-300 mb-2">
                        Cardholder Name
                      </label>
                      <input
                        type="text"
                        name="cardName"
                        placeholder="John Doe"
                        value={formData.cardName}
                        onChange={handleInputChange}
                        className="w-full px-3 py-2 bg-gray-700 border border-gray-600 rounded-md text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-orange-500"
                      />
                    </div>
                  </div>
                )}

                <div className="mt-6 p-4 bg-gray-900 rounded-lg border border-gray-700">
                  <div className="flex items-center space-x-2 text-green-500">
                    <Lock className="h-4 w-4" />
                    <span className="text-sm">Your payment information is secure and encrypted</span>
                  </div>
                </div>

                <button
                  onClick={handlePayment}
                  className="w-full mt-6 bg-gradient-to-r from-orange-500 to-red-500 text-white py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all"
                >
                  Complete Payment
                </button>
              </div>
            )}

            {step === 3 && (
              <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 text-center">
                <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Check className="h-8 w-8 text-white" />
                </div>
                <h2 className="text-2xl font-bold text-white mb-2">Payment Successful!</h2>
                <p className="text-gray-300 mb-6">
                  Thank you for your purchase. You now have access to your courses.
                </p>
                <button
                  onClick={() => navigate('/dashboard/student')}
                  className="bg-gradient-to-r from-orange-500 to-red-500 text-white px-6 py-3 rounded-lg font-medium hover:from-orange-600 hover:to-red-600 transition-all"
                >
                  Go to Dashboard
                </button>
              </div>
            )}
          </div>

          {/* Order Summary */}
          <div className="lg:col-span-1">
            <div className="bg-gray-800 rounded-lg border border-gray-700 p-6 sticky top-6">
              <h3 className="text-lg font-bold text-white mb-4">Order Summary</h3>
              
              <div className="space-y-3 mb-4">
                <div className="flex justify-between text-gray-300">
                  <span>Subtotal</span>
                  <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-green-500">
                  <span>Discount</span>
                  <span>-${discount.toFixed(2)}</span>
                </div>
                <div className="flex justify-between text-gray-300">
                  <span>Tax</span>
                  <span>${tax.toFixed(2)}</span>
                </div>
                <div className="border-t border-gray-700 pt-3">
                  <div className="flex justify-between text-white font-bold text-lg">
                    <span>Total</span>
                    <span>${total.toFixed(2)}</span>
                  </div>
                </div>
              </div>

              <div className="bg-gray-900 rounded-lg p-3 border border-gray-700">
                <div className="flex items-center space-x-2 text-orange-500 mb-2">
                  <Tag className="h-4 w-4" />
                  <span className="text-sm font-medium">30-Day Money-Back Guarantee</span>
                </div>
                <p className="text-xs text-gray-400">
                  Not satisfied? Get a full refund within 30 days of purchase.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutFlow;