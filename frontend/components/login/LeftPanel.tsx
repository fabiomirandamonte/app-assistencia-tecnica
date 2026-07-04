import Image from "next/image";

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
            <div className="absolute inset-0 bg-blue-950/70" />
        </section>
    )
}