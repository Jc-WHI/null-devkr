// src/pages/LatestHomePage.tsx

import React from 'react';
// 만약 styled-components를 이 파일 내에서 사용한다면 import 하세요.
// import styled from 'styled-components';
import '../app/about.css'; // 이전에 생성한 CSS 파일 경로 (프로젝트 구조에 맞게 조정)

// 예시: styled-components를 사용하여 컴포넌트 스타일링
// const PageWrapper = styled.div`
//   padding: 20px;
//   background-color: #f0f0f0;
// `;

export default function LatestHomePage() {
  // 이전에 만들었던 자기소개 페이지 JSX를 여기에 넣습니다.
  return (
    <div className="about-me-page"> {/* about.css에 정의된 클래스 사용 */}
      <main className="profile-section">
        <div className="profile-card">
          <div className="profile-image-placeholder">
            {/* <img src="/path-to-your-image.jpg" alt="조치호 프로필 사진" /> */}
            <span>JH</span> {/* 이미지가 없을 경우 이니셜 */}
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
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}