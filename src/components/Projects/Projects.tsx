import SpotlightCard from "../../blocks/Components/SpotlightCard/SpotlightCard";
import SettingsSuggestOutlinedIcon from '@mui/icons-material/SettingsSuggestOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import TerminalOutlinedIcon from '@mui/icons-material/TerminalOutlined';
import CrueltyFreeOutlinedIcon from '@mui/icons-material/CrueltyFreeOutlined';
import PsychologyOutlinedIcon from '@mui/icons-material/PsychologyOutlined';
import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AutoAwesomeOutlinedIcon from '@mui/icons-material/AutoAwesomeOutlined';
import KeyOutlinedIcon from '@mui/icons-material/KeyOutlined';
import PlayCircleOutlinedIcon from '@mui/icons-material/PlayCircleOutlined';
import { useScrollReveal } from "../../hooks/useScrollReveal";
import { Link } from "react-router-dom";

const Projects = () => {
    const sectionRef = useScrollReveal<HTMLElement>();

    const projectsProps = [
        {
            title: (
                <>
                    <SettingsSuggestOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    OpenPhys
                </>
            ),
            description: "A high-performance physics engine written in Rust.",
        },
        {
            title: (
                <Link to="/case-study/node-social" className="hover:underline flex items-center justify-center">
                    <GroupsOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Node Social
                </Link>
            ),
            description: "A user-first social media platform aiming to bring back digital freedom.",
        },
        {
            title: (
                <>
                    <TerminalOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    GachaTerm
                </>),
            description: "A terminal-based gacha game engine written in Rust.",
        },
        {
            title: (
                <>
                    <PsychologyOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Recall Engine
                </>
            ),
            description: "A self-hosted and fully local, API-agnostic LLM memory middleware written in Golang.",
        },
        {
            title: (
                <>
                    <CrueltyFreeOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    easy-now-bunny
                </>
            ),
            description: "An unofficial Bunny.net (CDN) SDK for Golang.",
        },
        {
            title: (
                <>
                    <FileDownloadOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    Downshit
                </>
            ),
            description: "A simple CLI HTTP downloader program written in Rust. Aims to be a replacement for aria2c.",
        },
        {
            title: (
                <>
                    <PlayCircleOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    AV1Studio
                </>
            ),
            description: "An elegant Av1an wrapper GUI written in Rust.",
        },
        {
            title: (
                <>
                    <KeyOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    hashc
                </>
            ),
            description: "A simple and fast hash comparison tool.",
        },
        {
            title: (
                <>
                    <AutoAwesomeOutlinedIcon sx={{ verticalAlign: 'middle', mr: 1 }} />
                    OpenOX
                </>
            ),
            description: "A FOS neural network written in Rust.",
        }
    ];

    return (
        <section
            ref={sectionRef}
            id="projects"
            className="w-full max-w-5xl mx-auto mt-32 mb-20 px-4 sm:px-8"
        >
            <h2 className="text-4xl font-bold text-white mb-12 text-center drop-shadow">
                Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {projectsProps.map((project, idx) => (
                    <SpotlightCard
                        key={idx}
                        className="custom-spotlight-card bg-transparent backdrop-blur-md flex flex-col items-center justify-between h-full py-6"
                        spotlightColor="rgba(200, 201, 204, 0.2)"
                    >
                        <h2 className="text-gray-350 text-2xl w-full text-center mb-4">{project.title}</h2>
                        <div className="flex-1 flex items-center w-full">
                            <p className="text-gray-500 text-center w-full">{project.description}</p>
                        </div>
                    </SpotlightCard>
                ))}
            </div>
            <div className="text-center mt-10 text-gray-500">
                <span>
                    *Some of these projects are not open-source.
                </span>
            </div>
        </section>
    );
};

export default Projects;