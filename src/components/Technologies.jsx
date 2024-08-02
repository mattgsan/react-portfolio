import { SiAdobephotoshop } from "react-icons/si";
import { SiAdobepremierepro } from "react-icons/si";
import { SiAdobeillustrator } from "react-icons/si";
import { SiMicrosoftexcel } from "react-icons/si";
import { SiMicrosoftword } from "react-icons/si";
import { FaPython } from "react-icons/fa";


const Technologies = () => {
  return (
    <div className="border-b border-neutral-800 pb-24">
        <h1 className="my-20 text-center text-4xl">Technologies</h1>
        <div className="flex flex-wrap items-center justify-center gap-4">
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiAdobephotoshop style={{ color: '#4FCCFE' }} className="text-7xl" />  
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiAdobepremierepro style={{ color: '#E298F2' }} className="text-7xl" />  
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiAdobeillustrator style={{ color: '#D98825' }} className="text-7xl" />  
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMicrosoftexcel style={{ color: '#217346' }} className="text-7xl" />  
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <SiMicrosoftword style={{ color: '#2B579A' }} className="text-7xl" />  
            </div>
            <div className="rounded-2xl border-4 border-neutral-800 p-4">
              <FaPython style={{ color: '#FFDE57' }} className="text-7xl" />  
            </div>
        </div>
    </div>
  );
};

export default Technologies;