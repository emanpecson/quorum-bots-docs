"use client";
import Content from "@/components/content/content";
import NavWrapper from "@/components/navigation/nav-wrapper";
import UnderDevelopment from "@/components/placeholder/under-development";
import { useRefMap } from "@/hooks/useRefMap";
import { ContentHeaderType } from "@/types/content-header";

// ! update page name
export default function LinegraphPage() {
  // generate ref map using these names
  const refMap = useRefMap([]);

  // define content headers
  const headers: ContentHeaderType[] = [];

  return (
    <NavWrapper title="Linegraph" description="Under development" headers={headers}>
      <Content>
        <UnderDevelopment />
      </Content>
    </NavWrapper>
  );
}