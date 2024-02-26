"use client";
import { useTheme } from "next-themes";
import React, { useEffect, useState } from "react";

import { Moon, Sun } from "lucide-react";
import { Button } from "../ui/button";

function ModeToggle() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mount, setMount] = useState(false);

  useEffect(() => {
    setMount(true);
  }, []);

  return mount && resolvedTheme === "dark" ? (
    <Button size={"icon"} variant={"ghost"} onClick={() => setTheme("light")}>
      <Sun />
    </Button>
  ) : (
    <Button size={"icon"} variant={"ghost"} onClick={() => setTheme("dark")}>
      <Moon />
    </Button>
  );
}

export default ModeToggle;
