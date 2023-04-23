import React, { useState } from 'react'
import { TopicTabsData } from '../../../constants';
import styles from './styles.module.css';
const TopicTabs = () => {
    const [selectedTab, setSelectedTab] = useState("session_plan");
    const handleTabChange = (tabName) => {
      setSelectedTab(tabName);
    };
    return (
      <div className={styles.tab_container}>
        <div className={styles.tabs}>
          {TopicTabsData.map(({ Icon, key, label }) => (
            <div
              onClick={() => handleTabChange(key)}
              className={`${styles.tab} ${
                key === selectedTab ? styles.selected_tab : ""
              }`}
              key={key}
            >
              <Icon isSelected={key === selectedTab} />
              <p className={styles.tab_title}>{label}</p>
            </div>
          ))}
        </div>
        <div className={styles.tab_content}>
          <h4 className={styles.tab_content_head}>Session plan</h4>
          <h6 className={styles.tab_content_sub}>
            LIVE session is about to start. Please stay tuned.
          </h6>
          <button className={styles.join_btn}>Join Live session</button>
          <h4 className={styles.tab_content_subhead}>Sub Topics</h4>
          <ol className={styles.list}>
            <li className={styles.list_item}>Soting and Indexing Dataframe</li>
            <li className={styles.list_item}>Filtering Dataframe</li>
            <li className={styles.list_item}>Usage of loc and iloc functions</li>
          </ol>
          <h4 className={styles.tab_content_subhead}>Session Details</h4>
        </div>
      </div>
    );
  };

  export default TopicTabs