import React from "react";
import NotificationItem from "components/MailNotification/NotificationItem";
import { notifications } from "components/MailNotification/data";
import Auxiliary from "util/Auxiliary";
import CustomScrollbars from "util/CustomScrollbars";

const MailNotification = () => {
  return (
    <Auxiliary>
      <div className="gx-popover-header">
        <h3 className="gx-mb-0">Messages</h3>
        <i className="gx-icon-btn icon icon-charvlet-down" />
      </div>
      <CustomScrollbars className="gx-popover-scroll">
        <ul className="gx-sub-popover">
          {notifications.map((notification, index) => (
            <NotificationItem key={index} notification={notification} />
          ))}
        </ul>
      </CustomScrollbars>
    </Auxiliary>
  );
};

export default MailNotification;
