import { EmailField } from "./ui/EmailField";
import { Button } from "./ui/Button";

export const ForgotPassword = () => {
  return (
    <form className="flex flex-col gap-3">
      <EmailField id="email" label="Correo eléctronico" />

      <div className="mt-3 w-full">
        <Button>Enviar</Button>
      </div>
    </form>
  );
};
