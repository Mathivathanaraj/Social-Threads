import {
  ClerkProvider,
  OrganizationSwitcher,
  SignOutButton,
  SignedIn,
} from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

function Topbar() {
  const isUserLoggenIn = true;
  return (
    <nav className="topbar">
      <Link href="/" className="flex items-center gap-4">
        <Image src="/logo.svg" alt="logo" width={28} height={28} />
        <p className="text-heading3-bold text-light-1 max-xs:hidden">Threads</p>
      </Link>
      <div className="flex items-center gap-1">
        <div className="block md:hidden">
          <ClerkProvider>
            <SignedIn>
              <SignOutButton>
                <div className="flex cursor-pointer">
                  <Image
                    src="/assets/logut.svg"
                    alt="logout"
                    width={28}
                    height={24}
                  />
                </div>
              </SignOutButton>
            </SignedIn>
         
        
          <OrganizationSwitcher
            appearance={{
              elements: {
                organizationSwitcherTrigger: "py-2 px-4",
              },
            }}
          />
        </ClerkProvider>
      </div>
      </div>
    </nav>
  );
}

export default Topbar;
