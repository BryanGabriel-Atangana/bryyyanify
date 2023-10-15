"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { signIn, signOut, useSession, getProviders } from "next-auth/react";
import { Borel } from "next/font/google";

const borel = Borel({ subsets: ["latin"], weight: "400" });

const Nav = () => {
  const { data: session } = useSession();

  const [providers, setProviders] = useState(null);
  const [toggleDropDown, setToggleDropDown] = useState(false);

  useEffect(() => {
    const setUpProviders = async () => {
      const response = await getProviders();
      setProviders(response);
    };
    setUpProviders();
  }, []);

  return (
    <nav className="flex-between w-full pt-6 mb-10">
      <Link href="/" className="flex-center">
        {/* <Image
          src="../assets/images/logo.svg"
          alt="logo"
          width={30}
          height={30}
          className="object-contain"
        /> */}
        <p
          className={borel.className}
          style={{ fontSize: "1.5rem", alignSelf: "center" }}
        >
          Bryyyanify
        </p>
      </Link>
      {session?.user ? (
        <div className="sm:flex hidden gap-3">
          <Link href="/create-prompt" className="black_btn">
            <button>Créer</button>
          </Link>
          <Link href="">
            <button className="outline_btn" onClick={signOut}>
              Déconnexion
            </button>
          </Link>
          <Link href="/profile">
            <Image
              src={session?.user.image}
              alt="user"
              width={35}
              height={35}
              className="rounded-full"
            />
          </Link>
        </div>
      ) : (
        <div>
          <>
            {providers &&
              Object.values(providers).map((provider) => (
                <button
                  type="button"
                  key={provider.name}
                  onClick={() => signIn(provider.id)}
                  className="black_btn"
                >
                  Connexion
                </button>
              ))}
          </>
        </div>
      )}
      {/* Navigation Mobile  */}
      <div className="sm:hidden flex relative">
        {session?.user ? (
          <div className="flex">
            <Image
              src={session?.user.image}
              width={35}
              height={35}
              className="rounded-full"
              alt="profiler"
              onClick={() => setToggleDropDown((prev) => !prev)}
            />
            {toggleDropDown && (
              <div className="dropdown">
                <Link
                  href="/profile"
                  className="dropdown_item"
                  onClick={() => setToggleDropDown(false)}
                >
                  Mon Profil
                </Link>
                <Link
                  href="/create-prompt"
                  className="dropdown_item"
                  onClick={() => setToggleDropDown(false)}
                >
                  Créer
                </Link>
                <button
                  type="button"
                  className="black_btn w-full"
                  onClick={() => {
                    setToggleDropDown(false);
                    signOut(false);
                  }}
                >
                  Déconnexion
                </button>
              </div>
            )}
          </div>
        ) : (
          <div>
            <>
              {providers &&
                Object.values(providers).map((provider) => (
                  <button
                    type="button"
                    key={provider.name}
                    onClick={() => signIn(provider.id)}
                    className="black_btn"
                  >
                    Connexion
                  </button>
                ))}
            </>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Nav;
