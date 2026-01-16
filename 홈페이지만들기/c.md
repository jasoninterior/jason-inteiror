claude code 사용해서 정리

## 홈페이지 작업지침
히어로섹션 작업지침 : Create a modern, minimal hero section for an interior design studio homepage. Use a split layout with the main headline and subheadline on the left, and a large interior project photo on the right. Include one primary CTA button (‘Request a Quote’) and one secondary link (‘View Portfolio’). The style should be clean, with lots of white space, soft neutral colors, and elegant sans-serif typography. Make it fully responsive and use semantic HTML Design a full-width hero section with a large background image of a modern living room, a strong centered headline, a short subheading, and a prominent call-to-action button. Add a subtle scroll indicator at the bottom of the hero that encourages users to explore the projects below.

홈페이지 전체 구성을 확인하여 비슷한 구조로 작업해주세요. 참고 사이트 : https://regrocery.co/


## 스킬 설계
설계원칙 : https://code.claude.com/docs/ko/skills 참고

## 에이전트 설계원칙
https://code.claude.com/docs/en/sub-agents 클로드 코드의 가이드라인을 참고해서 작업해주세요

## Jason Interior 홈페이지 제작 프롬프트
1. 기술 스택 및 전체 레이아웃
기술 스택

React (Single Page Application)
Tailwind CSS (유틸리티 클래스)

레이아웃 방향성

데스크톱 우선, 반응형 (태블릿/모바일 적응)
전체 배경: 라이트 톤 (거의 화이트 또는 매우 밝은 그레이)
텍스트: 고대비 다크 컬러
악센트 컬러: 최소화
큰 화면에서 고정 너비 중앙 정렬, 충분한 여백

디자인 철학

깔끔하고 세련된 갤러리 느낌
여백 강조
미묘한 모션
큰 이미지 중심


2. 헤더 및 상단 네비게이션
구조

위치: 최상단
레이아웃: 수평형 바

왼쪽 영역

"Jason Interior" 로고/워드마크
스타일: 심플하고 모던한 로고타입

오른쪽 영역

언어 선택: "EN" / "KR" (영어/한국어)
"Login" 텍스트 버튼
컴팩트한 컨트롤 그룹 형태

스타일링

슬림한 높이
하단에 미묘한 여백
무거운 테두리 없음


3. 컨셉 탭 및 호버 갤러리
컨셉 탭 목록

modern
natural wood
shape
retro
mid-century modern
classic
contemporary
vintage
oriental

탭 스타일

가로 배치
세련되고 미니멀한 텍스트
호버 시: 미묘한 밑줄 또는 하이라이트
활성 상태 표시

이미지 전환 효과

각 탭 호버/선택 시 관련 인테리어 컨셉 이미지 표시
이미지 위치: 탭 위 또는 옆
전환: 부드러운 페이드 효과

스크롤 반응형 갤러리

탭 아래에 위치
스크롤 시 인테리어 참고 이미지들이 오른쪽에서 왼쪽으로 수평 슬라이드
스크롤에 연동된 부드러운 수평 모션
지속적인 왼쪽 스와이프 효과
우아하고 미묘한 전환 (화려하지 않게)


4. 메인 히어로 슬라이더
구조

위치: 컨셉 탭/갤러리 아래
크기: 전체 화면 너비, 뷰포트 높이의 거의 전체

이미지

완료된 프로젝트 이미지 3장
큰 단일 이미지로 표시

네비게이션

우측 화살표 버튼 (다음 이미지로)
하단에 작고 미묘한 페이지네이션 도트
최소한의 UI

전환 효과

부드러운 크로스페이드 또는 슬라이드 애니메이션
3개 이미지 순환

텍스트 오버레이

최소화 (거의 없음)


5. "Jason Interior" 무빙 마퀴 밴드
구조

위치: 히어로 슬라이더 바로 아래
너비: 전체 화면 너비

콘텐츠

"jason interior" 텍스트 반복
일정한 간격 배치
단일 라인

애니메이션

왼쪽에서 오른쪽으로 연속 이동
무한 루프 마퀴 효과

스타일링

시각적으로 미니멀
약간 어두운 배경 톤 (선택사항)
상하 얇은 패딩
명시적인 선이나 테두리 없음
부드러운 구분자 역할
세련되고 방해되지 않는 스타일

6. 소개 및 서비스 섹션
구조

위치: 히어로 슬라이더 아래
레이아웃: 수평형 바

내용 
"jason interior는 체계적인 프로세스로 고객과의 처음 만남에서부터 최종 완성과 향후의 관리까지
전문성과 성실함으로 소통하며, 공간 디자인을 넘어 토탈 솔루션 서비스를 제공합니다."

하부 이미지 첨부(file:///d:/안티그래비티/홈페이지만들기/images/소개섹션이미지.png)


7. 견적 문의 폼 섹션
위치 및 레이아웃

무빙 텍스트 밴드 바로 아래
추가 구분선 없음
심플하고 중앙 정렬된 레이아웃

헤딩

제목: "Request a Quote", "견적 문의"
부제: 짧은 설명 텍스트
미니멀한 타이포그래피

폼 필드

Name (이름)
Contact number (연락처)
Email (이메일)
site address (사이트 주소 / 평수)
Message / Project details (메시지/프로젝트 상세)
File upload (첨부 파일)

스타일링 (Tailwind CSS)

깔끔한 테두리
넉넉한 패딩
명확한 포커스 상태
레이블 표시

제출 버튼

텍스트: "Submit"
위치: 필드 하단 정렬
프라이머리 스타일

기능

제출 시 이메일 발송: idkide6411@gmail.com
포함 데이터: 이름, 연락처, 이메일, 메시지
백엔드/API 엔드포인트 연동 가정
React 코드에서 의도가 명확하게 구조화


7. 푸터 로고 및 마무리
구조

위치: 페이지 최하단
레이아웃: 세련된 푸터 블록

로고

"Jason Interior" 로고
수평/수직 중앙 정렬
충분한 여백 (화이트스페이스)

디자인 요소

미묘하고 미니멀한 모티프 (선택사항)
매우 얇은 구분선 요소 가능
세련되고 직설적이지 않은 디자인

마무리 인상

신중하게 완성된 미니멀 디자인
로고가 초점
어수선함 없음
브랜드 아이덴티티 강화


체크리스트

구조

위치: 최상단
레이아웃: 수평형 바

왼쪽 영역

"Jason Interior" 로고/워드마크
스타일: 심플하고 모던한 로고타입

오른쪽 영역

언어 선택: "EN" / "KR" (영어/한국어)
"Login" 텍스트 버튼
컴팩트한 컨트롤 그룹 형태

스타일링

슬림한 높이
하단에 미묘한 여백
무거운 테두리 없음


3. 컨셉 탭 및 호버 갤러리
컨셉 탭 목록

modern
natural wood
shape
retro
mid-century modern
classic
contemporary
vintage
oriental

탭 스타일

가로 배치
세련되고 미니멀한 텍스트
호버 시: 미묘한 밑줄 또는 하이라이트
활성 상태 표시

이미지 전환 효과

각 탭 호버/선택 시 관련 인테리어 컨셉 이미지 표시
이미지 위치: 탭 위 또는 옆
전환: 부드러운 페이드 효과

스크롤 반응형 갤러리

탭 아래에 위치
스크롤 시 인테리어 참고 이미지들이 오른쪽에서 왼쪽으로 수평 슬라이드
스크롤에 연동된 부드러운 수평 모션
지속적인 왼쪽 스와이프 효과
우아하고 미묘한 전환 (화려하지 않게)


4. 메인 히어로 슬라이더
구조

위치: 컨셉 탭/갤러리 아래
크기: 전체 화면 너비, 뷰포트 높이의 거의 전체

이미지

완료된 프로젝트 이미지 3장
큰 단일 이미지로 표시

네비게이션

우측 화살표 버튼 (다음 이미지로)
하단에 작고 미묘한 페이지네이션 도트
최소한의 UI

전환 효과

부드러운 크로스페이드 또는 슬라이드 애니메이션
3개 이미지 순환

텍스트 오버레이

최소화 (거의 없음)


5. "Jason Interior" 무빙 마퀴 밴드
구조

위치: 히어로 슬라이더 바로 아래
너비: 전체 화면 너비

콘텐츠

"jason interior" 텍스트 반복
일정한 간격 배치
단일 라인

애니메이션

왼쪽에서 오른쪽으로 연속 이동
무한 루프 마퀴 효과

스타일링

시각적으로 미니멀
약간 어두운 배경 톤 (선택사항)
상하 얇은 패딩
명시적인 선이나 테두리 없음
부드러운 구분자 역할
세련되고 방해되지 않는 스타일

6. 소개 및 서비스 섹션
구조

위치: 히어로 슬라이더 아래
레이아웃: 수직형 (텍스트 상단, 이미지 하단)

내용 
"jason interior는 체계적인 프로세스로 고객과의 처음 만남에서부터 최종 완성과 향후의 관리까지
전문성과 성실함으로 소통하며, 공간 디자인을 넘어 토탈 솔루션 서비스를 제공합니다."

하부 이미지 첨부(file:///d:/안티그래비티/홈페이지만들기/images/소개섹션이미지.png)
이미지 스타일: 전체 너비, 원본 비율 유지


7. 견적 문의 폼 섹션
위치 및 레이아웃

무빙 텍스트 밴드 바로 아래
추가 구분선 없음
심플하고 중앙 정렬된 레이아웃

헤딩

제목: "Request a Quote", "견적 문의"
부제: 짧은 설명 텍스트
미니멀한 타이포그래피

폼 필드

Name (이름)
Contact number (연락처)
Email (이메일)
site address (사이트 주소 / 평수)
Message / Project details (메시지/프로젝트 상세)
File upload (첨부 파일)

스타일링 (Tailwind CSS)

깔끔한 테두리
넉넉한 패딩
명확한 포커스 상태
레이블 표시

제출 버튼

텍스트: "Submit"
위치: 필드 하단 정렬
프라이머리 스타일

기능

제출 시 이메일 발송: idkide6411@gmail.com
포함 데이터: 이름, 연락처, 이메일, 메시지
백엔드/API 엔드포인트 연동 가정
React 코드에서 의도가 명확하게 구조화


7. 푸터 로고 및 마무리
구조

위치: 페이지 최하단
레이아웃: 세련된 푸터 블록

로고

"Jason Interior" 로고
수평/수직 중앙 정렬
충분한 여백 (화이트스페이스)

디자인 요소

미묘하고 미니멀한 모티프 (선택사항)
매우 얇은 구분선 요소 가능
세련되고 직설적이지 않은 디자인

마무리 인상

신중하게 완성된 미니멀 디자인
로고가 초점
어수선함 없음
브랜드 아이덴티티 강화


체크리스트

 1. 기술 스택 및 레이아웃 확인
 2. 헤더 디자인 확인
 3. 컨셉 탭 목록 및 기능 확인
 4. 히어로 슬라이더 구성 확인
 5. 마퀴 밴드 스타일 확인
 6. 소개 및 서비스 섹션 확인 (완료)
 7. 견적 폼 및 이메일 주소 확인 (완료)
 8. 푸터 디자인 확인 (완료)
 9. 다국어 지원 (영문/한글) 적용 (완료)
 10. 로그인 버튼 제거 (완료)