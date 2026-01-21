import React, { useState } from 'react';
import { Menu, X, Copy, Check, Heart, Share2, MessageCircle, Search } from 'lucide-react';

export default function TailwindUIPlayground() {
  const [activeTab, setActiveTab] = useState('buttons');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [favorites, setFavorites] = useState({});
  const [copiedId, setCopiedId] = useState(null);

  const toggleFavorite = (id) => {
    setFavorites(prev => ({
      ...prev,
      [id]: !prev[id]
    }));
  };

  const copyCode = (code, id) => {
    navigator.clipboard.writeText(code);
    setCopiedId(id);
    setTimeout(() => setCopiedId(null), 2000);
  };

  const componentCodes = {
    'btn-1': `<button class="px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition transform hover:scale-105">
  Get Started
</button>`,
    'btn-2': `<button class="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 border border-slate-700 transition">
  Secondary
</button>`,
    'btn-3': `<button class="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition">
  Outline
</button>`,
    'btn-4': `<div class="flex gap-3">
  <button class="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
    <Heart size={20} />
  </button>
  <button class="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
    <Share2 size={20} />
  </button>
  <button class="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
    <MessageCircle size={20} />
  </button>
</div>`,
    'btn-5': `<div class="flex rounded-lg overflow-hidden border border-slate-700">
  <button class="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition">Left</button>
  <button class="px-4 py-2 bg-slate-800 text-white hover:bg-slate-700 transition border-l border-slate-700">Middle</button>
  <button class="px-4 py-2 bg-slate-800 text-white hover:bg-slate-700 transition border-l border-slate-700">Right</button>
</div>`,
    'btn-6': `<button disabled class="px-6 py-3 bg-slate-700 text-gray-500 font-semibold rounded-lg cursor-not-allowed opacity-50">
  Disabled
</button>`,
    'card-1': `<div class="bg-slate-800 rounded-lg p-6 border border-slate-700">
  <h3 class="text-white font-bold mb-2">Card Title</h3>
  <p class="text-gray-400 text-sm">This is a simple card component with border and padding.</p>
</div>`,
    'card-2': `<div class="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
  <div class="h-32 bg-linear-to-r from-blue-600 to-cyan-600"></div>
  <div class="p-4">
    <h3 class="text-white font-bold mb-1">Image Card</h3>
    <p class="text-gray-400 text-sm">Card with header image</p>
  </div>
</div>`,
    'card-3': `<div class="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer">
  <h3 class="text-white font-bold mb-2">Hover Effect</h3>
  <p class="text-gray-400 text-sm">Hover to see the effect</p>
</div>`,
    'card-4': `<div class="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
  <div class="p-6">
    <h3 class="text-white font-bold mb-2">Card with Footer</h3>
    <p class="text-gray-400 text-sm mb-4">Content goes here</p>
  </div>
  <div class="bg-slate-700/50 px-6 py-3 flex gap-3 border-t border-slate-700">
    <button class="text-blue-400 hover:text-blue-300 text-sm font-medium">Learn more</button>
    <button class="text-gray-400 hover:text-gray-300 text-sm font-medium">Dismiss</button>
  </div>
</div>`,
    'card-5': `<div class="bg-linear-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700">
  <p class="text-gray-400 text-sm mb-1">Total Users</p>
  <p class="text-white text-3xl font-bold">24,582</p>
  <p class="text-green-400 text-sm mt-2">↑ 12% from last month</p>
</div>`,
    'card-6': `<div class="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
  <h3 class="text-white font-bold mb-2">Minimal</h3>
  <p class="text-gray-400 text-sm">Clean and simple design</p>
</div>`,
    'form-1': `<input
  type="text"
  placeholder="Enter text..."
  class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
/>`,
    'form-2': `<select class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition">
  <option>Option 1</option>
  <option>Option 2</option>
  <option>Option 3</option>
</select>`,
    'form-3': `<div class="space-y-3">
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" class="w-5 h-5 rounded accent-blue-600" />
    <span class="text-gray-300">Remember me</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="checkbox" class="w-5 h-5 rounded accent-blue-600" />
    <span class="text-gray-300">Accept terms</span>
  </label>
</div>`,
    'form-4': `<div class="space-y-3">
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="radio" name="option" class="w-5 h-5 accent-blue-600" />
    <span class="text-gray-300">Option A</span>
  </label>
  <label class="flex items-center gap-3 cursor-pointer">
    <input type="radio" name="option" class="w-5 h-5 accent-blue-600" />
    <span class="text-gray-300">Option B</span>
  </label>
</div>`,
    'form-5': `<textarea
  placeholder="Enter your message..."
  class="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none h-24"
></textarea>`,
    'form-6': `<div class="relative">
  <input
    type="text"
    placeholder="Search..."
    class="w-full pl-10 pr-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
  />
</div>`,
    'alert-1': `<div class="bg-green-900/30 border border-green-700 rounded-lg p-4">
  <p class="text-green-200 font-medium">✓ Success! Your changes have been saved.</p>
</div>`,
    'alert-2': `<div class="bg-red-900/30 border border-red-700 rounded-lg p-4">
  <p class="text-red-200 font-medium">✕ Error! Something went wrong.</p>
</div>`,
    'alert-3': `<div class="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4">
  <p class="text-yellow-200 font-medium">⚠ Warning! Please review this action.</p>
</div>`,
    'alert-4': `<div class="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
  <p class="text-blue-200 font-medium">ℹ Info! This is important information.</p>
</div>`,
    'alert-5': `<div class="bg-blue-900/30 border border-blue-700 rounded-lg p-4">
  <p class="text-blue-100 font-bold mb-1">Heads up!</p>
  <p class="text-blue-200 text-sm">This is an alert with a title and description.</p>
</div>`,
    'alert-6': `<div class="bg-purple-900/30 border border-purple-700 rounded-lg p-4 flex justify-between items-start">
  <p class="text-purple-200 font-medium">Dismissible alert message</p>
  <button class="text-purple-400 hover:text-purple-300">×</button>
</div>`,
    'modal-1': `<div class="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden">
  <div class="bg-slate-700/50 px-6 py-4 border-b border-slate-700">
    <h3 class="text-white font-bold">Modal Title</h3>
  </div>
  <div class="p-6">
    <p class="text-gray-300 mb-4">This is the modal content area.</p>
  </div>
  <div class="bg-slate-700/50 px-6 py-4 border-t border-slate-700 flex gap-3 justify-end">
    <button class="px-4 py-2 text-gray-300 hover:text-white transition">Cancel</button>
    <button class="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Confirm</button>
  </div>
</div>`,
    'modal-2': `<div class="bg-slate-800 rounded-lg border border-slate-700 p-6 text-center">
  <div class="text-4xl mb-4">⚠️</div>
  <h3 class="text-white font-bold mb-2">Are you sure?</h3>
  <p class="text-gray-400 text-sm mb-6">This action cannot be undone.</p>
  <div class="flex gap-3 justify-center">
    <button class="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition">Cancel</button>
    <button class="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Delete</button>
  </div>
</div>`,
    'modal-3': `<div class="bg-slate-800 rounded-lg border border-slate-700 p-6">
  <h3 class="text-white font-bold mb-4">Welcome Back!</h3>
  <p class="text-gray-400 mb-6">Your account is ready to use.</p>
  <button class="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Get Started</button>
</div>`,
    'modal-4': `<div class="bg-slate-800 rounded-lg border border-slate-700 p-6">
  <h3 class="text-white font-bold mb-4">Create New Item</h3>
  <input type="text" placeholder="Name" class="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-500 mb-3 focus:outline-none focus:border-blue-500" />
  <input type="email" placeholder="Email" class="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-blue-500" />
  <button class="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Create</button>
</div>`,
    'table-1': `<div class="overflow-x-auto">
  <table class="w-full text-sm text-gray-300">
    <thead class="border-b border-slate-700">
      <tr>
        <th class="text-left py-2 px-2 font-bold text-white">Name</th>
        <th class="text-left py-2 px-2 font-bold text-white">Status</th>
      </tr>
    </thead>
    <tbody>
      <tr class="border-b border-slate-800">
        <td class="py-2 px-2">John Doe</td>
        <td class="py-2 px-2"><span class="px-2 py-1 bg-green-900/30 text-green-200 rounded text-xs">Active</span></td>
      </tr>
    </tbody>
  </table>
</div>`,
    'table-2': `<div class="overflow-x-auto">
  <table class="w-full text-sm text-gray-300">
    <thead class="border-b border-slate-700 bg-slate-800/50">
      <tr>
        <th class="text-left py-2 px-2 font-bold text-white">Product</th>
        <th class="text-left py-2 px-2 font-bold text-white">Price</th>
      </tr>
    </thead>
    <tbody>
      <tr class="bg-slate-800/30 border-b border-slate-800">
        <td class="py-2 px-2">Item A</td>
        <td class="py-2 px-2">$29.99</td>
      </tr>
    </tbody>
  </table>
</div>`,
  };

  return (
    <div className="min-h-screen py-10 bg-linear-to-br from-slate-950 via-slate-900 to-slate-950">
      {/* Fixed Navigation */}
      

      {/* Main Content with padding for fixed navbar */}
      <div className="pt-20 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Tab Navigation */}
        <div className="flex gap-2 mb-8 flex-wrap">
          {['buttons', 'cards', 'forms', 'alerts', 'modals', 'tables'].map(tab => (
            <button
              key={tab}
              onClick={() => setActiveTab(tab)}
              className={`px-4 py-2 rounded-lg font-medium transition ${
                activeTab === tab
                  ? 'bg-blue-600 text-white'
                  : 'bg-slate-800 text-gray-300 hover:bg-slate-700'
              }`}
            >
              {tab.charAt(0).toUpperCase() + tab.slice(1)}
            </button>
          ))}
        </div>

        {/* Components Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          
          {/* BUTTONS TAB */}
          {activeTab === 'buttons' && (
            <>
              <ComponentCard title="Primary Button" id="btn-1" favorites={favorites} toggleFavorite={() => toggleFavorite('btn-1')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['btn-1'], 'btn-1')}>
                <button className="px-6 py-3 bg-linear-to-r from-blue-600 to-cyan-600 text-white font-semibold rounded-lg hover:from-blue-700 hover:to-cyan-700 transition transform hover:scale-105">
                  Get Started
                </button>
              </ComponentCard>

              <ComponentCard title="Secondary Button" id="btn-2" favorites={favorites} toggleFavorite={() => toggleFavorite('btn-2')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['btn-2'], 'btn-2')}>
                <button className="px-6 py-3 bg-slate-800 text-white font-semibold rounded-lg hover:bg-slate-700 border border-slate-700 transition">
                  Secondary
                </button>
              </ComponentCard>

              <ComponentCard title="Outline Button" id="btn-3" favorites={favorites} toggleFavorite={() => toggleFavorite('btn-3')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['btn-3'], 'btn-3')}>
                <button className="px-6 py-3 border-2 border-blue-500 text-blue-500 font-semibold rounded-lg hover:bg-blue-500 hover:text-white transition">
                  Outline
                </button>
              </ComponentCard>

              <ComponentCard title="Icon Button" id="btn-4" favorites={favorites} toggleFavorite={() => toggleFavorite('btn-4')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['btn-4'], 'btn-4')}>
                <div className="flex gap-3">
                  <button className="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
                    <Heart size={20} />
                  </button>
                  <button className="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
                    <Share2 size={20} />
                  </button>
                  <button className="p-3 bg-slate-800 text-white rounded-lg hover:bg-slate-700 transition">
                    <MessageCircle size={20} />
                  </button>
                </div>
              </ComponentCard>

              <ComponentCard title="Button Group" id="btn-5" favorites={favorites} toggleFavorite={() => toggleFavorite('btn-5')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['btn-5'], 'btn-5')}>
                <div className="flex rounded-lg overflow-hidden border border-slate-700">
                  <button className="px-4 py-2 bg-blue-600 text-white hover:bg-blue-700 transition">Left</button>
                  <button className="px-4 py-2 bg-slate-800 text-white hover:bg-slate-700 transition border-l border-slate-700">Middle</button>
                  <button className="px-4 py-2 bg-slate-800 text-white hover:bg-slate-700 transition border-l border-slate-700">Right</button>
                </div>
              </ComponentCard>

              <ComponentCard title="Disabled Button" id="btn-6" favorites={favorites} toggleFavorite={() => toggleFavorite('btn-6')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['btn-6'], 'btn-6')}>
                <button disabled className="px-6 py-3 bg-slate-700 text-gray-500 font-semibold rounded-lg cursor-not-allowed opacity-50">
                  Disabled
                </button>
              </ComponentCard>
            </>
          )}

          {/* CARDS TAB */}
          {activeTab === 'cards' && (
            <>
              <ComponentCard title="Simple Card" id="card-1" favorites={favorites} toggleFavorite={() => toggleFavorite('card-1')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['card-1'], 'card-1')}>
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700">
                  <h3 className="text-white font-bold mb-2">Card Title</h3>
                  <p className="text-gray-400 text-sm">This is a simple card component with border and padding.</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Card with Image" id="card-2" favorites={favorites} toggleFavorite={() => toggleFavorite('card-2')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['card-2'], 'card-2')}>
                <div className="bg-slate-800 rounded-lg overflow-hidden border border-slate-700">
                  <div className="h-32 bg-linear-to-r from-blue-600 to-cyan-600"></div>
                  <div className="p-4">
                    <h3 className="text-white font-bold mb-1">Image Card</h3>
                    <p className="text-gray-400 text-sm">Card with header image</p>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Hover Card" id="card-3" favorites={favorites} toggleFavorite={() => toggleFavorite('card-3')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['card-3'], 'card-3')}>
                <div className="bg-slate-800 rounded-lg p-6 border border-slate-700 hover:border-blue-500 hover:shadow-lg hover:shadow-blue-500/20 transition cursor-pointer">
                  <h3 className="text-white font-bold mb-2">Hover Effect</h3>
                  <p className="text-gray-400 text-sm">Hover to see the effect</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Card with Footer" id="card-4" favorites={favorites} toggleFavorite={() => toggleFavorite('card-4')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['card-4'], 'card-4')}>
                <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden w-full">
                  <div className="p-6">
                    <h3 className="text-white font-bold mb-2">Card with Footer</h3>
                    <p className="text-gray-400 text-sm mb-4">Content goes here</p>
                  </div>
                  <div className="bg-slate-700/50 px-6 py-3 flex gap-3 border-t border-slate-700">
                    <button className="text-blue-400 hover:text-blue-300 text-sm font-medium">Learn more</button>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Stats Card" id="card-5" favorites={favorites} toggleFavorite={() => toggleFavorite('card-5')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['card-5'], 'card-5')}>
                <div className="bg-linear-to-br from-slate-800 to-slate-900 rounded-lg p-6 border border-slate-700">
                  <p className="text-gray-400 text-sm mb-1">Total Users</p>
                  <p className="text-white text-3xl font-bold">24,582</p>
                  <p className="text-green-400 text-sm mt-2">↑ 12% from last month</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Minimal Card" id="card-6" favorites={favorites} toggleFavorite={() => toggleFavorite('card-6')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['card-6'], 'card-6')}>
                <div className="bg-slate-800/30 rounded-lg p-6 border border-slate-700/50">
                  <h3 className="text-white font-bold mb-2">Minimal</h3>
                  <p className="text-gray-400 text-sm">Clean and simple design</p>
                </div>
              </ComponentCard>
            </>
          )}

          {/* FORMS TAB */}
          {activeTab === 'forms' && (
            <>
              <ComponentCard title="Text Input" id="form-1" favorites={favorites} toggleFavorite={() => toggleFavorite('form-1')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['form-1'], 'form-1')}>
                <input
                  type="text"
                  placeholder="Enter text..."
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                />
              </ComponentCard>

              <ComponentCard title="Select Dropdown" id="form-2" favorites={favorites} toggleFavorite={() => toggleFavorite('form-2')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['form-2'], 'form-2')}>
                <select className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white focus:outline-none focus:border-blue-500 transition">
                  <option>Option 1</option>
                  <option>Option 2</option>
                  <option>Option 3</option>
                </select>
              </ComponentCard>

              <ComponentCard title="Checkbox" id="form-3" favorites={favorites} toggleFavorite={() => toggleFavorite('form-3')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['form-3'], 'form-3')}>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" defaultChecked className="w-5 h-5 rounded accent-blue-600" />
                    <span className="text-gray-300">Remember me</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="checkbox" className="w-5 h-5 rounded accent-blue-600" />
                    <span className="text-gray-300">Accept terms</span>
                  </label>
                </div>
              </ComponentCard>

              <ComponentCard title="Radio Buttons" id="form-4" favorites={favorites} toggleFavorite={() => toggleFavorite('form-4')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['form-4'], 'form-4')}>
                <div className="space-y-3">
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="option" defaultChecked className="w-5 h-5 accent-blue-600" />
                    <span className="text-gray-300">Option A</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer">
                    <input type="radio" name="option" className="w-5 h-5 accent-blue-600" />
                    <span className="text-gray-300">Option B</span>
                  </label>
                </div>
              </ComponentCard>

              <ComponentCard title="Text Area" id="form-5" favorites={favorites} toggleFavorite={() => toggleFavorite('form-5')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['form-5'], 'form-5')}>
                <textarea
                  placeholder="Enter your message..."
                  className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition resize-none h-24"
                ></textarea>
              </ComponentCard>

              <ComponentCard title="Search Input" id="form-6" favorites={favorites} toggleFavorite={() => toggleFavorite('form-6')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['form-6'], 'form-6')}>
                <div className="relative w-full">
                  <input
                    type="text"
                    placeholder="Search..."
                    className="w-full px-4 py-2 bg-slate-800 border border-slate-700 rounded-lg text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition"
                  />
                </div>
              </ComponentCard>
            </>
          )}

          {/* ALERTS TAB */}
          {activeTab === 'alerts' && (
            <>
              <ComponentCard title="Success Alert" id="alert-1" favorites={favorites} toggleFavorite={() => toggleFavorite('alert-1')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['alert-1'], 'alert-1')}>
                <div className="bg-green-900/30 border border-green-700 rounded-lg p-4 w-full">
                  <p className="text-green-200 font-medium">✓ Success! Your changes have been saved.</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Error Alert" id="alert-2" favorites={favorites} toggleFavorite={() => toggleFavorite('alert-2')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['alert-2'], 'alert-2')}>
                <div className="bg-red-900/30 border border-red-700 rounded-lg p-4 w-full">
                  <p className="text-red-200 font-medium">✕ Error! Something went wrong.</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Warning Alert" id="alert-3" favorites={favorites} toggleFavorite={() => toggleFavorite('alert-3')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['alert-3'], 'alert-3')}>
                <div className="bg-yellow-900/30 border border-yellow-700 rounded-lg p-4 w-full">
                  <p className="text-yellow-200 font-medium">⚠ Warning! Please review this action.</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Info Alert" id="alert-4" favorites={favorites} toggleFavorite={() => toggleFavorite('alert-4')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['alert-4'], 'alert-4')}>
                <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 w-full">
                  <p className="text-blue-200 font-medium">ℹ Info! This is important information.</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Alert with Title" id="alert-5" favorites={favorites} toggleFavorite={() => toggleFavorite('alert-5')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['alert-5'], 'alert-5')}>
                <div className="bg-blue-900/30 border border-blue-700 rounded-lg p-4 w-full">
                  <p className="text-blue-100 font-bold mb-1">Heads up!</p>
                  <p className="text-blue-200 text-sm">This is an alert with a title and description.</p>
                </div>
              </ComponentCard>

              <ComponentCard title="Dismissible Alert" id="alert-6" favorites={favorites} toggleFavorite={() => toggleFavorite('alert-6')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['alert-6'], 'alert-6')}>
                <div className="bg-purple-900/30 border border-purple-700 rounded-lg p-4 flex justify-between items-start w-full">
                  <p className="text-purple-200 font-medium">Dismissible alert message</p>
                  <button className="text-purple-400 hover:text-purple-300">×</button>
                </div>
              </ComponentCard>
            </>
          )}

          {/* MODALS TAB */}
          {activeTab === 'modals' && (
            <>
              <ComponentCard title="Modal Preview" id="modal-1" favorites={favorites} toggleFavorite={() => toggleFavorite('modal-1')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['modal-1'], 'modal-1')}>
                <div className="bg-slate-800 rounded-lg border border-slate-700 overflow-hidden w-full">
                  <div className="bg-slate-700/50 px-6 py-4 border-b border-slate-700">
                    <h3 className="text-white font-bold">Modal Title</h3>
                  </div>
                  <div className="p-6">
                    <p className="text-gray-300 mb-4">This is the modal content area.</p>
                  </div>
                  <div className="bg-slate-700/50 px-6 py-4 border-t border-slate-700 flex gap-3 justify-end">
                    <button className="px-4 py-2 text-gray-300 hover:text-white transition">Cancel</button>
                    <button className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Confirm</button>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Confirmation Dialog" id="modal-2" favorites={favorites} toggleFavorite={() => toggleFavorite('modal-2')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['modal-2'], 'modal-2')}>
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 text-center w-full">
                  <div className="text-4xl mb-4">⚠️</div>
                  <h3 className="text-white font-bold mb-2">Are you sure?</h3>
                  <p className="text-gray-400 text-sm mb-6">This action cannot be undone.</p>
                  <div className="flex gap-3 justify-center">
                    <button className="px-4 py-2 bg-slate-700 text-white rounded hover:bg-slate-600 transition">Cancel</button>
                    <button className="px-4 py-2 bg-red-600 text-white rounded hover:bg-red-700 transition">Delete</button>
                  </div>
                </div>
              </ComponentCard>

              <ComponentCard title="Simple Dialog" id="modal-3" favorites={favorites} toggleFavorite={() => toggleFavorite('modal-3')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['modal-3'], 'modal-3')}>
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 w-full">
                  <h3 className="text-white font-bold mb-4">Welcome Back!</h3>
                  <p className="text-gray-400 mb-6">Your account is ready to use.</p>
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Get Started</button>
                </div>
              </ComponentCard>

              <ComponentCard title="Form Modal" id="modal-4" favorites={favorites} toggleFavorite={() => toggleFavorite('modal-4')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['modal-4'], 'modal-4')}>
                <div className="bg-slate-800 rounded-lg border border-slate-700 p-6 w-full">
                  <h3 className="text-white font-bold mb-4">Create New Item</h3>
                  <input type="text" placeholder="Name" className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-500 mb-3 focus:outline-none focus:border-blue-500" />
                  <input type="email" placeholder="Email" className="w-full px-3 py-2 bg-slate-700 border border-slate-600 rounded text-white placeholder-gray-500 mb-4 focus:outline-none focus:border-blue-500" />
                  <button className="w-full px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition">Create</button>
                </div>
              </ComponentCard>
            </>
          )}

          {/* TABLES TAB */}
          {activeTab === 'tables' && (
            <>
              <ComponentCard title="Simple Table" id="table-1" favorites={favorites} toggleFavorite={() => toggleFavorite('table-1')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['table-1'], 'table-1')}>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-sm text-gray-300">
                    <thead className="border-b border-slate-700">
                      <tr>
                        <th className="text-left py-2 px-2 font-bold text-white">Name</th>
                        <th className="text-left py-2 px-2 font-bold text-white">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="border-b border-slate-800">
                        <td className="py-2 px-2">John Doe</td>
                        <td className="py-2 px-2"><span className="px-2 py-1 bg-green-900/30 text-green-200 rounded text-xs">Active</span></td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ComponentCard>

              <ComponentCard title="Striped Table" id="table-2" favorites={favorites} toggleFavorite={() => toggleFavorite('table-2')} copiedId={copiedId} copyCode={() => copyCode(componentCodes['table-2'], 'table-2')}>
                <div className="overflow-x-auto w-full">
                  <table className="w-full text-sm text-gray-300">
                    <thead className="border-b border-slate-700 bg-slate-800/50">
                      <tr>
                        <th className="text-left py-2 px-2 font-bold text-white">Product</th>
                        <th className="text-left py-2 px-2 font-bold text-white">Price</th>
                      </tr>
                    </thead>
                    <tbody>
                      <tr className="bg-slate-800/30 border-b border-slate-800">
                        <td className="py-2 px-2">Item A</td>
                        <td className="py-2 px-2">$29.99</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </ComponentCard>
            </>
          )}
        </div>
      </div>
    </div>
  );
}

function ComponentCard({ title, children, id, favorites, toggleFavorite, copiedId, copyCode }) {
  const isCurrentlyCopied = copiedId === id;

  return (
    <div className="bg-slate-900 border border-slate-800 rounded-lg overflow-hidden flex flex-col h-full">
      <div className="bg-slate-800/50 px-6 py-4 border-b border-slate-800 flex justify-between items-center">
        <h3 className="text-white font-semibold">{title}</h3>
        <div className="flex gap-2">
          <button
            onClick={toggleFavorite}
            className="text-gray-400 hover:text-yellow-400 transition p-1"
          >
            <Heart size={18} fill={favorites[id] ? 'currentColor' : 'none'} />
          </button>
          <button
            onClick={copyCode}
            className={`text-gray-400 transition p-1 ${isCurrentlyCopied ? 'text-green-400' : 'hover:text-blue-400'}`}
          >
            {isCurrentlyCopied ? <Check size={18} /> : <Copy size={18} />}
          </button>
        </div>
      </div>
      <div className="p-6 bg-slate-950/50 flex items-center justify-center min-h-40 flex-1">
        {children}
      </div>
      {isCurrentlyCopied && (
        <div className="bg-green-900/30 border-t border-green-700 px-6 py-2">
          <p className="text-green-200 text-sm font-medium">✓ Code copied to clipboard!</p>
        </div>
      )}
    </div>
  );
}