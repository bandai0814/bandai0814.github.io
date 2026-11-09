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
   files     관련 자료 링크 → 상세 화면 My Part 아래 'Work Sample' 줄에 보임
             [{ label: "담당 작업 폴더", url: "https://..." }] 처럼 적기
   focus     담당 업무 한 줄 요약 (예: "연출 설계 및 현장·후반 작업 지원") → My Part 맨 위에 굵게
   tasks     내가 맡은 일 → 사이트 상세 화면 맨 위 'My Part', 경력기술서에 들어감
   credits   크레딧 → 사이트 상세 화면 About 아래 (접혀 있다가 '전체 크레딧'으로 펼침, PDF에는 안 들어감)
             `역할 | 이름, 이름` 한 줄씩, [구역 이름] 으로 묶음. 내 이름은 자동으로 굵게
   desc      작업 소개 한두 줄 (줄을 바꾸려면 \n) → 사이트 상세 화면, 포트폴리오에 들어감
   result    결과 / 성과 한 줄 → 경력기술서에 들어감
   stills    스틸컷 이미지 경로 → 사이트 상세 화면 'Stills' (5장까지는 한 줄, 6~10장은 두 줄로 나눠짐)
             대표 이미지는 유튜브 썸네일이 그대로 쓰이고, 유튜브 영상이 없을 때만 첫 번째 사진이 대표가 됨
             images 폴더에 사진을 올리고 ["images/파일이름.jpg", ...] 처럼 적기
   behind    현장 비하인드 사진 3개 → 'Behind the Scenes' 줄, 포트폴리오 PDF 아래 줄
   process   내가 만든 작업 자료(콘티, 타임테이블, 기획안 캡처 등) 최대 3개 → 'Process' 줄
             설명을 붙이려면 { src: "images/haruki-conti.jpg", caption: "촬영 콘티" } 처럼 적기
             (stills, behind도 같은 방식으로 설명을 붙일 수 있음)
             사진은 넣은 줄만 사이트에 보이고, 누르면 크게 볼 수 있음
   thumb     목록에 보일 대표 이미지를 따로 지정하고 싶을 때 (예: "images/haruki-main.jpg")
             비워두면 유튜브 썸네일 → 스틸컷 첫 장 순서로 자동 선택
             인스타그램 영상은 썸네일을 자동으로 못 가져오므로 여기에 캡처 이미지를 넣어 주세요
   vertical  세로 영상이면 true → 상세 화면에서 잘리지 않고 세로로 보임
   episodes  여러 편으로 된 작업일 때 각 편의 목록 (상세 화면에서 편을 골라 볼 수 있음)
             편에 feature: true를 붙이면 포트폴리오 PDF에서 위 줄에 크게, 나머지 편은 아래 한 줄로 배치
             세로 편(vertical: true)은 포트폴리오 PDF에서 9:16 비율로 아래 한 줄에 배치
   thumbZoom 유튜브 썸네일 위아래에 검은 여백이 있을 때 확대해서 여백을 없앰 (예: 1.125)

   ── 순서 바꾸기 ─────────────────────────────────────────────
   사이트의 Selected Work는 commercial과 original을 합쳐서
   진행 중(WIP) → 최근 끝난 작업 순으로 자동 정렬됩니다 (period 기준).
   이력서 · 경력기술서에서는 이 파일에 적힌 순서대로 나옵니다.

   ── 문법 주의 ───────────────────────────────────────────────
   글자는 항상 "큰따옴표" 안에, 항목 사이에는 쉼표(,)를 꼭 붙입니다.
   ===================================================================== */

window.SITE = {
  name: "박 정 우",
  nameEn: "PARK JEONG WOO",
  role: "PD · AD",
  intro: "장르가 달라도, 현장을 움직이는 근육은 같습니다.",

  // 내가 실제로 하는 일 → 소개 문장 아래 한 줄로 보임 (안 쓰려면 [] 로 비우기)
  skills: ["Production · Communication · Planning"],

  // 연락처: email은 사이트와 문서 모두, phone은 PDF 문서에만 들어갑니다
  email: "bandai0814@gmail.com",
  instagram: "p_wjddn",          // @ 없이 아이디만 (사이트 상단과 이력서에 표시)
  phone: "010-2234-8889",
  siteUrl: "parkjeongwoo.com",
  // 포트폴리오 PDF 표지의 'Work Samples ↗' 링크 (직접 작업한 문서·콘티 모음 폴더)
  workSamples: "",

  /* ── 자기소개: 이력서 PDF 맨 아래에 들어갑니다 (사이트에는 안 보임)
        문단마다 { title: "소제목", text: "본문" } 형식, 소제목 없이 "본문"만 써도 됩니다 ── */
  aboutMe: [
    { title: "큐 | 화면 뒤 큐사인이 들리던 순간", text: "어릴 적부터 텔레비전의 이면이 궁금했습니다. 모니터 속 이야기에 빠져 있으면서도, 머릿속에는 늘 그 장면이 만들어지는 현장이 그려졌습니다. 누군가 기획하고 대본을 쓰고, 카메라를 세팅하고, 큐를 외치고 NG가 나면 다시 찍고, 사람들이 울고 웃으며 치열하게 의견을 나누는 모습이었습니다. 마지막화가 끝나면 나오는 메이킹 영상이나 엔딩 크레딧에는, 언젠가 제 이름이 남아 있기를 꿈꿨습니다. 긴 여정 끝에 완성된 작품 끝에 서 있는 기분은 상상하는 것만으로도 가슴이 뛰었습니다." },
    { title: "컷 | 생각 많은 사람이 결정하는 법", text: "화면 너머를 그려보던 습관은, 자라면서 생각이 많은 성격이 되었습니다. 하나의 선택 앞에서 수많은 가능성을 떠올리고, 뒤따라오는 감정을 감당하지 못해 스스로 지치는 날도 많았습니다. 그러다 문득 '이 생각이 내게 정말 도움이 되는가'를 한 발 떨어져 바라본 적이 있습니다. 생각과 감정이 저절로 밀려오더라도, 그것을 붙잡을지 내려놓을지 고르는 주체는 결국 저 자신이라는 걸 깨달았습니다." },
    { title: "테이크 | '잘 모르겠다'는 유일한 정답", text: "생각이 많아지는 건 대개 결정 앞에서였고, 결정이 어려웠던 건 제 안의 기준이 아직 단단하지 않았기 때문이었습니다. 우리가 당연한 정답이라 믿는 기준도 사실은 누군가에 의해 만들어진 것이 많았습니다. 그것을 그대로 제 신념으로 삼는다면 제 삶이 아니라 남의 삶을 대신 사는 것과 다르지 않다고 생각했습니다. 그렇게 살펴볼수록 세상에 정해진 답은 없다는 생각이 들었습니다. 유일한 정답이 있다면 ‘잘 모르겠다’는 말뿐일지도 모르겠습니다. 하지만 거기서 멈추면 앞으로 나아갈 수 없기에, 남이 정한 기준을 따르기보다 제게 진정 옳고 좋은 것이 무엇인지 고민하며 저만의 기준을 세워가려 합니다. 그 선택의 결과를 돌아보고 책임지는 것까지 제 몫이라고 생각합니다." },
    { title: "엔딩 | 크레딧에 남기는 것", text: "어떤 일을 하며 살아갈지도 그렇게 고민했습니다. 힘들어도 다시 하고 싶은 일은, 사람들과 함께 하나의 작품을 완성하는 일이었습니다. 어릴 적 화면 뒤를 상상하던 마음은 이제 직접 현장을 꾸리는 일로 이어졌습니다. 스스로 고른 이 길에서, 엔딩 크레딧에 남은 제 이름을 보며 제 몫을 다했다고 말할 수 있도록 최선을 다해 살아가려 합니다." },
  ],


  /* ── Download 항목 옆에 들어가는 설명 ── */
  downloads: {
    resume: "전체 정보와 자기소개",
    career: "프로젝트별 역할과 담당 업무",
    portfolio: "주요 작업 및 스틸컷"
  },

  /* ── Selected Work ①: 클라이언트 작업 (경력기술서에서 '상업 작업'으로 묶임) ── */
  commercial: [
    {
      title: "죽은 연인에게로",
      client: "데이먼스 이어", format: "Concert Film", role: "AD · Camera Op.",
      period: "2026.10 – WIP", year: "2026", yt: "i1u8Vcy-J6E", note: "공개 예정",
      files: [],
      focus: "곡별 연출 구성 및 멀티캠 촬영 설계·운용",
      tasks: [
        "곡의 정서와 무대 연출에 맞춘 구도·카메라 무빙·컷 전환 아이데이션",
        "리허설·본공연 촬영 소스 구분 및 촬영 계획 수립",
        "셋리스트 기반 카메라 운용표 및 장비 세팅·이동 큐 설계",
        "특수효과 필터·캠코더 활용 구성, 정면 풀샷 카메라 운용"
      ],
      credits: `[ARTIST]
DAMONS YEAR
[LIVE PERFORMERS]
Band Master & Guitar | Yu Hyunjin
Guitar | Choi Joonha
Bass | Park Chanyoung
Drum | Chang Jaemin
Violin I | Kim Sangeun, Chung Yoonjung
Violin II | Kim Yeonsong, Baik Nayoung
Viola | Park Narae, Shin Dahae
Cello | Melis Elgin
[PRODUCTION]
Label | Akashic Records
Artist Management | MOONPICK
Presenter | MOONPICK, Akashic Records, NOL UNIVERSE
Organizer | MOONPICK, NOL UNIVERSE
Concert Production Company | NOL UNIVERSE
Concert Director | 206 Production
[LIVE FILMING]
Director | Jeong Yejoon (Yeahfilms)
Assistant Directors | Park Jeongwoo, Ahn Jeongbin, Lee Yewon
Camera Operators | Jeong Yejoon, Ahn Jeongbin, Park Jeongwoo, Lee Yewon, An Dan, Ko Byeonghak, Bang Sanghyun, Choi Jihwan`, desc: "데이먼스 이어의 단독 콘서트 ‘죽은 연인에게로’를 담은 라이브 필름. 공연의 주요 순간을 압축한 하이라이트와 곡별 라이브 영상, 공연 전체를 감상할 수 있는 풀 아카이빙 영상으로 구성된다. 각 곡의 정서에 맞춰 캠코더의 거친 질감과 빛이 번지는 필터 효과 등을 활용해, 무대에서 느껴지는 기억과 그리움, 고독을 화면에도 담아내고자 했다. 본공연의 현장감을 유지하면서도 아티스트의 표정과 연주를 가까이 담기 위해 리허설 촬영을 함께 고려했다. 공연 전체의 흐름과 개별 곡의 감정이 각 영상의 목적에 맞게 살아나도록 작업 중에 있다.", result: "", stills: [],
      // picker: true = 상세 화면 위쪽에 편 목록을 놓고, 누른 편이 메인 영상으로 나옴
      // 공개되면 각 편의 yt에 영상 ID를 넣기 (비어 있으면 '공개 예정'으로 보임)
      picker: true,
      episodes: [
        { title: "하이라이트 필름", feature: true, yt: "i1u8Vcy-J6E", desc: "",
          stills: ["images/lover-highlight-1.jpg", "images/lover-highlight-2.jpg", "images/lover-highlight-3.jpg", "images/lover-highlight-4.jpg"] },
        { title: "라이브 · Gertha Loew", yt: "", desc: "", stills: [] },
        { title: "라이브 · Auburn/Telepathy", yt: "", desc: "", stills: [] },
        { title: "라이브 · Erebia", yt: "", desc: "", stills: [] },
        { title: "라이브 · Blache", yt: "", desc: "", stills: [] },
        { title: "라이브 · 에게로", yt: "", desc: "", stills: [] },
        { title: "풀 라이브 아카이빙", yt: "", desc: "", stills: [] }
      ]
    },
    {
      title: "HS접근성 프로젝트",
      client: "LG전자", format: "Advertisement", role: "AD · PD",
      period: "2026.07 – 2026.09", year: "2026", href: "https://www.youtube.com/@LGElectronicsKorea",
      files: [],
      focus: "기획·연출 및 제작 관리와 현장 운영",
      tasks: [
        "접근성 커뮤니티 참여자 중 모델 선정 및 제품별 영상 톤앤매너 구성",
        "메인 카피·내레이션 작성 및 AI 활용 스토리보드 제작",
        "로케이션 헌팅, 모델·스튜디오·작곡가 섭외 및 촬영 타임테이블 작성",
        "현장 구도 점검, 스크립터 및 촬영 일정 관리"
      ],
      credits: `[퓨리케어 AI 냉동얼음정수기편]
Starring | Yoohee Jo, Seunghee Kim
Director | Yejoon Jeong
Assistant Director | Jeongwoo Park
Producer | Jeongwoo Park
Line Producer | Juyeon Lee
Director of Photography | Yejoon Jeong
Lighting Director | Byeonghak Go
Art Director | Yumin Choi
Art Crew | Minseon Kim
Production Sound Mixer | Yewon Lee
Sound Mixing | Byeonghak Go
Music by | Hyeonju Na
Edit / DI / Graphic Design | Yejoon Jeong
[컴포트 키트 ‘오늘부터 이지하게’ 시리즈]
Director | Yejoon Jeong
Assistant Director | Jeongwoo Park
Producer | Jeongwoo Park
Director of Photography | Yejoon Jeong
Assistant Camera | Jeongho Lee
Lighting Director | Seokhyeon Kim
Lighting Crew | Eunsang Yu
Art Director | Jeongbin Ahn
Art Crew | Yewon Lee`, desc: "일상 속 작은 불편을 덜어주는 LG전자 제품의 쓰임을 담은 숏폼 프로젝트. 컴포트 키트 ‘오늘부터 이지하게’ 시리즈 3편과 퓨리케어 AI 냉동얼음정수기편을 제작했다. 다양한 세대와 생활 방식 속에서 제품이 어떻게 편안함을 더하는지 보여주고자 했다. 컴포트 키트는 배드민턴·요리·그림 등 출연자의 취미가 자연스럽게 제품 사용으로 이어지도록 구성했다. 정수기편은 할머니와 손녀가 함께 보내는 여름방학을 배경으로, 음성인식과 레시피 출수 기능을 활용하는 모습을 따뜻하고 청량한 분위기로 담았다.\n컴포트 키트는 무더위 속 모델들의 컨디션과 촬영 진행 상황을 살피며 하루에 3편을 촬영해야 했으며, 정수기편에서는 당일 설치한 제품에서 얼음이 충분히 나오지 않는 변수가 있었다. 확보된 소량의 얼음으로도 깨끗하고 시원한 인상을 보여줄 수 있도록 현장에서 구도와 연출을 조정했다.", result: "",
      episodes: [
        { title: "퓨리케어 AI 냉동얼음정수기편", yt: "GuMLcztFD-E", platform: "YouTube", vertical: false, thumb: "", desc: "", stills: [] },
        { title: "전자레인지 이지트레이편", href: "https://www.instagram.com/reel/DczlrTuTg1z/", platform: "Instagram", vertical: true, thumb: "images/lg-microwave.jpg", desc: "", stills: [] },
        { title: "냉장고 회전선반편", href: "https://www.instagram.com/reel/DczlQjWzJxV/", platform: "Instagram", vertical: true, thumb: "images/lg-fridge.jpg", desc: "", stills: [] },
        { title: "세탁기&건조기 이지핸들편", href: "https://www.instagram.com/reel/DczldVDTwHm/", platform: "Instagram", vertical: true, thumb: "images/lg-washer.jpg", desc: "", stills: [] }
      ]
    },
    {
      title: "BOOGIENOVA",
      client: "Yoohee", format: "M/V", role: "AD · PD · Mixed Media Artwork",
      period: "2026.07 – 2026.08", year: "2026", yt: "oEJuHemNzgI",
      files: [],
      focus: "기획·연출 및 현장 운영, 믹스드 미디어 아트워크",
      tasks: [
        "음원을 바탕으로 한 뮤직비디오 컨셉·시놉시스 아이데이션",
        "줄콘티 및 스토리보드 제작",
        "로케이션 헌팅, 전체 타임테이블 구성",
        "현장 스크립터 및 필수 컷·인서트 체크, 촬영 시간 조율",
        "후반 작업 중 믹스드 미디어 아트워크 공동 제작"
      ],
      credits: `Artist | Yoohee Jo
Olapa | Yoohee Jo
Oddball Grandmother | Minkyung Kwon
Taekwondo Oddball | Minjun Kang
Oddball Chef | Daon Woo
Oddball Laborer | Maeum Jang
Oddball Police Officer | Seungwon Choi
Oddball Dental Hygienist | Sinyoung Han
Director | Yejoon Jeong
Assistant Directors | Jeongwoo Park, Jeongho Lee
Producer | Jeongwoo Park
Director of Photography | Yejoon Jeong
Assistant Camera | Jeongho Lee
[INTRO FILM CREW]
Art Director | Jeongbin Ahn
Art Crew | Minseon Kim, Yewon Lee
Lighting Director | Byeonghak Ko
Lighting Crew | Myeongjun Choi
Sound | Jungkee Hong
[MUSIC VIDEO CREW]
Art Director | Minseon Kim
Art Crew | Yumin Choi, Euntaek Kim, Jeongbin Ahn, Yewon Lee
Lighting Director | Jiwoong Choo
B Camera | Jeongho Lee
VFX | Euntaek Kim
Editing / Color Grading / Graphic Design | Yejoon Jeong
Mixed Media Artwork | Yejoon Jeong, Jeongwoo Park
Behind-the-Scenes Film | Mokha Kim`, desc: "자신만의 보금자리를 찾아 기묘한 경연에 참가한 소녀의 이야기를 담은 아티스트 유희의 뮤직비디오. 거북이를 건네받으며 시작되는 영화적 서사에 개성 강한 인물들의 경쟁과 훌라 댄스, 엉뚱한 상황이 연출된다. 타인의 시기와 질투 속에서도 밝음을 잃지 않는 소녀의 모습을 통해, 보사노바 장르의 곡에 담긴 희망과 사랑을 유쾌하면서도 낯선 이미지로 풀어내고자 했다.\n스튜디오에서의 인트로 촬영부터 대부도의 펜션과 야외 로케까지, 서로 다른 촬영 환경에서 다채로운 장면을 담아냈다. 많은 컷과 세팅 전환을 소화하기 위해 촬영을 뒷받침하는 자료들을 더블 체크하며, 필수 컷과 인서트를 놓치지 않도록 현장을 관리했다. 이렇게 확보한 소스에 아트워크를 더해, 기획 단계에서 상상한 따뜻하면서도 기묘한 세계를 곡의 템포에 어우러지는 영상으로 완성했다.", result: "",
      
      stills: ["images/boogienova-1.jpg", "images/boogienova-2.jpg", "images/boogienova-3.jpg", "images/boogienova-4.jpg"]
    },
    {
      title: "親不孝通りノンフィクション",
      client: "Hamano Haruki", format: "M/V", role: "AD · PD",
      period: "2026.06 – 2026.07", year: "2026", yt: "adbLZR_J7jg",
      files: [],
      focus: "기획·연출, 제작 관리 및 현장 운영과 일본어 커뮤니케이션",
      tasks: [
        "현지 매니지먼트와의 비즈니스 컨택 및 한·일 스태프 간 현장 통역",
        "가사 의미 해석에 따른 영상 컨셉과 무드보드, 스토리보드 제작",
        "프로덕션 디자인, 로케 헌팅, 예산 관리 및 현장 인력 보조"
      ],
      credits: `Starring | Haruki Hamano
Director | Yejoon Jeong
Assistant Director | Jeongwoo Park, Jungho Lee
Director of Photography | Jihwan Choi
Assistant Camera | Jungho Lee
Lighting Director | Seokhyeon Kim
Styling | Haruki Hamano
Hair & Make-up | Rei Takamatsu
Edit / DI / Title Design | Yejoon Jeong
Producer | Natsumi Ushijima, Jeongwoo Park
Production | YeahFilms
Special Thanks | MUSIC BAR SIDE:K`, desc: "후쿠오카 오야후코도리(親不孝通り)를 배경으로 한 일본 아티스트 하마노 하루키의 뮤직 비디오. 일본 매니지먼트의 의뢰를 받아 소규모 스태프와 함께 단 하루 동안 촬영했다. 예상치 못한 폭풍우와 야간 거리의 인파로 장비 운용과 촬영에 제약이 생겼지만, 남은 시간과 작품의 완성도에 필요한 필수 컷을 즉각 고려해 콘티와 촬영 순서를 재조정했다. 한·일 스태프 간 소통과 감독의 리테이크 요청을 조율하며 당일 촬영을 마무리했고, 정해진 예산과 일정 안에 작품을 완성해냈다.",
      result: "아티스트 공식 뮤직비디오로 공개",
      stills: ["images/haruki-1.jpg", "images/haruki-2.jpg", "images/haruki-3.jpg", "images/haruki-4.jpg"],
      behind: [],
      process: []
    },
    {
      title: "제 2 미해결문제 第 2 未解決問題 : //",
      client: "데이먼스 이어", format: "Concert Film", role: "AD",
      period: "2026.04 – 2026.06", year: "2026", yt: "chXvY65Dh_g",
      files: [],
      focus: "연출 설계 및 현장 운영",
      tasks: [
        "아티스트 의견, 무대 연출, 음악적 톤앤매너를 고려한 영상 컨셉 및 연출 가이드라인 제작",
        "리허설/본공연 무대 연출 변경에 따른 곡별 카메라 구도·배치 설계",
        "촬영 소스 확보를 위한 현장 스크립터 및 동선 정리"
      ], credits: `[ARTIST]
VOCAL | DAMONS YEAR
KEYBOARD | DAMONS YEAR
[BAND]
BAND MASTER | YU HYUNJIN
A. GUITAR & E. GUITAR | YU HYUNJIN
E. GUITAR | CHOI JOONHA
BASS | PARK CHANYOUNG
DRUMS | CHANG JAEMIN
VIOLIN | KIM SANGEUN, KIM YEONSONG
VIOLA | CHOI CHANGWON
CELLO | MELIS ELGIN
[CONCERT PRODUCTION]
ORGANIZER | MOONPICK, AKASHIC RECORDS
PRESENTER | MOONPICK
MANAGEMENT DIRECTOR | HONG DALNIM
STAFF | LEE EDEN, WON HYERIM, LEE KYUSEON, LEE YEJI
[SHOW PRODUCTION]
SHOW DIRECTOR | KIM JAEWOONG (206 PRODUCTION)
SHOW AD | JE SEUNGHEE (206 PRODUCTION)
FOH ENGINEER | KIM HYOJIN, CHOI JINHUN (RED COMPANY)
SOUND AD | JANG HEENA (RED COMPANY)
LIGHTING DIRECTOR | KIM HANSUNG (LIGHT HOUSE)
LIGHTING AD | LEE DONG HWAN (DO LITE)
BACKLINE | SONG HYUNMIN, KIM WONCHUL, CHOI EUNIL (MUSE COMPANY)
OPERATIONS | KIM DONGHYUN, AN MINJI, YOON JAEEUN, SHIN GAYUN (HIGHTABLE)
[VISUALS]
POSTER DESIGN | KIM HYUNGJUN, PARK SORIM, CHOI HAJUNE (W(N)K)
MERCHANDISE DIRECTOR | KIM HYUNGJUN, PARK SORIM, CHOI HAJUNE (W(N)K)
PROMOTIONAL DESIGN | KIM HYUNGJUN, PARK SORIM, CHOI HAJUNE (W(N)K)
GOBO DESIGN | KIM HYUNGJUN, PARK SORIM, CHOI HAJUNE (W(N)K)
PHOTO | LEE JONGSU
[LIVE VIDEO]
DIRECTOR | JEONG YEJUN (YEAHFILMS)
AD | PARK JEONGWOO, LEE JUNGHO
DOP | JEONG YEJUN
AC | PARK JEONGWOO, LEE JUNGHO
AUDIO MIXING | YU HYUNJIN`, desc: "서소문성지 역사박물관에서 6일간 열린 싱어송라이터 데이먼스 이어의 단독 콘서트를 담은 라이브 필름. 감독 1명과 조연출 2명으로 구성된 소규모 팀으로, 매일 조금씩 달라지는 무대 상황에 맞춰 카메라 배치와 구도를 재설계하며 촬영했다. 공연 중에는 아티스트에게 가까이 접근하기 어렵고 카메라 이동 시 발생하는 소음도 고려해야 했다. 이에 클로즈업샷은 리허설에서, 와이드샷은 본공연에서 나누어 촬영하며 제한된 여건 속에서도 다양한 구도와 특수효과 컷을 확보했다.", result: "", stills: ["images/damons-unsolved2-1.jpg", "images/damons-unsolved2-2.jpg", "images/damons-unsolved2-3.jpg", "images/damons-unsolved2-4.jpg"]
    }
  ],

  /* ── Selected Work ②: YeahFilms 작업 모음 (경력기술서에서 '자체 제작'으로 묶임) ── */
  original: [
    {
      title: "YeahFilms Originals",
      client: "YeahFilms", format: "Visual Film · Documentary", role: "Co-Producer · AD",
      period: "2024.09 – 2026.06", year: "2024 – 2026", href: "https://www.youtube.com/@yeahfilm",
      files: [],
      tasks: [], credits: "", desc: "", result: "",
      // 유형별 공통 내용: 상세 화면에서 그 유형의 작품을 고르면 Role · My Part · Work Sample · About이 이 내용으로 바뀜
      // (비워 둔 칸은 위의 작업 전체 내용이 대신 보임)
      groups: {
        "Visual Film": {
          credits: `Directed by | Yejoon Jeong
Assistant Director | Jeongwoo Park, Jungho Lee`,
          role: "Co-Producer · AD",
          focus: "현장 즉흥 기획·연출 및 촬영",
          tasks: [
            "사전 콘티 없이 현장에서 로케이션 탐색, 컨셉 설정 및 연출 아이디어 제안",
            "음악의 무드와 템포, 레퍼런스를 바탕으로 한 카메라 구도 설계"
          ],
          files: [],
          desc: "도쿄와 오사카, 우즈베키스탄 등 낯선 장소에서 얻은 영감을 각자의 시선으로 풀어낸 예필름의 오리지널 콘텐츠. 여행 중 우연히 마주한 풍경과 창작에 대한 열정, 함께하는 사람들과의 유대, 자신의 취향을 찾아가는 생각을 담았다. 음악에서 출발한 비주얼 필름부터 친구들의 재회를 다룬 이야기, 도시를 바라보며 자신을 돌아보는 영상 에세이까지 작품마다 다른 형식을 시도했다.\n카메라 한 대만 들고 떠나 촬영지와 소품, 연출을 모두 현장에서 정했다. 곡을 정해 간 날에는 음악을 계속 틀어 두고 그 템포에 맞춰 움직이며 찍었다. 철저한 계획 아래 진행하는 작업과 달리, 상황을 즐기며 즉흥으로 만든 영상도 충분한 완성도를 가질 수 있다는 것을 경험했고, 두 방식을 오가며 현장에 유연하게 대응하는 감각을 길렀다."
        },
        "Documentary": {
          role: "Co-Producer · AD",
          focus: "기획·연출, 촬영 및 프로덕션 전반",
          tasks: [
            "B캠·짐벌·드론 촬영·조명·오디오·헤메코·미술 등 제작 실무 전반 수행",
            "스토리보드, 일러스트, 동화책 제작",
            "제주도·용산·군포·수원·사천 등 다수 로케이션 탐방과 출연자 섭외",
            "내레이션 작성·녹음"
          ],
          files: [],
          desc: "일과 도전을 대하는 사람들의 태도를 통해, 무엇을 믿고 어떤 선택을 하며 살아갈지 질문하는 다큐멘터리 2편. 감독과 둘이서 기획부터 촬영, 후반 작업까지 역할을 나누며 제작했다.\n\n첫 영상 작업이었던 ‘미지의 세계를 포용하며’는 도전에 대한 생각이 다른 두 사람의 제주 여정을 서정적으로 담았다. 2박 3일의 촬영 중 예상과 다른 로케이션과 궂은 날씨, 연출 방향의 변경이 겹치면서 촬영 계획을 다시 세워야 했다. 현장에서 발견한 풍경과 장면을 바탕으로 이야기의 흐름을 재구성했고, 필요한 표현을 구현하기 위해 짐벌·드론 운용도 새롭게 익혔다. 이후 편집 과정에서 부족한 장면을 확인하고 제주와 유사한 배경의 장소를 찾아 추가 촬영했다. 다양한 구도와 시각적 표현을 시도하며, 낯선 도전을 받아들이는 작품의 주제를 제작 과정에서도 직접 경험했다.\n\n‘눈 감고 일하기’는 약사와의 사전 인터뷰에서 들은 ‘소명 의식’에 주목해 기획을 제안하며 시작했다. 효율과 성과가 우선되는 시대에 일의 의미를 돌아보고, 그 가치가 다음 세대로 이어지기를 바랐다. 이를 위해 약국 인터뷰뿐 아니라 학생들이 참여하는 실험과 어린이들에게 이야기를 전하는 장면으로 구성을 확장했다. 실험 참여자를 직접 모집하고, 다큐멘터리의 메시지를 어린이의 눈높이에 맞춘 동화책으로 제작했다. 군포의 약국부터 수원의 강당·스튜디오, 사천의 어린이집까지 여러 현장을 오가며, 추상적인 질문을 사람들의 말과 행동으로 보여줄 수 있도록 구체화했다."
        }
      },
      // 순서 = 상세 화면 위쪽 목록 순서 (유형별로 묶고, 각 유형 안에서 최신 연도가 왼쪽)
      // feature: true = 포트폴리오 PDF에서 위쪽 큰 칸
      episodes: [
        { title: "파란 열정, 구스토!", feature: true, group: "Visual Film", format: "Visual Film", year: "2026", yt: "o-jsTZ3KFBQ", desc: "",
          stills: ["images/gusto-1.jpg", "images/gusto-2.jpg", "images/gusto-3.jpg", "images/gusto-4.jpg"] },
        { title: "THIS WAS NEVER THE PLAN", feature: true, group: "Visual Film", format: "Cinematic Film", year: "2026", yt: "Ghw7gJlzpe8", desc: "",
          stills: ["images/neverplan-1.jpg", "images/neverplan-2.jpg", "images/neverplan-3.jpg", "images/neverplan-4.jpg"] },
        { title: "올빼미 연맹", group: "Visual Film", format: "Concept Short Film", year: "2026", yt: "MTVKRzYjjp4", desc: "",
          stills: ["images/owls-1.jpg", "images/owls-2.jpg", "images/owls-3.jpg", "images/owls-4.jpg", "images/owls-5.jpg", "images/owls-6.jpg", "images/owls-7.jpg", "images/owls-8.jpg"] },
        { title: "글리코상은 어디에", group: "Visual Film", format: "Cinematic Video Essay", year: "2024", yt: "XlHidpVW4KQ", desc: "",
          stills: ["images/glico-1.jpg", "images/glico-2.jpg", "images/glico-3.jpg", "images/glico-4.jpg"] },
        { title: "Big Hill (Balming Tiger ‘big butt’)", group: "Visual Film", format: "Visual Film", year: "2024", yt: "cGbtNHgaYJs", desc: "",
          stills: ["images/bighill-1.jpg", "images/bighill-2.jpg", "images/bighill-3.jpg", "images/bighill-4.jpg", "images/bighill-5.jpg"] },
        { title: "눈 감고 일하기", credits: `[CAST]
선약국 약사 | 유선미
선약국 손님 | 배진영
까막눈게임 참여자 | 강다연, 고은진, 권예준, 김재민, 김태욱, 김호중, 김우수, 배하은, 박태현, 신회원, 양채연, 양윤서, 오상혁, 이도연, 이소윤, 이연우, 이정호, 이주연, 이찬영, 임주현, 전재인, 정문혁, 정재인, 조유정, 주민찬, 최현서, 황서영, 황정빈
라온어린이집 교사 | 이수연
라온어린이집 원생 | 원생 14명
아나운서 나레이션 | 이승민
[PRODUCTION]
연출 | 정예준
조연출 | 박정우
PD | 박정우
카메라 | 정예준
B CAM | 박정우
촬영 보조 | 이정호
조명 | 박정우, 정예준
오디오 | 박정우, 정예준
미술 | 정예준
편집 | 정예준
색감 보정 | 정예준
스토리보드 | 박정우
동화책 제작 | 박정우, 정예준
타이틀 디자인 | 정예준
[SUPPORT]
지도 교수 | 김한상
TA | 정재영
감사한 분들 | 김근경, 신명희, 이영민, 이하원, 정미정, 정윤지, 조연주, 최민성
제작 지원 | 아주대학교 RISE사업단, 경상남도거제교육지원청
장비 제공 | WECREATE
장소 제공 | 경기도 군포시 선약국, 경기도 수원시 아주대학교 체육관, 경상남도 사천시 라온어린이집`, feature: true, group: "Documentary", format: "Documentary", year: "2025", yt: "jYrDcXYjAgI", desc: "",
          stills: ["images/eyesclosed-1.jpg", "images/eyesclosed-2.jpg", "images/eyesclosed-3.jpg", "images/eyesclosed-4.jpg", "images/eyesclosed-5.jpg"] },
        { title: "미지의 세계를 포용하며", credits: `기획 | 예필름
제작 | 박정우, 정예준
촬영 | 정예준
드론 | 박정우
장소 지원 | 제주도, 수원시
번역 | 박수영
나레이션 | 박정우, 정예준
편집 | 정예준`, feature: true, group: "Documentary", format: "Poetic Documentary", year: "2024", yt: "vuvPIMzL4xg", desc: "",
          stills: ["images/embrace-1.jpg", "images/embrace-2.jpg", "images/embrace-3.jpg", "images/embrace-4.jpg", "images/embrace-5.jpg", "images/embrace-6.jpg", "images/embrace-7.jpg", "images/embrace-8.jpg"] }
      ]
    }
  ],

  /* ── Archive: 그 밖의 참여 작업 (목록으로만 표시) ── */
  archive: [
    { year: "2026", title: "[LG전자]  BOLD MOVE 아카이빙 필름", format: "Archive Film", role: "AD · PD", wip: true },
    { year: "2026", title: "레드아카데미", client: "팀프로젝트", format: "AI Drama Trailer", role: "제작", yt: "4peMRX9iVMI" },
    { year: "2026", title: "[ILLIT]  ‘BREAK EVEN’ Intro Design", format: "Teasing Video", role: "기획 · 연출 보조", yt: "-YuHyTD3a3s" },
    { year: "2026", title: "[백아연]  '들어봐'", format: "M/V Jacket Photo", role: "조명팀", yt: "ClbQHNIa2PM" },
    { year: "2026", title: "[내러티브룸]  The spaghetty story", format: "Teasing Video", role: "카메라팀", href: "https://www.youtube.com/@Narrativeroom_cjy/featured" },
    { year: "2026", title: "[SHAUN]  '일기장'", format: "Music Video", role: "카메라팀", yt: "O0diKBGKvMQ" },
    { year: "2025", title: "GATSBY 〈바람은 그를 비껴갔다〉", format: "Short-form", role: "기획 · 연출", href: "https://youtube.com/shorts/Hc3jACbADNg" },
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
  // lang: true 인 항목은 이력서에서 '어학' 칸으로, 나머지는 '자격' 칸으로 나뉩니다 (각각 최신 연도순)
  certificates: [
    { name: "JLPT N2 (상)", detail: "비즈니스 회화", date: "2024.08", onSite: true, lang: true },
    { name: "TOEIC (중)", detail: "일상 회화", date: "2026.05", onSite: true, lang: true },
    { name: "워드프로세서 1급", detail: "대한상공회의소", date: "2022.09", onSite: true },
    { name: "ITQ OA MASTER", detail: "한국생산성본부", date: "2022.10", onSite: true },
    { name: "ACA Premiere Pro", detail: "Adobe", date: "2022", onSite: true },
    { name: "무인동력비행장치 4종", detail: "DJI Mini 4 Pro 보유 · 운용", date: "2025.01", onSite: true },
    { name: "한국사능력검정 1급", detail: "국사편찬위원회", date: "2024.06", onSite: true },
    { name: "운전면허 2종 보통", detail: "장거리 운전 가능", date: "2021.02", onSite: true }
  ],
  // 교육 이수: 이력서에만 들어갑니다 (사이트에는 안 보임)
  training: [
    { year: "2026", issuer: "KTL 한국산업기술시험원", name: "공연자 안전교육 (스태프 및 작업자 과정) 수료" },
    { year: "2025", issuer: "경기평생기술학원", name: "건축도장기능사 자격증 취득 과정 수료" }
  ],
  military: { period: "2022.09 – 2024.06", detail: "공군 군사경찰 병장 만기전역" }
};
