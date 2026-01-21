import { Play, ClipboardList, Activity, Link2, Mail, Layers, Server, GitBranch } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import { Alert } from '../components/Alert';

export function RunningJobs() {
    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={Activity}
                badge="SLURM Scheduler"
                title="Running Jobs"
                description="Param Sanganak uses SLURM (Simple Linux Utility for Resource Management) to schedule and manage jobs on compute nodes."
                variant="blue"
            />

            <Alert variant="info" title="Job Limits">
                You can submit maximum 8 jobs (only 4 can run at the same time). Any additional jobs will be rejected by the system.
            </Alert>

            <div className="prose prose-slate dark:prose-invert max-w-none">

            {/* IMAGE PLACEHOLDER: SLURM Job Lifecycle Diagram */}
            {/*
            AI Image Generation Prompt:
            "Create a professional flowchart diagram showing SLURM job lifecycle. Include these states in sequence:
            1. SUBMITTED (user submits job with sbatch)
            2. PENDING (waiting in queue, yellow color)
            3. RUNNING (executing on compute nodes, green color)
            4. COMPLETING (finishing up, blue color)
            5. COMPLETED (success, dark green)

            Also show alternate paths: FAILED (red), CANCELLED (gray), TIMEOUT (orange).
            Use clean, modern design with icons for each state. Include arrows showing state transitions.
            Background: light gray gradient. Text: clear sans-serif font. Include SLURM logo or name at top.
            Save as: /public/slurm_lifecycle.png
            */}
            <figure className="my-8">
                <img
                    src="/slurm_lifecycle.png"
                    alt="SLURM Job Lifecycle Diagram"
                    className="w-full h-auto rounded-xl border border-slate-200 dark:border-slate-800 shadow-lg"
                />
                <figcaption className="text-center text-sm text-slate-500 dark:text-slate-400 mt-2">
                    Figure: SLURM Job State Transitions
                </figcaption>
            </figure>

            <section id="partitions">
                <h2>1. Available Partitions (Queues)</h2>
                <p>
                    Param Sanganak has <strong>7 partitions</strong> optimized for different workload sizes.
                    Choose the right partition based on your CPU/GPU requirements and walltime needs.
                </p>

                <div className="overflow-x-auto my-6">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr className="border-b border-slate-300 dark:border-slate-700">
                                <th className="p-3 text-left font-semibold">Partition</th>
                                <th className="p-3 text-left font-semibold">Min Cores</th>
                                <th className="p-3 text-left font-semibold">Max Cores</th>
                                <th className="p-3 text-left font-semibold">Max Time</th>
                                <th className="p-3 text-left font-semibold">Nodes</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">serial</td>
                                <td className="p-3">1</td>
                                <td className="p-3">24</td>
                                <td className="p-3">2 days</td>
                                <td className="p-3 text-xs">2 high-memory nodes</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">small</td>
                                <td className="p-3">48 (1 node)</td>
                                <td className="p-3">96 (2 nodes)</td>
                                <td className="p-3">2 days</td>
                                <td className="p-3 text-xs">50 CPU + 27 HM</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">medium</td>
                                <td className="p-3">96 (2 nodes)</td>
                                <td className="p-3">192 (4 nodes)</td>
                                <td className="p-3">2 days</td>
                                <td className="p-3 text-xs">60 CPU + 25 HM</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">large</td>
                                <td className="p-3">192 (4 nodes)</td>
                                <td className="p-3">480 (10 nodes)</td>
                                <td className="p-3 font-semibold text-emerald-600 dark:text-emerald-400">3 days</td>
                                <td className="p-3 text-xs">76 CPU + 24 HM</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">fat</td>
                                <td className="p-3">480 (10 nodes)</td>
                                <td className="p-3">No explicit limit</td>
                                <td className="p-3">2 days</td>
                                <td className="p-3 text-xs">47 CPU + 24 HM</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">hm</td>
                                <td className="p-3">48 (1 node)</td>
                                <td className="p-3">288 (6 nodes)</td>
                                <td className="p-3">2 days</td>
                                <td className="p-3 text-xs">76 high-memory nodes (768GB RAM)</td>
                            </tr>
                            <tr className="bg-purple-50 dark:bg-purple-900/20">
                                <td className="p-3 font-mono text-purple-600 dark:text-purple-400">gpu</td>
                                <td className="p-3">1 CPU + 1 GPU</td>
                                <td className="p-3">160 CPU + 8 GPUs</td>
                                <td className="p-3">2 days</td>
                                <td className="p-3 text-xs">20 GPU nodes (2×V100 per node)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <Alert variant="warning" title="Default Walltime">
                    2 hours for all partitions. Maximum walltime varies by partition (see table above).
                    For jobs longer than the maximum limit, contact support at <a href="mailto:sanganaksupport@iitk.ac.in" className="underline">sanganaksupport@iitk.ac.in</a>.
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="job-scripts">
                <div className="flex items-center gap-2 mb-4">
                    <Play className="text-slate-400" />
                    <h2 className="m-0">2. Job Script Templates</h2>
                </div>

                <p>
                    To submit a job, create a shell script (e.g., <code>job.sh</code>) with SLURM directives (lines starting with <code>#SBATCH</code>)
                    and submit it using <code>sbatch job.sh</code>.
                </p>

                <h3 className="text-lg font-semibold mt-8 mb-2">Basic Serial Job</h3>
                <CodeBlock
                    language="bash"
                    title="serial_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 1                # Number of nodes
#SBATCH --ntasks-per-node=1 # 1 core
#SBATCH --time=01:00:00     # Time limit (HH:MM:SS)
#SBATCH --job-name=my_serial_job
#SBATCH --output=job.%J.out # %J will be replaced with job ID
#SBATCH --error=job.%J.err
#SBATCH --partition=serial

# Load required modules
module load compiler/intel/2018.2.199

# Run the executable
./a.out`}
                />

                <h3 className="text-lg font-semibold mt-8 mb-2">MPI Parallel Job</h3>
                <CodeBlock
                    language="bash"
                    title="mpi_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 2                 # Request 2 nodes
#SBATCH --ntasks-per-node=40 # 40 cores per node (Total 80)
#SBATCH --time=02:00:00
#SBATCH --job-name=mpi_job
#SBATCH --output=mpi.%J.out
#SBATCH --partition=small

module load compiler/intel/latest

# Export MPI settings for InfiniBand (OFI is current standard, DAPL deprecated)
export I_MPI_FABRICS=shm:ofi
export I_MPI_OFI_PROVIDER=mlx  # For Mellanox InfiniBand

# Run using mpirun
mpirun -n $SLURM_NTASKS ./my_mpi_app`}
                />

                <h3 className="text-lg font-semibold mt-8 mb-2">GPU Job (CUDA)</h3>
                <CodeBlock
                    language="bash"
                    title="gpu_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 1
#SBATCH --ntasks-per-node=10
#SBATCH --gres=gpu:2         # Request 2 GPUs per node
#SBATCH --time=01:00:00
#SBATCH --partition=gpu      # Must use 'gpu' partition
#SBATCH --job-name=cuda_job

module load cuda/10.1

# Check GPU availability
nvidia-smi

# Run GPU application
./gpu_app`}
                />

                <h3 className="text-lg font-semibold mt-8 mb-2">OpenMP Parallel Job</h3>
                <CodeBlock
                    language="bash"
                    title="openmp_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 1
#SBATCH --ntasks-per-node=24 # 24 cores on single node
#SBATCH --time=01:00:00
#SBATCH --job-name=openmp_job
#SBATCH --partition=small

module load compiler/intel/2018.2.199

# Set number of OpenMP threads
export OMP_NUM_THREADS=24

# Run OpenMP application
./openmp_app`}
                />

                <h3 className="text-lg font-semibold mt-8 mb-2">Hybrid MPI+OpenMP Job</h3>
                <CodeBlock
                    language="bash"
                    title="hybrid_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 4
#SBATCH --ntasks-per-node=4  # 4 MPI processes per node
#SBATCH --time=02:00:00
#SBATCH --job-name=hybrid_job
#SBATCH --partition=medium

module load compiler/intel/latest

# 4 MPI processes per node, each with 12 OpenMP threads
export OMP_NUM_THREADS=12
export I_MPI_FABRICS=shm:ofi
export I_MPI_OFI_PROVIDER=mlx  # For Mellanox InfiniBand

# Total: 16 MPI processes, each with 12 threads
mpirun -n $SLURM_NTASKS ./hybrid_app`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="job-dependencies">
                <div className="flex items-center gap-2 mb-4">
                    <Link2 className="text-emerald-600 dark:text-emerald-400" />
                    <h2 className="m-0">3. Job Dependencies (Running Jobs Sequentially)</h2>
                </div>

                <p>
                    Sometimes you need to run jobs in sequence, where one job depends on the completion of another
                    (e.g., preprocessing → main simulation → postprocessing). SLURM provides the <code>--dependency</code> flag for this.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Method 1: Using Job IDs</h3>
                <CodeBlock
                    language="bash"
                    code={`# Submit the first job
$ sbatch preprocessing.sh
Submitted batch job 1001

# Submit second job that depends on job 1001 completing successfully
$ sbatch --dependency=afterok:1001 main_simulation.sh
Submitted batch job 1002

# Submit third job that depends on job 1002
$ sbatch --dependency=afterok:1002 postprocessing.sh
Submitted batch job 1003`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Method 2: Using Singleton (Same Job Name)</h3>
                <p>
                    The <code>singleton</code> method is simpler: SLURM automatically waits for all previous jobs
                    with the same name to complete before starting the next one.
                </p>
                <CodeBlock
                    language="bash"
                    code={`# All three scripts use the same job name
#SBATCH --job-name=my_pipeline

# Submit all three jobs
$ sbatch --dependency=singleton preprocessing.sh
Submitted batch job 1004

$ sbatch --dependency=singleton main_simulation.sh
Submitted batch job 1005  # Will wait for 1004

$ sbatch --dependency=singleton postprocessing.sh
Submitted batch job 1006  # Will wait for 1005`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Dependency Types</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr>
                                <th className="p-3 text-left">Dependency Type</th>
                                <th className="p-3 text-left">Description</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">afterok:jobid</td>
                                <td className="p-3">Start only if specified job completed successfully (exit code 0)</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">afterany:jobid</td>
                                <td className="p-3">Start after specified job finishes (regardless of exit code)</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">afternotok:jobid</td>
                                <td className="p-3">Start only if specified job failed (non-zero exit code)</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-mono text-blue-600 dark:text-blue-400">singleton</td>
                                <td className="p-3">Start after all previous jobs with same name complete</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <div className="bg-emerald-50 dark:bg-emerald-900/20 border-l-4 border-emerald-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-emerald-900 dark:text-emerald-200 mb-2">
                        <strong>Pro Tip:</strong> Check job status with <code>squeue -u $USER</code>.
                        Dependent jobs will show <code>(Dependency)</code> as the reason in the NODELIST column.
                    </p>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="job-arrays">
                <div className="flex items-center gap-2 mb-4">
                    <Layers className="text-purple-600 dark:text-purple-400" />
                    <h2 className="m-0">4. Job Arrays (Running Multiple Similar Jobs)</h2>
                </div>

                <p>
                    Job arrays allow you to submit many similar jobs with a single command.
                    Perfect for parameter sweeps, processing multiple datasets, or Monte Carlo simulations.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Basic Job Array</h3>
                <CodeBlock
                    language="bash"
                    title="array_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 1
#SBATCH --ntasks-per-node=1
#SBATCH --time=01:00:00
#SBATCH --job-name=param_sweep
#SBATCH --array=1-10         # Creates 10 jobs with IDs 1 to 10
#SBATCH --output=job_%A_%a.out  # %A = main job ID, %a = array task ID
#SBATCH --partition=serial

# $SLURM_ARRAY_TASK_ID contains the current array index (1, 2, 3, ... 10)
echo "Processing task $SLURM_ARRAY_TASK_ID"

# Example: process different input files
INPUT_FILE="data_$SLURM_ARRAY_TASK_ID.txt"
./process_data $INPUT_FILE

# Example: use different parameters
ALPHA=$(echo "scale=2; $SLURM_ARRAY_TASK_ID * 0.1" | bc)
./simulation --alpha=$ALPHA`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Advanced Array Syntax</h3>
                <CodeBlock
                    language="bash"
                    code={`# Range with step size
#SBATCH --array=0-100:10     # Creates jobs: 0, 10, 20, 30, ..., 100

# Specific values
#SBATCH --array=1,5,9,13     # Creates 4 jobs with IDs 1, 5, 9, 13

# Limit concurrent jobs (useful for I/O intensive tasks)
#SBATCH --array=1-100%10     # Run max 10 jobs at a time

# Submit array job from command line
$ sbatch --array=1-50 my_script.sh`}
                />

                <div className="bg-purple-50 dark:bg-purple-900/20 border-l-4 border-purple-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-purple-900 dark:text-purple-200 mb-2">
                        <strong>Use Case Example:</strong> Processing 100 data files
                    </p>
                    <ul className="list-disc pl-5 text-sm text-purple-800 dark:text-purple-100 space-y-1 m-0">
                        <li>Instead of creating 100 separate job scripts, use <code>--array=1-100</code></li>
                        <li>Inside the script, use <code>$SLURM_ARRAY_TASK_ID</code> to select the file: <code>data_$SLURM_ARRAY_TASK_ID.csv</code></li>
                        <li>All 100 jobs share the same script but process different data</li>
                    </ul>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="email-notifications">
                <div className="flex items-center gap-2 mb-4">
                    <Mail className="text-blue-600 dark:text-blue-400" />
                    <h2 className="m-0">5. Email Notifications</h2>
                </div>

                <p>
                    Get notified via email when your jobs start, finish, or fail. Very useful for long-running jobs.
                </p>

                <CodeBlock
                    language="bash"
                    title="job_with_email.sh"
                    code={`#!/bin/bash
#SBATCH -N 1
#SBATCH --ntasks-per-node=48
#SBATCH --time=06:00:00
#SBATCH --job-name=long_simulation
#SBATCH --partition=medium
#SBATCH --mail-user=your.email@iitk.ac.in
#SBATCH --mail-type=BEGIN,END,FAIL   # When to send emails
#SBATCH --output=job.%J.out

# Your commands here
./my_long_simulation`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Email Notification Types</h3>
                <div className="grid sm:grid-cols-2 gap-3 my-4">
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <code className="text-blue-600 dark:text-blue-400">BEGIN</code>
                        <p className="text-xs mt-1 mb-0">Email when job starts running</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <code className="text-blue-600 dark:text-blue-400">END</code>
                        <p className="text-xs mt-1 mb-0">Email when job completes (success or failure)</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <code className="text-blue-600 dark:text-blue-400">FAIL</code>
                        <p className="text-xs mt-1 mb-0">Email only if job fails (non-zero exit)</p>
                    </div>
                    <div className="p-3 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <code className="text-blue-600 dark:text-blue-400">ALL</code>
                        <p className="text-xs mt-1 mb-0">Email for all events above</p>
                    </div>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="advanced-options">
                <div className="flex items-center gap-2 mb-4">
                    <Server className="text-slate-600 dark:text-slate-400" />
                    <h2 className="m-0">6. Advanced Job Options</h2>
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-2">Exclusive Node Access</h3>
                <p>
                    Request exclusive access to nodes (no sharing with other users' jobs). Useful for performance-critical applications.
                </p>
                <CodeBlock
                    language="bash"
                    code={`#SBATCH --exclusive    # Get full nodes exclusively`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Specific Node Selection</h3>
                <CodeBlock
                    language="bash"
                    code={`# Request specific nodes (use with caution)
#SBATCH --nodelist=cn[031,046]

# Exclude specific nodes
#SBATCH --exclude=cn[001-005]`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Account and QOS Selection (Regular vs High-Priority)</h3>
                <p>
                    If you have both Regular Access (RA) and High-Priority (HP) accounts, specify which one to use:
                </p>

                <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 border border-blue-200 dark:border-blue-800 rounded-lg">
                        <h4 className="text-base font-semibold text-blue-800 dark:text-blue-300 m-0 mb-2">Regular Access Job</h4>
                        <CodeBlock
                            language="bash"
                            code={`#!/bin/bash
#SBATCH -N 2
#SBATCH --ntasks-per-node=48
#SBATCH --account=paramsanganak
#SBATCH --qos=username_ra  # Replace with your username
#SBATCH --partition=small`}
                        />
                    </div>

                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 border border-orange-200 dark:border-orange-800 rounded-lg">
                        <h4 className="text-base font-semibold text-orange-800 dark:text-orange-300 m-0 mb-2">High-Priority Job</h4>
                        <CodeBlock
                            language="bash"
                            code={`#!/bin/bash
#SBATCH -N 2
#SBATCH --ntasks-per-node=48
#SBATCH --account=iitk_hp
#SBATCH --qos=username_hp  # Replace with your username
#SBATCH --partition=small`}
                        />
                    </div>
                </div>

                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-amber-900 dark:text-amber-200 m-0">
                        <strong>Note:</strong> High-Priority jobs have faster queue times but cost more.
                        Check your account type and QOS name using <code>sshare</code> command (explained below).
                    </p>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="interactive">
                <h2>7. Interactive Jobs</h2>
                <p>
                    For testing, debugging, or interactive data analysis, use <code>salloc</code> or <code>srun</code>
                    to get an interactive shell on a compute node.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Method 1: Using salloc</h3>
                <CodeBlock
                    language="bash"
                    code={`# Request 1 node for 2 hours
$ salloc -N 1 --ntasks-per-node=48 --partition=small --time=02:00:00
salloc: Granted job allocation 1234
salloc: Waiting for resource configuration
salloc: Nodes cn045 are ready for job

# You now have a shell on the login node with allocated resources
# SSH to the compute node
$ ssh cn045

# Run your commands
$ module load compiler/intel/2018.2.199
$ ./my_program

# Exit when done
$ exit
$ exit  # Exit salloc session`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Method 2: Using srun (Direct Interactive)</h3>
                <CodeBlock
                    language="bash"
                    code={`# Get interactive bash shell directly on compute node
$ srun --nodes=1 --ntasks-per-node=1 --time=01:00:00 --pty bash -i

# You're now on a compute node
# Run commands directly
$ hostname
cn078
$ module load python/3.7
$ python my_script.py

# Exit to return to login node
$ exit`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Interactive GPU Session</h3>
                <CodeBlock
                    language="bash"
                    code={`# Request 1 GPU node for testing
$ salloc -N 1 --gres=gpu:2 --partition=gpu --time=01:00:00

# Load CUDA and test
$ module load cuda/10.1
$ nvidia-smi
# Shows GPU information`}
                />

                <div className="bg-amber-50 dark:bg-amber-900/20 border-l-4 border-amber-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-amber-900 dark:text-amber-200 m-0">
                        <strong>Important:</strong> Interactive sessions consume your allocated CPU/GPU hours the same as batch jobs.
                        Always <code>exit</code> when done to release resources and stop billing.
                    </p>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="commands">
                <div className="flex items-center gap-2 mb-4">
                    <ClipboardList className="text-slate-400" />
                    <h2 className="m-0">8. Essential SLURM Commands</h2>
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-2">Job Submission and Monitoring</h3>
                <div className="grid sm:grid-cols-2 gap-4 mb-6">
                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h4 className="font-mono text-blue-700 dark:text-blue-400 m-0 mb-2">sbatch script.sh</h4>
                        <p className="text-sm mb-0">Submit a job script to the queue.</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h4 className="font-mono text-blue-700 dark:text-blue-400 m-0 mb-2">squeue -u username</h4>
                        <p className="text-sm mb-0">View your running/pending jobs.</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h4 className="font-mono text-blue-700 dark:text-blue-400 m-0 mb-2">scancel JOB_ID</h4>
                        <p className="text-sm mb-0">Cancel a specific job.</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h4 className="font-mono text-blue-700 dark:text-blue-400 m-0 mb-2">scancel -u username</h4>
                        <p className="text-sm mb-0">Cancel all your jobs.</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h4 className="font-mono text-blue-700 dark:text-blue-400 m-0 mb-2">sinfo</h4>
                        <p className="text-sm mb-0">View partition and node status.</p>
                    </div>

                    <div className="p-4 bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg">
                        <h4 className="font-mono text-blue-700 dark:text-blue-400 m-0 mb-2">scontrol show job JOB_ID</h4>
                        <p className="text-sm mb-0">Detailed job information.</p>
                    </div>
                </div>

                <h3 className="text-lg font-semibold mt-8 mb-2">Job State Codes</h3>
                <p>When you run <code>squeue</code>, you'll see job states (ST column). Here's what they mean:</p>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr>
                                <th className="p-3 text-left">State</th>
                                <th className="p-3 text-left">Code</th>
                                <th className="p-3 text-left">Meaning</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr className="bg-emerald-50 dark:bg-emerald-900/20">
                                <td className="p-3 font-semibold text-emerald-700 dark:text-emerald-400">RUNNING</td>
                                <td className="p-3 font-mono">R</td>
                                <td className="p-3">Job is currently executing on compute nodes</td>
                            </tr>
                            <tr className="bg-yellow-50 dark:bg-yellow-900/20">
                                <td className="p-3 font-semibold text-yellow-700 dark:text-yellow-400">PENDING</td>
                                <td className="p-3 font-mono">PD</td>
                                <td className="p-3">Job is waiting in queue for resources</td>
                            </tr>
                            <tr className="bg-blue-50 dark:bg-blue-900/20">
                                <td className="p-3 font-semibold text-blue-700 dark:text-blue-400">COMPLETING</td>
                                <td className="p-3 font-mono">CG</td>
                                <td className="p-3">Job is finishing up, releasing resources</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">COMPLETED</td>
                                <td className="p-3 font-mono">CD</td>
                                <td className="p-3">Job finished successfully</td>
                            </tr>
                            <tr className="bg-red-50 dark:bg-red-900/20">
                                <td className="p-3 font-semibold text-red-700 dark:text-red-400">FAILED</td>
                                <td className="p-3 font-mono">F</td>
                                <td className="p-3">Job terminated with non-zero exit code</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">CANCELLED</td>
                                <td className="p-3 font-mono">CA</td>
                                <td className="p-3">Job was cancelled by user or admin</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">TIMEOUT</td>
                                <td className="p-3 font-mono">TO</td>
                                <td className="p-3">Job exceeded time limit and was terminated</td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">SUSPENDED</td>
                                <td className="p-3 font-mono">S</td>
                                <td className="p-3">Job execution suspended (admin only)</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-semibold mt-8 mb-2">Job Hold and Release</h3>
                <p>You can place your jobs on hold (prevent them from running) and release them later:</p>
                <CodeBlock
                    language="bash"
                    code={`# Place a pending job on hold
$ scontrol hold JOB_ID

# Release a held job
$ scontrol release JOB_ID

# Check job status
$ squeue -u username
  JOBID PARTITION   NAME   USER ST  TIME  NODES NODELIST(REASON)
   1234    small   myjob   user1 PD  0:00      1 (JobHeldUser)`}
                />

                <h3 className="text-lg font-semibold mt-8 mb-2">Update Running Job</h3>
                <CodeBlock
                    language="bash"
                    code={`# Extend time limit of running job
$ scontrol update job=JOB_ID TimeLimit=4:00:00

# Change job name
$ scontrol update job=JOB_ID Name=new_name`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="accounting">
                <div className="flex items-center gap-2 mb-4">
                    <Activity className="text-purple-600 dark:text-purple-400" />
                    <h2 className="m-0">9. Job Accounting and Usage Tracking</h2>
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-2">Check Completed Job Information (sacct)</h3>
                <CodeBlock
                    language="bash"
                    code={`# View all your jobs from today
$ sacct

# View specific job details
$ sacct -j JOB_ID

# Detailed format with specific fields
$ sacct -j JOB_ID --format=JobID,JobName,Partition,State,ExitCode,Elapsed,CPUTime

# Jobs from last week
$ sacct --starttime=2024-01-01

# Failed jobs only
$ sacct --state=FAILED`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Monitor Running Job Resources (sstat)</h3>
                <CodeBlock
                    language="bash"
                    code={`# Real-time resource usage of running job
$ sstat -j JOB_ID

# Specific metrics
$ sstat -j JOB_ID --format=AveCPU,AveRSS,MaxRSS,MaxVMSize`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Usage Reports (sreport)</h3>
                <CodeBlock
                    language="bash"
                    code={`# Cluster usage report for last month
$ sreport cluster utilization start=2024-01-01 end=2024-01-31

# Your usage report
$ sreport cluster AccountUtilizationByUser start=2024-01-01 user=$USER`}
                />

                <h3 className="text-lg font-semibold mt-6 mb-2">Fair-Share Information (sshare)</h3>
                <p>Check your fair-share status and account associations:</p>
                <CodeBlock
                    language="bash"
                    code={`# View your fair-share and account info
$ sshare -u $USER

# Sample output:
#  Account       User  RawShares  NormShares    RawUsage   EffectvUsage  FairShare
# --------- ---------- ---------- ----------- ----------- -------------- ----------
# paramsang   username          1    0.015625       12345       0.154321   0.501234`}
                />

                <div className="bg-blue-50 dark:bg-blue-900/20 border-l-4 border-blue-500 p-4 my-4 rounded-r-md">
                    <p className="text-sm text-blue-900 dark:text-blue-200 mb-2">
                        <strong>Understanding Fair-Share:</strong>
                    </p>
                    <ul className="list-disc pl-5 text-sm text-blue-800 dark:text-blue-100 space-y-1 m-0">
                        <li>Fair-share value ranges from 0 to 1 (higher is better)</li>
                        <li>If you've used more resources recently, your fair-share decreases</li>
                        <li>Lower fair-share means lower job priority in the queue</li>
                        <li>The system automatically balances resource usage over time</li>
                    </ul>
                </div>

                <h3 className="text-lg font-semibold mt-6 mb-2">Check Storage Quota and Balance</h3>
                <CodeBlock
                    language="bash"
                    code={`# Check /home and /scratch storage usage
$ myquota

# Check Regular Access CPU/GPU hours balance
$ IITK_RA_Balance

# Check High-Priority Access balance
$ IITK_HP_Balance

# Sample output shows:
# - Total CPU Hours
# - Consumed CPU Hours
# - Balance CPU Hours
# - Total GPU Hours
# - Consumed GPU Hours
# - Balance GPU Hours`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="pbs-migration">
                <div className="flex items-center gap-2 mb-4">
                    <GitBranch className="text-orange-600 dark:text-orange-400" />
                    <h2 className="m-0">10. PBS/TORQUE to SLURM Migration Guide</h2>
                </div>

                <p>
                    If you're familiar with PBS/TORQUE from other HPC systems, here's a quick reference for converting your scripts to SLURM.
                </p>

                <h3 className="text-lg font-semibold mt-6 mb-2">Command Comparison</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr>
                                <th className="p-3 text-left">Task</th>
                                <th className="p-3 text-left">PBS/TORQUE</th>
                                <th className="p-3 text-left">SLURM</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                                <td className="p-3 font-semibold">Submit job</td>
                                <td className="p-3"><code>qsub script.sh</code></td>
                                <td className="p-3"><code>sbatch script.sh</code></td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">Delete job</td>
                                <td className="p-3"><code>qdel JOB_ID</code></td>
                                <td className="p-3"><code>scancel JOB_ID</code></td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">Job status</td>
                                <td className="p-3"><code>qstat</code></td>
                                <td className="p-3"><code>squeue</code></td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">Queue info</td>
                                <td className="p-3"><code>qstat -q</code></td>
                                <td className="p-3"><code>sinfo</code></td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">Job details</td>
                                <td className="p-3"><code>qstat -f JOB_ID</code></td>
                                <td className="p-3"><code>scontrol show job JOB_ID</code></td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">Hold job</td>
                                <td className="p-3"><code>qhold JOB_ID</code></td>
                                <td className="p-3"><code>scontrol hold JOB_ID</code></td>
                            </tr>
                            <tr>
                                <td className="p-3 font-semibold">Release job</td>
                                <td className="p-3"><code>qrls JOB_ID</code></td>
                                <td className="p-3"><code>scontrol release JOB_ID</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-semibold mt-8 mb-2">Script Directive Comparison</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr>
                                <th className="p-3 text-left">Directive</th>
                                <th className="p-3 text-left">PBS/TORQUE</th>
                                <th className="p-3 text-left">SLURM</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                                <td className="p-3">Script header</td>
                                <td className="p-3"><code>#PBS</code></td>
                                <td className="p-3"><code>#SBATCH</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Job name</td>
                                <td className="p-3"><code>#PBS -N jobname</code></td>
                                <td className="p-3"><code>#SBATCH --job-name=jobname</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Number of nodes</td>
                                <td className="p-3"><code>#PBS -l nodes=4</code></td>
                                <td className="p-3"><code>#SBATCH -N 4</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Cores per node</td>
                                <td className="p-3"><code>#PBS -l ppn=8</code></td>
                                <td className="p-3"><code>#SBATCH --ntasks-per-node=8</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Walltime</td>
                                <td className="p-3"><code>#PBS -l walltime=02:00:00</code></td>
                                <td className="p-3"><code>#SBATCH --time=02:00:00</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Queue/Partition</td>
                                <td className="p-3"><code>#PBS -q queuename</code></td>
                                <td className="p-3"><code>#SBATCH --partition=partitionname</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Output file</td>
                                <td className="p-3"><code>#PBS -o output.log</code></td>
                                <td className="p-3"><code>#SBATCH --output=output.log</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Error file</td>
                                <td className="p-3"><code>#PBS -e error.log</code></td>
                                <td className="p-3"><code>#SBATCH --error=error.log</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Email</td>
                                <td className="p-3"><code>#PBS -M user@email.com</code></td>
                                <td className="p-3"><code>#SBATCH --mail-user=user@email.com</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Email events</td>
                                <td className="p-3"><code>#PBS -m abe</code></td>
                                <td className="p-3"><code>#SBATCH --mail-type=BEGIN,END,FAIL</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Job array</td>
                                <td className="p-3"><code>#PBS -t 1-10</code></td>
                                <td className="p-3"><code>#SBATCH --array=1-10</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-semibold mt-8 mb-2">Environment Variable Mapping</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-900">
                            <tr>
                                <th className="p-3 text-left">Variable</th>
                                <th className="p-3 text-left">PBS/TORQUE</th>
                                <th className="p-3 text-left">SLURM</th>
                            </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-200 dark:divide-slate-800">
                            <tr>
                                <td className="p-3">Job ID</td>
                                <td className="p-3"><code>$PBS_JOBID</code></td>
                                <td className="p-3"><code>$SLURM_JOB_ID</code> or <code>$SLURM_JOBID</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Submit directory</td>
                                <td className="p-3"><code>$PBS_O_WORKDIR</code></td>
                                <td className="p-3">
                                    <code className="line-through text-slate-400">$SLURM_SUBMIT_DIR</code>
                                    <span className="text-xs text-amber-600 dark:text-amber-400 ml-2">(deprecated - jobs run in submit dir by default)</span>
                                </td>
                            </tr>
                            <tr>
                                <td className="p-3">Node list</td>
                                <td className="p-3"><code>$PBS_NODEFILE</code></td>
                                <td className="p-3"><code>$SLURM_JOB_NODELIST</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Number of tasks</td>
                                <td className="p-3"><code>$PBS_NP</code></td>
                                <td className="p-3"><code>$SLURM_NTASKS</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Job name</td>
                                <td className="p-3"><code>$PBS_JOBNAME</code></td>
                                <td className="p-3"><code>$SLURM_JOB_NAME</code></td>
                            </tr>
                            <tr>
                                <td className="p-3">Queue/Partition</td>
                                <td className="p-3"><code>$PBS_QUEUE</code></td>
                                <td className="p-3"><code>$SLURM_JOB_PARTITION</code></td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3 className="text-lg font-semibold mt-8 mb-2">Example PBS to SLURM Conversion</h3>
                <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div>
                        <h4 className="text-sm font-semibold mb-2">PBS Script</h4>
                        <CodeBlock
                            language="bash"
                            code={`#!/bin/bash
#PBS -N my_job
#PBS -l nodes=4:ppn=8
#PBS -l walltime=02:00:00
#PBS -q batch
#PBS -o job.out
#PBS -e job.err
#PBS -M user@email.com
#PBS -m abe

cd $PBS_O_WORKDIR
mpirun -np 32 ./app`}
                        />
                    </div>
                    <div>
                        <h4 className="text-sm font-semibold mb-2">SLURM Equivalent</h4>
                        <CodeBlock
                            language="bash"
                            code={`#!/bin/bash
#SBATCH --job-name=my_job
#SBATCH -N 4
#SBATCH --ntasks-per-node=8
#SBATCH --time=02:00:00
#SBATCH --partition=small
#SBATCH --output=job.out
#SBATCH --error=job.err
#SBATCH --mail-user=user@email.com
#SBATCH --mail-type=BEGIN,END,FAIL

# Note: SLURM executes jobs in the submission directory by default
# (cd $SLURM_SUBMIT_DIR is deprecated and unnecessary)

mpirun -n $SLURM_NTASKS ./app`}
                        />
                    </div>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <div className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-900/20 dark:to-purple-900/20 border border-blue-200 dark:border-blue-800 rounded-xl p-6 my-8">
                <h3 className="text-lg font-bold text-slate-900 dark:text-slate-100 mt-0 mb-3">Quick Reference Summary</h3>
                <div className="grid md:grid-cols-2 gap-4 text-sm">
                    <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Job Submission</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc pl-5">
                            <li><code>sbatch script.sh</code> - Submit job</li>
                            <li><code>salloc</code> - Interactive allocation</li>
                            <li><code>srun</code> - Run command on compute node</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Job Control</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc pl-5">
                            <li><code>scancel JOB_ID</code> - Cancel job</li>
                            <li><code>scontrol hold JOB_ID</code> - Hold job</li>
                            <li><code>scontrol release JOB_ID</code> - Release job</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Monitoring</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc pl-5">
                            <li><code>squeue -u $USER</code> - Your jobs</li>
                            <li><code>sinfo</code> - Partition status</li>
                            <li><code>sacct -j JOB_ID</code> - Job accounting</li>
                        </ul>
                    </div>
                    <div>
                        <h4 className="font-semibold text-slate-800 dark:text-slate-200 mb-2">Usage</h4>
                        <ul className="space-y-1 text-slate-700 dark:text-slate-300 list-disc pl-5">
                            <li><code>myquota</code> - Storage usage</li>
                            <li><code>IITK_RA_Balance</code> - CPU/GPU balance</li>
                            <li><code>sshare</code> - Fair-share info</li>
                        </ul>
                    </div>
                </div>
            </div>

            <Alert variant="tip" title="Need More Help?">
                For additional SLURM documentation, visit <a href="https://slurm.schedmd.com/documentation.html" target="_blank" rel="noreferrer" className="underline font-semibold">SLURM official docs</a> or
                contact support at <a href="mailto:sanganaksupport@iitk.ac.in" className="underline font-semibold">sanganaksupport@iitk.ac.in</a>.
            </Alert>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/account-management', label: 'Account Management' }}
                next={{ to: '/applications', label: 'Applications & Libraries' }}
            />
        </div>
    );
}
