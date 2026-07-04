import LeftPanel from "@/components/login/LeftPanel";
import RightPanel from "@/components/login/RightPanel";

export default function Home() {
  return (
    <main className="flex h-screen w-screen overflow-hidden">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}