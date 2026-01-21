import { Bug, Terminal } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import { Alert } from '../components/Alert';

export function Debugging() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={Bug}
                badge="Troubleshooting"
                title="Debugging Your Code"
                description="A guide to identifying and fixing errors in your HPC applications using GDB and other debugging tools."
                variant="red"
            />

            <div className="prose prose-slate dark:prose-invert max-w-none">

            <section id="basics">
                <h2>The Basics</h2>
                <p>
                    A debugger is a tool that allows you to run your program step-by-step, inspect variables, and find the exact line where a crash occurs.
                    On Param Sanganak, the primary tool for C/C++ and Fortran is <strong>GDB (GNU Debugger)</strong>.
                </p>
                <Alert variant="warning" title="Compilation Requirement">
                    You <strong>must</strong> compile your code with the <code>-g</code> flag to include debugging symbols.
                    Without this, GDB cannot show line numbers or variable names.
                </Alert>
                <CodeBlock
                    language="bash"
                    code="gcc -g my_program.c -o my_program"
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="gdb-commands">
                <div className="flex items-center gap-2 mb-4">
                    <Terminal className="text-slate-400" />
                    <h2 className="m-0">Essential GDB Commands</h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full text-sm text-left border-collapse">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr className="border-b border-slate-300 dark:border-slate-700">
                                <th className="py-2 font-semibold p-2">Command</th>
                                <th className="py-2 font-semibold p-2">Description</th>
                                <th className="py-2 font-semibold p-2">Example</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">gdb ./program</td>
                                <td className="py-2 p-2">Start GDB with your executable</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">gdb a.out</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">run [args]</td>
                                <td className="py-2 p-2">Start program execution (with optional arguments)</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">run input.txt</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">break [location]</td>
                                <td className="py-2 p-2">Set breakpoint at line or function</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">break main.c:25</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">next (n)</td>
                                <td className="py-2 p-2">Execute next line (step over functions)</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">n</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">step (s)</td>
                                <td className="py-2 p-2">Execute next line (step into functions)</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">s</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">print [var]</td>
                                <td className="py-2 p-2">Display value of a variable or expression</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">print arr[5]</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">display [var]</td>
                                <td className="py-2 p-2">Automatically show variable after each step</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">display counter</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">watch [var]</td>
                                <td className="py-2 p-2">Stop when variable value changes</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">watch total</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">continue (c)</td>
                                <td className="py-2 p-2">Resume execution until next breakpoint</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">c</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">backtrace (bt)</td>
                                <td className="py-2 p-2">Show the function call stack</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">bt</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">list</td>
                                <td className="py-2 p-2">Show source code around current line</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">list</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">info locals</td>
                                <td className="py-2 p-2">Show all local variables</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">info locals</td>
                            </tr>
                            <tr>
                                <td className="py-2 font-mono text-blue-600 dark:text-blue-400 p-2">quit (q)</td>
                                <td className="py-2 p-2">Exit GDB</td>
                                <td className="py-2 font-mono text-slate-500 dark:text-slate-400 p-2">q</td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="example">
                <h2>Practical Example: Finding a Bug</h2>
                <p>Let's debug a simple program with a segmentation fault:</p>

                <h3>Step 1: Compile with Debug Symbols</h3>
                <CodeBlock
                    language="bash"
                    code={`gcc -g buggy_program.c -o buggy_program`}
                />

                <h3>Step 2: Run in GDB</h3>
                <CodeBlock
                    language="bash"
                    code={`gdb ./buggy_program

# Inside GDB, start the program
(gdb) run

# Program crashes with SIGSEGV
# Find where it crashed
(gdb) backtrace

# Output shows:
# #0  0x00000000004005a7 in calculate (arr=0x0) at buggy_program.c:15
# #1  0x00000000004005d2 in main () at buggy_program.c:22

# Check the problematic line
(gdb) list 15

# Print the variable that caused the crash
(gdb) print arr
# Output: $1 = (int *) 0x0   <- NULL pointer!`}
                />

                <h3>Step 3: Set Breakpoints and Inspect</h3>
                <CodeBlock
                    language="bash"
                    code={`# Restart and set a breakpoint before the crash
(gdb) break 14
(gdb) run

# When it stops, check the variable
(gdb) print arr
(gdb) step   # Step into the function
(gdb) print *arr   # Try to dereference - this will show the error`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="common-errors">
                <h2>Common Runtime Errors</h2>

                <div className="space-y-6">
                    <div className="border-l-4 border-red-500 bg-red-50 dark:bg-red-900/20 p-4 rounded-r-lg">
                        <h3 className="text-red-700 dark:text-red-300 mt-0 mb-2">Segmentation Fault (SIGSEGV)</h3>
                        <p className="text-sm text-red-900 dark:text-red-200 mb-2">
                            Occurs when your program tries to access memory it doesn't own.
                        </p>
                        <p className="text-sm text-red-900 dark:text-red-200 mb-2"><strong>Common Causes:</strong></p>
                        <ul className="list-disc pl-5 text-sm text-red-800 dark:text-red-300 space-y-1">
                            <li>Dereferencing NULL pointers</li>
                            <li>Array index out of bounds</li>
                            <li>Accessing freed memory</li>
                            <li>Stack overflow from too deep recursion</li>
                        </ul>
                        <p className="text-sm text-red-900 dark:text-red-200 mt-2">
                            <strong>Solution:</strong> Run in GDB, let it crash, then use <code>backtrace</code> to see the exact line.
                        </p>
                    </div>

                    <div className="border-l-4 border-orange-500 bg-orange-50 dark:bg-orange-900/20 p-4 rounded-r-lg">
                        <h3 className="text-orange-700 dark:text-orange-300 mt-0 mb-2">Floating Point Exception (SIGFPE)</h3>
                        <p className="text-sm text-orange-900 dark:text-orange-200 mb-2">
                            Illegal arithmetic operations.
                        </p>
                        <p className="text-sm text-orange-900 dark:text-orange-200 mb-2"><strong>Common Causes:</strong></p>
                        <ul className="list-disc pl-5 text-sm text-orange-800 dark:text-orange-300 space-y-1">
                            <li>Division by zero</li>
                            <li>Integer overflow</li>
                            <li>Invalid modulo operation</li>
                        </ul>
                        <p className="text-sm text-orange-900 dark:text-orange-200 mt-2">
                            <strong>Solution:</strong> Set breakpoint before the operation, use <code>print</code> to check denominators.
                        </p>
                    </div>

                    <div className="border-l-4 border-yellow-500 bg-yellow-50 dark:bg-yellow-900/20 p-4 rounded-r-lg">
                        <h3 className="text-yellow-700 dark:text-yellow-300 mt-0 mb-2">Bus Error (SIGBUS)</h3>
                        <p className="text-sm text-yellow-900 dark:text-yellow-200 mb-2">
                            Accessing misaligned memory or hardware issues.
                        </p>
                        <p className="text-sm text-yellow-900 dark:text-yellow-200 mt-2">
                            <strong>Solution:</strong> Check pointer arithmetic and ensure proper memory alignment.
                        </p>
                    </div>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="mpi-debugging">
                <h2>Debugging MPI Programs</h2>
                <p>
                    Debugging parallel MPI programs requires attaching GDB to specific processes.
                </p>

                <h3>Method 1: Debug Single MPI Process</h3>
                <CodeBlock
                    language="bash"
                    code={`# Compile with debug symbols
mpicc -g mpi_program.c -o mpi_program

# Run with GDB on a single process
mpirun -np 1 gdb ./mpi_program

# Inside GDB
(gdb) run`}
                />

                <h3>Method 2: Attach to Running MPI Process</h3>
                <CodeBlock
                    language="bash"
                    code={`# Start your MPI job
mpirun -np 4 ./mpi_program &

# Find the process ID
ps aux | grep mpi_program

# Attach GDB to specific process
gdb -p [PID]`}
                />

                <Alert variant="tip" title="MPI Debugging Tip">
                    For debugging MPI programs, use <code>printf</code> statements with MPI rank numbers to trace which process is causing issues before using GDB.
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="tips">
                <h2>Debugging Best Practices</h2>
                <div className="grid md:grid-cols-2 gap-4">
                    <div className="bg-emerald-50 dark:bg-emerald-900/20 p-4 rounded-lg border border-emerald-200 dark:border-emerald-800">
                        <h3 className="text-emerald-800 dark:text-emerald-300 text-base m-0 mb-2">Do's</h3>
                        <ul className="list-disc pl-5 text-sm text-emerald-900 dark:text-emerald-200 space-y-1 m-0">
                            <li>Always compile with <code>-g</code> flag</li>
                            <li>Use <code>-O0</code> (no optimization) for debugging</li>
                            <li>Add <code>printf</code> statements to trace execution</li>
                            <li>Test with small datasets first</li>
                            <li>Use valgrind for memory leak detection</li>
                        </ul>
                    </div>
                    <div className="bg-red-50 dark:bg-red-900/20 p-4 rounded-lg border border-red-200 dark:border-red-800">
                        <h3 className="text-red-800 dark:text-red-300 text-base m-0 mb-2">Don'ts</h3>
                        <ul className="list-disc pl-5 text-sm text-red-900 dark:text-red-200 space-y-1 m-0">
                            <li>Don't debug optimized code (<code>-O2</code>, <code>-O3</code>)</li>
                            <li>Don't run debugger on the login node</li>
                            <li>Don't debug with production-size datasets</li>
                            <li>Don't forget to remove debug symbols for production builds</li>
                        </ul>
                    </div>
                </div>
            </section>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/applications', label: 'Applications & Libraries' }}
                next={{ to: '/best-practices', label: 'Best Practices' }}
            />
        </div>
    );
}
