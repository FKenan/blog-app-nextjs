"use client";
import { AppBar, Box, Button, Toolbar } from "@mui/material";
import { blue } from "@mui/material/colors";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import React from "react";

// Link next üzerinden gelen link React-router üzerinden değil ondan href kullandık.
export default function Navigation() {
  const pathname = usePathname(); // kullanabilmek için "use client" kullandık.
  return (
    <AppBar position="static" sx={{ backgroundColor: blue[500] }}>
      <Toolbar>
        <Box sx={{ display: "flex", alignItems: "center" }}>
          <Image src="vercel.svg" height={20} width={20} alt="" />
          <Button
            component={Link}
            href="/"
            color={pathname === "/" ? "warning" : "inherit"}
          >
            Home
          </Button>
          <Button
            component={Link}
            href="/blogs"
            color={pathname === "/blogs" ? "warning" : "inherit"}
          >
            Blogs
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
