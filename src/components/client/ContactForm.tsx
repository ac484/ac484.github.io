'use client';

import { useState, FormEvent } from 'react';
import { sendContactForm } from '../../actions/actions';
import type { ContactFormData } from '../../types';
import { validateContactForm } from '../../utils'; // 更新引用路徑

export function ContactForm() {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    phone: '',
    message: ''
  });
  const [formStatus, setFormStatus] = useState<'idle' | 'loading' | 'success' | 'error'>('idle');
  const [errorMessage, setErrorMessage] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    
    // 使用新的驗證函數
    const validation = validateContactForm(formData);
    if (!validation.isValid) {
      setFormStatus('error');
      setErrorMessage(Object.values(validation.errors)[0] || '表單填寫有誤');
      return;
    }
    
    setFormStatus('loading');
    
    try {
      await sendContactForm(formData);
      setFormStatus('success');
      setFormData({ name: '', email: '', phone: '', message: '' });
    } catch (error) {
      setFormStatus('error');
      setErrorMessage(error instanceof Error ? error.message : '提交失敗');
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
          className="form-input"
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
          className="form-input"
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
          className="form-input"
        />
      </div>
      <div>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder="您的需求"
          rows={4}
          className="form-input"
          required
        ></textarea>
      </div>
      <button
        type="submit"
        disabled={formStatus === 'loading'}
        className="btn-primary w-full disabled:bg-blue-400"
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
          {errorMessage || '提交失敗，請稍後再試或直接聯絡我們。'}
        </div>
      )}
    </form>
  );
}