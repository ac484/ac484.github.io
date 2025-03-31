'use client';

import { useState, FormEvent } from 'react';
import { sendContactForm } from '../../@actions/actions';

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setFormStatus('loading');
    
    try {
      await sendContactForm(formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setFormStatus('error');
    }
  };

  return (
    <form className="space-y-4" onSubmit={handleSubmit}>
      <div>
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleChange}
          placeholder="您的姓名"
          className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
          placeholder="電子郵件"
          className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        />
      </div>
      <div>
        <input
          type="tel"
          name="phone"
          value={formData.phone}
          onChange={handleChange}
          placeholder="電話號碼"
          className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="您的需求"
          rows={4}
          className="w-full px-4 py-2 rounded bg-gray-700 border border-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={formStatus === 'loading'}
        className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-lg font-medium w-full disabled:bg-blue-400"
      >
        {formStatus === 'loading' ? '處理中...' : '送出詢價'}
      </button>
      
      {formStatus === 'success' && (
        <div className="p-3 bg-green-800 text-white rounded">
          感謝您的訊息，我們將盡快回覆您！
        </div>
      )}
      
      {formStatus === 'error' && (
        <div className="p-3 bg-red-800 text-white rounded">
          提交失敗，請稍後再試或直接聯絡我們。
        </div>
      )}
    </form>
  );
}