import {
  AlignLeftOutlined,
  DownloadOutlined,
  FilterOutlined,
} from "@ant-design/icons";
import { Button } from "antd";
import styles from "./actionBar.module.css";

const ActionBar = () => {
  const actionBarButtons = [
    { icon: <DownloadOutlined />, text: "Export to PDF" },
    {
      icon: <AlignLeftOutlined />,
      text: (
        <span>
          Notes <span className={styles.numberOfNotes}>(3)</span>
        </span>
      ),
    },
    {
      icon: <FilterOutlined />,
      text: (
        <span>
          Filter<span className={styles.numberOfFilters}>9+</span>
        </span>
      ),
    },
  ];

  return (
    <div className={styles.actionBarWrapper}>
      <h2 className={styles.actionBarTitle}>Page title</h2>
      <div>
        {actionBarButtons.map((button, index) => (
          <Button key={index} size="large" className={styles.actionBarButton}>
            {button.text}
            {button.icon}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default ActionBar;
