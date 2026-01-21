import { HelpCircle, Mail, MessageSquare, MapPin, FileText, CheckSquare, GraduationCap } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import { Alert } from '../components/Alert';

export function Support() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={HelpCircle}
                badge="Help & Support"
                title="Support"
                description="Run into an issue? We're here to help. Find resources, contact information, and learn how to submit support tickets."
                variant="blue"
            />

            <div className="prose prose-slate dark:prose-invert max-w-none">

            <section>
                <h2>Self Help</h2>
                <p>Before raising a ticket, please check:</p>
                <ul className="list-disc ml-5 space-y-2">
                    <li><strong>Official Website:</strong> Visit the <a href="https://iitk.ac.in/hpc/paramsanganak" target="_blank" rel="noreferrer" className="underline">PARAM Sanganak homepage</a> for announcements and updates.</li>
                    <li><strong>FAQ:</strong> Check the official <a href="https://paramsanganak.iitk.ac.in/faq" target="_blank" rel="noreferrer" className="underline">FAQ page</a>.</li>
                    <li><strong>User Manual:</strong> Download the complete <a href="https://iitk.ac.in/hpc/data/PARAM_Sanganak-User-Manual.pdf" target="_blank" rel="noreferrer" className="underline">User Manual (PDF)</a> for detailed instructions.</li>
                    <li><strong>Usage Policy:</strong> Read the <a href="https://iitk.ac.in/hpc/data/ParamSanganak-Usage-Policy.pdf" target="_blank" rel="noreferrer" className="underline">Usage Policy (PDF)</a> to understand guidelines and rules.</li>
                    <li><strong>HARS Portal:</strong> Access the <a href="https://hars.iitk.ac.in/login" target="_blank" rel="noreferrer" className="underline">HARS login portal</a> for account management and configuration.</li>
                    <li><strong>Google:</strong> Many SLURM/Linux errors are common and documented online.</li>
                </ul>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section>
                <h2>Contact Support</h2>
                <div className="grid md:grid-cols-3 gap-6 my-6 not-prose">
                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 rounded-lg flex items-center justify-center mb-4">
                            <Mail size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Technical Support</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                            For technical issues, job failures, and compilation errors.
                        </p>
                        <a href="mailto:sanganaksupport@iitk.ac.in" className="text-blue-600 dark:text-blue-400 font-medium hover:underline block mb-2">
                            sanganaksupport@iitk.ac.in
                        </a>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <MapPin size={16} />
                            <span>Room 212, IITK</span>
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-purple-50 dark:bg-purple-900/20 text-purple-600 dark:text-purple-400 rounded-lg flex items-center justify-center mb-4">
                            <MessageSquare size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Accounts & Billing</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                            For account creation, renewal, recharging, and billing reports.
                        </p>
                        <a href="mailto:hpcreports@iitk.ac.in" className="text-purple-600 dark:text-purple-400 font-medium hover:underline block mb-2">
                            hpcreports@iitk.ac.in
                        </a>
                        <div className="flex items-center gap-2 text-sm text-slate-600 dark:text-slate-400">
                            <MapPin size={16} />
                            <span>Room 208, IITK</span>
                        </div>
                    </div>

                    <div className="p-6 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <div className="w-12 h-12 bg-green-50 dark:bg-green-900/20 text-green-600 dark:text-green-400 rounded-lg flex items-center justify-center mb-4">
                            <FileText size={24} />
                        </div>
                        <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mb-2">Ticketing Portal</h3>
                        <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm">
                            Submit support tickets through the online NSM portal.
                        </p>
                        <a href="https://paramsanganak.iitk.ac.in/support/" target="_blank" rel="noreferrer" className="text-green-600 dark:text-green-400 font-medium hover:underline block">
                            paramsanganak.iitk.ac.in/support/
                        </a>
                        <p className="text-xs text-slate-500 dark:text-slate-500 mt-2">Use your Param Sanganak credentials to login</p>
                    </div>
                </div>

                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 mb-8">
                    <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-0 mb-2">Mailing Lists</h3>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">All Param Sanganak users are automatically added to the mailing list for system announcements, scheduled maintenance, and updates.</p>
                    <code className="bg-white dark:bg-slate-800 px-2 py-1 rounded border border-slate-300 dark:border-slate-700 text-slate-800 dark:text-slate-200">nsm@lists.iitk.ac.in</code>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="ticketing">
                <div className="flex items-center gap-3 mb-4">
                    <CheckSquare className="text-green-600 dark:text-green-400" size={24} />
                    <h2 className="m-0">Using the NSM Ticketing Portal</h2>
                </div>

                <p>
                    The NSM Support Portal provides a streamlined ticketing system for tracking and resolving issues.
                    You can submit tickets, track their status, and communicate with support staff all in one place.
                </p>

                <Alert variant="info" title="Portal URL">
                    <a href="https://paramsanganak.iitk.ac.in/support/" target="_blank" rel="noreferrer" className="underline">https://paramsanganak.iitk.ac.in/support/</a>
                </Alert>

                <h3>Step-by-Step Guide to Submit a Ticket</h3>

                <div className="space-y-4 my-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                            1
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Login to the Portal</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
                                Visit <a href="https://paramsanganak.iitk.ac.in/support/" target="_blank" rel="noreferrer" className="underline">paramsanganak.iitk.ac.in/support/</a> and login using your <strong>Param Sanganak username and password</strong> (same credentials you use for SSH access).
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                            2
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Navigate to Support Section</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
                                Once logged in, find and click on the <strong>"Support"</strong> or <strong>"Tickets"</strong> menu option.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                            3
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Create New Ticket</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
                                Click on <strong>"Create New Ticket"</strong> or <strong>"Submit Ticket"</strong> button.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                            4
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Fill in Ticket Details</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Provide comprehensive information about your issue:</p>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 m-0 list-disc pl-5">
                                <li><strong>Category:</strong> Select issue type (Technical, Account, Billing, etc.)</li>
                                <li><strong>Priority:</strong> Choose based on urgency (Low, Medium, High, Critical)</li>
                                <li><strong>Subject:</strong> Brief, descriptive title (e.g., "Job fails with segmentation fault")</li>
                                <li><strong>Description:</strong> Detailed explanation of the problem</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                            5
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Attach Supporting Files (Optional)</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Upload relevant files to help diagnose the issue:</p>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 m-0 list-disc pl-5">
                                <li>Error log files (<code>.err</code>, <code>.out</code> files)</li>
                                <li>Job submission scripts (remove sensitive data first)</li>
                                <li>Screenshots of errors or unexpected behavior</li>
                                <li>Configuration files related to the issue</li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center font-bold">
                            6
                        </div>
                        <div>
                            <h4 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Submit and Track</h4>
                            <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
                                Click <strong>"Submit"</strong> to create the ticket. You'll receive a <strong>ticket ID</strong> via email.
                                Use this ID to track status and add follow-up information through the portal.
                            </p>
                        </div>
                    </div>
                </div>

                <Alert variant="warning" title="Response Times">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li><strong>Critical issues:</strong> Response within 4 hours (system-wide outages, security issues)</li>
                        <li><strong>High priority:</strong> Response within 24 hours (job failures, login issues)</li>
                        <li><strong>Medium/Low priority:</strong> Response within 2-3 business days (feature requests, general queries)</li>
                    </ul>
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="acknowledgment">
                <div className="flex items-center gap-3 mb-4">
                    <GraduationCap className="text-purple-600 dark:text-purple-400" size={24} />
                    <h2 className="m-0">Acknowledging PARAM Sanganak in Publications</h2>
                </div>

                <p>
                    If you use PARAM Sanganak resources for research that leads to publications, presentations, or other academic outputs,
                    please acknowledge the facility. This helps demonstrate the impact of the HPC infrastructure and supports continued funding and development.
                </p>

                <h3>Acknowledgment Text</h3>
                <p>Please include the following acknowledgment in your publications:</p>

                <div className="bg-purple-50 dark:bg-purple-900/20 border border-purple-200 dark:border-purple-900/50 rounded-lg p-4 my-4">
                    <p className="text-sm text-purple-900 dark:text-purple-200 font-mono leading-relaxed m-0">
                        "The computational work reported in this paper was performed using the resources of PARAM Sanganak,
                        the supercomputing facility at IIT Kanpur established under the National Supercomputing Mission (NSM),
                        Government of India, and supported by C-DAC and the Ministry of Electronics and Information Technology (MeitY)."
                    </p>
                </div>

                <h3>Citation Information</h3>
                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-4 my-4">
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Facility Name:</strong> PARAM Sanganak</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Institution:</strong> Indian Institute of Technology Kanpur (IIT Kanpur)</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Program:</strong> National Supercomputing Mission (NSM)</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Peak Performance:</strong> 1.66 PetaFlops</p>
                    <p className="text-sm text-slate-700 dark:text-slate-300 mb-2"><strong>Website:</strong> <a href="https://iitk.ac.in/hpc/paramsanganak" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline">iitk.ac.in/hpc/paramsanganak</a></p>
                </div>

                <Alert variant="info" title="Share Your Publications">
                    Please inform the HPC team about publications that used PARAM Sanganak resources by emailing a copy or citation to{' '}
                    <a href="mailto:hpcreports@iitk.ac.in" className="underline font-medium">hpcreports@iitk.ac.in</a>.
                    This helps us track the scientific impact and showcase research achievements.
                </Alert>

                <h3>Why Acknowledge?</h3>
                <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-2">
                    <li>
                        <strong>Demonstrates Impact:</strong> Helps justify continued investment in HPC infrastructure by showing tangible research outcomes
                    </li>
                    <li>
                        <strong>NSM Reporting:</strong> The National Supercomputing Mission tracks research output from all NSM facilities
                    </li>
                    <li>
                        <strong>Future Funding:</strong> Publication counts and citation metrics influence future funding decisions for the facility
                    </li>
                    <li>
                        <strong>Academic Recognition:</strong> Properly acknowledges the computational resources that contributed to your research
                    </li>
                </ul>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section className="bg-slate-50 dark:bg-slate-900 p-6 rounded-lg border border-slate-200 dark:border-slate-800">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-0">How to Raise a Good Ticket</h3>
                <p className="mb-4">To get the fastest resolution, please include comprehensive information:</p>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-0 mb-2">Essential Information</h4>
                        <ul className="list-disc ml-5 space-y-1 text-slate-700 dark:text-slate-300 m-0">
                            <li><strong>Job ID:</strong> SLURM job ID if related to job failure (from <code>squeue</code> or <code>sacct</code>)</li>
                            <li><strong>Username:</strong> Your Param Sanganak username</li>
                            <li><strong>Date & Time:</strong> When the issue occurred</li>
                            <li><strong>Partition:</strong> Which partition you're using (small, medium, gpu, etc.)</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="text-base font-semibold text-slate-800 dark:text-slate-200 mt-0 mb-2">Supporting Files</h4>
                        <ul className="list-disc ml-5 space-y-1 text-slate-700 dark:text-slate-300 m-0">
                            <li><strong>Error Logs:</strong> Complete <code>.err</code> and <code>.out</code> files</li>
                            <li><strong>Job Script:</strong> Your SLURM submission script (sanitize sensitive data)</li>
                            <li><strong>Module List:</strong> Output of <code>module list</code> command</li>
                            <li><strong>Screenshots:</strong> For GUI-related or visualization issues</li>
                        </ul>
                    </div>
                </div>

                <CodeBlock
                    language="bash"
                    code={`# Example: Gather information for a ticket about job 12345
$ sacct -j 12345 --format=JobID,State,ExitCode,Elapsed
$ cat error_12345.err > /tmp/my_error.txt
$ cat job_script.sh > /tmp/my_script.txt
$ module list > /tmp/my_modules.txt 2>&1

# Attach these files when submitting ticket`}
                />

                <Alert variant="tip" title="Pro Tip">
                    The more detailed your ticket, the faster we can diagnose and resolve the issue.
                    Vague descriptions like "my job failed" without logs or job IDs significantly delay resolution.
                </Alert>
            </section>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/usage-policy', label: 'Usage Policy' }}
            />
        </div>
    );
}
