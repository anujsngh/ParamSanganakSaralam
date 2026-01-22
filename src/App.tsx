import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Layout } from './components/Layout';
import { Home } from './pages/Home';
import { LinuxBasics } from './pages/LinuxBasics';
import { CoreConcepts } from './pages/CoreConcepts';
import { AccountManagement } from './pages/AccountManagement';
import { RunningJobs } from './pages/RunningJobs';
import { Applications } from './pages/Applications';
import { Tutorial } from './pages/Tutorial';
import { Debugging } from './pages/Debugging';
import { BestPractices } from './pages/BestPractices';
import { UsagePolicy } from './pages/UsagePolicy';
import { Support } from './pages/Support';

import { NoticePopup } from './components/NoticePopup';
import { ThemeProvider } from './components/theme-provider';

function App() {
    return (
        <ThemeProvider defaultTheme="system" storageKey="vite-ui-theme">
            <NoticePopup />
            <BrowserRouter>
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
            </BrowserRouter>
        </ThemeProvider>
    );
}

export default App;

