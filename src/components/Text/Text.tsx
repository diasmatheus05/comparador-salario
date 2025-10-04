import { SxProps, Theme, Typography, TypographyVariant } from "@mui/material";
import { ReactNode } from "react";

export function Text({
  children,
  variant = "body2",
  styles,
}: {
  children: ReactNode;
  variant?: TypographyVariant;
  styles?: SxProps<Theme>;
}) {
  return (
    <Typography variant={variant} sx={styles}>
      {children}
    </Typography>
  );
}
