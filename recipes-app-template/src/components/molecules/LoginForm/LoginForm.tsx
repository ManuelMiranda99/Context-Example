import Button from "../../atoms/Button/Button";
import Input from "../../atoms/Input/Input";

const LoginForm = () => {
  return (
    <div className="flex items-center justify-center min-h-full px-4 py-12 sm:px-6 lg:px-8">
      <div className="w-full max-w-md space-y-8">
        <h2 className="mt-6 text-3xl font-extrabold text-center text-gray-900">
          Login
        </h2>
        <form action="#" className="mt-8 space-y-6">
          <div className="-space-y-px rounded-md shadow-sm">
            <Input placeholder="Username" type="text" />
            <Input placeholder="Password" type="password" position="BOTTOM" />
          </div>

          <div>
            <Button text="Login" onClick={() => {}} />
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
