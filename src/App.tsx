// src/App.tsx
import { useContext, useEffect } from 'react';
import './App.css'; // 전역 스타일 및 테마 스타일
import LatestHomePage from './pages/LatestHomePage';

// DarkModeProvider, DarkModeContext, ThemeToggleButton의 정확한 경로로 수정해주세요.
// 예를 들어, DarkMode.tsx가 src/contexts/DarkMode.tsx에 있고,
// ThemeToggleButton.tsx가 src/components/ThemeToggleButton.tsx에 있다면 아래와 같습니다.
import { DarkModeProvider, DarkModeContext, DarkContextType } from './contexts/DarkMode';
import ThemeToggleButton from './components/ThemeToggleButton';

// App의 주요 내용을 담는 내부 컴포넌트
// DarkModeContext에 접근하기 위해 Provider 내부에 위치해야 합니다.
function AppContent() {
  const context = useContext(DarkModeContext);

  // context가 없는 경우 (Provider 외부에서 사용 시)를 대비
  if (!context) {
    throw new Error('AppContent는 DarkModeProvider 내부에서 사용되어야 합니다.');
  }

  const { mode } = context as DarkContextType; // 현재 테마 모드 가져오기

  // 현재 테마 모드(mode)가 변경될 때마다 document.body의 클래스를 업데이트합니다.
  useEffect(() => {
    // 이전 테마 클래스가 있다면 제거합니다.
    document.body.classList.remove('light-theme', 'dark-theme');
    // 현재 모드에 맞는 클래스를 추가합니다.
    document.body.classList.add(mode === 'light' ? 'light-theme' : 'dark-theme');
  }, [mode]); // 'mode'가 변경될 때만 이 effect가 실행됩니다.

  return (
    <>
      <ThemeToggleButton /> {/* 다크 모드 전환 버튼 */}
      <LatestHomePage />
      {/* 여기에 다른 페이지 컴포넌트나 라우팅 로직이 들어갈 수 있습니다. */}
    </>
  );
}

// 메인 App 컴포넌트
function App() {
  return (
    // DarkModeProvider로 AppContent (실제 앱 내용)를 감싸줍니다.
    // 이렇게 하면 AppContent 및 그 모든 하위 컴포넌트들이 DarkModeContext에 접근할 수 있게 됩니다.
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;