import { useState, useEffect } from 'react';
import { ExternalLink, ShieldAlert } from 'lucide-react';

export function NoticePopup() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        // Check for cookie
        const checkCookie = () => {
            const cookies = document.cookie.split(';');
            const noticeCookie = cookies.find(wrapper => wrapper.trim().startsWith('ps_notice_shown='));

            if (!noticeCookie) {
                // Formatting specific date for easier debugging/checking if needed, 
                // but relying on existence is enough for logic.
                setIsVisible(true);
            }
        };

        checkCookie();
    }, []);

    const handleDismiss = () => {
        setIsVisible(false);
        setCookie();
    };

    const handleOfficialVisit = () => {
        window.open('https://iitk.ac.in/hpc/paramsanganak', '_blank', 'noopener,noreferrer');
        handleDismiss();
    };

    const setCookie = () => {
        const date = new Date();
        // Set expiry to 30 days
        date.setTime(date.getTime() + (30 * 24 * 60 * 60 * 1000));
        const expires = "expires=" + date.toUTCString();
        document.cookie = "ps_notice_shown=true;" + expires + ";path=/";
    };

    if (!isVisible) return null;

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-300">
            <div className="bg-white dark:bg-slate-900 rounded-2xl shadow-2xl max-w-lg w-full overflow-hidden border border-slate-200 dark:border-slate-800 animate-in zoom-in-95 duration-300">
                <div className="p-6 sm:p-8">
                    <div className="flex flex-col items-center text-center space-y-4">
                        <div className="p-3 bg-amber-100 dark:bg-amber-900/30 rounded-full text-amber-600 dark:text-amber-400">
                            <ShieldAlert size={32} />
                        </div>

                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
                            Unofficial Documentation
                        </h2>

                        <div className="space-y-3 text-slate-600 dark:text-slate-300">
                            <p>
                                This is an <span className="font-semibold text-amber-600 dark:text-amber-400">unofficial documentation</span> of the Param Sanganak facility.
                            </p>
                            <p className="text-sm">
                                While we strive for accuracy, please refer to the official portal for critical operational guidelines and support.
                            </p>
                            <p className="text-xs text-slate-500 dark:text-slate-400 bg-slate-100 dark:bg-slate-800 p-3 rounded-lg">
                                Standard Advice: Always check your job scripts before submission and monitor your quota usage regularly.
                            </p>
                        </div>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mt-8">
                        <button
                            onClick={handleDismiss}
                            className="px-4 py-3 bg-white dark:bg-slate-800 text-slate-700 dark:text-slate-200 border border-slate-200 dark:border-slate-700 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-slate-500"
                        >
                            Continue to Site
                        </button>
                        <button
                            onClick={handleOfficialVisit}
                            className="inline-flex items-center justify-center gap-2 px-4 py-3 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                        >
                            Go to Official Portal
                            <ExternalLink size={16} />
                        </button>
                    </div>
                </div>
            </div>
        </div>
    );
}
