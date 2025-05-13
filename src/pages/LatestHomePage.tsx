// src/pages/LatestHomePage.tsx

import FirstPortfolio from "./FirstPortfolio";

// 1. about.css import 구문이 있다면 완전히 삭제합니다.
// 2. React import도 사용하지 않는다면 삭제합니다 (이전 오류 관련).

export default function LatestHomePage() {
  // 이전에 만들었던 자기소개 페이지 JSX를 여기에 넣습니다.
  return (
    <div className="about-me-page"> {/* 이 className을 위한 CSS 파일은 없다고 하셨습니다. */}
                                  {/* 만약 스타일을 적용하고 싶다면, 별도의 CSS 파일을 만들고 import 하거나, */}
                                  {/* styled-components를 사용해야 합니다. */}
      <main className="profile-section">
        <div className="profile-card">
          <div className="profile-image-placeholder">
            {/* public/img.jpg 를 참조합니다. */}
            <img src="/img.jpg" alt="조치호 프로필 사진" />
          </div>
          <div className="profile-info">
            <h1>조치호</h1>
            <p className="job-aspirant">프론트엔드 개발자 지망생</p>
            <hr className="divider" />
            <div className="info-grid">
              <div className="info-item">
                <span className="info-label">이름</span>
                <span className="info-value">조치호</span>
              </div>
              <div className="info-item">
                <span className="info-label">학력</span>
                <span className="info-value">동아대학교 졸업</span>
              </div>
              <div className="info-item">
                <span className="info-label">주전공</span>
                <span className="info-value">기계공학과</span>
              </div>
              <div className="info-item">
                <span className="info-label">부전공</span>
                <span className="info-value">컴퓨터공학과</span>
              </div>
              <div className="info-item">
                <span className="info-label">학점</span>
                <span className="info-value">3.0 / 4.3</span>
              </div>
              <div className="info-item">
                <span className="info-label">목표</span>
                <span className="info-value">프론트엔드 개발자</span>
              </div>
              <div className="test">
                <FirstPortfolio/>

              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}