import { Box } from "@mui/material";
import type { Metadata } from "next";

import { Header } from "@/components";
import ThemeRegistry from "@/theme/ThemeRegistry";
import { SxStyle } from "@/utils";

export const metadata: Metadata = {
  title: "Comparador de Salário",
  description: "Comparador de salário CLT x PJ",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body>
        <ThemeRegistry>
          <Header />

          <Box sx={SxBoxWrapper}>
            <Box sx={SxBoxAds}></Box>
            <Box sx={SxBoxContainer}>{children}</Box>
            <Box sx={SxBoxAds}></Box>
          </Box>
        </ThemeRegistry>
      </body>
    </html>
  );
}

const SxBoxWrapper = SxStyle({
  display: "flex",
});

const SxBoxContainer = SxStyle({
  width: "100%",
  minWidth: { xs: "100%", md: "900px" },
  my: 6,
  mx: "auto",
  px: 5,
});

const SxBoxAds = SxStyle({
  display: { xs: "none", md: "flex" },
  width: "100%",

  // backgroundColor: "grey.400",
});
