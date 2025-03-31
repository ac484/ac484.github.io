import type { ContactFormData } from '../types';

/**
 * 格式化電話號碼
 */
export function formatPhoneNumber(phone: string): string {
  // 移除非數字字符
  const cleaned = phone.replace(/\D/g, '');
  
  // 格式化為 (xx) xxxx-xxxx
  const match = cleaned.match(/^(\d{2})(\d{4})(\d{4})$/);
  if (match) {
    return `(${match[1]}) ${match[2]}-${match[3]}`;
  }
  
  return phone;
}

/**
 * 截斷文字
 */
export function truncateText(text: string, maxLength: number): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength) + '...';
}

/**
 * 驗證聯絡表單數據
 */
export function validateContactForm(data: ContactFormData) {
  const errors: Record<string, string> = {};
  
  if (!data.name.trim()) {
    errors.name = '請填寫姓名';
  }
  
  if (!data.email.trim()) {
    errors.email = '請填寫電子郵件';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    errors.email = '請填寫有效的電子郵件格式';
  }
  
  if (!data.message.trim()) {
    errors.message = '請填寫訊息內容';
  }
  
  return {
    isValid: Object.keys(errors).length === 0,
    errors
  };
}

/**
 * 格式化日期
 */
export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat('zh-TW', {
    year: 'numeric',
    month: 'long',
    day: 'numeric'
  }).format(date);
}