import StatsItem from "./StatsItem";

export default function StatsSection(){
    return (
        <section
            className="
                mt-14
                rounded-3xl
                bg-white/10
                backdrop-blur-sm
                p-8
            "
        >
            <div className="grid grid-cols-4 gap-60">
                <StatsItem
                    value="+1.250"
                    label="Clientes"
                />

                <StatsItem
                    value="+3.500"
                    label="Equipamentos"
                />

                <StatsItem
                    value="+2.800"
                    label="Ordens"
                />

                <StatsItem
                    value="+98%"
                    label="Satisfação"
                />
            </div>
        </section>
    );
}