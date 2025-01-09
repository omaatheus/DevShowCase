import { Github, Linkedin, Twitter, Facebook, Plus, Instagram } from "lucide-react"
import Button from "../landing-page/ui/button"

export default function UserCard(){

    const icones = [
        Github, Linkedin, Twitter, Instagram, Plus
    ]

    return (
        <div className="w-[348px] flex flex-col gap-5 items-center p-5 border border-white border-opacity-10 bg-[#E3E9F0] rounded-3xl text-black">
            <div className="size-48">
                <img 
                src="https://github.com/omaatheus.png" 
                alt="" 
                className="rounded-full object-cover w-full h-full" />
            </div>
            <div className="flex flex-col gap-2 w-full ">
                <div className="flex items-center gap-2">
                    <h3 className="text-3xl font-bold min-w-0 overflow-hidden" >Matheus Dev</h3>
                </div>
                <p className="opacity-40">"Eu faço produto para a Internet"</p>
            </div>
            <div className="flex flex-col gap-2 w-full">
                <span className="uppercase text-xs font-medium">Links</span>
                <div className="flex gap-3">
                    {
                        icones.map((Icon, i) => (
                            <button key={i} className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#FFFFFF]"><Icon />  </button>
                        ))
                    }
                </div>
                
            </div>
            <div className="flex flex-col gap-3 w-full h-[172px]">
                    <div className="w-full flex flex-col items-center gap-3">
                        <Button className="w-full">
                            Compre Agora
                        </Button>
                        <button className="p-3 rounded-xl bg-[#F5F7FA] hover:bg-[#FFFFFF]">
                            <Plus />
                        </button>
                    </div>
                </div>
        </div>
    )
}