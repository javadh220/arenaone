import { useState } from "react";

import LoginPage from "./pages/loginpage";
import CreateAccount from "./pages/createaccount";
import VerifyEmail from "./pages/verifyemail";
import ChoosePlan from "./pages/chooseplan";
import PaymentDetails from "./pages/paymentdetails";
import Dashboard from "./pages/dashboard";
import ChooseGame from "./pages/choosegame";

type Screen =
  | "login"
  | "createAccount"
  | "verifyEmail"
  | "choosePlan"
  | "payment"
  | "dashboard"
  | "chooseGame";

type Plan = "free" | "competitive" | "elite" | null;

export default function App() {
  const [screen, setScreen] = useState<Screen>("login");
  const [selectedPlan, setSelectedPlan] = useState<Plan>(null);

  /* ================= LOGIN ================= */

  if (screen === "login") {
    return (
      <LoginPage
        onLogin={() => setScreen("dashboard")}
        onCreateAccount={() => setScreen("createAccount")}
      />
    );
  }

  /* ================= CREATE ACCOUNT ================= */

  if (screen === "createAccount") {
    return (
      <CreateAccount
        onContinue={() => setScreen("verifyEmail")}
      />
    );
  }

  /* ================= VERIFY EMAIL ================= */

  if (screen === "verifyEmail") {
    return (
      <VerifyEmail
        onVerified={() => setScreen("choosePlan")}
      />
    );
  }

  /* ================= CHOOSE PLAN ================= */

  if (screen === "choosePlan") {
    return (
      <ChoosePlan
        onFree={() => {
          setSelectedPlan("free");
          setScreen("dashboard");
        }}
        onCompetitive={() => {
          setSelectedPlan("competitive");
          setScreen("payment");
        }}
        onElite={() => {
          setSelectedPlan("elite");
          setScreen("payment");
        }}
      />
    );
  }

  /* ================= PAYMENT ================= */

  if (screen === "payment") {
    if (selectedPlan !== "competitive" && selectedPlan !== "elite") {
      setScreen("choosePlan");
      return null;
    }

    return (
      <PaymentDetails
        planName={
          selectedPlan === "elite" ? "Elite" : "Competitive"
        }
        price={
          selectedPlan === "elite" ? "R249" : "R149"
        }
        onConfirmPayment={() => setScreen("dashboard")}
      />
    );
  }

  /* ================= DASHBOARD ================= */

  if (screen === "dashboard") {
    return (
      <Dashboard
        denar={1240}
        onPlay={() => setScreen("chooseGame")}
        onOpenDenar={() => {}}
      />
    );
  }

  /* ================= CHOOSE GAME ================= */

  if (screen === "chooseGame") {
    return (
      <ChooseGame
        onBack={() => setScreen("dashboard")}
      />
    );
  }

  return null;
}