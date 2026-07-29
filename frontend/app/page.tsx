import LeftPanel from "../components/login/left-panel/index"
import RightPanel from "../components/login/right-panel/index"


export default function Home() {
  return (
    <main className="flex h-screen">
      <LeftPanel />
      <RightPanel />
    </main>
  );
}