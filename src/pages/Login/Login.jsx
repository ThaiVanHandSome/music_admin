import { Button, Input, Spinner } from "@nextui-org/react";
import { useState } from "react";
import emailValidation from "~/utils/emailValidation";
import {authenticate} from '~/services/ApiServices/AuthService';
import routes from "~/config/routes";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isEmailInvalid, setIsEmailInvalid] = useState(false);
  const [isPasswordInvalid, setIsPasswordInvalid] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    let check = true;
    if(email.length === 0 || !emailValidation(email)) {
      setIsEmailInvalid(true);
      check = false;
    }
    if(password.length === 0) {
      setIsPasswordInvalid(true);
      check = false;
    }
    if(!check) return;
    setIsLoading(true);
    const data = {
      email,
      password,
      role: "ADMIN"
    };
    const res = await authenticate(data);
    setIsLoading(false);
    if(res.error) {
      alert(res.message);
    }
    localStorage.setItem("accessToken", res.accessToken);
    if(res.success) {
      window.location.href = routes.home;
    }
  }

  return (
    <section className="w-100 h-[100vh]">
      <div className="w-full h-full p-20 flex items-center">
      <div className="w-1/2">
        <img title="cisnw_logo" src={require("~/assets/images/logo/cisnw_logo.jpg")}/>
      </div>
      <div className="flex-1 p-12 box rounded-3xl">
      <form onSubmit={(e) => handleSubmit(e)}>
        <h1 className="text-6xl text-bold mb-6 text-center text-orange-600">Login</h1>
        <Input
          value={email}
          type="email"
          label="Email"
          className="w-100 mb-3"
          isInvalid={isEmailInvalid}
          errorMessage={isEmailInvalid && "Please enter a valid email"}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Input
          value={password}
          type="password"
          label="Password"
          className="w-100 mb-3"
          isInvalid={isPasswordInvalid}
          errorMessage={isPasswordInvalid && "Please enter a password"}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button className="w-full" type="submit" color="warning" style={{backgroundColor: "#0052F9", color: "#fff"}}>
            Login
        </Button>
      </form>
      </div>
      </div>
      {isLoading && (
        <div className="absolute top-0 w-full h-full z-20" style={{backgroundColor: "rgba(0, 0, 0, 0.1)"}}>
          <Spinner color="warning" className="absolute top-1/2 left-1/2 z-30"/>
        </div>
      )}
    </section>
  );
}

export default Login;
