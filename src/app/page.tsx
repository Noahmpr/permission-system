// page.tsx
import { Button } from "@/components/ui/button";
import { basehasPermission } from "../components/permission-system/auth-abac";
import { hasPermission } from "../components/permission-system/auth-rbac";

type Role = "admin" | "moderator" | "user";
export type User = { roles: Role[]; id: string; blockedBy: string | null }; // Added `blockedBy`
type Users = { blockedBy: string[]; roles: Role[]; id: string }

export default function Home() {
  const user: User = { id: "1", roles: ["admin"], blockedBy: null }; // Added `blockedBy` property
  const users: Users = { blockedBy: ["2"], id: "1", roles: ["admin"] }

  const canCreateComment = hasPermission(user, "delete:comments");
  console.log("delete:comments", canCreateComment);

  const basecanCreateComment = basehasPermission(users, "todos", "view")
  console.log("delete:comments", basecanCreateComment);

  return (
    <div className="w-full flex items-center justify-center mt-44">
      <Button className="w-32">Click me</Button>
    </div>
  );
}
