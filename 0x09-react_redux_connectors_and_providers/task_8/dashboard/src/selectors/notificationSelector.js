import { createSelector } from "reselect";

// Selector to get the filter type selected from the state
export const filterTypeSelected = (state) => state.notifications.get("filter");

// Selector to get the notifications from the state
export const getNotifications = (state) => state.notifications.get("notifications");

// Selector to get unread notifications by type using Reselect
export const getUnreadNotificationsByType = createSelector(
  [filterTypeSelected, getNotifications],
  (filter, notifications) => {
    let notifs = [];
    if (filter === "DEFAULT") {
      notifs = notifications.valueSeq().filter(v => !v.isRead);
    } else if (filter === "URGENT") {
      notifs = notifications.valueSeq().filter(v => !v.isRead && v.type === "urgent");
    }
    return notifs;
  }
);
