import React, { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/Authcontext";
import { loginUserService } from "../../services/userServices";

const LoginPage = () => {
  const { login } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async (data) => {
    try {
      const response = await loginUserService(data);
      if (response.status === 200 && response.data.token) {
        login(response.data.token);
        navigate("/dashboard");
      }
    } catch (error) {
      console.error("Login failed:", error);
    }
  };

  return (
    <main className="flex justify-center items-center mt-[10px]">
      <form className="flex flex-col justify-center items-center " onSubmit={handleSubmit(onSubmit)}>
        <img
          className="mb-4"
          src="https://img.icons8.com/officel/80/logo.png"
          alt="Pear Logo"
          width={72}
          height={57}
        />
        <h1 className="h3 mb-3 fw-normal text-[25px]">Please sign in</h1>
        <div className="form-floating ">
          <input
            type="email"
            className="form-control rounded-[8px] border-[1px] border-black px-[10px]"
            id="floatingInput"
            placeholder="name@example.com"
            {...register("email", { required: "Email is required" })}
          />
          {errors.email && <span>{errors.email.message}</span>}
        </div>
        <div className="form-floating">
          <input
            type="password"
            className="form-control rounded-[8px] border-[1px] border-black px-[10px]"
            id="floatingPassword"
            placeholder="Password"
            {...register("password", { required: "Password is required" })}
          />
          {errors.password && <span>{errors.password.message}</span>}
        </div>

        <button className="btn bg-[#96C9F4] rounded-[8px] btn-primary mt-[15px] w-full py-2" type="submit">
          Sign in
        </button>
      </form>
    </main>
  );
};

export default LoginPage;
