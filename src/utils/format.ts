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