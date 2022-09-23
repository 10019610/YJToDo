import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import LoginForm from "../components/login/login-form";
import { getSession } from "next-auth/react";

function LoginPage() {
  const [isLoading, setIsLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    getSession().then((session) => {
      if (session) {
        router.replace("/");
      } else {
        setIsLoading(false);
      }
    });
  }, [router]);

  if (isLoading) {
    return <p>Loading....</p>;
  }

  return <LoginForm />;
}

export default LoginPage;
