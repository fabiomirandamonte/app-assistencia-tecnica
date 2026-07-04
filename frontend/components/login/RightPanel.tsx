import TopActions from "./TopActions";
import LoginCard from "./LoginCard";

export default function RightPanel() {
  return (
    <section className="relative flex w-[45%] bg-white">

      <TopActions />

      <div className="flex w-full items-center justify-center px-20">

        <LoginCard />

      </div>

    </section>
  );
}