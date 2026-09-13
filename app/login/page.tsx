
;
import LoginBackground from "@/app/components/login/LoginBackground";
import LoginContainer from "@/app/components/login/LoginContainer";

export default function LoginPage() {
  return (
    <main className="relative flex min-h-screen items-center justify-center overflow-hidden bg-[#0B101D] px-5 py-10">
      {/* Background */}

      <LoginBackground />

      {/* Login Container */}
      <LoginContainer />
    </main>
  );
}
