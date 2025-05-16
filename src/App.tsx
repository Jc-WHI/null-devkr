// src/App.tsx
import { useContext, useEffect, JSX } from 'react'; // JSX 타입을 추가했습니다.
import './App.css'; // 전역 스타일 및 테마별 스타일 (이 파일이 존재하고 스타일이 정의되어 있어야 합니다)
import LatestHomePage from './pages/LatestHomePage';

/*
  [중요] 아래 import 경로는 사용자님의 프로젝트 구조에 맞게 정확히 지정해야 합니다.
  - DarkMode.tsx 파일이 예를 들어 'src/contexts/DarkMode.tsx'에 있다면, 현재 경로는 올바습니다.
  - ThemeToggleButton.tsx 파일이 예를 들어 'src/components/ThemeToggleButton.tsx'에 있다면, 현재 경로는 올바습니다.
  경로가 다를 경우, 실제 파일 위치에 맞게 수정해주세요.
*/
import { DarkModeProvider, DarkModeContext, DarkContextType } from './contexts/DarkMode';
import ThemeToggleButton from './components/ThemeToggleButton';

/**
 * AppContent 컴포넌트
 * - 실제 애플리케이션의 주요 콘텐츠를 렌더링합니다.
 * - DarkModeContext에 접근하여 테마를 적용하고, 테마 전환 버튼을 포함합니다.
 * - DarkModeProvider 내부에 위치해야 DarkModeContext의 값을 올바르게 사용할 수 있습니다.
 */
function AppContent(): JSX.Element { // 반환 타입으로 JSX.Element 명시
  const context = useContext(DarkModeContext);

  // DarkModeProvider가 상위에 없을 경우, context는 undefined가 될 수 있습니다.
  // 이 경우 에러를 발생시켜 개발 단계에서 문제를 인지하도록 합니다.
  if (!context) {
    throw new Error('AppContent must be used within a DarkModeProvider');
  }

  const { mode } = context as DarkContextType; // context가 유효함을 확인했으므로 타입 단언 사용

  // 'mode' (테마 상태)가 변경될 때마다 실행되는 Effect Hook
  useEffect(() => {
    // body 태그에서 이전 테마 관련 클래스를 모두 제거합니다.
    document.body.classList.remove('light-theme', 'dark-theme');
    // 현재 'mode'에 해당하는 테마 클래스를 body 태그에 추가합니다.
    document.body.classList.add(mode === 'light' ? 'light-theme' : 'dark-theme');
  }, [mode]); // 의존성 배열에 'mode'를 넣어, 'mode'가 변경될 때만 이 effect가 실행되도록 합니다.

  return (
    <>
      <ThemeToggleButton /> {/* 다크/라이트 모드 전환 버튼 */}
      <LatestHomePage />
      {/* 추가적인 페이지 컴포넌트나 라우팅 로직이 이곳에 위치할 수 있습니다. */}
    </>
  );
}

/**
 * 메인 App 컴포넌트
 * - 애플리케이션의 최상위 진입점입니다.
 * - DarkModeProvider를 사용하여 앱 전체에 다크 모드 컨텍스트를 제공합니다.
 */
function App(): JSX.Element { // 반환 타입으로 JSX.Element 명시
  return (
    // DarkModeProvider로 AppContent를 감싸 실제 앱 내용에 컨텍스트를 제공합니다.
    // 이를 통해 AppContent 및 그 모든 하위 컴포넌트들이 DarkModeContext에 접근할 수 있게 됩니다.
    <DarkModeProvider>
      <AppContent />
    </DarkModeProvider>
  );
}

export default App;