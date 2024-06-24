import { CardWrapper } from "@/components/auth/card-wrapper";

export const LoginForm = () => {
  return (
    <CardWrapper
      headerLabel="Sign in"
      backButtonLabel="Dont have an account?"
      backButtonHref="/"
      showSocial
    >
      Login Form
    </CardWrapper>
  );
};
