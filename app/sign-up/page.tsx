import { SignUp } from "components/SignUp";

export default function Page() {
  return (
    <div className="p-5">
      <div className="flex m-auto mt-16 flex-col gap-4 rounded-xl shadow-md bg-white md:w-1/3 px-5 py-10">
        <h1 className="text-2xl text-cyan-900 font-semibold mb-5">
          Creá tu cuenta
        </h1>
        <h4 className="text-cyan-800 text-sm">
          Ingresá los datos para crear tu cuenta
        </h4>
        <SignUp />
      </div>
    </div>
  );
}
