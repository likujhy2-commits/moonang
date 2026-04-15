// ==============================
// 맛집 데이터
// ==============================
const restaurants = [
  // ── 서울 ──────────────────────
  {
    id: 1, region: 'seoul', regionLabel: '서울',
    city: '', name: '진주회관', category: '한식', emoji: '🥣',
    rating: 4.8,
    desc: '1960년대부터 이어진 전통 콩나물국밥집. 구수한 육수에 아삭한 콩나물이 어우러진 서울 대표 해장국.',
    address: '서울 중구 서소문로 47', hours: '07:00 – 21:00', price: '8,000원~',
    menu: '콩나물국밥, 수육, 설렁탕',
  },
  {
    id: 2, region: 'seoul', regionLabel: '서울',
    city: '', name: '광장시장 육회비빔밥', category: '한식', emoji: '🥗',
    rating: 4.7,
    desc: '서울 최대 전통시장 광장시장의 명물. 신선한 육회와 갖은 나물이 올라간 비빔밥으로 현지인·여행객 모두 즐겨 찾는 곳.',
    address: '서울 종로구 창경궁로 88', hours: '08:00 – 22:00', price: '10,000원~',
    menu: '육회비빔밥, 마약김밥, 빈대떡',
  },
  {
    id: 3, region: 'seoul', regionLabel: '서울',
    city: '', name: '을지면옥', category: '냉면', emoji: '🍜',
    rating: 4.9,
    desc: '1985년 개업, 서울 을지로 3가의 전설. 메밀 함량 높은 면발과 맑고 시원한 육수로 냉면 마니아들이 줄 서는 곳.',
    address: '서울 중구 을지로 49', hours: '11:30 – 21:00', price: '13,000원~',
    menu: '물냉면, 비빔냉면, 만두',
  },
  {
    id: 4, region: 'seoul', regionLabel: '서울',
    city: '', name: '오장동 함흥냉면', category: '냉면', emoji: '🍜',
    rating: 4.6,
    desc: '오장동 냉면 골목의 원조. 쫄깃한 함흥식 비빔냉면과 가자미식해 토핑이 특징.',
    address: '서울 중구 퇴계로 253', hours: '11:00 – 21:00', price: '12,000원~',
    menu: '비빔냉면, 회냉면, 수육',
  },
  {
    id: 5, region: 'seoul', regionLabel: '서울',
    city: '', name: '삼청동 수제비', category: '분식', emoji: '🥘',
    rating: 4.5,
    desc: '경복궁 인근 삼청동 골목의 인기 수제비 집. 쫄깃한 면발과 짬뽕국물 같은 칼칼한 육수가 인상적.',
    address: '서울 종로구 삼청로 101', hours: '11:00 – 20:30', price: '9,000원~',
    menu: '수제비, 칼국수, 도토리묵',
  },
  {
    id: 6, region: 'seoul', regionLabel: '서울',
    city: '', name: '이태원 경리단길 치맥', category: '치킨/맥주', emoji: '🍗',
    rating: 4.4,
    desc: '이태원 경리단길의 핫한 치킨 바. 한국식 양념치킨과 다양한 크래프트 맥주를 함께 즐길 수 있다.',
    address: '서울 용산구 회나무로 17', hours: '17:00 – 01:00', price: '20,000원~',
    menu: '양념치킨, 후라이드, 크래프트 맥주',
  },

  // ── 광역시: 부산 ──────────────
  {
    id: 7, region: 'metro', regionLabel: '부산', city: 'busan',
    name: '할매 돼지국밥', category: '한식', emoji: '🐷',
    rating: 4.9,
    desc: '부산 서면 돼지국밥 골목의 터줏대감. 진하고 뽀얀 국물에 부드러운 수육이 가득. 현지인이 손꼽는 부산 대표 맛집.',
    address: '부산 부산진구 서면로 68', hours: '06:00 – 22:00', price: '9,000원~',
    menu: '순대국밥, 돼지국밥, 수육',
  },
  {
    id: 8, region: 'metro', regionLabel: '부산', city: 'busan',
    name: '삼진어묵 본점', category: '분식', emoji: '🐟',
    rating: 4.7,
    desc: '1953년 창업, 부산 영도의 명물 어묵. 고소하고 탱탱한 수제 어묵을 현장에서 바로 즐길 수 있다.',
    address: '부산 영도구 태종로 115', hours: '09:00 – 19:00', price: '5,000원~',
    menu: '야채어묵, 새우어묵, 어묵탕',
  },
  {
    id: 9, region: 'metro', regionLabel: '부산', city: 'busan',
    name: '초량밀면', category: '밀면', emoji: '🍜',
    rating: 4.6,
    desc: '부산 토박이 음식 밀면의 정통 맛집. 쫄깃한 밀가루 면과 달큰 양념이 잘 어우러진다.',
    address: '부산 동구 초량중로 77', hours: '10:30 – 20:30', price: '8,000원~',
    menu: '비빔밀면, 물밀면, 수육',
  },
  {
    id: 10, region: 'metro', regionLabel: '인천', city: 'incheon',
    name: '공화춘 자장면', category: '중식', emoji: '🍝',
    rating: 4.8,
    desc: '한국 자장면의 발상지, 인천 차이나타운의 역사적인 중국 음식점. 달콤 짭조름한 정통 자장면을 맛볼 수 있다.',
    address: '인천 중구 차이나타운로 26', hours: '11:00 – 21:00', price: '9,000원~',
    menu: '자장면, 짬뽕, 탕수육',
  },
  {
    id: 11, region: 'metro', regionLabel: '인천', city: 'incheon',
    name: '소래포구 수산시장', category: '해산물', emoji: '🦀',
    rating: 4.6,
    desc: '소래포구 수산시장에서 즉석으로 맛보는 신선한 꽃게찜과 회. 활기 넘치는 어시장 분위기와 함께.',
    address: '인천 남동구 논현동 680', hours: '05:00 – 21:00', price: '20,000원~',
    menu: '꽃게찜, 꽃게무침, 생선회',
  },
  {
    id: 12, region: 'metro', regionLabel: '대구', city: 'daegu',
    name: '평화시장 닭똥집', category: '안주', emoji: '🍢',
    rating: 4.5,
    desc: '대구 평화시장 야시장의 명물. 바삭하게 튀긴 닭똥집에 매콤한 양념을 버무려낸 대구식 노포 야식.',
    address: '대구 북구 경대로 17길', hours: '17:00 – 01:00', price: '7,000원~',
    menu: '닭똥집, 닭발, 막창',
  },
  {
    id: 13, region: 'metro', regionLabel: '대구', city: 'daegu',
    name: '교동 찜갈비', category: '고기', emoji: '🥩',
    rating: 4.8,
    desc: '대구 교동 찜갈비 골목의 터줏대감. 부드럽게 쪄낸 갈비에 매콤달콤 양념이 배어든 대구식 찜갈비.',
    address: '대구 중구 국채보상로 545', hours: '11:00 – 22:00', price: '15,000원~',
    menu: '찜갈비, 갈비탕, 냉면',
  },
  {
    id: 14, region: 'metro', regionLabel: '대전', city: 'daejeon',
    name: '성심당 본점', category: '베이커리', emoji: '🍞',
    rating: 4.9,
    desc: '대전을 대표하는 70년 역사의 베이커리. 튀김소보로와 부추빵은 대전 여행 필수 기념품.',
    address: '대전 중구 대종로 480', hours: '08:00 – 22:00', price: '3,000원~',
    menu: '튀김소보로, 부추빵, 케이크',
  },
  {
    id: 15, region: 'metro', regionLabel: '대전', city: 'daejeon',
    name: '가수원 두부두루치기', category: '한식', emoji: '🥘',
    rating: 4.6,
    desc: '대전 서구 가수원동의 향토 음식. 칼칼한 양념에 두부와 채소가 어우러진 두루치기로 소주 한 잔이 절로.',
    address: '대전 서구 가수원로 181', hours: '11:00 – 21:30', price: '10,000원~',
    menu: '두부두루치기, 된장찌개, 막걸리',
  },
  {
    id: 16, region: 'metro', regionLabel: '광주', city: 'gwangju',
    name: '무등산 보리밥', category: '한식', emoji: '🌿',
    rating: 4.7,
    desc: '무등산 자락의 소박한 보리밥 집. 갖은 나물과 된장, 매콤한 고추장을 넣어 쓱쓱 비벼 먹는 광주식 보리밥.',
    address: '광주 북구 무등로 1166', hours: '10:00 – 20:00', price: '9,000원~',
    menu: '보리밥, 산채비빔밥, 된장찌개',
  },
  {
    id: 17, region: 'metro', regionLabel: '울산', city: 'ulsan',
    name: '언양 불고기', category: '고기', emoji: '🥩',
    rating: 4.8,
    desc: '울산 언양읍의 전통 불고기. 얇게 썬 소고기를 숯불에 직접 구워 먹는 향토 방식으로 풍미가 진하다.',
    address: '울산 울주군 언양읍 서부리 200', hours: '11:30 – 21:00', price: '18,000원~',
    menu: '언양불고기, 육회, 냉면',
  },

  // ── 전라도 ──────────────────────
  {
    id: 18, region: 'jeolla', regionLabel: '전주',
    city: '', name: '한국집 전주비빔밥', category: '한식', emoji: '🥗',
    rating: 4.9,
    desc: '1952년 개업한 전주비빔밥의 성지. 황포묵, 콩나물, 육회, 고추장 등 20가지 재료를 넣은 정통 전주비빔밥.',
    address: '전북 전주시 완산구 태조로 15', hours: '11:00 – 21:00', price: '14,000원~',
    menu: '전주비빔밥, 콩나물국밥, 육회비빔밥',
  },
  {
    id: 19, region: 'jeolla', regionLabel: '전주',
    city: '', name: '삼백집 콩나물국밥', category: '해장국', emoji: '🥣',
    rating: 4.8,
    desc: '전주 한옥마을 인근 60년 역사의 콩나물국밥. 아삭한 콩나물과 구수한 국물에 계란 노른자가 포인트.',
    address: '전북 전주시 완산구 전주객사1길 5', hours: '07:00 – 21:00', price: '8,000원~',
    menu: '콩나물국밥, 수육',
  },
  {
    id: 20, region: 'jeolla', regionLabel: '순천',
    city: '', name: '청암 짱뚱어탕', category: '해산물', emoji: '🐟',
    rating: 4.6,
    desc: '전남 순천만 갯벌에서 잡은 짱뚱어로 끓인 향토 국물 요리. 개운하고 시원한 국물이 일품.',
    address: '전남 순천시 해룡면 해룡로 145', hours: '10:00 – 20:00', price: '12,000원~',
    menu: '짱뚱어탕, 장어구이, 갯가재찜',
  },
  {
    id: 21, region: 'jeolla', regionLabel: '목포',
    city: '', name: '목포항 낙지골목', category: '해산물', emoji: '🐙',
    rating: 4.7,
    desc: '목포의 명물 세발낙지 골목. 살아 있는 세발낙지를 초장에 찍어 먹거나 연포탕으로 즐기는 전남 대표 먹거리.',
    address: '전남 목포시 영산로 13', hours: '10:00 – 21:30', price: '15,000원~',
    menu: '산낙지, 낙지연포탕, 낙지볶음',
  },
  {
    id: 22, region: 'jeolla', regionLabel: '여수',
    city: '', name: '여수 게장 백반', category: '한식', emoji: '🦀',
    rating: 4.8,
    desc: '여수 앞바다 꽃게로 담근 간장게장과 양념게장을 밑반찬으로 내주는 명물 백반. 밥 도둑이 따로 없다.',
    address: '전남 여수시 돌산읍 우두길 20', hours: '11:00 – 21:00', price: '15,000원~',
    menu: '게장백반, 갈치조림, 전복죽',
  },

  // ── 경상도 ──────────────────────
  {
    id: 23, region: 'gyeongsan', regionLabel: '경주',
    city: '', name: '경주 교리 김밥', category: '분식', emoji: '🍱',
    rating: 4.8,
    desc: '경주 교리 마을의 전통 손 김밥. 두꺼운 통김밥으로 유명하며, 관광객과 현지인 모두 필수로 들르는 맛집.',
    address: '경북 경주시 교동 64-4', hours: '07:00 – 20:00', price: '3,500원~',
    menu: '통김밥, 참치김밥, 떡볶이',
  },
  {
    id: 24, region: 'gyeongsan', regionLabel: '경주',
    city: '', name: '황남빵 본점', category: '베이커리', emoji: '🥮',
    rating: 4.7,
    desc: '1939년에 시작된 경주의 국민 간식. 앙금이 가득한 황남빵은 경주 여행의 필수 기념품.',
    address: '경북 경주시 태종로 783', hours: '09:00 – 21:00', price: '1,500원~',
    menu: '황남빵',
  },
  {
    id: 25, region: 'gyeongsan', regionLabel: '안동',
    city: '', name: '까치구멍집 간고등어', category: '한식', emoji: '🐟',
    rating: 4.6,
    desc: '안동 구시장 인근의 간고등어 명가. 소금에 절인 고등어를 석쇠에 구워 특유의 짭조름하고 고소한 맛이 일품.',
    address: '경북 안동시 옥동 625', hours: '11:00 – 21:00', price: '12,000원~',
    menu: '간고등어구이, 찜닭, 헛제삿밥',
  },
  {
    id: 26, region: 'gyeongsan', regionLabel: '통영',
    city: '', name: '통영 꿀빵', category: '베이커리', emoji: '🍩',
    rating: 4.5,
    desc: '통영의 달콤한 명물 꿀빵. 팥소 위에 꿀을 발라 바삭하게 구운 통영식 찐빵으로 항구 분위기와 함께 즐기면 더욱 맛있다.',
    address: '경남 통영시 중앙시장로 63', hours: '08:00 – 19:00', price: '2,000원~',
    menu: '꿀빵, 충무김밥',
  },
  {
    id: 27, region: 'gyeongsan', regionLabel: '통영',
    city: '', name: '충무 할매 김밥', category: '분식', emoji: '🍱',
    rating: 4.8,
    desc: '통영(구 충무)의 향토 음식 충무김밥. 잘게 썬 꼴뚜기 무김치와 오징어무침을 곁들인 작은 김밥이 특징.',
    address: '경남 통영시 항남동 256', hours: '09:00 – 20:00', price: '6,000원~',
    menu: '충무김밥, 꼴뚜기무침',
  },

  // ── 강원도 ──────────────────────
  {
    id: 28, region: 'gangwon', regionLabel: '춘천',
    city: '', name: '명동 닭갈비', category: '닭갈비', emoji: '🍗',
    rating: 4.8,
    desc: '춘천 닭갈비의 원조 거리. 양념 닭갈비를 철판에 볶아 마지막에 볶음밥까지 즐기는 춘천 여행 필수 코스.',
    address: '강원 춘천시 명동길 5', hours: '11:00 – 22:00', price: '13,000원~',
    menu: '닭갈비, 막국수, 볶음밥',
  },
  {
    id: 29, region: 'gangwon', regionLabel: '속초',
    city: '', name: '속초 아바이 마을 순대', category: '분식', emoji: '🌭',
    rating: 4.7,
    desc: '속초 아바이 마을의 명물. 함경도 실향민이 전한 아바이순대와 오징어순대가 유명하며, 갯배를 타고 건너가는 색다른 경험도 있다.',
    address: '강원 속초시 청호동 88', hours: '09:00 – 20:00', price: '8,000원~',
    menu: '아바이순대, 오징어순대, 순댓국',
  },
  {
    id: 30, region: 'gangwon', regionLabel: '강릉',
    city: '', name: '강릉 초당 순두부', category: '한식', emoji: '🫕',
    rating: 4.8,
    desc: '동해 바닷물로 만든 강릉 초당 순두부. 고소하고 부드러운 맛이 일품이며, 갓 나온 따끈한 두부와 함께 아침 식사로 그만.',
    address: '강원 강릉시 초당순두부길 77', hours: '07:00 – 20:00', price: '10,000원~',
    menu: '순두부찌개, 두부구이, 콩국수',
  },
  {
    id: 31, region: 'gangwon', regionLabel: '정선',
    city: '', name: '정선 5일장 곤드레밥', category: '한식', emoji: '🌿',
    rating: 4.6,
    desc: '정선 오일장에서 맛보는 곤드레나물밥. 강원도 산지의 신선한 곤드레나물을 넣어 지은 구수한 밥 한 공기.',
    address: '강원 정선군 정선읍 정선로 1316', hours: '09:00 – 18:00', price: '9,000원~',
    menu: '곤드레밥, 메밀전병, 막장찌개',
  },

  // ── 제주도 ──────────────────────
  {
    id: 32, region: 'jeju', regionLabel: '제주',
    city: '', name: '돔베기 흑돼지', category: '고기', emoji: '🐷',
    rating: 4.9,
    desc: '제주 흑돼지를 나무 도마(돔베)에 썰어 내어 먹는 제주 전통 방식. 쫄깃하고 고소한 제주 흑돼지의 진미.',
    address: '제주 제주시 삼도2동 925', hours: '12:00 – 22:00', price: '25,000원~',
    menu: '오겹살, 항정살, 돔베고기',
  },
  {
    id: 33, region: 'jeju', regionLabel: '제주',
    city: '', name: '자매국수', category: '국수', emoji: '🍜',
    rating: 4.7,
    desc: '제주 고기국수의 명소. 돼지뼈로 우린 진한 국물에 쫄깃한 면이 들어간 제주 향토 음식으로 제주시민 소울푸드.',
    address: '제주 제주시 삼성로 67', hours: '08:00 – 16:00 (재료소진 마감)', price: '9,000원~',
    menu: '고기국수, 비빔국수',
  },
  {
    id: 34, region: 'jeju', regionLabel: '서귀포',
    city: '', name: '이어도 해산물', category: '해산물', emoji: '🦑',
    rating: 4.8,
    desc: '서귀포 매일올레시장 인근 신선한 해산물 전문점. 문어, 성게, 전복 등 제주 바다 직송 해산물 한상차림.',
    address: '제주 서귀포시 중앙로 62', hours: '11:00 – 21:00', price: '30,000원~',
    menu: '성게국밥, 전복죽, 해산물 모둠',
  },
  {
    id: 35, region: 'jeju', regionLabel: '제주',
    city: '', name: '한라산 오메기떡', category: '디저트', emoji: '🍡',
    rating: 4.5,
    desc: '제주 전통 쌀인 차좁쌀로 만든 오메기떡. 쫄깃한 식감과 팥소가 조화로운 제주 전통 간식.',
    address: '제주 제주시 칠성로 3길 18', hours: '10:00 – 20:00', price: '3,000원~',
    menu: '오메기떡, 빙떡, 제주차',
  },
  {
    id: 36, region: 'jeju', regionLabel: '서귀포',
    city: '', name: '서귀포 갈치조림', category: '한식', emoji: '🐟',
    rating: 4.7,
    desc: '제주 서귀포 앞바다 은빛 갈치로 만든 매콤한 갈치조림. 제주 갈치는 육질이 두껍고 기름져 본토와 맛이 다르다.',
    address: '제주 서귀포시 서문로 30', hours: '11:30 – 21:00', price: '18,000원~',
    menu: '갈치조림, 갈치구이, 갈치국',
  },

  // ===== 여수 추가 =====
  {
    id: 37, region: 'jeolla', regionLabel: '여수',
    city: '', name: '광장국밥', category: '국밥', emoji: '🥣',
    rating: 4.6,
    desc: '여수 이순신광장 인근 로컬 국밥 명소. 진하고 구수한 국물에 든든한 한 끼.',
    address: '전남 여수시 통제영5길 3 1층', hours: '07:00 – 21:00', price: '8,000원~',
    menu: '국밥, 순대국밥',
  },
  {
    id: 38, region: 'jeolla', regionLabel: '여수',
    city: '', name: '광장서대회', category: '해산물', emoji: '🐟',
    rating: 4.7,
    desc: '여수 명물 서대회무침 전문점. 새콤달콤하게 무친 서대회는 여수 여행의 필수 코스.',
    address: '전남 여수시 이순신광장로 196 1층', hours: '11:00 – 21:00', price: '15,000원~',
    menu: '서대회무침, 서대구이',
  },
  {
    id: 39, region: 'jeolla', regionLabel: '여수',
    city: '', name: '돌문어상회', category: '해산물', emoji: '🐙',
    rating: 4.7,
    desc: '여수 앞바다 신선한 돌문어 전문점. 탱탱하고 쫄깃한 돌문어숙회와 볶음이 일품.',
    address: '전남 여수시 하멜로 80 1-2층', hours: '11:30 – 22:00', price: '20,000원~',
    menu: '돌문어숙회, 돌문어볶음, 돌문어라면',
  },
  {
    id: 40, region: 'jeolla', regionLabel: '여수',
    city: '', name: '깨비게장', category: '게장', emoji: '🦀',
    rating: 4.8,
    desc: '여수식 게장 전문점. 간장게장과 양념게장이 함께 나오는 밥 도둑 한상.',
    address: '전남 여수시 봉산남3길 23-8 1-2층', hours: '11:00 – 21:00', price: '15,000원~',
    menu: '간장게장, 양념게장, 게장백반',
  },
  {
    id: 41, region: 'jeolla', regionLabel: '여수',
    city: '', name: '황가네하모', category: '해산물', emoji: '🐟',
    rating: 4.7,
    desc: '여수 특산 하모(갯장어) 전문 맛집. 하모 사시미와 샤브샤브가 대표 메뉴로 여름철 별미.',
    address: '전남 여수시 남산남1길 20-1', hours: '11:00 – 21:30', price: '25,000원~',
    menu: '하모사시미, 하모샤브샤브, 하모구이',
  },

  // ===== 전주 추가 =====
  {
    id: 42, region: 'jeolla', regionLabel: '전주',
    city: '', name: '조점례남문피순대', category: '순대', emoji: '🫕',
    rating: 4.8,
    desc: '전주 남문시장 대표 순대 명가. 오랜 전통의 피순대와 순대국밥은 전주 여행 필수 먹거리.',
    address: '전북특별자치도 전주시 완산구 풍남문2길 39', hours: '09:00 – 20:00', price: '7,000원~',
    menu: '피순대, 순대국밥, 모둠순대',
  },
  {
    id: 43, region: 'jeolla', regionLabel: '전주',
    city: '', name: '전주왱이콩나물국밥', category: '해장국', emoji: '🥣',
    rating: 4.7,
    desc: '전주식 콩나물국밥의 정통 맛집. 아삭한 콩나물에 날계란을 넣어 비벼 먹는 전주식 아침 밥상.',
    address: '전북특별자치도 전주시 완산구 동문길 88 1층', hours: '07:00 – 21:00', price: '8,000원~',
    menu: '콩나물국밥, 모둠국밥',
  },
  {
    id: 44, region: 'jeolla', regionLabel: '전주',
    city: '', name: '고속반점', category: '중식', emoji: '🍜',
    rating: 4.6,
    desc: '전주 금암동의 오래된 중국 음식점. 구수하고 진한 자장면과 짬뽕이 현지인들에게 오래 사랑받는 로컬 맛집.',
    address: '전북특별자치도 전주시 덕진구 용산1길 12', hours: '11:00 – 21:00', price: '7,000원~',
    menu: '자장면, 짬뽕, 탕수육',
  },
  {
    id: 45, region: 'jeolla', regionLabel: '전주',
    city: '', name: '훈희국수', category: '국수', emoji: '🍜',
    rating: 4.5,
    desc: '전주 우아동의 소박한 잔치국수 집. 깔끔한 멸치 육수에 쫄깃한 면발이 어우러진 정겨운 한 그릇.',
    address: '전북 전주시 덕진구 우아8길 8 1층', hours: '11:00 – 20:00', price: '5,000원~',
    menu: '잔치국수, 비빔국수, 만두',
  },

  // ===== 목포 추가 =====
  {
    id: 46, region: 'jeolla', regionLabel: '목포',
    city: '', name: '해빔 목포본점', category: '해산물', emoji: '🦑',
    rating: 4.7,
    desc: '목포 미항 근처 신선한 해산물 한상. 낙지·꽃게·갑오징어 등 다양한 서해 해산물을 즐길 수 있는 목포 인기 맛집.',
    address: '전남 목포시 미항로 83 1층', hours: '11:00 – 21:30', price: '25,000원~',
    menu: '해산물모둠, 낙지볶음, 꽃게탕',
  },
  {
    id: 47, region: 'jeolla', regionLabel: '목포',
    city: '', name: '백성식당', category: '한식', emoji: '🍽️',
    rating: 4.5,
    desc: '목포 현지인이 즐겨 찾는 백반 식당. 푸짐한 반찬과 함께 나오는 정갈한 남도식 밥상.',
    address: '전남 목포시 번화로 68', hours: '08:00 – 21:00', price: '10,000원~',
    menu: '백반, 생선조림, 제육볶음',
  },

  // ===== 광양 추가 =====
  {
    id: 48, region: 'jeolla', regionLabel: '광양',
    city: '', name: '장원회관', category: '불고기', emoji: '🥩',
    rating: 4.8,
    desc: '광양 전통 숯불 불고기의 명가. 참나무 숯불에 구워 먹는 광양식 불고기는 전국 3대 불고기 중 하나.',
    address: '전남 광양시 광양읍 매천로 821-5', hours: '11:00 – 21:30', price: '15,000원~',
    menu: '광양불고기, 불고기전골, 된장찌개',
  },
  {
    id: 49, region: 'jeolla', regionLabel: '광양',
    city: '', name: '진선 재첩식당', category: '재첩요리', emoji: '🦪',
    rating: 4.6,
    desc: '섬진강 재첩의 정취를 담은 재첩 전문점. 시원한 재첩국과 새콤한 재첩회무침이 입맛을 살린다.',
    address: '전남 광양시 진월면 선소중앙길 43 1층', hours: '10:00 – 20:00', price: '12,000원~',
    menu: '재첩국, 재첩회무침, 재첩비빔밥',
  },

  // ===== 순천 추가 =====
  {
    id: 50, region: 'jeolla', regionLabel: '순천',
    city: '', name: '금수저', category: '백반', emoji: '🍱',
    rating: 4.6,
    desc: '순천 연향동의 정갈한 백반 식당. 매일 바뀌는 반찬과 함께 정성스럽게 차려지는 가정식 밥상.',
    address: '전남 순천시 도장길 11', hours: '11:00 – 20:00', price: '10,000원~',
    menu: '한상차림백반, 갈치조림, 생선구이',
  },
  {
    id: 51, region: 'jeolla', regionLabel: '순천',
    city: '', name: '거시기식당', category: '한식', emoji: '🍽️',
    rating: 4.5,
    desc: '순천의 정겨운 남도 밥집. 갖은 나물과 남도식 밑반찬이 한가득 펼쳐지는 소박한 밥상.',
    address: '전남 순천시 저전길 15', hours: '11:00 – 20:30', price: '9,000원~',
    menu: '백반, 비빔밥, 순대국',
  },

  // ===== 군산 추가 =====
  {
    id: 52, region: 'jeolla', regionLabel: '군산',
    city: '', name: '이성당', category: '베이커리', emoji: '🍞',
    rating: 4.9,
    desc: '1945년 창업, 한국에서 가장 오래된 빵집. 팥앙금이 가득한 단팥빵과 야채빵이 대표 메뉴. 군산 여행 필수 코스.',
    address: '전북 군산시 중앙로 177', hours: '08:00 – 22:00', price: '1,500원~',
    menu: '단팥빵, 야채빵, 크림빵',
  },
  {
    id: 53, region: 'jeolla', regionLabel: '군산',
    city: '', name: '순희네생선집', category: '생선요리', emoji: '🐟',
    rating: 4.7,
    desc: '군산 월명동의 인기 생선 구이 집. 신선한 생선을 숯불에 구워내는 고소하고 담백한 맛이 일품.',
    address: '전북특별자치도 군산시 구영5길 41 1층', hours: '11:00 – 21:00', price: '12,000원~',
    menu: '생선구이, 생선조림, 백반',
  },

  // ===== 익산 추가 =====
  {
    id: 54, region: 'jeolla', regionLabel: '익산',
    city: '', name: '진희닭도리탕', category: '닭요리', emoji: '🍗',
    rating: 4.6,
    desc: '익산 중앙로의 매콤한 닭도리탕 명가. 푸짐한 양에 칼칼한 양념이 밥 한 그릇 뚝딱하게 만드는 로컬 맛집.',
    address: '전북특별자치도 익산시 중앙로 22-34 1층', hours: '11:00 – 21:00', price: '35,000원~(2인)',
    menu: '닭도리탕, 닭볶음',
  },

  // ===== 기타 전라도 =====
  {
    id: 55, region: 'jeolla', regionLabel: '함평',
    city: '', name: '전주식당 (함평 육사시미)', category: '육회', emoji: '🥩',
    rating: 4.7,
    desc: '함평의 숨겨진 보물. 신선한 한우 육사시미(육회)를 전문으로 하며 함평 한우의 진한 맛을 느낄 수 있다.',
    address: '전남 함평군 함평읍 신기산길 22', hours: '11:00 – 21:00', price: '20,000원~',
    menu: '육사시미, 육회비빔밥, 한우구이',
  },
  {
    id: 56, region: 'jeolla', regionLabel: '영광',
    city: '', name: '한성식당', category: '해산물', emoji: '🍲',
    rating: 4.7,
    desc: '영광 백수해안도로 인근 백합죽 명가. 서해 갯벌의 싱싱한 백합으로 끓인 고소하고 시원한 죽.',
    address: '전남 영광군 백수읍 천마길 12 1층', hours: '09:00 – 20:00', price: '12,000원~',
    menu: '백합죽, 백합탕, 백합무침',
  },
  {
    id: 57, region: 'jeolla', regionLabel: '영광',
    city: '', name: '놀부네', category: '생선요리', emoji: '🐟',
    rating: 4.6,
    desc: '영광 덕자(병어) 조림의 명가. 달고 고소한 덕자조림은 영광에서만 맛볼 수 있는 특별한 향토 음식.',
    address: '전남 영광군 영광읍 천년로11길 26-1 1층', hours: '11:00 – 21:00', price: '15,000원~',
    menu: '덕자조림, 덕자구이, 백반',
  },
  {
    id: 58, region: 'jeolla', regionLabel: '담양',
    city: '', name: '목화식당', category: '한식', emoji: '🌿',
    rating: 4.5,
    desc: '담양의 정겨운 로컬 한식당. 담양 특산물을 활용한 남도식 정갈한 밥상을 선보이는 현지인 단골 식당.',
    address: '전남 담양군 담양읍 천변5길 3', hours: '11:00 – 21:00', price: '10,000원~',
    menu: '한정식, 죽순요리, 백반',
  },

  // ===== 광주 추가 (광역시) =====
  {
    id: 59, region: 'metro', regionLabel: '광주', city: 'gwangju',
    name: '엄마네돼지찌개', category: '찌개', emoji: '🍲',
    rating: 4.7,
    desc: '광주 동구 문화전당 인근 돼지찌개 전문점. 진하고 칼칼한 국물에 부드러운 돼지고기가 어우러진 광주 로컬 맛집.',
    address: '광주 동구 문화전당로23번길 33 1층', hours: '11:00 – 21:00', price: '8,000원~',
    menu: '돼지찌개, 두루치기, 제육볶음',
  },
  {
    id: 60, region: 'metro', regionLabel: '광주', city: 'gwangju',
    name: '골메골', category: '찌개', emoji: '🥘',
    rating: 4.6,
    desc: '광주 광산구의 애호박찌개 전문점. 구수하고 담백한 애호박찌개는 광주 현지인들이 즐겨 찾는 향토 음식.',
    address: '광주 광산구 평동로 424 1층', hours: '11:00 – 21:00', price: '8,000원~',
    menu: '애호박찌개, 된장찌개, 백반',
  },
  {
    id: 61, region: 'metro', regionLabel: '광주', city: 'gwangju',
    name: '원조두유', category: '두부/두유', emoji: '🥛',
    rating: 4.5,
    desc: '광주 산수동의 전통 두유 전문점. 국산 콩으로 만든 고소한 두유와 두부요리로 건강한 한 끼.',
    address: '광주 동구 무등로 513-2', hours: '08:00 – 20:00', price: '5,000원~',
    menu: '두유, 순두부, 콩국수',
  },
];

// ==============================
// 카카오 로컬 API
// ==============================
const KAKAO_REST_API_KEY = 'YOUR_KAKAO_REST_API_KEY'; // 카카오 REST API 키 입력

async function fetchKakaoPlace(name, address) {
  const fallbackUrl = `https://map.kakao.com/?q=${encodeURIComponent(name)}`;
  if (KAKAO_REST_API_KEY === 'YOUR_KAKAO_REST_API_KEY') {
    return { place_url: fallbackUrl, place_name: name };
  }
  try {
    const q = encodeURIComponent(`${name} ${address}`);
    const res = await fetch(
      `https://dapi.kakao.com/v2/local/search/keyword.json?query=${q}&size=1`,
      { headers: { Authorization: `KakaoAK ${KAKAO_REST_API_KEY}` } }
    );
    const data = await res.json();
    if (data.documents?.[0]) return data.documents[0];
  } catch {}
  return { place_url: fallbackUrl, place_name: name };
}

// ==============================
// 평점 직접 관리 (localStorage)
// ==============================
function getRatingOverrides() {
  try { return JSON.parse(localStorage.getItem('matzip_ratings') || '{}'); }
  catch { return {}; }
}

function saveRatingOverride(id, rating) {
  const o = getRatingOverrides();
  o[id] = parseFloat(rating);
  localStorage.setItem('matzip_ratings', JSON.stringify(o));
}

function getEffectiveRating(r) {
  const o = getRatingOverrides();
  return o[r.id] !== undefined ? o[r.id] : r.rating;
}

// 관리자 모드: URL에 ?admin=1 추가
let isAdmin = new URLSearchParams(location.search).has('admin');

// ==============================
// 상태
// ==============================
let currentRegion = 'all';
let currentMetro = 'all';
let searchQuery = '';

// ==============================
// 지역명 매핑
// ==============================
const regionTitles = {
  all: '전체 맛집',
  seoul: '서울 맛집',
  metro: '광역시 맛집',
  jeolla: '전라도 맛집',
  gyeongsan: '경상도 맛집',
  gangwon: '강원도 맛집',
  jeju: '제주도 맛집',
};

// ==============================
// 필터링
// ==============================
function getFiltered() {
  return restaurants.filter(r => {
    const matchRegion = currentRegion === 'all' || r.region === currentRegion;
    const matchMetro = currentRegion !== 'metro' || currentMetro === 'all' || r.city === currentMetro;
    const q = searchQuery.toLowerCase();
    const matchSearch = !q ||
      r.name.includes(q) ||
      r.category.toLowerCase().includes(q) ||
      r.regionLabel.includes(q) ||
      r.desc.includes(q) ||
      (r.menu && r.menu.includes(q));
    return matchRegion && matchMetro && matchSearch;
  });
}

// ==============================
// 별점 렌더
// ==============================
function renderStars(rating) {
  const full = Math.floor(rating);
  const half = rating % 1 >= 0.5 ? 1 : 0;
  let stars = '★'.repeat(full) + (half ? '½' : '') + '☆'.repeat(5 - full - half);
  return `<span class="card-rating">${stars} ${rating.toFixed(1)}</span>`;
}

function renderAdminBadge(id) {
  const o = getRatingOverrides();
  const isOverridden = o[id] !== undefined;
  return isAdmin
    ? `<span class="admin-badge">${isOverridden ? '✏️ 수정됨' : '➕ 미입력'}</span>`
    : '';
}

// ==============================
// 카드 렌더
// ==============================
function renderCards() {
  const grid = document.getElementById('cardGrid');
  const empty = document.getElementById('emptyState');
  const countEl = document.getElementById('resultCount');
  const titleEl = document.getElementById('regionTitle');

  const filtered = getFiltered();

  titleEl.textContent = regionTitles[currentRegion] || '맛집';
  countEl.textContent = `총 ${filtered.length}곳`;

  if (filtered.length === 0) {
    grid.innerHTML = '';
    empty.style.display = 'block';
    return;
  }

  empty.style.display = 'none';
  grid.innerHTML = filtered.map(r => {
    const rating = getEffectiveRating(r);
    return `
    <article class="restaurant-card" onclick="openModal(${r.id})">
      <div class="card-thumb">${r.emoji}</div>
      <div class="card-body">
        <div class="card-tags">
          <span class="tag tag-region">${r.regionLabel}</span>
          <span class="tag tag-category">${r.category}</span>
          ${renderAdminBadge(r.id)}
        </div>
        <h3 class="card-name">${r.name}</h3>
        <p class="card-desc">${r.desc}</p>
        <div class="card-footer">
          ${renderStars(rating)}
          <span class="card-addr">${r.address}</span>
        </div>
      </div>
    </article>
  `;
  }).join('');
}

// ==============================
// 모달
// ==============================
function renderModalContent(r, kakaoUrl) {
  const rating = getEffectiveRating(r);
  const adminSection = isAdmin ? `
    <div class="admin-edit-section">
      <label class="admin-edit-label">📝 네이버 평점 직접 입력 (네이버지도 확인 후 입력)</label>
      <div class="admin-edit-row">
        <input type="number" id="adminRatingInput" class="admin-rating-input"
          min="0" max="5" step="0.1" value="${rating.toFixed(1)}" placeholder="0.0 ~ 5.0">
        <button class="admin-save-btn" onclick="saveAdminRating(${r.id})">저장</button>
      </div>
      <a href="https://map.naver.com/v5/search/${encodeURIComponent(r.name)}" target="_blank" class="naver-check-link">네이버지도에서 평점 확인 →</a>
    </div>
  ` : '';

  return `
    <div class="modal-thumb">${r.emoji}</div>
    <div class="modal-info">
      <div class="modal-tags">
        <span class="tag tag-region">${r.regionLabel}</span>
        <span class="tag tag-category">${r.category}</span>
      </div>
      <h2 class="modal-name">${r.name}</h2>
      <div class="modal-rating">★ ${rating.toFixed(1)} / 5.0</div>
      <p class="modal-desc">${r.desc}</p>
      <div class="modal-details">
        <div class="modal-detail-row">
          <span class="modal-detail-icon">📍</span>
          <span class="modal-detail-label">주소</span>
          <span class="modal-detail-value">${r.address}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-icon">🕐</span>
          <span class="modal-detail-label">영업시간</span>
          <span class="modal-detail-value">${r.hours}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-icon">💰</span>
          <span class="modal-detail-label">가격대</span>
          <span class="modal-detail-value">${r.price}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-icon">🍴</span>
          <span class="modal-detail-label">대표메뉴</span>
          <span class="modal-detail-value">${r.menu}</span>
        </div>
        <div class="modal-detail-row">
          <span class="modal-detail-icon">🗺️</span>
          <span class="modal-detail-label">카카오맵</span>
          <span class="modal-detail-value"><a href="${kakaoUrl}" target="_blank" class="kakao-link">카카오맵에서 보기 →</a></span>
        </div>
      </div>
      ${adminSection}
    </div>
  `;
}

async function openModal(id) {
  const r = restaurants.find(x => x.id === id);
  if (!r) return;

  const kakaoFallback = `https://map.kakao.com/?q=${encodeURIComponent(r.name)}`;
  document.getElementById('modalBody').innerHTML = renderModalContent(r, kakaoFallback);
  document.getElementById('modalOverlay').classList.add('open');

  const place = await fetchKakaoPlace(r.name, r.address);
  if (place?.place_url) {
    document.getElementById('modalBody').innerHTML = renderModalContent(r, place.place_url);
  }
}

function saveAdminRating(id) {
  const input = document.getElementById('adminRatingInput');
  const val = parseFloat(input.value);
  if (isNaN(val) || val < 0 || val > 5) {
    alert('0.0 ~ 5.0 사이 숫자를 입력해주세요');
    return;
  }
  saveRatingOverride(id, val);
  renderCards();
  const r = restaurants.find(x => x.id === id);
  document.getElementById('modalBody').innerHTML = renderModalContent(r, `https://map.kakao.com/?q=${encodeURIComponent(r.name)}`);
  alert(`평점 ${val.toFixed(1)} 저장 완료!`);
}

function closeModal() {
  document.getElementById('modalOverlay').classList.remove('open');
}

// ==============================
// 이벤트 바인딩
// ==============================
document.querySelectorAll('.region-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.region-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentRegion = btn.dataset.region;
    currentMetro = 'all';

    // 광역시 서브필터 토글
    const metroFilter = document.getElementById('metroFilter');
    if (currentRegion === 'metro') {
      metroFilter.classList.add('visible');
    } else {
      metroFilter.classList.remove('visible');
    }

    // 광역시 버튼 초기화
    document.querySelectorAll('.metro-btn').forEach(b => b.classList.remove('active'));
    document.querySelector('.metro-btn[data-metro="all"]').classList.add('active');

    renderCards();
  });
});

document.querySelectorAll('.metro-btn').forEach(btn => {
  btn.addEventListener('click', () => {
    document.querySelectorAll('.metro-btn').forEach(b => b.classList.remove('active'));
    btn.classList.add('active');
    currentMetro = btn.dataset.metro;
    renderCards();
  });
});

document.getElementById('searchInput').addEventListener('input', e => {
  searchQuery = e.target.value;
  renderCards();
});

document.getElementById('modalClose').addEventListener('click', closeModal);
document.getElementById('modalOverlay').addEventListener('click', e => {
  if (e.target === document.getElementById('modalOverlay')) closeModal();
});

document.addEventListener('keydown', e => {
  if (e.key === 'Escape') closeModal();
});

// ==============================
// 초기 렌더
// ==============================
renderCards();
