export interface CaseStudyProps {
  id: string
  title: string
  subtitle: string
  year: string
  overview: string
  concept: string
  typography: string
  colors: string[]
  uxDecisions: string[]
  screenshots: string[]
  mobileScreenshots: string[]
  liveUrl?: string
}

export const caseStudies: CaseStudyProps[] = [
  {
    id: "belle-noire",
    title: "Aura Nails",
    subtitle: "Nail Art Studio",
    liveUrl: "https://aura-nails-ivory.vercel.app/",
    year: "2024",
    overview: "柔らかいイエローとスキンピンクをベースにした、エモーショナルで温かみのある配色。\nほっとするような肌馴染みの良さと、日常のアクセントになるような、一歩先を行くおしゃれさを両立させています。",
    concept: "SNSで日常的にデザインやライフスタイルのインスピレーションを得ている層。\nトレンドなネイルデザインを好む若い女性。",
    typography: "Dramatic contrast between thin, elegant serifs and bold display type creates visual tension. The typography feels editorial and high-fashion, reinforcing the brand's positioning.",
    colors: ["#1A1A1A", "#C9A96E", "#F5F5F5", "#2D2D2D"],
    uxDecisions: [
      "・動画を用いたヒーローセクション\n\nサイトを開いた瞬間に、光の揺らぎを捉えたシネマティックな動画が流れ、ユーザーを一瞬でブランドの世界観に引き込みます。",
      "・Instagramの埋め込み\n\n常に最新のトレンドデザインを発信するため、公式Instagramを美しく統合。ギャラリーとしての役割を持たせ、リアルタイムな「今」のデザインとサロンの活気をダイレクトに伝えます。",
      "・ファーストビューの予約導線\n\nサイトを開いた瞬間に予約ボタンが目に入るため、ユーザーが迷わず予約へ進めるよう工夫しています。"
    ],
    screenshots: [
      "/aura-nails-top.png",
      "/aura-nails-screen-1.png",
      "/aura-nails-screen-2.png",
      "/aura-nails-screen-new.png",
      "/aura-nails-screen-3.png"
    ],
    mobileScreenshots: [
      "/aura-nails-mobile-1.png",
      "/aura-nails-mobile-2.png"
    ]
  },
  {
    id: "sakura-nails",
    title: "Noe Nails",
    subtitle: "Luxury Nail Salon",
    liveUrl: "https://nami-nails2.vercel.app",
    year: "2024",
    overview: "年齢を問わず誰もが「素敵」「落ち着く」と感じられるよう、洗練されたフォント（明朝体や美しい欧文フォント）と、肌馴染みの良いスキンカラーやベージュ、淡いトーンを基調とした高級感のある世界観。",
    concept: "派手なアートよりも、シンプルで手が綺麗に見えるデザイン（上品なグラデーションやワンカラー）を好む層。",
    typography: "The combination of Cormorant Garamond for headlines and Inter for body text creates an elegant hierarchy. The serif headlines evoke timeless luxury, while the clean sans-serif ensures readability across all devices.",
    colors: ["#F8E8E8", "#D4A5A5", "#2C2C2C", "#FFFFFF"],
    uxDecisions: [
      "サイトの世界観を高める「動き（インタラクション）」\n\nスクロールに合わせてコンテンツが滑らかに現れ、ユーザーの視線を自然に誘導するモーションを実装します。",
      "「Sticky Navbar」と予約導線\n\n無駄のない美しいレイアウトを維持しながら、スクロール追従型のナビゲーション（Sticky Navbar）を採用。ページ閲覧中でも、お客様が「予約したい」と思った瞬間にスムーズに予約ページへ進める導線を設計します。",
      "Google map連携によるアクセス案内\n\nGooleマップを埋め込み、サロンの場所を直観的に確認できるようにしました。ルート案内ボタンからそのまま経路検索ができるため、初めて来店される方でも迷わずアクセスできます。"
    ],
    screenshots: [
      "/noe-nails-main.png",
      "/noe-nails-screen-1.png",
      "/noe-nails-screen-2.png",
      "/noe-nails-screen-3.png",
      "/noe-nails-screen-4.png"
    ],
    mobileScreenshots: [
      "/noe-nails-mobile-1.png",
      "/noe-nails-mobile-2.png"
    ]
  },
  {
    id: "luna-beauty",
    title: "NAMI NAILS",
    subtitle: "English-friendly nail salon",
    liveUrl: "https://nami-nails.vercel.app/",
    year: "2023",
    overview: "サロンが持つ遊び心やトレンド感を表現するめ、\n海外のZ世代に刺さるポップでキャッチーな色使いと、\n楽しげな世界観が伝わるビジュアルで構成しました。",
    concept: "・海外のネイルトレンドが好きな若い女性。\n・日本在住の外国人、または観光で訪れる英語圏の外国人客。",
    typography: "A modern geometric sans-serif creates a clean, contemporary feel. Variable font weights add subtle hierarchy without complexity.",
    colors: ["#FAFAFA", "#E8D5C4", "#333333", "#B8A394"],
    uxDecisions: [
      "・英語/日本語のバイリンガル設計\n\n日本語と英語を簡単に切り替えることで、外国人のお客でもメニュー選びから予約までストレスなく進める仕様にしました。",
      "・外国人/ 新規客向けの“FAQ” （よくある質問）\n\n「持ち込みのネイルアートは可能ですか？」「どのような支払い方法がありますか？」など、 外国人客や初めての方が特に抱えやすい疑問を日英ペアの FAQで網羅し、来店ハードルを下げています。",
      "・料金・施術時間をカード型でセット表示\n\n各メニューの料金と目安の施術時間をカード型でスッキリと整理し、ユーザーが比較、検討しやすい構成としました。"
    ],
    screenshots: [
      "/nami-nails-top.png",
      "/nami-nails-screen-1.png",
      "/nami-nails-screen-2.png",
      "/nami-nails-screen-5.png",
      "/nami-nails-screen-6.png"
    ],
    mobileScreenshots: [
      "/nami-nails-mobile-1.png",
      "/nami-nails-mobile-3.png"
    ]
  }
]
