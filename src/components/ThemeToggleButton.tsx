// src/components/ThemeToggleButton.tsx
import { useContext } from 'react';
// DarkModeContext와 DarkContextType의 정확한 경로로 수정해주세요.
// 예를 들어, context 파일이 src/contexts/DarkMode.tsx 라면 아래와 같이 됩니다.
import { DarkModeContext, DarkContextType } from '../contexts/DarkMode';

const ThemeToggleButton = () => {
  // DarkModeContext에서 값들을 가져옵니다.
  const context = useContext(DarkModeContext);

  // context가 undefined일 경우 (Provider 외부에서 사용될 경우)를 대비합니다.
  if (!context) {
    console.error('ThemeToggleButton은 DarkModeProvider 내부에서 사용되어야 합니다.');
    return null;
  }

  // context에서 mode와 toggleMode를 추출합니다.
  // DarkContextType으로 단언(assertion)하거나, context의 타입을 명확히 합니다.
  const { mode, toggleMode } = context as DarkContextType;

  return (
    <button
      onClick={toggleMode}
      style={{
        position: 'fixed',    // 화면 기준으로 위치 고정
        top: '20px',          // 상단에서 20px 아래
        right: '20px',         // 우측에서 20px 왼쪽
        padding: '10px 15px',
        fontSize: '1rem',
        cursor: 'pointer',
        border: 'none',
        borderRadius: '5px',
        backgroundColor: mode === 'light' ? '#2c3e50' : '#ecf0f1', // 버튼 배경색
        color: mode === 'light' ? '#ecf0f1' : '#2c3e50',       // 버튼 글자색
        zIndex: 1000,         // 다른 요소들 위에 보이도록 z-index 설정
        transition: 'background-color 0.3s ease, color 0.3s ease',
      }}
      aria-label={`현재 ${mode} 모드, ${mode === 'light' ? '다크' : '라이트'} 모드로 전환`}
    >
      {mode === 'light' ? '🌙' : '☀️'} {/* 아이콘 또는 텍스트 */}
    </button>
  );
};

export default ThemeToggleButton;