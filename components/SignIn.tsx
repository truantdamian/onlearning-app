import { FORGOT_PASSWORD } from "constants/routes";
import { Button } from "./ui/Button";
import { PasswordField } from "./ui/PasswordField";
import { EmailField } from "./ui/EmailField";
import Link from "next/link";

export const SignIn = () => {
  return (
    <form className="flex flex-col gap-3">
      <EmailField id="email" label="Correo eléctronico" />
      <PasswordField id="password" label="Contraseña" />
      <div className="self-end pr-1">
        <Link
          className="underline text-cyan-700 text-sm"
          href={FORGOT_PASSWORD}
        >
          Olvide mi contraseña
        </Link>
      </div>
      <div className="mt-3 w-full">
        <Button>Ingresar</Button>
      </div>
    </form>
  );
};
