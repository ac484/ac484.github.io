'use server';

type ContactFormData = {
  name: string;
  email: string;
  phone: string;
  message: string;
};

export async function sendContactForm(data: ContactFormData) {
  // 在實際應用中，這裡會有發送郵件、儲存到資料庫等操作
  // 例如使用 nodemailer 發送郵件或連接到資料庫
  
  // 模擬處理時間
  await new Promise(resolve => setTimeout(resolve, 1000));
  
  // 用於開發測試，實際應用中移除
  console.log('表單提交資料:', data);
  
  // 若操作失敗，拋出錯誤
  // throw new Error('發送失敗');
  
  return { success: true };
}