import React, { useState, useEffect, Suspense } from 'react';
import { Hero3DScene } from './Hero3DScene';
import { FallbackScene } from './FallbackScene';

class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: Error) {
    console.warn('WebGL Error Boundary Caught:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const SceneContainer: React.FC = () => {
  const [webglSupported, setWebglSupported] = useState<boolean | null>(null);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    // Check reduced motion preference
    const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
    setReducedMotion(mediaQuery.matches);

    // Test WebGL support
    try {
      const canvas = document.createElement('canvas');
      const gl = canvas.getContext('webgl') || canvas.getContext('experimental-webgl');
      setWebglSupported(Boolean(gl));
    } catch {
      setWebglSupported(false);
    }
  }, []);

  if (webglSupported === false || reducedMotion) {
    return <FallbackScene />;
  }

  return (
    <WebGLErrorBoundary fallback={<FallbackScene />}>
      <Suspense fallback={<FallbackScene />}>
        <Hero3DScene />
      </Suspense>
    </WebGLErrorBoundary>
  );
};
