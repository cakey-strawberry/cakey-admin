import ConstructionIcon from "@mui/icons-material/Construction";
import { Typography } from "@mui/material";

import { PageHeader } from "@common/components/PageHeader/PageHeader";
import { PageLayout } from "@common/layouts/PageLayout";

export function User() {
  return (
    <PageLayout pageHeader={<PageHeader headerTitle="유저 관리" />}>
      <ConstructionIcon color="disabled" />
      <Typography variant="body1" component="p" color="text.secondary">
        개발 중입니다
      </Typography>
    </PageLayout>
  );
}
