/* =====================================================================
   박정우 포트폴리오 사이트 · 내용 파일

   사이트에 보이는 글, 영상, 스틸컷은 전부 이 파일에서 고칩니다.
   여기를 고치면 사이트와 함께 이력서 · 경력기술서 · 포트폴리오 PDF도
   자동으로 같이 바뀝니다. index.html은 건드리지 않아도 됩니다.

   ── 항목별 의미 ─────────────────────────────────────────────
   title     작업 제목
   client    클라이언트 / 아티스트 (자체 제작은 "YeahFilms")
   format    장르 (M/V, Short-form 등)
   role      내 역할 → 썸네일 아래에 클라이언트와 함께 보임
   period    기간 (예: "2026.06 – 2026.07", 진행 중이면 "2026.10 – WIP")
             → 이력서 · 경력기술서에만 들어가고, 사이트에는 연도만 보임
   year      연도 (사이트에 표시. period에 WIP가 있으면 "2026 (WIP)"로 보임)
             Archive 항목은 진행 중이면 wip: true 를 붙이기
   yt        유튜브 영상 ID (youtu.be/ 뒤의 11자리)
   href      유튜브가 아닌 링크 (인스타그램 등)
   tasks     내가 맡은 일 → 사이트 상세 화면 맨 위 'My Part', 경력기술서에 들어감
   credits   함께한 사람들 (예: "Director 홍길동 · Edit 김OO · DI 이OO")
             → 상세 화면에 작게 표시. 내가 하지 않은 파트를 분명히 해 줌
   desc      작업 소개 한두 줄 → 사이트 상세 화면, 포트폴리오에 들어감
   result    결과 / 성과 한 줄 → 경력기술서에 들어감
   stills    스틸컷 이미지 경로 3~4개 → 사이트 상세 화면, 포트폴리오에 들어감
             images 폴더에 사진을 올리고 ["images/파일이름.jpg", ...] 처럼 적기
   thumb     목록에 보일 대표 이미지를 따로 지정하고 싶을 때 (예: "images/haruki-main.jpg")
             비워두면 스틸컷 첫 장 → 유튜브 썸네일 순서로 자동 선택
             인스타그램 영상은 썸네일을 자동으로 못 가져오므로 여기에 캡처 이미지를 넣어 주세요
   vertical  세로 영상이면 true → 상세 화면에서 잘리지 않고 세로로 보임
   size      "big" 으로 적으면 그 작업만 가로 2칸 × 세로 2칸 크기로 크게 보임
   episodes  여러 편으로 된 작업일 때 각 편의 목록

   ── 순서 바꾸기 ─────────────────────────────────────────────
   { 부터 } 까지 한 덩어리를 통째로 잘라서 원하는 위치에 붙이면 됩니다.
   위에 있을수록 사이트와 문서에서도 앞에 나옵니다.
   지금은 진행 중(WIP)인 작업을 맨 위에, 그 아래는 최신순으로 두었습니다.

   ── 문법 주의 ───────────────────────────────────────────────
   글자는 항상 "큰따옴표" 안에, 항목 사이에는 쉼표(,)를 꼭 붙입니다.
   ===================================================================== */

window.SITE = {
  name: "박정우",
  nameEn: "PARK JEONG WOO",
  role: "PD · AD",
  intro: "짜치지 않는 직감을 지닌 최고의 서포터입니다.",

  // 내가 실제로 하는 일 → 소개 문장 아래 한 줄로 보임 (안 쓰려면 [] 로 비우기)
  skills: ["Production · Client Communication · AI Tools · Japanese"],

  // 연락처: email은 사이트와 문서 모두, phone은 PDF 문서에만 들어갑니다
  email: "bandai0814@gmail.com",
  instagram: "p_wjddn",          // @ 없이 아이디만 (사이트 상단과 이력서에 표시)
  phone: "010-2234-8889",
  siteUrl: "bandai0814.github.io/portfolio/site",

  /* ── 자기소개: 이력서 PDF 맨 아래에 들어갑니다 (사이트에는 안 보임)
        문단마다 큰따옴표로 감싸고 쉼표로 구분하세요 ── */
  aboutMe: [
    "",
    ""
  ],

  /* ── 배치: 한 줄에 몇 개씩 보일지 (1~6). 숫자가 작을수록 썸네일이 커집니다 ──
     휴대폰에서는 자동으로 2개씩(1로 정하면 1개씩) 보입니다. */
  layout: {
    commercial: 3,
    original: 5
  },

  /* ── Download 항목 옆에 들어가는 설명 ── */
  downloads: {
    resume: "연락처와 병역, 전체 자격 사항, 자기소개까지 담은 문서",
    career: "작업마다 맡은 일과 그 결과를 적은 기록",
    portfolio: "작업 소개와 스틸컷을 한 파일로 묶은 가로형 문서"
  },

  /* ── Commercial: 클라이언트 작업 ── */
  commercial: [
    {
      title: "죽은 연인에게로",
      client: "데이먼스 이어", format: "Concert Live Clip", role: "AD · PD · B CAM",
      period: "2026.10 – WIP", year: "2026", yt: "", note: "공개 예정",
      tasks: [], credits: "", desc: "", result: "", stills: []
    },
    {
      title: "HS접근성 프로젝트",
      client: "LG전자", format: "Short-form", role: "AD · PD",
      period: "2026.07 – 2026.09", year: "2026",
      tasks: [], credits: "", desc: "", result: "",
      episodes: [
        { title: "퓨리케어 AI 냉동얼음정수기편", yt: "GuMLcztFD-E", platform: "YouTube", vertical: false, thumb: "", desc: "", stills: [] },
        { title: "전자레인지 이지트레이편", href: "https://www.instagram.com/reel/DcubnUGgZAH/", platform: "Instagram", vertical: true, thumb: "", desc: "", stills: [] },
        { title: "냉장고 회전선반편", href: "https://www.instagram.com/reel/DcubrVlAYVT/", platform: "Instagram", vertical: true, thumb: "", desc: "", stills: [] },
        { title: "세탁기 이지핸들편", href: "https://www.instagram.com/reel/Dcubn6CAQku/", platform: "Instagram", vertical: true, thumb: "", desc: "", stills: [] }
      ]
    },
    {
      title: "BOOGIENOVA",
      client: "Yoohee", format: "M/V", role: "AD · PD · Mixed media Artwork",
      period: "2026.07 – 2026.08", year: "2026", yt: "oEJuHemNzgI",
      tasks: [], credits: "", desc: "", result: "", stills: []
    },
    {
      title: "親不孝通りノンフィクション(Haruki's version)",
      client: "Hamano Haruki", format: "M/V", role: "AD · PD",
      period: "2026.06 – 2026.07", year: "2026", yt: "adbLZR_J7jg",
      tasks: [
        "기획, 예산 관리(약 70만 엔), 콘티 작성",
        "한국 크루 5인의 후쿠오카 현지 촬영 운영, 연출 보조",
        "한·일 스태프 간 실시간 통역, 편집 보조"
      ],
      credits: "", desc: "",
      result: "아티스트 공식 뮤직비디오로 공개",
      stills: []
    },
    {
      title: "제 2 미해결문제 第 2 未解決問題 : //",
      client: "데이먼스 이어", format: "Concert Live Film", role: "AD · PD",
      period: "2026.04 – 2026.06", year: "2026", yt: "chXvY65Dh_g",
      tasks: [], credits: "", desc: "", result: "", stills: []
    }
  ],

  /* ── Original: YeahFilms · 개인 작업 ── */
  original: [
    {
      title: "레드아카데미",
      client: "Personal", format: "AI Cinematic Drama", role: "제작",
      period: "2026.03 – 2026.07", year: "2026", yt: "4peMRX9iVMI",
      tasks: [], credits: "", desc: "", result: "", stills: []
    },
    {
      title: "파란 열정, 구스토!",
      client: "YeahFilms", format: "Visual Film", role: "제작",
      period: "2026.06", year: "2026", yt: "o-jsTZ3KFBQ",
      tasks: [], credits: "", desc: "", result: "", stills: []
    },
    {
      title: "THIS WAS NEVER THE PLAN",
      client: "YeahFilms", format: "Cinematic Film", role: "제작",
      period: "2026.01 – 2026.05", year: "2026", yt: "Ghw7gJlzpe8",
      tasks: [], credits: "", desc: "", result: "", stills: []
    },
    {
      title: "눈 감고 일하기",
      client: "YeahFilms", format: "Documentary", role: "제작",
      period: "2025.09 – 2025.11", year: "2025", yt: "jYrDcXYjAgI",
      tasks: [], credits: "", desc: "", result: "", stills: []
    },
    {
      title: "미지의 세계를 포용하며",
      client: "YeahFilms", format: "Poetic Documentary", role: "제작",
      period: "2024.09 – 2024.11", year: "2024", yt: "vuvPIMzL4xg",
      tasks: [], credits: "", desc: "", result: "", stills: []
    }
  ],

  /* ── Archive: 그 밖의 참여 작업 (목록으로만 표시) ── */
  archive: [
    { year: "2026", title: "LG전자 BOLD MOVE 아카이빙 필름", format: "Archive Film", role: "AD · PD", wip: true },
    { year: "2026", title: "ILLIT ‘BREAK EVEN’ Intro Design", format: "Teasing Video", role: "AD", yt: "-YuHyTD3a3s" },
    { year: "2026", title: "백아연 〈들어봐〉", format: "M/V Jacket Photo", role: "조명팀", yt: "ClbQHNIa2PM" },
    { year: "2026", title: "올빼미 연맹", format: "Concept Short Film", role: "제작", yt: "MTVKRzYjjp4" },
    { year: "2026", title: "내러티브룸 The spaghetty story", format: "Teaser Film", role: "카메라팀", href: "https://www.youtube.com/@Narrativeroom_cjy/featured" },
    { year: "2026", title: "SHAUN 〈일기장〉", format: "Music Video", role: "카메라팀", yt: "O0diKBGKvMQ" },
    { year: "2025", title: "GATSBY 〈바람은 그를 비껴갔다〉", format: "Short-form · 공모전 동상", role: "기획 · 연출", href: "https://youtube.com/shorts/Hc3jACbADNg" },
    { year: "2024", title: "글리코상은 어디에", format: "Cinematic Video Essay", role: "제작", yt: "XlHidpVW4KQ" },
    { year: "2024", title: "Big Hill (Balming Tiger ‘big butt’)", format: "Visual Film", role: "제작", yt: "cGbtNHgaYJs" },
    { year: "2024", title: "KBS 〈스캔들〉, 〈수지맞은 우리〉", format: "Drama", role: "촬영보조" }
  ],

  /* ── 학력 · 수상 · 자격 · 병역 ── */
  education: [
    {
      period: "2021.03 – 2027.02", school: "아주대학교", major: "문화콘텐츠학과",
      second: "문화산업과 커뮤니케이션 전공",   // 복수전공 (없으면 "")
      gpa: "4.37 / 4.5"                          // 학점 (안 보이게 하려면 "")
    }
  ],
  awards: [
    { year: "2025", name: "국회의원상", detail: "경기 라디오방송콘텐츠 창작대전 · 팀장" },
    { year: "2025", name: "동상", detail: "GATSBY 숏폼 영상 공모전 · 기획, 연출" },
    { year: "2024", name: "최우수상", detail: "아주대 문화콘텐츠학과 공모전" },
    { year: "2024", name: "학장상", detail: "아주대 인문대학 기초과목 우수 소논문" }
  ],
  // onSite: false 인 항목은 사이트에는 안 보이고 이력서에만 들어갑니다
  certificates: [
    { name: "ACA Premiere Pro", detail: "Adobe", date: "2022", onSite: true },
    { name: "무인동력비행장치 4종", detail: "DJI Mini 4 Pro 보유 · 운용", date: "2025.01", onSite: true },
    { name: "JLPT N2(상)", detail: "비즈니스 회화", date: "2024.08", onSite: true },
    { name: "TOEIC(중)", detail: "일상 회화", date: "2026.05", onSite: true },
    { name: "한국사능력검정 1급", detail: "국사편찬위원회", date: "2024.06", onSite: true },
    { name: "워드프로세서 1급", detail: "대한상공회의소", date: "2022.09", onSite: true },
    { name: "ITQ OA MASTER", detail: "한국생산성본부", date: "2022.10", onSite: true },
    { name: "운전면허 2종 보통", detail: "장거리 운전 가능", date: "2021.02", onSite: true }
  ],
  military: { period: "2022.09 – 2024.06", detail: "공군 군사경찰 병장 만기전역" }
};
