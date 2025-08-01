"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { lngs } from "@/constants";
import { Languages } from "lucide-react";
import { useParams } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

export function LngDropdown() {
  const [position, setPosition] = React.useState("bottom");
  const { lng } = useParams();

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost">
          <Languages />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="flex flex-col gap-px" align="end">
        {lngs.map((item) => (
          <Link href={`/${item.value}`} key={item.value}>
            <DropdownMenuItem
              className={cn(
                "cursor-pointer",
                item.value === lng && "bg-secondary",
              )}
            >
              {item.label}
            </DropdownMenuItem>
          </Link>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
