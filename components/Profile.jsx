'use client';

import { useState, useEffect } from "react";
import { useSession } from "next-auth/react";
import { usePathname, useRouter } from "next/navigation";

const Profile = () => {
  const { data: session } = useSession();
  const router = useRouter();

  useEffect(() => {
    const sessionCheck = () => {
      const user = session?.user.id;
      console.log(user)
      if(!user){
        router.push('/')
      }
    }
    sessionCheck();
  }, []);




  return (
    <div>Profile</div>
  )
}

export default Profile