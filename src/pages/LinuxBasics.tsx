import {
    Terminal,
    FolderOpen,
    FileText,
    Search,
    Lock,
    Activity,
    Wifi,
    Key,
    Settings,
    Edit3,
    Code2,
    Cpu,
    BookOpen,
    ChevronRight,
    Monitor
} from 'lucide-react';
import { PageHeader, SectionHeader, SectionDivider } from '../components/PageHeader';
import { CodeBlock } from '../components/CodeBlock';
import { Alert } from '../components/Alert';
import { PlatformTabs } from '../components/PlatformTabs';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import {
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableHeaderCell,
    TableCell,
} from '../components/Table';

export function LinuxBasics() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={Terminal}
                badge="Prerequisites"
                title="Linux & MPI Refresher"
                description="Essential Linux commands and parallel computing concepts you need to know before working with Param Sanganak. Perfect for beginners and as a quick reference."
                variant="indigo"
            />

            {/* Quick Navigation */}
            <nav className="bg-slate-50 dark:bg-slate-900 rounded-xl p-5 border border-slate-200 dark:border-slate-800">
                <h2 className="text-sm font-semibold text-slate-900 dark:text-slate-100 mb-3 flex items-center gap-2">
                    <BookOpen size={16} />
                    On This Page
                </h2>
                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
                    {[
                        { href: '#setup', label: 'Environment Setup' },
                        { href: '#navigation', label: 'Navigation & Help' },
                        { href: '#directories', label: 'Directory Operations' },
                        { href: '#files', label: 'File Operations' },
                        { href: '#viewing', label: 'Viewing Files' },
                        { href: '#searching', label: 'Searching & Sorting' },
                        { href: '#permissions', label: 'File Permissions' },
                        { href: '#processes', label: 'Process Monitoring' },
                        { href: '#networking', label: 'Networking' },
                        { href: '#ssh', label: 'SSH & Remote Access' },
                        { href: '#environment', label: 'Environment Variables' },
                        { href: '#vim', label: 'Vim Editor' },
                        { href: '#scripting', label: 'Bash Scripting' },
                        { href: '#mpi', label: 'MPI Basics' },
                    ].map((item) => (
                        <a
                            key={item.href}
                            href={item.href}
                            className="flex items-center gap-1 px-3 py-2 text-sm text-slate-600 dark:text-slate-400 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100 dark:hover:bg-slate-800 rounded-lg transition-colors"
                        >
                            <ChevronRight size={14} />
                            {item.label}
                        </a>
                    ))}
                </div>
            </nav>

            <Alert variant="info" title="Who is this for?">
                This guide is designed for university students (sophomores and above) who have basic computer knowledge but may not be familiar with Linux command-line operations. Even if you've only used Windows or macOS with graphical interfaces, this guide will help you get started.
            </Alert>

            {/* Section: Environment Setup */}
            <section id="setup">
                <SectionHeader icon={Monitor} title="Setting Up Your Environment" variant="indigo" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Before connecting to Param Sanganak, you need a way to run Linux commands on your local machine. Here's how to set up a terminal based on your operating system.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    {/* Windows */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-lg flex items-center justify-center">
                                <Monitor size={16} className="text-blue-600 dark:text-blue-400" />
                            </span>
                            Windows Users
                        </h4>

                        <div className="space-y-4">
                            <div>
                                <h5 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Option 1: Git Bash (Recommended for beginners)</h5>
                                <ol className="text-sm text-slate-600 dark:text-slate-400 space-y-1 list-decimal list-inside">
                                    <li>Download Git for Windows from <code className="text-pink-600 dark:text-pink-400">git-scm.com</code></li>
                                    <li>Run the installer (keep all default settings)</li>
                                    <li>Open the application "Git Bash"</li>
                                </ol>
                            </div>

                            <div>
                                <h5 className="text-sm font-medium text-slate-800 dark:text-slate-200 mb-2">Option 2: WSL (Windows Subsystem for Linux)</h5>
                                <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">Open PowerShell as Administrator and run:</p>
                                <CodeBlock code="wsl --install" language="bash" title="PowerShell (Admin)" />
                            </div>
                        </div>
                    </div>

                    {/* macOS / Linux */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4 flex items-center gap-2">
                            <span className="w-8 h-8 bg-emerald-100 dark:bg-emerald-900/30 rounded-lg flex items-center justify-center">
                                <Terminal size={16} className="text-emerald-600 dark:text-emerald-400" />
                            </span>
                            macOS / Linux Users
                        </h4>

                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-4">
                            You already have a terminal built-in! Simply:
                        </p>

                        <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-2">
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                <span><strong>macOS:</strong> Open Spotlight (Cmd + Space), type "Terminal", and press Enter</span>
                            </li>
                            <li className="flex items-start gap-2">
                                <span className="text-emerald-500 mt-0.5">•</span>
                                <span><strong>Linux:</strong> Press Ctrl + Alt + T or search for "Terminal" in your applications</span>
                            </li>
                        </ul>
                    </div>
                </div>

                <Alert variant="tip" title="Test Your Setup">
                    Once you have a terminal open, try typing <code>echo "Hello World"</code> and press Enter. If you see "Hello World" printed, you're ready to go!
                </Alert>
            </section>

            <SectionDivider />

            {/* Section: Navigation */}
            <section id="navigation">
                <SectionHeader icon={FolderOpen} title="Navigation & Help" variant="blue" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    These are the most fundamental commands you'll use to move around the file system and get help.
                </p>

                <div className="space-y-6">
                    {/* pwd */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <code className="text-blue-600 dark:text-blue-400">pwd</code> - Print Working Directory
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            Shows the full path of your current location in the file system. Think of it as "Where am I?"
                        </p>
                        <CodeBlock code={`$ pwd
/home/username`} language="bash" />
                    </div>

                    {/* ls */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <code className="text-blue-600 dark:text-blue-400">ls</code> - List Directory Contents
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            Shows all files and folders in the current directory. Think of it as "What's here?"
                        </p>
                        <CodeBlock code={`# Basic listing
ls

# Long format (shows permissions, size, date)
ls -l

# Show hidden files (files starting with .)
ls -a

# Human-readable file sizes
ls -lh

# Combine options
ls -lah`} language="bash" />
                    </div>

                    {/* cd */}
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <code className="text-blue-600 dark:text-blue-400">cd</code> - Change Directory
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            Moves you to a different directory. Think of it as navigating through folders.
                        </p>
                        <CodeBlock code={`# Go to home directory
cd ~

# Go to a specific folder
cd /scratch/username

# Go up one directory (parent folder)
cd ..

# Go back to the previous directory
cd -

# Go to a subfolder
cd projects/simulation`} language="bash" />
                    </div>

                    {/* man and echo */}
                    <div className="grid md:grid-cols-2 gap-4">
                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                <code className="text-blue-600 dark:text-blue-400">man</code> - Manual Pages
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Opens the documentation for any command. Press <code>q</code> to exit.
                            </p>
                            <CodeBlock code={`# Get help for the ls command
man ls

# Get help for any command
man <command_name>`} language="bash" />
                        </div>

                        <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                            <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                                <code className="text-blue-600 dark:text-blue-400">echo</code> - Print Text
                            </h4>
                            <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                                Prints text or variable values to the screen.
                            </p>
                            <CodeBlock code={`# Print a message
echo "Hello World"

# Print a variable value
echo $HOME

# Print multiple variables
echo "User: $USER, Shell: $SHELL"`} language="bash" />
                        </div>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Section: Directory Operations */}
            <section id="directories">
                <SectionHeader icon={FolderOpen} title="Directory Operations" variant="green" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Learn how to create, delete, and manage directories (folders).
                </p>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Command</TableHeaderCell>
                            <TableHeaderCell>Description</TableHeaderCell>
                            <TableHeaderCell>Example</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell mono>mkdir</TableCell>
                            <TableCell>Create a new directory</TableCell>
                            <TableCell mono>mkdir project_v1</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>mkdir -p</TableCell>
                            <TableCell>Create nested directories</TableCell>
                            <TableCell mono>mkdir -p app/logs/2024</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>rmdir</TableCell>
                            <TableCell>Remove empty directory</TableCell>
                            <TableCell mono>rmdir old_folder</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>rm -r</TableCell>
                            <TableCell>Remove directory and contents</TableCell>
                            <TableCell mono>rm -r project_backup</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>touch</TableCell>
                            <TableCell>Create empty file or update timestamp</TableCell>
                            <TableCell mono>touch notes.txt</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Alert variant="warning" title="Be Careful with rm -rf">
                    The command <code>rm -rf</code> permanently deletes files and directories without asking for confirmation. There is no "Recycle Bin" in Linux! Always double-check the path before running this command.
                </Alert>

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">
                    Practical Example: Setting Up a Project
                </h4>
                <CodeBlock code={`# Create a project directory structure
mkdir -p my_simulation/{src,data,output,logs}

# Verify the structure
ls -la my_simulation/

# Create some initial files
touch my_simulation/src/main.c
touch my_simulation/README.txt`} language="bash" title="Creating Project Structure" />
            </section>

            <SectionDivider />

            {/* Section: File Operations */}
            <section id="files">
                <SectionHeader icon={FileText} title="File Manipulation" variant="orange" />

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <code className="text-orange-600 dark:text-orange-400">cp</code> - Copy Files
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            Creates a copy of files or directories.
                        </p>
                        <CodeBlock code={`# Copy a single file
cp data.csv backup.csv

# Copy to a different directory
cp report.txt /home/user/documents/

# Copy a directory recursively
cp -r source_folder dest_folder

# Copy with verbose output
cp -v file1.txt file2.txt`} language="bash" />
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <code className="text-orange-600 dark:text-orange-400">mv</code> - Move/Rename Files
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            Moves files to a new location or renames them.
                        </p>
                        <CodeBlock code={`# Rename a file
mv old_name.txt new_name.txt

# Move file to another directory
mv file.txt ./archive/

# Move multiple files
mv *.log ./logs/

# Move and rename simultaneously
mv data.csv /backup/data_2024.csv`} language="bash" />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Section: Viewing File Content */}
            <section id="viewing">
                <SectionHeader icon={FileText} title="Viewing File Content" variant="purple" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Different commands for different needs when viewing file contents.
                </p>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Command</TableHeaderCell>
                            <TableHeaderCell>Best For</TableHeaderCell>
                            <TableHeaderCell>Example</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell mono>cat</TableCell>
                            <TableCell>Small files, quick view</TableCell>
                            <TableCell mono>cat readme.txt</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>less</TableCell>
                            <TableCell>Large files, scrollable (q to exit)</TableCell>
                            <TableCell mono>less large_log.txt</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>head</TableCell>
                            <TableCell>First N lines of file</TableCell>
                            <TableCell mono>head -n 20 data.csv</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>tail</TableCell>
                            <TableCell>Last N lines of file</TableCell>
                            <TableCell mono>tail -n 50 output.log</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>tail -f</TableCell>
                            <TableCell>Follow file in real-time (live logs)</TableCell>
                            <TableCell mono>tail -f running.log</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Alert variant="tip" title="Monitoring Job Output">
                    When your job is running on Param Sanganak, use <code>tail -f output.log</code> to watch the output in real-time. Press <code>Ctrl+C</code> to stop following.
                </Alert>
            </section>

            <SectionDivider />

            {/* Section: Searching & Sorting */}
            <section id="searching">
                <SectionHeader icon={Search} title="Searching & Sorting" variant="teal" />

                <div className="space-y-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <code className="text-teal-600 dark:text-teal-400">grep</code> - Search for Patterns
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            Searches for text patterns within files. Extremely useful for finding errors in log files.
                        </p>
                        <CodeBlock code={`# Search for "error" in a file
grep "error" logfile.txt

# Search recursively in all files in a directory
grep -r "main" src/

# Case-insensitive search
grep -i "warning" file.txt

# Show line numbers
grep -n "ERROR" application.log

# Search for exact word match
grep -w "error" logfile.txt`} language="bash" />
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <code className="text-teal-600 dark:text-teal-400">sort</code> - Sort Lines
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            Sorts lines alphabetically or numerically.
                        </p>
                        <CodeBlock code={`# Sort alphabetically
sort names.txt

# Sort numerically
sort -n numbers.txt

# Reverse order
sort -r file.txt

# Remove duplicates while sorting
sort -u file.txt

# Sort by specific column (2nd column)
sort -k2 data.txt`} language="bash" />
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">
                            <code className="text-teal-600 dark:text-teal-400">wc</code> - Word Count
                        </h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-3">
                            Counts lines, words, and characters in files.
                        </p>
                        <CodeBlock code={`# Count lines only
wc -l dataset.csv

# Count words
wc -w document.txt

# Full count (lines, words, characters)
wc file.txt`} language="bash" />
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Section: File Permissions */}
            <section id="permissions">
                <SectionHeader icon={Lock} title="File Permissions" variant="red" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Linux uses a permission system to control who can read, write, or execute files. Understanding this is crucial for running scripts on the cluster.
                </p>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Permission Breakdown</h4>
                    <div className="grid sm:grid-cols-3 gap-4 mb-4">
                        <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="text-2xl font-bold text-red-600 dark:text-red-400">r</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Read (4)</div>
                        </div>
                        <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="text-2xl font-bold text-green-600 dark:text-green-400">w</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Write (2)</div>
                        </div>
                        <div className="text-center p-3 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="text-2xl font-bold text-blue-600 dark:text-blue-400">x</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Execute (1)</div>
                        </div>
                    </div>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                        Permissions are set for three groups: <strong>Owner</strong>, <strong>Group</strong>, and <strong>Others</strong>.
                    </p>
                </div>

                <CodeBlock code={`# Make a script executable (required before running .sh files)
chmod +x run_job.sh

# Give full permissions to owner, read/execute to others
chmod 755 script.sh

# Read/write for owner only (secure)
chmod 600 private_key

# View current permissions
ls -l file.txt`} language="bash" title="chmod - Change Permissions" />

                <Table className="mt-6">
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Code</TableHeaderCell>
                            <TableHeaderCell>Permissions</TableHeaderCell>
                            <TableHeaderCell>Use Case</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell mono>755</TableCell>
                            <TableCell>rwxr-xr-x</TableCell>
                            <TableCell>Executable scripts</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>644</TableCell>
                            <TableCell>rw-r--r--</TableCell>
                            <TableCell>Regular files</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>700</TableCell>
                            <TableCell>rwx------</TableCell>
                            <TableCell>Private directories</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>600</TableCell>
                            <TableCell>rw-------</TableCell>
                            <TableCell>SSH keys, sensitive files</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>

            <SectionDivider />

            {/* Section: Process Monitoring */}
            <section id="processes">
                <SectionHeader icon={Activity} title="System & Process Monitoring" variant="purple" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Monitor running processes, check system resources, and manage jobs.
                </p>

                <div className="grid md:grid-cols-2 gap-6 mb-6">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Process Commands</h4>
                        <CodeBlock code={`# Show running processes
ps aux

# Find specific processes
ps aux | grep python

# Interactive process viewer
htop

# Terminate a process by ID
kill PID

# Force terminate
kill -9 PID

# Terminate by name
pkill process_name`} language="bash" />
                    </div>

                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-3">Disk Usage</h4>
                        <CodeBlock code={`# Show disk space (human-readable)
df -h

# Show directory size
du -sh my_project/

# Show sizes of subdirectories
du -h --max-depth=1

# Find largest files
du -h | sort -rh | head -10`} language="bash" />
                    </div>
                </div>

                <Alert variant="info" title="On Param Sanganak">
                    Use <code>myquota</code> to check your storage usage and quotas on the cluster. Running <code>htop</code> on login nodes shows the login node status, not compute nodes.
                </Alert>
            </section>

            <SectionDivider />

            {/* Section: Networking */}
            <section id="networking">
                <SectionHeader icon={Wifi} title="Networking Tools" variant="blue" />

                <CodeBlock code={`# Display IP address
ip a

# Check network interface configuration
ifconfig

# Check connectivity to a server
ping google.com
ping 8.8.8.8

# Download files from the internet
wget https://example.com/dataset.zip

# Download with custom filename
wget -O mydata.zip https://example.com/data.zip`} language="bash" />

                <Alert variant="warning" title="Network Access on Param Sanganak">
                    Compute nodes may have limited or no internet access. Download datasets to the login node first, then transfer them to your working directory before submitting jobs.
                </Alert>
            </section>

            <SectionDivider />

            {/* Section: SSH & Remote Access */}
            <section id="ssh">
                <SectionHeader icon={Key} title="SSH & Remote Access" variant="green" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    SSH (Secure Shell) is how you'll connect to Param Sanganak and transfer files.
                </p>

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Connecting to Param Sanganak</h4>

                <PlatformTabs
                    title="SSH Connection"
                    windows={`# Using Git Bash or PowerShell
ssh -p 4422 username@paramsanganak.iitk.ac.in`}
                    linux={`ssh -p 4422 username@paramsanganak.iitk.ac.in`}
                    mac={`ssh -p 4422 username@paramsanganak.iitk.ac.in`}
                />

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">File Transfer with SCP</h4>

                <CodeBlock code={`# Copy local file to Param Sanganak
scp -P 4422 file.txt username@paramsanganak.iitk.ac.in:~/path/

# Copy folder to remote
scp -P 4422 -r folder/ username@paramsanganak.iitk.ac.in:/scratch/username/

# Download file from Param Sanganak
scp -P 4422 username@paramsanganak.iitk.ac.in:~/results.dat ./

# Download folder from remote
scp -P 4422 -r username@paramsanganak.iitk.ac.in:~/output/ ./`} language="bash" title="SCP File Transfer" />

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">SSH Key Authentication</h4>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                    Setting up SSH keys allows passwordless login and is required for automated scripts.
                </p>

                <CodeBlock code={`# Generate SSH key pair
ssh-keygen -t ed25519

# Copy your public key to the server
ssh-copy-id -p 4422 username@paramsanganak.iitk.ac.in

# Or manually copy the key
cat ~/.ssh/id_ed25519.pub
# Then paste it into ~/.ssh/authorized_keys on the server`} language="bash" />
            </section>

            <SectionDivider />

            {/* Section: Environment Variables */}
            <section id="environment">
                <SectionHeader icon={Settings} title="Environment Variables" variant="orange" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Environment variables store configuration settings that programs can access. They're essential for setting up software and running parallel jobs.
                </p>

                <CodeBlock code={`# List all environment variables
env

# Print a specific variable
echo $HOME
echo $PATH

# Set a variable for the current session
export OMP_NUM_THREADS=8

# Set PATH to include a new directory (append)
export PATH=$PATH:$HOME/bin

# Set PATH with new directory first (prepend)
export PATH=$HOME/MPICH/bin:$PATH

# Make changes permanent - add to ~/.bashrc
echo 'export PATH=$HOME/bin:$PATH' >> ~/.bashrc
source ~/.bashrc`} language="bash" />

                <Alert variant="tip" title="Common HPC Environment Variables">
                    <ul className="list-disc list-inside mt-2 space-y-1">
                        <li><code>OMP_NUM_THREADS</code> - Number of OpenMP threads</li>
                        <li><code>PATH</code> - Directories to search for commands</li>
                        <li><code>LD_LIBRARY_PATH</code> - Directories to search for libraries</li>
                        <li><code>HOME</code> - Your home directory path</li>
                    </ul>
                </Alert>
            </section>

            <SectionDivider />

            {/* Section: Vim Editor */}
            <section id="vim">
                <SectionHeader icon={Edit3} title="Vim Editor Basics" variant="indigo" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Vim is a powerful text editor available on virtually all Linux systems. While it has a learning curve, knowing the basics is essential for editing files on remote servers.
                </p>

                <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5 mb-6">
                    <h4 className="font-semibold text-slate-900 dark:text-slate-100 mb-4">Vim Modes</h4>
                    <div className="grid sm:grid-cols-3 gap-4">
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Normal Mode</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Press <code>Esc</code> to enter</div>
                            <div className="text-xs text-slate-500 mt-2">Navigate, delete, copy</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Insert Mode</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Press <code>i</code> to enter</div>
                            <div className="text-xs text-slate-500 mt-2">Type and edit text</div>
                        </div>
                        <div className="p-4 bg-slate-50 dark:bg-slate-800 rounded-lg">
                            <div className="font-semibold text-slate-900 dark:text-slate-100 mb-1">Command Mode</div>
                            <div className="text-sm text-slate-600 dark:text-slate-400">Press <code>:</code> to enter</div>
                            <div className="text-xs text-slate-500 mt-2">Save, quit, search</div>
                        </div>
                    </div>
                </div>

                <Table>
                    <TableHead>
                        <TableRow>
                            <TableHeaderCell>Command</TableHeaderCell>
                            <TableHeaderCell>Action</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell mono>vim filename</TableCell>
                            <TableCell>Open or create a file</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>i</TableCell>
                            <TableCell>Enter insert mode (start typing)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>Esc</TableCell>
                            <TableCell>Exit insert mode</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>:w</TableCell>
                            <TableCell>Save file</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>:q</TableCell>
                            <TableCell>Quit vim</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>:wq</TableCell>
                            <TableCell>Save and quit</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>:q!</TableCell>
                            <TableCell>Quit without saving</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>dd</TableCell>
                            <TableCell>Delete current line</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell mono>/text</TableCell>
                            <TableCell>Search for "text"</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>

                <Alert variant="tip" title="Alternative: nano">
                    If you find Vim confusing, try <code>nano filename</code> instead. It's simpler and shows keyboard shortcuts at the bottom of the screen.
                </Alert>
            </section>

            <SectionDivider />

            {/* Section: Bash Scripting */}
            <section id="scripting">
                <SectionHeader icon={Code2} title="Bash Scripting Basics" variant="purple" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    Bash scripts automate command execution. On Param Sanganak, you'll write job scripts that the SLURM scheduler runs on compute nodes.
                </p>

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Creating Your First Script</h4>

                <div className="space-y-4 mb-6">
                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">1</span>
                        </div>
                        <div className="flex-1">
                            <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Create the script file</h5>
                            <CodeBlock code={`# Create a new file
vim my_script.sh

# Or use nano
nano my_script.sh`} language="bash" />
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">2</span>
                        </div>
                        <div className="flex-1">
                            <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Write the script content</h5>
                            <CodeBlock code={`#!/bin/bash
# This is a comment - the first line tells the system to use bash

# Print a greeting
echo "Hello, $(whoami)!"

# Show current directory
echo "Working directory: $(pwd)"

# Create a directory
mkdir -p output

# Run a simple loop
for i in 1 2 3 4 5
do
    echo "Processing item $i"
done

echo "Script completed!"`} language="bash" title="my_script.sh" />
                        </div>
                    </div>

                    <div className="flex items-start gap-4">
                        <div className="w-8 h-8 bg-blue-100 dark:bg-blue-900/30 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                            <span className="text-sm font-semibold text-blue-600 dark:text-blue-400">3</span>
                        </div>
                        <div className="flex-1">
                            <h5 className="font-medium text-slate-900 dark:text-slate-100 mb-2">Make it executable and run</h5>
                            <CodeBlock code={`# Make the script executable
chmod +x my_script.sh

# Run the script
./my_script.sh`} language="bash" />
                        </div>
                    </div>
                </div>

                <Alert variant="info" title="The Shebang Line">
                    The first line <code>#!/bin/bash</code> is called the "shebang". It tells the system which interpreter to use. Always include this at the top of your scripts.
                </Alert>
            </section>

            <SectionDivider />

            {/* Section: MPI Basics */}
            <section id="mpi">
                <SectionHeader icon={Cpu} title="MPI (Message Passing Interface) Basics" variant="green" />

                <p className="text-slate-600 dark:text-slate-400 mb-6">
                    MPI is the standard for writing parallel programs that run across multiple processors or nodes. It's essential for HPC applications.
                </p>

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mb-4">Installing MPI on Your Local Machine</h4>

                <p className="text-slate-600 dark:text-slate-400 mb-4">
                    For testing and development, you can install MPICH on your local machine:
                </p>

                <PlatformTabs
                    title="MPICH Installation"
                    linux={`# Ubuntu/Debian
sudo apt install mpich

# From source
export CC=gcc
export CXX=g++
wget https://www.mpich.org/static/downloads/4.2.3/mpich-4.2.3.tar.gz
tar -xzvf mpich-4.2.3.tar.gz
cd mpich-4.2.3
./configure --prefix=$HOME/MPICH --with-device=ch3 --disable-cuda --disable-fortran
make -j
make install
export PATH=$HOME/MPICH/bin:$PATH`}
                    mac={`# Using Homebrew
brew install mpich`}
                />

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">Your First MPI Program</h4>

                <CodeBlock code={`#include <stdio.h>
#include <mpi.h>

int main(int argc, char** argv) {
    // Initialize MPI
    MPI_Init(&argc, &argv);

    // Get the number of processes
    int world_size;
    MPI_Comm_size(MPI_COMM_WORLD, &world_size);

    // Get the rank (ID) of this process
    int world_rank;
    MPI_Comm_rank(MPI_COMM_WORLD, &world_rank);

    // Print hello from each process
    printf("Hello from process %d of %d\\n", world_rank, world_size);

    // Finalize MPI
    MPI_Finalize();
    return 0;
}`} language="c" title="hello_mpi.c" />

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-6 mb-4">Compiling and Running MPI Programs</h4>

                <CodeBlock code={`# Compile the MPI program
mpicc -o hello_mpi hello_mpi.c

# Run with 4 processes locally
mpirun -np 4 ./hello_mpi

# Expected output:
# Hello from process 0 of 4
# Hello from process 1 of 4
# Hello from process 2 of 4
# Hello from process 3 of 4`} language="bash" />

                <Alert variant="info" title="On Param Sanganak">
                    On the cluster, you'll use SLURM's <code>srun</code> or <code>mpirun</code> within your job script. The scheduler handles process distribution across nodes.
                </Alert>

                <h4 className="text-lg font-semibold text-slate-900 dark:text-slate-100 mt-8 mb-4">Key MPI Concepts</h4>

                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Communicator</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            A group of processes that can communicate. <code>MPI_COMM_WORLD</code> includes all processes.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Rank</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Unique identifier for each process (0, 1, 2, ...). Used to assign different work to different processes.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Point-to-Point</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Direct communication between two processes using <code>MPI_Send</code> and <code>MPI_Recv</code>.
                        </p>
                    </div>
                    <div className="bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-xl p-5">
                        <h5 className="font-semibold text-slate-900 dark:text-slate-100 mb-2">Collective</h5>
                        <p className="text-sm text-slate-600 dark:text-slate-400">
                            Operations involving all processes: <code>MPI_Bcast</code>, <code>MPI_Reduce</code>, <code>MPI_Gather</code>.
                        </p>
                    </div>
                </div>
            </section>

            <SectionDivider />

            {/* Summary Section */}
            <section className="bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-blue-950/30 dark:to-indigo-950/30 rounded-2xl p-6 sm:p-8 border border-blue-200 dark:border-blue-800">
                <h2 className="text-xl font-bold text-slate-900 dark:text-slate-100 mb-4">
                    Quick Reference Cheat Sheet
                </h2>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-2">Navigation</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                            <li>pwd - where am I</li>
                            <li>ls - list files</li>
                            <li>cd - change directory</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-2">Files</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                            <li>cp - copy</li>
                            <li>mv - move/rename</li>
                            <li>rm - delete</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-2">Viewing</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                            <li>cat - quick view</li>
                            <li>less - scrollable</li>
                            <li>tail -f - live follow</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-2">Search</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                            <li>grep - find in files</li>
                            <li>find - find files</li>
                            <li>wc -l - count lines</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-2">Permissions</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                            <li>chmod +x - make executable</li>
                            <li>chmod 755 - standard script</li>
                            <li>chmod 600 - private file</li>
                        </ul>
                    </div>
                    <div className="bg-white dark:bg-slate-900 rounded-lg p-4 shadow-sm">
                        <h4 className="font-semibold text-slate-900 dark:text-slate-100 text-sm mb-2">MPI</h4>
                        <ul className="text-xs text-slate-600 dark:text-slate-400 space-y-1 font-mono">
                            <li>mpicc - compile</li>
                            <li>mpirun -np N - run</li>
                            <li>MPI_Init/Finalize</li>
                        </ul>
                    </div>
                </div>
            </section>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/', label: 'Home' }}
                next={{ to: '/getting-started', label: 'Getting Started' }}
            />
        </div>
    );
}
