import { Link, useNavigate } from "react-router-dom";
import { Container, Logo, LogoutBtn } from "../index";
import React from "react";
import { useSelector } from "react-redux";

const Header = () => {
  const authStatus = useSelector((state) => state.auth.status);
  // const navigate = useNavigate();
  const navigate = () => {};

  const navItems = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "All Blogs",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "My Blogs",
      slug: "/my-blogs",
      active: authStatus,
    },
    {
      name: "Add Blog",
      slug: "/add-blog",
      active: authStatus,
    },
    {
      name: "Contact Us",
      slug: "/contact-us",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SignUp",
      slug: "/sign-up",
      active: !authStatus,
    },
  ];

  return (
    <header className="w-full bg-gray-500 text-white">
      <Container>
        <nav className="flex items-center text-xl">
          <div className="mr-4">
            <Logo width="70px" />
          </div>

          <ul className="flex ml-auto">
            {navItems.map((item) =>
              item.active ? (
                <li key={item.slug}>
                  <button
                    className="inline-bock px-6 py-2 duration-300 rounded-full hover:bg-blue-500 '"
                    onClick={navigate(item.slug)}
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
};

export default Header;
