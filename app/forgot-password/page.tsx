import { ForgotPassword } from "components/ForgotPassword";

export default function Page() {
  return (
    <div className="p-5">
      <div className="flex m-auto mt-16 flex-col gap-4 rounded-xl shadow-md bg-white md:w-1/3 px-5 py-10">
        <h1 className="text-2xl text-cyan-900 font-semibold mb-5">
          Recuperar Contraseña
        </h1>
        <h4 className="text-cyan-800 text-sm">
          Ingresá tu email para poder recupear tu contraseña
        </h4>
        <ForgotPassword />
      </div>
    </div>
  );
}
