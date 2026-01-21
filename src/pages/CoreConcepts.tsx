import { Cpu, Server, Box, Layers } from 'lucide-react';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import { Table, TableHead, TableBody, TableRow, TableHeaderCell, TableCell, Badge } from '../components/Table';

export function CoreConcepts() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={Server}
                badge="Architecture"
                title="Core Concepts"
                description="Understanding the hardware architecture and software stack of Param Sanganak supercomputer."
                variant="blue"
            />

            <div className="prose prose-slate dark:prose-invert max-w-none">

            <section id="hardware">
                <h2>Hardware Specifications</h2>
                <p>
                    Param Sanganak is a heterogeneous system built by C-DAC, featuring both CPU-only computing nodes and GPU-accelerated nodes.
                </p>

                <figure className="my-8">
                    <img
                        src="/architecture.png"
                        alt="Param Sanganak System Architecture"
                        className="w-full h-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg"
                    />
                    <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                        Figure 1: High-level System Architecture
                    </figcaption>
                </figure>

                <div className="grid gap-6 my-8">
                    {/* CPU Nodes - Standard */}
                    <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                        <div className="bg-blue-100 dark:bg-blue-900/20 p-3 rounded-lg h-fit">
                            <Cpu className="text-blue-700 dark:text-blue-400" size={24} />
                        </div>
                        <div>
                            <h3 className="mt-0 text-blue-900 dark:text-blue-300">Standard CPU Nodes (150 Nodes)</h3>
                            <ul className="text-sm text-slate-800 dark:text-slate-200 space-y-1 mb-2">
                                <li><strong>Processor:</strong> 2x Intel Xeon Platinum 8268 (48 Cores, 2.9 GHz)</li>
                                <li><strong>RAM:</strong> 192 GB DDR4 2933 MHz</li>
                                <li><strong>Local Storage:</strong> 480 GB SSD</li>
                            </ul>
                            <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block text-slate-600 dark:text-slate-400">
                                General scientific computing workloads
                            </div>
                        </div>
                    </div>

                    {/* CPU Nodes - High Memory */}
                    <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                        <div className="bg-indigo-100 dark:bg-indigo-900/20 p-3 rounded-lg h-fit">
                            <Server className="text-indigo-700 dark:text-indigo-400" size={24} />
                        </div>
                        <div>
                            <h3 className="mt-0 text-indigo-900 dark:text-indigo-300">High Memory Nodes (78 Nodes)</h3>
                            <ul className="text-sm text-slate-800 dark:text-slate-200 space-y-1 mb-2">
                                <li><strong>Processor:</strong> 2x Intel Xeon Platinum 8268 (48 Cores, 2.9 GHz)</li>
                                <li><strong>RAM:</strong> 768 GB DDR4 2933 MHz</li>
                                <li><strong>Local Storage:</strong> 480 GB SSD</li>
                            </ul>
                            <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block text-slate-600 dark:text-slate-400">
                                Memory-intensive applications
                            </div>
                        </div>
                    </div>

                    {/* CPU Nodes - GPU-Ready */}
                    <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                        <div className="bg-teal-100 dark:bg-teal-900/20 p-3 rounded-lg h-fit">
                            <Cpu className="text-teal-700 dark:text-teal-400" size={24} />
                        </div>
                        <div>
                            <h3 className="mt-0 text-teal-900 dark:text-teal-300">GPU-Ready Nodes (64 Nodes)</h3>
                            <ul className="text-sm text-slate-800 dark:text-slate-200 space-y-1 mb-2">
                                <li><strong>Processor:</strong> 2x Intel Xeon Platinum 8268 (48 Cores, 2.9 GHz)</li>
                                <li><strong>RAM:</strong> 192 GB DDR4 2933 MHz</li>
                                <li><strong>Local Storage:</strong> 480 GB SSD</li>
                            </ul>
                            <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block text-slate-600 dark:text-slate-400">
                                GPU-compatible infrastructure without installed GPUs
                            </div>
                        </div>
                    </div>

                    {/* GPU Nodes */}
                    <div className="flex gap-4 p-4 border border-slate-200 dark:border-slate-800 rounded-xl bg-white dark:bg-slate-900 shadow-sm">
                        <div className="bg-purple-100 dark:bg-purple-900/20 p-3 rounded-lg h-fit">
                            <Box className="text-purple-700 dark:text-purple-400" size={24} />
                        </div>
                        <div>
                            <h3 className="mt-0 text-purple-900 dark:text-purple-300">GPU Compute Nodes (20 Nodes)</h3>
                            <ul className="text-sm text-slate-800 dark:text-slate-200 space-y-1 mb-2">
                                <li><strong>Processor:</strong> 2x Intel Xeon Gold 6248 (40 Cores, 2.5 GHz)</li>
                                <li><strong>Accelerators:</strong> 2x NVIDIA Tesla V100 (16GB HBM2 each, 32GB total)</li>
                                <li><strong>GPU Cores:</strong> 10,240 CUDA cores per node (5,120 per GPU)</li>
                                <li><strong>RAM:</strong> 192 GB DDR4 2933 MHz</li>
                                <li><strong>Local Storage:</strong> 480 GB SSD</li>
                            </ul>
                            <div className="text-xs font-mono bg-slate-100 dark:bg-slate-800 px-2 py-1 rounded inline-block text-slate-600 dark:text-slate-400">
                                Optimized for AI/ML and molecular dynamics
                            </div>
                        </div>
                    </div>
                </div>

                <h3>Interconnection Network</h3>
                <p>
                    To ensure high scalability, all nodes are connected via a high-speed low-latency fabric.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                    <li className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-slate-100 mb-1">Primary (InfiniBand)</strong>
                        100 Gbps Mellanox HDR. Used for MPI communication and parallel storage access.
                    </li>
                    <li className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-slate-100 mb-1">Secondary (Gigabit Ethernet)</strong>
                        1 Gbps. Used for management and monitoring.
                    </li>
                </ul>

                <h3>Storage System</h3>
                <p>
                    PARAM Sanganak uses a high-performance Lustre parallel filesystem for shared storage across all nodes.
                </p>
                <ul className="grid sm:grid-cols-2 gap-4 list-none pl-0">
                    <li className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-slate-100 mb-1">Total Capacity</strong>
                        2.2 PiB (Pebibytes) usable storage
                    </li>
                    <li className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800">
                        <strong className="block text-slate-900 dark:text-slate-100 mb-1">Throughput</strong>
                        50 GB/s aggregate bandwidth
                    </li>
                </ul>

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 rounded-r-lg my-4">
                    <p className="text-sm text-blue-900 dark:text-blue-100 m-0">
                        <strong>Total System:</strong> 332 nodes (20 service nodes + 8 login nodes + 304 compute nodes),
                        providing 1.66 PFLOPS peak performance
                    </p>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="software">
                <div className="flex items-center gap-2 mb-4">
                    <Layers className="text-slate-400" />
                    <h2 className="m-0">Software Stack</h2>
                </div>

                <p>
                    Param Sanganak uses a module system to manage software versions. This allows you to load specific compilers or libraries without conflicts.
                </p>

                <Table caption="Software Stack Components">
                    <TableHead>
                        <TableRow hoverable={false}>
                            <TableHeaderCell>Category</TableHeaderCell>
                            <TableHeaderCell>Components</TableHeaderCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell highlight>OS</TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-1">
                                    <span>CentOS 7.6</span>
                                    <span className="text-xs text-amber-600 dark:text-amber-400">
                                        ⚠️ Note: Migration from CentOS 7.6 (EOL June 2024) may be planned
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell highlight>Resource Manager</TableCell>
                            <TableCell>SLURM (Simple Linux Utility for Resource Management)</TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell highlight>Compilers</TableCell>
                            <TableCell>
                                <div className="flex flex-col gap-2">
                                    <div className="flex flex-wrap gap-1">
                                        <Badge>gcc/gfortran</Badge>
                                        <Badge>Intel oneAPI (icx/ifx)</Badge>
                                        <Badge>nvcc (CUDA)</Badge>
                                        <Badge>NVIDIA HPC SDK</Badge>
                                    </div>
                                    <span className="text-xs text-slate-500 dark:text-slate-400">
                                        Legacy Intel classic compilers (icc/ifort) deprecated since 2023
                                    </span>
                                </div>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell highlight>MPI Libraries</TableCell>
                            <TableCell>OpenMPI, MVAPICH, Intel MPI</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </section>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/getting-started', label: 'Getting Started' }}
                next={{ to: '/account-management', label: 'Account Management' }}
            />
        </div>
    );
}
