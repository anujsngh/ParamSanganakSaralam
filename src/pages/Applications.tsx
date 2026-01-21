import { Package, Cpu, Box, CloudRain, FlaskConical, Download, Dna, Atom, Brain, Layers, Settings, Beaker } from 'lucide-react';
import { CodeBlock } from '../components/CodeBlock';
import { PageHeader } from '../components/PageHeader';
import { Breadcrumb, PageNavigation } from '../components/Breadcrumb';
import { Alert } from '../components/Alert';

export function Applications() {
    // Application categories for quick navigation
    const categories = [
        { id: 'basics', label: 'Modules System', icon: Settings },
        { id: 'spack', label: 'SPACK', icon: Download },
        { id: 'lammps', label: 'LAMMPS', icon: Atom },
        { id: 'gromacs', label: 'GROMACS', icon: FlaskConical },
        { id: 'wrf', label: 'WRF', icon: CloudRain },
        { id: 'openfoam', label: 'OpenFOAM', icon: CloudRain },
        { id: 'namd', label: 'NAMD', icon: Beaker },
        { id: 'ai-ml', label: 'AI/ML', icon: Brain },
        { id: 'quantum-chemistry', label: 'Quantum Chemistry', icon: Atom },
        { id: 'bioinformatics', label: 'Bioinformatics', icon: Dna },
        { id: 'local-install', label: 'Local Install', icon: Download },
    ];

    return (
        <div className="space-y-8">
            <Breadcrumb />

            <PageHeader
                icon={Package}
                badge="Software & Tools"
                title="Applications & Libraries"
                description="Comprehensive guides for using pre-installed scientific software, package managers, and installing custom applications on Param Sanganak."
                variant="purple"
            />

            {/* Quick Navigation */}
            <nav className="bg-slate-50 dark:bg-slate-900 p-5 rounded-xl border border-slate-200 dark:border-slate-800" aria-label="Application categories">
                <h3 className="text-base font-semibold text-slate-800 dark:text-slate-200 mb-4">Jump to Section</h3>
                <div className="flex flex-wrap gap-2">
                    {categories.map((cat) => {
                        const Icon = cat.icon;
                        return (
                            <a
                                key={cat.id}
                                href={`#${cat.id}`}
                                className="inline-flex items-center gap-2 px-3 py-2 text-sm bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-700 hover:border-slate-300 dark:hover:border-slate-600 text-slate-700 dark:text-slate-300 transition-all no-underline"
                            >
                                <Icon size={14} className="text-purple-500" />
                                {cat.label}
                            </a>
                        );
                    })}
                </div>
            </nav>

            {/* Featured Applications Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
                {[
                    { name: 'LAMMPS', color: 'bg-blue-500' },
                    { name: 'GROMACS', color: 'bg-emerald-500' },
                    { name: 'OpenFOAM', color: 'bg-cyan-500' },
                    { name: 'WRF', color: 'bg-sky-500' },
                    { name: 'NAMD', color: 'bg-purple-500' },
                    { name: 'TensorFlow', color: 'bg-orange-500' },
                ].map((app) => (
                    <div key={app.name} className="p-4 bg-white dark:bg-slate-900 rounded-lg border border-slate-200 dark:border-slate-800 text-center hover:shadow-md transition-shadow">
                        <div className={`w-8 h-8 ${app.color} rounded-lg mx-auto mb-2 flex items-center justify-center`}>
                            <Layers size={16} className="text-white" />
                        </div>
                        <span className="font-semibold text-sm text-slate-700 dark:text-slate-300">{app.name}</span>
                    </div>
                ))}
            </div>

            <div className="prose prose-slate dark:prose-invert max-w-none">

            <section id="basics">
                <h2>Modules System</h2>
                <p>
                    Software is managed via <strong>Environment Modules</strong>. You must load the specific version you need before running it.
                </p>
                <CodeBlock
                    language="bash"
                    title="Essential Module Commands"
                    code={`module avail              # List all available software
module avail python       # Search for specific software (e.g., python)
module list               # List currently loaded modules
module load <name>        # Load a module (e.g., module load python/3.11)
module unload <name>      # Unload a module
module purge              # Unload all modules`}
                />
                <Alert variant="tip" title="Module Dependencies">
                    Some modules have dependencies. If you get an error while loading a module, check if you need to load related modules first (like loading a compiler before loading an MPI library).
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="spack">
                <div className="flex items-center gap-2 mb-4">
                    <Download className="text-emerald-600 dark:text-emerald-400" />
                    <h2 className="m-0">SPACK Package Manager</h2>
                </div>
                <p>
                    <strong>SPACK</strong> is a flexible package manager that allows you to install and manage custom software versions with specific compiler optimizations and dependencies.
                    It's particularly useful when you need:
                </p>
                <ul className="text-sm">
                    <li>A specific version of software not available as a module</li>
                    <li>Custom compilation flags for your application</li>
                    <li>Multiple versions of the same software for testing</li>
                    <li>Software with complex dependency chains</li>
                </ul>

                <h3>Initializing SPACK</h3>
                <p>Before using SPACK commands, you must initialize it in your shell session:</p>
                <CodeBlock
                    language="bash"
                    code={`# Initialize SPACK (run this every time you login, or add to your ~/.bashrc)
source /home/apps/spack/share/spack/setup-env.sh

# Verify SPACK is loaded
spack --version`}
                />

                <Alert variant="info" title="Pro Tip">
                    Add the SPACK initialization command to your <code>~/.bashrc</code> to automatically load it on every login:
                    <CodeBlock
                        language="bash"
                        code={`echo "source /home/apps/spack/share/spack/setup-env.sh" >> ~/.bashrc`}
                    />
                </Alert>

                <h3>Basic SPACK Commands</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-50 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Command</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Description</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Example</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400 text-xs">spack list [pkg]</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">List available packages</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">spack list python</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400 text-xs">spack info [pkg]</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Show package details and variants</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">spack info gromacs</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400 text-xs">spack find</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">List installed packages</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">spack find</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400 text-xs">spack install [spec]</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Install a package with specifications</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">spack install python@3.9</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400 text-xs">spack uninstall [spec]</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Uninstall a package</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">spack uninstall python@3.9</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400 text-xs">spack load [pkg]</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Load package into environment (like module load)</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">spack load gromacs</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-blue-600 dark:text-blue-400 text-xs">spack compilers</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">List available compilers</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">spack compilers</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Package Specifications (Spec Syntax)</h3>
                <p className="text-sm">
                    SPACK uses a powerful "spec" syntax to precisely specify what you want to install:
                </p>
                <CodeBlock
                    language="bash"
                    code={`# Basic syntax: package@version%compiler+variant
# Examples:

# Install specific version
spack install python@3.11.4

# Install with specific compiler
spack install python@3.11.4%gcc@14.2.0

# Install with variants (features enabled/disabled)
spack install gromacs@2024.3 +cuda +mpi

# Complex specification with everything
spack install gromacs@2024.3%gcc@14.2.0 +cuda +mpi cuda_arch=70`}
                />

                <div className="bg-slate-50 dark:bg-slate-900 p-4 rounded-lg border border-slate-200 dark:border-slate-800 my-4">
                    <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mt-0 mb-2">Spec Syntax Components</h4>
                    <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 m-0 list-disc pl-5">
                        <li><code>@version</code> - Specify version (e.g., <code>@2024.3</code>)</li>
                        <li><code>%compiler</code> - Specify compiler (e.g., <code>%gcc@14.2.0</code>, <code>%intel@2025.0</code>)</li>
                        <li><code>+variant</code> - Enable a variant/feature (e.g., <code>+cuda</code>, <code>+mpi</code>)</li>
                        <li><code>~variant</code> - Disable a variant (e.g., <code>~cuda</code> to disable CUDA support)</li>
                        <li><code>key=value</code> - Set variant value (e.g., <code>cuda_arch=70</code> for V100 GPUs)</li>
                    </ul>
                </div>

                <h3>Example: Installing GROMACS with CUDA Support</h3>
                <p className="text-sm">
                    Here's a complete example of installing GROMACS 2024.3 with CUDA support optimized for Param Sanganak's V100 GPUs:
                </p>
                <CodeBlock
                    language="bash"
                    code={`# Initialize SPACK
source /home/apps/spack/share/spack/setup-env.sh

# Check available GROMACS variants
spack info gromacs

# Install GROMACS with CUDA, using GCC 14.2.0, with 40 parallel jobs
spack install -j40 gromacs@2024.3%gcc@14.2.0 +cuda cuda_arch=70

# This may take 30-60 minutes depending on system load

# Once installed, load it
spack load gromacs@2024.3%gcc@14.2.0

# Verify installation
gmx_mpi --version`}
                />

                <Alert variant="warning" title="Installation Time">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>Compilation can take 30 minutes to several hours depending on the package</li>
                        <li>Use <code>-j40</code> or <code>-j48</code> flag to use multiple cores for faster compilation</li>
                        <li>Compile on the <strong>login node</strong> (not in a job script) - compilation is allowed on login nodes</li>
                        <li>For very long compilations (2+ hours), consider using <code>screen</code> or <code>tmux</code> to avoid disconnection</li>
                    </ul>
                </Alert>

                <h3>Running SPACK-installed Software in Jobs</h3>
                <p className="text-sm">
                    To use SPACK packages in your SLURM job scripts, you need to initialize SPACK and load the package:
                </p>
                <CodeBlock
                    language="bash"
                    title="gromacs_spack_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 4
#SBATCH --ntasks-per-node=48
#SBATCH --time=04:00:00
#SBATCH --job-name=gromacs_spack
#SBATCH --partition=medium

# Initialize SPACK
source /home/apps/spack/share/spack/setup-env.sh

# Load your installed package
spack load gromacs@2024.3%gcc@14.2.0

# Set MPI environment variables
export I_MPI_FABRICS=shm:dapl
export I_MPI_FALLBACK=0

# Run simulation
cd /scratch/username/simulation
mpirun -np 192 gmx_mpi mdrun -deffnm production -ntomp 1`}
                />

                <h3>Example: GROMACS Benchmark with OpenMPI</h3>
                <p className="text-sm">
                    Running a multi-node GROMACS benchmark using SPACK-installed software with OpenMPI:
                </p>
                <CodeBlock
                    language="bash"
                    title="gromacs_benchmark.sh"
                    code={`#!/bin/bash
#SBATCH -N 8
#SBATCH --ntasks-per-node=48
#SBATCH --time=02:00:00
#SBATCH --job-name=gromacs_bench
#SBATCH --partition=large
#SBATCH --output=benchmark_%j.out
#SBATCH --error=benchmark_%j.err

# Initialize SPACK
source /home/apps/spack/share/spack/setup-env.sh

# Load GROMACS and dependencies
spack load gromacs@2024.3%gcc@14.2.0
spack load openmpi

# Prepare benchmark
cd /scratch/username/gromacs_benchmark
tar -xzf benchmark.tar.gz
cd benchmark

# Run energy minimization
gmx_mpi grompp -f em.mdp -c conf.gro -p topol.top -o em.tpr
mpirun -np 384 gmx_mpi mdrun -deffnm em

# Run production MD
gmx_mpi grompp -f md.mdp -c em.gro -p topol.top -o md.tpr
mpirun -np 384 gmx_mpi mdrun -deffnm md -ntomp 1 -v

# Report performance
grep "Performance:" md.log`}
                />

                <h3>Compiler Configuration for SPACK</h3>
                <p className="text-sm">
                    Check available compilers and add new ones if needed:
                </p>
                <CodeBlock
                    language="bash"
                    code={`# List available compilers
spack compilers

# Find and add new compilers on the system
spack compiler find

# View compiler configuration
spack config get compilers

# Sample output shows gcc@14.2.0, intel@2025.0, etc.`}
                />

                <h3>Useful SPACK Tips</h3>
                <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div className="p-4 bg-emerald-50 dark:bg-emerald-900/20 rounded-lg border border-emerald-200 dark:border-emerald-900/50">
                        <h4 className="text-emerald-700 dark:text-emerald-400 m-0 mb-2 text-base">Best Practices</h4>
                        <ul className="list-disc pl-5 text-sm text-emerald-900 dark:text-emerald-200 space-y-1 m-0">
                            <li>Always specify exact versions to ensure reproducibility</li>
                            <li>Use <code>spack spec</code> to preview what will be installed before actually installing</li>
                            <li>Install packages in <code>/scratch</code> if they're temporary (set <code>$SPACK_USER_CONFIG_PATH</code>)</li>
                            <li>Document your SPACK specs in your project README for reproducibility</li>
                        </ul>
                    </div>
                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900/50">
                        <h4 className="text-blue-700 dark:text-blue-400 m-0 mb-2 text-base">Common Issues</h4>
                        <ul className="list-disc pl-5 text-sm text-blue-900 dark:text-blue-200 space-y-1 m-0">
                            <li>If installation fails, check <code>spack debug report</code> for detailed logs</li>
                            <li>Use <code>spack clean</code> to remove build artifacts if disk space is low</li>
                            <li>For dependency conflicts, try <code>spack install --fresh</code> to rebuild</li>
                            <li>Check <code>spack find -ldf</code> for detailed package info including dependencies</li>
                        </ul>
                    </div>
                </div>

                <Alert variant="info" title="Learn More">
                    For complete SPACK documentation, visit <a href="https://spack.readthedocs.io/" target="_blank" rel="noreferrer" className="underline font-medium">spack.readthedocs.io</a>.
                    For Param Sanganak-specific questions, contact <a href="mailto:sanganaksupport@iitk.ac.in" className="underline font-medium">sanganaksupport@iitk.ac.in</a>.
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="lammps">
                <h2>LAMMPS (Molecular Dynamics)</h2>
                <p>
                    Large-scale Atomic/Molecular Massively Parallel Simulator (LAMMPS) is a classical molecular dynamics code.
                    Sample data is available at <code>/home/apps/Data/lammps</code>.
                </p>

                <h3>Running LAMMPS on CPU</h3>
                <CodeBlock
                    language="bash"
                    title="lammps_cpu.sh"
                    code={`#!/bin/bash
#SBATCH -N 4
#SBATCH --ntasks-per-node=48
#SBATCH --time=04:00:00
#SBATCH --job-name=lammps_job
#SBATCH --partition=medium

module load lammps/latest

# Run LAMMPS with 192 MPI processes
mpirun -np 192 lmp_mpi -in input.lammps`}
                />

                <h3>Running LAMMPS on GPU</h3>
                <CodeBlock
                    language="bash"
                    title="lammps_gpu.sh"
                    code={`#!/bin/bash
#SBATCH -N 2
#SBATCH --ntasks-per-node=4
#SBATCH --gres=gpu:2
#SBATCH --partition=gpu
#SBATCH --time=02:00:00

module load lammps/gpu

# Run with GPU acceleration
mpirun -np 8 lmp_gpu -sf gpu -pk gpu 2 -in input.lammps`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="gromacs">
                <h2>GROMACS (Molecular Dynamics)</h2>
                <p>
                    GROMACS is a versatile package for molecular dynamics simulations, primarily designed for biochemical molecules.
                </p>

                <h3>Job Submission Script</h3>
                <CodeBlock
                    language="bash"
                    title="gromacs_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 2
#SBATCH --ntasks-per-node=48
#SBATCH --time=06:00:00
#SBATCH --job-name=gromacs_md
#SBATCH --partition=medium

module load gromacs/2024

# Run GROMACS simulation
gmx_mpi mdrun -v -deffnm md_simulation -ntomp 1`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="wrf">
                <h2>WRF (Weather Research & Forecasting)</h2>
                <p>
                    The Weather Research and Forecasting (WRF) Model is used for atmospheric research and weather prediction.
                    Sample data available at <code>/home/apps/Data/WRF</code>.
                </p>

                <h3>Job Submission Script</h3>
                <CodeBlock
                    language="bash"
                    title="wrf_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 8
#SBATCH --ntasks-per-node=48
#SBATCH --time=12:00:00
#SBATCH --job-name=wrf_forecast
#SBATCH --partition=large

module load wrf/4.6

# Set up environment
export OMP_NUM_THREADS=1

# Run WRF
mpirun -np 384 ./wrf.exe`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="openfoam">
                <div className="flex items-center gap-2 mb-4">
                    <CloudRain className="text-blue-500" />
                    <h2 className="m-0">OpenFOAM (CFD)</h2>
                </div>
                <p>
                    Open Source Field Operation and Manipulation (OpenFOAM) is widely used for CFD simulations.
                    Example data is available at <code>/home/apps/Data/OpenFOAM</code>.
                </p>

                <h3>Job Submission Script</h3>
                <CodeBlock
                    language="bash"
                    title="openfoam_job.sh"
                    code={`#!/bin/bash
#SBATCH -N 50
#SBATCH --ntasks-per-node=40
#SBATCH --time=06:50:00
#SBATCH --job-name=openfoam_job
#SBATCH --partition=standard

module load gcc/13.2.0
module load openmpi/4.1.5

# Source OpenFOAM environment (check system installation path)
source /opt/openfoam/OpenFOAM-v2312/etc/bashrc

# Project Directory
cd /home/user/OpenFOAM_DATA/NSM

# Run Decomposition
decomposePar

# Run Parallel Job
time mpirun -np 2000 sonicFoam -parallel`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="namd">
                <div className="flex items-center gap-2 mb-4">
                    <FlaskConical className="text-emerald-500" />
                    <h2 className="m-0">NAMD (Molecular Dynamics)</h2>
                </div>
                <p>
                    NAMD scales well on both CPUs and GPUs. Below are templates for both.
                </p>

                <div className="grid lg:grid-cols-2 gap-6">
                    <div>
                        <div className="flex items-center gap-2 mb-2 font-semibold text-slate-700 dark:text-slate-200">
                            <Cpu size={18} /> CPU Only Script
                        </div>
                        <CodeBlock
                            language="bash"
                            code={`#!/bin/bash
#SBATCH -N 16
#SBATCH --ntasks-per-node=40
#SBATCH --partition=standard

module load namd/3.0/cpu

mpiexec.hydra -n $SLURM_NTASKS namd2 +ppn 19 ./stmv.namd`}
                        />
                    </div>
                    <div>
                        <div className="flex items-center gap-2 mb-2 font-semibold text-purple-700 dark:text-purple-400">
                            <Box size={18} /> GPU Accelerated Script
                        </div>
                        <CodeBlock
                            language="bash"
                            code={`#!/bin/bash
#SBATCH -N 5
#SBATCH --ntasks-per-node=40
#SBATCH --partition=gpu

module load namd/3.0/cuda

# NAMD on GPU typically uses 1 process per GPU
mpiexec.hydra -n $SLURM_NTASKS namd2 +idlepoll +devices 0,1 ./stmv.namd`}
                        />
                    </div>
                </div>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="ai-ml">
                <div className="flex items-center gap-3 mb-4">
                    <Brain className="text-pink-600 dark:text-pink-400" size={24} />
                    <h2 className="m-0">AI / Deep Learning</h2>
                </div>
                <p>
                    Param Sanganak supports deep learning frameworks like TensorFlow, PyTorch, and Keras. You can use pre-installed Conda environments or create your own custom environments.
                </p>

                <div className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6 my-6">
                    <h3 className="mt-0 text-slate-800 dark:text-slate-200">Default Conda Environment</h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4">
                        The default environment <code>conda-python/3.11</code> comes pre-loaded with optimized builds of popular data science and ML packages:
                    </p>
                    <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-y-2 gap-x-8 text-sm">
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">numpy</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">pandas</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-orange-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">scipy</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">scikit-learn</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">matplotlib</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">seaborn</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">tensorflow-gpu</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">pytorch</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-purple-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">keras</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">jupyterlab</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">opencv</span>
                        </div>
                        <div className="flex items-center gap-2">
                            <span className="w-2 h-2 rounded-full bg-green-500"></span>
                            <span className="font-mono text-slate-700 dark:text-slate-300">h5py</span>
                        </div>
                    </div>
                </div>

                <h3>Using Pre-installed TensorFlow</h3>
                <CodeBlock
                    language="bash"
                    title="Loading TensorFlow"
                    code={`# Load Conda Module
module load conda-python/3.11

# Verify TensorFlow can see GPUs
python -c "import tensorflow as tf; print(tf.config.list_physical_devices('GPU'))"`}
                />

                <h3>Creating Custom Conda Environment</h3>
                <p>You can create your own environment with specific Python packages:</p>
                <CodeBlock
                    language="bash"
                    title="Creating Conda Environment"
                    code={`# Load conda module
module load conda-python/3.11

# Create a new environment
conda create -n myenv python=3.11

# Activate the environment
source activate myenv

# Install packages (PyTorch 2.x with CUDA 12.x)
conda install pytorch torchvision torchaudio pytorch-cuda=12.1 -c pytorch -c nvidia

# Verify installation
python -c "import torch; print(torch.cuda.is_available())"`}
                />

                <h3>Using Virtual Environments (venv)</h3>
                <p>For lighter-weight Python environments without Conda:</p>
                <CodeBlock
                    language="bash"
                    title="Creating Virtual Environment"
                    code={`# Load Python module
module load python/3.11

# Create virtual environment
python3 -m venv myproject_env

# Activate environment
source myproject_env/bin/activate

# Install packages with pip
pip install numpy pandas scikit-learn

# Deactivate when done
deactivate`}
                />

                <h3>GPU Job Script for Deep Learning</h3>
                <CodeBlock
                    language="bash"
                    title="pytorch_gpu.sh"
                    code={`#!/bin/bash
#SBATCH -N 1
#SBATCH --ntasks-per-node=10
#SBATCH --gres=gpu:2          # Request 2 GPUs
#SBATCH --time=04:00:00
#SBATCH --partition=gpu
#SBATCH --job-name=pytorch_training

module load conda-python/3.11
source activate myenv

# Run your Python script
python train_model.py`}
                />

                <Alert variant="info" title="Popular ML/DL Packages Available">
                    <ul className="text-sm list-disc pl-5 m-0 space-y-1">
                        <li>TensorFlow (with GPU support)</li>
                        <li>PyTorch (with CUDA)</li>
                        <li>Keras</li>
                        <li>scikit-learn</li>
                        <li>NumPy, Pandas, Matplotlib</li>
                        <li>Jupyter notebooks (via conda)</li>
                    </ul>
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="quantum-chemistry">
                <div className="flex items-center gap-3 mb-4">
                    <Atom className="text-indigo-600 dark:text-indigo-400" size={24} />
                    <h2 className="m-0">Quantum Chemistry Applications</h2>
                </div>

                <p>
                    PARAM Sanganak provides several quantum chemistry packages for electronic structure calculations,
                    molecular modeling, and computational chemistry research.
                </p>

                <div className="grid md:grid-cols-2 gap-6 my-6">
                    <div className="p-4 bg-indigo-50 dark:bg-indigo-900/20 rounded-lg border border-indigo-200 dark:border-indigo-900/50">
                        <h3 className="text-indigo-700 dark:text-indigo-400 m-0 mb-2 text-base">NWChem</h3>
                        <p className="text-sm text-indigo-900 dark:text-indigo-200 mb-3">
                            Open source high-performance computational chemistry tool for large-scale molecular simulations.
                            Supports DFT, MP2, coupled-cluster methods.
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`module load nwchem/latest

# Job script example
#SBATCH -N 4
#SBATCH --ntasks-per-node=48
mpirun -np 192 nwchem input.nw > output.log`}
                        />
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-900/50">
                        <h3 className="text-purple-700 dark:text-purple-400 m-0 mb-2 text-base">CP2K</h3>
                        <p className="text-sm text-purple-900 dark:text-purple-200 mb-3">
                            Quantum chemistry and solid-state physics software package for atomistic simulations.
                            Excellent for DFT calculations and molecular dynamics.
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`module load cp2k/latest

# Run CP2K simulation
#SBATCH --partition=medium
mpirun -np 96 cp2k.popt input.inp`}
                        />
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900/50">
                        <h3 className="text-blue-700 dark:text-blue-400 m-0 mb-2 text-base">Quantum ESPRESSO</h3>
                        <p className="text-sm text-blue-900 dark:text-blue-200 mb-3">
                            Integrated suite for electronic-structure calculations and materials modeling.
                            Based on density-functional theory, plane waves, and pseudopotentials.
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`module load quantumespresso/latest

# Run pw.x (plane-wave DFT)
mpirun -np 192 pw.x -input input.in > output.out`}
                        />
                    </div>

                    <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-900/50">
                        <h3 className="text-teal-700 dark:text-teal-400 m-0 mb-2 text-base">ABINIT</h3>
                        <p className="text-sm text-teal-900 dark:text-teal-200 mb-3">
                            Suite for calculating properties of materials using DFT, DFPT, and many-body perturbation theory.
                            Supports ground state, response properties, and excited states.
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`module load abinit/latest

# Run ABINIT calculation
mpirun -np 48 abinit input.in > output.log`}
                        />
                    </div>
                </div>

                <Alert variant="tip" title="Pro Tips for Quantum Chemistry">
                    <ul className="list-disc pl-5 text-sm space-y-1 m-0">
                        <li>Use high-memory nodes (<code>--partition=hm</code>) for large basis set calculations</li>
                        <li>Benchmark small systems first to estimate computational requirements</li>
                        <li>Check module dependencies: <code>module show &lt;package&gt;</code></li>
                        <li>Consult package documentation for optimal parallelization strategies (MPI vs OpenMP vs hybrid)</li>
                    </ul>
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="bioinformatics">
                <div className="flex items-center gap-3 mb-4">
                    <Dna className="text-green-600 dark:text-green-400" size={24} />
                    <h2 className="m-0">Bioinformatics Applications</h2>
                </div>

                <p>
                    Comprehensive suite of bioinformatics tools for sequence analysis, genome assembly,
                    protein structure prediction, and comparative genomics.
                </p>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 my-6">
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg border border-green-200 dark:border-green-900/50">
                        <h4 className="text-green-700 dark:text-green-400 m-0 mb-2 text-sm font-bold">HMMER</h4>
                        <p className="text-xs text-green-900 dark:text-green-200 mb-2">
                            Profile hidden Markov models for protein sequence analysis. Search databases, build alignments.
                        </p>
                        <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded block">module load hmmer/latest</code>
                    </div>

                    <div className="p-4 bg-blue-50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-900/50">
                        <h4 className="text-blue-700 dark:text-blue-400 m-0 mb-2 text-sm font-bold">MUMmer</h4>
                        <p className="text-xs text-blue-900 dark:text-blue-200 mb-2">
                            Rapid alignment of complete genomes. Excellent for whole-genome comparisons and variant detection.
                        </p>
                        <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded block">module load mummer/latest</code>
                    </div>

                    <div className="p-4 bg-purple-50 dark:bg-purple-900/20 rounded-lg border border-purple-200 dark:border-purple-900/50">
                        <h4 className="text-purple-700 dark:text-purple-400 m-0 mb-2 text-sm font-bold">MEME Suite</h4>
                        <p className="text-xs text-purple-900 dark:text-purple-200 mb-2">
                            Motif-based sequence analysis tools. Discover and analyze sequence patterns in DNA, RNA, protein.
                        </p>
                        <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded block">module load meme/latest</code>
                    </div>

                    <div className="p-4 bg-orange-50 dark:bg-orange-900/20 rounded-lg border border-orange-200 dark:border-orange-900/50">
                        <h4 className="text-orange-700 dark:text-orange-400 m-0 mb-2 text-sm font-bold">mpiBLAST</h4>
                        <p className="text-xs text-orange-900 dark:text-orange-200 mb-2">
                            Parallel implementation of NCBI BLAST. Drastically reduces search time for large databases.
                        </p>
                        <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded block">module load mpiblast/latest</code>
                    </div>

                    <div className="p-4 bg-teal-50 dark:bg-teal-900/20 rounded-lg border border-teal-200 dark:border-teal-900/50">
                        <h4 className="text-teal-700 dark:text-teal-400 m-0 mb-2 text-sm font-bold">ClustalW</h4>
                        <p className="text-xs text-teal-900 dark:text-teal-200 mb-2">
                            Multiple sequence alignment for DNA or proteins. Widely used for phylogenetic analysis.
                        </p>
                        <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded block">module load clustalw/latest</code>
                    </div>

                    <div className="p-4 bg-pink-50 dark:bg-pink-900/20 rounded-lg border border-pink-200 dark:border-pink-900/50">
                        <h4 className="text-pink-700 dark:text-pink-400 m-0 mb-2 text-sm font-bold">SAMtools</h4>
                        <p className="text-xs text-pink-900 dark:text-pink-200 mb-2">
                            Reading/writing/editing/indexing/viewing SAM/BAM/CRAM format for sequence alignments.
                        </p>
                        <code className="text-xs bg-white dark:bg-slate-800 px-2 py-1 rounded block">module load samtools/latest</code>
                    </div>
                </div>

                <h3>Example: Running mpiBLAST at Scale</h3>
                <CodeBlock
                    language="bash"
                    code={`#!/bin/bash
#SBATCH -N 8
#SBATCH --ntasks-per-node=48
#SBATCH --partition=large
#SBATCH --time=04:00:00
#SBATCH --job-name=mpiblast_search

module load mpiblast/latest

# Run parallel BLAST search
mpirun -np 384 mpiblast -p blastn -i query.fasta -d nt -o results.txt`}
                />
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="local-install">
                <div className="flex items-center gap-3 mb-4">
                    <Download className="text-orange-600 dark:text-orange-400" size={24} />
                    <h2 className="m-0">Installing Software Locally</h2>
                </div>

                <p>
                    If you need software that isn't pre-installed, you can compile and install it in your home directory.
                    This guide demonstrates the process using HMMER as an example.
                </p>

                <Alert variant="warning" title="Before Installing">
                    Always check if the software is already available using <code>module avail</code> or contact support. Pre-installed modules are optimized for PARAM Sanganak's hardware.
                </Alert>

                <h3>Step-by-Step: Installing HMMER Locally</h3>

                <div className="space-y-6 my-6">
                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Step 1: Download Source Code</h4>
                        <CodeBlock
                            language="bash"
                            code={`# Create a directory for local software
mkdir -p ~/software/src
cd ~/software/src

# Download HMMER source
wget http://eddylab.org/software/hmmer/hmmer-3.3.2.tar.gz

# Extract the archive
tar -xzf hmmer-3.3.2.tar.gz
cd hmmer-3.3.2`}
                        />
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Step 2: Load Required Modules</h4>
                        <CodeBlock
                            language="bash"
                            code={`# Load compiler (GNU or Intel)
module load compiler/gcc/latest
# OR
module load compiler/intel/latest

# Check loaded modules
module list`}
                        />
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Step 3: Configure and Compile</h4>
                        <CodeBlock
                            language="bash"
                            code={`# Set installation directory in your home
PREFIX=$HOME/software/hmmer-3.3.2

# Configure with optimization flags
./configure --prefix=$PREFIX CFLAGS="-O3 -march=cascadelake"

# Compile (use multiple cores for faster compilation)
make -j 8

# Run tests (optional but recommended)
make check

# Install to PREFIX directory
make install`}
                        />
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Step 4: Update Your PATH</h4>
                        <p className="text-sm text-slate-700 dark:text-slate-300 mb-2">
                            Add the software to your PATH so you can run it from anywhere:
                        </p>
                        <CodeBlock
                            language="bash"
                            code={`# Add to ~/.bashrc for permanent access
echo 'export PATH=$HOME/software/hmmer-3.3.2/bin:$PATH' >> ~/.bashrc

# Reload bashrc
source ~/.bashrc

# Verify installation
hmmbuild --help
which hmmbuild  # Should show path in your home directory`}
                        />
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-slate-800 dark:text-slate-200 mb-2">Step 5: Use in Job Scripts</h4>
                        <CodeBlock
                            language="bash"
                            code={`#!/bin/bash
#SBATCH -N 1
#SBATCH --ntasks-per-node=48
#SBATCH --partition=small

# Add your local software to PATH
export PATH=$HOME/software/hmmer-3.3.2/bin:$PATH

# Run HMMER commands
hmmbuild profile.hmm alignment.sto
hmmsearch --cpu 48 profile.hmm database.fasta > results.txt`}
                        />
                    </div>
                </div>

                <h3>General Guidelines for Local Installation</h3>
                <div className="grid md:grid-cols-2 gap-4 my-4">
                    <div>
                        <h4 className="text-sm font-semibold text-emerald-700 dark:text-emerald-400 mb-2">Best Practices</h4>
                        <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
                            <li>Install software in <code>~/software/</code> directory</li>
                            <li>Keep source code separate from compiled binaries</li>
                            <li>Use <code>--prefix=$HOME/software/&lt;package&gt;</code> for configure</li>
                            <li>Enable optimization: <code>-O3 -march=cascadelake</code></li>
                            <li>Document installation steps for reproducibility</li>
                            <li>Run test suites (<code>make check</code>) when available</li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="text-sm font-semibold text-red-700 dark:text-red-400 mb-2">Common Pitfalls</h4>
                        <ul className="text-sm text-slate-700 dark:text-slate-300 space-y-1 list-disc pl-5">
                            <li>Don't install in <code>/tmp</code> - it gets wiped after logout</li>
                            <li>Avoid installing in <code>/scratch</code> - 60-day retention policy</li>
                            <li>Don't compile on login nodes - use <code>salloc</code> for compilation</li>
                            <li>Watch quota limits - check with <code>myquota</code></li>
                            <li>Module conflicts - unload conflicting modules before compiling</li>
                        </ul>
                    </div>
                </div>

                <Alert variant="info" title="Alternative: Using Conda/Pip for Python Packages">
                    For Python packages, use conda environments or pip with <code>--user</code> flag instead of manual compilation.
                    See the <a href="#ai-ml" className="underline">AI/ML section</a> above for details.
                </Alert>
            </section>

            <hr className="my-10 border-slate-200 dark:border-slate-800" />

            <section id="sample-programs" className="bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 rounded-lg p-6">
                <h2 className="mt-0">Sample Programs and Data</h2>
                <p>
                    PARAM Sanganak provides sample codes and datasets to help you get started quickly with various applications.
                </p>

                <h3>Sample Program Locations</h3>
                <div className="overflow-x-auto my-4">
                    <table className="w-full text-sm border-collapse border border-slate-200 dark:border-slate-700">
                        <thead className="bg-slate-100 dark:bg-slate-800">
                            <tr>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Application</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Sample Location</th>
                                <th className="p-3 border border-slate-200 dark:border-slate-700 text-left text-slate-900 dark:text-slate-100">Description</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">General Samples</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">/home/apps/cdac/samples/</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">MPI, OpenMP, CUDA examples</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">LAMMPS</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">/home/apps/Data/lammps/</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Molecular dynamics input files</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">WRF</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">/home/apps/Data/WRF/</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">Weather forecast datasets</td>
                            </tr>
                            <tr>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-semibold">OpenFOAM</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700 font-mono text-xs">/home/apps/Data/OpenFOAM/</td>
                                <td className="p-3 border border-slate-200 dark:border-slate-700">CFD case files</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

                <h3>Accessing Sample Programs</h3>
                <CodeBlock
                    language="bash"
                    code={`# Browse available samples
ls -lh /home/apps/cdac/samples/

# Copy a sample to your home directory
cp -r /home/apps/cdac/samples/mpi_hello ~/my_tests/

# Copy LAMMPS example data
cp -r /home/apps/Data/lammps/example1 ~/lammps_test/

# List available data directories
ls /home/apps/Data/`}
                />

                <Alert variant="success" title="Pro Tip">
                    Always copy sample programs to your own directory before modifying them. This preserves the original examples and allows you to experiment freely.
                </Alert>
            </section>

            </div>

            {/* Page Navigation */}
            <PageNavigation
                previous={{ to: '/running-jobs', label: 'Running Jobs' }}
                next={{ to: '/debugging', label: 'Debugging & Troubleshooting' }}
            />
        </div>
    );
}
