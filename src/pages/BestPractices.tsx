import { ShieldCheck, Zap, AlertOctagon, HardDrive, Lock, Gauge } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import { Alert } from '../components/Alert';

export function BestPractices() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={ShieldCheck}
                badge="Guidelines"
                title="Best Practices"
                description="Follow these guidelines to ensure fair usage, high performance, and data safety on Param Sanganak."
                variant="green"
            />

            <div className="prose prose-slate dark:prose-invert max-w-none">

            <figure className="my-8">
                <img
                    src="/filesystem.png"
                    alt="File System Comparison: Home vs Scratch"
                    className="w-full h-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg"
                />
                <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                    Figure 1: Understanding Storage Tiers
                </figcaption>
            </figure>

            <div className="grid md:grid-cols-2 gap-6 my-8">
                <div className="p-6 bg-red-50 dark:bg-red-900/20 rounded-xl border border-red-100 dark:border-red-900/50">
                    <h3 className="text-red-700 dark:text-red-400 flex items-center gap-2 m-0 mb-4">
                        <AlertOctagon size={20} />
                        Don'ts
                    </h3>
                    <ul className="list-disc pl-4 space-y-2 text-red-900 dark:text-red-200 text-sm">
                        <li><strong>Never run computational jobs on the Login Node.</strong> It will slow down the system for everyone.</li>
                        <li>Do not use `spaces` in directory or file names (e.g., "My Data"). Use underscores ("My_Data").</li>
                        <li>Do not install unverified software from unknown sources.</li>
                        <li>Don't keep large datasets in `/home`. It has a small quota.</li>
                    </ul>
                </div>

                <div className="p-6 bg-emerald-50 dark:bg-emerald-900/20 rounded-xl border border-emerald-100 dark:border-emerald-900/50">
                    <h3 className="text-emerald-700 dark:text-emerald-400 flex items-center gap-2 m-0 mb-4">
                        <Zap size={20} />
                        Dos
                    </h3>
                    <ul className="list-disc pl-4 space-y-2 text-emerald-900 dark:text-emerald-200 text-sm">
                        <li>Use <strong>/scratch</strong> for all heavy I/O and job outputs.</li>
                        <li>Compile your code on the login node, but <strong>submit jobs</strong> to run it.</li>
                        <li>Back up your critical data from `/home` to your local machine regularly.</li>
                        <li>Use compiler optimization flags like <code>-O3</code> for production runs.</li>
                    </ul>
                </div>
            </div>

            <section id="storage">
                <div className="flex items-center gap-3 text-blue-600 dark:text-blue-400 mb-4">
                    <HardDrive size={24} />
                    <h2 className="m-0">Storage Quotas and Data Management</h2>
                </div>

                <p>
                    Understanding storage quotas and retention policies is critical for managing your data effectively on Param Sanganak.
                    Each user has specific limits on both <code>/home</code> and <code>/scratch</code> storage spaces.
                </p>

                <h3>Storage Quotas</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Storage Type</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Quota per User</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Backed Up?</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Retention Policy</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Best Use Case</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="bg-blue-50 dark:bg-blue-900/10">
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400 font-semibold">/home</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">500 GB</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-green-100 dark:bg-green-900/30 text-green-800 dark:text-green-300">
                                        ✓ Yes
                                    </span>
                                </td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Permanent</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Source code, scripts, small datasets</td>
                            </tr>
                            <tr className="bg-orange-50 dark:bg-orange-900/10">
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-orange-600 dark:text-orange-400 font-semibold">/scratch</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">1 TB</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">
                                    <span className="inline-flex items-center px-2 py-1 rounded-full text-xs font-medium bg-red-100 dark:bg-red-900/30 text-red-800 dark:text-red-300">
                                        ✗ No
                                    </span>
                                </td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">
                                    <span className="text-red-600 dark:text-red-400 font-semibold">60 days</span>
                                    <div className="text-xs text-slate-500 dark:text-slate-400 mt-1">Files older than 60 days may be deleted</div>
                                </td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Job I/O, temporary results, large datasets</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Alert variant="error" title="Critical Warning: /scratch is NOT backed up!">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>Files in <code>/scratch</code> older than 60 days may be automatically deleted without notice</li>
                        <li>Data in <code>/scratch</code> is NOT backed up - hardware failures can result in permanent data loss</li>
                        <li>Always move important results from <code>/scratch</code> to <code>/home</code> or your local machine</li>
                    </ul>
                </Alert>

                <h3>Check Your Current Usage</h3>
                <p>Use the <code>myquota</code> command to monitor your storage consumption:</p>
                <CodeBlock
                    language="bash"
                    code={`$ myquota

# Output shows usage for both /home and /scratch:
# Filesystem    Used    Quota    Limit    % Used
# /home         245GB   500GB    500GB    49%
# /scratch      732GB   1TB      1TB      71%`}
                />

                <Alert variant="tip" title="Pro Tip">
                    Run <code>myquota</code> regularly to avoid hitting quota limits, which can cause jobs to fail unexpectedly.
                </Alert>

                <h3>Data Lifecycle Management</h3>
                <p>Follow this workflow to manage your data effectively:</p>

                {/* IMAGE PLACEHOLDER: Data Lifecycle Diagram */}
                {/*
                AI Image Generation Prompt:
                "Create a horizontal flowchart diagram showing HPC data lifecycle with 7 stages:
                1. UPLOAD: Arrow from 'Local Machine' to '/home' (blue box, laptop icon)
                2. PREPARE: '/home' to '/scratch' (orange box, folder icon with arrow) - label: 'Copy input files before job'
                3. COMPUTE: '/scratch' box (green box, CPU icon) - label: 'Jobs read/write here'
                4. ARCHIVE: '/scratch' to '/home' (blue box, archive icon) - label: 'Move important results'
                5. DOWNLOAD: '/home' to 'Local Machine' (purple box, download icon) - label: 'Backup locally'

                Add warning badge on /scratch: '60-day retention, NOT backed up'
                Add checkmark badge on /home: 'Backed up, Permanent'
                Use clean, modern flat design with icons. Color scheme: blue (#3b82f6), orange (#f59e0b), green (#10b981), purple (#8b5cf6).
                Background: white/light gray gradient. Include legend at bottom.
                Save as: /public/data_lifecycle.png
                */}
                <figure className="my-8">
                    <img
                        src="/data_lifecycle.png"
                        alt="HPC Data Lifecycle"
                        className="w-full h-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg"
                    />
                    <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                        Figure: Recommended Data Lifecycle Workflow
                    </figcaption>
                </figure>

                <ol className="space-y-3 my-4">
                    <li>
                        <strong>Upload:</strong> Transfer your input files and code to <code>/home</code> directory
                    </li>
                    <li>
                        <strong>Prepare:</strong> Copy necessary input files from <code>/home</code> to <code>/scratch</code> before submitting jobs
                    </li>
                    <li>
                        <strong>Compute:</strong> Configure jobs to read inputs from and write outputs to <code>/scratch</code> for best I/O performance
                    </li>
                    <li>
                        <strong>Archive:</strong> After job completion, move important results from <code>/scratch</code> to <code>/home</code>
                    </li>
                    <li>
                        <strong>Download:</strong> Regularly backup critical data from <code>/home</code> to your local machine
                    </li>
                    <li>
                        <strong>Clean up:</strong> Delete unnecessary files from <code>/scratch</code> to free up space for future jobs
                    </li>
                </ol>

                <h3>Backup Strategies</h3>
                <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
                        <h4 className="text-emerald-700 dark:text-emerald-400 m-0 mb-2 text-base">What to Backup</h4>
                        <ul className="list-disc pl-5 text-sm text-emerald-900 dark:text-emerald-200 space-y-1 m-0">
                            <li>Source code and scripts</li>
                            <li>Configuration files</li>
                            <li>Final simulation results</li>
                            <li>Analysis outputs and plots</li>
                            <li>Documentation and notes</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-slate-50 dark:bg-slate-900/20 rounded-lg border border-slate-200 dark:border-slate-800">
                        <h4 className="text-slate-700 dark:text-slate-400 m-0 mb-2 text-base">What NOT to Backup</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1 m-0">
                            <li>Temporary files and logs</li>
                            <li>Intermediate checkpoints (keep latest only)</li>
                            <li>Data that can be regenerated easily</li>
                            <li>Software binaries and modules (already installed)</li>
                        </ul>
                    </div>
                </div>

                <h3>Efficient Data Transfer</h3>
                <p>For transferring data between Param Sanganak and your local machine, use these methods:</p>
                <CodeBlock
                    language="bash"
                    code={`# Using SCP (secure copy)
scp -P 4422 username@paramsanganak.iitk.ac.in:/home/username/results.tar.gz .

# Using rsync (efficient for large transfers, resumes on interruption)
rsync -avz -e "ssh -p 4422" username@paramsanganak.iitk.ac.in:/home/username/data/ ./local_backup/

# Compress before transfer to save time
tar -czf results.tar.gz results/
scp -P 4422 results.tar.gz username@paramsanganak.iitk.ac.in:/home/username/`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="security">
                <div className="flex items-center gap-3 text-purple-600 dark:text-purple-400 mb-4">
                    <Lock size={24} />
                    <h2 className="m-0">Security and File Permissions</h2>
                </div>

                <p>
                    Proper file permissions protect your data and prevent unauthorized access. On a shared HPC system,
                    it's essential to set appropriate permissions for your files and directories.
                </p>

                <h3>Understanding File Permissions</h3>
                <p>Linux uses a 3-digit octal notation for permissions, where each digit represents permissions for:</p>
                <ul>
                    <li><strong>First digit:</strong> Owner (you)</li>
                    <li><strong>Second digit:</strong> Group (your research group)</li>
                    <li><strong>Third digit:</strong> Others (all other users)</li>
                </ul>

                <p className="mt-4">Each digit is the sum of:</p>
                <ul>
                    <li><code>4</code> = Read permission</li>
                    <li><code>2</code> = Write permission</li>
                    <li><code>1</code> = Execute permission</li>
                </ul>

                <h3>Recommended Permission Settings</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Permission</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Octal</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Symbolic</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Use Case</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Command</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">Private</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-purple-600 dark:text-purple-400">700</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">rwx------</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Sensitive data, private directories</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">chmod 700 dir/</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">Group Readable</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400">750</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">rwxr-x---</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Share with research group only</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">chmod 750 dir/</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">Public Readable</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-green-600 dark:text-green-400">755</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">rwxr-xr-x</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Public code, shared utilities</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">chmod 755 dir/</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">Private Files</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-purple-600 dark:text-purple-400">600</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">rw-------</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Configuration files, SSH keys</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">chmod 600 file</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">Executable Scripts</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-green-600 dark:text-green-400">755</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">rwxr-xr-x</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Job scripts, analysis tools</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">chmod 755 script.sh</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Common Permission Commands</h3>
                <CodeBlock
                    language="bash"
                    code={`# Set private permissions for your home directory
chmod 700 /home/username

# Make a job script executable
chmod +x myjob.sh

# Set group-readable permissions for shared project
chmod -R 750 /scratch/username/shared_project/

# Check current permissions
ls -la /home/username/

# Output format: drwx------ (d=directory, rwx=owner, ---=group, ---=others)

# Secure SSH keys (must be 600 or SSH will refuse to use them)
chmod 600 ~/.ssh/id_rsa`}
                />

                <Alert variant="warning" title="Security Best Practices">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>Never set permissions to <code>777</code> (world-writable) - this allows anyone to modify your files</li>
                        <li>Keep your home directory private (<code>chmod 700 $HOME</code>)</li>
                        <li>Protect SSH keys with <code>600</code> permissions</li>
                        <li>Use <code>750</code> for directories you want to share with your research group only</li>
                        <li>Regularly audit permissions with <code>ls -la</code></li>
                    </ul>
                </Alert>

                <h3>Password Policy</h3>
                <p>Param Sanganak enforces a strict password policy to maintain system security:</p>
                <ul>
                    <li><strong>Password expiry:</strong> Passwords expire every 90 days</li>
                    <li><strong>First login:</strong> You must change the initial password upon first login</li>
                    <li><strong>Complexity requirements:</strong> Use strong passwords with mix of uppercase, lowercase, numbers, and special characters</li>
                    <li><strong>Password reset:</strong> Email <a href="mailto:sanganaksupport@iitk.ac.in">sanganaksupport@iitk.ac.in</a> if you forget your password</li>
                </ul>

                <CodeBlock
                    language="bash"
                    code={`# Change your password
$ passwd

# You'll be prompted:
# Current password:
# New password:
# Retype new password:`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="striping">
                <h2>File System Striping for Large Files</h2>
                <p>
                    When working with very large files (100+ GB), you can improve performance by using <strong>Lustre file striping</strong>.
                    This spreads your file across multiple storage servers (OSTs), allowing faster parallel read/write operations.
                </p>

                <Alert variant="info" title="When to use striping">
                    For files larger than 100 GB that will be accessed by parallel jobs. Regular small files don't need striping.
                </Alert>

                <h3>Check Current Stripe Settings</h3>
                <CodeBlock
                    language="bash"
                    code={`# Check striping info for a file or directory
lfs getstripe /scratch/username/mydata/

# Output shows:
# stripe_count: 1
# stripe_size: 1048576 (1 MB)
# stripe_offset: -1`}
                />

                <h3>Set Striping for a Directory</h3>
                <p>All new files created in this directory will inherit the striping pattern:</p>
                <CodeBlock
                    language="bash"
                    code={`# Create directory with striping
mkdir /scratch/username/bigdata
lfs setstripe -c 4 -S 4M /scratch/username/bigdata/

# -c 4: Use 4 OSTs (stripe count)
# -S 4M: Each stripe is 4MB in size`}
                />

                <h3>Recommended Stripe Settings</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm text-left border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">File Size</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Stripe Count (-c)</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-slate-100">Stripe Size (-S)</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">&lt; 100 GB</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">1 (default)</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">1 MB (default)</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">100 GB - 500 GB</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">4</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">4 MB</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">500 GB - 1 TB</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">8</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">4 MB</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">&gt; 1 TB</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">16 or more</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">8 MB</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Alert variant="warning" title="Important Notes">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>Striping only helps for large files accessed in parallel</li>
                        <li>Too many stripes can actually hurt performance for small random I/O</li>
                        <li>Set striping BEFORE creating files - you cannot change striping for existing files</li>
                    </ul>
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="performance">
                <div className="flex items-center gap-3 text-orange-600 dark:text-orange-400 mb-4">
                    <Gauge size={24} />
                    <h2 className="m-0">Performance Optimization Tips</h2>
                </div>

                <p>
                    Optimizing your code and job configuration can dramatically improve performance and reduce computation time.
                    Here are essential optimization techniques for Param Sanganak.
                </p>

                <div className="space-y-4">
                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-2">Compilation Flags</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">Use appropriate optimization levels:</p>
                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1 mb-3">
                            <li><code>-O0</code>: No optimization (for debugging only)</li>
                            <li><code>-O1</code>: Basic optimization (faster compilation, minimal optimization)</li>
                            <li><code>-O2</code>: Standard optimization (good balance for most cases)</li>
                            <li><code>-O3</code>: Aggressive optimization (best performance for production)</li>
                            <li><code>-march=native</code>: Optimize for specific CPU architecture (use with caution if binaries move between systems)</li>
                            <li><code>-march=cascadelake</code>: Optimize specifically for Param Sanganak's Intel Xeon Cascade Lake processors</li>
                        </ul>
                        <CodeBlock
                            language="bash"
                            code={`# Intel Compiler with aggressive optimization
module load compiler/intel/latest
icc -O3 -xCORE-AVX512 -march=cascadelake myprogram.c -o myprogram

# GNU Compiler with optimization
gcc -O3 -march=cascadelake -mtune=cascadelake myprogram.c -o myprogram

# MPI code compilation
mpiicc -O3 -xCORE-AVX512 mpi_program.c -o mpi_program`}
                        />
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-2">I/O Best Practices</h3>
                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            <li>Use local node scratch (<code>/tmp</code>) for temporary files during job execution - it's much faster than network storage</li>
                            <li>Write final results to <code>/scratch</code> at the end of the job</li>
                            <li>Avoid many small file operations - combine into larger files when possible (use HDF5, NetCDF for scientific data)</li>
                            <li>Use binary formats instead of ASCII/text for large datasets (10-100x smaller files, faster I/O)</li>
                            <li>Minimize <code>printf/cout</code> statements in tight loops - excessive output slows down execution</li>
                            <li>Use buffered I/O and larger buffer sizes for sequential file access</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-2">MPI Performance and Environment Variables</h3>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-3">
                            Param Sanganak uses InfiniBand interconnect for high-speed MPI communication.
                            Setting proper environment variables is crucial for optimal performance.
                        </p>

                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-3 mb-2">Essential MPI Environment Variables</h4>
                        <div className="overflow-x-auto my-3">
                            <table className="w-full text-xs border-collapse border border-slate-200 dark:border-slate-700">
                                <thead className="bg-slate-50 dark:bg-slate-800">
                                    <tr>
                                        <th className="p-2 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Variable</th>
                                        <th className="p-2 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Value</th>
                                        <th className="p-2 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Purpose</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400">I_MPI_FABRICS</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-xs">shm:dapl</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700">Use shared memory for intra-node, DAPL (InfiniBand) for inter-node communication</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400">I_MPI_FALLBACK</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-xs">0</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700">Disable fallback to slower TCP (ensures InfiniBand is used)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400">I_MPI_PIN</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-xs">1</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700">Enable process pinning to cores (prevents migration)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400">I_MPI_PIN_DOMAIN</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-xs">core</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700">Pin each MPI process to a specific core</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400">I_MPI_DEBUG</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-xs">4</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700">Print MPI fabric and pinning info (useful for debugging)</td>
                                    </tr>
                                    <tr>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400">OMP_NUM_THREADS</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700 font-mono text-xs">1-48</td>
                                        <td className="p-2 border border-slate-200 dark:border-slate-700">Set OpenMP threads (for hybrid MPI+OpenMP codes)</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-3 mb-2">Sample Optimized Job Script</h4>
                        <CodeBlock
                            language="bash"
                            code={`#!/bin/bash
#SBATCH -N 4
#SBATCH --ntasks-per-node=48
#SBATCH --partition=medium
#SBATCH --time=02:00:00

# Load Intel MPI
module load compiler/intel/latest

# Set MPI environment for InfiniBand
export I_MPI_FABRICS=shm:dapl         # Use InfiniBand
export I_MPI_FALLBACK=0               # No TCP fallback
export I_MPI_PIN=1                    # Enable pinning
export I_MPI_PIN_DOMAIN=core          # Pin to cores
export I_MPI_DEBUG=4                  # Print fabric info

# For hybrid MPI+OpenMP codes (optional)
# export OMP_NUM_THREADS=4
# export I_MPI_PIN_DOMAIN=omp

# Run with 192 MPI processes (4 nodes × 48 cores)
mpirun -np 192 ./my_mpi_program`}
                        />

                        <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-3 my-3 rounded-r-md">
                            <p className="text-xs text-green-900 dark:text-green-200 m-0">
                                <strong>💡 Performance Tip:</strong> Always verify that InfiniBand is being used by checking job output for
                                "DAPL" or "dapl" fabric messages when <code>I_MPI_DEBUG=4</code> is set.
                            </p>
                        </div>

                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-3 mb-2">Additional MPI Tips</h4>
                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            <li>Match MPI processes to physical cores: 48 per standard CPU node, 40 per GPU node, 48 per high-memory node</li>
                            <li>For hybrid MPI+OpenMP: Use fewer MPI ranks and set <code>OMP_NUM_THREADS</code> appropriately (e.g., 12 MPI ranks × 4 threads = 48 cores)</li>
                            <li>Use <code>mpirun</code> instead of <code>srun</code> for Intel MPI to ensure environment variables are properly applied</li>
                            <li>Minimize MPI communication overhead by increasing computation-to-communication ratio</li>
                            <li>Profile your code with Intel VTune or similar tools to identify bottlenecks</li>
                        </ul>
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-2">GPU Optimization (for GPU Partition)</h3>
                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1 mb-3">
                            <li>Use both GPUs per node when possible (2× NVIDIA V100 per node)</li>
                            <li>Ensure CUDA code is compiled with appropriate compute capability: <code>-arch=sm_70</code> for V100</li>
                            <li>Pin GPU affinity to prevent processes from competing for the same GPU</li>
                            <li>Monitor GPU utilization with <code>nvidia-smi</code> to ensure GPUs are fully utilized</li>
                            <li>Transfer data between CPU and GPU in large batches to minimize latency</li>
                        </ul>
                        <CodeBlock
                            language="bash"
                            code={`# Sample GPU job script
#SBATCH --partition=gpu
#SBATCH --gres=gpu:2              # Request 2 GPUs
#SBATCH --ntasks-per-node=2       # 1 task per GPU

module load cuda/latest

# Run with GPU affinity
mpirun -np 2 ./my_gpu_program`}
                        />
                    </div>

                    <div className="p-4 bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h3 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-2">Memory Optimization</h3>
                        <ul className="list-disc pl-5 text-sm text-slate-600 dark:text-slate-400 space-y-1">
                            <li>Standard nodes have 192 GB RAM (≈4 GB per core with 48 cores)</li>
                            <li>High-memory nodes have 768 GB RAM (≈16 GB per core) - use <code>--partition=hm</code> for memory-intensive jobs</li>
                            <li>Monitor memory usage with <code>sstat</code> during job execution</li>
                            <li>Avoid memory leaks - use valgrind for debugging: <code>valgrind --leak-check=full ./program</code></li>
                            <li>Use memory-efficient data structures and algorithms</li>
                        </ul>
                    </div>
                </div>
            </section>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/debugging', label: 'Debugging & Troubleshooting' }}
                next={{ to: '/usage-policy', label: 'Usage Policy' }}
            />
        </div>
    );
}
