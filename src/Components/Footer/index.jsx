import { Typography } from "antd";

function AppFooter() {
  return (
    <div className="appFooter">
      <Typography.Link href="https://www.google.com" target="_blank">
        Privacy Policy
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">
        Terms and Conditions
      </Typography.Link>
      <Typography.Link href="https://www.google.com" target="_blank">
        Return Policy
      </Typography.Link>
      <Typography.Link href="tel-01-8723665" target="_blank">
        01-8723665
      </Typography.Link>
    </div>
  );
}
export default AppFooter;
