import LeftPanel from "@/components/login/left-panel";
import RightPanel from "@/components/login/right-panel";

export default function Home() {
  return (
    <main className="flex h-screen">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}