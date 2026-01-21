import { CreditCard, IndianRupee, Users, AlertCircle, ExternalLink } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import { Alert } from '../components/Alert';

export function AccountManagement() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={CreditCard}
                badge="Account & Billing"
                title="Account Management"
                description="Understand account types, pricing, and how to manage your PARAM Sanganak account for compute resources."
                variant="blue"
            />

            <Alert variant="info" title="Pre-paid Recharge System">
                Starting from August 2024, PARAM Sanganak has implemented a pre-paid recharge system.
                Users need to recharge their accounts in advance based on anticipated CPU core hours and GPU card hours usage.
                <br /><br />
                Each CPU node consists of 48 cores, and each GPU node includes 2 GPU cards and 40 CPU cores. Users need to pay only as much as they use.
            </Alert>

            <div className="prose prose-slate dark:prose-invert max-w-none">

            <section id="regular-access">
                <h2>Regular Access</h2>
                <p>
                    Regular access is the standard account type for all IIT Kanpur users. It provides access to the full range of compute resources at standard rates.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                    <div className="p-6 bg-white dark:bg-slate-900 border-2 border-blue-200 dark:border-blue-800 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <IndianRupee className="text-blue-600 dark:text-blue-400" size={24} />
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 m-0">Pricing</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CPU Core Hour</span>
                                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">₹0.015</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">GPU Card Hour</span>
                                <span className="text-lg font-bold text-blue-600 dark:text-blue-400">₹0.50</span>
                            </div>
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-900 border-2 border-emerald-200 dark:border-emerald-800 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <AlertCircle className="text-emerald-600 dark:text-emerald-400" size={24} />
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 m-0">Account Details</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 dark:text-emerald-400 mt-1">✓</span>
                                <span><strong>Validity:</strong> Until October 31, 2026</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 dark:text-emerald-400 mt-1">✓</span>
                                <span><strong>Access:</strong> All active PARAM Sanganak accounts remain valid</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-600 dark:text-emerald-400 mt-1">✓</span>
                                <span><strong>Creation:</strong> Visit <a href="https://hars.iitk.ac.in/login" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">HARS Portal</a></span>
                            </li>
                        </ul>
                    </div>
                </div>

                <h3 className="flex items-center gap-2">
                    <Users size={20} className="text-purple-600 dark:text-purple-400" />
                    Pool-Based Allocation
                </h3>
                <p>
                    A <strong>Pool based allocation</strong> is now available for students. When students apply for a Pool,
                    the Principal Investigator (PI) allocates a common CPU core/GPU card hours for the entire group.
                </p>
                <ul className="list-disc pl-5 space-y-1">
                    <li>If Pool allocation is selected by a user, they will not be charged during Topup</li>
                    <li>Once selected, the Status of Pool Allocation for the Members who used Pool cannot be changed during Topup</li>
                </ul>

                <h3>Topup / Recharge</h3>
                <p>You can add compute hours to your account in multiples of:</p>
                <div className="grid sm:grid-cols-2 gap-4 my-4 not-prose">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2">CPU Core Hours</div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">20,000 hours</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">= ₹300</div>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <div className="font-semibold text-slate-900 dark:text-slate-100 mb-2">GPU Card Hours</div>
                        <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">600 hours</div>
                        <div className="text-sm text-slate-600 dark:text-slate-400 mt-1">= ₹300</div>
                    </div>
                </div>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>The top-up/recharge option is available for adding more CPU core/GPU card hours to your PARAM Sanganak account</li>
                    <li>Users or PIs can request additional hours under the "Application Details" section on the portal (HARS Portal)</li>
                    <li>PIs have to recommend application requests of their group members from the "Group Members" section on the portal (HARS Portal)</li>
                    <li>For those of Pool Allocation for the Members who used Pool, the rates are similar to those of regular applications</li>
                    <li>Recharge can be made with any amount</li>
                </ul>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="high-priority-access">
                <h2>High-Priority Access</h2>
                <p>
                    From August 1, 2024, new high-priority access facility is available in PARAM Sanganak for IIT Kanpur users.
                    High-priority access provides faster queue times and dedicated resources.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6 not-prose">
                    <div className="p-6 bg-white dark:bg-slate-900 border-2 border-orange-200 dark:border-orange-900/50 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <IndianRupee className="text-orange-600 dark:text-orange-400" size={24} />
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 m-0">Pricing</h3>
                        </div>
                        <div className="space-y-3">
                            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">CPU Core Hour</span>
                                <span className="text-lg font-bold text-orange-600 dark:text-orange-400">₹0.020</span>
                            </div>
                            <div className="flex justify-between items-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">GPU Card Hour</span>
                                <span className="text-lg font-bold text-orange-600 dark:text-orange-400">₹1.00</span>
                            </div>
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 mb-0 italic">All charges with NSM's usage</p>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-900 border-2 border-purple-200 dark:border-purple-900/50 rounded-xl shadow-sm">
                        <div className="flex items-center gap-2 mb-4">
                            <AlertCircle className="text-purple-600 dark:text-purple-400" size={24} />
                            <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 m-0">Account Details</h3>
                        </div>
                        <ul className="space-y-2 text-sm text-slate-700 dark:text-slate-300">
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                                <span><strong>Creation:</strong> Contact support via <a href="https://hars.iitk.ac.in/login" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 hover:underline">HARS Portal</a></span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                                <span><strong>Activation:</strong> Only after financial transactions are completed</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-purple-600 dark:text-purple-400 mt-1">✓</span>
                                <span><strong>Priority:</strong> Faster queue times and dedicated resources</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <h3>Topup / Recharge</h3>
                <p>The top-up/recharge option is now available for adding more CPU core/GPU card hours to your PARAM Sanganak account.</p>
                <ul className="list-disc pl-5 space-y-1 text-sm">
                    <li>Users or PIs can request additional hours under the "Application Details" section on the portal (HARS Portal)</li>
                    <li>PIs have to recommend application requests of their group members from the "Group Members" section on the portal (HARS Portal)</li>
                    <li>The rates are similar to those of regular applications</li>
                    <li>Recharge can be made with any amount</li>
                </ul>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="important-notes">
                <h2>Important Notes</h2>

                <Alert variant="warning" title="Payment Requirements">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>All users must pay for account creation and renewal charges</li>
                        <li>Payment is required before account activation</li>
                        <li>Charges are non-refundable once the account is created</li>
                    </ul>
                </Alert>

                <Alert variant="info" title="Policy and Documentation">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>IIT Kanpur specific policies are mentioned in the <a href="https://iitk.ac.in/hpc/data/ParamSanganak-Usage-Policy.pdf" target="_blank" rel="noreferrer" className="underline font-semibold">policy document</a></li>
                        <li>The current policy and initial instructions can be seen in the <a href="https://iitk.ac.in/hpc/paramsanganak" target="_blank" rel="noreferrer" className="underline font-semibold">official documentation</a></li>
                        <li>Detailed user's manual can be downloaded from <a href="https://iitk.ac.in/hpc/data/PARAM_Sanganak-User-Manual.pdf" target="_blank" rel="noreferrer" className="underline font-semibold">here</a></li>
                    </ul>
                </Alert>

                <Alert variant="success" title="NSM Support">
                    NSM support will be provided by C-DAC to PARAM Sanganak users for a period of 2 years through the Ticketing tool at{' '}
                    <a href="https://paramsanganak.iitk.ac.in/support" target="_blank" rel="noreferrer" className="underline font-semibold">
                        https://paramsanganak.iitk.ac.in/support
                    </a>
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="application-process">
                <h2>Application Process</h2>
                <p>
                    A demo of the application process in HARS portal is shown in{' '}
                    <a href="https://iitk.ac.in/hpc/paramsanganak" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
                        this document
                    </a>.
                </p>

                <h3>Creating a New Account</h3>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>
                        <strong>Login to HARS Portal:</strong> Please login to the portal at{' '}
                        <a href="https://hars.iitk.ac.in/login" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                            HARS Portal <ExternalLink size={14} />
                        </a>
                    </li>
                    <li>
                        <strong>Choose Your Designation:</strong> At first time signin, please choose your Designation (Faculty, Staff, Student, etc.)
                    </li>
                    <li>
                        <strong>Fill HPC Profile:</strong> Fill in the HPC Profile before applying for account creation or topup/recharge
                    </li>
                    <li>
                        <strong>Submit Application:</strong> Navigate to Application Details section and submit your application for new account
                    </li>
                    <li>
                        <strong>Wait for Approval:</strong> Your application will be reviewed and approved by the administrator
                    </li>
                    <li>
                        <strong>Make Payment:</strong> Once approved, complete the payment process
                    </li>
                    <li>
                        <strong>Account Activation:</strong> Your account will be activated after payment confirmation
                    </li>
                </ol>

                <h3 className="mt-8">Topup / Recharge of Account</h3>
                <p>
                    <strong>All active PARAM Sanganak accounts will remain valid until October 31, 2026.</strong>
                </p>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>
                        <strong>Login to HARS Portal:</strong> Please login to the portal at{' '}
                        <a href="https://hars.iitk.ac.in/login" target="_blank" rel="noreferrer" className="text-blue-600 hover:underline inline-flex items-center gap-1">
                            HARS Portal <ExternalLink size={14} />
                        </a>
                    </li>
                    <li>
                        <strong>Fill HPC Profile:</strong> Make sure your HPC Profile is up to date before applying
                    </li>
                    <li>
                        <strong>Request Topup:</strong> Navigate to Application Details and request additional compute hours
                    </li>
                    <li>
                        <strong>PI Recommendation:</strong> If you are a student, your PI must recommend your request from the "Group Members" section
                    </li>
                    <li>
                        <strong>Payment:</strong> Complete the payment for the requested compute hours
                    </li>
                </ol>

                <div className="bg-slate-100 dark:bg-slate-800 p-6 rounded-lg border border-slate-200 dark:border-slate-700 my-6 not-prose">
                    <h4 className="text-base font-bold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                        <ExternalLink size={18} />
                        Quick Links
                    </h4>
                    <div className="grid sm:grid-cols-2 gap-3">
                        <a
                            href="https://hars.iitk.ac.in/login"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400"
                        >
                            <CreditCard size={16} />
                            HARS Login Portal
                        </a>
                        <a
                            href="https://iitk.ac.in/hpc/paramsanganak"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400"
                        >
                            <ExternalLink size={16} />
                            Official Documentation
                        </a>
                        <a
                            href="https://iitk.ac.in/hpc/data/PARAM_Sanganak-User-Manual.pdf"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400"
                        >
                            <ExternalLink size={16} />
                            User Manual (PDF)
                        </a>
                        <a
                            href="https://paramsanganak.iitk.ac.in/support"
                            target="_blank"
                            rel="noreferrer"
                            className="flex items-center gap-2 p-3 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-700 hover:border-blue-400 dark:hover:border-blue-400 hover:bg-blue-50 dark:hover:bg-slate-800 transition-colors text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-700 dark:hover:text-blue-400"
                        >
                            <ExternalLink size={16} />
                            Support Ticketing
                        </a>
                    </div>
                </div>
            </section>

            <section id="checking-balance">
                <h2>Checking Your Account Balance</h2>
                <p>You can check your current balance and usage using the following commands on the login node:</p>

                <CodeBlock
                    language="bash"
                    title="Balance Check Commands"
                    code={`# Check storage quota
myquota

# Check regular access balance (for IIT Kanpur users)
IITK_RA_Balance

# Check high-priority access balance
IITK_HP_Balance`}
                />
            </section>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/core-concepts', label: 'Core Concepts' }}
                next={{ to: '/running-jobs', label: 'Running Jobs' }}
            />
        </div>
    );
}
