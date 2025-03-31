import type { ServiceItem, Project, CompanyInfo } from '../types';

// 服務項目
export const SERVICES: ServiceItem[] = [
  {
    icon: "⚡",
    title: "電力系統工程",
    description: "高低壓配電系統設計與施工、變電站建設、電力設備安裝與維護"
  },
  {
    icon: "💧",
    title: "給排水工程",
    description: "自來水系統、消防系統、污水處理系統的設計與施工"
  },
  {
    icon: "❄️",
    title: "空調通風工程",
    description: "中央空調系統、通風系統、冷凍機房設備安裝與維護"
  },
  {
    icon: "🔧",
    title: "機械設備安裝",
    description: "工業機械設備、電梯、自動化系統的安裝與調試"
  },
  {
    icon: "🛡️",
    title: "消防系統工程",
    description: "自動噴淋系統、火災報警系統、防排煙系統設計與施工"
  },
  {
    icon: "🤖",
    title: "智能控制系統",
    description: "樓宇自動化系統、智能照明控制、能源管理系統"
  }
];

// 工程案例
export const PROJECTS: Project[] = [
  {
    image: "/project1.png",
    title: "台北金融大樓機電工程",
    description: "完成全棟電力、空調、消防系統整合工程"
  },
  {
    image: "/project2.png",
    title: "科技園區配電系統",
    description: "高壓配電站建設與變電設備安裝"
  },
  {
    image: "/project3.png",
    title: "醫院空調系統更新",
    description: "中央空調系統全面升級與節能改造"
  }
];

// 公司資訊
export const COMPANY_INFO: CompanyInfo = {
  name: "機電工程公司",
  address: "台北市中山區中山北路三段100號",
  phone: "(02) 1234-5678",
  email: "info@electromechanical.com",
  hours: "週一至週五 9:00-18:00"
};

// 招聘職位
export const CAREERS = [
  "電力工程師", 
  "空調技術員", 
  "給排水設計師", 
  "消防系統工程師"
];

// 公司福利
export const COMPANY_BENEFITS = [
  "具有競爭力的薪酬",
  "完善的福利制度",
  "專業的培訓機會",
  "職業生涯發展"
];

// 公司特點
export const COMPANY_FEATURES = [
  "專業認證工程團隊",
  "高品質施工標準",
  "24小時緊急服務"
];

// 社群連結
export const SOCIAL_LINKS = [
  { name: "Facebook", url: "https://facebook.com/company" },
  { name: "LinkedIn", url: "https://linkedin.com/company" }, 
  { name: "YouTube", url: "https://youtube.com/channel/company" }
];