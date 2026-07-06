import Image from "next/image";
import LeftHeader from "./LeftHeader";

export default function LeftPanel(){
    return (
        <section className="relativce w-[55%]">
            <Image 
                src="/images/fundo02.png" 
                alt="Background" 
                fill 
                priority 
                className="object-cover object-right"
            />
            <div className="absolute inset-0 flex flex-col justify-between p-12">
                <LeftHeader />
            </div>
        </section>
    )
}