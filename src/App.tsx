import { Suspense, lazy } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Analytics } from '@vercel/analytics/react';
import { SpeedInsights } from '@vercel/speed-insights/react';
import { Layout } from './components/Layout';
import { NoticePopup } from './components/NoticePopup';
import { ThemeProvider } from './components/theme-provider';

// Lazy load pages
const Home = lazy(() => import('./pages/Home').then(module => ({ default: module.Home })));
const LinuxBasics = lazy(() => import('./pages/LinuxBasics').then(module => ({ default: module.LinuxBasics })));
const Tutorial = lazy(() => import('./pages/Tutorial').then(module => ({ default: module.Tutorial })));
const CoreConcepts = lazy(() => import('./pages/CoreConcepts').then(module => ({ default: module.CoreConcepts })));
const AccountManagement = lazy(() => import('./pages/AccountManagement').then(module => ({ default: module.AccountManagement })));
const RunningJobs = lazy(() => import('./pages/RunningJobs').then(module => ({ default: module.RunningJobs })));
const Applications = lazy(() => import('./pages/Applications').then(module => ({ default: module.Applications })));
const Debugging = lazy(() => import('./pages/Debugging').then(module => ({ default: module.Debugging })));
const BestPractices = lazy(() => import('./pages/BestPractices').then(module => ({ default: module.BestPractices })));
const UsagePolicy = lazy(() => import('./pages/UsagePolicy').then(module => ({ default: module.UsagePolicy })));
const Support = lazy(() => import('./pages/Support').then(module => ({ default: module.Support })));

// Loading component
const PageLoader = () => (
    <div className="flex items-center justify-center min-h-[50vh]">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-purple-600"></div>
    </div>
);

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <NoticePopup />
            <BrowserRouter>
                <Suspense fallback={<PageLoader />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Home />} />
                            <Route path="linux-basics" element={<LinuxBasics />} />
                            <Route path="getting-started" element={<Tutorial />} />
                            <Route path="core-concepts" element={<CoreConcepts />} />
                            <Route path="account-management" element={<AccountManagement />} />
                            <Route path="running-jobs" element={<RunningJobs />} />
                            <Route path="applications" element={<Applications />} />
                            <Route path="debugging" element={<Debugging />} />
                            <Route path="best-practices" element={<BestPractices />} />
                            <Route path="usage-policy" element={<UsagePolicy />} />
                            <Route path="support" element={<Support />} />
                            <Route path="*" element={<Navigate to="/" replace />} />
                        </Route>
                    </Routes>
                </Suspense>
            </BrowserRouter>
            <Analytics />
            <SpeedInsights />
        </ThemeProvider>
    );
}

export default App;
