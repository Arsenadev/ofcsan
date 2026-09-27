/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */
import { useState, useEffect } from 'react';
import { AnimatePresence } from 'motion/react';
import { StyleId, PortfolioProfile, Project } from './types/portfolio';
import { DEFAULT_PROFILE, MOCK_PROJECTS, STYLE_ARCHETYPES } from './data/mockPortfolioData';
import { AppleLiquidGlass, AppleRouteId } from './components/archetypes/AppleLiquidGlass';
import { NeoBrutalistSoft } from './components/archetypes/NeoBrutalistSoft';
import { EditorialAvantGarde } from './components/archetypes/EditorialAvantGarde';
import { CreativeTechnologist } from './components/archetypes/CreativeTechnologist';
import { NeoBrutalist } from './components/archetypes/NeoBrutalist';
import { SwissMinimalist } from './components/archetypes/SwissMinimalist';
import { ProjectDetailModal } from './components/ProjectDetailModal';
import { StyleMatcherModal } from './components/StyleMatcherModal';
import { MotionLabModal } from './components/MotionLabModal';
import { ProfileEditorModal } from './components/ProfileEditorModal';
import { CodeExportModal } from './components/CodeExportModal';
import { LoadingScreen } from './components/LoadingScreen';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [activeStyle, setActiveStyle] = useState<StyleId>('apple-liquid');
  const [activeRoute, setActiveRoute] = useState<AppleRouteId>('overview');
  const [profile, setProfile] = useState<PortfolioProfile>(DEFAULT_PROFILE);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [isMatcherOpen, setIsMatcherOpen] = useState(false);
  const [isMotionLabOpen, setIsMotionLabOpen] = useState(false);
  const [isProfileEditorOpen, setIsProfileEditorOpen] = useState(false);
  const [isCodeExportOpen, setIsCodeExportOpen] = useState(false);

  // Sync hash routing
  useEffect(() => {
    const handleHashChange = () => {
      const hash = window.location.hash.replace('#', '') as AppleRouteId;
      if (['overview', 'creations', 'identity', 'stack', 'connect'].includes(hash)) {
        setActiveRoute(hash);
      }
    };

    handleHashChange();
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const handleRouteChange = (route: AppleRouteId) => {
    setActiveRoute(route);
    window.location.hash = `#${route}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Direct 1-click toggle between Apple Liquid Glass and Neo-Brutalism Rounded Soft
  const handleToggleStyle = () => {
    setActiveStyle((current) => (current === 'apple-liquid' ? 'neo-brutalist-soft' : 'apple-liquid'));
  };

  // Current projects strictly from prompt
  const currentProjects = MOCK_PROJECTS[activeStyle] || MOCK_PROJECTS['apple-liquid'];

  return (
    <div className="min-h-screen bg-[#030306] text-neutral-100 flex flex-col font-sans">
      {/* 5-Second Apple Liquid Glass Boot Loading Screen with Official SAN Emblem */}
      <AnimatePresence mode="wait">
        {isLoading && (
          <LoadingScreen
            key="apple-boot-loader"
            durationMs={5000}
            onComplete={() => setIsLoading(false)}
          />
        )}
      </AnimatePresence>

      {/* Main Portfolio Stage */}
      <main className="flex-1">
        {activeStyle === 'apple-liquid' && (
          <AppleLiquidGlass
            profile={profile}
            projects={currentProjects}
            activeRoute={activeRoute}
            onRouteChange={handleRouteChange}
            onSelectProject={(p) => setSelectedProject(p)}
            onTriggerLoading={() => setIsLoading(true)}
            onOpenStyleSwitcher={handleToggleStyle}
          />
        )}

        {activeStyle === 'neo-brutalist-soft' && (
          <NeoBrutalistSoft
            profile={profile}
            projects={currentProjects}
            activeRoute={activeRoute}
            onRouteChange={handleRouteChange}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenStyleSwitcher={handleToggleStyle}
          />
        )}

        {activeStyle === 'editorial' && (
          <EditorialAvantGarde
            profile={profile}
            projects={currentProjects}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenMatcher={() => setIsMatcherOpen(true)}
            onOpenStyleSwitcher={handleToggleStyle}
          />
        )}

        {activeStyle === 'creative-tech' && (
          <CreativeTechnologist
            profile={profile}
            projects={currentProjects}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenMatcher={() => setIsMatcherOpen(true)}
            onOpenStyleSwitcher={handleToggleStyle}
          />
        )}

        {activeStyle === 'neo-brutalist' && (
          <NeoBrutalist
            profile={profile}
            projects={currentProjects}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenMatcher={() => setIsMatcherOpen(true)}
            onOpenStyleSwitcher={handleToggleStyle}
          />
        )}

        {activeStyle === 'swiss-grid' && (
          <SwissMinimalist
            profile={profile}
            projects={currentProjects}
            onSelectProject={(p) => setSelectedProject(p)}
            onOpenMatcher={() => setIsMatcherOpen(true)}
            onOpenStyleSwitcher={handleToggleStyle}
          />
        )}
      </main>

      {/* Interactive Case Study Lightbox Modal */}
      <ProjectDetailModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
        themeStyle={activeStyle}
        accentColor={STYLE_ARCHETYPES[activeStyle]?.accentColor}
      />

      {/* Style & Motion Matcher Diagnostic Quiz */}
      <StyleMatcherModal
        isOpen={isMatcherOpen}
        onClose={() => setIsMatcherOpen(false)}
        onApplyStyle={(s) => setActiveStyle(s)}
      />

      {/* Motion & Animation Physics Lab */}
      <MotionLabModal
        isOpen={isMotionLabOpen}
        onClose={() => setIsMotionLabOpen(false)}
      />

      {/* Personal Profile Customizer */}
      <ProfileEditorModal
        isOpen={isProfileEditorOpen}
        onClose={() => setIsProfileEditorOpen(false)}
        profile={profile}
        onSaveProfile={(updated) => setProfile(updated)}
      />

      {/* Code, Tailwind & Case Study Exporter */}
      <CodeExportModal
        isOpen={isCodeExportOpen}
        onClose={() => setIsCodeExportOpen(false)}
        activeStyle={activeStyle}
        profile={profile}
      />
    </div>
  );
}
