import { GraduationCap, FileText, Terminal, Server, Save, Play, CheckCircle, Download, Upload, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CodeBlock } from '../components/CodeBlock';
import { PlatformTabs } from '../components/PlatformTabs';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';

export function Tutorial() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={GraduationCap}
                badge="Zero to Hero"
                title="Complete Step-by-Step Tutorial"
                description="A comprehensive guide to using Param Sanganak, from getting your account to running your first simulation."
                variant="purple"
            />

            {/* Prerequisites Notice */}
            <div className="bg-indigo-50 dark:bg-indigo-950/30 border border-indigo-200 dark:border-indigo-800 rounded-xl p-5">
                <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-indigo-100 dark:bg-indigo-900/50 rounded-full flex items-center justify-center flex-shrink-0">
                        <BookOpen size={20} className="text-indigo-600 dark:text-indigo-400" />
                    </div>
                    <div>
                        <h3 className="text-base font-semibold text-indigo-900 dark:text-indigo-100 mt-0 mb-1">
                            New to Linux or HPC?
                        </h3>
                        <p className="text-sm text-indigo-800 dark:text-indigo-200 mb-3">
                            If you're not familiar with Linux command-line basics, we recommend starting with our prerequisite guide first.
                        </p>
                        <Link
                            to="/linux-basics"
                            className="inline-flex items-center gap-2 px-4 py-2 bg-indigo-600 hover:bg-indigo-700 text-white text-sm font-medium rounded-lg transition-colors"
                        >
                            <BookOpen size={16} />
                            Linux & MPI Basics
                        </Link>
                    </div>
                </div>
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">
                {/* Quick Navigation */}
                <nav className="not-prose bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800 my-8" aria-label="Tutorial navigation">
                    <h3 className="mt-0 mb-4 text-slate-800 dark:text-slate-200 text-base font-semibold">Quick Navigation</h3>
                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 text-sm">
                        <a href="#account" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">1</span>
                            Account
                        </a>
                        <a href="#login" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">2</span>
                            Login & 2FA
                        </a>
                        <a href="#storage" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">3</span>
                            Storage
                        </a>
                        <a href="#transfer" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">4</span>
                            File Transfer
                        </a>
                        <a href="#resources" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">5</span>
                            Resources
                        </a>
                        <a href="#program" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">6</span>
                            First Program
                        </a>
                        <a href="#understanding-job-script" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">7</span>
                            Job Scripts
                        </a>
                        <a href="#submit" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">8</span>
                            Submit & Run
                        </a>
                        <a href="#results" className="jump-link flex items-center gap-2 px-3 py-2 bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:border-purple-300 dark:hover:border-purple-700 transition-colors">
                            <span className="w-6 h-6 bg-purple-100 dark:bg-purple-900/30 rounded-full flex items-center justify-center text-xs font-semibold text-purple-600 dark:text-purple-400">9</span>
                            Results
                        </a>
                    </div>
                </nav>

            <section id="account">
                <h2 className="flex items-center gap-2">
                    <FileText className="text-slate-400" />
                    Step 1: Getting an Account
                </h2>
                <h3>1.1 Who Can Apply?</h3>
                <ul className="list-disc pl-5">
                    <li><strong>IIT Kanpur users</strong>: Faculty, staff, and students</li>
                    <li><strong>Non-IIT Kanpur users</strong>: Up to 40% of resources are available for external users</li>
                </ul>

                <h3>1.2 How to Register</h3>
                <ol className="list-decimal pl-5 space-y-2">
                    <li>Get the "User Account Creation Form" from your department head.</li>
                    <li>Fill in your details (name, email, department, project description).</li>
                    <li>Get approval from your department head.</li>
                    <li>Submit the form to the HPC team or through the HARS portal (if applicable).</li>
                </ol>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4">
                    <p className="text-sm text-yellow-900 dark:text-yellow-200 mb-2">
                        <strong>What Happens Next?</strong> You'll receive an email with your <strong>username</strong> and a <strong>temporary password</strong>.
                    </p>
                    <p className="text-sm text-yellow-900 dark:text-yellow-200 m-0">
                        <strong>Password Format:</strong> <code className="bg-yellow-100 dark:bg-yellow-900/40 px-2 py-1 rounded text-yellow-900 dark:text-yellow-100">&lt;Username&gt;@&lt;Code&gt;_</code><br />
                        <span className="text-xs text-yellow-800 dark:text-yellow-100">Example: If username is "tom" and code is "a98Z", password will be: <code className="bg-yellow-100 dark:bg-yellow-900/40 px-1 rounded">tom@a98Z_</code></span>
                    </p>
                </div>
            </section>

            <section id="login">
                <h2 className="flex items-center gap-2">
                    <Terminal className="text-slate-400" />
                    Step 2: First Time Login
                </h2>

                <figure className="my-6">
                    <img
                        src="/login_flow.png"
                        alt="Login Flow Diagram"
                        className="w-full h-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
                    />
                </figure>

                <div className="grid md:grid-cols-3 gap-6">
                    <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h3 className="mt-0 text-blue-700 dark:text-blue-400">Windows - PuTTY</h3>
                        <ol className="list-decimal pl-5 text-sm space-y-2">
                            <li>Download <a href="https://www.putty.org/" target="_blank" rel="noreferrer" className="underline">PuTTY</a></li>
                            <li>Open PuTTY</li>
                            <li>Host Name: <code>paramsanganak.iitk.ac.in</code></li>
                            <li>Port: <code>4422</code></li>
                            <li>Click "Open"</li>
                            <li>Enter username and password</li>
                        </ol>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h3 className="mt-0 text-purple-700 dark:text-purple-400">Windows - Tabby (Recommended)</h3>
                        <p className="text-xs text-slate-600 dark:text-slate-400 mb-2">Modern, feature-rich terminal with built-in SSH</p>
                        <ol className="list-decimal pl-5 text-sm space-y-2">
                            <li>Download from <a href="https://tabby.sh/" target="_blank" rel="noreferrer" className="underline">tabby.sh</a></li>
                            <li>Install and open Tabby</li>
                            <li>Click "+" → "SSH Connection"</li>
                            <li>Host: <code className="text-xs">paramsanganak.iitk.ac.in</code></li>
                            <li>Port: <code>4422</code></li>
                            <li>Username: your username</li>
                            <li>Save and connect</li>
                        </ol>
                        <p className="text-xs text-purple-900 dark:text-purple-200 mt-2 bg-purple-50 dark:bg-purple-900/20 p-2 rounded">
                            <strong>Bonus:</strong> Tabby has a built-in file browser and supports SSH key management!
                        </p>
                    </div>

                    <div className="bg-white dark:bg-slate-900 p-6 border border-slate-200 dark:border-slate-800 rounded-xl shadow-sm">
                        <h3 className="mt-0 text-slate-700 dark:text-slate-300">Mac / Linux</h3>
                        <p className="text-sm mb-4">Open your Terminal and run:</p>
                        <CodeBlock language="bash" code="ssh -p 4422 yourusername@paramsanganak.iitk.ac.in" />
                    </div>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-6 rounded-r-md">
                    <p className="text-sm text-blue-900 dark:text-blue-200 mb-2">
                        <strong>📘 Detailed Tabby Setup Guide (Optional - For SSH Key Integration)</strong>
                    </p>
                    <p className="text-sm text-blue-800 dark:text-blue-100">
                        If you want to set up SSH keys with Tabby for password-less login, follow these steps:
                    </p>
                    <ol className="text-sm text-blue-800 dark:text-blue-100 space-y-2 mt-2 list-decimal pl-5">
                        <li>
                            <strong>Generate SSH Key Pair:</strong> Open Tabby, go to Settings → SSH → Keys, click "Generate" to create a new key pair
                        </li>
                        <li>
                            <strong>Copy Public Key:</strong> Copy the public key content (displayed in Tabby)
                        </li>
                        <li>
                            <strong>Add to Param Sanganak:</strong> Login via SSH (with password), then run:
                            <CodeBlock language="bash" code={`# Create .ssh directory if it doesn't exist
mkdir -p ~/.ssh
chmod 700 ~/.ssh

# Add your public key to authorized_keys
echo "your-public-key-content-here" >> ~/.ssh/authorized_keys
chmod 600 ~/.ssh/authorized_keys`} />
                        </li>
                        <li>
                            <strong>Configure Tabby Connection:</strong> In your SSH connection profile in Tabby, select the private key you generated in step 1
                        </li>
                        <li>
                            <strong>Test Connection:</strong> Try connecting - you should no longer need to enter a password or 2FA code!
                        </li>
                    </ol>
                </div>

                <h3>2.2 Changing Your Password (REQUIRED on First Login)</h3>
                <p>
                    <strong>You will be forced to change your password immediately upon first login.</strong>
                    This is a security requirement and cannot be skipped.
                </p>

                <CodeBlock
                    language="bash"
                    code={`# Run this command to change password anytime:
$ passwd

# You'll be prompted:
Current password: [type temporary password]
New password: [type new password]
Retype new password: [retype new password]

# Success message:
passwd: password updated successfully`}
                />

                <h4>Password Requirements</h4>
                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 mb-4">
                    <ul className="text-sm space-y-2 m-0">
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                            <span><strong>Minimum length:</strong> 13 characters</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                            <span><strong>Uppercase letters:</strong> At least one (A-Z)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                            <span><strong>Lowercase letters:</strong> At least one (a-z)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                            <span><strong>Numbers:</strong> At least one (0-9)</span>
                        </li>
                        <li className="flex items-start gap-2">
                            <span className="text-green-600 dark:text-green-400 font-bold">✓</span>
                            <span><strong>Special characters:</strong> At least one (@, #, $, %, &, etc.)</span>
                        </li>
                    </ul>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-yellow-900 dark:text-yellow-200 mb-2">
                        <strong>⚠️ Password Expiry Policy:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm text-yellow-800 dark:text-yellow-100 space-y-1 m-0">
                        <li>Passwords expire every <strong>90 days</strong> for security</li>
                        <li>You'll receive email reminders before expiry</li>
                        <li>Change your password before it expires to avoid losing access</li>
                        <li>If forgotten, email <a href="mailto:sanganaksupport@iitk.ac.in" className="text-yellow-900 dark:text-yellow-200 underline">sanganaksupport@iitk.ac.in</a> for reset</li>
                    </ul>
                </div>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-blue-900 dark:text-blue-200 m-0">
                        <strong>💡 Pro Tip:</strong> Use a password manager to generate and store a strong, unique password.
                        Example strong password: <code>ParamSanganak2024!@HPC</code>
                    </p>
                </div>
            </section>

            <section id="2fa">
                <h3>2.3 Two-Factor Authentication (2FA) Setup</h3>
                <p>
                    Param Sanganak uses <strong>Two-Factor Authentication (2FA)</strong> with Google Authenticator to provide an additional layer of security for your account.
                    After changing your password on first login, you'll be prompted to set up 2FA.
                </p>

                <div className="bg-red-50 dark:bg-red-900/20 border-l-4 border-red-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-red-900 dark:text-red-200 mb-2">
                        <strong>⚠️ CRITICAL: Do NOT Skip 2FA Setup!</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm text-red-800 dark:text-red-100 space-y-1 m-0">
                        <li>If you skip the 2FA setup during first login, you will be <strong>locked out</strong> of your account</li>
                        <li>Recovery requires contacting support at <a href="mailto:sanganaksupport@iitk.ac.in" className="text-red-900 dark:text-red-200 underline font-semibold">sanganaksupport@iitk.ac.in</a></li>
                        <li>2FA is mandatory for all users - there is no way to bypass it</li>
                    </ul>
                </div>

                <h4>How to Set Up 2FA</h4>
                <div className="space-y-4 my-6">
                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                            1
                        </div>
                        <div>
                            <h5 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Install Google Authenticator App</h5>
                            <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
                                Download and install <strong>Google Authenticator</strong> on your smartphone:
                            </p>
                            <ul className="text-sm text-slate-600 dark:text-slate-400 space-y-1 mt-2 list-disc pl-5">
                                <li><strong>Android:</strong> <a href="https://play.google.com/store/apps/details?id=com.google.android.apps.authenticator2" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline">Google Play Store</a></li>
                                <li><strong>iOS:</strong> <a href="https://apps.apple.com/app/google-authenticator/id388497605" target="_blank" rel="noreferrer" className="text-blue-600 dark:text-blue-400 underline">Apple App Store</a></li>
                            </ul>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                            2
                        </div>
                        <div>
                            <h5 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Generate QR Code on First Login</h5>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                After changing your password, the system will automatically display a <strong>QR code</strong> on your terminal screen.
                            </p>
                            <CodeBlock language="bash" code={`# You'll see output like this:
https://www.google.com/chart?chs=200x200&chld=M|0&cht=qr&chl=otpauth://totp/username@paramsanganak...

# A large QR code will be displayed using ASCII art in the terminal`} />
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400 flex items-center justify-center font-bold">
                            3
                        </div>
                        <div>
                            <h5 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Scan QR Code with Google Authenticator</h5>
                            <p className="text-sm text-slate-700 dark:text-slate-300 m-0">
                                Open Google Authenticator on your phone, tap the "+" button, select "Scan a QR code", and scan the code displayed on your screen.
                            </p>
                        </div>
                    </div>

                    <div className="flex gap-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400 flex items-center justify-center font-bold">
                            4
                        </div>
                        <div>
                            <h5 className="text-base font-semibold text-slate-900 dark:text-slate-100 mt-0 mb-1">Enter Verification Code</h5>
                            <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                                Google Authenticator will display a 6-digit code. Enter this code when prompted to complete 2FA setup.
                            </p>
                            <p className="text-xs text-slate-600 dark:text-slate-400 m-0">
                                <strong>Note:</strong> The code changes every 30 seconds, so enter it quickly!
                            </p>
                        </div>
                    </div>
                </div>

                <h4>Logging In with 2FA</h4>
                <p className="text-sm">After 2FA is set up, every login will require two steps:</p>
                <CodeBlock language="bash" code={`$ ssh -p 4422 username@paramsanganak.iitk.ac.in

Password: [type your password]
Verification code: [enter 6-digit code from Google Authenticator app]

# You're now logged in!`} />

                <h4>Recovering from 2FA Lockout</h4>
                <p className="text-sm">
                    If you accidentally skipped the 2FA setup or lost access to your Google Authenticator:
                </p>
                <ol className="text-sm space-y-2">
                    <li>
                        <strong>Contact Support:</strong> Email <a href="mailto:sanganaksupport@iitk.ac.in" className="text-blue-600 dark:text-blue-400 underline">sanganaksupport@iitk.ac.in</a> with your username and a brief explanation
                    </li>
                    <li>
                        <strong>Support will remove the 2FA file:</strong> The HPC team will delete the <code>.google_authenticator</code> file from your home directory
                    </li>
                    <li>
                        <strong>Set up 2FA again:</strong> On your next login, you'll see the QR code again and can set up 2FA properly
                    </li>
                </ol>

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-purple-900 dark:text-purple-200 mb-2">
                        <strong>💡 Alternative: SSH Key-Based Authentication</strong>
                    </p>
                    <p className="text-sm text-purple-800 dark:text-purple-100 m-0">
                        If you prefer to avoid entering a verification code every time you log in, you can use <strong>SSH key-based authentication</strong> (described in the next section).
                        With SSH keys, you won't need to enter your password or 2FA code for each login.
                    </p>
                </div>
            </section>

            <section id="ssh-keys">
                <h3>2.4 Setting up SSH Key-Based Authentication (Recommended)</h3>
                <p>
                    Typing your password every time you transfer a file or log in can be tedious. 
                    Setting up <strong>SSH Keys</strong> allows for secure, password-less access.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0 mb-2">Step 1: Generate Key Pair (Local Machine)</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Open your local terminal (PowerShell on Windows, Terminal on Mac/Linux) and run:
                        </p>
                        <CodeBlock 
                            language="bash" 
                            code={`ssh-keygen -t ed25519 -C "your_email@iitk.ac.in"
# Press Enter to accept default location
# Press Enter twice for no passphrase (optional)`} 
                        />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0 mb-2">Step 2: Copy Key to Param Sanganak</h4>
                        <p className="text-sm text-slate-600 dark:text-slate-400 mb-2">
                            Use <code>ssh-copy-id</code> to install your public key on the server.
                        </p>
                        <PlatformTabs
                            title="Copy ID Command"
                            windows={`# Windows (PowerShell 7+) or Git Bash:
ssh-copy-id -p 4422 username@paramsanganak.iitk.ac.in

# If ssh-copy-id is missing (Standard PowerShell):
type $env:USERPROFILE\\.ssh\\id_ed25519.pub | ssh -p 4422 username@paramsanganak.iitk.ac.in "cat >> .ssh/authorized_keys"`}
                            linux={`ssh-copy-id -p 4422 username@paramsanganak.iitk.ac.in`}
                            mac={`ssh-copy-id -p 4422 username@paramsanganak.iitk.ac.in`}
                        />
                    </div>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 rounded-r-md">
                    <p className="text-sm text-emerald-900 dark:text-emerald-200 m-0">
                        <strong>🎉 Success!</strong> Next time you log in, you won't be asked for a password.
                        <br/>
                        <code>ssh -p 4422 username@paramsanganak.iitk.ac.in</code>
                    </p>
                </div>
            </section>

            <section id="storage">
                <h2 className="flex items-center gap-2">
                    <Save className="text-slate-400" />
                    Step 3: Storage Spaces
                </h2>
                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead>
                            <tr className="bg-slate-50 dark:bg-slate-900 border-b dark:border-slate-800">
                                <th className="p-3">Directory</th>
                                <th className="p-3">Path</th>
                                <th className="p-3">Quota</th>
                                <th className="p-3">Policy</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr className="border-b dark:border-slate-800">
                                <td className="p-3 font-semibold text-emerald-700 dark:text-emerald-400">Home</td>
                                <td className="p-3 font-mono">/home/user/</td>
                                <td className="p-3">500 GB</td>
                                <td className="p-3">Backed up. Permanent.</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold text-red-600 dark:text-red-400">Scratch</td>
                                <td className="p-3 font-mono">/scratch/user/</td>
                                <td className="p-3">1 TB</td>
                                <td className="p-3"><strong>NO BACKUP.</strong> Deleted after 60 days.</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
                <p className="mt-4">Check your quota anytime:</p>
                <CodeBlock language="bash" code="myquota" />
            </section>

            <section id="transfer">
                <div className="flex items-center gap-3 mb-4">
                    <div className="flex gap-2">
                        <Upload className="text-blue-600 dark:text-blue-400" size={24} />
                        <Download className="text-green-600 dark:text-green-400" size={24} />
                    </div>
                    <h2 className="m-0">Step 4: File Transfer</h2>
                </div>

                <p>
                    Transferring files between your local machine and Param Sanganak is essential for uploading code/data and downloading results.
                    Different methods work best for different operating systems.
                </p>

                {/* IMAGE PLACEHOLDER: File Transfer Methods Comparison */}
                {/*
                AI Image Generation Prompt:
                "Create a comparison infographic showing 4 file transfer methods to HPC system:
                1. GUI Tools (WinSCP/MobaXterm icon): 'Drag & Drop' - Beginner friendly, Visual interface
                2. SCP (terminal icon): 'One-time transfer' - Fast, Simple
                3. rsync (sync icon): 'Large datasets' - Resume support, Incremental
                4. sftp (folder icon): 'Interactive browsing' - Navigate remotely

                For each method show:
                - Icon representing the tool
                - Use case badge (Beginner/Advanced)
                - Speed indicator (Fast/Very Fast)
                - Key feature text

                Use color coding: Green for beginner-friendly, Blue for advanced
                Background: clean white with subtle grid pattern
                Include: Local Machine (laptop icon) ↔️ HPC Server (server rack icon) in header
                Save as: /public/transfer_methods.png
                */}
                <figure className="my-8">
                    <img
                        src="/transfer_methods.png"
                        alt="File Transfer Methods Comparison"
                        className="w-full h-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg"
                    />
                    <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                        Figure: Comparison of File Transfer Methods
                    </figcaption>
                </figure>

                <h3>Method 1: GUI Tools (Recommended for Beginners)</h3>
                <p>Graphical tools provide a user-friendly drag-and-drop interface for file transfers.</p>

                <div className="grid md:grid-cols-3 gap-4 my-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900/50">
                        <h4 className="text-blue-700 dark:text-blue-400 m-0 mb-2 text-base">WinSCP (Windows)</h4>
                        <p className="text-sm text-blue-900 dark:text-blue-200 mb-2">Simple drag & drop interface</p>
                        <ol className="text-xs text-blue-800 dark:text-blue-100 space-y-1 m-0 list-decimal pl-4">
                            <li>Download from <a href="https://winscp.net" target="_blank" rel="noreferrer" className="underline">winscp.net</a></li>
                            <li>Host: <code className="text-xs">paramsanganak.iitk.ac.in</code></li>
                            <li>Port: <code>4422</code></li>
                            <li>Protocol: SFTP</li>
                            <li>Login and drag files!</li>
                        </ol>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-900/50">
                        <h4 className="text-purple-700 dark:text-purple-400 m-0 mb-2 text-base">MobaXterm (Windows)</h4>
                        <p className="text-sm text-purple-900 dark:text-purple-200 mb-2">SSH + File browser combined</p>
                        <ol className="text-xs text-purple-800 dark:text-purple-100 space-y-1 m-0 list-decimal pl-4">
                            <li>Download from <a href="https://mobaxterm.mobatek.net" target="_blank" rel="noreferrer" className="underline">mobaxterm.mobatek.net</a></li>
                            <li>Start SSH session (port 4422)</li>
                            <li>File browser opens automatically</li>
                            <li>Drag files between panels</li>
                        </ol>
                    </div>

                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900/50">
                        <h4 className="text-green-700 dark:text-green-400 m-0 mb-2 text-base">FileZilla (All OS)</h4>
                        <p className="text-sm text-green-900 dark:text-green-200 mb-2">Cross-platform FTP client</p>
                        <ol className="text-xs text-green-800 dark:text-green-100 space-y-1 m-0 list-decimal pl-4">
                            <li>Download from <a href="https://filezilla-project.org" target="_blank" rel="noreferrer" className="underline">filezilla-project.org</a></li>
                            <li>Protocol: SFTP</li>
                            <li>Host: <code className="text-xs">paramsanganak.iitk.ac.in</code></li>
                            <li>Port: <code>4422</code></li>
                            <li>Use drag & drop interface</li>
                        </ol>
                    </div>
                </div>

                <h3>Method 2: Command-Line Tools (Fast & Powerful)</h3>

                <h4 className="text-sm font-semibold mt-4 mb-2">SCP (Secure Copy) - Single File/Folder Transfer</h4>
                <p className="text-sm mb-3">Best for one-time transfers of files or directories. Simple and fast.</p>

                <PlatformTabs
                    title="Upload file TO Param Sanganak"
                    windows={`# Using PowerShell or Command Prompt
scp -P 4422 C:\\Users\\YourName\\data.txt username@paramsanganak.iitk.ac.in:/home/username/

# Upload entire folder
scp -P 4422 -r C:\\Users\\YourName\\my_project username@paramsanganak.iitk.ac.in:/home/username/`}
                    linux={`# Upload single file
scp -P 4422 /home/localuser/data.txt username@paramsanganak.iitk.ac.in:/home/username/

# Upload entire folder
scp -P 4422 -r /home/localuser/my_project username@paramsanganak.iitk.ac.in:/home/username/`}
                    mac={`# Upload single file
scp -P 4422 ~/Documents/data.txt username@paramsanganak.iitk.ac.in:/home/username/

# Upload entire folder
scp -P 4422 -r ~/Documents/my_project username@paramsanganak.iitk.ac.in:/home/username/`}
                />

                <PlatformTabs
                    title="Download file FROM Param Sanganak"
                    windows={`# Download single file
scp -P 4422 username@paramsanganak.iitk.ac.in:/home/username/results.txt C:\\Users\\YourName\\Downloads\\

# Download entire folder
scp -P 4422 -r username@paramsanganak.iitk.ac.in:/scratch/username/output C:\\Users\\YourName\\Downloads\\`}
                    linux={`# Download single file
scp -P 4422 username@paramsanganak.iitk.ac.in:/home/username/results.txt ~/Downloads/

# Download entire folder
scp -P 4422 -r username@paramsanganak.iitk.ac.in:/scratch/username/output ~/Downloads/`}
                    mac={`# Download single file
scp -P 4422 username@paramsanganak.iitk.ac.in:/home/username/results.txt ~/Downloads/

# Download entire folder
scp -P 4422 -r username@paramsanganak.iitk.ac.in:/scratch/username/output ~/Downloads/`}
                />

                <h4 className="text-sm font-semibold mt-6 mb-2">rsync - Smart Incremental Transfer (Recommended for Large Data)</h4>
                <p className="text-sm mb-3">
                    rsync only transfers changed files and can resume interrupted transfers. Perfect for large datasets (100GB+).
                </p>

                <PlatformTabs
                    title="Using rsync (requires WSL on Windows)"
                    windows={`# Windows: Install WSL first (Windows Subsystem for Linux)
# Then use Linux commands in WSL terminal

# Sync entire directory with progress
rsync -avz --progress -e "ssh -p 4422" /mnt/c/Users/YourName/data/ username@paramsanganak.iitk.ac.in:/home/username/data/

# -a: archive mode (preserves permissions, timestamps)
# -v: verbose output
# -z: compress during transfer
# --progress: show transfer progress`}
                    linux={`# Sync entire directory
rsync -avz --progress -e "ssh -p 4422" ~/data/ username@paramsanganak.iitk.ac.in:/home/username/data/

# Only transfer new/modified files
rsync -avzu --progress -e "ssh -p 4422" ~/large_dataset/ username@paramsanganak.iitk.ac.in:/scratch/username/dataset/

# Download from HPC (note the reversed source/destination)
rsync -avz --progress -e "ssh -p 4422" username@paramsanganak.iitk.ac.in:/scratch/username/results/ ~/Downloads/results/`}
                    mac={`# Sync entire directory
rsync -avz --progress -e "ssh -p 4422" ~/Documents/data/ username@paramsanganak.iitk.ac.in:/home/username/data/

# Only transfer new/modified files
rsync -avzu --progress -e "ssh -p 4422" ~/large_dataset/ username@paramsanganak.iitk.ac.in:/scratch/username/dataset/

# Download from HPC
rsync -avz --progress -e "ssh -p 4422" username@paramsanganak.iitk.ac.in:/scratch/username/results/ ~/Downloads/results/`}
                />

                <div className="bg-green-50 dark:bg-green-900/20 border-l-4 border-green-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-green-900 dark:text-green-200 mb-2">
                        <strong>💡 Pro Tips for Large Transfers:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm text-green-800 dark:text-green-100 space-y-1 m-0">
                        <li>Compress files before transfer: <code>tar -czf data.tar.gz data/</code> can reduce size by 50-90%</li>
                        <li>Use rsync with <code>--partial</code> flag to resume interrupted transfers</li>
                        <li>Transfer during off-peak hours (late night/early morning) for better speed</li>
                        <li>For datasets larger than 100GB, consider using <code>/scratch</code> as destination for better I/O performance</li>
                    </ul>
                </div>

                <h4 className="text-sm font-semibold mt-6 mb-2">SFTP - Interactive File Browsing</h4>
                <p className="text-sm mb-3">SFTP allows you to interactively navigate and transfer files, similar to FTP.</p>

                <CodeBlock
                    language="bash"
                    code={`# Connect to SFTP
sftp -P 4422 username@paramsanganak.iitk.ac.in

# Once connected, use these commands:
sftp> ls                    # List remote files
sftp> pwd                   # Show remote directory
sftp> lpwd                  # Show local directory
sftp> cd /home/username     # Change remote directory
sftp> lcd ~/Downloads       # Change local directory
sftp> get results.txt       # Download file
sftp> put mydata.txt        # Upload file
sftp> get -r folder/        # Download folder
sftp> put -r folder/        # Upload folder
sftp> exit                  # Disconnect`}
                />

                <h3>Choosing the Right Method</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Method</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Best For</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Pros</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Cons</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">WinSCP/MobaXterm</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Beginners, occasional transfers</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Easy drag & drop, visual</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Slower for large files</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">SCP</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Quick one-time transfers</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Fast, simple, works everywhere</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">No resume, transfers all files</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">rsync</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Large datasets, frequent syncing</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Incremental, resumes, very efficient</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">More complex syntax</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">SFTP</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Interactive browsing</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Navigate before transfer</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Slower than SCP/rsync</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <section id="resources">
                <h2 className="flex items-center gap-2">
                    <Server className="text-slate-400" />
                    Step 5: Resource Types
                </h2>
                <p>Choose the right partition for your job. See <a href="/usage-policy">Usage Policy</a> for full details.</p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                    <li className="bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 rounded">
                        <strong>Standard CPU</strong>
                        <div className="text-sm text-slate-500 dark:text-slate-400">214 Nodes, 48 Cores/Node</div>
                    </li>
                    <li className="bg-white dark:bg-slate-900 p-4 border border-slate-200 dark:border-slate-800 rounded">
                        <strong>GPU Nodes</strong>
                        <div className="text-sm text-slate-500 dark:text-slate-400">20 Nodes, 2x V100 GPUs each</div>
                    </li>
                </ul>
            </section>

            <section id="program">
                <h2 className="flex items-center gap-2">
                    <Play className="text-slate-400" />
                    Step 6: Your First Program
                </h2>
                <p>Let's create an MPI Hello World program.</p>
                <p className="text-sm text-slate-500 dark:text-slate-400">1. Create the file:</p>
                <CodeBlock language="bash" code="nano hello.c" />
                <p className="text-sm text-slate-500 dark:text-slate-400">2. Paste this code:</p>
                <CodeBlock language="c" code={`#include <stdio.h>
#include "mpi.h"

int main(int argc, char *argv[]) {
    MPI_Init(&argc, &argv);
    int rank, size;
    MPI_Comm_rank(MPI_COMM_WORLD, &rank);
    MPI_Comm_size(MPI_COMM_WORLD, &size);
    printf("Hello form rank %d of %d\\n", rank, size);
    MPI_Finalize();
    return 0;
}`} />
                <p className="text-sm text-slate-500 dark:text-slate-400">3. Compile it:</p>
                <CodeBlock language="bash" code={`module load compiler/intel/latest
mpiicc hello.c -o myprogram`} />

                <h3>Alternative Compilers and Toolchains</h3>
                <p>
                    Besides the module system, you can also set up different compiler environments using direct source commands.
                    These are particularly useful for specific workflows or newer toolchains:
                </p>

                <div className="grid md:grid-cols-3 gap-4 my-6">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
                        <h4 className="text-emerald-700 dark:text-emerald-400 m-0 mb-2 text-sm font-semibold">SPACK</h4>
                        <p className="text-xs text-emerald-900 dark:text-emerald-200 mb-2">
                            Flexible package manager for custom software installations
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`source /home/apps/spack/share/spack/setup-env.sh`}
                        />
                        <p className="text-xs text-emerald-800 dark:text-emerald-100 mt-2 m-0">
                            See <a href="/applications#spack" className="underline">SPACK User Guide</a> for details
                        </p>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900/50">
                        <h4 className="text-blue-700 dark:text-blue-400 m-0 mb-2 text-sm font-semibold">Intel oneAPI 2025</h4>
                        <p className="text-xs text-blue-900 dark:text-blue-200 mb-2">
                            Latest Intel compilers, libraries, and performance tools
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`source /home/apps/alma-8.9/compilers/one-api/final/setvars.sh`}
                        />
                        <p className="text-xs text-blue-800 dark:text-blue-100 mt-2 m-0">
                            Includes: icc, icpc, ifort, MKL, TBB, IPP
                        </p>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-900/50">
                        <h4 className="text-purple-700 dark:text-purple-400 m-0 mb-2 text-sm font-semibold">Intel MPI 2020</h4>
                        <p className="text-xs text-purple-900 dark:text-purple-200 mb-2">
                            Intel MPI Library for distributed parallel computing
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`source /home/apps/alma-8.9/compilers/intel-parallel-studio/2020.2/initpaths intel64`}
                        />
                        <p className="text-xs text-purple-800 dark:text-purple-100 mt-2 m-0">
                            Optimized for InfiniBand networks
                        </p>
                    </div>
                </div>

                <div className="bg-yellow-50 dark:bg-yellow-900/20 border-l-4 border-yellow-400 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-yellow-900 dark:text-yellow-200 mb-2">
                        <strong>💡 Usage Tip:</strong>
                    </p>
                    <p className="text-sm text-yellow-800 dark:text-yellow-100 m-0">
                        Add these source commands to your job scripts or <code>~/.bashrc</code> as needed.
                        The module system and these direct source commands can be used interchangeably depending on your workflow.
                        For most users, the module system (<code>module load</code>) is simpler and recommended.
                    </p>
                </div>
            </section>

            <section id="understanding-job-script" className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 my-8">
                <h2 className="flex items-center gap-2 mt-0 text-slate-800 dark:text-slate-200">
                    <FileText size={20} className="text-blue-500" />
                    Step 7: Understanding Job Scripts
                </h2>
                <p className="text-slate-600 dark:text-slate-400 mb-4">
                    A job script is a simple text file that tells the scheduler (SLURM) how to run your program. It has three main parts:
                </p>

                <div className="space-y-4">
                    <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                        <div className="font-mono text-sm text-pink-600 dark:text-pink-400 font-bold">#!/bin/bash</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                            <strong>The Shebang:</strong> Tells the system that this is a Bash script. Always the first line.
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                        <div className="font-mono text-sm text-blue-600 dark:text-blue-400 font-bold">#SBATCH</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                            <strong>Directives:</strong> Instructions for the scheduler. Even though they start with <code>#</code>, SLURM reads them to know how many nodes, CPUs, and time you need.
                        </div>
                    </div>

                    <div className="grid md:grid-cols-[150px_1fr] gap-4 items-start p-3 bg-white dark:bg-slate-800 rounded border border-slate-200 dark:border-slate-700">
                        <div className="font-mono text-sm text-green-600 dark:text-green-400 font-bold">Commands</div>
                        <div className="text-sm text-slate-600 dark:text-slate-300">
                            <strong>Execution:</strong> The actual commands to run (loading modules, running the program). This is what happens on the compute nodes.
                        </div>
                    </div>
                </div>
            </section>


            <section id="submit">
                <h2>Step 8: Submitting Your Job</h2>
                <p>Never run heavy calculations on the login node. Submit a SLURM job script.</p>

                <p className="text-sm text-slate-500 dark:text-slate-400">1. Create script <code>job.sh</code>:</p>
                <CodeBlock language="bash" code={`#!/bin/bash
#SBATCH -N 2                  # Request 2 nodes
#SBATCH --ntasks-per-node=48  # 48 cores per node (96 total)
#SBATCH --time=00:10:00       # 10 minutes max
#SBATCH --partition=small     # 'small' partition
#SBATCH --job-name=hello_test
#SBATCH --output=output.txt
#SBATCH --error=error.txt

module load compiler/intel/latest
mpirun -np 96 ./myprogram`} />

                <p className="text-sm text-slate-500 dark:text-slate-400">2. Submit to queue:</p>
                <CodeBlock language="bash" code="sbatch job.sh" />

                <p className="text-sm text-slate-500 dark:text-slate-400">3. Check status (Look for job ID):</p>
                <CodeBlock language="bash" code="squeue -u yourusername" />
            </section>

            <section id="results">
                <h2 className="flex items-center gap-2">
                    <CheckCircle className="text-emerald-500" />
                    Step 9: Viewing Results
                </h2>
                <p>When the job state (ST) is no longer <code>R</code> (Running) or <code>PD</code> (Pending), it has finished.</p>
                <CodeBlock language="bash" code="cat output.txt" />
                <p>If something went wrong, check the error file:</p>
                <CodeBlock language="bash" code="cat error.txt" />
            </section>

            <section id="help" className="bg-blue-50 dark:bg-blue-900/20 p-6 rounded-xl border border-blue-100 dark:border-blue-900/50 my-8">
                <h2 className="mt-0 text-blue-800 dark:text-blue-300">Need Help?</h2>
                <ul className="list-disc pl-5 text-blue-900 dark:text-blue-200">
                    <li><strong>Forgot Password?</strong> Email <code>sanganaksupport@iitk.ac.in</code></li>
                    <li><strong>Technical Issue?</strong> Visit <a href="https://paramsanganak.iitk.ac.in/support" className="dark:text-blue-400 hover:underline">Support Portal</a>.</li>
                    <li><strong>In-Person:</strong> Room 212 (Tech), Room 208 (Billing).</li>
                </ul>
            </section>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/linux-basics', label: 'Linux & MPI Basics' }}
                next={{ to: '/running-jobs', label: 'Running Jobs' }}
            />
        </div>
    );
}
