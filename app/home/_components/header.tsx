"use client";
import { User } from "lucide-react";
// import { useRouter } from "next/navigation";

export default function Header() {
  //   const router = useRouter();

  return (
    <div className="flex pt-12 pb-2">
      <p className="text-logo text-primary">Petogram</p>
      <button className="ml-auto">
        <User size={24} />
      </button>
    </div>
  );
}
