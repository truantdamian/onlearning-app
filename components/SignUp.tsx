import { Button } from "./ui/Button";
import { EmailField } from "./ui/EmailField";
import { PasswordField } from "./ui/PasswordField";
import { TextField } from "./ui/TextField";

export const SignUp = () => {
  return (
    <form className="flex flex-col gap-3">
      <TextField id="name" label="Nombre" />
      <EmailField id="email" label="Correo eléctronico" />
      <PasswordField id="password" label="Contraseña" />
      <div className="mt-3 w-full">
        <Button>Registrarme</Button>
      </div>
    </form>
  );
};
