import Image from "next/image";
import { FaUser, FaChartBar, FaClipboardList, FaList } from "react-icons/fa";

export default function Sidebar() {
    return (
        <div className="fixed left-0 top-0 w-[40vh] bg-primmary h-screen flex items-center p-5 py-7 gap-4">
            <div className="w-full h-full flex flex-col items-center gap-4">
                <Image src="/me.jpeg" width={150} height={150} className="rounded-xl mt-[5em]" alt="Sidebar Image" />
                    <h2 className="text-2xl font-bold mb-2 text-gray-300">Hendra Sutrisno</h2>
                <div className="w-full min-h-screen p-5 flex flex-col gap-3 ">
                    <div className="flex justify-between is-active glass-item w-full rounded-sm p-4 px-5">
                        About Me
                        <FaUser size={18} />
                    </div>
                    <div className="flex justify-between is-active glass-item w-full rounded-sm p-4 px-5">
                        Experience
                        <FaList size={18} />
                    </div>
                    <div className="flex justify-between is-active glass-item w-full rounded-sm p-4 px-5">
                        Projects
                    </div>
                </div>
            </div>
            <div className="w-[2px] bg-gray-300/40 h-9/10 rounded-full items-center">

            </div>
        </div>
    );
}