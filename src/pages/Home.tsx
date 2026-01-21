import { ArrowRight, Cpu, Database, Network, Zap, BookOpen, Terminal, Rocket, HelpCircle, Shield, Clock, GraduationCap } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Home() {
    return (
        <div className="space-y-12 sm:space-y-16">
            {/* Hero Section */}
            <section className="text-center space-y-6 py-4 sm:py-8">
                <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 text-sm font-medium border border-blue-200 dark:border-blue-800">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    Documentation v1.2
                </div>
                <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight text-slate-900 dark:text-white leading-tight">
                    Param Sanganak{' '}
                    <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                        Saralam
                    </span>
                </h1>
                <p className="text-base sm:text-lg lg:text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto leading-relaxed px-4">
                    Simplified documentation for IIT Kanpur's 1.66 PetaFLOPS High-Performance Computing facility under the National Supercomputing Mission.
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-3 pt-4 px-4">
                    <Link
                        to="/linux-basics"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-xl hover:bg-blue-700 font-medium transition-all hover:shadow-lg hover:-translate-y-0.5 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <GraduationCap size={18} />
                        Start Learning
                    </Link>
                    <Link
                        to="/getting-started"
                        className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-200 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-700 font-medium transition-all focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                    >
                        <Rocket size={18} />
                        Quick Setup
                    </Link>
                </div>
            </section>

            {/* Stats Grid */}
            <section className="grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6" aria-label="System specifications">
                <StatCard
                    icon={<Zap className="text-amber-500" size={24} />}
                    value="1.66 PFLOPS"
                    label="Peak Performance"
                />
                <StatCard
                    icon={<Cpu className="text-blue-500" size={24} />}
                    value="15,000+"
                    label="Compute Cores"
                />
                <StatCard
                    icon={<Network className="text-purple-500" size={24} />}
                    value="315"
                    label="Compute Nodes"
                />
                <StatCard
                    icon={<Database className="text-emerald-500" size={24} />}
                    value="2.2 PiB"
                    label="Parallel Storage"
                />
            </section>

            {/* Quick Start Paths */}
            <section className="space-y-8">
                <div className="text-center">
                    <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-slate-100">
                        Choose Your Learning Path
                    </h2>
                    <p className="mt-3 text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
                        Select your experience level to find the right resources. Start from the basics or jump to advanced topics.
                    </p>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
                    <PathCard
                        icon={<BookOpen className="text-indigo-600 dark:text-indigo-400" size={28} />}
                        title="Complete Beginner"
                        description="New to Linux or HPC? Start with the fundamentals of command-line and parallel computing."
                        links={[
                            { to: '/linux-basics', label: 'Linux Basics' },
                            { to: '/linux-basics#mpi', label: 'MPI Introduction' },
                            { to: '/linux-basics#scripting', label: 'Bash Scripting' },
                        ]}
                        variant="indigo"
                    />
                    <PathCard
                        icon={<GraduationCap className="text-emerald-600 dark:text-emerald-400" size={28} />}
                        title="New User"
                        description="Have your credentials? Set up SSH access, 2FA, and get ready to compute."
                        links={[
                            { to: '/getting-started#account', label: 'Account Setup' },
                            { to: '/getting-started#login', label: 'First Login' },
                            { to: '/getting-started#2fa', label: 'Setup 2FA' },
                        ]}
                        variant="green"
                    />
                    <PathCard
                        icon={<Terminal className="text-blue-600 dark:text-blue-400" size={28} />}
                        title="Ready to Compute"
                        description="Know the basics? Submit jobs, transfer files, and use available software."
                        links={[
                            { to: '/running-jobs', label: 'Submit Jobs' },
                            { to: '/getting-started#transfer', label: 'File Transfer' },
                            { to: '/applications', label: 'Applications' },
                        ]}
                        variant="blue"
                    />
                    <PathCard
                        icon={<Zap className="text-purple-600 dark:text-purple-400" size={28} />}
                        title="Power User"
                        description="Optimize performance, debug issues, and explore advanced configurations."
                        links={[
                            { to: '/best-practices', label: 'Best Practices' },
                            { to: '/debugging', label: 'Debugging' },
                            { to: '/core-concepts', label: 'Architecture' },
                        ]}
                        variant="purple"
                    />
                </div>
            </section>

            {/* Quick Reference */}
            <section className="bg-slate-50 dark:bg-slate-900 rounded-2xl p-6 sm:p-8 border border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-6">
                    Quick Reference
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <QuickRefCard
                        icon={<Terminal size={18} />}
                        title="SSH Connection"
                        code="ssh -p 4422 user@paramsanganak.iitk.ac.in"
                    />
                    <QuickRefCard
                        icon={<Database size={18} />}
                        title="Check Quota"
                        code="myquota"
                    />
                    <QuickRefCard
                        icon={<Clock size={18} />}
                        title="Job Status"
                        code="squeue -u $USER"
                    />
                    <QuickRefCard
                        icon={<Rocket size={18} />}
                        title="Submit Job"
                        code="sbatch job.sh"
                    />
                    <QuickRefCard
                        icon={<Shield size={18} />}
                        title="Check Balance"
                        code="IITK_RA_Balance"
                    />
                    <QuickRefCard
                        icon={<HelpCircle size={18} />}
                        title="Cancel Job"
                        code="scancel <job_id>"
                    />
                </div>
            </section>

            {/* Help Section */}
            <section className="text-center py-8 border-t border-slate-200 dark:border-slate-800">
                <h2 className="text-xl font-semibold text-slate-900 dark:text-slate-100 mb-2">
                    Need Help?
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Contact our support team for technical assistance
                </p>
                <div className="flex flex-col sm:flex-row justify-center gap-4">
                    <a
                        href="mailto:sanganaksupport@iitk.ac.in"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded-lg hover:bg-slate-800 dark:hover:bg-slate-100 font-medium transition-colors"
                    >
                        sanganaksupport@iitk.ac.in
                    </a>
                    <Link
                        to="/support"
                        className="inline-flex items-center justify-center gap-2 px-5 py-2.5 text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200 font-medium transition-colors"
                    >
                        View Support Options <ArrowRight size={16} />
                    </Link>
                </div>
            </section>
        </div>
    );
}

interface StatCardProps {
    icon: React.ReactNode;
    value: string;
    label: string;
}

function StatCard({ icon, value, label }: StatCardProps) {
    return (
        <div className="p-4 sm:p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl hover:shadow-md transition-shadow">
            <div className="mb-3">{icon}</div>
            <div className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-slate-100">{value}</div>
            <div className="text-sm text-slate-500 dark:text-slate-400 font-medium">{label}</div>
        </div>
    );
}

interface PathCardProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    links: { to: string; label: string }[];
    variant: 'green' | 'blue' | 'purple' | 'indigo';
}

function PathCard({ icon, title, description, links, variant }: PathCardProps) {
    const variantClasses = {
        green: 'border-emerald-200 dark:border-emerald-900/50 hover:border-emerald-300 dark:hover:border-emerald-800 hover:bg-emerald-50/50 dark:hover:bg-emerald-950/20',
        blue: 'border-blue-200 dark:border-blue-900/50 hover:border-blue-300 dark:hover:border-blue-800 hover:bg-blue-50/50 dark:hover:bg-blue-950/20',
        purple: 'border-purple-200 dark:border-purple-900/50 hover:border-purple-300 dark:hover:border-purple-800 hover:bg-purple-50/50 dark:hover:bg-purple-950/20',
        indigo: 'border-indigo-200 dark:border-indigo-900/50 hover:border-indigo-300 dark:hover:border-indigo-800 hover:bg-indigo-50/50 dark:hover:bg-indigo-950/20',
    };

    return (
        <div className={`p-5 bg-white dark:bg-slate-900 border-2 ${variantClasses[variant]} rounded-xl transition-all hover:shadow-lg`}>
            <div className="mb-3">{icon}</div>
            <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mb-2">{title}</h3>
            <p className="text-sm text-slate-600 dark:text-slate-400 mb-4 leading-relaxed">{description}</p>
            <ul className="space-y-2">
                {links.map((link) => (
                    <li key={link.to}>
                        <Link
                            to={link.to}
                            className="text-sm text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 flex items-center gap-2 group"
                        >
                            <ArrowRight size={14} className="group-hover:translate-x-1 transition-transform flex-shrink-0" />
                            <span>{link.label}</span>
                        </Link>
                    </li>
                ))}
            </ul>
        </div>
    );
}

interface QuickRefCardProps {
    icon: React.ReactNode;
    title: string;
    code: string;
}

function QuickRefCard({ icon, title, code }: QuickRefCardProps) {
    return (
        <div className="p-4 bg-white dark:bg-slate-800 rounded-lg border border-slate-200 dark:border-slate-700">
            <div className="flex items-center gap-2 text-slate-600 dark:text-slate-400 mb-2">
                {icon}
                <span className="text-sm font-medium">{title}</span>
            </div>
            <code className="text-sm font-mono text-blue-600 dark:text-blue-400 bg-slate-100 dark:bg-slate-900 px-2 py-1 rounded block overflow-x-auto">
                {code}
            </code>
        </div>
    );
}
