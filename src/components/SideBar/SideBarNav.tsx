import { Stack } from "@chakra-ui/react";
import React from "react";
import { RiDashboardLine, RiContactsLine, RiInputMethodLine, RiGitMergeLine } from "react-icons/ri";
import { NavLink } from "./NavLink";
import { NavSection } from "./NavSection";

export function SideBarNav(){
  return (
    <Stack spacing="12" align="flex-start">
    <NavSection title="GERAL">
      <NavLink href='/dashboard' title="Dashboard" icon={RiDashboardLine} />
      <NavLink href='/users' title="Usuários" icon={RiContactsLine} />
    </NavSection>
    <NavSection title="AUTOMAÇÃO">
      <NavLink href='/forms' title="Formulários" icon={RiInputMethodLine} />
      <NavLink href='/automation' title="Automação" icon={RiGitMergeLine} />
    </NavSection>
  </Stack>
  );
}