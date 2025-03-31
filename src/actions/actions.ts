'use server';

import type { ContactFormData } from '../types';

/**
 * 處理聯絡表單提交
 * @param data 表單資料
 * @returns 成功結果
 */
export async function sendContactForm(data: ContactFormData) {
  // 檢查必填項目
  if (!data.name || !data.email || !data.message) {
    throw new Error('請填寫所有必填欄位');
  }
  
  try {
    // 這裡可以實作發送電子郵件、儲存到資料庫等功能
    // 例如使用 nodemailer 發送郵件或連接到資料庫
    
    // 暫時模擬處理時間
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    // 用於開發測試，實際應用中移除
    console.log('表單提交資料:', data);
    
    return { success: true };
  } catch (error) {
    console.error('處理表單時發生錯誤:', error);
    throw new Error('伺服器處理失敗，請稍後再試');
  }
}