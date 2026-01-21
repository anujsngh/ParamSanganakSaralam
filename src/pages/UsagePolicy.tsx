import { Scale, Database, Clock, CreditCard, Users, AlertCircle, FileText } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import { Alert } from '../components/Alert';

export function UsagePolicy() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={Scale}
                badge="Policies"
                title="Usage Policy"
                description="Param Sanganak resources are shared on a fair use basis. Understanding these policies ensures efficient usage for everyone."
                variant="indigo"
            />

            <div className="prose prose-slate dark:prose-invert max-w-none">

            <section id="policy-overview">
                <div className="flex items-center gap-3 mb-4">
                    <FileText className="text-indigo-600 dark:text-indigo-400" size={24} />
                    <h2 className="m-0">Policy Overview</h2>
                </div>

                <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                    <div className="p-6 bg-indigo-50 dark:bg-indigo-900/20 border-2 border-indigo-200 dark:border-indigo-800 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <Scale className="text-indigo-600 dark:text-indigo-400" size={24} />
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 m-0">Fair Use Principles</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                                <span><strong>IIT Kanpur Priority:</strong> Minimum 60% resources reserved for IIT Kanpur users</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                                <span><strong>External Users:</strong> Up to 40% resources available for non-IIT Kanpur users</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-indigo-600 dark:text-indigo-400 mt-1">✓</span>
                                <span><strong>Fair Share Policy:</strong> Job priority decreases with higher individual usage</span>
                            </li>
                        </ul>
                    </div>

                    <div className="p-6 bg-blue-50 dark:bg-blue-900/20 border-2 border-blue-200 dark:border-blue-800 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <AlertCircle className="text-blue-600 dark:text-blue-400" size={24} />
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 m-0">Policy Management</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                                <span><strong>Scope:</strong> This policy applies exclusively to IIT Kanpur users</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                                <span><strong>Review:</strong> Periodically reviewed by the HPC Advisory Committee based on usage patterns</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-blue-600 dark:text-blue-400 mt-1">✓</span>
                                <span><strong>Effective:</strong> Usage-based charging policy in effect since August 1, 2024</span>
                            </li>
                        </ul>
                    </div>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="hardware">
                <div className="flex items-center gap-2 mb-4">
                    <Database className="text-slate-400" />
                    <h2 className="m-0">Hardware Configuration</h2>
                </div>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-900 border-b border-slate-200 dark:border-slate-800">
                                <th className="p-3 font-semibold">Feature</th>
                                <th className="p-3 font-semibold">Standard CPU Nodes</th>
                                <th className="p-3 font-semibold">High Memory Nodes</th>
                                <th className="p-3 font-semibold">GPU Nodes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800">
                            <tr>
                                <td className="p-3 font-medium">Node Count</td>
                                <td className="p-3">217</td>
                                <td className="p-3">78</td>
                                <td className="p-3">20</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">CPU</td>
                                <td className="p-3">2x Intel Xeon Platinum 8268 (48 cores)</td>
                                <td className="p-3">2x Intel Xeon Platinum 8268 (48 cores)</td>
                                <td className="p-3">2x Intel Xeon G-6248 (40 cores)</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">RAM</td>
                                <td className="p-3">192 GB</td>
                                <td className="p-3">768 GB</td>
                                <td className="p-3">192 GB</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">Accelerator</td>
                                <td className="p-3 text-slate-400">-</td>
                                <td className="p-3 text-slate-400">-</td>
                                <td className="p-3 font-semibold text-purple-600 dark:text-purple-400">2x NVIDIA V100 (32GB Total)</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">Local Storage</td>
                                <td className="p-3">480 GB SSD</td>
                                <td className="p-3">480 GB SSD</td>
                                <td className="p-3">480 GB SSD</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">Interconnect</td>
                                <td className="p-3" colSpan={3}>Mellanox HDR InfiniBand (100 Gbps)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-slate-500 dark:text-slate-400 mt-2">
                    Total Nodes: 312. (3 spares provided by OEM).
                </p>
            </section>

            <section id="partitions">
                <div className="flex items-center gap-2 mb-4">
                    <Clock className="text-slate-400" />
                    <h2 className="m-0">Partition Scheme</h2>
                </div>
                <p>
                    Select the appropriate partition based on your job size and duration requirements.
                </p>
                <div className="overflow-x-auto shadow-sm border border-slate-200 dark:border-slate-800 rounded-lg">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 border-b border-slate-200 dark:border-slate-700">Partition</th>
                                <th className="p-3 border-b border-slate-200 dark:border-slate-700">Min/Max Cores</th>
                                <th className="p-3 border-b border-slate-200 dark:border-slate-700">Default Time</th>
                                <th className="p-3 border-b border-slate-200 dark:border-slate-700">Max Time</th>
                                <th className="p-3 border-b border-slate-200 dark:border-slate-700">Nodes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400 font-semibold">serial</td>
                                <td className="p-3">1 - 24</td>
                                <td className="p-3 text-slate-500 dark:text-slate-400">2 hours</td>
                                <td className="p-3">2 Days</td>
                                <td className="p-3">hm[001-002]</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400 font-semibold">small</td>
                                <td className="p-3">48 (1 node) - 96 (2 nodes)</td>
                                <td className="p-3 text-slate-500 dark:text-slate-400">2 hours</td>
                                <td className="p-3">2 Days</td>
                                <td className="p-3">cn[001-050], hm[003-029]</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400 font-semibold">medium</td>
                                <td className="p-3">96 (2 nodes) - 192 (4 nodes)</td>
                                <td className="p-3 text-slate-500 dark:text-slate-400">2 hours</td>
                                <td className="p-3">2 Days</td>
                                <td className="p-3">cn[051-110], hm[030-054]</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400 font-semibold">large</td>
                                <td className="p-3">192 (4 nodes) - 480 (10 nodes)</td>
                                <td className="p-3 text-slate-500 dark:text-slate-400">2 hours</td>
                                <td className="p-3 font-bold text-emerald-600 dark:text-emerald-400">3 Days</td>
                                <td className="p-3">cn[111-187], hm[055-078]</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400 font-semibold">fat</td>
                                <td className="p-3">480+</td>
                                <td className="p-3 text-slate-500 dark:text-slate-400">2 hours</td>
                                <td className="p-3">2 Days</td>
                                <td className="p-3">cn[171-217], hm[055-078]</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400 font-semibold">hm</td>
                                <td className="p-3">48 (1 node) - 288 (6 nodes)</td>
                                <td className="p-3 text-slate-500 dark:text-slate-400">2 hours</td>
                                <td className="p-3">2 Days</td>
                                <td className="p-3">hm[003-078]</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-purple-600 dark:text-purple-400 font-semibold">gpu</td>
                                <td className="p-3">cpu=1, gres/gpu=1 - cpu=160, gres/gpu=8</td>
                                <td className="p-3 text-slate-500 dark:text-slate-400">2 hours</td>
                                <td className="p-3">2 Days</td>
                                <td className="p-3">gpu[001-020]</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <Alert variant="info" title="Important Notes">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>The default wall time for all partitions is <strong>2 hours</strong>. If you don't specify <code>--time</code>, your job will be limited to 2 hours</li>
                        <li>Most partitions have a maximum wall time of <strong>2 days</strong>, except the <code>large</code> partition which allows up to <strong>3 days</strong></li>
                        <li>Always specify the appropriate <code>--time</code> value in your job script to avoid unexpected terminations</li>
                        <li>Check current partition configuration anytime with: <code>sinfo</code> or <code>scontrol show partition</code></li>
                    </ul>
                </Alert>
            </section>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-blue-50 dark:bg-blue-900/20 rounded-xl border border-blue-100 dark:border-blue-900">
                    <h3 className="text-blue-800 dark:text-blue-300 flex items-center gap-2 m-0 mb-4">
                        <Users size={20} />
                        Job Limits
                    </h3>
                    <ul className="list-disc pl-4 space-y-2 text-blue-900 dark:text-blue-200 text-sm">
                        <li><strong>Max Queued Jobs:</strong> 8 per user.</li>
                        <li><strong>Max Running Jobs:</strong> 4 per user.</li>
                        <li>Any job submitted beyond the 8-job limit will be <strong>rejected</strong>.</li>
                        <li>Priority decreases as individual usage increases (Fair Share).</li>
                    </ul>
                </div>

                <div className="p-6 bg-slate-50 dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800">
                    <h3 className="text-slate-800 dark:text-slate-200 flex items-center gap-2 m-0 mb-4">
                        <CreditCard size={20} />
                        Charging Policy
                    </h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                        A usage-based charging policy has been in effect since August 1, 2024.
                    </p>
                    <ul className="list-disc pl-4 space-y-2 text-slate-700 dark:text-slate-300 text-sm">
                        <li><strong>Regular Access:</strong> Standard charging rates.</li>
                        <li>
                            <strong>High Priority Access:</strong> Higher rates, but jobs start sooner.
                            Use <code>--account=iitk_hp</code> and <code>--qos=&lt;username&gt;_hp</code> (replace &lt;username&gt; with your actual username) in your scripts.
                        </li>
                        <li>Check Balance: <code>IITK_RA_Balance</code> or <code>IITK_HP_Balance</code>.</li>
                    </ul>
                </div>
            </div>

            <section id="monitoring">
                <h2>Usage Monitoring & Balance Checking</h2>
                <p>
                    Monitor your compute usage and storage quotas regularly to stay within limits and avoid job failures.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                    <div className="p-5 bg-emerald-50 dark:bg-emerald-900/20 border border-emerald-200 dark:border-emerald-900/50 rounded-lg">
                        <h3 className="text-base font-semibold text-emerald-800 dark:text-emerald-300 mt-0 mb-3">Check CPU/GPU Balance</h3>
                        <p className="text-sm text-emerald-900 dark:text-emerald-200 mb-3">
                            View your remaining compute hours for both Regular Access and High Priority accounts:
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`# Check Regular Access balance
$ IITK_RA_Balance

# Check High Priority balance
$ IITK_HP_Balance

# Output includes:
# - Total CPU/GPU Minutes
# - Total CPU/GPU Hours
# - Consumed CPU/GPU Hours
# - Balanced (remaining) CPU/GPU Hours`}
                        />
                    </div>

                    <div className="p-5 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-900/50 rounded-lg">
                        <h3 className="text-base font-semibold text-blue-800 dark:text-blue-300 mt-0 mb-3">Check Storage Quota</h3>
                        <p className="text-sm text-blue-900 dark:text-blue-200 mb-3">
                            Monitor your storage usage to avoid hitting quota limits:
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`# Check /home and /scratch usage
$ myquota

# Example output:
# Filesystem    Used    Quota    Limit    % Used
# /home         245GB   500GB    500GB    49%
# /scratch      732GB   1TB      1TB      71%`}
                        />
                    </div>
                </div>

                <Alert variant="warning" title="Best Practice">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>Check your balance before submitting large jobs to ensure you have sufficient hours</li>
                        <li>Monitor storage quota regularly - jobs may fail if you exceed disk space limits</li>
                        <li>Set up periodic reminders to check balances, especially before major computation campaigns</li>
                    </ul>
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="storage-policy">
                <div className="flex items-center gap-2 mb-4">
                    <Database className="text-slate-400" />
                    <h2 className="m-0">Storage Policy</h2>
                </div>
                <div className="overflow-x-auto shadow-sm border border-slate-200 dark:border-slate-800 rounded-lg">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr className="border-b border-slate-200 dark:border-slate-800">
                                <th className="p-3 font-semibold">File System</th>
                                <th className="p-3 font-semibold">Path</th>
                                <th className="p-3 font-semibold">Quota</th>
                                <th className="p-3 font-semibold">Retention</th>
                                <th className="p-3 font-semibold">Best Use</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-100 dark:divide-slate-800 bg-white dark:bg-slate-900">
                            <tr>
                                <td className="p-3 font-medium">
                                    Global Home
                                    <span className="block text-xs text-slate-400 font-normal">Lustre (HDD)</span>
                                </td>
                                <td className="p-3 font-mono text-slate-600 dark:text-slate-300">/home</td>
                                <td className="p-3">500 GB</td>
                                <td className="p-3 text-emerald-600 dark:text-emerald-400 font-semibold">Permanent</td>
                                <td className="p-3">Source code, limited I/O.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">
                                    Global Scratch
                                    <span className="block text-xs text-slate-400 font-normal">Lustre (HDD)</span>
                                </td>
                                <td className="p-3 font-mono text-slate-600 dark:text-slate-300">/scratch</td>
                                <td className="p-3">1 TB</td>
                                <td className="p-3 text-red-600 dark:text-red-400 font-semibold">60 Days</td>
                                <td className="p-3">Large datasets, job outputs.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-medium">
                                    Local Scratch
                                    <span className="block text-xs text-purple-600 dark:text-purple-400 font-bold">SSD</span>
                                </td>
                                <td className="p-3 font-mono text-slate-600 dark:text-slate-300">/tmp or $TMPDIR</td>
                                <td className="p-3">480 GB (Per Node)</td>
                                <td className="p-3 text-red-600 dark:text-red-400 font-semibold">Job Duration</td>
                                <td className="p-3">High-speed temp files, random I/O.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="text-sm text-slate-500 italic mt-2 mb-8">
                    * Need more space? Use "striping" on Lustre to spread large files across multiple disks.
                </p>
            </section>

            <section id="contacts">
                <h2>Contact Support</h2>
                <p>
                    For queries regarding detailed policies or account creation:
                </p>
                <ul className="list-none pl-0 space-y-2">
                    <li className="flex gap-2">
                        <span className="font-semibold w-32">Policy/Tech:</span>
                        <a href="mailto:sanganaksupport@iitk.ac.in" className="text-blue-600 dark:text-blue-400 hover:underline">sanganaksupport@iitk.ac.in</a>
                        <span className="text-slate-400">(Room 212)</span>
                    </li>
                    <li className="flex gap-2">
                        <span className="font-semibold w-32">Accounts/HARS:</span>
                        <a href="mailto:hpcreports@iitk.ac.in" className="text-blue-600 dark:text-blue-400 hover:underline">hpcreports@iitk.ac.in</a>
                        <span className="text-slate-400">(Room 208)</span>
                    </li>
                </ul>
            </section>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/best-practices', label: 'Best Practices' }}
                next={{ to: '/support', label: 'Support & Help' }}
            />
        </div>
    );
}
