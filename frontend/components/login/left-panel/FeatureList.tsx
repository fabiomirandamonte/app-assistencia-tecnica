import { Users, Package, ClipboardList, BarChart3 } from "lucide-react";

import FeatureItem from "./FeatureItem";

export default function FeatureList() {
  return (
    <div className="mt-4 space-y-2">

      <FeatureItem
        icon={<Users size={24} />}
        title="Gestão de Clientes"
        description="Cadastre e organize seus clientes."
      />

      <FeatureItem
        icon={<Package size={24} />}
        title="Controle de Equipamentos"
        description="Gerencie equipamentos e histórico."
      />

      <FeatureItem
        icon={<ClipboardList size={24} />}
        title="Ordens de Serviço"
        description="Acompanhe cada etapa do atendimento."
      />

      <FeatureItem
        icon={<BarChart3 size={24} />}
        title="Relatórios Inteligentes"
        description="Visualize indicadores para apoiar decisões."
      />

    </div>
  );
}